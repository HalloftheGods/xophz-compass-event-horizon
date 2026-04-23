<?php

class Xophz_Compass_Event_Horizon_Jukebox {

	public function register_cpt() {
		$labels = array(
			'name'                  => _x( 'Radio Stations', 'Post Type General Name', 'xophz-compass-event-horizon' ),
			'singular_name'         => _x( 'Radio Station', 'Post Type Singular Name', 'xophz-compass-event-horizon' ),
			'menu_name'             => __( 'Radio Stations', 'xophz-compass-event-horizon' ),
			'all_items'             => __( 'All Stations', 'xophz-compass-event-horizon' ),
			'add_new_item'          => __( 'Add New Station', 'xophz-compass-event-horizon' ),
			'add_new'               => __( 'Add New', 'xophz-compass-event-horizon' ),
			'new_item'              => __( 'New Station', 'xophz-compass-event-horizon' ),
			'edit_item'             => __( 'Edit Station', 'xophz-compass-event-horizon' ),
			'update_item'           => __( 'Update Station', 'xophz-compass-event-horizon' ),
			'view_item'             => __( 'View Station', 'xophz-compass-event-horizon' ),
			'search_items'          => __( 'Search Station', 'xophz-compass-event-horizon' ),
		);
		$args = array(
			'label'                 => __( 'Radio Station', 'xophz-compass-event-horizon' ),
			'labels'                => $labels,
			'supports'              => array( 'title', 'editor', 'author', 'comments', 'custom-fields' ),
			'taxonomies'            => array( 'category', 'post_tag' ),
			'hierarchical'          => false,
			'public'                => true,
			'show_ui'               => true,
			'show_in_menu'          => true,
			'menu_position'         => 25,
			'menu_icon'             => 'dashicons-format-audio',
			'show_in_admin_bar'     => true,
			'show_in_nav_menus'     => true,
			'can_export'            => true,
			'has_archive'           => true,
			'exclude_from_search'   => false,
			'publicly_queryable'    => true,
			'capability_type'       => 'post',
			'show_in_rest'          => true, // Exposes to WP REST API
		);
		register_post_type( 'radio_station', $args );

		// Register Meta fields for REST API access
		$meta_fields = [
			'stream_url'           => 'string',
			'genre'                => 'string',
			'artist'               => 'string',
			'total_listen_minutes' => 'integer',
			'rating_score'         => 'number',
			'rating_count'         => 'integer',
		];

		foreach ( $meta_fields as $key => $type ) {
			register_post_meta( 'radio_station', $key, array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => $type,
			) );
		}
	}

	public function register_routes() {
		register_rest_route( 'xophz/v1', '/jukebox/listen', array(
			'methods'             => 'POST',
			'callback'            => array( $this, 'record_listen_time' ),
			'permission_callback' => '__return_true',
		) );

		register_rest_route( 'xophz/v1', '/jukebox/rate', array(
			'methods'             => 'POST',
			'callback'            => array( $this, 'rate_track' ),
			'permission_callback' => function () {
				return is_user_logged_in();
			},
		) );
	}

	public function record_listen_time( WP_REST_Request $request ) {
		$track_id = intval( $request->get_param( 'track_id' ) );
		$duration = intval( $request->get_param( 'duration_minutes' ) );

		if ( ! $track_id || $duration <= 0 ) {
			return new WP_Error( 'invalid_params', 'Invalid track ID or duration', array( 'status' => 400 ) );
		}

		$current = (int) get_post_meta( $track_id, 'total_listen_minutes', true );
		update_post_meta( $track_id, 'total_listen_minutes', $current + $duration );

		return rest_ensure_response( array(
			'success' => true,
			'total_listen_minutes' => $current + $duration,
		) );
	}

	public function rate_track( WP_REST_Request $request ) {
		$track_id = intval( $request->get_param( 'track_id' ) );
		$rating   = floatval( $request->get_param( 'rating' ) );

		if ( ! $track_id || $rating < 1 || $rating > 5 ) {
			return new WP_Error( 'invalid_params', 'Invalid track ID or rating', array( 'status' => 400 ) );
		}

		$current_score = (float) get_post_meta( $track_id, 'rating_score', true );
		$current_count = (int) get_post_meta( $track_id, 'rating_count', true );

		$new_count = $current_count + 1;
		$new_score = ( ($current_score * $current_count) + $rating ) / $new_count;

		update_post_meta( $track_id, 'rating_score', $new_score );
		update_post_meta( $track_id, 'rating_count', $new_count );

		return rest_ensure_response( array(
			'success' => true,
			'rating_score' => $new_score,
			'rating_count' => $new_count,
		) );
	}
}
