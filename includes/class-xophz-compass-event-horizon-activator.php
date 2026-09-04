<?php
/**
 * Fired during plugin activation
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 */

/**
 * Fired during plugin activation.
 *
 * This class defines all code necessary to run during the plugin's activation.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes
 */
class Xophz_Compass_Event_Horizon_Activator {

	/**
	 * Activate plugin prerequisites.
	 *
	 * @since    1.0.0
	 */
	public static function activate() {
		if ( ! class_exists( 'Xophz_Compass' ) ) {
			if ( ! function_exists( 'deactivate_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}
			deactivate_plugins( plugin_basename( dirname( __DIR__ ) . '/xophz-compass-event-horizon.php' ) );
			return;
		}
	}
}
