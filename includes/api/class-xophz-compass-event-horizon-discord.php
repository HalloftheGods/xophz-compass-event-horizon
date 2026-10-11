<?php

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Discord OAuth login and identity for YouMeOS.
 *
 * The client id and secret resolve server-side through the discord_client_id and
 * discord_client_secret connectors. The user's Discord access token never leaves the
 * server: it is kept in protected user meta and used only for server-side calls. The
 * browser gets Discord profile fields, its guild list and the WordPress session.
 */
class Xophz_Compass_Event_Horizon_Discord {

	const API_BASE     = 'https://discord.com/api';
	const ID_META      = 'discord_oauth_id';
	const TOKEN_META   = '_xophz_discord_oauth_token';
	const PROFILE_META = '_xophz_discord_profile';
	const GUILDS_CACHE = 'xophz_discord_guilds_';

	public function register_routes() {
		register_rest_route( 'xophz-compass/v1', '/discord/token', array(
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => array( $this, 'exchange_code' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/discord/me', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_me' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'disconnect' ),
				'permission_callback' => 'is_user_logged_in',
			),
		) );
	}

	/**
	 * The OAuth redirect URI is public configuration, not a credential.
	 */
	public static function redirect_uri(): string {
		if ( defined( 'DISCORD_REDIRECT_URI' ) ) {
			return (string) DISCORD_REDIRECT_URI;
		}

		return (string) ( $_ENV['DISCORD_REDIRECT_URI'] ?? get_option( 'discord_redirect_uri', '' ) );
	}

	public function exchange_code( WP_REST_Request $request ) {
		$code = (string) $request->get_param( 'code' );
		if ( $code === '' ) {
			return new WP_Error( 'missing_code', 'No authorization code provided.', array( 'status' => 400 ) );
		}

		$result = self::complete_login( $code );

		return is_wp_error( $result ) ? $result : rest_ensure_response( $result );
	}

	/**
	 * Exchanges an authorization code, signs the matching WordPress user in and keeps the
	 * Discord token server-side.
	 *
	 * @return array{discord_user: array, wp_user: array}|WP_Error
	 */
	public static function complete_login( string $code ) {
		$client_id     = Xophz_Compass_Event_Horizon_Connectors::get_key( 'discord_client_id' );
		$client_secret = Xophz_Compass_Event_Horizon_Connectors::get_key( 'discord_client_secret' );
		$redirect_uri  = self::redirect_uri();

		if ( $client_id === '' || $client_secret === '' || $redirect_uri === '' ) {
			return new WP_Error( 'missing_config', 'Discord is not configured. Set the Discord connectors in Settings > Connectors.', array( 'status' => 500 ) );
		}

		$response = wp_remote_post( self::API_BASE . '/oauth2/token', array(
			'timeout' => 15,
			'body'    => array(
				'client_id'     => $client_id,
				'client_secret' => $client_secret,
				'grant_type'    => 'authorization_code',
				'code'          => $code,
				'redirect_uri'  => $redirect_uri,
			),
		) );

		if ( is_wp_error( $response ) ) {
			return new WP_Error( 'discord_unreachable', 'Could not reach Discord.', array( 'status' => 502 ) );
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( ! is_array( $body ) || empty( $body['access_token'] ) ) {
			$reason = is_array( $body ) ? (string) ( $body['error_description'] ?? $body['error'] ?? '' ) : '';
			return new WP_Error( 'discord_api_error', $reason !== '' ? 'Discord API Error: ' . $reason : 'Discord did not return a token.', array( 'status' => 400 ) );
		}

		$access_token = (string) $body['access_token'];
		$discord_user = self::api_get( '/users/@me', $access_token );
		if ( is_wp_error( $discord_user ) ) {
			return $discord_user;
		}

		if ( empty( $discord_user['id'] ) ) {
			return new WP_Error( 'discord_no_id', 'No Discord ID associated with this account.', array( 'status' => 400 ) );
		}

		$user = self::resolve_user( $discord_user );
		if ( is_wp_error( $user ) ) {
			return $user;
		}

		$profile = self::profile_fields( $discord_user );
		update_user_meta( $user->ID, self::ID_META, $profile['id'] );
		update_user_meta( $user->ID, self::PROFILE_META, $profile );
		update_user_meta( $user->ID, self::TOKEN_META, array(
			'access_token' => $access_token,
			'expires_at'   => time() + max( 0, (int) ( $body['expires_in'] ?? 0 ) ),
		) );
		delete_transient( self::GUILDS_CACHE . $user->ID );

		wp_set_current_user( $user->ID );
		wp_set_auth_cookie( $user->ID, true );

		return array(
			'discord_user' => $profile,
			'wp_user'      => self::wp_user_payload( $user ),
		);
	}

	/**
	 * GET /xophz-compass/v1/discord/me: the signed-in user's Discord profile and guilds.
	 */
	public function get_me( WP_REST_Request $request ) {
		$user_id = get_current_user_id();
		$profile = get_user_meta( $user_id, self::PROFILE_META, true );
		$token   = self::stored_token( $user_id );

		if ( ! is_array( $profile ) || $token === '' ) {
			return rest_ensure_response( array( 'connected' => false, 'user' => null, 'guilds' => array() ) );
		}

		$guilds = get_transient( self::GUILDS_CACHE . $user_id );
		if ( ! is_array( $guilds ) ) {
			$raw = self::api_get( '/users/@me/guilds', $token );
			if ( is_wp_error( $raw ) && $raw->get_error_code() === 'discord_token_invalid' ) {
				self::forget( $user_id );
				return rest_ensure_response( array( 'connected' => false, 'user' => null, 'guilds' => array() ) );
			}

			$guilds = is_wp_error( $raw ) ? array() : array_values( array_map( array( __CLASS__, 'guild_fields' ), array_filter( $raw, 'is_array' ) ) );
			set_transient( self::GUILDS_CACHE . $user_id, $guilds, 5 * MINUTE_IN_SECONDS );
		}

		return rest_ensure_response( array( 'connected' => true, 'user' => $profile, 'guilds' => $guilds ) );
	}

	/**
	 * DELETE /xophz-compass/v1/discord/me: revokes and forgets the stored Discord token.
	 */
	public function disconnect( WP_REST_Request $request ) {
		$user_id = get_current_user_id();
		$token   = self::stored_token( $user_id );

		if ( $token !== '' ) {
			wp_remote_post( self::API_BASE . '/oauth2/token/revoke', array(
				'timeout' => 10,
				'body'    => array(
					'token'           => $token,
					'token_type_hint' => 'access_token',
					'client_id'       => Xophz_Compass_Event_Horizon_Connectors::get_key( 'discord_client_id' ),
					'client_secret'   => Xophz_Compass_Event_Horizon_Connectors::get_key( 'discord_client_secret' ),
				),
			) );
		}

		self::forget( $user_id );

		return rest_ensure_response( array( 'connected' => false ) );
	}

	private static function resolve_user( array $discord_user ) {
		if ( is_user_logged_in() ) {
			return wp_get_current_user();
		}

		$linked = get_users( array(
			'meta_key'   => self::ID_META,
			'meta_value' => (string) $discord_user['id'],
			'number'     => 1,
		) );
		if ( ! empty( $linked ) ) {
			return $linked[0];
		}

		// An email is trusted only when Discord has verified it. Otherwise anyone could put an
		// existing member's address on a Discord account and sign in as that member.
		$email = sanitize_email( (string) ( $discord_user['email'] ?? '' ) );
		if ( $email === '' ) {
			return new WP_Error( 'discord_no_email', 'No email associated with this Discord account.', array( 'status' => 400 ) );
		}
		if ( empty( $discord_user['verified'] ) ) {
			return new WP_Error( 'discord_email_unverified', 'Verify the email on your Discord account, then try again.', array( 'status' => 403 ) );
		}

		$user = get_user_by( 'email', $email );
		if ( $user ) {
			return $user;
		}

		$username = sanitize_user( (string) ( $discord_user['username'] ?? '' ), true );
		if ( $username === '' ) {
			$username = 'discord_' . preg_replace( '/\D/', '', (string) $discord_user['id'] );
		}
		if ( username_exists( $username ) ) {
			$username .= '_' . wp_generate_password( 4, false );
		}

		$user_id = wp_create_user( $username, wp_generate_password( 32, true, true ), $email );
		if ( is_wp_error( $user_id ) ) {
			return new WP_Error( 'discord_account_failed', 'Failed to create user account: ' . $user_id->get_error_message(), array( 'status' => 500 ) );
		}

		wp_update_user( array(
			'ID'           => $user_id,
			'display_name' => (string) ( $discord_user['global_name'] ?? $discord_user['username'] ?? $username ),
		) );

		return get_user_by( 'id', $user_id );
	}

	private static function api_get( string $path, string $access_token ) {
		$response = wp_remote_get( self::API_BASE . $path, array(
			'timeout' => 15,
			'headers' => array( 'Authorization' => 'Bearer ' . $access_token ),
		) );

		if ( is_wp_error( $response ) ) {
			return new WP_Error( 'discord_unreachable', 'Could not reach Discord.', array( 'status' => 502 ) );
		}

		$status = (int) wp_remote_retrieve_response_code( $response );
		if ( $status === 401 ) {
			return new WP_Error( 'discord_token_invalid', 'The Discord session has expired.', array( 'status' => 401 ) );
		}

		$data = json_decode( wp_remote_retrieve_body( $response ), true );
		if ( $status < 200 || $status >= 300 || ! is_array( $data ) ) {
			return new WP_Error( 'discord_api_error', 'Discord returned an error.', array( 'status' => 502 ) );
		}

		return $data;
	}

	private static function stored_token( int $user_id ): string {
		$stored = get_user_meta( $user_id, self::TOKEN_META, true );
		if ( ! is_array( $stored ) || empty( $stored['access_token'] ) ) {
			return '';
		}

		if ( ! empty( $stored['expires_at'] ) && (int) $stored['expires_at'] <= time() ) {
			self::forget( $user_id );
			return '';
		}

		return (string) $stored['access_token'];
	}

	private static function forget( int $user_id ): void {
		delete_user_meta( $user_id, self::TOKEN_META );
		delete_user_meta( $user_id, self::PROFILE_META );
		delete_transient( self::GUILDS_CACHE . $user_id );
	}

	private static function profile_fields( array $discord_user ): array {
		return array(
			'id'            => (string) ( $discord_user['id'] ?? '' ),
			'username'      => (string) ( $discord_user['username'] ?? '' ),
			'discriminator' => (string) ( $discord_user['discriminator'] ?? '' ),
			'global_name'   => (string) ( $discord_user['global_name'] ?? '' ),
			'avatar'        => isset( $discord_user['avatar'] ) ? (string) $discord_user['avatar'] : null,
		);
	}

	private static function guild_fields( array $guild ): array {
		return array(
			'id'       => (string) ( $guild['id'] ?? '' ),
			'name'     => (string) ( $guild['name'] ?? '' ),
			'icon'     => isset( $guild['icon'] ) ? (string) $guild['icon'] : null,
			'owner'    => ! empty( $guild['owner'] ),
			'features' => array_values( array_filter( (array) ( $guild['features'] ?? array() ), 'is_string' ) ),
		);
	}

	private static function wp_user_payload( WP_User $user ): array {
		$nonce = wp_create_nonce( 'wp_rest' );

		return array(
			'user_id'           => $user->ID,
			'user_email'        => $user->user_email,
			'user_nicename'     => $user->user_nicename,
			'user_display_name' => $user->display_name,
			'user_roles'        => $user->roles,
			'nonce'             => $nonce,
			'token'             => $nonce,
		);
	}
}
