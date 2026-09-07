# Changelog

All notable changes to the Xophz COMPASS Event Horizon module will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026-09-06]

### Fixed
- Synchronize active session token during REST login: Ensure `$_COOKIE[LOGGED_IN_COOKIE]` and fallback cookie identifiers are populated in PHP memory upon `wp_set_auth_cookie()` execution in `handle_user_login()`, preventing `wp_create_nonce('wp_rest')` from generating unlinked session nonces that result in 403 `rest_cookie_invalid_nonce` errors on subsequent authenticated REST calls ([class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/elysium/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php)).
- Robust credential handling in `handle_user_login()`: Added whitespace trimming on username and password parameters, multi-representation password checking (tolerating magic quotes, unslashing, and HTML entity decoding), and user resolution across login, email, nicename, and local dev aliases.
- Auto-heal local development credentials: Automatically synchronize local developer admin passwords on localhost environments to prevent accidental lockouts caused by disparate local Docker installation credentials.
- Password recovery in local dev: Added error logging of password reset URLs and attached `reset_url` to `handle_lost_password` responses on local environments where SMTP is absent.
- Local dev server auto-detection and port alignment: Standardized YouMeOS dev server port to 8081 across `.env`, `docker-compose.yml`, and `vite.public.config.js` with fallback port 9000 mapping. Updated `is_dev_server()` in [class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/elysium/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php) with cached internal health probe (`check_dev_server()`) and automatic local development detection, ensuring local environments seamlessly load live Vite HMR modules (`localhost:8081/@vite/client` and `mount-youmeos.ts`) while preserving clean fallback to production assets with `?prod` or when offline.
