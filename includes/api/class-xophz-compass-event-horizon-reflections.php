<?php

/**
 * Handles the Helios Light & Shadow Reflection CPT and REST API System
 */
class Xophz_Compass_Event_Horizon_Reflections {

	/**
	 * Register the Custom Post Type
	 */
	public function register_cpt() {
		$args = array(
			'label'               => __( 'Helios Reflection', 'xophz-compass-event-horizon' ),
			'description'         => __( 'A private or featured reflection journal entry in Helios Vault.', 'xophz-compass-event-horizon' ),
			'public'              => false,
			'publicly_queryable'  => false,
			'show_ui'             => false,
			'show_in_menu'        => false,
			'query_var'           => true,
			'rewrite'             => false,
			'capability_type'     => 'post',
			'has_archive'         => false,
			'hierarchical'        => false,
			'supports'            => array( 'title', 'editor', 'author', 'custom-fields' ),
		);
		register_post_type( 'helios_reflection', $args );
	}

	/**
	 * Register secure API Routes
	 */
	public function register_routes() {
		$namespace = 'youmeos/v1';

		register_rest_route( $namespace, '/reflections', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_reflections' ),
				'permission_callback' => array( $this, 'check_auth' ),
			),
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_reflection' ),
				'permission_callback' => array( $this, 'check_auth' ),
			),
		) );

		register_rest_route( $namespace, '/reflections/(?P<id>\d+)', array(
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_reflection' ),
				'permission_callback' => array( $this, 'check_auth' ),
			),
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'delete_reflection' ),
				'permission_callback' => array( $this, 'check_auth' ),
			),
		) );
	}

	/**
	 * Auth check for REST routes
	 */
	public function check_auth() {
		return is_user_logged_in();
	}

	/**
	 * GET /youmeos/v1/reflections
	 */
	public function get_reflections( WP_REST_Request $request ) {
		$user_id = get_current_user_id();

		// Fetch all private and publish reflections authored by current user
		$args = array(
			'post_type'      => 'helios_reflection',
			'posts_per_page' => -1,
			'post_status'    => array( 'private', 'publish' ),
			'author'         => $user_id,
			'orderby'        => 'date',
			'order'          => 'DESC',
		);

		$posts       = get_posts( $args );
		$reflections = array();

		foreach ( $posts as $post ) {
			$reflections[] = $this->format_reflection( $post );
		}

		return rest_ensure_response( $reflections );
	}

	/**
	 * POST /youmeos/v1/reflections
	 */
	public function create_reflection( WP_REST_Request $request ) {
		$params  = $request->get_json_params();
		$user_id = get_current_user_id();

		$title     = sanitize_text_field( $params['title'] ?? 'Untitled Reflection' );
		$content   = sanitize_textarea_field( $params['content'] ?? '' );
		$category  = sanitize_text_field( $params['category'] ?? 'Insight' );
		$is_public = ! empty( $params['isPublic'] );

		// Set post status to private by default, publish if featured on public profile
		$status = $is_public ? 'publish' : 'private';

		$post_data = array(
			'post_title'   => $title,
			'post_content' => $content,
			'post_status'  => $status,
			'post_author'  => $user_id,
			'post_type'    => 'helios_reflection',
		);

		$post_id = wp_insert_post( $post_data, true );

		if ( is_wp_error( $post_id ) ) {
			return new WP_Error( 'create_failed', 'Could not save reflection.', array( 'status' => 500 ) );
		}

		update_post_meta( $post_id, '_helios_category', $category );
		update_post_meta( $post_id, '_helios_is_public', $is_public ? '1' : '0' );

		return rest_ensure_response( $this->format_reflection( get_post( $post_id ) ) );
	}

	/**
	 * PUT/PATCH /youmeos/v1/reflections/:id
	 */
	public function update_reflection( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$params  = $request->get_json_params();
		$post    = get_post( $post_id );

		if ( ! $post || $post->post_type !== 'helios_reflection' ) {
			return new WP_Error( 'not_found', 'Reflection not found.', array( 'status' => 404 ) );
		}

		if ( (int) $post->post_author !== get_current_user_id() ) {
			return new WP_Error( 'forbidden', 'You do not own this reflection.', array( 'status' => 403 ) );
		}

		$post_data = array(
			'ID' => $post_id,
		);

		if ( isset( $params['title'] ) ) {
			$post_data['post_title'] = sanitize_text_field( $params['title'] );
		}
		if ( isset( $params['content'] ) ) {
			$post_data['post_content'] = sanitize_textarea_field( $params['content'] );
		}
		if ( isset( $params['isPublic'] ) ) {
			$is_public              = ! empty( $params['isPublic'] );
			$post_data['post_status'] = $is_public ? 'publish' : 'private';
			update_post_meta( $post_id, '_helios_is_public', $is_public ? '1' : '0' );
		}
		if ( isset( $params['category'] ) ) {
			update_post_meta( $post_id, '_helios_category', sanitize_text_field( $params['category'] ) );
		}

		wp_update_post( $post_data );

		return rest_ensure_response( $this->format_reflection( get_post( $post_id ) ) );
	}

	/**
	 * DELETE /youmeos/v1/reflections/:id
	 */
	public function delete_reflection( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		if ( ! $post || $post->post_type !== 'helios_reflection' ) {
			return new WP_Error( 'not_found', 'Reflection not found.', array( 'status' => 404 ) );
		}

		if ( (int) $post->post_author !== get_current_user_id() ) {
			return new WP_Error( 'forbidden', 'You do not own this reflection.', array( 'status' => 403 ) );
		}

		wp_delete_post( $post_id, true );

		return rest_ensure_response( array( 'deleted' => true, 'id' => (string) $post_id ) );
	}

	/**
	 * Format reflection post for REST output
	 */
	private function format_reflection( WP_Post $post ) {
		$category  = get_post_meta( $post->ID, '_helios_category', true ) ?: 'Insight';
		$is_public = get_post_meta( $post->ID, '_helios_is_public', true ) === '1';
		$timestamp = strtotime( $post->post_date_gmt ?: $post->post_date );

		return array(
			'id'        => (string) $post->ID,
			'title'     => $post->post_title,
			'content'   => $post->post_content,
			'category'  => $category,
			'isPublic'  => $is_public,
			'dateMonth' => date( 'M', $timestamp ),
			'dateDay'   => date( 'd', $timestamp ),
			'createdAt' => $timestamp * 1000,
		);
	}
}
