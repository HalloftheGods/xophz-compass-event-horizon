<?php

/**
 * Handles the YouMeOS Task System (Bubblegum)
 */
class Xophz_Compass_Event_Horizon_Tasks {

	/**
	 * Register the CPT
	 */
	public function register_cpt() {
		$args = array(
			'label'               => __( 'YouMeOS Task', 'xophz-compass-event-horizon' ),
			'description'         => __( 'A private/shared task for YouMeOS users.', 'xophz-compass-event-horizon' ),
			'public'              => false, // Completely headless!
			'publicly_queryable'  => false,
			'show_ui'             => false, // No Admin UI!
			'show_in_menu'        => false,
			'query_var'           => true,
			'rewrite'             => false,
			'capability_type'     => 'post',
			'has_archive'         => false,
			'hierarchical'        => false,
			'supports'            => array( 'title', 'editor', 'author', 'custom-fields', 'comments' ), // Editor stores the JSON
		);
		register_post_type( 'youmeos_task', $args );
	}

	/**
	 * Register secure API Routes
	 */
	public function register_routes() {
		$namespace = 'youmeos/v1';

		register_rest_route( $namespace, '/tasks', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_tasks' ),
				'permission_callback' => array( $this, 'check_auth' )
			),
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_task' ),
				'permission_callback' => array( $this, 'check_auth' )
			)
		) );

		register_rest_route( $namespace, '/tasks/(?P<id>\d+)', array(
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_task' ),
				'permission_callback' => array( $this, 'check_auth' )
			),
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'delete_task' ),
				'permission_callback' => array( $this, 'check_auth' )
			),
		) );

		register_rest_route( $namespace, '/tasks/(?P<id>\d+)/comments', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_task_comments' ),
				'permission_callback' => array( $this, 'check_auth' )
			),
			array(
				'methods'             => WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'create_task_comment' ),
				'permission_callback' => array( $this, 'check_auth' )
			)
		) );
	}

	/**
	 * Only allow logged-in users to hit this endpoint
	 */
	public function check_auth() {
		return is_user_logged_in();
	}

	/**
	 * GET /youmeos/v1/tasks
	 */
	public function get_tasks( WP_REST_Request $request ) {
		$user_id = get_current_user_id();

		// Fetch tasks authored by this user
		$authored_posts = get_posts( array(
			'post_type'      => 'youmeos_task',
			'posts_per_page' => -1,
			'post_status'    => 'publish',
			'author'         => $user_id, 
		) );

		// Fetch tasks shared with this user
		$shared_posts = get_posts( array(
			'post_type'      => 'youmeos_task',
			'posts_per_page' => -1,
			'post_status'    => 'publish',
			'meta_query'     => array(
				array(
					'key'     => '_shared_with_users',
					'value'   => '"' . $user_id . '"',
					'compare' => 'LIKE',
				),
			),
		) );

		// Merge and deduplicate
		$all_posts = array_merge( $authored_posts, $shared_posts );
		$unique_posts = array();
		foreach ( $all_posts as $post ) {
			if ( ! isset( $unique_posts[ $post->ID ] ) ) {
				$unique_posts[ $post->ID ] = $post;
			}
		}

		$posts = array_values( $unique_posts );
		$tasks = array();

		foreach ( $posts as $post ) {
			$tasks[] = $this->format_task( $post );
		}

		return rest_ensure_response( $tasks );
	}

	/**
	 * POST /youmeos/v1/tasks
	 */
	public function create_task( WP_REST_Request $request ) {
		$params  = $request->get_json_params();
		$user_id = get_current_user_id();

		// 🔒 SECURITY GATE: Hardcoded post_type and author. 
		// It is IMPOSSIBLE to create a blog post or alter author using this API.
		$post_data = array(
			'post_title'   => sanitize_text_field( $params['title'] ?? 'New Pack' ),
			'post_content' => wp_slash( isset( $params['content'] ) ? wp_json_encode( $params['content'] ) : '[]' ), // the JSON arrays
			'post_status'  => 'publish',
			'post_author'  => $user_id,
			'post_type'    => 'youmeos_task' // MUST BE youmeos_task
		);

		$post_id = wp_insert_post( $post_data, true );

		if ( is_wp_error( $post_id ) ) {
			return new WP_Error( 'create_failed', 'Could not create task.', array( 'status' => 500 ) );
		}

		$this->save_meta( $post_id, $params, true );

		return rest_ensure_response( $this->format_task( get_post( $post_id ) ) );
	}

	/**
	 * PUT /youmeos/v1/tasks/:id
	 */
	public function update_task( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$params  = $request->get_json_params();
		$post    = get_post( $post_id );

		// 🔒 SECURITY GATE: Verify the post exists, is a task, and the user owns it or it's shared with them
		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task not found.', array( 'status' => 404 ) );
		}
		
		$is_author = (int) $post->post_author === get_current_user_id();
		$shared_with = get_post_meta($post_id, '_shared_with_users', true) ?: array();
		
		if ( ! $is_author && ! in_array( get_current_user_id(), $shared_with ) ) {
			return new WP_Error( 'forbidden', 'You do not own this task and it is not shared with you.', array( 'status' => 403 ) );
		}

		$post_data = array(
			'ID' => $post_id
		);

		if ( isset( $params['title'] ) && $is_author ) {
			$post_data['post_title'] = sanitize_text_field( $params['title'] );
		}
		if ( isset( $params['content'] ) ) {
			$post_data['post_content'] = wp_slash( wp_json_encode( $params['content'] ) );
		}

		wp_update_post( $post_data );
		$this->save_meta( $post_id, $params, $is_author );

		return rest_ensure_response( $this->format_task( get_post( $post_id ) ) );
	}

	/**
	 * DELETE /youmeos/v1/tasks/:id
	 */
	public function delete_task( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		// 🔒 SECURITY GATE: Verification
		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task not found.', array( 'status' => 404 ) );
		}
		
		if ( (int) $post->post_author !== get_current_user_id() ) {
			return new WP_Error( 'forbidden', 'You do not own this task.', array( 'status' => 403 ) );
		}

		wp_delete_post( $post_id, true );

		return rest_ensure_response( array( 'deleted' => true, 'id' => $post_id ) );
	}

	/**
	 * GET /youmeos/v1/tasks/:id/comments
	 */
	public function get_task_comments( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		// 🔒 SECURITY GATE: Verification
		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task not found.', array( 'status' => 404 ) );
		}
		
		$shared_with = get_post_meta($post_id, '_shared_with_users', true) ?: array();
		if ( (int) $post->post_author !== get_current_user_id() && ! in_array( get_current_user_id(), $shared_with ) ) {
			return new WP_Error( 'forbidden', 'You do not own this task.', array( 'status' => 403 ) );
		}

		$comments = get_comments( array(
			'post_id' => $post_id,
			'status'  => 'approve',
			'order'   => 'ASC'
		) );

		$formatted = array();
		foreach ( $comments as $comment ) {
			$formatted[] = array(
				'id'         => $comment->comment_ID,
				'content'    => $comment->comment_content,
				'author'     => $comment->comment_author,
				'author_id'  => $comment->user_id,
				'created_at' => $comment->comment_date_gmt,
				'task_uuid'  => get_comment_meta( $comment->comment_ID, 'bgg_task_uuid', true )
			);
		}

		return rest_ensure_response( $formatted );
	}

	/**
	 * POST /youmeos/v1/tasks/:id/comments
	 */
	public function create_task_comment( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$params  = $request->get_json_params();
		$post    = get_post( $post_id );
		$user_id = get_current_user_id();

		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task not found.', array( 'status' => 404 ) );
		}
		
		$shared_with = get_post_meta($post_id, '_shared_with_users', true) ?: array();
		if ( (int) $post->post_author !== $user_id && ! in_array( $user_id, $shared_with ) ) {
			return new WP_Error( 'forbidden', 'You do not have permission to comment on this task.', array( 'status' => 403 ) );
		}

		if ( empty( $params['content'] ) || empty( $params['task_uuid'] ) ) {
			return new WP_Error( 'invalid_params', 'Comment content and task_uuid are required.', array( 'status' => 400 ) );
		}

		$user = wp_get_current_user();

		$commentdata = array(
			'comment_post_ID'      => $post_id,
			'comment_content'      => sanitize_textarea_field( $params['content'] ),
			'user_id'              => $user_id,
			'comment_author'       => $user->display_name,
			'comment_author_email' => $user->user_email,
			'comment_approved'     => 1, // Auto-approve since they are internal team
		);

		$comment_id = wp_insert_comment( $commentdata );

		if ( ! $comment_id ) {
			return new WP_Error( 'create_failed', 'Could not create comment.', array( 'status' => 500 ) );
		}

		// Attach to the specific bubblegum markdown sub-task
		update_comment_meta( $comment_id, 'bgg_task_uuid', sanitize_text_field( $params['task_uuid'] ) );

		return rest_ensure_response( array(
			'id'         => $comment_id,
			'content'    => $commentdata['comment_content'],
			'author'     => $commentdata['comment_author'],
			'author_id'  => $user_id,
			'created_at' => current_time( 'mysql', 1 ),
			'task_uuid'  => sanitize_text_field( $params['task_uuid'] )
		) );
	}

	/**
	 * Helper: Format Task for Vue App
	 */
	private function format_task( $post ) {
		// Attempt to decode the JSON content back to an array
		$content = json_decode( $post->post_content, true );
		if ( json_last_error() !== JSON_ERROR_NONE ) {
			$content = $post->post_content;
		}

		return array(
			'id'          => $post->ID,
			'title'       => $post->post_title,
			'content'     => $content,
			'status'      => get_post_meta( $post->ID, '_task_status', true ) ?: 'do',
			'theme_color' => get_post_meta( $post->ID, '_theme_color', true ) ?: '',
			'author_id'   => (int) $post->post_author,
			'shared_with' => get_post_meta( $post->ID, '_shared_with_users', true ) ?: array(),
			'created_at'  => $post->post_date_gmt,
		);
	}

	/**
	 * Helper: Save Meta variables safely
	 */
	private function save_meta( $post_id, $params, $is_author = true ) {
		if ( isset( $params['status'] ) ) {
			update_post_meta( $post_id, '_task_status', sanitize_text_field( $params['status'] ) );
		}
		if ( isset( $params['theme_color'] ) ) {
			update_post_meta( $post_id, '_theme_color', sanitize_text_field( $params['theme_color'] ) );
		}
		if ( $is_author && isset( $params['shared_with'] ) && is_array( $params['shared_with'] ) ) {
			$safe_ids = array_map( 'intval', $params['shared_with'] );
			update_post_meta( $post_id, '_shared_with_users', $safe_ids );
		}
	}
}
