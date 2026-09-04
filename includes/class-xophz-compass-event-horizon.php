<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://youmeos.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Xophz_Compass_Plugin_Base' ) ) {
	$core_plugin_base = dirname( dirname( __DIR__ ) ) . '/xophz-compass/includes/core/class-compass-plugin-base.php';
	if ( file_exists( $core_plugin_base ) ) {
		require_once $core_plugin_base;
	}
}

/**
 * The core plugin class.
 *
 * Extends Xophz_Compass_Plugin_Base and adopts Xophz_Compass_Hookable_Trait
 * to eliminate boilerplate loaders, redundant i18n, and hollow deactivators.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 */
class Xophz_Compass_Event_Horizon extends Xophz_Compass_Plugin_Base {
	use Xophz_Compass_Hookable_Trait;

	/**
	 * Unique plugin identifier string for backward compatibility.
	 *
	 * @var string
	 */
	protected string $plugin_name = 'xophz-compass-event-horizon';

	/**
	 * Define the core functionality of the plugin.
	 *
	 * Initializes the base class and registers lifecycle and YouMeOS hooks.
	 *
	 * @param string|null $param1  Plugin file path or slug.
	 * @param string|null $version Plugin version.
	 * @param string      $param3  Text domain or plugin file path.
	 */
	public function __construct( ?string $param1 = null, ?string $version = null, string $param3 = '' ) {
		if ( null === $param1 ) {
			$file = dirname( __DIR__ ) . '/xophz-compass-event-horizon.php';
			$ver  = defined( 'XOPHZ_COMPASS_EVENT_HORIZON_VERSION' ) ? XOPHZ_COMPASS_EVENT_HORIZON_VERSION : '26.9.3-1328';
			parent::__construct( $file, $ver, 'xophz-compass-event-horizon' );
		} else {
			parent::__construct( $param1, $version ?? '1.0.0', $param3 );
		}
		$this->plugin_name = $this->text_domain;
		$this->loader = $this;
	}

