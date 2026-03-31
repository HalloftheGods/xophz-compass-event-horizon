<?php

class Xophz_Compass_Event_Horizon_Admin {

	private $plugin_name;
	private $version;

	const OPTION_LOAD_MODE = 'youmeos_load_mode';
	const OPTION_LOAD_PAGE = 'youmeos_load_page_id';

	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version = $version;
	}

	public function enqueue_styles() {
		wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/xophz-compass-event-horizon-admin.css', array(), $this->version, 'all' );
	}

	public function enqueue_scripts() {
		wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/xophz-compass-event-horizon-admin.js', array( 'jquery' ), $this->version, false );
	}

	public function addToMenu() {
		Xophz_Compass::add_submenu( $this->plugin_name );

		add_options_page(
			'YouMeOS Settings',
			'YouMeOS',
			'manage_options',
			'youmeos-settings',
			array( $this, 'render_settings_page' )
		);
	}

	public function register_settings() {
		register_setting( 'youmeos_settings', self::OPTION_LOAD_MODE, [
			'type' => 'string',
			'default' => 'routes_only',
			'sanitize_callback' => array( $this, 'sanitize_load_mode' ),
		] );

		register_setting( 'youmeos_settings', self::OPTION_LOAD_PAGE, [
			'type' => 'integer',
			'default' => 0,
			'sanitize_callback' => 'absint',
		] );

		add_settings_section(
			'youmeos_portal_section',
			'Portal Configuration',
			array( $this, 'render_section_description' ),
			'youmeos-settings'
		);

		add_settings_field(
			'youmeos_load_mode_field',
			'Load YouMeOS On',
			array( $this, 'render_load_mode_field' ),
			'youmeos-settings',
			'youmeos_portal_section'
		);

		add_settings_field(
			'youmeos_load_page_field',
			'Target Page',
			array( $this, 'render_load_page_field' ),
			'youmeos-settings',
			'youmeos_portal_section'
		);
	}

	public function sanitize_load_mode( $value ) {
		$validModes = [ 'routes_only', 'homepage', 'specific_page' ];
		$isValid = in_array( $value, $validModes, true );
		return $isValid ? $value : 'routes_only';
	}

	public function flush_rewrites_on_save( $old_value, $new_value ) {
		flush_rewrite_rules();
	}

	public function render_section_description() {
		echo '<p>Configure where the YouMeOS universe portal loads on your site. The <code>/youmeos/</code> and <code>/os/</code> routes are always available.</p>';
	}

	public function render_load_mode_field() {
		$currentMode = get_option( self::OPTION_LOAD_MODE, 'routes_only' );
		?>
		<fieldset>
			<label>
				<input type="radio" name="<?php echo self::OPTION_LOAD_MODE; ?>" value="routes_only" <?php checked( $currentMode, 'routes_only' ); ?>>
				<strong>Routes Only</strong> — <code>/youmeos/</code> and <code>/os/</code> only
			</label><br>
			<label>
				<input type="radio" name="<?php echo self::OPTION_LOAD_MODE; ?>" value="homepage" <?php checked( $currentMode, 'homepage' ); ?>>
				<strong>Homepage</strong> — Replace the site's front page with YouMeOS
			</label><br>
			<label>
				<input type="radio" name="<?php echo self::OPTION_LOAD_MODE; ?>" value="specific_page" <?php checked( $currentMode, 'specific_page' ); ?>>
				<strong>Specific Page</strong> — Load on a chosen WordPress page
			</label>
		</fieldset>
		<?php
	}

	public function render_load_page_field() {
		$selectedPageId = get_option( self::OPTION_LOAD_PAGE, 0 );
		$currentMode = get_option( self::OPTION_LOAD_MODE, 'routes_only' );

		wp_dropdown_pages( [
			'name' => self::OPTION_LOAD_PAGE,
			'selected' => $selectedPageId,
			'show_option_none' => '— Select a Page —',
			'option_none_value' => '0',
		] );

		$isHidden = $currentMode !== 'specific_page';
		?>
		<p class="description">Only used when "Specific Page" is selected above.</p>
		<script>
		(function() {
			const radios = document.querySelectorAll('input[name="<?php echo self::OPTION_LOAD_MODE; ?>"]');
			const pageRow = document.getElementById('<?php echo self::OPTION_LOAD_PAGE; ?>').closest('tr');

			function togglePageDropdown() {
				const selected = document.querySelector('input[name="<?php echo self::OPTION_LOAD_MODE; ?>"]:checked');
				const isSpecificPage = selected && selected.value === 'specific_page';
				pageRow.style.display = isSpecificPage ? '' : 'none';
			}

			radios.forEach(function(radio) { radio.addEventListener('change', togglePageDropdown); });
			togglePageDropdown();
		})();
		</script>
		<?php
	}

	public function render_settings_page() {
		?>
		<div class="wrap">
			<h1>YouMeOS Portal Settings</h1>
			<form method="post" action="options.php">
				<?php
				settings_fields( 'youmeos_settings' );
				do_settings_sections( 'youmeos-settings' );
				submit_button( 'Save Portal Settings' );
				?>
			</form>
		</div>
		<?php
	}
}
