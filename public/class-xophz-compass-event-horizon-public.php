<?php

/**
 * The public-facing functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/public
 */

/**
 * The public-facing functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the public-facing stylesheet and JavaScript.
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/public
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Event_Horizon_Public {

	private $plugin_name;
	private $version;

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

  /**
   * Register the shortcode [youmeos]
   */
  public function register_shortcodes() {
    add_shortcode( 'youmeos', array( $this, 'render_shortcode' ) );
  }

  /**
   * Register rewrite rules for /youmeos/ and /os/ including all subpaths
   */
  public function register_endpoints() {
    add_rewrite_rule('^youmeos(/.*)?$', 'index.php?youmeos=1', 'top');
    add_rewrite_rule('^os(/.*)?$', 'index.php?os=1', 'top');
  }

  /**
   * Register query variables
   */
  public function register_query_vars( $vars ) {
    $vars[] = 'youmeos';
    $vars[] = 'os';
    return $vars;
  }

  /**
   * Handle template redirect for /youmeos/ and /os/
   */
  public function template_redirect() {
    global $wp_query;
 
    if ( isset( $wp_query->query_vars['youmeos'] ) || isset( $wp_query->query_vars['os'] ) ) {
        // Disable Admin Bar
        show_admin_bar(false);

        // Prepare Settings
        $current_user = wp_get_current_user();
        $home_url = home_url();
        $site_path = parse_url($home_url, PHP_URL_PATH) ?: '';
        $site_path = rtrim($site_path, '/');
        $app_base = isset($wp_query->query_vars['youmeos']) ? 'youmeos' : 'os';

        $settings = [
            'currentUser' => [
                'ID' => $current_user->ID,
                'admin_color' => get_user_option('admin_color', $current_user->ID),
            ],
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'restUrl' => get_rest_url(),
            'sitePath' => $site_path,
            'appBase' => $app_base,
            'homeUrl' => $home_url,
        ];
        
        // Render Raw HTML (No wp_head/wp_footer)
        ?><!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>You Me OS</title>
<style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
    #youmeos-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
<script>window.xophzCompassSettings = <?php echo json_encode($settings); ?>;</script>

<?php if ( $this->is_dev_server() ) : ?>
    <!-- Dev Server Assets -->
    <script type="module" src="http://localhost:9000/@vite/client"></script>
    <script type="module" src="http://localhost:9000/apps/youmeos/mount-youmeos.ts"></script>
<?php else : ?>
    <!-- Production Assets -->
    <script type="module" src="<?php echo plugin_dir_url( __FILE__ ) . 'dist/js/youmeos.js'; ?>"></script>
    <link rel="stylesheet" href="<?php echo plugin_dir_url( __FILE__ ) . 'dist/css/youmeos.css'; ?>">
<?php endif; ?>

</head>
<body>
<div id="youmeos-container"></div>
</body>
</html><?php
        exit;
    }
  }

  private function is_dev_server() {
       return (defined('WP_ENV') && WP_ENV === 'development') || (defined('WP_DEBUG') && WP_DEBUG);
  }

  /**
   * Render the shortcode
   */
  public function render_shortcode( $atts ) {
    return 'YouMeOS Shortcode not fully implemented for standalone app mode.';
  }
  /**
   * Register custom REST API routes
   */
  public function register_api_routes() {
    register_rest_route( 'xophz-compass/v1', '/register', array(
      'methods' => 'POST',
      'callback' => array( $this, 'handle_user_registration' ),
      'permission_callback' => '__return_true', // Public endpoint
    ) );

    register_rest_route( 'xophz-compass/v1', '/login', array(
      'methods' => 'POST',
      'callback' => array( $this, 'handle_user_login' ),
      'permission_callback' => '__return_true', // Public endpoint
    ) );
    
    register_rest_route( 'xophz-compass/v1', '/logout', array(
      'methods' => 'POST',
      'callback' => array( $this, 'handle_user_logout' ),
      'permission_callback' => 'is_user_logged_in',
    ) );
  }

  /**
   * Handle user login via API
   */
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
        'nonce' => wp_create_nonce( 'wp_rest' ),
    ) );
  }

  /**
   * Handle user logout via API
   */
  public function handle_user_logout( $request ) {
    wp_logout();
    return rest_ensure_response( array(
      'success' => true,
      'message' => 'Logged out successfully'
    ) );
  }

  /**
   * Handle user registration via API
   */
  public function handle_user_registration( $request ) {
    $parameters = $request->get_json_params();
    
    $username = sanitize_text_field( $parameters['username'] ?? '' );
    $email = sanitize_email( $parameters['email'] ?? '' );
    $password = sanitize_text_field( $parameters['password'] ?? '' );
    
    if ( empty( $username ) || empty( $email ) || empty( $password ) ) {
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
}
