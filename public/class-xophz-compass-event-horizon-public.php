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
   * Register rewrite endpoint for /youmeos/
   */
  public function register_endpoints() {
    add_rewrite_endpoint( 'youmeos', EP_ROOT );
  }

  /**
   * Handle template redirect for /youmeos/
   */
  public function template_redirect() {
    global $wp_query;
 
    if ( isset( $wp_query->query_vars['youmeos'] ) ) {
        // Disable Admin Bar
        show_admin_bar(false);

        // Prepare Settings
        $current_user = wp_get_current_user();
        $settings = [
            'currentUser' => [
                'ID' => $current_user->ID,
                'admin_color' => get_user_option('admin_color', $current_user->ID),
            ],
            'nonce' => wp_create_nonce( 'wp_rest' ),
            'restUrl' => get_rest_url(),
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
}
