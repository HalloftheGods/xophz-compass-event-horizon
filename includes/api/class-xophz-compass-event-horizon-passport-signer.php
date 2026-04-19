<?php

/**
 * The Passport Signer API class
 *
 * Exposes an endpoint to cryptographically sign the MMO stats block
 * for the GlobalPlayerProfile Verifiable Credential.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */
class Xophz_Compass_Event_Horizon_Passport_Signer {

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$namespace = 'xophz/v1';
		$base      = 'passport/sign';

		register_rest_route( $namespace, '/' . $base, array(
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'sign_payload' ),
				'permission_callback' => array( $this, 'check_permission' ),
				'args'                => array(
					'mmo' => array(
						'required' => true,
						'type'     => 'object',
					),
				),
			),
		) );
	}

	/**
	 * Check if a given request has access to sign a payload.
	 *
	 * @param WP_REST_Request $request Full data about the request.
	 * @return WP_Error|bool
	 */
	public function check_permission( $request ) {
		// Only logged in users can get a signature for their stats
		return is_user_logged_in();
	}

	/**
	 * POST /xophz/v1/passport/sign
	 * Signs the provided MMO payload.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function sign_payload( $request ) {
		$mmo_data = $request->get_param( 'mmo' );

		// We stringify the array back to JSON strictly to hash it
		$json_string = wp_json_encode( $mmo_data );
		
		// Use WP salt to ensure the signature can only be verified by this server
		$salt = wp_salt( 'auth' );
		
		$signature = hash_hmac( 'sha256', $json_string, $salt );

		$proof = array(
			'issuer'    => $_SERVER['HTTP_HOST'] ?? 'unknown',
			'signature' => 'sig_' . $signature,
			'timestamp' => time() * 1000,
		);

		return rest_ensure_response( array(
			'success' => true,
			'proof'   => $proof
		) );
	}
}
