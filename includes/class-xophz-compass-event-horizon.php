<?php

/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 * @author     Your Name <email@example.com>
 */
class Xophz_Compass_Event_Horizon {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      Xophz_Compass_Event_Horizon_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   protected
	 * @var      string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
		if ( defined( 'XOPHZ_COMPASS_EVENT_HORIZON_VERSION' ) ) {
			$this->version = XOPHZ_COMPASS_EVENT_HORIZON_VERSION;
		} else {
			$this->version = '1.0.0';
		}
		$this->plugin_name = 'xophz-compass-event-horizon';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_admin_hooks();
		$this->define_public_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - Xophz_Compass_Event_Horizon_Loader. Orchestrates the hooks of the plugin.
	 * - Xophz_Compass_Event_Horizon_i18n. Defines internationalization functionality.
	 * - Xophz_Compass_Event_Horizon_Admin. Defines all hooks for the admin area.
	 * - Xophz_Compass_Event_Horizon_Public. Defines all hooks for the public side of the site.
	 *
	 * Create an instance of the loader which will be used to register the hooks
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		/**
		 * The class responsible for orchestrating the actions and filters of the
		 * core plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-xophz-compass-event-horizon-loader.php';

		/**
		 * The class responsible for defining internationalization functionality
		 * of the plugin.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-xophz-compass-event-horizon-i18n.php';

		/**
		 * The class responsible for defining all actions that occur in the admin area.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-xophz-compass-event-horizon-admin.php';

		/**
		 * The class responsible for defining all actions that occur in the public-facing
		 * side of the site.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-xophz-compass-event-horizon-public.php';

		/**
		 * The class responsible for the Spark Registry REST API.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/api/class-xophz-compass-event-horizon-spark-registry.php';

		/**
		 * The class responsible for the Tasks (Bubblegum) CPT and REST API.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/api/class-xophz-compass-event-horizon-tasks.php';

		/**
		 * The class responsible for the Reactions API.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/api/class-xophz-compass-event-horizon-reactions.php';

		/**
		 * The class responsible for the Passport Signer API.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/api/class-xophz-compass-event-horizon-passport-signer.php';

		/**
		 * The class responsible for the Jukebox API.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/api/class-xophz-compass-event-horizon-jukebox.php';

		/**
		 * The class responsible for the Godhead Taxonomy & Seeding.
		 */
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-xophz-compass-event-horizon-godhead.php';

		$this->loader = new Xophz_Compass_Event_Horizon_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the Xophz_Compass_Event_Horizon_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {

		$plugin_i18n = new Xophz_Compass_Event_Horizon_i18n();

		$this->loader->add_action( 'init', $plugin_i18n, 'load_plugin_textdomain', 5 );

	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		$plugin_admin = new Xophz_Compass_Event_Horizon_Admin( $this->get_xophz_compass_event_horizon(), $this->get_version() );

		$this->loader->add_action( 'admin_menu', $plugin_admin, 'addToMenu' );
		$this->loader->add_action( 'admin_init', $plugin_admin, 'register_settings' );
		add_action( 'update_option_youmeos_load_mode', array( $plugin_admin, 'flush_rewrites_on_save' ), 10, 2 );
		add_action( 'update_option_youmeos_load_page_id', array( $plugin_admin, 'flush_rewrites_on_save' ), 10, 2 );

		// YouMeOS admin bar button — priority 11 places it after the WP logo (priority 10).
		$this->loader->add_action( 'admin_bar_menu', $plugin_admin, 'add_admin_bar_button', 11 );

		// Enqueue admin bar styles on both admin and front-end.
		$this->loader->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $plugin_admin, 'enqueue_styles' );

		// Hook YouMeOS specific taxonomies to the XP Engine
		$plugin_godhead = new Xophz_Compass_Event_Horizon_Godhead( $this->get_xophz_compass_event_horizon(), $this->get_version() );
		$this->loader->add_action( 'xophz_register_xp_taxonomies', $plugin_godhead, 'register_and_seed_godhead_taxonomy' );

	}

	/**
	 * Register all of the hooks related to the public-facing functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_public_hooks() {

		$plugin_public = new Xophz_Compass_Event_Horizon_Public( $this->get_xophz_compass_event_horizon(), $this->get_version() );
		$spark_registry = new Xophz_Compass_Event_Horizon_Spark_Registry();
		$tasks_api = new Xophz_Compass_Event_Horizon_Tasks();
		$reactions_api = new Xophz_Compass_Event_Horizon_Reactions();

		// $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_styles' );
		// $this->loader->add_action( 'wp_enqueue_scripts', $plugin_public, 'enqueue_scripts' );

    $this->loader->add_action( 'init', $plugin_public, 'register_shortcodes' );
    $this->loader->add_action( 'init', $plugin_public, 'register_endpoints' );
    $this->loader->add_filter( 'query_vars', $plugin_public, 'register_query_vars' );
    $this->loader->add_action( 'template_redirect', $plugin_public, 'template_redirect' );
    $this->loader->add_action( 'rest_api_init', $plugin_public, 'register_api_routes' );
		
    // Expose nav menus to REST API natively
    $this->loader->add_filter( 'register_taxonomy_args', $plugin_public, 'expose_menus_to_rest', 10, 2 );
    $this->loader->add_filter( 'register_post_type_args', $plugin_public, 'expose_menu_items_to_rest', 10, 2 );
    $this->loader->add_filter( 'rest_menu_read_access', $plugin_public, 'allow_rest_menu_read_access', 10, 2 );

		// Register Spark Registry Routes
		$this->loader->add_action( 'rest_api_init', $spark_registry, 'register_routes' );

		// Register Tasks (Bubblegum) CPT and API
		$this->loader->add_action( 'init', $tasks_api, 'register_cpt' );
		$this->loader->add_action( 'rest_api_init', $tasks_api, 'register_routes' );

		// Register Reactions API
		$this->loader->add_action( 'rest_api_init', $reactions_api, 'register_routes' );

		// Register Passport Signer API
		$passport_signer = new Xophz_Compass_Event_Horizon_Passport_Signer();
		$this->loader->add_action( 'rest_api_init', $passport_signer, 'register_routes' );

		// Register Jukebox API
		$jukebox_api = new Xophz_Compass_Event_Horizon_Jukebox();
		$this->loader->add_action( 'init', $jukebox_api, 'register_cpt' );
		$this->loader->add_action( 'rest_api_init', $jukebox_api, 'register_routes' );

		// Register AJAX handler for nonce refresh
		$this->loader->add_action( 'wp_ajax_youmeos_refresh_nonce', $plugin_public, 'ajax_refresh_nonce' );

		// Inject Pi Trigger on Frontend
		$this->loader->add_action( 'wp_footer', $plugin_public, 'inject_pi_trigger' );

	}

	/**
	 * Run the loader to execute all of the hooks with WordPress.
	 *
	 * @since    1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_xophz_compass_event_horizon() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Xophz_Compass_Event_Horizon_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}

	/**
	 * Retrieve the version number of the plugin.
	 *
	 * @since     1.0.0
	 * @return    string    The version number of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

}
