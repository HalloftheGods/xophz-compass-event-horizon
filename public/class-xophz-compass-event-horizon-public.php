<?php

class Xophz_Compass_Event_Horizon_Public {

	private $plugin_name;
	private $version;

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	public function register_shortcodes() {
		add_shortcode( 'youmeos', array( $this, 'render_shortcode' ) );
	}

	public function register_endpoints() {
		add_rewrite_rule( '^youmeos(/.*)?$', 'index.php?youmeos=1', 'top' );
		add_rewrite_rule( '^os(/.*)?$', 'index.php?os=1', 'top' );
	}

	public function register_query_vars( $vars ) {
		$vars[] = 'youmeos';
		$vars[] = 'os';
		return $vars;
	}

	public function expose_menus_to_rest( $args, $taxonomy_name ) {
		if ( 'nav_menu' === $taxonomy_name ) {
			$args['show_in_rest'] = true;
		}
		return $args;
	}

	public function expose_menu_items_to_rest( $args, $post_type ) {
		if ( 'nav_menu_item' === $post_type ) {
			$args['show_in_rest'] = true;
		}
		return $args;
	}

	public function allow_rest_menu_read_access( $has_access, $request = null ) {
		return true;
	}

	public function template_redirect() {
		global $wp_query;

		// Handle static asset requests for youmeos/legacy and youmeos/data
		$request_uri = $_SERVER['REQUEST_URI'] ?? '';
		
		// Handle Discord OAuth Callback
		if ( strpos( $request_uri, '/callback/discord' ) !== false ) {
			$this->render_discord_callback_page();
			exit;
		}

		// Handle Google OAuth Callback
		if ( strpos( $request_uri, '/callback/google' ) !== false ) {
			$this->render_google_callback_page();
			exit;
		}

		if ( 
			strpos( $request_uri, 'youmeos_legacy/' ) !== false || 
			strpos( $request_uri, 'youmeos_data/' ) !== false ||
			strpos( $request_uri, 'youmeos/legacy/' ) !== false ||
			strpos( $request_uri, 'youmeos/data/' ) !== false
		) {
			$this->serve_static_asset( $request_uri );
		}

		$menus = wp_get_nav_menus();
		$blocks = get_posts(['post_type' => 'wp_navigation', 'posts_per_page' => -1]);
		file_put_contents('/tmp/wp_menus_dump.json', json_encode(['traditional' => $menus, 'blocks' => $blocks]));
        
		$isRouteMatch = isset( $wp_query->query_vars['youmeos'] ) || isset( $wp_query->query_vars['os'] );
		$isConfiguredPageMatch = $this->is_configured_page();

		// Intercept 404s when in homepage mode so we can route SPA sub-paths.
		$loadMode = get_option( 'youmeos_load_mode', 'routes_only' );
		$isHomepage404Fallback = ( $loadMode === 'homepage' && is_404() );

		if ( $isRouteMatch || $isConfiguredPageMatch || $isHomepage404Fallback ) {
			$share_spark = isset($_GET['share_spark']) ? sanitize_text_field($_GET['share_spark']) : '';
			if (!empty($share_spark)) {
				$this->render_share_spark_interceptor($share_spark);
				exit;
			}

			$app_base = $this->resolve_app_base( $wp_query, $isRouteMatch );
			$this->render_youmeos_shell( $app_base );
			exit;
		}
	}

