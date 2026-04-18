<?php

/**
 * Reactions API Endpoint
 *
 * @link       https://xophz.com
 * @since      1.0.0
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */

class Xophz_Compass_Event_Horizon_Reactions {

	/**
	 * Register the REST API routes.
	 */
	public function register_routes() {
		register_rest_route( 'xophz-compass/v1', '/reactions', array(
			array(
				'methods'             => WP_REST_Server::CREATABLE, // POST
				'callback'            => array( $this, 'toggle_reaction' ),
				'permission_callback' => array( $this, 'permissions_check' ),
				'args'                => array(
					'object_id' => array(
						'required'          => true,
						'type'              => 'integer',
						'validate_callback' => function($param, $request, $key) {
							return is_numeric( $param );
						}
					),
					'object_type' => array(
						'required'          => true,
						'type'              => 'string',
						'validate_callback' => function($param, $request, $key) {
							return in_array( $param, array( 'post', 'comment' ), true );
						}
					),
					'emoji' => array(
						'required'          => true,
						'type'              => 'string',
						'sanitize_callback' => 'sanitize_text_field'
					),
				),
			),
		) );

		// Expose reactions meta to posts (topics) and comments
		register_rest_field( array('post', 'cafeteria_topic'), 'x_reactions', array(
			'get_callback' => array( $this, 'get_reactions_meta' ),
			'schema'       => null,
		) );

		register_rest_field( 'comment', 'x_reactions', array(
			'get_callback' => array( $this, 'get_reactions_meta_comment' ),
			'schema'       => null,
		) );
	}

	/**
	 * Get reactions meta for posts.
	 */
	public function get_reactions_meta( $object, $field_name, $request ) {
		$reactions = get_post_meta( $object['id'], 'x_reactions', true );
		return empty( $reactions ) ? array() : $reactions;
	}

	/**
	 * Get reactions meta for comments.
	 */
	public function get_reactions_meta_comment( $object, $field_name, $request ) {
		$reactions = get_comment_meta( $object['id'], 'x_reactions', true );
		return empty( $reactions ) ? array() : $reactions;
	}

	/**
	 * Check permissions. User must be logged in.
	 */
	public function permissions_check( $request ) {
		return is_user_logged_in();
	}

	/**
	 * Toggle a reaction.
	 */
	public function toggle_reaction( WP_REST_Request $request ) {
		$object_id   = $request->get_param( 'object_id' );
		$object_type = $request->get_param( 'object_type' );
		$emoji       = $request->get_param( 'emoji' );
		$user_id     = get_current_user_id();

		if ( ! $user_id ) {
			return new WP_Error( 'rest_forbidden', esc_html__( 'You must be logged in to react.', 'xophz-compass-event-horizon' ), array( 'status' => 401 ) );
		}

		$meta_key = 'x_reactions';

		// Get existing meta based on type
		if ( $object_type === 'comment' ) {
			$reactions = get_comment_meta( $object_id, $meta_key, true );
		} else {
			$reactions = get_post_meta( $object_id, $meta_key, true );
		}

		if ( empty( $reactions ) || ! is_array( $reactions ) ) {
			$reactions = array();
		}

		// Ensure emoji key exists
		if ( ! isset( $reactions[ $emoji ] ) || ! is_array( $reactions[ $emoji ] ) ) {
			$reactions[ $emoji ] = array();
		}

		// Toggle user ID in the array
		$index = array_search( $user_id, $reactions[ $emoji ], true );

		if ( $index !== false ) {
			// Remove the user
			unset( $reactions[ $emoji ][ $index ] );
			// Re-index array
			$reactions[ $emoji ] = array_values( $reactions[ $emoji ] );
			// If empty, optionally remove the key to keep it clean
			if ( empty( $reactions[ $emoji ] ) ) {
				unset( $reactions[ $emoji ] );
			}
		} else {
			// Add the user
			$reactions[ $emoji ][] = $user_id;
		}

		// Save back
		if ( $object_type === 'comment' ) {
			update_comment_meta( $object_id, $meta_key, $reactions );
		} else {
			update_post_meta( $object_id, $meta_key, $reactions );
		}

		return rest_ensure_response( array(
			'success'   => true,
			'reactions' => $reactions
		) );
	}
}
