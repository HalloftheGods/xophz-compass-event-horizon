<?php

/**
 * The Event Horizon specific Godhead Taxonomy & Seeding logic.
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/admin
 */

class Xophz_Compass_Event_Horizon_Godhead {

  private $plugin_name;
  private $version;

  public $action_hooks = [
    'xophz_register_xp_taxonomies' => 'register_and_seed_godhead_taxonomy',
  ];

  public function __construct( $plugin_name, $version ) {
    $this->plugin_name = $plugin_name;
    $this->version = $version;
  }

  public function register_and_seed_godhead_taxonomy() {
    // 1. Register Taxonomy
    $labels = array(
      'name'                       => _x( 'Godhead Traits', 'Taxonomy General Name', 'xophz-compass-event-horizon' ),
      'singular_name'              => _x( 'Godhead Trait', 'Taxonomy Singular Name', 'xophz-compass-event-horizon' ),
      'menu_name'                  => __( 'Godhead Traits', 'xophz-compass-event-horizon' ),
      'all_items'                  => __( 'All Traits', 'xophz-compass-event-horizon' ),
      'parent_item'                => __( 'Parent Trait', 'xophz-compass-event-horizon' ),
      'parent_item_colon'          => __( 'Parent Trait:', 'xophz-compass-event-horizon' ),
      'new_item_name'              => __( 'New Trait Name', 'xophz-compass-event-horizon' ),
      'add_new_item'               => __( 'Add New Trait', 'xophz-compass-event-horizon' ),
      'edit_item'                  => __( 'Edit Trait', 'xophz-compass-event-horizon' ),
      'update_item'                => __( 'Update Trait', 'xophz-compass-event-horizon' ),
      'view_item'                  => __( 'View Trait', 'xophz-compass-event-horizon' ),
      'separate_items_with_commas' => __( 'Separate traits with commas', 'xophz-compass-event-horizon' ),
      'add_or_remove_items'        => __( 'Add or remove traits', 'xophz-compass-event-horizon' ),
      'choose_from_most_used'      => __( 'Choose from the most used', 'xophz-compass-event-horizon' ),
      'popular_items'              => __( 'Popular Traits', 'xophz-compass-event-horizon' ),
      'search_items'               => __( 'Search Traits', 'xophz-compass-event-horizon' ),
      'not_found'                  => __( 'Not Found', 'xophz-compass-event-horizon' ),
      'no_terms'                   => __( 'No traits', 'xophz-compass-event-horizon' ),
      'items_list'                 => __( 'Traits list', 'xophz-compass-event-horizon' ),
      'items_list_navigation'      => __( 'Traits list navigation', 'xophz-compass-event-horizon' ),
    );
    $args = array(
      'labels'                     => $labels,
      'hierarchical'               => true,
      'public'                     => true,
      'show_ui'                    => true,
      'show_admin_column'          => true,
      'show_in_nav_menus'          => true,
      'show_tagcloud'              => true,
      'show_in_rest'               => true,
    );
    register_taxonomy( 'godhead_trait', array( 'xp_action' ), $args );

    // 2. Seed the DB if not already seeded
    if ( ! get_option( 'xophz_godhead_seeded_v2' ) ) {
        $this->seed_godhead_matrix();
        update_option( 'xophz_godhead_seeded_v2', true );
    }
  }

  private function seed_godhead_matrix() {
    $json_path = plugin_dir_path( __FILE__ ) . 'godhead-matrix.json';
    if ( file_exists( $json_path ) ) {
      $json_data = file_get_contents( $json_path );
      $matrix = json_decode( $json_data, true );

      if ( $matrix ) {
        foreach ( $matrix as $archetype ) {
          // Layer 1: Archetype
          $term_archetype = wp_insert_term( $archetype['name'], 'godhead_trait' );
          if ( is_wp_error( $term_archetype ) ) continue;
          $archetype_id = $term_archetype['term_id'];

          if ( ! empty( $archetype['children'] ) ) {
            foreach ( $archetype['children'] as $node ) {
              // Layer 2: Node (Zodiac, Planet, Element)
              $term_node = wp_insert_term( $node['name'], 'godhead_trait', array( 'parent' => $archetype_id ) );
              if ( is_wp_error( $term_node ) ) continue;
              $node_id = $term_node['term_id'];

              if ( ! empty( $node['children'] ) ) {
                foreach ( $node['children'] as $binary ) {
                  // Layer 3: Binary (Force, Form)
                  $term_binary = wp_insert_term( $binary['name'], 'godhead_trait', array( 'parent' => $node_id ) );
                  if ( is_wp_error( $term_binary ) ) continue;
                  $binary_id = $term_binary['term_id'];

                  if ( ! empty( $binary['children'] ) ) {
                    foreach ( $binary['children'] as $trait ) {
                      // Layer 4: Granular Trait
                      wp_insert_term( $trait['name'], 'godhead_trait', array( 'parent' => $binary_id ) );
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
