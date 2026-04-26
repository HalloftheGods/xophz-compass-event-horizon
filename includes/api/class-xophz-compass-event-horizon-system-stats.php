<?php

/**
 * The System Stats API
 *
 * @package    Xophz_Compass_Event_Horizon
 * @subpackage Xophz_Compass_Event_Horizon/includes/api
 */
class Xophz_Compass_Event_Horizon_System_Stats {

	public function register_routes() {
		register_rest_route( 'xophz/v1', '/system-stats', array(
			'methods'  => WP_REST_Server::READABLE,
			'callback' => array( $this, 'get_system_stats' ),
			'permission_callback' => array( $this, 'permissions_check' ),
		) );

		register_rest_route( 'xophz/v1', '/fs-tree', array(
			'methods'  => WP_REST_Server::READABLE,
			'callback' => array( $this, 'get_fs_tree' ),
			'permission_callback' => array( $this, 'permissions_check' ),
		) );
	}

	public function permissions_check() {
		return current_user_can( 'upload_files' );
	}

	public function get_system_stats() {
		$upload_dir = wp_upload_dir();
		$path = $upload_dir['basedir'];

		$free_space = @disk_free_space( $path );
		$total_space = @disk_total_space( $path );

		if ( false === $free_space || false === $total_space ) {
			return new WP_Error( 'disk_space_error', 'Could not read disk space.', array( 'status' => 500 ) );
		}

		return rest_ensure_response( array(
			'free_space'  => $free_space,
			'total_space' => $total_space,
			'used_space'  => $total_space - $free_space,
		) );
	}

	public function get_fs_tree() {
		$upload_dir = wp_upload_dir();
		$path = $upload_dir['basedir'];
		
		$tree = $this->build_fs_tree( $path, 'Uploads' );
		
		return rest_ensure_response( $tree );
	}

	private function build_fs_tree( $dir, $name ) {
		$result = array(
			'name' => $name,
			'value' => 0,
			'children' => array()
		);

		if ( ! is_dir( $dir ) ) {
			return $result;
		}

		$files = scandir( $dir );
		foreach ( $files as $file ) {
			if ( $file === '.' || $file === '..' ) continue;

			$full_path = $dir . DIRECTORY_SEPARATOR . $file;
			if ( is_dir( $full_path ) ) {
				$child_tree = $this->build_fs_tree( $full_path, $file );
				if ( $child_tree['value'] > 0 || ! empty( $child_tree['children'] ) ) {
					$result['children'][] = $child_tree;
					$result['value'] += $child_tree['value'];
				}
			} else {
				$size = filesize( $full_path );
				$result['value'] += $size;
				
				// Optional: if we want to show individual files in the tree, we can add them:
				// $result['children'][] = array( 'name' => $file, 'value' => $size, 'isFile' => true );
			}
		}

		return $result;
	}
}
