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
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_task' ),
				'permission_callback' => array( $this, 'can_read_task' )
			),
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => array( $this, 'update_task' ),
				'permission_callback' => array( $this, 'can_edit_task' )
			),
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => array( $this, 'delete_task' ),
				'permission_callback' => array( $this, 'check_auth' )
			),
		) );

		register_rest_route( $namespace, '/tasks/(?P<id>\d+)/revision', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_task_revision' ),
				'permission_callback' => array( $this, 'can_read_task' )
			),
		) );

		register_rest_route( $namespace, '/users', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_users' ),
				'permission_callback' => array( $this, 'check_auth' )
			)
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
	 * Permission callback for reading a specific task pack.
	 * Allows access if:
	 * 1. User is logged in and is author or shared collaborator.
	 * 2. Pack access_level is 'workspace' (Anyone with the link can collaborate).
	 * 3. A valid share token is passed in ?token=...
	 */
	public function can_read_task( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return true; // Let get_task return 404 cleanly
		}

		$user_id = get_current_user_id();

		// Author has access
		if ( $user_id > 0 && (int) $post->post_author === $user_id ) {
			return true;
		}

		// Collaborator explicitly shared
		$shared_with = get_post_meta( $post_id, '_shared_with_users', true ) ?: array();
		if ( $user_id > 0 && in_array( $user_id, $shared_with ) ) {
			return true;
		}

		// Anyone with the link (workspace access level)
		$access_level = get_post_meta( $post_id, '_access_level', true ) ?: 'workspace';
		if ( $access_level === 'workspace' ) {
			return true;
		}

		// Token-based access
		$share_token = get_post_meta( $post_id, '_share_token', true );
		$token_param = sanitize_text_field( $request->get_param( 'token' ) ?? '' );
		if ( ! empty( $share_token ) && ! empty( $token_param ) && hash_equals( $share_token, $token_param ) ) {
			return true;
		}

		return new WP_Error( 'rest_forbidden', __( 'You do not have access to this pack.', 'xophz-compass-event-horizon' ), array( 'status' => 403 ) );
	}

	/**
	 * Permission callback for editing a task pack.
	 */
	public function can_edit_task( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return true; // Let update_task return 404 cleanly
		}

		$user_id = get_current_user_id();

		// Author
		if ( $user_id > 0 && (int) $post->post_author === $user_id ) {
			return true;
		}

		// Collaborator explicitly shared
		$shared_with = get_post_meta( $post_id, '_shared_with_users', true ) ?: array();
		if ( $user_id > 0 && in_array( $user_id, $shared_with ) ) {
			return true;
		}

		// Anyone with the link
		$access_level = get_post_meta( $post_id, '_access_level', true ) ?: 'workspace';
		if ( $access_level === 'workspace' ) {
			return true;
		}

		// Token
		$share_token = get_post_meta( $post_id, '_share_token', true );
		$token_param = sanitize_text_field( $request->get_param( 'token' ) ?? '' );
		if ( ! empty( $share_token ) && ! empty( $token_param ) && hash_equals( $share_token, $token_param ) ) {
			return true;
		}

		return new WP_Error( 'rest_forbidden', __( 'You do not have permission to edit this pack.', 'xophz-compass-event-horizon' ), array( 'status' => 403 ) );
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

		update_post_meta( $post_id, '_pack_revision', 1 );
		$this->save_meta( $post_id, $params, true );

		return rest_ensure_response( $this->format_task( get_post( $post_id ) ) );
	}

	/**
	 * GET /youmeos/v1/tasks/:id
	 * Can be claimed via token or workspace access level.
	 */
	public function get_task( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );
		$user_id = get_current_user_id();

		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task pack not found.', array( 'status' => 404 ) );
		}

		$is_author   = $user_id > 0 && (int) $post->post_author === $user_id;
		$shared_with = get_post_meta( $post_id, '_shared_with_users', true ) ?: array();
		$is_shared   = $user_id > 0 && in_array( $user_id, $shared_with );

		$share_token  = get_post_meta( $post_id, '_share_token', true );
		$access_level = get_post_meta( $post_id, '_access_level', true ) ?: 'workspace';
		$token_param  = sanitize_text_field( $request->get_param( 'token' ) ?? '' );

		// Check if user is author or already in shared list
		if ( ! $is_author && ! $is_shared ) {
			$valid_token       = ! empty( $share_token ) && ! empty( $token_param ) && hash_equals( $share_token, $token_param );
			$is_workspace_open = ( $access_level === 'workspace' );

			if ( $valid_token || $is_workspace_open ) {
				// Automatically join the pack if user is logged into WordPress
				if ( $user_id > 0 ) {
					$shared_with[] = $user_id;
					$shared_with   = array_values( array_unique( array_map( 'intval', $shared_with ) ) );
					update_post_meta( $post_id, '_shared_with_users', $shared_with );
				}
			} else {
				return new WP_Error( 'forbidden', 'You do not have access to this pack.', array( 'status' => 403 ) );
			}
		}

		return rest_ensure_response( $this->format_task( $post ) );
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
		
		$user_id      = get_current_user_id();
		$is_author    = $user_id > 0 && (int) $post->post_author === $user_id;
		$shared_with  = get_post_meta( $post_id, '_shared_with_users', true ) ?: array();
		$is_shared    = $user_id > 0 && in_array( $user_id, $shared_with );
		$share_token  = get_post_meta( $post_id, '_share_token', true );
		$access_level = get_post_meta( $post_id, '_access_level', true ) ?: 'workspace';
		$token_param  = sanitize_text_field( $request->get_param( 'token' ) ?? '' );
		$valid_token  = ! empty( $share_token ) && ! empty( $token_param ) && hash_equals( $share_token, $token_param );
		$is_workspace = ( $access_level === 'workspace' );
		
		if ( ! $is_author && ! $is_shared && ! $valid_token && ! $is_workspace ) {
			return new WP_Error( 'forbidden', 'You do not own this task and it is not shared with you.', array( 'status' => 403 ) );
		}

		$post_data = array(
			'ID' => $post_id
		);

		if ( isset( $params['title'] ) && $is_author ) {
			$post_data['post_title'] = sanitize_text_field( $params['title'] );
		}
		if ( isset( $params['content'] ) ) {
			$incoming_content = $params['content'];
			if ( is_array( $incoming_content ) && isset( $incoming_content['tasks'] ) && is_array( $incoming_content['tasks'] ) ) {
				$existing_post = get_post( $post_id );
				$existing_content = json_decode( $existing_post->post_content, true );
				if ( is_array( $existing_content ) && isset( $existing_content['tasks'] ) && is_array( $existing_content['tasks'] ) ) {
					$incoming_content['tasks'] = $this->merge_task_arrays( $existing_content['tasks'], $incoming_content['tasks'] );
				}
			}
			$post_data['post_content'] = wp_slash( wp_json_encode( $incoming_content ) );
		}

		wp_update_post( $post_data );
		$current_rev = (int) get_post_meta( $post_id, '_pack_revision', true ) ?: 1;
		update_post_meta( $post_id, '_pack_revision', $current_rev + 1 );
		$this->save_meta( $post_id, $params, $is_author );

		return rest_ensure_response( $this->format_task( get_post( $post_id ) ) );
	}

	/**
	 * GET /youmeos/v1/tasks/:id/revision
	 * Lightweight revision probe for zero-load client polling
	 */
	public function get_task_revision( WP_REST_Request $request ) {
		$post_id = (int) $request['id'];
		$post    = get_post( $post_id );

		if ( ! $post || $post->post_type !== 'youmeos_task' ) {
			return new WP_Error( 'not_found', 'Task pack not found.', array( 'status' => 404 ) );
		}

		$revision     = (int) get_post_meta( $post_id, '_pack_revision', true ) ?: 1;
		$last_updated = mysql2date( 'U', $post->post_modified_gmt ) * 1000;

		$etag = '"rev-' . $post_id . '-' . $revision . '"';
		if ( ! headers_sent() ) {
			header( 'ETag: ' . $etag );
			header( 'Cache-Control: private, no-cache, must-revalidate' );
		}

		$if_none_match = isset( $_SERVER['HTTP_IF_NONE_MATCH'] ) ? trim( $_SERVER['HTTP_IF_NONE_MATCH'] ) : '';
		if ( ! empty( $if_none_match ) && $if_none_match === $etag ) {
			status_header( 304 );
			exit;
		}

		return rest_ensure_response( array(
			'id'           => $post_id,
			'revision'     => $revision,
			'last_updated' => $last_updated,
		) );
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
	 * GET /youmeos/v1/users
	 * Search wp_users by name, username, or email.
	 */
	public function get_users( WP_REST_Request $request ) {
		$search = sanitize_text_field( $request->get_param( 'search' ) ?? '' );

		$query_args = array(
			'number'  => 30,
			'orderby' => 'display_name',
			'order'   => 'ASC',
		);

		if ( ! empty( $search ) ) {
			$query_args['search']         = '*' . $search . '*';
			$query_args['search_columns'] = array( 'user_login', 'user_nicename', 'user_email', 'display_name' );
		}

		$wp_users = get_users( $query_args );
		$results  = array();

		foreach ( $wp_users as $u ) {
			$results[] = array(
				'id'           => $u->ID,
				'name'         => $u->display_name,
				'username'     => $u->user_login,
				'email'        => $u->user_email,
				'display_name' => sprintf( '%s (@%s)', $u->display_name, $u->user_login ),
				'avatar'       => get_avatar_url( $u->ID ),
				'initials'     => $this->extract_initials( $u->display_name ),
			);
		}

		return rest_ensure_response( $results );
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

		$share_token = get_post_meta( $post->ID, '_share_token', true );
		if ( empty( $share_token ) ) {
			$share_token = wp_generate_password( 24, false );
			update_post_meta( $post->ID, '_share_token', $share_token );
		}

		$access_level = get_post_meta( $post->ID, '_access_level', true ) ?: 'workspace';
		$shared_ids   = get_post_meta( $post->ID, '_shared_with_users', true ) ?: array();

		// Compile rich collaborator list with live wp_users data
		$collaborators = array();
		$author = get_userdata( $post->post_author );
		if ( $author ) {
			$collaborators[] = array(
				'id'       => $author->ID,
				'name'     => $author->display_name,
				'username' => $author->user_login,
				'email'    => $author->user_email,
				'avatar'   => get_avatar_url( $author->ID ),
				'initials' => $this->extract_initials( $author->display_name ),
				'role'     => 'owner',
			);
		}

		foreach ( $shared_ids as $uid ) {
			if ( (int) $uid === (int) $post->post_author ) {
				continue;
			}
			$shared_user = get_userdata( $uid );
			if ( $shared_user ) {
				$collaborators[] = array(
					'id'       => $shared_user->ID,
					'name'     => $shared_user->display_name,
					'username' => $shared_user->user_login,
					'email'    => $shared_user->user_email,
					'avatar'   => get_avatar_url( $shared_user->ID ),
					'initials' => $this->extract_initials( $shared_user->display_name ),
					'role'     => 'editor',
				);
			}
		}

		$explicit_shared = get_post_meta( $post->ID, '_is_shared', true ) === '1';
		$is_shared       = ! empty( $shared_ids ) || ( count( $collaborators ) > 1 ) || $explicit_shared;

		return array(
			'id'            => $post->ID,
			'title'         => $post->post_title,
			'content'       => $content,
			'status'        => get_post_meta( $post->ID, '_task_status', true ) ?: 'do',
			'theme_color'   => get_post_meta( $post->ID, '_theme_color', true ) ?: '',
			'author_id'     => (int) $post->post_author,
			'author_name'   => $author ? $author->display_name : '',
			'author_email'  => $author ? $author->user_email : '',
			'shared_with'   => array_values( array_map( 'intval', $shared_ids ) ),
			'share_token'   => $share_token,
			'access_level'  => $access_level,
			'collaborators' => $collaborators,
			'is_shared'     => $is_shared,
			'created_at'    => $post->post_date_gmt,
			'last_updated'  => mysql2date( 'U', $post->post_modified_gmt ) * 1000,
			'revision'      => (int) get_post_meta( $post->ID, '_pack_revision', true ) ?: 1,
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
		} elseif ( isset( $params['content']['color'] ) ) {
			update_post_meta( $post_id, '_theme_color', sanitize_text_field( $params['content']['color'] ) );
		}
		if ( isset( $params['share_token'] ) && $is_author ) {
			update_post_meta( $post_id, '_share_token', sanitize_text_field( $params['share_token'] ) );
		}
		if ( isset( $params['access_level'] ) && $is_author ) {
			update_post_meta( $post_id, '_access_level', sanitize_text_field( $params['access_level'] ) );
		}
		if ( isset( $params['is_shared'] ) && $is_author ) {
			update_post_meta( $post_id, '_is_shared', ! empty( $params['is_shared'] ) ? '1' : '0' );
		}
		if ( $is_author && isset( $params['shared_with'] ) && is_array( $params['shared_with'] ) ) {
			$safe_ids = array_values( array_unique( array_map( 'intval', $params['shared_with'] ) ) );
			update_post_meta( $post_id, '_shared_with_users', $safe_ids );
			if ( count( $safe_ids ) > 0 ) {
				update_post_meta( $post_id, '_is_shared', '1' );
			}
		}
	}

	/**
	 * Helper: Non-destructive merge of existing and incoming tasks using task timestamps
	 */
	private function merge_task_arrays( $existing_tasks, $incoming_tasks ) {
		$existing_map = array();
		$index_tasks = function( $tasks ) use ( &$index_tasks, &$existing_map ) {
			foreach ( $tasks as $t ) {
				if ( isset( $t['id'] ) ) {
					$existing_map[ $t['id'] ] = $t;
				}
				if ( ! empty( $t['tasks'] ) && is_array( $t['tasks'] ) ) {
					$index_tasks( $t['tasks'] );
				}
			}
		};
		$index_tasks( $existing_tasks );

		$merge_item = function( $incoming ) use ( &$merge_item, &$existing_map ) {
			$id = $incoming['id'] ?? '';
			$existing = $existing_map[ $id ] ?? null;

			$merged_subtasks = array();
			if ( ! empty( $incoming['tasks'] ) && is_array( $incoming['tasks'] ) ) {
				foreach ( $incoming['tasks'] as $sub ) {
					$merged_subtasks[] = $merge_item( $sub );
				}
			}

			if ( ! $existing ) {
				$incoming['tasks'] = $merged_subtasks;
				return $incoming;
			}

			$inc_updated = (int) ( $incoming['updatedAt'] ?? 0 );
			$ext_updated = (int) ( $existing['updatedAt'] ?? 0 );

			// If existing task was updated more recently, preserve existing fields
			if ( $ext_updated > $inc_updated && $inc_updated > 0 ) {
				$merged = $existing;
				$merged['tasks'] = $merged_subtasks;
				return $merged;
			}

			$incoming['tasks'] = $merged_subtasks;
			return $incoming;
		};

		$result = array();
		foreach ( $incoming_tasks as $t ) {
			$result[] = $merge_item( $t );
		}
		return $result;
	}

	/**
	 * Helper: extract 2-letter initials from display name
	 */
	private function extract_initials( $name ) {
		$words = preg_split( '/\s+/', trim( (string) $name ) );
		if ( count( $words ) >= 2 ) {
			return strtoupper( mb_substr( $words[0], 0, 1 ) . mb_substr( $words[1], 0, 1 ) );
		}
		return strtoupper( mb_substr( (string) $name, 0, 2 ) );
	}
}
