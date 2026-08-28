<?php

/**
 * The Spark Registry API class
 *
 * Checks for registered sparks from other plugins and exposes them via REST API.
 *
 * @since      1.0.0
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */
class Xophz_Compass_Event_Horizon_Spark_Registry {

	/**
	 * Register the routes for the objects of the controller.
	 */
	public function register_routes() {
		$namespace = 'xophz/v1';
		$base      = 'sparks';

		register_rest_route( $namespace, '/' . $base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_items' ),
				'permission_callback' => '__return_true',
			),
		) );

		register_rest_route( $namespace, '/' . $base . '/(?P<id>[a-zA-Z0-9-_]+)', array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_item' ),
				'permission_callback' => '__return_true',
				'args'                => array(
					'id' => array(
						'validate_callback' => function($param, $request, $key) {
							return is_string( $param );
						}
					),
				),
			),
		) );
	}

	/**
	 * GET /xophz/v1/sparks
	 * Returns a lightweight list of all registered sparks.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function get_items( $request ) {
		// Apply filters to allow plugins to register their sparks
		$sparks = apply_filters( 'xophz_register_sparks', array() );
		$sparks = apply_filters( 'youmeos_register_sparks', $sparks );

		return rest_ensure_response( is_array( $sparks ) ? $sparks : array() );
	}

	/**
	 * GET /xophz/v1/sparks/:id
	 * Returns the full manifest for a specific spark.
	 *
	 * @param WP_REST_Request $request Full details about the request.
	 * @return WP_REST_Response|WP_Error Response object on success, or WP_Error object on failure.
	 */
	public function get_item( $request ) {
		$id = $request->get_param( 'id' );

		// Apply filter to get the full manifest for this specific ID
		// Plugins should check if the ID matches theirs and return the full JSON object
		$manifest = apply_filters( 'xophz_get_spark_manifest', null, $id );

		if ( ! $manifest ) {
			return new WP_Error( 'spark_not_found', 'Spark not found', array( 'status' => 404 ) );
		}

		return rest_ensure_response( $manifest );
	}
}
