<?php

class Xophz_Compass_Event_Horizon_Admin {

	private $plugin_name;
	private $version;

	const OPTION_LOAD_MODE = 'youmeos_load_mode';
	const OPTION_LOAD_PAGE = 'youmeos_load_page_id';
	const OPTION_ENABLE_PI_TRIGGER = 'youmeos_enable_pi_trigger';
	const OPTION_OG_TITLE  = 'youmeos_og_title';
	const OPTION_OG_DESC   = 'youmeos_og_description';
	const OPTION_OG_IMAGE  = 'youmeos_og_image';

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

	private function get_youmeos_base_url( $path = '' ) {
		$loadMode = get_option( self::OPTION_LOAD_MODE, 'routes_only' );
		$base_url = home_url( '/youmeos/' );

		if ( $loadMode === 'homepage' ) {
			$base_url = home_url( '/' );
		} elseif ( $loadMode === 'specific_page' ) {
			$page_id = get_option( self::OPTION_LOAD_PAGE, 0 );
			if ( $page_id ) {
				$base_url = trailingslashit( get_permalink( $page_id ) );
			}
		}

		return $base_url . ltrim( $path, '/' );
	}

	/**
	 * Add YouMeOS dropdown menu to the WordPress admin bar, after the WP logo.
	 * Mirrors the WP logo menu pattern with YouMeOS-specific links.
	 *
	 * @param WP_Admin_Bar $wp_admin_bar The admin bar instance.
	 */
	public function add_admin_bar_button( $wp_admin_bar ) {
		$icon_url = plugin_dir_url( __FILE__ ) . 'images/youmeos-logo.png';

		$icon_html = '<img src="' . esc_url( $icon_url ) . '" '
			. 'alt="YouMeOS" '
			. 'style="height:20px;width:20px;vertical-align:middle;padding:6px 0;" />';

		// ── Parent node (the clickable logo + label) ──
		$wp_admin_bar->add_node( array(
			'id'    => 'youmeos-menu',
			'title' => $icon_html . '<span class="youmeos-ab-label">YouMeOS</span>',
			'href'  => $this->get_youmeos_base_url(),
			'meta'  => array(
				'class' => 'youmeos-admin-bar-btn',
				'title' => 'YouMeOS',
			),
		) );

		// ── Group 1: Local links ──
		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-menu',
			'id'     => 'youmeos-portal',
			'title'  => 'Open Portal',
			'href'   => $this->get_youmeos_base_url(),
			'meta'   => array( 'title' => 'Launch the local YouMeOS portal' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-menu',
			'id'     => 'youmeos-about',
			'title'  => 'About YouMeOS',
			'href'   => $this->get_youmeos_base_url( '#/about' ),
			'meta'   => array( 'title' => 'About YouMeOS' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-menu',
			'id'     => 'youmeos-get-involved',
			'title'  => 'Get Involved',
			'href'   => 'https://youmeos.com/community',
			'meta'   => array( 'target' => '_blank' ),
		) );

		// ── Group 2: External links (separated by divider) ──
		$wp_admin_bar->add_group( array(
			'parent' => 'youmeos-menu',
			'id'     => 'youmeos-external',
			'meta'   => array( 'class' => 'ab-sub-secondary' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-external',
			'id'     => 'youmeos-website',
			'title'  => 'YouMeOS.com',
			'href'   => 'https://youmeos.com',
			'meta'   => array( 'target' => '_blank' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-external',
			'id'     => 'youmeos-docs',
			'title'  => 'Documentation',
			'href'   => 'https://youmeos.com/docs',
			'meta'   => array( 'target' => '_blank' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-external',
			'id'     => 'youmeos-community',
			'title'  => 'Community',
			'href'   => 'https://youmeos.com/community',
			'meta'   => array( 'target' => '_blank' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-external',
			'id'     => 'youmeos-support',
			'title'  => 'Support',
			'href'   => 'https://youmeos.com/support',
			'meta'   => array( 'target' => '_blank' ),
		) );

		$wp_admin_bar->add_node( array(
			'parent' => 'youmeos-external',
			'id'     => 'youmeos-feedback',
			'title'  => 'Feedback',
			'href'   => 'https://youmeos.com/feedback',
			'meta'   => array( 'target' => '_blank' ),
		) );
	}

	public function addToMenu() {
		Xophz_Compass::add_submenu( $this->plugin_name );

		add_submenu_page(
			'w4-protocol',
			'YouMeOS Settings',
			'YouMeOS',
			'manage_options',
			'w4-youmeos',
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

		register_setting( 'youmeos_settings', self::OPTION_ENABLE_PI_TRIGGER, [
			'type' => 'string', // Actually boolean, but using string
			'default' => true,
			'sanitize_callback' => 'rest_sanitize_boolean',
		] );

		register_setting( 'youmeos_settings', 'youmeos_custom_slug', [
			'type' => 'string',
			'default' => '',
			'sanitize_callback' => 'sanitize_title',
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

		add_settings_field(
			'youmeos_enable_pi_trigger_field',
			'Enable Pi Trigger',
			array( $this, 'render_enable_pi_trigger_field' ),
			'youmeos-settings',
			'youmeos_portal_section'
		);

	}

	public function sanitize_load_mode( $value ) {
		$validModes = [ 'routes_only', 'homepage', 'specific_page', 'custom_slug' ];
		$isValid = in_array( $value, $validModes, true );
		return $isValid ? $value : 'routes_only';
	}

	public function flush_rewrites_on_save( $old_value, $new_value ) {
		if ( $old_value !== $new_value ) {
			delete_option( 'rewrite_rules' );
		}
	}

	public function render_section_description() {
		echo '<p>Configure where the YouMeOS universe portal loads on your site. The <code>/youmeos/</code> and <code>/os/</code> routes are always available.</p>';
	}

	public function render_load_mode_field() {
		$currentMode = get_option( self::OPTION_LOAD_MODE, 'routes_only' );
		$customSlug = get_option( 'youmeos_custom_slug', '' );
		?>
		<fieldset>
			<label>
				<input type="radio" name="<?php echo self::OPTION_LOAD_MODE; ?>" value="routes_only" <?php checked( $currentMode, 'routes_only' ); ?>>
				<strong>Routes Only</strong> — <code>/youmeos/</code> and <code>/os/</code> only
			</label><br>
			<label style="display: flex; align-items: center; gap: 8px; margin: 8px 0;">
				<input type="radio" name="<?php echo self::OPTION_LOAD_MODE; ?>" value="custom_slug" <?php checked( $currentMode, 'custom_slug' ); ?>>
				<strong>Custom Slug</strong> — 
				<code>/</code> <input type="text" id="youmeos_custom_slug_input" name="youmeos_custom_slug" value="<?php echo esc_attr( $customSlug ); ?>" class="regular-text" placeholder="e.g. portal" style="width: 150px;" /> <code>/</code>
			</label>
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
			const slugInput = document.getElementById('youmeos_custom_slug_input');

			function toggleDropdowns() {
				const selected = document.querySelector('input[name="<?php echo self::OPTION_LOAD_MODE; ?>"]:checked');
				const isSpecificPage = selected && selected.value === 'specific_page';
				const isCustomSlug = selected && selected.value === 'custom_slug';
				
				if (pageRow) pageRow.style.display = isSpecificPage ? '' : 'none';
				if (slugInput) {
					slugInput.disabled = !isCustomSlug;
					if (isCustomSlug) slugInput.focus();
				}
			}

			radios.forEach(function(radio) { radio.addEventListener('change', toggleDropdowns); });
			toggleDropdowns();
		})();
		</script>
		<?php
	}

	public function render_enable_pi_trigger_field() {
		$isEnabled = get_option( self::OPTION_ENABLE_PI_TRIGGER, true );
		?>
		<label>
			<input type="checkbox" name="<?php echo self::OPTION_ENABLE_PI_TRIGGER; ?>" value="1" <?php checked( $isEnabled, true ); ?>>
			Show the 'π' frontend trigger link to YouMeOS in the bottom left corner.
		</label>
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
