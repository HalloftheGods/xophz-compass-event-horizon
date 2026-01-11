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
        // Prepare assets
        $this->enqueue_assets();
        
        // Basic HTML Structure (Minimal)
        ?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>You Me OS</title>
<?php wp_head(); ?>
<style>
    body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; }
    #youmeos-container { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
</style>
</head>
<body>
<div id="youmeos-container"></div>
<?php wp_footer(); ?>
</body>
</html><?php
        exit;
    }
  }

  /**
   * Render the shortcode
   */
  public function render_shortcode( $atts ) {
    // Enqueue assets only when shortcode is used
    $this->enqueue_assets();
    
    // Output container
    return '<div id="youmeos-container" style="width: 100%; height: 100vh; background: #000;"></div>';
  }

  /**
   * Enqueue the Vue app assets
   */
	public function enqueue_assets() {
    
    // CSS
		wp_enqueue_style( $this->plugin_name . '-css', plugin_dir_url( __FILE__ ) . 'dist/css/xophz-compass.css', array(), $this->version, 'all' );

    // JS (Module)
    // Note: To support ES modules in older WP, we might need a script tag filter or module attribute
		wp_enqueue_script( $this->plugin_name . '-js', plugin_dir_url( __FILE__ ) . 'dist/youmeos-public.es.js', array(), $this->version, true );
    
    // Add module type to script tag
    // Check if filter already added to avoid duplication if called multiple times (though unlikely in this flow)
    if (!has_filter('script_loader_tag', array($this, 'add_module_attribute'))) {
        add_filter('script_loader_tag', array($this, 'add_module_attribute'), 10, 3);
    }
	}

  public function add_module_attribute($tag, $handle, $src) {
    if ($this->plugin_name . '-js' === $handle) {
        return '<script type="module" src="' . esc_url($src) . '"></script>';
    }
    return $tag;
  }
}
