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
			$app_base = $this->resolve_app_base( $wp_query, $isRouteMatch );
			$this->render_youmeos_shell( $app_base );
			exit;
		}
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
		];

		?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YHY2WZFMDM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YHY2WZFMDM');
</script>
<title>You Me OS</title>
<style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
    #youmeos-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
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

	private function is_dev_server() {
		return ( defined( 'WP_ENV' ) && WP_ENV === 'development' ) || ( defined( 'WP_DEBUG' ) && WP_DEBUG );
	}

	public function render_shortcode( $atts ) {
		return 'YouMeOS Shortcode not fully implemented for standalone app mode.';
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
		
		return rest_ensure_response( array(
			'user_login' => $user->user_login,
			'first_name' => $user->first_name,
			'last_name' => $user->last_name,
			'nickname' => $user->nickname,
			'display_name' => $user->display_name,
			'user_email' => $user->user_email,
			'user_url' => $user->user_url,
			'avatar_url' => get_avatar_url( $user_id, array( 'size' => 150 ) ),
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

		return rest_ensure_response( array( 'message' => 'Profile updated successfully.' ) );
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
