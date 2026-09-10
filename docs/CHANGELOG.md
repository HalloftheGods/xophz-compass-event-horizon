# Changelog

All notable changes to the Xophz COMPASS Event Horizon module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026-09-09]

### Added
- **Default Sparks REST Registry ([class-xophz-compass-event-horizon-spark-registry.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/includes/api/class-xophz-compass-event-horizon-spark-registry.php), [class-xophz-compass-event-horizon-default-sparks.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/includes/api/class-xophz-compass-event-horizon-default-sparks.php))**: Seeded the full baseline roster of 56+ native YouMeOS sparks into `GET /wp-json/xophz/v1/sparks`, exposing titles, categories, icons, brand colors, and standalone PWA launch URLs (`/spark/:id/?fullspark=true`) to external clients.
- **Brand Color & Manifest Normalization**: Ensured `brand_color`, `brandColor`, and `color` are consistently normalized and propagated across both list and individual manifest REST endpoints.
- **Dynamic Manifest Fallback**: Generated PWA standalone manifests automatically for default sparks in `GET /wp-json/xophz/v1/sparks/:id` when no plugin override filter is registered.

## [2026-09-08]

### Changed
- **Distribution Bundle Update**: Rebuilt production frontend assets containing real-time comment synchronization, Lite-Mode ignition fallbacks, and task detail optimizations.

### Fixed
- **Clean Spark URL Base Alignment ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**: Resolved `app_base` to empty string on homepage configurations for clean `/spark/:sparkId` share URLs instead of hardcoding `spark`, allowing the SPA router to resolve the route at root without mangling the history base into an unmatched route.
- **REST Cookie Authentication Bridge ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**: Implemented automatic bridging of `wordpress_sec_*` into `$_COOKIE[LOGGED_IN_COOKIE]` memory and registered a fallback `determine_current_user` filter, preventing 403 Forbidden errors on authenticated REST endpoints when browsers transmit only secure auth cookies over HTTPS/Cloudflare.
- **Login Session Token Plaintext Nonce ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**: Explicitly generated fresh plaintext session tokens for `wp_set_auth_cookie()` and `$_COOKIE[LOGGED_IN_COOKIE]` on login rather than using hashed session verifier keys, ensuring subsequent REST nonces verify cleanly.
- **Webtop & Launcher Profile Sync Support ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**: Extended `update_user_profile()` and `get_user_profile()` to store and return `disabledSparks`, `pinnedWebtopSparks`, `pinnedRailSparks`, and `webtopShortcutPositions`, preventing profile sync errors when dragging icons.

## [2026-09-07]

### Fixed
- **Dev Mode Production Isolation**: Reordered checks in `is_dev_server()` so SSL (`is_ssl()`), production domain (`youmeos.com`, `tempurl.host`, `mycompassconsulting.com`), and environment (`WP_ENV === 'production'`) safety guards execute prior to evaluating Vite `hot` file existence, preventing accidental dev server script injection in production ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/elysium/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php)).
- **Untrack Stale Dev Marker**: Removed `public/hot` from repository tracking and created `.gitignore` to prevent transient dev server marker files from being committed in the submodule.

## [2026-09-06]

### Fixed
- Synchronize active session token during REST login: Ensure `$_COOKIE[LOGGED_IN_COOKIE]` and fallback cookie identifiers are populated in PHP memory upon `wp_set_auth_cookie()` execution in `handle_user_login()`, preventing `wp_create_nonce('wp_rest')` from generating unlinked session nonces that result in 403 `rest_cookie_invalid_nonce` errors on subsequent authenticated REST calls ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/elysium/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php)).
- Robust credential handling in `handle_user_login()`: Added whitespace trimming on username and password parameters, multi-representation password checking (tolerating magic quotes, unslashing, and HTML entity decoding), and user resolution across login, email, nicename, and local dev aliases.
- Auto-heal local development credentials: Automatically synchronize local developer admin passwords on localhost environments to prevent accidental lockouts caused by disparate local Docker installation credentials.
- Password recovery in local dev: Added error logging of password reset URLs and attached `reset_url` to `handle_lost_password` responses on local environments where SMTP is absent.
- Local dev server auto-detection and port alignment: Standardized YouMeOS dev server port to 8081 across `.env`, `docker-compose.yml`, and `vite.public.config.js` with fallback port 9000 mapping. Updated `is_dev_server()` in [class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/elysium/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php) with cached internal health probe (`check_dev_server()`) and automatic local development detection, ensuring local environments seamlessly load live Vite HMR modules (`localhost:8081/@vite/client` and `mount-youmeos.ts`) while preserving clean fallback to production assets with `?prod` or when offline.
