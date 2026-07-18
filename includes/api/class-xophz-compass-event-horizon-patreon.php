<?php
class Xophz_Compass_Event_Horizon_Patreon {

    public function register_routes() {
        $namespace = 'xophz/v1';

        // 1. Get Patreon OAuth login URL
        register_rest_route( $namespace, '/auth/patreon/url', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( $this, 'get_auth_url' ),
            'permission_callback' => '__return_true',
        ) );

        // 2. Patreon OAuth Callback
        register_rest_route( $namespace, '/auth/patreon/callback', array(
            'methods'             => WP_REST_Server::READABLE,
            'callback'            => array( $this, 'handle_callback' ),
            'permission_callback' => '__return_true',
        ) );
    }

    public function get_auth_url( WP_REST_Request $request ) {
        $client_id = defined( 'PATREON_CLIENT_ID' ) ? PATREON_CLIENT_ID : ( $_ENV['PATREON_CLIENT_ID'] ?? get_option( 'patreon_client_id' ) );
        if ( empty( $client_id ) ) {
            return new WP_Error( 'missing_client_id', 'Patreon Client ID is not configured.', array( 'status' => 500 ) );
        }

        $redirect_uri = site_url( '/wp-json/xophz/v1/auth/patreon/callback' );
        
        $auth_url = add_query_arg( array(
            'response_type' => 'code',
            'client_id'     => $client_id,
            'redirect_uri'  => $redirect_uri,
            'scope'         => 'identity identity[email] identity.memberships',
        ), 'https://www.patreon.com/oauth2/authorize' );

        return rest_ensure_response( array( 'url' => $auth_url ) );
    }

    public function handle_callback( WP_REST_Request $request ) {
        $code = $request->get_param( 'code' );

        if ( empty( $code ) ) {
            wp_redirect( site_url( '/?error=missing_code' ) );
            exit;
        }

        $client_id     = defined( 'PATREON_CLIENT_ID' ) ? PATREON_CLIENT_ID : ( $_ENV['PATREON_CLIENT_ID'] ?? get_option( 'patreon_client_id' ) );
        $client_secret = defined( 'PATREON_CLIENT_SECRET' ) ? PATREON_CLIENT_SECRET : ( $_ENV['PATREON_CLIENT_SECRET'] ?? get_option( 'patreon_client_secret' ) );
        $redirect_uri  = site_url( '/wp-json/xophz/v1/auth/patreon/callback' );

        if ( empty( $client_id ) || empty( $client_secret ) ) {
            wp_redirect( site_url( '/?error=missing_patreon_credentials' ) );
            exit;
        }

        // 1. Exchange code for token
        $token_response = wp_remote_post( 'https://www.patreon.com/api/oauth2/token', array(
            'body' => array(
                'code'          => $code,
                'grant_type'    => 'authorization_code',
                'client_id'     => $client_id,
                'client_secret' => $client_secret,
                'redirect_uri'  => $redirect_uri,
            )
        ) );

        if ( is_wp_error( $token_response ) ) {
            wp_redirect( site_url( '/?error=patreon_token_error' ) );
            exit;
        }

        $token_body = json_decode( wp_remote_retrieve_body( $token_response ), true );
        if ( empty( $token_body['access_token'] ) ) {
            wp_redirect( site_url( '/?error=invalid_patreon_token' ) );
            exit;
        }

        $access_token = $token_body['access_token'];

        // 2. Fetch user profile and memberships
        $profile_response = wp_remote_get( 'https://www.patreon.com/api/oauth2/v2/identity?include=memberships.campaign&fields%5Buser%5D=email,full_name,thumb_url&fields%5Bmember%5D=patron_status', array(
            'headers' => array(
                'Authorization' => 'Bearer ' . $access_token,
            )
        ) );

        if ( is_wp_error( $profile_response ) ) {
            wp_redirect( site_url( '/?error=patreon_profile_error' ) );
            exit;
        }

        $profile_body = json_decode( wp_remote_retrieve_body( $profile_response ), true );
        if ( empty( $profile_body['data'] ) ) {
            wp_redirect( site_url( '/?error=invalid_patreon_profile' ) );
            exit;
        }

        $user_data = $profile_body['data'];
        $email = $user_data['attributes']['email'] ?? '';
        $full_name = $user_data['attributes']['full_name'] ?? 'Patron';

        if ( empty( $email ) ) {
            wp_redirect( site_url( '/?error=missing_patreon_email' ) );
            exit;
        }

        // 3. Check for active pledge
        $is_active_patron = false;
        if ( ! empty( $profile_body['included'] ) ) {
            foreach ( $profile_body['included'] as $included ) {
                if ( $included['type'] === 'member' ) {
                    $status = $included['attributes']['patron_status'];
                    if ( $status === 'active_patron' ) {
                        $is_active_patron = true;
                        break;
                    }
                }
            }
        }

        if ( ! $is_active_patron ) {
            wp_redirect( site_url( '/?error=not_active_patron' ) );
            exit;
        }

        // 4. Provision or log in user
        $user = get_user_by( 'email', $email );

        if ( ! $user ) {
            $user_id = wp_create_user( $email, wp_generate_password(), $email );
            if ( is_wp_error( $user_id ) ) {
                wp_redirect( site_url( '/?error=account_creation_failed' ) );
                exit;
            }
            $user = get_user_by( 'id', $user_id );
            
            // Set display name
            wp_update_user( array(
                'ID' => $user_id,
                'display_name' => $full_name,
                'first_name' => $full_name
            ) );
        } else {
            $user_id = $user->ID;
        }

        // Assign 'pro_user' role if needed
        if ( ! in_array( 'pro_user', (array) $user->roles ) ) {
            $user->add_role( 'pro_user' );
        }

        // 5. Log the user in securely
        wp_clear_auth_cookie();
        wp_set_current_user( $user_id );
        wp_set_auth_cookie( $user_id, true );

        // 6. Redirect back to the NookPhone app or homepage
        // For now redirecting to youmeos
        $redirect_to = site_url( '/youmeos/' ); 
        wp_redirect( $redirect_to );
        exit;
    }
}
