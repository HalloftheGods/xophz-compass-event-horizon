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
		$defaults = class_exists( 'Xophz_Compass_Event_Horizon_Default_Sparks' )
			? Xophz_Compass_Event_Horizon_Default_Sparks::get_all()
			: array();

		// Apply filters to allow plugins to register or override sparks
		$sparks = apply_filters( 'xophz_register_sparks', $defaults );
		$sparks = apply_filters( 'youmeos_register_sparks', $sparks );

		$normalized = array();
		if ( is_array( $sparks ) ) {
			foreach ( $sparks as $key => $spark ) {
				if ( ! is_array( $spark ) ) {
					continue;
				}
				$color = isset( $spark['brand_color'] ) ? $spark['brand_color'] : ( isset( $spark['color'] ) ? $spark['color'] : '#62c9ff' );
				$spark['brand_color'] = $color;
				$spark['brandColor']  = $color;
				$spark['color']       = $color;
				if ( ! isset( $spark['pwa_url'] ) && isset( $spark['id'] ) ) {
					$spark['pwa_url'] = '/spark/' . $spark['id'] . '/?fullspark=true';
				}
				$normalized[ $key ] = $spark;
			}
		}

		return rest_ensure_response( array_values( $normalized ) );
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
		$manifest = apply_filters( 'xophz_get_spark_manifest', null, $id );

		if ( ! $manifest && class_exists( 'Xophz_Compass_Event_Horizon_Default_Sparks' ) ) {
			$defaults = Xophz_Compass_Event_Horizon_Default_Sparks::get_all();
			if ( isset( $defaults[ $id ] ) ) {
				$spark = $defaults[ $id ];
				$brand_color = isset( $spark['brand_color'] ) ? $spark['brand_color'] : ( isset( $spark['color'] ) ? $spark['color'] : '#62c9ff' );
				$manifest = array(
					'id'               => $id,
					'name'             => $spark['title'],
					'short_name'       => $spark['title'],
					'description'      => $spark['description'],
					'start_url'        => '/spark/' . $id . '/?fullspark=true',
					'scope'            => '/spark/' . $id . '/',
					'display'          => 'standalone',
					'theme_color'      => $brand_color,
					'brand_color'      => $brand_color,
					'brandColor'       => $brand_color,
					'color'            => $brand_color,
					'category'         => isset( $spark['category'] ) ? $spark['category'] : 'developer',
					'pwa_url'          => isset( $spark['pwa_url'] ) ? $spark['pwa_url'] : ( '/spark/' . $id . '/?fullspark=true' ),
					'background_color' => '#070a13',
					'icons'            => array(
						array(
							'src'   => '/wp-content/plugins/xophz-compass-event-horizon/public/images/spark-icons/spark-' . $id . '.svg',
							'sizes' => '512x512',
							'type'  => 'image/svg+xml',
						),
					),
				);
			}
		}

		if ( ! $manifest ) {
			return new WP_Error( 'spark_not_found', 'Spark not found', array( 'status' => 404 ) );
		}

		if ( is_array( $manifest ) && ! isset( $manifest['brand_color'] ) && isset( $manifest['theme_color'] ) ) {
			$manifest['brand_color'] = $manifest['theme_color'];
			$manifest['brandColor']  = $manifest['theme_color'];
			$manifest['color']       = $manifest['theme_color'];
		}

		return rest_ensure_response( $manifest );
	}
}