	private function render_discord_callback_page() {
		$code = $_GET['code'] ?? '';
		$error = $_GET['error'] ?? '';

		$status = 'processing';
		$message = 'Authenticating with Discord...';
		$payload = [];

		if ( $error ) {
			$status = 'error';
			$message = 'Discord Auth Error: ' . esc_html( $error );
		} elseif ( ! $code ) {
			$status = 'error';
			$message = 'No authorization code provided.';
		} else {
			$client_id     = defined( 'DISCORD_CLIENT_ID' ) ? DISCORD_CLIENT_ID : ( $_ENV['DISCORD_CLIENT_ID'] ?? get_option( 'discord_client_id' ) );
			$client_secret = defined( 'DISCORD_CLIENT_SECRET' ) ? DISCORD_CLIENT_SECRET : ( $_ENV['DISCORD_CLIENT_SECRET'] ?? get_option( 'discord_client_secret' ) );
			$redirect_uri  = defined( 'DISCORD_REDIRECT_URI' ) ? DISCORD_REDIRECT_URI : ( $_ENV['DISCORD_REDIRECT_URI'] ?? get_option( 'discord_redirect_uri' ) );

			if ( ! $client_id || ! $client_secret || ! $redirect_uri ) {
				$status = 'error';
				$message = 'Discord API configuration is missing.';
			} else {
				$response = wp_remote_post( 'https://discord.com/api/oauth2/token', array(
					'body' => array(
						'client_id' => $client_id,
						'client_secret' => $client_secret,
						'grant_type' => 'authorization_code',
						'code' => $code,
						'redirect_uri' => $redirect_uri,
					),
				) );

				if ( is_wp_error( $response ) ) {
					$status = 'error';
					$message = 'Failed to exchange Discord code: ' . $response->get_error_message();
				} else {
					$body = json_decode( wp_remote_retrieve_body( $response ), true );
					if ( isset( $body['error'] ) ) {
						$status = 'error';
						$message = 'Discord API Error: ' . ( $body['error_description'] ?? $body['error'] );
					} else {
						$access_token = $body['access_token'];
						$payload['token'] = $access_token;
						$status = 'success';
						$message = 'Discord authentication successful!';

						// Fetch user and auto-login
						$user_response = wp_remote_get( 'https://discord.com/api/users/@me', array(
							'headers' => array(
								'Authorization' => 'Bearer ' . $access_token,
							),
						) );

						if ( ! is_wp_error( $user_response ) ) {
							$discord_user = json_decode( wp_remote_retrieve_body( $user_response ), true );
							if ( isset( $discord_user['email'] ) ) {
								$user = get_user_by( 'email', $discord_user['email'] );

								if ( ! $user ) {
									$username = $discord_user['username'];
									if ( username_exists( $username ) ) {
										$username = $username . '_' . wp_generate_password( 4, false );
									}
									$password = wp_generate_password();
									$user_id = wp_create_user( $username, $password, $discord_user['email'] );
									
									if ( ! is_wp_error( $user_id ) ) {
										$user = get_user_by( 'id', $user_id );
										wp_update_user( array(
											'ID' => $user_id,
											'display_name' => $discord_user['global_name'] ?? $discord_user['username']
										) );
									}
								}

								if ( $user && ! is_wp_error( $user ) ) {
									wp_set_current_user( $user->ID );
									wp_set_auth_cookie( $user->ID, true );
									
									$payload['wp_user'] = array(
										'user_id' => $user->ID,
										'user_email' => $user->user_email,
										'user_nicename' => $user->user_nicename,
										'user_display_name' => $user->display_name,
										'user_roles' => $user->roles,
										'nonce' => wp_create_nonce( 'wp_rest' ),
										'token' => wp_create_nonce( 'wp_rest' )
									);
									$message = 'Login successful! Closing window...';
								}
							}
						}
					}
				}
			}
		}

		?>
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Discord Authentication</title>
			<style>
				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					background-color: #121212;
					color: #ffffff;
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100vh;
					margin: 0;
					text-align: center;
				}
				.container {
					background: #1e1e1e;
					padding: 2rem;
					border-radius: 12px;
					box-shadow: 0 4px 20px rgba(0,0,0,0.5);
					max-width: 400px;
					width: 100%;
				}
				.status-icon {
					font-size: 48px;
					margin-bottom: 1rem;
				}
				.success { color: #43b581; }
				.error { color: #f04747; }
				.processing { color: #7289da; animation: pulse 1.5s infinite; }
				
				@keyframes pulse {
					0% { opacity: 0.5; transform: scale(0.95); }
					50% { opacity: 1; transform: scale(1); }
					100% { opacity: 0.5; transform: scale(0.95); }
				}
			</style>
		</head>
		<body>
			<div class="container">
				<?php if ( $status === 'success' ): ?>
					<div class="status-icon success">✓</div>
				<?php elseif ( $status === 'error' ): ?>
					<div class="status-icon error">✗</div>
				<?php else: ?>
					<div class="status-icon processing">↻</div>
				<?php endif; ?>
				
				<h2>Discord Authentication</h2>
				<p><?php echo esc_html( $message ); ?></p>
				
				<script>
					// Send message back to parent window
					const payload = <?php echo json_encode( $payload ); ?>;
					const status = '<?php echo esc_js( $status ); ?>';
					
					if (window.opener) {
						if (status === 'success') {
							window.opener.postMessage({
								type: 'DISCORD_AUTH_SUCCESS',
								token: payload.token,
								wp_user: payload.wp_user
							}, '*');
						} else if (status === 'error') {
							window.opener.postMessage({
								type: 'DISCORD_AUTH_ERROR',
								message: '<?php echo esc_js( $message ); ?>'
							}, '*');
						}
						
						// Close popup after a short delay
						setTimeout(() => {
							window.close();
						}, 2000);
					} else {
						// Not opened as a popup, maybe redirect?
						setTimeout(() => {
							window.location.href = '/';
						}, 3000);
					}
				</script>
			</div>
		</body>
		</html>
		<?php
	}

	private function render_google_callback_page() {
		$code = $_GET['code'] ?? '';
		$error = $_GET['error'] ?? '';

		$status = 'processing';
		$message = 'Authenticating with Google...';
		$payload = [];

		if ( $error ) {
			$status = 'error';
			$message = 'Google Auth Error: ' . esc_html( $error );
		} elseif ( ! $code ) {
			$status = 'error';
			$message = 'No authorization code provided.';
		} else {
			$client_id     = defined( 'GOOGLE_CLIENT_ID' ) ? GOOGLE_CLIENT_ID : ( $_ENV['GOOGLE_CLIENT_ID'] ?? get_option( 'google_client_id' ) );
			$client_secret = defined( 'GOOGLE_CLIENT_SECRET' ) ? GOOGLE_CLIENT_SECRET : ( $_ENV['GOOGLE_CLIENT_SECRET'] ?? get_option( 'google_client_secret' ) );
			$redirect_uri  = defined( 'GOOGLE_REDIRECT_URI' ) ? GOOGLE_REDIRECT_URI : ( $_ENV['GOOGLE_REDIRECT_URI'] ?? get_option( 'google_redirect_uri' ) );

			if ( ! $client_id || ! $client_secret || ! $redirect_uri ) {
				$status = 'error';
				$message = 'Google API configuration is missing.';
			} else {
				$response = wp_remote_post( 'https://oauth2.googleapis.com/token', array(
					'body' => array(
						'client_id' => $client_id,
						'client_secret' => $client_secret,
						'grant_type' => 'authorization_code',
						'code' => $code,
						'redirect_uri' => $redirect_uri,
					),
				) );

				if ( is_wp_error( $response ) ) {
					$status = 'error';
					$message = 'Failed to exchange Google code: ' . $response->get_error_message();
				} else {
					$body = json_decode( wp_remote_retrieve_body( $response ), true );
					if ( isset( $body['error'] ) ) {
						$status = 'error';
						$message = 'Google API Error: ' . ( $body['error_description'] ?? $body['error'] );
					} else {
						$access_token = $body['access_token'];
						$payload['token'] = $access_token;
						$status = 'success';
						$message = 'Google authentication successful!';

						// Fetch user and auto-login
						$user_response = wp_remote_get( 'https://www.googleapis.com/oauth2/v2/userinfo', array(
							'headers' => array(
								'Authorization' => 'Bearer ' . $access_token,
							),
						) );

						if ( ! is_wp_error( $user_response ) ) {
							$google_user = json_decode( wp_remote_retrieve_body( $user_response ), true );
							if ( isset( $google_user['email'] ) ) {
								$user = get_user_by( 'email', $google_user['email'] );

								if ( ! $user ) {
									$email_parts = explode( '@', $google_user['email'] );
									$username = $email_parts[0];
									if ( username_exists( $username ) ) {
										$username = $username . '_' . wp_generate_password( 4, false );
									}
									$password = wp_generate_password();
									$user_id = wp_create_user( $username, $password, $google_user['email'] );
									
									if ( ! is_wp_error( $user_id ) ) {
										$user = get_user_by( 'id', $user_id );
										wp_update_user( array(
											'ID' => $user_id,
											'display_name' => $google_user['name'] ?? $username
										) );
									}
								}

								if ( $user && ! is_wp_error( $user ) ) {
									wp_set_current_user( $user->ID );
									wp_set_auth_cookie( $user->ID, true );
									
									$payload['wp_user'] = array(
										'user_id' => $user->ID,
										'user_email' => $user->user_email,
										'user_nicename' => $user->user_nicename,
										'user_display_name' => $user->display_name,
										'user_roles' => $user->roles,
										'nonce' => wp_create_nonce( 'wp_rest' ),
										'token' => wp_create_nonce( 'wp_rest' )
									);
									$message = 'Login successful! Closing window...';
								}
							}
						}
					}
				}
			}
		}

		?>
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Google Authentication</title>
			<style>
				body {
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					background-color: #121212;
					color: #ffffff;
					display: flex;
					align-items: center;
					justify-content: center;
					height: 100vh;
					margin: 0;
					text-align: center;
				}
				.container {
					background: #1e1e1e;
					padding: 2rem;
					border-radius: 12px;
					box-shadow: 0 4px 20px rgba(0,0,0,0.5);
					max-width: 400px;
					width: 100%;
				}
				.status-icon {
					font-size: 48px;
					margin-bottom: 1rem;
				}
				.success { color: #43b581; }
				.error { color: #f04747; }
				.processing { color: #7289da; animation: pulse 1.5s infinite; }
				
				@keyframes pulse {
					0% { opacity: 0.5; transform: scale(0.95); }
					50% { opacity: 1; transform: scale(1); }
					100% { opacity: 0.5; transform: scale(0.95); }
				}
			</style>
		</head>
		<body>
			<div class="container">
				<?php if ( $status === 'success' ): ?>
					<div class="status-icon success">✓</div>
				<?php elseif ( $status === 'error' ): ?>
					<div class="status-icon error">✗</div>
				<?php else: ?>
					<div class="status-icon processing">↻</div>
				<?php endif; ?>
				
				<h2>Google Authentication</h2>
				<p><?php echo esc_html( $message ); ?></p>
				
				<script>
					const payload = <?php echo json_encode( $payload ); ?>;
					const status = '<?php echo esc_js( $status ); ?>';
					
					if (window.opener) {
						if (status === 'success') {
							window.opener.postMessage({
								type: 'GOOGLE_AUTH_SUCCESS',
								token: payload.token,
								wp_user: payload.wp_user
							}, '*');
						} else if (status === 'error') {
							window.opener.postMessage({
								type: 'GOOGLE_AUTH_ERROR',
								message: '<?php echo esc_js( $message ); ?>'
							}, '*');
						}
						
						setTimeout(() => {
							window.close();
						}, 2000);
					} else {
						setTimeout(() => {
							window.location.href = '/';
						}, 3000);
					}
				</script>
			</div>
		</body>
		</html>
		<?php
	}

	private function serve_static_asset( $request_uri ) {
		$plugin_public_path = plugin_dir_path( __FILE__ ); // This is in public/ folder already
		
		// Remove query strings
		$clean_uri = explode( '?', $request_uri )[0];

		$relative_path = '';
		if ( strpos( $clean_uri, 'youmeos_legacy/' ) !== false ) {
			$relative_path = 'youmeos_legacy/' . explode( 'youmeos_legacy/', $clean_uri )[1];
		} elseif ( strpos( $clean_uri, 'youmeos_data/' ) !== false ) {
			$relative_path = 'youmeos_data/' . explode( 'youmeos_data/', $clean_uri )[1];
		} elseif ( strpos( $clean_uri, 'youmeos/legacy/' ) !== false ) {
			$relative_path = 'youmeos_legacy/' . explode( 'youmeos/legacy/', $clean_uri )[1];
		} elseif ( strpos( $clean_uri, 'youmeos/data/' ) !== false ) {
			$relative_path = 'youmeos_data/' . explode( 'youmeos/data/', $clean_uri )[1];
		}

		if ( empty( $relative_path ) ) {
			return;
		}

		$file_path = $plugin_public_path . $relative_path;

		// Fallback for critical data
		$is_manifest = strpos( $relative_path, 'manifest.json' ) !== false;
		
		if ( ! file_exists( $file_path ) || $is_manifest ) {
			// Check if we have a version in youmeos_data
			$filename = basename( $file_path );
			$data_fallback = $plugin_public_path . 'youmeos_data/' . $filename;
			
			if ( file_exists( $data_fallback ) ) {
				$file_path = $data_fallback;
			}
		}

		if ( file_exists( $file_path ) && ! is_dir( $file_path ) ) {
			$extension = strtolower( pathinfo( $file_path, PATHINFO_EXTENSION ) );
			$mime_types = [
				'js'   => 'application/javascript',
				'css'  => 'text/css',
				'json' => 'application/json',
				'png'  => 'image/png',
				'jpg'  => 'image/jpeg',
				'jpeg' => 'image/jpeg',
				'gif'  => 'image/gif',
				'svg'  => 'image/svg+xml',
				'fsh'  => 'text/plain',
				'vsh'  => 'text/plain',
				'ogg'  => 'audio/ogg',
				'webp' => 'image/webp',
				'woff' => 'font/woff',
				'woff2'=> 'font/woff2',
				'ttf'  => 'font/ttf',
				'eot'  => 'application/vnd.ms-fontobject',
			];

			$content_type = $mime_types[ $extension ] ?? 'application/octet-stream';
			
			header( "Content-Type: $content_type" );
			header( "Cache-Control: public, max-age=31536000" );
			readfile( $file_path );
			exit;
		}
	}

	private function get_youmeos_base_url( $path = '' ) {
		$loadMode = get_option( 'youmeos_load_mode', 'routes_only' );
		$base_url = home_url( '/youmeos/' );

		if ( $loadMode === 'homepage' ) {
			$base_url = home_url( '/' );
		} elseif ( $loadMode === 'specific_page' ) {
			$page_id = get_option( 'youmeos_load_page_id', 0 );
			if ( $page_id ) {
				$base_url = trailingslashit( get_permalink( $page_id ) );
			}
		}

		return $base_url . ltrim( $path, '/' );
	}

	public function inject_pi_trigger() {
		global $wp_query;
		$isRouteMatch = isset( $wp_query->query_vars['youmeos'] ) || isset( $wp_query->query_vars['os'] );
		
		if ( $isRouteMatch || $this->is_configured_page() ) {
			return;
		}

		$current_url = home_url( $_SERVER['REQUEST_URI'] ?? '' );
		$base_url = rtrim( $this->get_youmeos_base_url(), '/' );
		$separator = ( parse_url( $base_url, PHP_URL_QUERY ) == null ) ? '?' : '&';
		$target_url = $base_url . $separator . 'sparks=logos&logos_target=' . urlencode( $current_url );
		?>
		<style>
			#youmeos-pi-trigger {
				position: fixed;
				bottom: 12px;
				left: 18px;
				font-size: 24px;
				color: rgba(98, 201, 255, 0.4);
				text-decoration: none;
				z-index: 999999;
				cursor: pointer;
				font-family: monospace;
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 8px;
				line-height: 1;
				user-select: none;
				filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.15));
			}
			#youmeos-pi-trigger .pi-symbol {
				transition: transform 0.3s ease;
				display: inline-block;
			}
			#youmeos-pi-trigger:hover .pi-symbol,
			#youmeos-pi-trigger:hover .pi-text {
				background: linear-gradient(135deg, #62c9ff 0%, #a78bfa 100%);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				color: transparent;
			}
			#youmeos-pi-trigger:hover .pi-symbol {
				transform: rotate(180deg);
			}
			#youmeos-pi-trigger .pi-text {
				max-width: 0;
				overflow: hidden;
				opacity: 0;
				white-space: nowrap;
				transition: max-width 0.3s ease, opacity 0.3s ease;
				font-size: 18px;
				display: inline-block;
				margin-top: 3px;
			}
			#youmeos-pi-trigger:hover .pi-text {
				max-width: 80px;
				opacity: 1;
			}
		</style>
		<a id="youmeos-pi-trigger" href="<?php echo esc_url( $target_url ); ?>" title="Load YouMeOS">
			<span class="pi-symbol">π</span>
			<span class="pi-text">meos</span>
		</a>
		<?php
	}

	private function is_configured_page() {
		$loadMode = get_option( 'youmeos_load_mode', 'routes_only' );

		$isHomepageMode = $loadMode === 'homepage' && is_front_page();

		$targetPageId = (int) get_option( 'youmeos_load_page_id', 0 );
		$isSpecificPageMode = $loadMode === 'specific_page' && $targetPageId > 0 && is_page( $targetPageId );

		return $isHomepageMode || $isSpecificPageMode;
	}

	private function resolve_app_base( $wp_query, $isRouteMatch ) {
		if ( $isRouteMatch ) {
			return isset( $wp_query->query_vars['youmeos'] ) ? 'youmeos' : 'os';
		}

		$loadMode = get_option( 'youmeos_load_mode', 'routes_only' );
		$isHomepage = $loadMode === 'homepage';

		if ( $isHomepage ) {
			return '';
		}

		$requestPath = trim( parse_url( $_SERVER['REQUEST_URI'], PHP_URL_PATH ) ?: '', '/' );
		return $requestPath;
	}

	private function render_youmeos_shell( $app_base ) {
		show_admin_bar( false );

		$current_user = wp_get_current_user();
		$home_url = home_url();
		$site_path = parse_url( $home_url, PHP_URL_PATH ) ?: '';
		$site_path = rtrim( $site_path, '/' );
		$plugin_rel_path = parse_url( plugin_dir_url( __FILE__ ), PHP_URL_PATH );
		$rest_rel_path = parse_url( get_rest_url(), PHP_URL_PATH );

		$compassVersion = defined('XOPHZ_COMPASS_VERSION') ? XOPHZ_COMPASS_VERSION : '0.0.0';

		$settings = [
			'currentUser' => [
				'ID' => $current_user->ID,
				'admin_color' => get_user_option( 'admin_color', $current_user->ID ),
				'roles' => $current_user->roles,
				'display_name' => $current_user->display_name,
				'user_email' => $current_user->user_email,
				'user_nicename' => $current_user->user_nicename,
				'registered' => $current_user->user_registered,
			],
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'restUrl' => $rest_rel_path,
			'sitePath' => $site_path,
			'appBase' => $app_base,
			'homeUrl' => $home_url,
			'loadMode' => get_option( 'youmeos_load_mode', 'routes_only' ),
			'isBlackboxCertified' => !empty( getenv('HOG_BLACKBOX_ACTIVE') ) || !empty( $_ENV['HOG_BLACKBOX_ACTIVE'] ),
			'youmeosBaseUrl' => rtrim( $plugin_rel_path, '/' ) . '/deprecated',
			'youmeosDataUrl' => rtrim( $plugin_rel_path, '/' ) . '/youmeos_data',
			'compassVersion' => $compassVersion,
			'eventHorizonVersion' => $this->version,
			'googleClientId' => defined( 'GOOGLE_CLIENT_ID' ) ? GOOGLE_CLIENT_ID : ( $_ENV['GOOGLE_CLIENT_ID'] ?? get_option( 'google_client_id' ) ),
			'googleRedirectUri' => defined( 'GOOGLE_REDIRECT_URI' ) ? GOOGLE_REDIRECT_URI : ( $_ENV['GOOGLE_REDIRECT_URI'] ?? get_option( 'google_redirect_uri' ) ),
			'discordClientId' => defined( 'DISCORD_CLIENT_ID' ) ? DISCORD_CLIENT_ID : ( $_ENV['DISCORD_CLIENT_ID'] ?? get_option( 'discord_client_id' ) ),
			'discordRedirectUri' => defined( 'DISCORD_REDIRECT_URI' ) ? DISCORD_REDIRECT_URI : ( $_ENV['DISCORD_REDIRECT_URI'] ?? get_option( 'discord_redirect_uri' ) ),
		];

		$og_title = get_option( 'youmeos_og_title', '' );
		if ( empty( $og_title ) ) {
			$og_title = get_bloginfo( 'name' );
			if ( empty( $og_title ) ) $og_title = 'YouMeOS';
		}

		$og_desc = get_option( 'youmeos_og_description', '' );
		if ( empty( $og_desc ) ) {
			$og_desc = 'The Omega Source. Travel the YouMeverse without moving.';
		}

		$og_image = get_option( 'youmeos_og_image', '' );
		if ( empty( $og_image ) ) {
			$og_image = plugins_url( 'images/takemymoney.jpg', __FILE__ );
		}

		$current_url = home_url( $_SERVER['REQUEST_URI'] ?? '' );

		?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
<meta name="google" content="notranslate">
<meta name="description" content="<?php echo esc_attr( $og_desc ); ?>">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="<?php echo esc_url( $current_url ); ?>">
<meta property="og:title" content="<?php echo esc_attr( $og_title ); ?>">
<meta property="og:description" content="<?php echo esc_attr( $og_desc ); ?>">
<meta property="og:image" content="<?php echo esc_url( $og_image ); ?>">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="<?php echo esc_url( $current_url ); ?>">
<meta name="twitter:title" content="<?php echo esc_attr( $og_title ); ?>">
<meta name="twitter:description" content="<?php echo esc_attr( $og_desc ); ?>">
<meta name="twitter:image" content="<?php echo esc_url( $og_image ); ?>">

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YHY2WZFMDM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YHY2WZFMDM');
</script>

<?php 
$raw_sparks = isset($_GET['sparks']) ? wp_unslash($_GET['sparks']) : '';
$spark_id = sanitize_text_field($raw_sparks);
$is_lite = (isset($_GET['fullscreen']) && $_GET['fullscreen'] === 'true');
$page_title = $og_title;

if (!empty($raw_sparks)) {
	$decoded = json_decode($raw_sparks, true);
	$s_name = '';
	if (is_array($decoded) && isset($decoded[0][0])) {
		$s_name = $decoded[0][0];
	} elseif (is_array($decoded) && isset($decoded[0]) && is_string($decoded[0])) {
		$s_name = $decoded[0];
	} elseif (!is_array($decoded)) {
		$s_name = $spark_id;
	}
	if (!empty($s_name)) {
		$spark_id = $s_name; // Use clean name for manifest
		if ($is_lite) {
			$page_title = ucwords(str_replace('-', ' ', $s_name));
		}
	}
}

// For the manifest URL, we pass the spark_id if present, else empty for the main OS
$manifest_url = rest_url( 'xophz-compass/v1/spark-manifest' );
if (!empty($spark_id)) {
	$manifest_url .= '?spark=' . $spark_id;
}
?>
<link rel="manifest" href="<?php echo esc_url( $manifest_url ); ?>">

<title><?php echo esc_html( $page_title ); ?></title>
<style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
    #youmeos-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
	<?php if ($is_lite): ?>
	:root {
		--loader-start-bg: #ffffff;
	}
	@media (prefers-color-scheme: dark) {
		:root {
			--loader-start-bg: #121212;
		}
	}
	body {
		background: linear-gradient(135deg, 
			#000 0%, 
			#000 25%, 
			rgba(255,255,255,0.15) 30%, 
			#000 35%, 
			#000 65%, 
			var(--loader-start-bg) 80%, 
			var(--loader-start-bg) 100%
		);
		background-size: 500% 500%;
		background-position: 100% 100%;
		animation: spark-shine 5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
	}
	@keyframes spark-shine {
		0% { background-position: 100% 100%; }
		100% { background-position: 0% 0%; }
	}
	<?php endif; ?>
</style>
<script src="https://cdn.jsdelivr.net/npm/driver.js@1.3.1/dist/driver.js.iife.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.3.1/dist/driver.css"/>
<script>window.xophzCompassSettings = <?php echo json_encode($settings); ?>;</script>

<?php if ( $this->is_dev_server() ) : ?>
    <script type="module" src="http://localhost:9000/@vite/client"></script>
    <script type="module" src="http://localhost:9000/apps/youmeos/mount-youmeos.ts"></script>
<?php else : 
    $manifest_path = plugin_dir_path( __FILE__ ) . 'dist/.vite/manifest.json';
    $manifest = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : null;
    $entry_js = isset($manifest['apps/youmeos/index.html']) ? 'dist/' . $manifest['apps/youmeos/index.html']['file'] : 'dist/js/youmeos.js';
    ?>
    <script type="module" src="<?php echo rtrim( $plugin_rel_path, '/' ) . '/' . $entry_js; ?>"></script>
    <?php if (isset($manifest['apps/youmeos/index.html']['css'])) : 
        foreach ($manifest['apps/youmeos/index.html']['css'] as $css_file) : ?>
            <link rel="stylesheet" href="<?php echo rtrim( $plugin_rel_path, '/' ) . '/dist/' . $css_file; ?>">
        <?php endforeach; 
    endif; ?>
<?php endif; ?>

</head>
<body>
<div id="youmeos-container"></div>
</body>
</html><?php
	}

	private function render_share_spark_interceptor( $spark_id ) {
		$width = isset($_GET['width']) ? (int)$_GET['width'] : 800;
		$height = isset($_GET['height']) ? (int)$_GET['height'] : 600;
		$spark_icon = isset($_GET['icon']) ? sanitize_text_field($_GET['icon']) : 'fal fa-sparkles';
		$plugin_rel_path = plugin_dir_url( __FILE__ );
		
		// Build the URL to launch
		$launch_url = esc_url_raw( add_query_arg( [
			'sparks' => $spark_id,
			'fullscreen' => 'true',
			'wormhole_toast' => 'true'
		], remove_query_arg( ['share_spark', 'width', 'height', 'icon'] ) ) );
		
		?>
		<!DOCTYPE html>
		<head>
			<!-- Google tag (gtag.js) -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-YHY2WZFMDM"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-YHY2WZFMDM');
			</script>

			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
			<title>Incoming <?php echo esc_html(ucwords(str_replace('-', ' ', $spark_id))); ?> | YouMeOS</title>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
			<script src="https://cdn.jsdelivr.net/npm/driver.js@1.3.1/dist/driver.js.iife.js"></script>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/driver.js@1.3.1/dist/driver.css"/>
			<link rel="preconnect" href="https://fonts.googleapis.com">
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
			<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600&display=swap" rel="stylesheet">
			
			<?php if ( $this->is_dev_server() ) : ?>
				<script type="module" src="http://localhost:9000/@vite/client"></script>
				<script type="module" src="http://localhost:9000/apps/youmeos/styles/_vendor.scss"></script>
			<?php else : 
				$manifest_path = plugin_dir_path( __FILE__ ) . 'dist/.vite/manifest.json';
				$manifest = file_exists($manifest_path) ? json_decode(file_get_contents($manifest_path), true) : null;
				if (isset($manifest['apps/youmeos/index.html']['css'])) : 
					foreach ($manifest['apps/youmeos/index.html']['css'] as $css_file) : ?>
						<link rel="stylesheet" href="<?php echo rtrim( $plugin_rel_path, '/' ) . '/dist/' . $css_file; ?>">
					<?php endforeach; 
				endif;
			endif; ?>

			<style>
				@font-face {
					font-family: 'LCD14';
					src: url('<?php echo plugins_url('fonts/LCD14.otf', __FILE__); ?>') format('opentype');
				}
				body, html {
					margin: 0; padding: 0; width: 100%; height: 100%; 
					background: #000; color: #fff;
					font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					display: flex; align-items: center; justify-content: center;
					overflow: hidden;
				}
				.glass-panel {
					background: rgba(25, 25, 30, 0.6);
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					border: 1px solid rgba(255,255,255,0.1);
					border-radius: 16px;
					padding: 48px;
					text-align: center;
					box-shadow: 0 24px 48px rgba(0,0,0,0.5);
					max-width: 480px;
					width: 90%;
					display: none; /* Hidden by default until we know auto-launch failed */
					position: relative;
					z-index: 10;
				}
				h1 {
					font-weight: 300;
					margin: 0 0 16px 0;
					font-size: 32px;
				}
				p {
					opacity: 0.7;
					line-height: 1.5;
					margin: 0 0 32px 0;
				}
				button {
					background: #62c9ff;
					color: #000;
					border: none;
					padding: 16px 32px;
					font-size: 18px;
					font-weight: bold;
					border-radius: 8px;
					cursor: pointer;
					transition: all 0.2s;
					box-shadow: 0 4px 12px rgba(98, 201, 255, 0.3);
				}
				button:hover {
					background: #7bd4ff;
					transform: translateY(-2px);
					box-shadow: 0 8px 16px rgba(98, 201, 255, 0.4);
				}
				.icon {
					font-size: 64px;
					margin-bottom: 24px;
					color: #62c9ff;
				}
				#bg-container {
					position: absolute;
					top: 0; left: 0;
					width: 100%; height: 100%;
					z-index: 0;
				}
				.glass-panel {
					position: absolute;
					top: 50%; left: 50%;
					transform: translate(-50%, -50%);
					background: rgba(25, 25, 30, 0.6);
					backdrop-filter: blur(20px);
					-webkit-backdrop-filter: blur(20px);
					border: 1px solid rgba(255,255,255,0.1);
					border-radius: 16px;
					padding: 40px;
					text-align: center;
					z-index: 10;
				}
				#nostalgia-text {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 5;
					display: none;
					align-items: center;
					justify-content: center;
					gap: 32px;
					flex-direction: row;
				}
				#nostalgia-quote {
					position: absolute;
					top: calc(50% + 140px);
					left: 50%;
					transform: translateX(-50%);
					z-index: 5;
					display: none;
					color: rgba(255, 255, 255, 0.4);
					font-family: "Outfit", sans-serif;
					font-style: italic;
					font-size: 16px;
					letter-spacing: 1px;
					text-align: center;
				}
				.nostalgia-icon i {
					font-size: 64px;
					background: linear-gradient(135deg, #fceaba 0%, #d9be6f 50%, #88733a 100%);
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent;
					color: transparent;
				}
				.nostalgia-icon {
					filter: drop-shadow(0 0 15px rgba(217, 190, 111, 0.4));
				}
				.nostalgia-divider {
					width: 1px;
					height: 80px;
					background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
				}
				.notice {
					font-size: 24px;
					font-weight: 200;
					opacity: 0.8;
					color: #ffffff;
					letter-spacing: 1px;
					font-family: "Source Sans Pro", -apple-system, sans-serif;
					text-shadow: 0 4px 12px rgba(0,0,0,0.8);
					line-height: 1.5;
					max-width: 400px;
					text-align: left;
				}
				.brand-lockup {
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: center;
					margin-bottom: 32px;
				}
				.brand-lockup .brand-y-logo {
					height: 100px;
					width: auto;
					filter: drop-shadow(0 0 20px rgba(61, 238, 152, 0.4));
					margin-right: -10px;
					margin-top: -10px;
				}
				.brand-lockup .brand-title {
					font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
					font-size: 72px;
					font-weight: 200;
					margin: 0;
					letter-spacing: 4px;
					line-height: 1;
					background: linear-gradient(to right, #d56eff 0%, #ffd700 40%, #00f2fe 75%, #2962ff 100%);
					background-size: 800px 100%;
					background-position: center;
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
					color: transparent;
					filter: drop-shadow(0 0 15px rgba(213, 110, 255, 0.5)) drop-shadow(0 0 30px rgba(41, 98, 255, 0.4));
				}
			</style>
		</head>
		<body>
			<div id="bg-container"></div>
			
			<div id="nostalgia-text">
				<div class="nostalgia-icon">
					<img src="<?php echo plugins_url( 'dist/omega-logox300.png', __FILE__ ); ?>" alt="Omega Logo" class="omega-spin" style="width: 160px; height: 160px;">
				</div>
				<div class="nostalgia-divider"></div>
				<div class="notice">
					Space &amp; Time fold coarse...<br>
					A Wormhole Opens Source...<br>
					Through this rough G-force...<br>
					<strong style="color: #d9be6f; text-transform: uppercase; font-weight: 400;">
					<?php echo esc_html(str_replace('-', ' ', $spark_id)); ?></strong>
					... stays the course ...
				</div>
			</div>

			<div id="nostalgia-quote">
				"It's a 'Wormhole' OS!" 2006 ~X
			</div>

			<div id="footer-logo" style="display: none; position: absolute; bottom: 32px; left: 50%; transform: translateX(-50%); z-index: 5; flex-direction: column; align-items: center; text-align: center;">
				<a href="https://www.youmeos.com" target="_blank" class="brand-lockup" style="margin-bottom: 0; text-decoration: none; display: flex; flex-direction: row; align-items: center; justify-content: center;">
					<img src="<?php echo plugins_url('../admin/images/youmeos-logo.png', __FILE__); ?>" alt="Y" class="brand-y-logo" style="height: 60px;">
					<div class="brand-title" style="font-size: 42px;">ouMeOS</div>
				</a>
				<div class="copyright" style="font-size: 12px; opacity: 0.8; margin-top: 8px; letter-spacing: 1px;">
					&copy; <?php echo date('Y'); ?> <a href="https://www.hallofthegods.com" target="_blank" style="color: #d9be6f; text-decoration: none; font-weight: bold; transition: opacity 0.2s;">Hall of the Gods, Inc.</a>
				</div>
				<div class="version" style="font-size: 10px; opacity: 0.5; margin-top: 4px; font-family: 'Outfit', sans-serif; letter-spacing: 2px;">
					v<?php echo defined('XOPHZ_COMPASS_EVENT_HORIZON_VERSION') ? XOPHZ_COMPASS_EVENT_HORIZON_VERSION : '1.0.0'; ?>
				</div>
			</div>
			
			<div class="glass-panel" id="ui-panel">
				<div class="icon">🚀</div>
				<h1>Incoming Spark</h1>
				<p>Your browser blocked the automatic launch. Click below to open your secure sandbox window.</p>
				<button onclick="launchSpark()">Launch Spark</button>
			</div>

			<script>
				// Build robust launch URL via JS to prevent PHP encoding bugs from corrupting the query string
				const launchUrl = new URL(window.location.href);
				launchUrl.searchParams.delete('share_spark');
				launchUrl.searchParams.delete('width');
				launchUrl.searchParams.delete('height');
				launchUrl.searchParams.delete('icon');
				launchUrl.searchParams.set('sparks', '<?php echo esc_js($spark_id); ?>');
				launchUrl.searchParams.set('fullscreen', 'true');
				launchUrl.searchParams.set('wormhole_toast', 'true');
				
				const url = launchUrl.toString();
				const width = <?php echo $width; ?>;
				const height = <?php echo $height; ?>;

				// --- Three.js Wormhole Logic ---
				function initWormhole() {
					const container = document.getElementById('bg-container');
					if (!window.THREE) return;

					const scene = new THREE.Scene();
					scene.fog = new THREE.FogExp2(0x000000, 0.0005);

					const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 4000);
					camera.position.z = 0;

					const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
					renderer.setSize(window.innerWidth, window.innerHeight);
					renderer.setPixelRatio(window.devicePixelRatio);
					container.appendChild(renderer.domElement);

					const particleCount = 3000;
					const particles = new THREE.BufferGeometry();
					const posArray = new Float32Array(particleCount * 3);
					const colorsArray = new Float32Array(particleCount * 3);
					const dataArray = [];

					const numArms = 24; 
					const color = new THREE.Color();

					for (let i = 0; i < particleCount; i++) {
						// Start all particles far down the tunnel so they emerge from the black fog
						// and haven't passed the user yet.
						const z = -1000 - (Math.random() * 4000);
						const arm = Math.floor(Math.random() * numArms);
						const angle = ((Math.PI * 2) / numArms) * arm + z * 0.002 + (Math.random() - 0.5) * 0.2;
						
						// Epic wide tunnel (was 90 + Math.random() * 4)
						const radius = 450 + Math.random() * 60;

						dataArray.push({ angle, radius, z, speedOffset: Math.random() });

						const hue = Math.random();
						color.setHSL(hue, 0.9, 0.75);

						colorsArray[i * 3] = color.r;
						colorsArray[i * 3 + 1] = color.g;
						colorsArray[i * 3 + 2] = color.b;
					}

					particles.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
					particles.setAttribute("color", new THREE.BufferAttribute(colorsArray, 3));

					const canvasObj = document.createElement("canvas");
					canvasObj.width = 32;
					canvasObj.height = 32;
					const context = canvasObj.getContext("2d");
					const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
					gradient.addColorStop(0, "rgba(255,255,255,1)");
					gradient.addColorStop(0.2, "rgba(255,255,255,0.8)");
					gradient.addColorStop(0.5, "rgba(255,255,255,0.2)");
					gradient.addColorStop(1, "rgba(0,0,0,0)");
					context.fillStyle = gradient;
					context.fillRect(0, 0, 32, 32);
					const texture = new THREE.CanvasTexture(canvasObj);

					const particleMaterial = new THREE.PointsMaterial({
						size: 10.0,
						vertexColors: true,
						transparent: true,
						opacity: 1.0,
						map: texture,
						blending: THREE.AdditiveBlending,
						depthWrite: false
					});

					const particleMesh = new THREE.Points(particles, particleMaterial);
					scene.add(particleMesh);

					window.addEventListener('resize', () => {
						camera.aspect = window.innerWidth / window.innerHeight;
						camera.updateProjectionMatrix();
						renderer.setSize(window.innerWidth, window.innerHeight);
					});

					let time = 0;
					const animate = () => {
						requestAnimationFrame(animate);
						time += 0.006;

						const positions = particleMesh.geometry.attributes.position.array;

						for (let i = 0; i < particleCount; i++) {
							const p = dataArray[i];
							p.z += 8.0 + p.speedOffset * 6.0;
							if (p.z > 200) p.z -= 4000;
							p.angle -= 0.008;

							const curveX = Math.sin(p.z * 0.001 + time * 0.5) * 40;
							const curveY = Math.cos(p.z * 0.001 + time * 0.4) * 40;

							positions[i * 3] = Math.cos(p.angle) * p.radius + curveX;
							positions[i * 3 + 1] = Math.sin(p.angle) * p.radius + curveY;
							positions[i * 3 + 2] = p.z;
						}

						particleMesh.geometry.attributes.position.needsUpdate = true;

						camera.position.x = Math.sin(time * 0.5) * 10;
						camera.position.y = Math.cos(time * 0.4) * 10;

						camera.lookAt(
							Math.sin(-1000 * 0.001 + time * 0.5) * 40,
							Math.cos(-1000 * 0.001 + time * 0.4) * 40,
							-1000
						);

						camera.rotation.z = Math.sin(time * 0.5) * 0.3;
						renderer.render(scene, camera);
					};
					animate();
				}

				initWormhole();
				// ------------------------------
				
				function showInterceptorUI() {
					const nostalgia = document.getElementById('nostalgia-text');
					nostalgia.style.display = 'flex';

					const quote = document.getElementById('nostalgia-quote');
					if (quote) quote.style.display = 'block';

					const footerLogo = document.getElementById('footer-logo');
					if (footerLogo) footerLogo.style.display = 'flex';
				}

				function getCenteredCoordinates(w, h) {
					const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
					const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

					const windowWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
					const windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

					const systemZoom = windowWidth / window.screen.availWidth;
					const left = Math.round((windowWidth - w) / 2 / systemZoom + dualScreenLeft);
					const top = Math.round((windowHeight - h) / 2 / systemZoom + dualScreenTop);

					return { left, top };
				}

				function launchSpark() {
					const { left, top } = getCenteredCoordinates(width, height);
					window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
					
					// Hide the UI to reveal the pure canvas
					const panel = document.getElementById('ui-panel');
					panel.style.display = 'none';
					
					showInterceptorUI();
				}

				// Attempt auto-launch
				window.onload = function() {
					setTimeout(() => {
						const { left, top } = getCenteredCoordinates(width, height);
						const popup = window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
						
						const panel = document.getElementById('ui-panel');
						if (!popup || popup.closed || typeof popup.closed === 'undefined') {
							// Popup blocked, show the manual launch card
							panel.style.display = 'block';
						} else {
							// Successfully auto-launched, leave the card hidden so they just see the wormhole!
							panel.style.display = 'none';
							showInterceptorUI();
						}
					}, 100);
				};
			</script>
		</html>
		<?php
	}

	private function is_dev_server() {
		return ( defined( 'WP_ENV' ) && WP_ENV === 'development' ) || ( defined( 'WP_DEBUG' ) && WP_DEBUG );
	}

	public function render_shortcode( $atts ) {
		return 'YouMeOS Shortcode not fully implemented for standalone app mode.';
	}

	public function ajax_refresh_nonce() {
		// Since this is wp_ajax_, the user is implicitly authenticated via cookie.
		// We can generate a new REST API nonce.
		wp_send_json_success( array(
			'nonce' => wp_create_nonce( 'wp_rest' )
		) );
	}

	public function register_api_routes() {
		register_rest_route( 'xophz-compass/v1', '/register', array(
			'methods' => 'POST',
			'callback' => array( $this, 'handle_user_registration' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/login', array(
			'methods' => 'POST',
			'callback' => array( $this, 'handle_user_login' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/logout', array(
			'methods' => 'POST',
			'callback' => array( $this, 'handle_user_logout' ),
			'permission_callback' => 'is_user_logged_in',
		) );

		register_rest_route( 'xophz-compass/v1', '/lostpassword', array(
			'methods' => 'POST',
			'callback' => array( $this, 'handle_lost_password' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/discord/token', array(
			'methods' => 'POST',
			'callback' => array( $this, 'handle_discord_token_exchange' ),
			'permission_callback' => '__return_true', // You might want to restrict this to logged in users if they already have an account
		) );
		
		register_rest_route( 'xophz-compass/v1', '/mission-tags', array(
			'methods' => 'GET',
			'callback' => array( $this, 'get_mission_tags' ),
			'permission_callback' => '__return_true',
		) );
		
		register_rest_route( 'xophz-compass/v1', '/mission-statement', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_mission_statement' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'update_mission_statement' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );
		
		register_rest_route( 'xophz-compass/v1', '/nexos-statement', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_nexos_statement' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'update_nexos_statement' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );

		register_rest_route( 'xophz-compass/v1', '/noosphere-statement', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_noosphere_statement' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'update_noosphere_statement' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );

		register_rest_route( 'xophz-compass/v1', '/rhythm-matrix', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_rhythm_matrix' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'update_rhythm_matrix' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );
		
		register_rest_route( 'xophz-compass/v1', '/profile', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_user_profile' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'update_user_profile' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );

		register_rest_route( 'xophz-compass/v1', '/nexos-chat', array(
			array(
				'methods' => 'GET',
				'callback' => array( $this, 'get_nexos_chat' ),
				'permission_callback' => 'is_user_logged_in',
			),
			array(
				'methods' => 'POST',
				'callback' => array( $this, 'post_nexos_chat' ),
				'permission_callback' => 'is_user_logged_in',
			)
		) );

		register_rest_route( 'xophz-compass/v1', '/site-navigation', array(
			'methods' => 'GET',
			'callback' => array( $this, 'get_unified_site_menus' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/gaea/telemetry', array(
			'methods' => 'GET',
			'callback' => array( $this, 'get_gaea_telemetry_simulation' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz-compass/v1', '/spark-manifest', array(
			'methods' => 'GET',
			'callback' => array( $this, 'generate_spark_manifest' ),
			'permission_callback' => '__return_true',
		) );
	}

	public function generate_spark_manifest( $request ) {
		$spark_id = sanitize_text_field( $request->get_param('spark') );
		
		$og_desc = get_option( 'youmeos_og_description', '' );
		if ( empty( $og_desc ) ) {
			$og_desc = 'The Omega Source. Travel the YouMeverse without moving.';
		}

		if ( empty($spark_id) || $spark_id === 'welcome-u' ) {
			// Main OS Manifest
			$site_name = get_bloginfo('name');
			if ( stripos( $site_name, 'YouMeOS' ) !== false && strlen( $site_name ) <= 10 ) {
				$spark_name = 'YouMeOS';
			} else {
				$spark_name = 'YouMeOS on ' . $site_name;
			}
			$short_name = 'YouMeOS';
			$description = $og_desc;
			$start_url = home_url( '/os/' );
			// Clear spark_id so the fallback icons are used below
			$spark_id = '';
		} else {
			$spark_name_override = sanitize_text_field( $request->get_param('name') );
			if ( !empty($spark_name_override) ) {
				$spark_name = $spark_name_override;
			} else {
				$spark_name = ucwords(str_replace('-', ' ', $spark_id));
			}
			$short_name = $spark_name;
			$description = $spark_name . ' - ' . $og_desc;
			$start_url = home_url( '/os/u/?sparks=' . $spark_id . '&fullscreen=true' );
		}

		$icon_path = plugin_dir_path( __FILE__ ) . 'images/spark-icons/spark-' . $spark_id . '.svg';
		
		if ( !empty($spark_id) && file_exists($icon_path) ) {
			$icons = array(
				array(
					'src' => plugins_url('images/spark-icons/spark-' . $spark_id . '.svg', __FILE__),
					'sizes' => 'any',
					'type' => 'image/svg+xml'
				)
			);
		} else {
			$icons = array(
				array(
					'src' => plugins_url('../admin/images/youmeos-logo.png', __FILE__),
					'sizes' => '192x192',
					'type' => 'image/png'
				),
				array(
					'src' => plugins_url('../admin/images/youmeos-logo.png', __FILE__),
					'sizes' => '512x512',
					'type' => 'image/png'
				)
			);
		}

		$manifest = array(
			'id' => empty($spark_id) ? home_url( '/os/' ) : home_url( '/os/u/?sparks=' . $spark_id ),
			'name' => $spark_name,
			'short_name' => $short_name,
			'description' => $description,
			'start_url' => $start_url,
			'display' => 'standalone',
			'background_color' => '#000000',
			'theme_color' => '#000000',
			'icons' => $icons
		);

		$response = rest_ensure_response($manifest);
		$response->header('Content-Type', 'application/manifest+json');
		return $response;
	}

	public function get_gaea_telemetry_simulation( $request ) {
		// Simulate Fossil Reserves dropping slowly over time (100% in 1950, 0% in 2070)
		$start_time = strtotime('1950-01-01');
		$end_time = strtotime('2070-01-01');
		$now = time();
		$fossil_percent = 100 - (($now - $start_time) / ($end_time - $start_time)) * 100;
		$fossil_percent = max(0, min(100, $fossil_percent));

		// Simulate Grid Load fluctuating daily between 40% and 95% (Peak at 18:00)
		$hour = (float) date('G') + (float) date('i') / 60;
		$grid_load = 65 + 25 * sin((($hour - 12) / 24) * 2 * M_PI);
		// Add some high-frequency noise
		$grid_load += mt_rand(-200, 200) / 100;
		$grid_load = max(0, min(100, $grid_load));

		// Simulate Core Thermo stability fluctuating slightly around 65%
		$thermo = 65 + 2 * sin($now / 86400) + mt_rand(-50, 50) / 100;

		return rest_ensure_response( array(
			'fossil_reserves' => round($fossil_percent, 2),
			'grid_load' => round($grid_load, 2),
			'core_thermo' => round($thermo, 2),
			'timestamp' => $now
		) );
	}

	public function get_unified_site_menus( $request ) {
		$menus_output = [];

		// 1. Fetch Classic Menus
		$classic_menus = wp_get_nav_menus();
		if ( ! empty( $classic_menus ) && ! is_wp_error( $classic_menus ) ) {
			foreach ( $classic_menus as $menu ) {
				$items = wp_get_nav_menu_items( $menu->term_id );
				$tree = [];
				if ( $items ) {
					$lookup = [];
					foreach ( $items as $item ) {
						$lookup[ $item->ID ] = [
							'id' => $item->ID,
							'title' => $item->title,
							'url' => $item->url,
							'children' => []
						];
					}
					foreach ( $items as $item ) {
						if ( $item->menu_item_parent == 0 ) {
							$tree[] = &$lookup[ $item->ID ];
						} elseif ( isset( $lookup[ $item->menu_item_parent ] ) ) {
							$lookup[ $item->menu_item_parent ]['children'][] = &$lookup[ $item->ID ];
						}
					}
				}
				if ( ! empty( $tree ) ) {
					$menus_output[] = [
						'id' => 'classic-' . $menu->term_id,
						'name' => $menu->name,
						'items' => $tree
					];
				}
			}
		}

		// 2. Fetch FSE Block Menus (wp_navigation)
		$block_menus = get_posts([
			'post_type' => 'wp_navigation',
			'post_status' => 'publish',
			'posts_per_page' => -1
		]);

		if ( ! empty( $block_menus ) ) {
			foreach ( $block_menus as $menu_post ) {
				$blocks = parse_blocks( $menu_post->post_content );
				$tree = $this->parse_navigation_blocks( $blocks );
				if ( ! empty( $tree ) ) {
					$menus_output[] = [
						'id' => 'fse-' . $menu_post->ID,
						'name' => $menu_post->post_title ?: 'Navigation',
						'items' => $tree
					];
				}
			}
		}

		return rest_ensure_response( $menus_output );
	}

	private function parse_navigation_blocks( $blocks ) {
		$items = [];
		foreach ( $blocks as $block ) {
			if ( empty( $block['blockName'] ) ) continue;

			$item = [
				'id' => crc32( wp_json_encode( $block ) . rand() ),
				'title' => '',
				'url' => '',
				'children' => []
			];

			if ( isset( $block['attrs']['label'] ) ) {
				$item['title'] = $block['attrs']['label'];
			}
			if ( isset( $block['attrs']['url'] ) ) {
				$item['url'] = urldecode( $block['attrs']['url'] );
			}

			// Some blocks might use plain inner HTML for titles if label attr isn't set
			if ( empty( $item['title'] ) && ! empty( $block['innerHTML'] ) ) {
				$item['title'] = wp_strip_all_tags( $block['innerHTML'] );
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				$item['children'] = $this->parse_navigation_blocks( $block['innerBlocks'] );
			}

			if ( ! empty( $item['title'] ) || ! empty( $item['children'] ) ) {
				$items[] = $item;
			}
		}
		return $items;
	}

	public function get_nexos_chat( $request ) {
		$args = array(
			'post_type'      => 'nexos_message',
			'post_status'    => 'publish',
			'posts_per_page' => 50,
			'orderby'        => 'date',
			'order'          => 'DESC'
		);
		$query = new WP_Query( $args );
		$messages = array();
		
		foreach( $query->posts as $post ) {
			$sender_id = $post->post_author;
			$user = get_userdata( $sender_id );
			$messages[] = array(
				'id' => $post->ID,
				'sender' => $user ? $user->display_name : 'Unknown Node',
				'text' => $post->post_content,
				'timestamp' => get_the_date( 'h:i A', $post ),
				'raw_date' => $post->post_date_gmt,
				'author_id' => $sender_id
			);
		}
		
		// Return chronological order
		return rest_ensure_response( array_reverse( $messages ) );
	}

	public function post_nexos_chat( $request ) {
		$params = $request->get_json_params();
		$text   = sanitize_textarea_field( $params['text'] ?? '' );
		
		if ( empty( $text ) ) {
			return new WP_Error( 'empty_message', 'No message sent', array( 'status' => 400 ) );
		}
		
		$post_id = wp_insert_post( array(
			'post_type'    => 'nexos_message',
			'post_title'   => wp_trim_words( $text, 5 ),
			'post_content' => $text,
			'post_status'  => 'publish',
			'post_author'  => get_current_user_id()
		) );
		
		if ( is_wp_error( $post_id ) ) {
			return $post_id;
		}
		
		return rest_ensure_response( array( 'success' => true, 'id' => $post_id ) );
	}

	public function handle_discord_token_exchange( $request ) {
		$code = $request->get_param( 'code' );

		if ( ! $code ) {
			return new WP_Error( 'missing_code', 'No authorization code provided.', array( 'status' => 400 ) );
		}

		// Check constants, options, and environment variables
		$client_id     = defined( 'DISCORD_CLIENT_ID' ) ? DISCORD_CLIENT_ID : ( $_ENV['DISCORD_CLIENT_ID'] ?? get_option( 'discord_client_id' ) );
		$client_secret = defined( 'DISCORD_CLIENT_SECRET' ) ? DISCORD_CLIENT_SECRET : ( $_ENV['DISCORD_CLIENT_SECRET'] ?? get_option( 'discord_client_secret' ) );
		$redirect_uri  = defined( 'DISCORD_REDIRECT_URI' ) ? DISCORD_REDIRECT_URI : ( $_ENV['DISCORD_REDIRECT_URI'] ?? get_option( 'discord_redirect_uri' ) );

		if ( ! $client_id || ! $client_secret || ! $redirect_uri ) {
			return new WP_Error( 'missing_config', 'Discord API configuration is missing on the server.', array( 'status' => 500 ) );
		}

		$response = wp_remote_post( 'https://discord.com/api/oauth2/token', array(
			'body' => array(
				'client_id' => $client_id,
				'client_secret' => $client_secret,
				'grant_type' => 'authorization_code',
				'code' => $code,
				'redirect_uri' => $redirect_uri,
			),
		) );

		if ( is_wp_error( $response ) ) {
			return $response;
		}

		$body = json_decode( wp_remote_retrieve_body( $response ), true );

		if ( isset( $body['error'] ) ) {
			return new WP_Error( 'discord_api_error', $body['error_description'] ?? $body['error'], array( 'status' => 400 ) );
		}

		$access_token = $body['access_token'];

		$user_response = wp_remote_get( 'https://discord.com/api/users/@me', array(
			'headers' => array(
				'Authorization' => 'Bearer ' . $access_token,
			),
		) );

		if ( ! is_wp_error( $user_response ) ) {
			$discord_user = json_decode( wp_remote_retrieve_body( $user_response ), true );
			if ( isset( $discord_user['email'] ) ) {
				$user = get_user_by( 'email', $discord_user['email'] );

				if ( ! $user ) {
					$username = $discord_user['username'];
					if ( username_exists( $username ) ) {
						$username = $username . '_' . wp_generate_password( 4, false );
					}
					$password = wp_generate_password();
					$user_id = wp_create_user( $username, $password, $discord_user['email'] );
					
					if ( ! is_wp_error( $user_id ) ) {
						$user = get_user_by( 'id', $user_id );
						wp_update_user( array(
							'ID' => $user_id,
							'display_name' => $discord_user['global_name'] ?? $discord_user['username']
						) );
					}
				}

				if ( $user && ! is_wp_error( $user ) ) {
					wp_set_current_user( $user->ID );
					wp_set_auth_cookie( $user->ID, true );
					
					$body['wp_user'] = array(
						'user_id' => $user->ID,
						'user_email' => $user->user_email,
						'user_nicename' => $user->user_nicename,
						'user_display_name' => $user->display_name,
						'user_roles' => $user->roles,
						'nonce' => wp_create_nonce( 'wp_rest' ),
						'token' => wp_create_nonce( 'wp_rest' )
					);
				}
			}
		}

		return rest_ensure_response( $body );
	}

	public function handle_user_login( $request ) {
		$creds = array(
			'user_login'    => $request->get_param( 'username' ),
			'user_password' => $request->get_param( 'password' ),
			'remember'      => true
		);

		$user = wp_signon( $creds, false );

		if ( is_wp_error( $user ) ) {
			return new WP_Error( 'invalid_credentials', 'Invalid username or password.', array( 'status' => 403 ) );
		}

		// Ensure global user state is updated before generating the REST nonce
		wp_set_current_user( $user->ID );

		return rest_ensure_response( array(
			'message' => 'Login successful',
			'user_id' => $user->ID,
			'user_email' => $user->user_email,
			'user_nicename' => $user->user_nicename,
			'user_display_name' => $user->display_name,
			'user_roles' => $user->roles,
			'nonce' => wp_create_nonce( 'wp_rest' ),
		) );
	}

	public function handle_user_logout( $request ) {
		wp_logout();
		return rest_ensure_response( array(
			'success' => true,
			'message' => 'Logged out successfully'
		) );
	}

	public function handle_lost_password( $request ) {
		$user_login = $request->get_param( 'user_login' );

		if ( empty( $user_login ) ) {
			return new WP_Error( 'empty_user_login', 'Please enter a username or email address.', array( 'status' => 400 ) );
		}

		$user_data = get_user_by( 'email', $user_login );
		if ( ! $user_data ) {
			$user_data = get_user_by( 'login', $user_login );
		}

		if ( ! $user_data ) {
			// Do not leak that the user exists or not for security reasons, just return success
			return rest_ensure_response( array(
				'success' => true,
				'message' => 'If an account exists, a password reset link has been sent to the email address on file.'
			) );
		}

		$result = retrieve_password( $user_login );

		if ( is_wp_error( $result ) ) {
			return $result;
		}

		return rest_ensure_response( array(
			'success' => true,
			'message' => 'If an account exists, a password reset link has been sent to the email address on file.'
		) );
	}

	public function handle_user_registration( $request ) {
		$parameters = $request->get_json_params();

		$username = sanitize_text_field( $parameters['username'] ?? '' );
		$email = sanitize_email( $parameters['email'] ?? '' );
		$password = sanitize_text_field( $parameters['password'] ?? '' );

		$hasMissingFields = empty( $username ) || empty( $email ) || empty( $password );

		if ( $hasMissingFields ) {
			return new WP_Error( 'missing_fields', 'Please provide username, email and password.', array( 'status' => 400 ) );
		}

		if ( username_exists( $username ) ) {
			return new WP_Error( 'username_exists', 'Username already exists.', array( 'status' => 400 ) );
		}

		if ( email_exists( $email ) ) {
			return new WP_Error( 'email_exists', 'Email already exists.', array( 'status' => 400 ) );
		}

		$user_id = wp_create_user( $username, $password, $email );

		if ( is_wp_error( $user_id ) ) {
			return $user_id;
		}

		// Auto-login after registration
		$creds = array(
			'user_login'    => $username,
			'user_password' => $password,
			'remember'      => true
		);
		$user = wp_signon( $creds, false );
		
		if ( ! is_wp_error( $user ) ) {
			wp_set_current_user( $user->ID );
			return rest_ensure_response( array(
				'message' => 'User registered and logged in successfully.',
				'user_id' => $user->ID,
				'user_email' => $user->user_email,
				'user_nicename' => $user->user_nicename,
				'user_display_name' => $user->display_name,
				'user_roles' => $user->roles,
				'nonce' => wp_create_nonce( 'wp_rest' ),
				'token' => wp_create_nonce( 'wp_rest' ) // Some flows might check token
			) );
		}

		return rest_ensure_response( array(
			'message' => 'User registered successfully.',
			'user_id' => $user_id
		) );
	}

	public function get_mission_statement( $request ) {
		$user_id = get_current_user_id();
		$mission = get_user_meta( $user_id, 'youmeos_mission_statement', true );
		
		if ( empty( $mission ) ) {
			return rest_ensure_response( array(
				'trait1' => '', 'trait2' => '', 'trait3' => '',
				'env1' => '', 'env2' => '', 'env3' => '',
				'feel1' => '', 'feel2' => '', 'feel3' => ''
			) );
		}
		
		return rest_ensure_response( $mission );
	}

	public function get_mission_tags( $request ) {
		// Use native WordPress get_terms to fetch all tags
		$tags = get_terms( array(
			'taxonomy' => 'post_tag',
			'fields' => 'names',
			'hide_empty' => false,
		) );
		
		if ( is_wp_error( $tags ) ) {
			$tags = array();
		}
		
		return rest_ensure_response( $tags );
	}

	public function update_mission_statement( $request ) {
		$user_id = get_current_user_id();
		$parameters = $request->get_json_params();
		
		$mission = array(
			'trait1' => sanitize_text_field( $parameters['trait1'] ?? '' ),
			'trait2' => sanitize_text_field( $parameters['trait2'] ?? '' ),
			'trait3' => sanitize_text_field( $parameters['trait3'] ?? '' ),
			'env1' => sanitize_text_field( $parameters['env1'] ?? '' ),
			'env2' => sanitize_text_field( $parameters['env2'] ?? '' ),
			'env3' => sanitize_text_field( $parameters['env3'] ?? '' ),
			'feel1' => sanitize_text_field( $parameters['feel1'] ?? '' ),
			'feel2' => sanitize_text_field( $parameters['feel2'] ?? '' ),
			'feel3' => sanitize_text_field( $parameters['feel3'] ?? '' ),
		);
		
		update_user_meta( $user_id, 'youmeos_mission_statement', $mission );

		// Sync tags natively to WordPress Taxonomy
		foreach( array('trait1', 'trait2', 'trait3', 'env1', 'env2', 'env3', 'feel1', 'feel2', 'feel3') as $k ) {
			if ( !empty($mission[$k]) ) {
				$clean_tag = strtolower( trim( $mission[$k] ) );
				// wp_insert_term natively handles checking if it exists, creates it if not.
				if ( ! term_exists( $clean_tag, 'post_tag' ) ) {
					wp_insert_term( $clean_tag, 'post_tag' );
				}
			}
		}
		
		$compiled = sprintf(
			"I am a %s, %s, and %s being. I create an environment of %s, %s, and %s. Where others feel %s, %s, and %s.",
			$mission['trait1'], $mission['trait2'], $mission['trait3'],
			$mission['env1'], $mission['env2'], $mission['env3'],
			$mission['feel1'], $mission['feel2'], $mission['feel3']
		);
		
		// Optional: avoid inserting weird punctuation if all fields are empty
		if ( trim($compiled) === "I am a , , and  being. I create an environment of , , and . Where others feel , , and ." ) {
			$compiled = '';
		}

		wp_update_user( array( 'ID' => $user_id, 'description' => trim( $compiled ) ) );
		
		return rest_ensure_response( array(
			'message' => 'Mission statement committed successfully.',
			'mission' => $mission
		) );
	}

	public function get_nexos_statement( $request ) {
		$user_id = get_current_user_id();
		$stance = get_user_meta( $user_id, 'youmeos_nexos_statement', true );
		
		if ( empty( $stance ) ) {
			return rest_ensure_response( array(
				'target1' => '', 'target2' => '', 'target3' => '',
				'foundation1' => '', 'foundation2' => '', 'foundation3' => ''
			) );
		}
		
		return rest_ensure_response( $stance );
	}

	public function update_nexos_statement( $request ) {
		$user_id = get_current_user_id();
		$parameters = $request->get_json_params();
		
		$stance = array(
			'target1' => sanitize_text_field( $parameters['target1'] ?? '' ),
			'target2' => sanitize_text_field( $parameters['target2'] ?? '' ),
			'target3' => sanitize_text_field( $parameters['target3'] ?? '' ),
			'foundation1' => sanitize_text_field( $parameters['foundation1'] ?? '' ),
			'foundation2' => sanitize_text_field( $parameters['foundation2'] ?? '' ),
			'foundation3' => sanitize_text_field( $parameters['foundation3'] ?? '' ),
		);
		
		update_user_meta( $user_id, 'youmeos_nexos_statement', $stance );

		// Sync tags natively to WordPress Taxonomy using the same tags pool
		foreach( array('target1', 'target2', 'target3', 'foundation1', 'foundation2', 'foundation3') as $k ) {
			if ( !empty($stance[$k]) ) {
				$clean_tag = strtolower( trim( $stance[$k] ) );
				if ( ! term_exists( $clean_tag, 'post_tag' ) ) {
					wp_insert_term( $clean_tag, 'post_tag' );
				}
			}
		}
		
		return rest_ensure_response( array(
			'message' => 'Nexos statement committed successfully.',
			'stance' => $stance
		) );
	}

	public function get_user_profile( $request ) {
		$user_id = get_current_user_id();
		$user = get_userdata( $user_id );
		
		$avatar_url = get_user_meta( $user_id, 'youmeos_avatar_url', true );
		if ( empty( $avatar_url ) ) {
			$avatar_url = get_avatar_url( $user_id, array( 'size' => 150 ) );
		}
		
		$portrait_url = get_user_meta( $user_id, 'youmeos_portrait_url', true );

		return rest_ensure_response( array(
			'user_login' => $user->user_login,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'nickname' => $user->nickname,
			'display_name' => $user->display_name,
			'user_email' => $user->user_email,
			'user_url' => $user->user_url,
			'user_description' => $user->description,
			'avatar_url' => $avatar_url,
			'portrait_url' => $portrait_url,
		) );
	}

	public function update_user_profile( $request ) {
		$user_id = get_current_user_id();
		$parameters = $request->get_json_params();
		
		$args = array( 'ID' => $user_id );
		
		if ( isset( $parameters['first_name'] ) ) $args['first_name'] = sanitize_text_field( $parameters['first_name'] );
		if ( isset( $parameters['last_name'] ) ) $args['last_name'] = sanitize_text_field( $parameters['last_name'] );
		if ( isset( $parameters['nickname'] ) ) $args['nickname'] = sanitize_text_field( $parameters['nickname'] );
		if ( isset( $parameters['display_name'] ) ) $args['display_name'] = sanitize_text_field( $parameters['display_name'] );
		if ( isset( $parameters['user_email'] ) ) $args['user_email'] = sanitize_email( $parameters['user_email'] );
		if ( isset( $parameters['user_url'] ) ) $args['user_url'] = esc_url_raw( $parameters['user_url'] );
		
		$result = wp_update_user( $args );
		
		if ( is_wp_error( $result ) ) {
			return $result;
		}

		if ( isset( $parameters['avatar_base64'] ) && ! empty( $parameters['avatar_base64'] ) ) {
			$base64 = $parameters['avatar_base64'];
			if ( preg_match( '/^data:image\/(\w+);base64,/', $base64, $type ) ) {
				$data = substr( $base64, strpos( $base64, ',' ) + 1 );
				$type = strtolower( $type[1] );
				if ( in_array( $type, [ 'jpg', 'jpeg', 'gif', 'png', 'webp' ] ) ) {
					$decoded = base64_decode( $data );
					if ( $decoded !== false ) {
						$filename = 'avatar_' . $user_id . '_' . time() . '.' . $type;
						$upload = wp_upload_bits( $filename, null, $decoded );
						if ( ! $upload['error'] ) {
							update_user_meta( $user_id, 'youmeos_avatar_url', $upload['url'] );
						}
					}
				}
			}
		}

		$portrait_status = 'not_provided';
		if ( isset( $parameters['portrait_base64'] ) && ! empty( $parameters['portrait_base64'] ) ) {
			$portrait_status = 'provided';
			$base64 = $parameters['portrait_base64'];
			if ( preg_match( '/^data:image\/([\w\+\-]+);base64,/', $base64, $type ) ) {
				$portrait_status = 'matched_regex';
				$data = substr( $base64, strpos( $base64, ',' ) + 1 );
				$ext = strtolower( $type[1] );
				// If mime type is like svg+xml, we just use the first part or default to png
				if (strpos($ext, 'svg') !== false) $ext = 'svg';
				
				if ( in_array( $ext, [ 'jpg', 'jpeg', 'gif', 'png', 'webp', 'svg' ] ) ) {
					$portrait_status = 'valid_extension_' . $ext;
					$decoded = base64_decode( $data );
					if ( $decoded !== false ) {
						$filename = 'portrait_' . $user_id . '_' . time() . '.' . $ext;
						$upload = wp_upload_bits( $filename, null, $decoded );
						if ( ! $upload['error'] ) {
							update_user_meta( $user_id, 'youmeos_portrait_url', $upload['url'] );
							$portrait_status = 'success';
						} else {
							$portrait_status = 'upload_error: ' . $upload['error'];
						}
					} else {
						$portrait_status = 'decode_failed';
					}
				} else {
					$portrait_status = 'invalid_extension: ' . $ext;
				}
			} else {
				$portrait_status = 'regex_failed: ' . substr($base64, 0, 50);
			}
		}

		return rest_ensure_response( array( 
			'message' => 'Profile updated successfully.',
			'portrait_debug' => $portrait_status 
		) );
	}

	public function get_noosphere_statement( $request ) {
		$user_id = get_current_user_id();
		$statement = get_user_meta( $user_id, 'youmeos_noosphere_statement', true );
		
		if ( empty( $statement ) ) {
			return rest_ensure_response( array(
				'signal1' => '', 'signal2' => '', 'signal3' => '',
				'amp1' => '', 'amp2' => '', 'amp3' => ''
			) );
		}
		
		return rest_ensure_response( $statement );
	}

	public function update_noosphere_statement( $request ) {
		$user_id = get_current_user_id();
		$parameters = $request->get_json_params();
		
		$statement = array(
			'signal1' => sanitize_text_field( $parameters['signal1'] ?? '' ),
			'signal2' => sanitize_text_field( $parameters['signal2'] ?? '' ),
			'signal3' => sanitize_text_field( $parameters['signal3'] ?? '' ),
			'amp1' => sanitize_text_field( $parameters['amp1'] ?? '' ),
			'amp2' => sanitize_text_field( $parameters['amp2'] ?? '' ),
			'amp3' => sanitize_text_field( $parameters['amp3'] ?? '' ),
		);
		
		update_user_meta( $user_id, 'youmeos_noosphere_statement', $statement );

		// Sync tags natively to WordPress Taxonomy using the same tags pool
		foreach( array('signal1', 'signal2', 'signal3', 'amp1', 'amp2', 'amp3') as $k ) {
			if ( !empty( $statement[$k] ) ) {
				$this->ensure_mission_tag_exists( strtolower( trim( $statement[$k] ) ) );
			}
		}

		return rest_ensure_response( array( 'success' => true ) );
	}

	public function get_rhythm_matrix( $request ) {
		$user_id = get_current_user_id();
		$matrix = get_user_meta( $user_id, 'youmeos_rhythm_matrix', true );
		
		if ( empty( $matrix ) ) {
			return rest_ensure_response( new stdClass() );
		}
		
		return rest_ensure_response( $matrix );
	}

	public function update_rhythm_matrix( $request ) {
		$user_id = get_current_user_id();
		$parameters = $request->get_json_params();
		
		$matrix = array();
		if ( is_array( $parameters ) ) {
			foreach ( $parameters as $key => $val ) {
				// Each entry should be an array of exactly 3 integers
				if ( is_array( $val ) && count( $val ) === 3 ) {
					$matrix[ sanitize_text_field( $key ) ] = array(
						intval( $val[0] ),
						intval( $val[1] ),
						intval( $val[2] )
					);
				}
			}
		}
		
		update_user_meta( $user_id, 'youmeos_rhythm_matrix', $matrix );

		return rest_ensure_response( array( 
			'success' => true,
			'message' => 'Rhythm Matrix synchronized.'
		) );
	}
}
