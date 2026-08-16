<?php

/**
 * The Event Horizon Settings REST API Controller.
 *
 * Exposes endpoints for managing YouMeOS white-labeling, branding,
 * visual styles, sparks feature flags, and portal routing options.
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */
class Xophz_Compass_Event_Horizon_Settings {

	const OPTION_WHITELABEL   = 'youmeos_whitelabel_settings';
	const OPTION_VISUALS      = 'youmeos_visuals_settings';
	const OPTION_SPARKS       = 'youmeos_sparks_settings';
	const OPTION_ROUTING      = 'youmeos_routing_settings';
	const OPTION_AUDIO        = 'youmeos_audio_settings';
	const OPTION_INTEGRATIONS = 'youmeos_integrations_settings';

	/**
	 * Register the REST API routes.
	 */
	public function register_routes() {
		$namespace = 'xophz/v1';
		$base      = 'event-horizon/settings';

		register_rest_route( $namespace, '/' . $base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_settings' ),
				'permission_callback' => array( $this, 'read_permissions_check' ),
			),
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_settings' ),
				'permission_callback' => array( $this, 'write_permissions_check' ),
			),
		) );

		register_rest_route( $namespace, '/' . $base . '/reset', array(
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'reset_settings' ),
				'permission_callback' => array( $this, 'write_permissions_check' ),
			),
		) );
	}

	/**
	 * Permission check for reading settings.
	 */
	public function read_permissions_check() {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Permission check for updating settings.
	 */
	public function write_permissions_check() {
		return current_user_can( 'manage_options' );
	}

	/**
	 * Get default settings schema.
	 */
	public static function get_default_settings() {
		$site_name = get_bloginfo( 'name' );
		$site_desc = get_bloginfo( 'description' );

		return array(
			'whitelabel'   => array(
				'os_title'            => $site_name ? $site_name : 'YouMeOS',
				'os_tagline'          => $site_desc ? $site_desc : 'The Omega Source. Travel the YouMeverse without moving.',
				'logo_url'            => '',
				'icon_url'            => '',
				'splash_image_url'    => '',
				'splash_message'      => 'Initializing Cosmic Matrix...',
				'footer_text'         => 'Powered by YouMeOS',
				'show_powered_by'     => true,
				'custom_docs_url'     => '',
				'custom_support_url'  => '',
			),
			'visuals'      => array(
				'backdrop_mode'       => 'youniverse',
				'wallpaper_preset'    => 'neon-metropolis',
				'custom_wallpaper_url'=> '',
				'wallpaper_blur'      => 0,
				'wallpaper_brightness'=> 100,
				'theme_mode'          => 'luna',
				'accent_color'        => '#62c9ff',
				'enable_starfield'    => true,
				'starfield_density'   => 100,
			),
			'sparks'       => array(
				'sparks_matrix'       => array(),
				'bottom_right_spark'  => 'bubblegum',
			),
			'routing'      => array(
				'load_mode'              => get_option( 'youmeos_load_mode', 'routes_only' ),
				'load_page_id'           => (int) get_option( 'youmeos_load_page_id', 0 ),
				'custom_slug'            => get_option( 'youmeos_custom_slug', 'os' ),
				'enable_pi_trigger'      => (bool) get_option( 'youmeos_enable_pi_trigger', 1 ),
				'pi_trigger_position'    => 'bottom-right',
				'show_admin_bar_button'  => (bool) get_option( 'youmeos_show_admin_bar', 1 ),
				'og_title'               => $site_name ? $site_name : 'YouMeOS',
				'og_description'         => $site_desc ? $site_desc : 'The Omega Source. Travel the YouMeverse without moving.',
				'og_image'               => '',
			),
			'audio'        => array(
				'soundtrack_url'          => '',
				'sfx_pack'                => 'cyber-crisp',
				'default_volume'          => 50,
				'enable_ambient_autoplay' => false,
			),
			'integrations' => array(
				'google_client_id'          => (string) get_option( 'compass_google_client_id', get_option( 'google_client_id', defined( 'GOOGLE_CLIENT_ID' ) ? GOOGLE_CLIENT_ID : '' ) ),
				'google_redirect_uri'       => (string) get_option( 'google_redirect_uri', defined( 'GOOGLE_REDIRECT_URI' ) ? GOOGLE_REDIRECT_URI : '' ),
				'discord_client_id'         => (string) get_option( 'compass_discord_client_id', get_option( 'discord_client_id', defined( 'DISCORD_CLIENT_ID' ) ? DISCORD_CLIENT_ID : '' ) ),
				'discord_redirect_uri'      => (string) get_option( 'discord_redirect_uri', defined( 'DISCORD_REDIRECT_URI' ) ? DISCORD_REDIRECT_URI : '' ),
				'vapid_public_key'          => (string) get_option( 'compass_vapid_public_key', get_option( 'youmeos_vapid_public_key', '' ) ),
				'enable_blackbox_telemetry' => !empty( getenv('HOG_BLACKBOX_ACTIVE') ) || !empty( $_ENV['HOG_BLACKBOX_ACTIVE'] ),
			),
		);
	}

	/**
	 * Get current all-in-one settings.
	 */
	public function get_settings( $request = null ) {
		$defaults = self::get_default_settings();

		$whitelabel   = get_option( self::OPTION_WHITELABEL, array() );
		$visuals      = get_option( self::OPTION_VISUALS, array() );
		$sparks       = get_option( self::OPTION_SPARKS, array() );
		$routing      = get_option( self::OPTION_ROUTING, array() );
		$audio        = get_option( self::OPTION_AUDIO, array() );
		$integrations = get_option( self::OPTION_INTEGRATIONS, array() );

		$settings = array(
			'whitelabel'   => wp_parse_args( is_array( $whitelabel ) ? $whitelabel : array(), $defaults['whitelabel'] ),
			'visuals'      => wp_parse_args( is_array( $visuals ) ? $visuals : array(), $defaults['visuals'] ),
			'sparks'       => wp_parse_args( is_array( $sparks ) ? $sparks : array(), $defaults['sparks'] ),
			'routing'      => wp_parse_args( is_array( $routing ) ? $routing : array(), $defaults['routing'] ),
			'audio'        => wp_parse_args( is_array( $audio ) ? $audio : array(), $defaults['audio'] ),
			'integrations' => wp_parse_args( is_array( $integrations ) ? $integrations : array(), $defaults['integrations'] ),
		);

		return rest_ensure_response( array(
			'success'  => true,
			'settings' => $settings,
			'defaults' => $defaults,
		) );
	}

	/**
	 * Update settings.
	 */
	public function update_settings( $request ) {
		$body = $request->get_json_params();

		if ( empty( $body ) || ! is_array( $body ) ) {
			return new WP_Error( 'invalid_data', 'Invalid payload provided.', array( 'status' => 400 ) );
		}

		if ( isset( $body['whitelabel'] ) && is_array( $body['whitelabel'] ) ) {
			$sanitized_whitelabel = array(
				'os_title'           => sanitize_text_field( $body['whitelabel']['os_title'] ?? 'YouMeOS' ),
				'os_tagline'         => sanitize_text_field( $body['whitelabel']['os_tagline'] ?? '' ),
				'logo_url'           => esc_url_raw( $body['whitelabel']['logo_url'] ?? '' ),
				'icon_url'           => esc_url_raw( $body['whitelabel']['icon_url'] ?? '' ),
				'splash_image_url'   => esc_url_raw( $body['whitelabel']['splash_image_url'] ?? '' ),
				'splash_message'     => sanitize_text_field( $body['whitelabel']['splash_message'] ?? '' ),
				'footer_text'        => sanitize_text_field( $body['whitelabel']['footer_text'] ?? '' ),
				'show_powered_by'    => ! empty( $body['whitelabel']['show_powered_by'] ),
				'custom_docs_url'    => esc_url_raw( $body['whitelabel']['custom_docs_url'] ?? '' ),
				'custom_support_url' => esc_url_raw( $body['whitelabel']['custom_support_url'] ?? '' ),
			);
			update_option( self::OPTION_WHITELABEL, $sanitized_whitelabel );
		}

		if ( isset( $body['visuals'] ) && is_array( $body['visuals'] ) ) {
			$sanitized_visuals = array(
				'backdrop_mode'        => sanitize_key( $body['visuals']['backdrop_mode'] ?? 'youniverse' ),
				'wallpaper_preset'     => sanitize_key( $body['visuals']['wallpaper_preset'] ?? 'neon-metropolis' ),
				'custom_wallpaper_url' => esc_url_raw( $body['visuals']['custom_wallpaper_url'] ?? '' ),
				'wallpaper_blur'       => (int) ( $body['visuals']['wallpaper_blur'] ?? 0 ),
				'wallpaper_brightness' => (int) ( $body['visuals']['wallpaper_brightness'] ?? 100 ),
				'theme_mode'           => sanitize_key( $body['visuals']['theme_mode'] ?? 'luna' ),
				'accent_color'         => sanitize_hex_color( $body['visuals']['accent_color'] ?? '#62c9ff' ) ?: '#62c9ff',
				'enable_starfield'     => ! empty( $body['visuals']['enable_starfield'] ),
				'starfield_density'    => (int) ( $body['visuals']['starfield_density'] ?? 100 ),
			);
			update_option( self::OPTION_VISUALS, $sanitized_visuals );
		}

		if ( isset( $body['sparks'] ) && is_array( $body['sparks'] ) ) {
			$sanitized_sparks = array(
				'sparks_matrix'      => is_array( $body['sparks']['sparks_matrix'] ?? null ) ? $body['sparks']['sparks_matrix'] : array(),
				'bottom_right_spark' => sanitize_key( $body['sparks']['bottom_right_spark'] ?? 'bubblegum' ),
			);
			update_option( self::OPTION_SPARKS, $sanitized_sparks );
		}

		if ( isset( $body['routing'] ) && is_array( $body['routing'] ) ) {
			$load_mode       = sanitize_key( $body['routing']['load_mode'] ?? 'routes_only' );
			$load_page_id    = (int) ( $body['routing']['load_page_id'] ?? 0 );
			$custom_slug     = sanitize_title( $body['routing']['custom_slug'] ?? 'os' );
			$enable_pi       = ! empty( $body['routing']['enable_pi_trigger'] );
			$pi_position     = sanitize_key( $body['routing']['pi_trigger_position'] ?? 'bottom-right' );
			$show_admin_bar  = ! empty( $body['routing']['show_admin_bar_button'] );
			$og_title        = sanitize_text_field( $body['routing']['og_title'] ?? '' );
			$og_description  = sanitize_text_field( $body['routing']['og_description'] ?? '' );
			$og_image        = esc_url_raw( $body['routing']['og_image'] ?? '' );

			$sanitized_routing = array(
				'load_mode'             => $load_mode,
				'load_page_id'          => $load_page_id,
				'custom_slug'           => $custom_slug,
				'enable_pi_trigger'     => $enable_pi,
				'pi_trigger_position'   => $pi_position,
				'show_admin_bar_button' => $show_admin_bar,
				'og_title'              => $og_title,
				'og_description'        => $og_description,
				'og_image'              => $og_image,
			);
			update_option( self::OPTION_ROUTING, $sanitized_routing );

			// Sync with legacy standalone options for backward compatibility
			update_option( 'youmeos_load_mode', $load_mode );
			update_option( 'youmeos_load_page_id', $load_page_id );
			update_option( 'youmeos_custom_slug', $custom_slug );
			update_option( 'youmeos_enable_pi_trigger', $enable_pi ? 1 : 0 );
			update_option( 'youmeos_show_admin_bar', $show_admin_bar ? 1 : 0 );
			flush_rewrite_rules();
		}

		if ( isset( $body['audio'] ) && is_array( $body['audio'] ) ) {
			$sanitized_audio = array(
				'soundtrack_url'          => esc_url_raw( $body['audio']['soundtrack_url'] ?? '' ),
				'sfx_pack'                => sanitize_key( $body['audio']['sfx_pack'] ?? 'cyber-crisp' ),
				'default_volume'          => (int) ( $body['audio']['default_volume'] ?? 50 ),
				'enable_ambient_autoplay' => ! empty( $body['audio']['enable_ambient_autoplay'] ),
			);
			update_option( self::OPTION_AUDIO, $sanitized_audio );
		}

		if ( isset( $body['integrations'] ) && is_array( $body['integrations'] ) ) {
			$sanitized_integrations = array(
				'google_client_id'          => sanitize_text_field( $body['integrations']['google_client_id'] ?? '' ),
				'google_redirect_uri'       => esc_url_raw( $body['integrations']['google_redirect_uri'] ?? '' ),
				'discord_client_id'         => sanitize_text_field( $body['integrations']['discord_client_id'] ?? '' ),
				'discord_redirect_uri'      => esc_url_raw( $body['integrations']['discord_redirect_uri'] ?? '' ),
				'vapid_public_key'          => sanitize_text_field( $body['integrations']['vapid_public_key'] ?? '' ),
				'enable_blackbox_telemetry' => ! empty( $body['integrations']['enable_blackbox_telemetry'] ),
			);
			update_option( self::OPTION_INTEGRATIONS, $sanitized_integrations );

			// Dual-sync to WP Connectors canonical options & legacy options
			if ( isset( $body['integrations']['google_client_id'] ) ) {
				update_option( 'compass_google_client_id', $sanitized_integrations['google_client_id'] );
				update_option( 'google_client_id', $sanitized_integrations['google_client_id'] );
			}
			if ( isset( $body['integrations']['google_redirect_uri'] ) ) {
				update_option( 'google_redirect_uri', $sanitized_integrations['google_redirect_uri'] );
			}
			if ( isset( $body['integrations']['discord_client_id'] ) ) {
				update_option( 'compass_discord_client_id', $sanitized_integrations['discord_client_id'] );
				update_option( 'discord_client_id', $sanitized_integrations['discord_client_id'] );
			}
			if ( isset( $body['integrations']['discord_redirect_uri'] ) ) {
				update_option( 'discord_redirect_uri', $sanitized_integrations['discord_redirect_uri'] );
			}
			if ( isset( $body['integrations']['vapid_public_key'] ) ) {
				update_option( 'compass_vapid_public_key', $sanitized_integrations['vapid_public_key'] );
				update_option( 'youmeos_vapid_public_key', $sanitized_integrations['vapid_public_key'] );
			}
		}

		return $this->get_settings();
	}

	/**
	 * Reset all settings to factory defaults.
	 */
	public function reset_settings() {
		delete_option( self::OPTION_WHITELABEL );
		delete_option( self::OPTION_VISUALS );
		delete_option( self::OPTION_SPARKS );
		delete_option( self::OPTION_ROUTING );
		delete_option( self::OPTION_AUDIO );
		delete_option( self::OPTION_INTEGRATIONS );

		return $this->get_settings();
	}
}
