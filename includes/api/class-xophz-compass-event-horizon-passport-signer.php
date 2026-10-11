<?php

/**
 * The Passport Signer API class
 *
 * Signs the MMO stats block of the GlobalPlayerProfile Verifiable Credential. The server
 * builds the claims itself from data it owns (the user's id and XP record), so the endpoint
 * can never be used to sign caller-chosen JSON. The HMAC key is derived from the auth salt
 * under a fixed label, so a passport signature cannot stand in for any other use of that salt.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */
class Xophz_Compass_Event_Horizon_Passport_Signer {

	const KEY_LABEL = 'xophz-event-horizon/passport-signer/v1';

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		register_rest_route( 'xophz/v1', '/passport/sign', array(
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'sign_payload' ),
				'permission_callback' => array( $this, 'check_permission' ),
			),
		) );
	}

	/**
	 * Signing your passport means reading your own profile, so it needs the `read` capability.
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return bool
	 */
	public function check_permission( $request ) {
		return current_user_can( 'read' );
	}

	/**
	 * POST /xophz/v1/passport/sign
	 * Signs server-built claims for the current user. Any request body is ignored.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response
	 */
	public function sign_payload( $request ) {
		$claims    = self::build_claims( get_current_user_id() );
		$signature = hash_hmac( 'sha256', (string) wp_json_encode( $claims ), self::signing_key() );

		return rest_ensure_response( array(
			'success' => true,
			'proof'   => array(
				'issuer'    => $claims['iss'],
				'signature' => 'sig_' . $signature,
				'timestamp' => $claims['iat'] * 1000,
				'claims'    => $claims,
			),
		) );
	}

	/**
	 * The only fields the passport attests: who, where, when, and the XP record the server keeps.
	 */
	private static function build_claims( int $user_id ): array {
		$xp = array(
			'total' => 0,
			'level' => 1,
			'title' => '',
		);

		if ( class_exists( 'Xophz_Compass_XP_Players' ) && method_exists( 'Xophz_Compass_XP_Players', 'get_user_stats' ) ) {
			$stats = (array) Xophz_Compass_XP_Players::get_user_stats( $user_id );
			$xp    = array(
				'total' => (int) ( $stats['total_xp'] ?? 0 ),
				'level' => (int) ( $stats['level'] ?? 1 ),
				'title' => sanitize_text_field( (string) ( $stats['title'] ?? '' ) ),
			);
		}

		return array(
			'iss' => (string) wp_parse_url( home_url(), PHP_URL_HOST ),
			'sub' => 'usr_' . $user_id,
			'iat' => time(),
			'xp'  => $xp,
		);
	}

	private static function signing_key(): string {
		return hash_hmac( 'sha256', self::KEY_LABEL, wp_salt( 'auth' ) );
	}
}