	/**
	 * Initialize plugin dependencies, admin hooks, and public hooks.
	 * Overrides Xophz_Compass_Plugin_Base::init().
	 */
	public function init(): void {
		$this->load_dependencies();
		$this->define_admin_hooks();
		$this->define_public_hooks();
	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Redundant loader and i18n classes have been purged in Milestone 3;
	 * hook orchestration is provided natively via Xophz_Compass_Hookable_Trait
	 * and textdomain loading is handled by Xophz_Compass_Plugin_Base.
	 *
	 * @access private
	 */
	private function load_dependencies(): void {
		$plugin_dir = plugin_dir_path( dirname( __FILE__ ) );

		require_once $plugin_dir . 'admin/class-xophz-compass-event-horizon-admin.php';
		require_once $plugin_dir . 'public/class-xophz-compass-event-horizon-public.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-spark-registry.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-tasks.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-reflections.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-reactions.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-passport-signer.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-jukebox.php';
		require_once $plugin_dir . 'admin/class-xophz-compass-event-horizon-godhead.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-system-stats.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-patreon.php';
		require_once $plugin_dir . 'includes/api/class-xophz-compass-event-horizon-settings.php';
	}

	/**
	 * Register all hooks related to admin area functionality.
	 *
	 * @access private
	 */
	private function define_admin_hooks(): void {
		$plugin_admin = new Xophz_Compass_Event_Horizon_Admin( $this->get_xophz_compass_event_horizon(), $this->get_version() );

		$this->add_action( 'admin_menu', $plugin_admin, 'addToMenu' );
		$this->add_action( 'admin_init', $plugin_admin, 'register_settings' );
		$this->add_action( 'update_option_youmeos_load_mode', $plugin_admin, 'flush_rewrites_on_save', 10, 2 );
		$this->add_action( 'update_option_youmeos_load_page_id', $plugin_admin, 'flush_rewrites_on_save', 10, 2 );
		$this->add_action( 'update_option_youmeos_custom_slug', $plugin_admin, 'flush_rewrites_on_save', 10, 2 );

		// YouMeOS admin bar button: priority 11 places it after the WP logo (priority 10).
		$this->add_action( 'admin_bar_menu', $plugin_admin, 'add_admin_bar_button', 11 );

		// Enqueue admin bar styles on both admin and front-end.
		$this->add_action( 'admin_enqueue_scripts', $plugin_admin, 'enqueue_styles' );
		$this->add_action( 'wp_enqueue_scripts', $plugin_admin, 'enqueue_styles' );

		// Hook YouMeOS specific taxonomies to the XP Engine
		$plugin_godhead = new Xophz_Compass_Event_Horizon_Godhead( $this->get_xophz_compass_event_horizon(), $this->get_version() );
		$this->add_action( 'xophz_register_xp_taxonomies', $plugin_godhead, 'register_and_seed_godhead_taxonomy' );
	}

	/**
	 * Register all hooks related to public-facing functionality.
	 *
	 * @access private
	 */
	private function define_public_hooks(): void {
		$plugin_public  = new Xophz_Compass_Event_Horizon_Public( $this->get_xophz_compass_event_horizon(), $this->get_version() );
		$spark_registry = new Xophz_Compass_Event_Horizon_Spark_Registry();
		$tasks_api      = new Xophz_Compass_Event_Horizon_Tasks();
		$reactions_api  = new Xophz_Compass_Event_Horizon_Reactions();

		$this->add_action( 'init', $plugin_public, 'register_shortcodes' );
		$this->add_action( 'init', $plugin_public, 'register_endpoints' );
		$this->add_filter( 'query_vars', $plugin_public, 'register_query_vars' );
		$this->add_action( 'template_redirect', $plugin_public, 'template_redirect' );
		$this->add_action( 'rest_api_init', $plugin_public, 'register_api_routes' );

		// Expose nav menus to REST API natively
		$this->add_filter( 'register_taxonomy_args', $plugin_public, 'expose_menus_to_rest', 10, 2 );
		$this->add_filter( 'register_post_type_args', $plugin_public, 'expose_menu_items_to_rest', 10, 2 );
		$this->add_filter( 'rest_menu_read_access', $plugin_public, 'allow_rest_menu_read_access', 10, 2 );
		$this->add_filter( 'robots_txt', $plugin_public, 'filter_robots_txt', 99, 2 );

		// Register Spark Registry Routes
		$this->add_action( 'rest_api_init', $spark_registry, 'register_routes' );

		// Register Tasks (Bubblegum) CPT and API
		$this->add_action( 'init', $tasks_api, 'register_cpt' );
		$this->add_action( 'rest_api_init', $tasks_api, 'register_routes' );

		// Register Helios Reflections CPT and API
		$reflections_api = new Xophz_Compass_Event_Horizon_Reflections();
		$this->add_action( 'init', $reflections_api, 'register_cpt' );
		$this->add_action( 'rest_api_init', $reflections_api, 'register_routes' );

		// Register Reactions API
		$this->add_action( 'rest_api_init', $reactions_api, 'register_routes' );

		// Register Passport Signer API
		$passport_signer = new Xophz_Compass_Event_Horizon_Passport_Signer();
		$this->add_action( 'rest_api_init', $passport_signer, 'register_routes' );

		// Register Jukebox API
		$jukebox_api = new Xophz_Compass_Event_Horizon_Jukebox();
		$this->add_action( 'init', $jukebox_api, 'register_cpt' );
		$this->add_action( 'rest_api_init', $jukebox_api, 'register_routes' );

		// Register System Stats API
		$system_stats_api = new Xophz_Compass_Event_Horizon_System_Stats();
		$this->add_action( 'rest_api_init', $system_stats_api, 'register_routes' );

		// Register Patreon API
		$patreon_api = new Xophz_Compass_Event_Horizon_Patreon();
		$this->add_action( 'rest_api_init', $patreon_api, 'register_routes' );

		// Register Settings & White-Label API
		$settings_api = new Xophz_Compass_Event_Horizon_Settings();
		$this->add_action( 'rest_api_init', $settings_api, 'register_routes' );

		// Register AJAX handler for nonce refresh
		$this->add_action( 'wp_ajax_youmeos_refresh_nonce', $plugin_public, 'ajax_refresh_nonce' );
		$this->add_action( 'wp_ajax_nopriv_youmeos_refresh_nonce', $plugin_public, 'ajax_refresh_nonce' );

		// Inject Pi Trigger on Frontend
		$this->add_action( 'wp_footer', $plugin_public, 'inject_pi_trigger' );
	}

	/**
	 * Declare YouMeOS Spark definition for Event Horizon.
	 *
	 * @return array<string, mixed>
	 */
	public function get_spark_definition(): ?array {
		return array(
			'id'          => 'event-horizon',
			'title'       => 'Event Horizon',
			'description' => 'Bring transparency to your user-to-media connectivity.',
			'icon'        => 'fal fa-meteor',
			'color'       => '#62c9ff',
			'url'         => '/w4-youmeos',
			'category'    => 'os',
			'type'        => 'webspark',
			'status'      => 'pi',
			'weight'      => 10,
			'active'      => true,
			'version'     => $this->get_version(),
		);
	}

	/**
	 * Add Settings shortcut link to WordPress Plugins list page.
	 *
	 * @param array<string, string> $links Current action links.
	 * @return array<string, string> Modified action links.
	 */
	public function add_action_links( array $links ): array {
		$settings_url  = admin_url( 'options-general.php?page=w4-youmeos' );
		$settings_link = '<a href="' . esc_url( $settings_url ) . '">' . esc_html__( 'Settings', 'xophz-compass-event-horizon' ) . '</a>';
		return array_merge( array( 'settings' => $settings_link ), $links );
	}

	/**
	 * The name of the plugin used to uniquely identify it.
	 *
	 * @return string The name of the plugin.
	 */
	public function get_xophz_compass_event_horizon(): string {
		return $this->plugin_name ?? $this->text_domain;
	}

	/**
	 * Backward-compatibility proxy for purged loader class.
	 *
	 * @return self
	 */
	public function get_loader(): self {
		return $this;
	}
}
