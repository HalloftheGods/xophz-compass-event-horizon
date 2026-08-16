import{_ as I,I as U}from"./youmeos-eYlOh_ri.js";import{f as D,ce as y,cc as E,e as u,cK as G,v as X,W as S,cf as _,ci as d,q as O,j as s,n as N,Y as H,J as V,b as R}from"./vendor-Banuj5Ca.js";import Y from"./enchiridion-canvas-DscA-0ZL.js";import{p as k}from"./vendor-vuetify-Cl-PbBOz.js";import"./vendor-core-DD0IIVGP.js";import"./vendor-three-t6OjKSDq.js";import"./vendor-echarts-Dn78IoXP.js";const j=`# Bomb Bag System (Email Marketing & CRM)

**Bomb Bag** is the unified Email Marketing and Customer Relationship Management (CRM) module within the Xophz COMPASS ecosystem. It is designed to replace expensive third-party tools like Mailchimp or ActiveCampaign by providing robust, native email automation right inside WordPress.

## Core Pillars

1. **Subscribers & Organization**
   - **Lists**: The highest level of organization (e.g., "Weekly Newsletter", "Waitlist"). A subscriber can belong to multiple lists.
   - **Tags**: Flexible labels attached to subscribers (e.g., "VIP", "Purchased Product X"). 
   - **Segments**: Dynamic groupings of subscribers based on specific rules (e.g., "Has Tag X" AND "In List Y").

2. **Campaigns & Templates**
   - **Templates**: Reusable HTML layouts (with a built-in PrismEditor for syntax highlighting).
   - **Campaigns**: One-off broadcasts or scheduled emails sent to specific Lists or Segments. Includes A/B testing configurations.
   - **Composer**: A robust HTML email editor utilizing \`vue-prism-editor\` for a native, fast, syntax-highlighted coding experience.

3. **Journeys (Automations)**
   - Powered by \`@vue-flow/core\`, Journeys offer a visual, drag-and-drop canvas to build marketing automations.
   - Triggers include: List Subscriptions, Tag additions, or WooCommerce purchases.
   - Actions include: Sending emails, adding/removing tags, or time delays.

4. **Analytics & Dashboard**
   - Tracks sent, open, and click rates.
   - Provides a centralized overview of subscriber growth and recent campaign performance.

## Technical Architecture

- **Frontend**: Vue 3 + Pinia (\`bomb-bag.store.ts\`) + Vuetify.
- **Routing**: Internal routing handled by \`bomb-bag.routes.ts\` rendering inside the \`x-sub-app-layout\`.
- **Database**: Custom WordPress database tables (\`wp_bombbag_subscribers\`, \`wp_bombbag_campaigns\`, etc.) to ensure high performance without cluttering \`wp_posts\`.
- **Code Editor**: \`vue-prism-editor\` is used for all raw HTML inputs (Composer and Templates) to avoid heavy dependencies like Monaco.

## Recent Updates
- Integrated \`PrismEditor\` for syntax-highlighted HTML email composition.
- Built full CRUD interfaces for Lists, Segments, and Tags using glassmorphic DataTables.
- Corrected FontAwesome 5 (\`fas\`, \`far\`, \`fab\`) icons across the UI.
`,q='# Changelog\n\n## [2026-08-15]\n\n### Changed\n- **Suite-Wide Glassmorphic Panel & Route Standardization**:\n  * Established `.agent/rules/glassmorphism.md` and `.agents/rules/glassmorphism.md` codifying strict design standards across all plugins.\n  * Audited and standardized panels, cards, dropdowns, and drawers across all sub-apps:\n    * **System & Branding** ([BrandingSettings.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/BrandingSettings.vue), [_onboarding.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/_onboarding.scss)): Removed dark slate background overrides; converted zoom control and preview containers to `@include glass;`.\n    * **Compass Matrix & Performance** ([compass-connectors-abilities.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-matrix/compass-connectors-abilities.vue), [_compass-matrix.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-matrix/_compass-matrix.scss), [_compass-perform.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-perform/_compass-perform.scss), [_compass-dashboard.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-dashboard/_compass-dashboard.scss), [_compass-welcome.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-welcome/_compass-welcome.scss), [compass-circle.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/compass-circle/compass-circle.vue)): Standardized dial pad keys, toolbars, effect buttons, and flip face cards.\n    * **Alphabet Soup** ([alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue), [alphabet-soup-schemas.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-schemas/alphabet-soup-schemas.vue)): Standardized status menu lists, comment footers, and schema field containers with `.glass`.\n    * **Bazaar Suite** ([split-tendering-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/split-tendering-dialog.vue), [discount-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/discount-dialog.vue), [refund-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/refund-dialog.vue), [tip-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/tip-dialog.vue), [bazaar-coupons.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-coupons/bazaar-coupons.vue), [bazaar-procurement.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-procurement/bazaar-procurement.vue), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue), [_order-details-dialog.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-orders/components/order-details-dialog/_order-details-dialog.scss), [_import-products-dialog.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/import-products-dialog/_import-products-dialog.scss)): Replaced opaque dark dialog backgrounds with `@include glass;`.\n    * **Questbook CRM** ([QuestbookDirectory.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDirectory.vue), [QuestbookProfile.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookProfile.vue)): Converted glass dropdowns and history cards to `@include glass;`.\n    * **Moving Castle** ([DashboardView.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/moving-castle/views/DashboardView.vue), [SubsitesView.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/moving-castle/views/SubsitesView.vue)): Standardized ID cards and subsite panels with `@include glass;`.\n    * **Enchiridion** ([_enchiridion.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/enchiridion/_enchiridion.scss)): Unified `.x-glass-card` styling.\n    * **Bomb Bag** ([bomb-bag-journey-palette.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/components/bomb-bag-journey-palette.vue), [bomb-bag-journey-properties.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/components/bomb-bag-journey-properties.vue), [node-trigger.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/components/journey-nodes/node-trigger.vue), [node-action.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/components/journey-nodes/node-action.vue), [node-logic.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/components/journey-nodes/node-logic.vue), [bomb-bag-journey-builder.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bomb-bag/views/bomb-bag-journey-builder.vue)): Unified journey palette, properties drawer, node wrappers, and mini-map with `@include glass;`.\n    * **Gale Boomerang & Magic Wand & Midnight Nerd & Yellow Links & XP & Treasure Map** ([_gale-boomerang.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/gale-boomerang/_gale-boomerang.scss), [_magic-wand.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/magic-wand/_magic-wand.scss), [_midnight-nerd.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/midnight-nerd/_midnight-nerd.scss), [_yellow-links.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/_yellow-links.scss), [_xp-leaderboard.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/routes/xp-leaderboard/_xp-leaderboard.scss), [xp-action-builder.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/routes/xp-action-builder/xp-action-builder.vue), [xp-goal-builder.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/routes/xp-goal-builder/xp-goal-builder.vue), [quest-node.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/treasure-map/components/quest-node/quest-node.vue), [magic-gate-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/magic-formula/components/magic-gate-dialog.vue)): Standardized terminal windows, builder sidebars, leaderboard cards, and action panels.\n    * **Core UI Atoms & Prefabs** ([_x-alert.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-alert/_x-alert.scss), [my-sites-btn.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/buttons/my-sites-btn.vue), [_x-app-bar.molecule.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/bars/x-app-bar/_x-app-bar.molecule.scss)): Standardized top app bar, alerts, and multi-site menu cards to translucent glass.\n\n- **Launch Pad Spark Fluid Glide-Up Entrance & Left Alignment ([app-launcher-spark.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/app-launcher/app-launcher-spark.vue), [u-window.scss](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window.scss))**:\n  - Removed conflicting `default-snapped` override and aligned initial `x` to `0` and `y` to bottom fold, eliminating layout snap fighting.\n  - Implemented 60fps GPU-composited `@keyframes launchpad-spawn-in` using `translate3d(0, calc(100% + 40px), 0)` to `translate3d(0, 0, 0)` with `will-change: transform, opacity` and `0.35s cubic-bezier(0.16, 1, 0.3, 1)` easing.\n  - Preserved standard `window-spawn-in` animation for all other spark windows.\n- **Event Horizon & YouMeOS System Harmonization ([tab-visuals.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/settings/components/tab-visuals.vue), [tab-sparks.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/settings/components/tab-sparks.vue), [event-horizon-dashboard.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/dashboard/event-horizon-dashboard.vue), [event-horizon.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/event-horizon.routes.ts), [event-horizon.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/event-horizon.store.ts), [class-xophz-compass-event-horizon-settings.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/includes/api/class-xophz-compass-event-horizon-settings.php))**:\n  - Replaced mock theme modes with the 6 genuine NucleOS u-window variants (`nyx`, `infinity`, `rhae`, `tesla`, `sol`, `luna`) and added interactive mini-window preview cards reflecting true CSS glass and border styles.\n  - Recycled NucleOS backdrop modes (`4D Youniverse`, `Generative Canvases`, `Curated Wallpapers`, `Ambient Gradients`), curated 4K wallpaper categories, and added blur (`0px - 30px`) and brightness / dimmer (`20% - 140%`) sliders.\n  - Replaced generic placeholder spark icons with authentic FontAwesome icons and accent colors sourced directly from `launcher.store.ts` and `FEATURE_FLAGS`.\n  - Added an interactive live side rail dock preview displaying pinned sparks dynamically with live unpin/pin capabilities and corner anchor indicator.\n  - Fixed `activeSparksCount` telemetry calculation to compute against `FEATURE_FLAGS` merged with matrix overrides.\n  - Removed legacy standalone Universe Simulation route (`/event-horizon/universe`, `/event-horizon/demo`) and standardized all OS launch actions to open the live YouMeOS environment.\n  - Updated the Event Horizon Support page ([support.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/support/support.vue)) by replacing Patreon with Cash App (`https://cash.app/$youmeos`) and Venmo (`https://venmo.com/u/youmeos`) buttons matching YouMeOS styling.\n\n### Removed\n- **Sub-App Layout Secondary Header User Avatar ([x-sub-app-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/blueprints/layouts/x-sub-app-layout/x-sub-app-layout.vue))**:\n  - Removed redundant static user avatar icon button from the secondary sub-app header action area.\n\n### Fixed\n- **System Bar Global Search Bar Fluid Glass Styling ([system-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/system-bar.vue))**:\n  - Unified search input background and border radius by disabling conflicting `.v-field__overlay` and applying continuous glass pill container styling.\n  - Adjusted prepend search icon scale (`0.8125rem`) and surrounding padding (`12px` left, `8px` right) for balanced spacing.\n- **Authentication Display Name Resolution & Login Greeting ([useAuth.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useAuth.ts), [useGoogle.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/composables/useGoogle.ts), [useDiscord.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/composables/useDiscord.ts), [class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**:\n  - Resolved "Welcome back, null!" notification banner by adding multi-tier fallback resolution (`display_name -> user_login -> user_nicename -> "Explorer"`) across PHP authentication endpoints and client-side notification triggers.\n  - Sanitized local storage display name retrieval in `useAuth` to prevent cached `"null"` or `"undefined"` strings from persisting in state.\n- **Native WordPress Page Template Controls & Real-Time Preview Sync ([alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts), [alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue))**:\n  - Added native WordPress theme template discovery (`fetchAvailableTemplates()`) querying active theme templates via REST API for all posts, pages, and custom post types.\n  - Added template selector dropdown menu to the editor toolbar displaying active template labels (e.g., Default, Cover, Full Width, Canvas).\n  - Connected `onTemplateChange()` to `autosavePost()`, updating the autosave revision and re-rendering the PREVIEW iframe in real-time as template selections change.\n- **Tracking Pixel Polyfills & Guard Stubs ([init-polyfills.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/init-polyfills.ts))**:\n  - Added safe fallback stubs for `window.rdt` (Reddit Pixel) and `window.snaptr` (Snapchat Pixel) to prevent third-party marketing plugins or ad-blocker script stubs from throwing uncaught errors in the browser console.\n\n### Added\n- **Youniversal Identity OAuth Account Creation ([RegisterView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/routes/auth/RegisterView.vue))**:\n  - Integrated Discord and Google social identity authentication buttons directly into Step 1 of the "Claim your Youniversal identity" registration flow.\n  - Added real-time OAuth authentication watchers to navigate newly registered users seamlessly into the YouMeOS environment upon successful token exchange.\n- **Alphabet Soup & Rich Text Editor Source Code Mode & Raw HTML Conservation Safeguards ([o-rich-text-editor.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-rich-text-editor/o-rich-text-editor.vue), [o-rich-text-editor.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-rich-text-editor/o-rich-text-editor.controller.ts), [alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts))**:\n  - Implemented multi-mode editor controls (Visual WYSIWYG, Raw Source Code with `PrismEditor` syntax highlighting, and Split View) in `o-rich-text-editor`.\n  - Added full raw HTML, shortcode, script, style, and WordPress Gutenberg block comment (`<!-- wp:... -->`) conservation so complex template elements are preserved without DOM sanitization stripping.\n  - Added HTML auto-formatting / indentation, clipboard copy, live template protection status badges, and word/character/tag count footer metrics.\n  - Updated Alphabet Soup controller `activePostContent` to prioritize `content.raw` and pass unstripped raw markup directly during post saving.\n- **Event Horizon WordPress Admin UI & YouMeOS White-Label Customization Suite ([class-xophz-compass-event-horizon-settings.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/includes/api/class-xophz-compass-event-horizon-settings.php), [tab-integrations.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/settings/components/tab-integrations.vue), [event-horizon-settings.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/views/settings/event-horizon-settings.vue), [event-horizon.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/event-horizon/event-horizon.store.ts), [feature-flags.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/config/feature-flags.ts), [mount-youmeos.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/mount-youmeos.ts))**:\n  - Implemented centralized WordPress REST API controller (`/wp-json/xophz/v1/event-horizon/settings`) for managing site-wide white-label options, branding assets, wallpaper presets, app feature flags, portal routing, and OAuth integrations.\n  - Linked Event Horizon credentials directly to the centralized WordPress 7.0+ Connectors API (`compass_google_client_id`, `compass_discord_client_id`, `compass_vapid_public_key`), enabling automatic dual-sync between Event Horizon and WP Connectors registry.\n  - Added security masking (password inputs with eye reveal toggles) on client IDs and VAPID keys to prevent exposure during screen sharing, along with direct navigation to the Connectors Gateway (`/compass/connectors`).\n  - Built comprehensive tabbed My Compass admin settings interface (`/event-horizon/settings`) featuring Branding & Identity, Visuals & Environment, Sparks Matrix, Routing & Triggers, and Audio & Integrations tabs with real-time live preview stages.\n  - Upgraded Event Horizon Dashboard (`/event-horizon`) with live telemetry cards (active sparks, theme mode, slug, access mode) and direct action buttons.\n  - Integrated full server-side hydration in `class-xophz-compass-event-horizon-public.php` and `feature-flags.ts` allowing site-wide spark statuses, dock pinning, and access tiers to take effect for all visitors dynamically.\n- **YouMeOS & My Compass Software Suite Official Whitepaper ([youmeos_compass_whitepaper.md](file:///home/xopher/www/x/Xophz-COMPASS/docs/youmeos/youmeos_compass_whitepaper.md))**:\n  - Authored comprehensive architectural whitepaper in project documentation mapping theoretical concepts to exact codebase implementations across Vue 3, Pinia stores (`useWindowStore`, `useLauncherStore`), X-Atom design tokens, and WordPress PHP core plugins.\n  - Defined the 5-stage platform redistribution model enabling third-party platform builders (e.g., Amiara) to provision BlackBOX nodes, extend REST API endpoints, package standalone PWA Sparks, integrate Omega Source federated identity, and monetize via the YouMeOS Bazaar.\n\n## [2026-08-14]\n\n### Added\n- **Native Web Push Notifications & WP Connectors Integration ([class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php), [class-xophz-compass-push-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-push-api.php), [sw.js](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/public/js/sw.js), [useDevicePush.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/composables/useDevicePush.ts), [NotificationsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/views/NotificationsView.vue))**:\n  - Registered VAPID keys (`compass_vapid_public_key`, `compass_vapid_private_key`, `compass_vapid_subject`) in WordPress 7.0+ Connectors registry.\n  - Implemented centralized `Xophz_Compass_Push_API` supporting W3C Web Push, RFC 8292 VAPID authentication, and RFC 8291 AES128GCM payload encryption in pure PHP OpenSSL.\n  - Created public Service Worker (`public/js/sw.js`) to handle native background `push` and `notificationclick` events across desktop and mobile devices.\n  - Built `useDevicePush` composable and integrated device subscription toggle and test push dispatch buttons into Nucleos `NotificationsView.vue`.\n  - Added system action hook `xophz_compass_send_push_notification` to enable direct device alerts from background tasks, Amiara AI, and external webhooks.\n\n### Added\n- **Silver Arrow DNA Archive Backfill & Multi-Builder Conversion Engine ([class-xophz-compass-silver-arrow-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-silver-arrow/public/class-xophz-compass-silver-arrow-public.php), [class-silver-arrow-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-silver-arrow/includes/class-silver-arrow-rest.php), [class-xophz-compass-silver-arrow.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-silver-arrow/includes/class-xophz-compass-silver-arrow.php), [xophz-compass-silver-arrow-public.js](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-silver-arrow/public/js/xophz-compass-silver-arrow-public.js), [silver-arrow.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/silver-arrow/silver-arrow.api.ts), [silver-arrow-detail.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/silver-arrow/views/silver-arrow-detail.vue))**:\n  - Implemented automatic and on-demand DNA Archive Backfill (`backfill_post_revisions_dna` / `POST revisions/{id}/backfill-dna`) capturing complete metadata snapshots for all historical revisions.\n  - Resolved page builder layout fallback by adding direct revision-level metadata retrieval in `intercept_meta_requests` for Elementor (`_elementor_data`, `_elementor_page_settings`), Gutenberg, Divi, and ACF.\n  - Expanded conversion tracking to support Forminator, Contact Form 7, Gravity Forms, Fluent Forms, WooCommerce orders (`woocommerce_thankyou`), and client-side CTA click beacon (`window.SilverArrow.trackConversion()`, `[data-sa-convert]`).\n  - Added "Backfill DNA" action button in Target Details Revision History toolbar and "Launch test immediately" option in Test creation modal.\n\n### Added\n- **Ecosystem Module GitHub Raw Icon Fallback & Asset Sync ([class-xophz-compass-modules-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-modules-api.php), [class-xophz-compass-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/admin/class-xophz-compass-admin.php), [compass-dashboard.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-dashboard/compass-dashboard.controller.ts), [index.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/store/index.ts))**:\n  - Implemented multi-tier icon fallback resolution for ecosystem modules: local `icon.svg` -> local `icon.png` -> bundled `assets/{slug}.png` -> bundled `assets/{slug}.svg` -> remote GitHub raw URL (`https://raw.githubusercontent.com/{owner}/{repo}/main/{filename}`).\n  - Added `get_github_module_icon_url` helper parsing repository owner and package names for third-party modules (`SuperNerdBros` vs `HalloftheGods`).\n  - Synchronized SVG/PNG icons into `wp-content/plugins/xophz-compass/assets/` for Alphabet Soup, Bazaar, Bomb Bag, Quests, Phone, Dodo Air, and Nook Phone.\n  - Updated SPA fallback in `compass-dashboard.controller.ts` to use GitHub raw URLs for ghost plugins and generic SVG icon fallback on error.\n\n### Fixed\n- **Nucleos Youniverse Navigation Tabs & Tesseract Quantum Tier Styling ([nucleos-spark.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/nucleos-spark.vue), [hosting-tiers.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/tesseract/hosting-tiers.ts), [tesseract-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/tesseract/tesseract-app.vue))**:\n  - Dynamically removed "Mechanics" (Shuttle) and "Mouse Controls" from the Nucleos side navigation when 4D Youniverse background mode is not active, automatically redirecting if the mode changes.\n  - Resolved unreadable white text/background in the Tesseract Quantum (Black Box) tier by removing the hardcoded white background override and setting Quantum\'s brand accent to Cyan (`#62c9ff`) with full glassmorphism and glowing typography.\n- **YouMeOS Webtop Shortcuts User Preference Sync ([u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [FeatureFlagsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/FeatureFlagsView.vue), [PinnedAppsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue))**:\n  - Fixed an issue where static `FEATURE_FLAGS[id]?.pinned` configuration bypassed user preferences and forced default shortcuts onto the desktop even when unpinned in Nucleos ("Launch Sequence" / "Quick Launch") or App Launcher.\n  - Standardized desktop shortcut rendering to strictly respect `launcherStore.pinnedWebtopSparks` as the single source of truth across all modules.\n- **Info Box & Alert Text Contrast Readability ([_x-alert.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-alert/_x-alert.scss), [_utils.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/utilities/_utils.scss), [silver-arrow-targeting.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/silver-arrow/views/silver-arrow-targeting.vue), [golden-keys.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/golden-keys/golden-keys.vue))**:\n  - Replaced dark color tokens (such as `cyan-darken-4`) on info alerts with neon cyan accents and high-contrast white text (`rgba(255, 255, 255, 0.92)`).\n  - Migrated hardcoded `v-alert` instances in Silver Arrow Targeting and Golden Keys to the standardized `x-alert` atom.\n  - Enforced global alert content text contrast across all `v-alert` and `x-alert` variants against dark glassmorphic backgrounds.\n- **My Compass Phone TypeScript & Build Fixes ([useBazaarPhoneStore.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/useBazaarPhoneStore.ts), [BazaarApp.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/BazaarApp.vue), [BazaarDashView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/views/BazaarDashView.vue), [BazaarOrdersView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/views/BazaarOrdersView.vue), [BazaarPosView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/views/BazaarPosView.vue), [BazaarProcurementView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/views/BazaarProcurementView.vue), [BazaarProductsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/bazaar/views/BazaarProductsView.vue))**:\n  - Resolved 42 TypeScript errors in `apps/my-compass-phone`: defined `BazaarPhoneStore` interface and wrapped store return in `reactive()` to ensure full property unwrapping across Vue SFC templates.\n  - Removed unused `getApiRoot` declaration in `useBazaarPhoneStore.ts`.\n  - Replaced static `src` with dynamic `:src` binding for Bazaar icon in `BazaarApp.vue` to prevent Vite rollup module resolution failures.\n  - Verified full production monorepo build pass via `pnpm prod:build`.\n\n### Added\n- **Bubblegum Full Task & Pack Estimation System ([bubblegum.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [bubblegum-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum-app.vue), [m-task-row.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/molecules/m-task-row/m-task-row.vue), [m-task-group.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/molecules/m-task-group/m-task-group.vue))**:\n  - Implemented recursive estimation calculation (`getTotalBubbleEst` / `getTaskTotalEst`) across tasks and nested subtasks to compute each task\'s complete point footprint.\n  - Enhanced `getPackStats` and `activePackStats` to calculate `totalEst`, `completedEst`, and `estPercentage` for each pack.\n  - Added Pomodoro duration conversion (`formatEstimatedDuration`) based on standard 1 bubble = 25 minutes (e.g. 165 bubbles = 68h 45m).\n  - Displayed real-time Bubblegum point totals and time estimations in the active pack headers (`t-pack-view`), task groups (`m-task-group`), individual task metadata chips (`m-task-row`), and Factory overview cards.\n  - Added background watermark number and subtask estimate chips reflecting the full estimation size and duration of each task.\n- **Bubblegum AI Generative Task List Pre-Estimation ([bubblegum.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [bubblegum-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum-app.vue))**:\n  - Enhanced the Gemini AI generative task list prompt to automatically analyze and pre-estimate MoSCoW priorities (`(M)` Must have / Chew Now, `(S)` Should have / Chew Next, `(C)` Could have / Maybe Later, `(W)` Won\'t have / Needs Flavor) for each generated task.\n  - Implemented automatic effort/size pre-estimation in Bubblegum pieces (story points: `<1>`, `<2>`, `<3>`, `<5>`, `<8>`, `<13>`, `<21>`) directly formatted into markdown syntax (`- [ ] (M) <3> Task title`).\n  - Added automatic code fence stripping and triggered immediate `compileMarkdown()` upon generation to seamlessly populate the live task list and physics sandbox canvas.\n- **YouMeOS Nucleos Background & Wallpaper System ([BackgroundView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/views/BackgroundView.vue), [u-desktop-background.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-desktop-background/u-desktop-background.vue), [window.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/window.store.ts), [nucleos-spark.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/nucleos-spark.vue), [u-desktop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.vue))**:\n  - Added dedicated Background category and settings pane in Nucleos with 4 customizable backdrop modes: 4D Youniverse 3D Engine, Animated Canvases, Classic Wallpapers & Free Sources, and Ambient Gradients.\n  - Implemented `UDesktopBackground` dynamic rendering construct mounted at desktop root, seamlessly switching backdrop engines without reloading or breaking active window states.\n  - Integrated full 15+ animated spark canvas showcase (Electric Wave, Midnight Nerd Terminal Matrix, Alphabet Soup, Bubblegum Orbs, Wizard Cauldron, Sacred Logos, Celestial Enchiridion, Deep Space Telescope, Nimbus, Tesseract, Helios, Nexos, Noosphere, Nucleos) with live preview and 1-click desktop background application.\n  - Added high-resolution curated wallpaper presets (Cyberpunk, Deep Cosmos, Obsidian & Glass, Synthwave, Twilight Anime, Moody Nature) with live backdrop blur (0-30px) and brightness dimming sliders.\n  - Built custom wallpaper URL loader, local image file upload reader, and curated royalty-free wallpaper source discovery (Unsplash, Wallhaven, Pexels/Pixabay).\n  - Persisted all background preferences (`backgroundType`, `selectedCanvasId`, `selectedWallpaper`, `customWallpaperUrl`, `wallpaperFit`, `wallpaperBlur`, `wallpaperBrightness`, `backgroundColor`) to `localStorage` via reactive Pinia watchers in `window.store.ts`.\n\n## [2026-08-12]\n\n### Added\n- **Bazaar POS Gateway Portal Endpoint & Segmented Payment Dialog Redesign ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [digital-payment-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/digital-payment-dialog.vue), [card-tendering-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/card-tendering-dialog.vue), [bank-transfer-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bank-transfer-dialog.vue))**:\n  - Registered `wp_ajax_bazaar_pos_gateway_portal` and `wp_ajax_nopriv_bazaar_pos_gateway_portal` in backend PHP, fixing the `0` response error and rendering a clean, glassmorphic Register Checkout Portal authorization window with live `postMessage` authorization feedback.\n  - Redesigned `digital-payment-dialog.vue` with a compact `<v-btn-toggle>` segmented tab bar (`Popup Window`, `Customer QR`, `SMS / Email`), ensuring zero text cut-off on small screens.\n  - Eliminated duplicate popup launch buttons and consolidated into a single clean primary action button (`Launch Checkout Window`) with real-time `window.postMessage` authorization detection.\n  - Updated `getPaymentGateways()` in `class-xophz-compass-bazaar-admin-orders.php` to fetch all enabled gateways (`$gateway->enabled === \'yes\'`), ensuring Google Pay, Fastlane, PayPal, Stripe, and custom gateways appear in the Payment Method modal.\n  - Streamlined POS modal dialogs for mobile responsive screens: removed redundant footer Cancel buttons (retaining top `X` close) and expanded primary action buttons to 100% full width (`block`).\n- **Bazaar Merchant Bank Account Configuration & Dynamic Wire Transfer ([bank-transfer-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bank-transfer-dialog.vue), [class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [bazaar.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.api.ts))**:\n  - Removed all hardcoded mock bank data (`COMPASS Treasury Bank`) from the Direct Bank Transfer POS dialog.\n  - Implemented backend AJAX handlers `bazaar_get_bank_details` and `bazaar_save_bank_details` synced directly with WooCommerce `woocommerce_bacs_accounts` and `bazaar_bank_*` options.\n  - Added inline 1-click **Configure Bank Info** interface in `bank-transfer-dialog.vue` allowing cashiers and store admins to configure their Bank Name, Routing/ABA/Sort Code, Account Number, and IBAN/Swift details.\n  - Added a clear warning banner with 1-click configure trigger when no merchant bank details are set.\n  - Implemented multi-inventory warehouse & retail store backend architecture gated by COMPASS PRO entitlement (`Xophz_Compass_Xp_Players::is_pro_user`).\n  - Registered custom post type `compass_warehouse` for defining inventory locations with manager credentials, address, lat/long coordinates, and payment/shipping restrictions.\n  - Added product-level multi-stock meta (`_compass_multi_inventory`) storing location stock quantities, low-stock thresholds, location SKUs, and location-specific pricing.\n  - Created backend AJAX handlers for retrieving/saving inventory locations (`bazaar_get_inventory_locations`, `bazaar_save_inventory_location`, `bazaar_delete_inventory_location`), product inventories (`bazaar_get_product_inventories`, `bazaar_save_product_inventories`), bulk updates (`bazaar_bulk_update_inventory_stock`), and multi-inventory CSV export/import (`bazaar_export_inventory_csv`, `bazaar_import_inventory_csv`).\n  - Hooked into WooCommerce stock reduction (`woocommerce_reduce_order_stock`) to automatically deduct location-specific stock when orders or Bazaar POS checkouts are placed for a specific warehouse ID.\n- **Bazaar Customer Orders Inspection & Details Dialog ([order-details-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-orders/components/order-details-dialog/order-details-dialog.vue), [index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-orders/index/index.vue), [class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php))**:\n  - Decoded HTML entities (`html_entity_decode` in PHP and client-side `DOMParser` in Vue) for WooCommerce currency symbols, resolving raw `&#36;` text output and cleanly displaying `$` / `€` / `£`.\n  - Enhanced backend `mapOrderData` in `class-xophz-compass-bazaar-admin-orders.php` to format order line items with product thumbnail image URLs (`thumb`), SKUs, and currency symbols.\n  - Built `OrderDetailsDialog` modal displaying complete order line items breakdown, customer billing & shipping cards, payment origin details, financial totals, status changer, and 1-click print/email receipt and refund actions.\n  - Updated Customer Orders table (`index.vue` & `index.controller.ts`) with Total Amount and Actions columns (`Details`, `Receipt`, `Refund`) and row click handlers for instant order inspection.\n- **Bazaar Product Editor Responsive Mobile Layout & Frosted Glass Blur ([add-product-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.vue), [o-item-editor-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-item-editor-layout/o-item-editor-layout.vue))**:\n  - Implemented top section switcher tabs (`Content`, `Details`, `Pricing & Stock`, `SEO`). When `Content` is active, the right sidebar automatically hides to give full 100% canvas space to writing descriptions. Selecting `Details`, `Pricing & Stock`, or `SEO` opens the right sidebar panel with the selected tab.\n  - Enforced CSS media query layout rules (`.editor-canvas-column` flex: 1, `.editor-sidebar-column` width: 400px at `>= 960px`) ensuring desktop displays 2-column side-by-side view with left canvas taking full remaining width and 400px right sidebar.\n  - Implemented responsive mobile layout switching to 100% full-width single-column view under 960px width with a clean mobile section navigation bar (`Content`, `Details`, `Pricing`, `SEO`), preventing side-by-side column compression on smartphones and tablets.\n  - Applied frosted glass backdrop blur (`background: rgba(8, 18, 36, 0.35)`, `backdrop-filter: blur(25px) saturate(180%)`) to editor background layer, allowing ambient theme mesh background to show through cleanly.\n  - Updated Product Feature Image display to use `object-fit: contain`, preserving the natural aspect ratio of any image (square, portrait, landscape, banner) without cropping or cutting off content.\n  - Added `flex-shrink-0` to all sidebar cards and form containers to prevent vertical squishing inside flex scroll areas.\n  - Divided the right sidebar into 3 spacious, dedicated tabs:\n    - **Details Tab**: Product Image card with Media Library selector, Categories multiselect with inline "+" category creation, and Product Tags manager.\n    - **Pricing & Stock Tab**: Regular Price ($), Sale Price ($) with live discount percentage calculation, SKU input, Track Stock Quantity switch, Quantity, and Stock Status.\n    - **SEO Tab**: Live SEO Health and Readability scores, WPMU DEV SEO Audit checklist HTML output, Focus Keyword, SEO Title (60-char limit), Meta Description (160-char limit), OpenGraph Social Sharing, Canonical/301 Redirects, and Robots Directives.\n  - Created reusable `OItemEditorLayout` organism providing base full-screen glassmorphic editor template.\n  - Added backend AJAX handler `bazaar_create_category` in `class-xophz-compass-bazaar-admin-orders.php` for inline WooCommerce category creation.\n- **Global Barcode Database Product Lookup & Live WebRTC Camera Scanner ([add-product-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.vue), [class-xophz-compass-bazaar-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin.php), [bazaar.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.api.ts))**:\n  - Implemented backend AJAX `lookupBarcode` endpoint querying **Open Food Facts API** (3.3M+ open products) with automatic fallback to **UPCitemdb** (722M+ retail barcodes).\n  - Built **Live WebRTC Camera Barcode Scanner Modal** accessing desktop webcams and mobile rear cameras (`getUserMedia` + `BarcodeDetector`), displaying a live video feed with scanning reticle overlay for real-time barcode scanning.\n  - Auto-fills Product Title, SKU, Description, and Thumbnail Image upon scanning or typing UPC/EAN barcodes.\n- **CSV Product Import & Interactive Field Mapper ([import-products-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/import-products-dialog/import-products-dialog.vue), [class-xophz-compass-bazaar-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin.php), [bazaar-products.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-products/bazaar-products.vue))**:\n  - Implemented 3-step CSV Import modal with drag-and-drop file upload, intelligent header auto-matching, sample data preview, and live progress reporting.\n  - Supported mapping CSV columns to Title, SKU, Regular Price, Sale Price, Stock Quantity, Stock Status, Full Description, Short Description, Categories (with auto-creation of missing terms), and Image URLs.\n  - Added backend batch processing handler `importProductsCsv` in `class-xophz-compass-bazaar-admin.php` matching SKU and title for product creation/updates.\n  - Added `Import CSV` action button to the Bazaar Product Inventory toolbar.\n- **Bazaar WooCommerce Coupon Code Management ([bazaar-coupons.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-coupons/bazaar-coupons.vue), [class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [bazaar.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.api.ts), [bazaar.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.routes.ts))**:\n  - Implemented `getCoupons`, `saveCoupon`, and `deleteCoupon` backend AJAX handlers in `class-xophz-compass-bazaar-admin-orders.php` leveraging WooCommerce native `WC_Coupon` CRUD.\n  - Added `BazaarCoupon` interface in `types.ts` and registered `getCoupons`, `saveCoupon`, and `deleteCoupon` methods in `bazaar.api.ts`.\n  - Built `bazaar-coupons.vue` view featuring metric summary cards (Total Coupons, Active Coupons, Total Redemptions), search & discount type filters, glassmorphic data table with click-to-copy code helper, create/edit coupon modal, and delete confirmation dialog.\n  - Registered `Coupons & Discounts` sub-route in `bazaar.routes.ts` with `ticket-alt` icon under the Bazaar Warehouse sub-app drawer.\n### Fixed\n- **Live Camera Scanner & Primitive Dialog Z-Index Stacking Fix ([add-product-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.vue), [x-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-dialog/x-dialog.vue))**:\n  - Assigned `:z-index="10000000"` to Live Camera Barcode Scanner `<v-dialog>` in `add-product-dialog.vue` and set default `:z-index="10000000"` on primitive `<x-dialog>`, ensuring modals always render above full-screen editors (`z-index: 9000`).\n- **Editor Overlay Z-Index Stacking Fix ([_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss), [o-item-editor-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-item-editor-layout/o-item-editor-layout.vue))**:\n  - Assigned `z-index: 100000 !important;` to `body > .v-overlay-container`, ensuring all Vuetify overlays (dialogs, media library modal, popovers, select dropdowns) stack above `OItemEditorLayout` (`z-index: 9000`).\n- **Media Library Modal Grid Flexbox Scroll & Flex-Basis Fix ([o-media-library-modal.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-media-library-modal/o-media-library-modal.vue))**:\n  - Replaced `flex-grow: 1` with explicit `flex: 1 1 0%` flex-basis sizing across `.grid-scroll-area`, main container, and library tab wrappers, forcing flex containers to bound to container height instead of evaluating grid content height.\n  - Enforced minimum height rules (`min-height: 500px` on card modal, `min-height: 350px` on main body container, `min-height: 300px` on grid container), enabling custom webkit scrollbar overflow.\n- **Receipt Dialog Vue Directive Fix ([receipt-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/receipt-dialog.vue))**:\n  - Moved `v-else` directive from inner `<i>` store icon tag to sibling `<span>` container wrapper, resolving Vite SFC compiler `v-else/v-else-if has no adjacent v-if` error.\n- **Vite Primitive SCSS File Resolution ENOENT Fix ([x-alert.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-alert/x-alert.vue), [x-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-dialog/x-dialog.vue), [x-card.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-card/x-card.vue), [x-btn.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-btn/x-btn.vue), [x-text-field.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-text-field/x-text-field.vue), [x-select.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-select/x-select.vue))**:\n  - Replaced `<style lang="scss" src="...">` attributes in primitive Vue SFCs with inline `@import` statements to prevent Vite Vue plugin from attempting to read SFC style paths relative to root working directory, resolving `ENOENT: no such file or directory, open \'_x-alert.scss\'` dev server overlay errors.\n- **Media Library Modal Grid Scroll Container Fix ([o-media-library-modal.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-media-library-modal/o-media-library-modal.vue))**:\n  - Replaced `<v-window>` and `<v-window-item>` wrappers with direct flexbox `v-sheet` tab containers, eliminating Vuetify window transition constraints that prevented scroll height calculation.\n  - Added file type checking (`event.dataTransfer?.types?.includes(\'Files\')`) to `onDragOver` listener to prevent full-screen drop overlays from intercepting wheel/pointer scroll events.\n  - Enforced bounded flex height (`min-height: 0`, `height: 100%`) on `grid-scroll-area` with custom styled scrollbars for smooth vertical scrolling across all media assets.\n- **Bazaar New Product Creation "Product Not Found" Error ([class-xophz-compass-bazaar-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin.php), [api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/core/api.ts))**:\n  - Fixed issue where creating a new product initialized `id: null` in form state, causing `URLSearchParams` in API requests to send `id="null"` as a string parameter.\n  - Updated `class-xophz-compass-bazaar-admin.php` to strictly validate `product_id` (`!empty($args->id) && is_numeric($args->id) && intval($args->id) > 0`) before attempting to retrieve existing WooCommerce products, defaulting to creating a `new WC_Product_Simple()` for new entries.\n  - Updated `src/core/api.ts` to skip appending `null` and `undefined` payload properties as literal strings in form-encoded requests.\n- **Bazaar Save Coupon Method Scoping & 500 Error Fix ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php))**:\n  - Fixed class method placement scope: moved `getCoupons()`, `saveCoupon()`, and `deleteCoupon()` inside `Xophz_Compass_Bazaar_Admin_Orders` class scope (prior to `Walker_Simple_String` class definition).\n  - Registered `wp_ajax_` and `wp_ajax_nopriv_` action hooks for `bazaar_get_coupons`, `bazaar_save_coupon`, and `bazaar_delete_coupon`.\n  - Replaced REST API boolean sanitizers with `filter_var(..., FILTER_VALIDATE_BOOLEAN)` to safely handle form-urlencoded AJAX payloads.\n  - Verified live creation, retrieval, and deletion of WooCommerce coupon codes (`HTTP 200 OK`, `{"success": true, "id": 472}`).\n\n\n  - Built `BazaarApp.vue` and dedicated mobile sub-views (`BazaarDashView.vue`, `BazaarPosView.vue`, `BazaarOrdersView.vue`, `BazaarProductsView.vue`, `BazaarProcurementView.vue`).\n  - Implemented `useBazaarPhoneStore.ts` to fetch live sales, order counts, WooCommerce catalog products, customer orders, and supplier directories directly from backend REST and AJAX endpoints when logged in.\n  - Added full bottom navigation tab switching between Dashboard, POS, Orders, Products, and Procurement.\n- **My Compass Phone Browser Route History Sync ([PhoneOS.view.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/components/views/PhoneOS.view.vue), [router/index.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/router/index.ts))**:\n  - Added route watcher and sync handler in `PhoneOS.view.vue` so navigating directly to deep URLs (e.g. `#/questbook/pipeline` or `#/bazaar/dash`) automatically unlocks the phone and launches the targeted app.\n  - Bidirectionally synced app launches and app close actions (`closeApp()`) with browser hash history (`router.push()`), enabling browser back/forward buttons and direct bookmarking.\n- **Procurement Add Supplier Feature & Safe CRM / WP User Integration ([bazaar-procurement.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-procurement/bazaar-procurement.vue), [class-xophz-compass-bazaar-admin-procurement.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-procurement.php), [bazaar.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.api.ts))**:\n  - Implemented `create_supplier` AJAX backend handler in `class-xophz-compass-bazaar-admin-procurement.php` supporting company names (`_supplier_company`), contact names, emails, phones, and automatic WP User email matching (`_supplier_wp_user_id`).\n  - Added safe `post_type_exists(\'questbook_company\')` and `post_type_exists(\'questbook_contact\')` checks so Questbook CRM entities are linked when available without breaking standalone Bazaar Warehouse installations when CRM is absent.\n  - Enabled **Add Supplier** dialog modal in `bazaar-procurement.vue` and added `WP User` chip indicators on vendor cards.\n- **Bazaar POS Payment Tendering Interfaces ([card-tendering-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/card-tendering-dialog.vue), [bank-transfer-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bank-transfer-dialog.vue), [digital-payment-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/digital-payment-dialog.vue), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue))**:\n  - Implemented `card-tendering-dialog.vue` supporting terminal card reader swipe/tap simulation and manual card entry with automatic card network detection (Visa, Mastercard, Amex, Discover) and billing zip validation.\n  - Implemented `bank-transfer-dialog.vue` displaying merchant wire instructions (routing, account, reference ID) and logging transaction/check reference numbers.\n  - Implemented `digital-payment-dialog.vue` for Affirm, Klarna, PayPal, and Amazon Pay supporting 3rd-party register popup windows, customer smartphone QR code scans, SMS/email link delivery, and live authorization status monitoring.\n  - Refactored `handlePaymentSelect()` in `bazaar-pos.vue` to route selected WooCommerce payment gateways to their dedicated tendering dialog before finalizing checkout.\n\n### Changed\n- **Dynamic Billboard Sub-route Titles & Descriptions ([bazaar.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.routes.ts), [useBillboard.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useBillboard.ts))**:\n  - Updated `useBillboard.ts` to read `route.meta.description`, enabling route-specific billboard descriptions across all sub-apps.\n  - Added explicit `meta.title` and `meta.description` metadata to all Bazaar Warehouse sub-routes (`Dashboard`, `Point of Sale`, `Product Inventory`, `Customer Orders`, `Sales Reports`, `Procurement`).\n- **Rebranded Plugin to Xophz Bazaar Warehouse ([xophz-compass-bazaar.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/xophz-compass-bazaar.php), [README.md](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/README.md), [compass-welcome.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-welcome/compass-welcome.controller.ts))**:\n  - Updated official plugin name to **Xophz Bazaar Warehouse** across PHP bootstrap headers, deactivation notices, onboarding documentation, and tour controller references.\n\n### Fixed\n- **Media Library Modal Flexbox Grid Scrolling Fix ([o-media-library-modal.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-media-library-modal/o-media-library-modal.vue))**:\n  - Enforced `min-height: 0` across flex containers (`<v-sheet>`, `<v-window>`, `<v-window-item>`, and `.grid-scroll-area`), constraining vertical flexbox calculations within the 92vh card dialog.\n  - Enabled active `overflow-y: auto` scrollbars and visible custom scrollbar tracks for asset grids exceeding 2 rows of thumbnails.\n- **Mobile POS System Bar Suppression & Fullscreen Cart Overlay ([_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue))**:\n  - Configured `#system-bar` suppression rules in `_wp-isolation.scss` on mobile screen sizes (`max-width: 782px`) when viewing Bazaar POS or when opening the mobile order cart drawer.\n  - Elevated `.cart-mobile-open` overlay to `z-index: 999999 !important;` with `top: 0 !important;`, preventing top system bars and toolbars from covering mobile register controls.\n- **Category Overline Subtext Contrast Fix ([compass-dashboard.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-dashboard/compass-dashboard.vue))**:\n  - Replaced `text-primary` on the billboard category subtext overline (e.g. `OPERATIONS & MANAGEMENT`) with explicit signature cyan `#62c9ff`, resolving low-contrast dark-blue text on dark navy billboard backgrounds.\n- **Bazaar Procurement Template Syntax Fix ([bazaar-procurement.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-procurement/bazaar-procurement.vue))**:\n  - Corrected invalid closing tag `</row>` to `</v-row>` on line 152, resolving Vite Vue compiler SFC template parsing error.\n- **Dashboard Sparkplug Top Offset Alignment ([_sparkplug.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/sparkplug/_sparkplug.scss))**:\n  - Set `top: 0;` on `.v-sheet--offset` in `_sparkplug.scss`, eliminating negative `-24px` top offsets so stat cards sit flush within container borders.\n- **Desktop Plugin Sheet Card Grid Alignment ([compass-plugin-sheet.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/compass-plugin-sheet.vue))**:\n  - Aligned desktop plugin items into left-aligned flex rows with `min-height: 64px` and text truncation, ensuring all cards and icons align in uniform columns and rows across desktop viewports.\n- **Mobile WP Menu Toggle Hiding & Chrome Suppression ([system-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/system-bar.vue), [_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss))**:\n  - Configured `wp-menu-toggle` wrapper in `system-bar.vue` with `d-none d-md-flex` to hide the toggle button on mobile devices.\n  - Added CSS rule to `_wp-isolation.scss` forcing `#adminmenuwrap` and `#adminmenuback` to `display: none !important` on mobile viewports.\n- **Global Varela Round Typography for Titles & App Bars ([_typography.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/core/_typography.scss))**:\n  - Imported Google Font `Varela Round` and set it as the mandatory font-family for all headings (`h1`..`h6`, `.text-h1`..`.text-h6`), `.v-toolbar-title`, `.v-card-title`, `.x-app-bar`, and `.plugin-sheet-toolbar`.\n- **My Compass Suite Plugin Sheet Mobile Fullscreen & 3-Column Grid Refactor ([compass-plugin-sheet.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/compass-plugin-sheet.vue))**:\n  - Made the bottom sheet overlay fullscreen (`100vw` by `100vh`) on mobile screen sizes (`max-width: 782px`).\n  - Set `cols="4"` for mobile layout to display exactly 3 large app icons per row with tightened grid padding (`8px 4px`).\n  - Enforced a uniform 68px x 68px size on all mobile app icons with borderless transparent containers, matching the `my-compass-phone` app design.\n- **Mobile Viewport Top Bar Positioning Fix ([_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue))**:\n  - Updated responsive media query (`max-width: 782px`) in `_wp-isolation.scss` to enforce `top: 0 !important` and `height: 100vh !important` on `body.admin-bar > #app`, preventing the COMPASS system bar top toolbar from being pushed down on mobile screens.\n  - Aligned `.cart-mobile-open` overlay positioning to `top: 0 !important` in `bazaar-pos.vue`.\n- **Bazaar Procurement Glassmorphic Design & Component Refactor ([bazaar-procurement.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-procurement/bazaar-procurement.vue))**:\n  - Refactored sidebar navigation, purchase orders table, supplier cards, and create purchase order dialog using COMPASS signature glassmorphism (`x-card`, `x-chip`, `x-btn`, `x-dialog`, `x-select`, `x-text-field`).\n  - Replaced raw `<i>` icon tags with `<v-icon>` components, stripping inline `text-*` classes on FontAwesome icons to adhere to system guidelines.\n  - Aligned modal action buttons (`Cancel` left, `Dispatch PO` right) with standard modal action layout rules.\n- **App Bar Billboard Toggle Button Far-Right Layout Alignment ([x-app-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-app-bar/x-app-bar.vue), [bazaar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/bazaar.vue), [alphabet-soup.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup.vue), [x-sub-app-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/blueprints/layouts/x-sub-app-layout/x-sub-app-layout.vue))**:\n  - Relocated `#x-app-bar-actions` before the bulletin board toggle button (`toggleBillboard`), ensuring all teleported sub-route controls (category dropdowns, action buttons, view toggles) render to the left while keeping the toggle billboard button pinned to the far right.\n- **Bazaar Sales Reports Date Parsing, SQL Division & Grouping Fixes ([class-xophz-compass-bazaar-admin-sales.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-sales.php), [bazaar-sales-monthly.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-sales/bazaar-sales-monthly/bazaar-sales-monthly.vue))**:\n  - Sanitized `$settings[\'date\']` using `strtotime()` in PHP to parse ISO strings, `Date` objects, and `YYYY-MM` strings into valid monthly start and end timestamps.\n  - Added `INNER JOIN ... order_item_type = \'line_item\'` and `post_type IN (\'shop_order\', \'shop_order_refund\')` to prevent shipping, fee, and coupon rows from corrupting product statistics or producing null post IDs.\n  - Prevented MySQL division-by-zero errors using `CASE WHEN sum(Gross) > 0` and `COALESCE()` wrappers.\n  - Added `watch(date)` and `formatDateToYearMonth()` in `bazaar-sales-monthly.vue` and defaulted view to current month.\n- **Bazaar Total Views Fallback Response Assignment ([class-xophz-compass-bazaar-admin-reports.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-reports.php))**:\n  - Assigned `$views = $posts` and `$total_views = $total_posts` in the fallback branch of `getTotalViews()`, returning content published activity counts to the dashboard when view counter plugins are inactive.\n- **Bazaar Guest Orders Query & Table Billing Display ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-orders/index/index.vue))**:\n  - Configured `getOrderIds()` in PHP to pass `\'status\' => \'any\'` to `wc_get_orders()`, retrieving both guest orders and registered customer orders across all statuses.\n  - Enhanced billing cell template in `index.vue` to format guest customer names, emails, and cities cleanly.\n- **Products Grid & POS Image Container Box Removal ([grid.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-products/grid/grid.vue), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue))**:\n  - Changed `<v-sheet>` container background to `color="transparent"` and removed shadow elevation in `grid.vue`.\n  - Removed `bg-grey-darken-3` background class from product card image thumbnails in `bazaar-pos.vue`.\n- **Bazaar Sales Reports UI Modernization & SQL Query Optimization ([bazaar-sales.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-sales/bazaar-sales.vue), [bazaar-sales-monthly.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-sales/bazaar-sales-monthly/bazaar-sales-monthly.vue), [class-xophz-compass-bazaar-admin-sales.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-sales.php))**:\n  - Removed duplicate `<x-sub-route-layout>` wrapper from `bazaar-sales.vue` to eliminate redundant secondary app bar header (`Sales Reports`).\n  - Optimized SQL query in `class-xophz-compass-bazaar-admin-sales.php` with `LEFT JOIN` meta handling and flexible order status matching (`wc-` prefix fallback) so sales numbers compile accurately.\n  - Refactored `bazaar-sales-monthly.vue` button layout, applying signature Cyan primary styling to "Run Report", removing unnecessary "Stop" button, and switching tabs to glass transparent styling.\n- **Bazaar Dashboard Total Views Meta Key Expansion & Fallback Handling ([class-xophz-compass-bazaar-admin-reports.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-reports.php))**:\n  - Expanded `getTotalViews()` SQL query to support multiple view counter meta keys (`post_views_count`, `_views_count`, `views`, `_post_views_count`, `post_views`).\n  - Added fallback post count aggregation so dashboards without active view counter plugins gracefully display published post totals rather than returning zero views.\n- **Sub-App Navigation Drawer Active Route Highlight Fix ([sub-app-navigation-list.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/navigation/sub-app-navigation-list.vue))**:\n  - Updated `isRouteActive()` helper to accurately evaluate named route objects (`routeItem.to.name`), path strings (`routeItem.to.path`), and query parameter matches against active Vue Router route states (`this.$route`).\n  - Resolved bug where sub-app navigation drawer menu items in Bazaar (and other sub-apps) were all highlighted simultaneously due to unhandled named route target objects and missing query parameter checks.\n- **Bazaar POS Mobile Top Bar Positioning & Mobile Cart Offset ([bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue), [_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss), [bazaar-pos-DtoAYRRh.css](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/admin/dist/css/bazaar-pos-DtoAYRRh.css))**:\n  - Offset full-screen mobile cart drawer overlay (`.cart-mobile-open`) by 38px (`top: 38px !important; height: calc(100vh - 38px) !important;`) on mobile screens (`max-width: 782px`).\n  - Added 38px top offset to `body.admin-bar > #app` in `_wp-isolation.scss` when WordPress top admin bar is present on mobile.\n  - Eliminated overlap where the top admin bar covered the mobile POS cart header ("Current Order", Park, Clear, and Close buttons).\n- **Silver Arrow Targeting Duplicate Search Input Fix ([silver-arrow-targeting.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/silver-arrow/views/silver-arrow-targeting.vue))**:\n  - Added `hide-toolbar` prop to `<x-data-table>` in the "Choose Your Targets" page.\n  - Eliminated duplicate search input rendered by `<x-data-table>`\'s built-in toolbar when an external search input is already defined in the card header.\n- **YouMeOS Cosmic Login & Camera Zoom Transition Easing ([controls.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [LoginView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/routes/auth/LoginView.vue), [RegisterView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/routes/auth/RegisterView.vue), [youmeos.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/youmeos.controller.ts))**:\n  - Aligned camera pan coordinates (`panX: 0, panY: 0`) and 3D perspective orientation (`rx: -0.45, ry: 0.35`) during login/register transitions.\n  - Resolved offset bug where camera was panned 42,512 units off to the side over empty space during zoom-in, causing the Hipparcos starfield and Solar System satellites to be bypassed until the Sun suddenly popped into view at the end.\n  - Implemented logarithmic interpolation for $Z$ distance in `controls.ts` over an extended 8.0s duration, providing a smooth journey through the Hipparcos starfield, passing outer/inner planets and orbiting satellites, and zooming right up next to the Sun surface ($Z = 0.946$).\n- **System-Wide Icon Default Color Standardization ([_icon-colors.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/core/_icon-colors.scss), [gutenberg.css](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/mu-plugins/blackbox-bedrock/assets/css/gutenberg.css), [_x-icon.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-icon/_x-icon.scss), [_x-btn.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-btn/_x-btn.scss))**:\n  - Replaced muted greyish fallback colors (`#334155` / `var(--text-main)` / medium emphasis) across icons and icon buttons with default clean white (`#ffffff`).\n  - Standardized `.v-icon`, `.x-icon`, `i[class*="fa-"]`, `span[class*="fa-"]`, `svg[class*="fa-"]`, `[class*="fa-"]`, and `.dashicons` to default `--fa-primary-color` and text color to `#ffffff` when no explicit color modifier class/prop is provided.\n  - Updated Gutenberg Block Editor button SVG icon defaults (`.components-button svg`, `.block-editor-block-icon svg`, `.components-icon svg`) to render in crisp `#ffffff`.\n- **Alphabet Soup HTML Title Entity Decoding ([alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue), [alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts), [alphabet-soup-quick-edit.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-quick-edit.vue), [create-update-post.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/create-update/create-update-post.vue), [create-update-post.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/create-update/create-update-post.controller.ts))**:\n  - Integrated `htmlDecodeFilter` and `getPostTitle` helper across all Alphabet Soup views and dialogs.\n  - Decoded HTML entities (e.g. `&#8217;`, `&amp;`, `&quot;`) in post/page card titles, duplicate confirmation dialogs, quick edit modal inputs, title sorting, search filtering, and header displays.\n\n## [2026-08-11]\n\n### Added\n- **Bazaar Product Creation Media Library Modal Integration ([add-product-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.vue), [add-product-dialog.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.controller.ts), [class-xophz-compass-bazaar-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin.php))**:\n  - Integrated `o-media-library-modal` into the product creation and editing form.\n  - Replaced native browser file upload input with the COMPASS Media Library modal dialog when clicking product image cards.\n  - Extended backend PHP `saveProduct()` endpoint to support direct attachment assignment via `image_id` alongside existing base64 image data payloads.\n- **Bazaar POS Payment Gateway Manager & Enablement Interface ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [bazaar-gateway-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-gateway-dialog.vue), [pos.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/store/pos.store.ts), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue))**:\n  - Implemented `getAllPaymentGateways` and `togglePaymentGateway` AJAX endpoints on the WooCommerce backend.\n  - Created `bazaar-gateway-dialog.vue` modal to inspect all registered WooCommerce payment gateways (Stripe, Credit Card, PayPal, Cash on Delivery, Bank Transfer) with 1-click status toggle switches.\n  - Added warning badge indicators for gateways requiring API setup (e.g. missing Stripe secret keys) with direct links to WooCommerce payment settings.\n  - Enhanced POS checkout modal header and zero-gateway empty state with instant "Enable Payment Gateways" button.\n- **XP Gamification & System Administration Overhaul ([class-xophz-compass-xp-bank.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/admin/class-xophz-compass-xp-bank.php), [class-xophz-compass-xp-settings.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/admin/class-xophz-compass-xp-settings.php), [class-xophz-compass-xp-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/admin/class-xophz-compass-xp-admin.php), [types.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/types.ts), [xp.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/xp.api.ts), [store/index.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/store/index.ts), [xp.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/xp.routes.ts), [xp-settings.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/xp/routes/xp-settings/xp-settings.vue))**:\n  - Built out-of-the-box user profile default configurations (starting XP, GP, AP, initial debt limit, birthdate requirements, default assigned roles).\n  - Implemented exponential level progression formula ($XP_{threshold} = Base \\times Level^{Exponent}$) and linear leveling curves with customizable base XP, exponent multipliers, level-up GP rewards, and AP grants.\n  - Created Centralized Bank Ledger engine (`class-xophz-compass-xp-bank.php`) for immutable tracking of all point mints, rewards, spends, burns, and currency exchanges.\n  - Added Gold Points (GP) to AI Tokens exchange rate manager and GP to Crypto/Memecoin Web3 bridge with user conversion limits.\n  - Created Ability System Hooks manager binding AP unlockable abilities directly to platform capabilities (e.g. `allow_delete`, `max_page_size_50`, `ai_unlimited_mode`).\n  - Overhauled `/xp/settings` admin dashboard into a tabbed glassmorphic interface with COMPASS X-Atoms (`x-card`, `x-btn`, `x-text-field`, `x-switch`, `x-chip`, `x-dialog`) and interactive live curve calculators.\n\n### Changed\n- **Alphabet Soup Browser Navigation History, Real WPMU DEV SEO Integration & Gutenberg New Tab Workflow ([alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue), [alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts), [create-update-post.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/create-update/create-update-post.vue), [create-update-post.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/create-update/create-update-post.controller.ts), [class-xophz-compass-alphabet-soup-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-alphabet-soup/includes/class-xophz-compass-alphabet-soup-api.php))**:\n  - Implemented bidirectional URL query state synchronization (`type`, `post`, `view`) to support browser Back and Forward buttons seamlessly across CPT lists, post inline editing, and spotlight views.\n  - Connected directly to real WPMU DEV SEO (SmartCrawl) plugin (`\\SmartCrawl\\Controllers\\Analysis`) in PHP API to run live SEO and Readability analysis.\n  - Added real WPMU DEV SEO metadata controls to the post editing side panel for `_wds_title` (with character counter), `_wds_metadesc` (with character counter), `_wds_focus-keywords`, `_wds_canonical`, `_wds_redirect`, `_wds_meta-robots-noindex`, `_wds_meta-robots-nofollow`, and OpenGraph social sharing.\n  - Rendered SmartCrawl SEO and Readability analysis HTML output via `v-html` in the SEO side panel.\n  - Added **View Live Page** (`fal fa-eye`) permalink button and **Quick Edit** (`fas fa-bolt`) dialog button directly on post/page paper document cards.\n  - Synced subRoutes to the right-hand Billboard Bulletin Board navigation drawer (`compassStore.setBillboard`) so all dynamic post types (`Posts`, `Pages`, `Custom Post Types`, dynamic CPTs, and `Trash`) display consistently in both the left side nav and right billboard drawer.\n  - Removed unnecessary outer container card and vertical centering spacing from the Overview Spotlight view in `alphabet-soup-index.vue`, allowing "Write", "Structure", and "Publish" feature cards to render directly below the top toolbar.\n  - Standardized spotlight action cards to use default `<x-card>` atom styling (`$glass-bg`, backdrop blur, `$glass-border`) and `rounded-lg` border radius matching the Billboard drawer items.\n  - Standardized Billboard navigation drawer template slot (`#billboard` -> `billboard-navigation-drawer`) in `alphabet-soup.vue` to match platform sub-app layout standards (`bazaar.vue`, `profile.vue`), preserving all navigation links across child views (`/newsroom/schemas`).\n  - Improved CPT list header toolbar layout in `alphabet-soup-index.vue` by converting controls to a single non-wrapping line (`flex-nowrap`) and updating status filter chips to use high-contrast `tonal` (unselected) and `flat` (selected) theme colors.\n  - Rebuilt the post editor in `alphabet-soup-index.vue` into a full-screen dedicated Editor App utilizing `v-layout` with a top `<v-app-bar>`, portrait paper writing canvas, `<v-navigation-drawer>` for SEO & meta controls, and a browser-fixed bottom `<v-footer>`.\n  - Fixed SEO Health Score & Readability Score calculations in `class-xophz-compass-alphabet-soup-api.php` so numeric scores (`0%` - `100%`) are 100% dynamically computed from actual SmartCrawl or native audit checks without static fallback values.\n  - Added smooth spring-decay slide animations (`Transition name="slide-drawer"` with `cubic-bezier(0.16, 1, 0.3, 1)`) for opening and closing all right-hand side drawers (Custom Fields, Comments, SEO & Readability).\n  - Added automatic hiding of the top COMPASS system bar (`compassStore.turnOffAppBar(true)`) while in the full-screen editor mode to maximize distraction-free screen real estate.\n  - Implemented `<Teleport to="body">` for the post editor (`z-index: 999999 !important`), detaching it from nested CSS container bounds and rendering it directly at `document.body` level to cover the top COMPASS bar and WP admin bar completely.\n  - Replaced plain text unicode check (`✓`) and warning (`⚡`) symbols in `class-xophz-compass-alphabet-soup-api.php` with Font Awesome icons (`fal fa-check-circle`, `fal fa-exclamation-triangle`, `fal fa-times-circle`) without `text-*` classes.\n  - Wrapped `x-magic-toast` container in `<Teleport to="body">` and elevated stacking z-index to maximum integer `2147483647 !important` in `x-magic-toast.vue`, ensuring toast notifications always render on top of all full-screen modals, editor overlays, and dialogs.\n  - Placed **Canonical URL** and **301 Redirect URL** side-by-side in a dedicated **Advanced Routing & Canonical** section above Robots Directives in `alphabet-soup-index.vue`.\n  - Flattened the SEO Metadata & Social card layout in `alphabet-soup-index.vue`: removed double-nested inner borders so fields sit directly inside a single glass container.\n  - Fixed Live Site Password Protection & Password Form: updated `save_rest_post_password` in `class-xophz-compass-alphabet-soup-api.php` to write `post_password` directly to WordPress `$wpdb->posts` table, ensured setting a password auto-switches status from `private` to `publish` (preventing 404 Page Not Found errors), and added `the_password_form` filter to render a glassmorphic **Protected Content** password unlock screen for visitors.\n  - Added **Duplicate Post** functionality to Alphabet Soup admin: implemented a new `/wp-json/xophz-compass/v1/alphabet-soup/duplicate` REST endpoint in `class-xophz-compass-alphabet-soup-api.php` that duplicates content, tags, categories, and meta as a new Draft. Added a `Duplicate Post` action icon to the post cards and a native COMPASS confirmation dialog in `alphabet-soup-index.vue`.\n  - Fixed Post Password saving issue: removed custom `password` REST field overrides and hooks in `class-xophz-compass-alphabet-soup-api.php` that were stripping the password from the schema. Added `context: "edit"` to the fetch params in `alphabet-soup-index.controller.ts` so the WordPress REST API natively returns and saves passwords for published posts.\n  - Updated Password Protection labeling in `alphabet-soup-index.vue` & `alphabet-soup-index.controller.ts`: dynamically resolves singular post type names via `getSingularTypeName()` (e.g. **Page Password**, **Post Password**, **Product Password**).\n  - Fixed Visibility & Status Dropdown Menu layout in `alphabet-soup-index.vue`: set `max-width: 260px` and enabled `white-space: normal` text wrapping on password help copy, preventing the dropdown menu from stretching horizontally.\n  - Fixed Quick Edit & Visibility Menu Password Protection in `alphabet-soup-quick-edit.vue` & `alphabet-soup-index.vue`: removed disabled state on password protection input, made password input accessible across Published & Private statuses, and added inline documentation clarifying WordPress Private vs Password Protected behavior.\n  - Redesigned **Editorial Discussion & Comments Side Drawer**: upgraded to a rich glassmorphic thread interface with author avatars/initials, relative timestamps, comment status badges (`approved`/`pending`), empty state card, and clean post comment form.\n  - Updated Post Card SEO Score presentation in `alphabet-soup-index.vue`: replaced the chip container with sleek inline colored text and icon (`text-success` / `text-warning` / `text-error`) positioned directly next to the page views counter.\n  - Spaced **Robots Directives** toggles (Noindex / Nofollow) evenly with `justify-space-around` and `flex-grow-0` padding in `alphabet-soup-index.vue`.\n  - Renamed SEO panel analysis action button from "Run SmartCrawl Analysis" to **Run SEO Audit** in `alphabet-soup-index.vue`.\n  - Fixed TypeScript syntax error and restored `viewPostLink()` function in `alphabet-soup-index.controller.ts`.\n  - Fixed editor canvas scrolling in `alphabet-soup-index.vue`: removed `fill-height` constraint and added `.sexy-scrollbar` to allow long articles to scroll smoothly.\n  - Simplified editor save button labeling in `alphabet-soup-index.vue`: changed bottom-right footer action button copy from "Update Post" / "Publish Post" to **Save** for consistent copy across top header and bottom footer toolbars.\n  - Refined **Improve SEO Ranking** AI action in `class-xophz-compass-alphabet-soup-api.php` & `alphabet-soup-index.controller.ts`: checks current post content structure; if subheadings (`H2`/`H3`) are missing, it intelligently inserts contextual subheadings matching the article title & focus keyword, populates the complete SEO metadata bundle, auto-saves the post, and re-analyzes live SEO stats.\n  - Updated **Improve SEO Ranking** AI action in `alphabet-soup-index.controller.ts` & `class-xophz-compass-alphabet-soup-api.php`: restricted optimization strictly to populating the SEO panel metadata fields (Focus Keyword, SEO Title, Meta Description, Social Title, Social Description) without modifying or injecting text into the document body canvas.\n  - Fixed focus keyword persistence bug when navigating between posts in `alphabet-soup-index.controller.ts`: updated `openPost()` to dynamically reset `focusKeyword.value` to the newly selected post\'s metadata (`_wds_focus-keywords` / `_wds_focus_keyword`) or empty string `""`, preventing old focus keywords from bleeding into subsequent posts.\n  - Fixed SEO Health score calculation bug in `class-xophz-compass-alphabet-soup-api.php`: unset `$smartcrawl_seo_score` when check items were empty to prevent score from falling back to `0%` despite passing 3/5 native audit checks.\n  - Enhanced **Improve SEO Ranking** AI action in `alphabet-soup-index.controller.ts`: now expands content with targeted paragraphs to meet the 300+ word requirement, balances keyword density, automatically auto-saves the post (`savePost()`), and re-analyzes live SEO Health stats (`fetchSeoStats()`).\n  - Added 5th AI Assistant option **Improve SEO Ranking**: sends the current live SEO audit checklist (`seoStats.seo`) and focus keyword payload to `/wp-json/xophz-compass/v1/ai/generate`, automatically populates the full SEO metadata bundle, inserts keyword-optimized H2 headings, and triggers a live re-analysis (`fetchSeoStats()`).\n  - Implemented dynamic cascading fallback placeholders for SEO inputs in `alphabet-soup-index.vue`: SEO Title placeholder defaults to current post title (`activePostTitle`), Social Title defaults to SEO Title (`activePost.meta[\'_wds_title\']`) or Post Title, and Social Description defaults to Meta Description (`activePost.meta[\'_wds_metadesc\']`).\n  - Enhanced AI Assistant **Generate Meta Summary** action: now generates and populates the complete SEO Metadata bundle in one click (Focus Keyword, SEO Title, Meta Description, Social Sharing Title, and Social Sharing Description).\n  - Added WP Connectors & capabilities permission verification (`check_editor_permissions` checking `edit_posts` / `manage_options`) with `X-WP-Nonce` header validation on the `/wp-json/xophz-compass/v1/ai/generate` REST endpoint in `class-xophz-compass-alphabet-soup-api.php`.\n  - Registered `/wp-json/xophz-compass/v1/ai/generate` REST endpoint in `class-xophz-compass-alphabet-soup-api.php` with support for live OpenAI/Gemini API key completion and built-in server-side AI fallback transformations (Magic Polish, Magic Expand, Meta Summary, Article Outline).\n  - Simplified AI assistant branding across editor toolbar and toast notifications to **AI Assistant**.\n  - Added **COMPASS AI Assistant** (`fal fa-magic`) dropdown menu to the editor formatting bar with options for Magic Polish, Magic Expansion, Meta Summary Generation, and H2/H3 Article Outline Generation.\n  - Wrapped all SEO Metadata & Social Sharing inputs in a clean `<x-glass-card>` container in `alphabet-soup-index.vue`.\n  - Added interactive info `(i)` tooltip buttons (`<v-tooltip>`) to every SEO input field explaining the purpose and recommended character limits.\n  - Added Font Awesome icon (`<i class="fal fa-list-check"></i>`) and styled title header to the **SEO Audit Checklist** output in `class-xophz-compass-alphabet-soup-api.php`.\n  - Shortened the Focus Keyword warning message in `class-xophz-compass-alphabet-soup-api.php` to "No focus keyword set. Enter one below." for maximum brevity and clarity.\n  - Updated the pinned drawer footer in `alphabet-soup-index.vue` to use transparent background (`background: transparent !important; backdrop-filter: blur(20px)`), eliminating the solid dark blue block and creating a seamless glass aesthetic.\n  - Returned the **Focus Keyword** input to its dedicated card in the scrollable content flow of the SEO side drawer in `alphabet-soup-index.vue`.\n  - Pinned a clean, full-width **Run SmartCrawl Analysis** action button (`<x-btn block>`) to the fixed bottom footer of the SEO side panel.\n  - Reorganized the SEO & Content Checklist side drawer in `alphabet-soup-index.vue`: removed duplicate URL Slug card, placed **Focus Keyword & Analysis Engine** below the audit checklist output, and formatted all cards into a structured checklist hierarchy.\n  - Repositioned the **Featured Image** card to the top of the SEO & Readability side drawer in `alphabet-soup-index.vue`.\n  - Expanded all editor side drawers (SEO, Custom Fields, Comments) to a comfortable 440px width (`~28%-30%` viewport allocation), ensuring inputs, buttons, and audit checklists have ample horizontal space without feeling squished.\n  - Added URL Slug / Permalink editing inputs to both the top header app bar (`/slug`) and the SEO & Readability side drawer in `alphabet-soup-index.vue`.\n  - Elevated `<x-magic-toast>` (`.magic-cloak-toast-container` & `.magic-cloak-toast`) z-index to `999999999 !important` in `x-magic-toast.vue`, guaranteeing that toast notifications are always the top-most layer above all full-screen teleported editors, modals, and iframes.\n  - Registered `page_views` REST API field across all public WordPress post types in `class-xophz-compass-alphabet-soup-api.php`, reading `_compass_page_views` / `post_views_count` post meta.\n  - Added a **Sort By** dropdown menu in `alphabet-soup-index.vue` header toolbar allowing users to sort posts by **Most Viewed**, **Newest**, **Oldest**, **Title A-Z**, and **Title Z-A**.\n  - Displayed live **Page Views** badges (`<v-icon icon="fal fa-eye" /> {{ post.page_views }}`) on each 3:4 portrait paper card.\n  - Removed fixed `fill-height`, `h-100`, and trapped `overflow-hidden` height constraints on layout wrappers in `alphabet-soup-index.vue`, allowing the parent container to expand naturally with child document cards.\n  - Configured CPT posts grid layout to **6 cards per row** (`col-6-per-row` / `16.666667%` column width) with `overflow-hidden`, preserving authentic 3:4 portrait paper card aspect ratio while eliminating vertical scrollbars completely.\n  - Adjusted CPT cards layout in `alphabet-soup-index.vue` by removing forced `aspect-ratio: 3 / 4` height and setting `overflow-hidden`, allowing all items to fit cleanly inside the screen view without unwanted vertical scrollbars.\n  - Updated `getGutenbergIframeUrl()` in `alphabet-soup-index.controller.ts` to append `&compass_iframe=1&embed=1`, triggering WordPress MU-plugin `is-compass-iframe` detection and activating `iframe-mask.css` to hide `#wpadminbar`, `#adminmenumain`, and `#wpfooter`.\n  - Added `@load="onGutenbergIframeLoad"` in `alphabet-soup-index.vue` to inject high-contrast canvas styling (`#ffffff` canvas background with `#0f172a` text color) into Gutenberg block editor iframes, eliminating low-contrast text and double headers.\n  - Wrapped `<o-media-library-modal>` in `<Teleport to="body">` with `v-if="isMediaModalOpen"`, elevating the Media Library modal above fixed full-screen editor views for true 100% full-screen modal coverage.\n  - Upgraded all editor surfaces (Paper Sheet, Top Header, Sticky Formatting Bar, Side Drawers, and Bottom Footer) to **Hard Frosted Glassmorphism** (`backdrop-filter: blur(40px) saturate(210%)` with semi-transparent navy fill `rgba(8, 18, 36, 0.45-0.5)` and specular white borders `rgba(255, 255, 255, 0.18)`), creating a ultra-lucid translucent glass depth.\n  - Fixed duplicate declaration of `isSaving` and `isDeleting` in `alphabet-soup-index.controller.ts`, resolving Vite compiler transform errors.\n  - Added high-contrast typography CSS rules (`#ffffff` headings, `#cbd5e1` paragraphs, cyan-accented blockquotes) for ProseMirror/Tiptap editor content to eliminate unreadable text contrast.\n  - Replaced iframe embedding for Gutenberg editor with direct launch into WordPress Gutenberg editor in a new browser tab (`_blank`).\n\n### Fixed\n- **Alphabet Soup Editor Initialization Guard ([alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts))**:\n  - Resolved `TypeError: Cannot read properties of null (reading \'commands\')` during post route restoration by adding optional chaining guards (`editor.value?.commands?.setContent`) before populating Tiptap editor content.\n- **COMPASS Explore Active Plugins Grid Filtering ([compass-explore.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-explore/compass-explore.controller.ts))**:\n  - Filtered `compassStore.pluginList` in `compassExplore` to display only active and installed plugins, excluding deactivated and uninstalled ghost modules from the main Explore grid.\n- **Alphabet Soup Admin Layout, 2-Step Navigation & Inline Editor Workflow ([alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue), [alphabet-soup-index.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.controller.ts))**:\n  - Replaced single static posts list with 2-step navigation hierarchy (Step 0: CPT Menu for Posts, Pages, Schemas, Trash, & dynamic CPTs; Step 1: Posts within active CPT node with back button and pinned `+ Create New` button).\n  - Implemented inline Tiptap post editor workflow with title input, status dropdown, CPT category breadcrumb, permalink slug editing, and formatting toolbar.\n  - Added slide-out side panels for CPT Custom Fields (Database Meta), Comments, and RankMath/Yoast SEO stats.\n  - Added bottom view switcher to toggle between SOUP Inline Editor, WP Gutenberg Iframe, and Live Preview.\n- **Bazaar POS Payment Method Display & WooCommerce Checkout ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php), [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue), [split-tendering-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/split-tendering-dialog.vue), [bazaar-gateway-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-gateway-dialog.vue))**:\n  - Added backend `clean_payment_title` method in PHP to strip out `WooPayments (...)` gateway title wrappers and display clean labels ("Credit Card", "Affirm", "Klarna", "Amazon Pay", "PayPal", "Split Payment").\n  - Updated frontend payment selection grid, split tendering dialog, and gateway manager to use standardized icons (Credit Card, Affirm, Klarna, Amazon Pay, PayPal, Split Payment, Cash, Bank Transfer).\n  - Fixed FontAwesome color class rules by removing direct `text-*` classes off `<i>` elements across all POS dialogs.\n  - Set cleaned payment method title on WooCommerce `$order` object during checkout processing so WooCommerce order receipts accurately reflect the selected payment method.\n\n- **Alphabet Soup Central Navigation Drawer, CPT Icons & Portrait Paper Card Layout ([alphabet-soup.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup.vue), [alphabet-soup.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup.controller.ts), [alphabet-soup-index.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/alphabet-soup/alphabet-soup-index/alphabet-soup-index.vue), [sub-app-navigation-list.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/navigation/sub-app-navigation-list.vue))**:\n  - Registered all CPT nodes (`Posts`, `Pages`, `Custom Post Types`, dynamic CPTs, and `Trash`) with COMPASS central `sub-app-navigation-drawer`.\n  - Added `isRouteActive` query-matching method to `sub-app-navigation-list.vue` so only the currently selected navigation drawer item is highlighted active.\n  - Implemented `resolveCptIcon()` with clean FontAwesome/Dashicon mapping and automatic fallback to WordPress icon (`fab fa-wordpress`).\n  - Simplified splash view to 3 interactive feature cards ("Write", "Structure", "Publish"), removing redundant title headers.\n  - Reduced content spacing and rendered Posts, Pages, and CPT items as 3:4 portrait paper document sheets with HTML-stripped 3-line text blips and high-contrast flat status badges.\n  - Configured responsive 5-card-per-row desktop grid layout (`.col-5-per-row`) across all CPT views.\n  - Synced side navigation drawer state (`isAppNavDrawerOpen`) with `SubAppBillboard` so opening the main navigation drawer automatically hides the billboard drawer.\n  - Refactored document paper guide lines to subtle 1px translucent glass lines (`rgba(255, 255, 255, 0.12)`), tightly positioned directly under text blip excerpts, and rendered conditionally only on posts/pages with content to display.\n  - Standardized border radius hierarchy (`rounded-xl` for main container glass cards, `rounded-lg` for inner paper document cards) and resolved stray closing div tag in `alphabet-soup-index.vue`.\n- **Spark Plugs Store Search Evaluation Precedence ([spark-plugs-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue))**:\n  - Moved search query filtering (`hasSearchQuery`) to take precedence over default category filters (`isFeaturedFilter`, `isActiveFilter`) in `displayedApps`.\n  - Fixed issue where searching for sparks like "My Compass" while on the default "Featured" tab returned a static random 9-spark slice instead of executing the search filter.\n- **Bedrock COMPASS Signature Glassmorphism Form Controls ([wp-admin.css](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/mu-plugins/blackbox-bedrock/assets/css/wp-admin.css))**:\n  - Applied the signature COMPASS Glassmorphism design system (`linear-gradient`, `backdrop-filter: blur(12px)`, `8px` border radius, inner light highlights, and cyan glow focus states) across all inputs, textareas, selects, and WooCommerce select control wrappers.\n  - Moved dark glass background (`rgba(13, 17, 23, 0.65)`) and border onto outer control wrapper (`.woocommerce-select-control__control`, `.components-country-select-control__button`) so the glass background spans 100% full width across icons and inputs.\n  - Enhanced search icon and dropdown chevron SVG icons (`.woocommerce-select-control__control-icon`, `.components-base-control__help svg`) with cyan accent fill (`rgba(98, 201, 255, 0.9)`).\n  - Fixed unreadable dark text on `.components-checkbox-control__label` and styled `.components-checkbox-control__input-container` with cyan borders and clean checkmarks.\n- **Bedrock WooCommerce Select Control Listbox Dropdown Overlay Styling ([wp-admin.css](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/mu-plugins/blackbox-bedrock/assets/css/wp-admin.css))**:\n  - Exempted `.woocommerce-select-control__listbox` and Gutenberg popover menu classes from the Bedrock Universal Background Stripper rule.\n  - Applied solid dark mode glassmorphism styles (`#0d1117` background, `blur(12px)` backdrop filter, cyan hover states, z-index `999999`, and max-height scrolling) to fix illegible transparent dropdown overlaps in the WooCommerce Setup Wizard.\n- **Bazaar Product Creation Error Handling & WooCommerce CRUD Hardening ([class-xophz-compass-bazaar-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin.php), [index.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/store/index.ts), [add-product-dialog.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/components/add-product-dialog/add-product-dialog.controller.ts))**:\n  - Wrapped PHP product creation in try-catch block and sanitized prices (`wc_format_decimal`), SKUs, and category IDs to catch data exceptions cleanly instead of crashing AJAX requests.\n  - Replaced direct `new WC_Product($id)` constructor calls in `getProductsDataByIds()` with safe `wc_get_product($id)` factory calls.\n  - Updated Pinia store `saveProduct()` and `submitProduct()` controller to return success status and present actionable feedback alert modals instead of silently closing the dialog on failure.\n- **Bazaar Product Categories HTML Entity Decoding & Empty Category Display ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php))**:\n  - Replaced double-escaped `&nbsp;` HTML entities in `Walker_Simple_String::start_el()` with clean indentation (`- ` prefix and `html_entity_decode`) to prevent raw `&nbsp;(0)` strings in the Vue product dialog categories dropdown.\n  - Set `hide_empty => 0` in backend `getCategories()` query so newly created WooCommerce categories without products assigned can be selected during product creation.\n- **Bazaar POS Customer Search Backend Response ([class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php))**:\n  - Fixed a PHP bug in `getPosCustomers()` where `$customers_data` was being returned in the JSON payload instead of the populated `$data` array, causing customer searches to return zero results.\n  - Added safe `class_exists(\'WC_Customer\')` and fallback `get_user_meta` handling when fetching billing phone numbers.\n- **Mobile System Bar Responsive Layout & Button Icon Condensing ([system-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/system-bar.vue), [compass-toggle.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/buttons/compass-toggle.vue), [user-avatar-btn.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/buttons/user-avatar-btn/user-avatar-btn.vue), [my-sites-btn.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/buttons/my-sites-btn.vue), [_wp-isolation.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_wp-isolation.scss))**:\n  - Condensed all SystemBar Vue buttons ("My Compass", "Setup Wizard", "Howdy, XP", "My Sites") on mobile (`<= 600px`) by hiding their text labels using Vuetify\'s responsive `d-none d-sm-inline` classes.\n  - Eliminated extra side padding and dropdown chevrons on mobile icon buttons so the entire system bar fits cleanly on a single row without wrapping.\n  - Reset top offset in `_wp-isolation.scss` to `top: 0 !important` on mobile to prevent empty top spacing.\n\n## [2026-08-10]\n\n### Added\n- **3D Space Travel Spiral Entrance & Loader Screen Dissolve ([controls.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [u-desktop.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.ts), [x-loader.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-loader/x-loader.vue))**:\n  - Positioned pre-boot camera at `(0, 0, 8000000)` in deep space so the galaxy core initializes as a tiny glowing white point directly behind the loader atom icon in the center of the screen.\n  - Initialized pre-boot camera rotation with 3D angular offset `(rotateX: -1.2, rotateY: -2.5)` so the 4.2-second flight continuously rotates, banks, and swoops through 3D space into the home landing target.\n  - Wrapped `x-loader` in a `<transition name="loader-fade">` dissolve transition (`0.85s` cubic-bezier easing with backdrop-blur dropoff).\n\n### Changed\n- **Logos Spark COMPASS Suite Integration Replication ([logos-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/logos/logos-app.vue))**:\n  - Replicated the iframe embedding pattern from `my-compass-app.vue` into `logos-app.vue`, adding `compass_iframe=1` query parameter to `compassAdminUrl`.\n  - Replaced standard HTML `iframe` with `<x-iframe>` primitive atom component.\n  - Synchronized COMPASS category grouping, icon mapping, and uncategorized plugin drawer hierarchy under `My Compass` navigation with `Software Suite` subtext.\n  - Implemented custom brand-accented glass scrollbar & transparent element style overrides injected into the embedded COMPASS suite window.\n  - Added iframe back-navigation handling via `@click:back="handleBack"` on `u-window`.\n  - Updated `u-window-shell.vue` `handleNavItemClick` to emit `click:nav` for parent menu nodes with children, auto-navigating to the dashboard when opening the `My Compass` menu folder.\n- **Tesseract Spark Box Specs Icon & Element Color Matching ([hosting-tiers.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/tesseract/hosting-tiers.ts), [t-spark-splash-tier.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/t-spark-splash-tier.vue))**:\n  - Updated Box Specs feature icons across all hosting tiers to match each tier\'s element icon (`fal fa-square`, `fal fa-box`, `fal fa-box-full`, `fal fa-box-heart`, `fal fa-box-check`, `fal fa-boxes`, `fal fa-gem`, `fal fa-sparkles`, `fal fa-atom-alt`, `fal fa-shield-virus`, `fal fa-crown`).\n  - Standardized element colors for Bronze (`#CD7F32`) and Silver (`#C0C0C0`) tiers.\n  - Renamed generic `My Compass Suite` feature title across all 11 tiers to element-specific suite titles (e.g. `Quantum Compass Suite`, `Bronze Compass Suite`, `Gold Compass Suite`, `Palladium Compass Suite`, etc.).\n  - Replaced metaphoric plugin names in Compass Suite feature lists across all 11 tiers with literal descriptive terms (e.g. `Marketing Funnels & Campaigns`, `SEO Optimization Engine`, `A/B Split Testing & Conversion`, `Audience & Broadcast Newsletter`, etc.).\n  - Reformatted storage spec lines across all 11 hosting tiers to `Total Storage - System Storage` format (e.g. `320GB Storage - 35GB System`, `10GB Storage - 6GB System`, `2.5TB+ SSD - 300GB System`, etc.).\n  - Added support for `feature.iconColor` overrides in `t-spark-splash-tier.vue` to dynamically inherit per-feature icon styling.\n  - Updated splash feature grid and billboard description containers to use `style="max-width:900px; margin: 0px auto; pointer-events: auto;"` across `t-spark-splash.vue`, `t-spark-splash-tier.vue`, and `m-spark-splash-billboard.vue`.\n\n### Fixed\n- **Wizards Tower Feature Flags, Pinned Apps & User Settings Sync ([feature-flags.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/config/feature-flags.ts), [FeatureFlagsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/FeatureFlagsView.vue), [PinnedAppsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue), [u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue))**:\n  - Bound `FeatureFlagsView.vue` to reactive `FEATURE_FLAGS` and `launcherStore` so pinned state, active plug state, and feature status reactively sync between Feature Flags tab, Pinned Apps tab, and Webtop desktop shortcuts.\n  - Fixed Webtop shortcut filtering (`u-webtop.vue`) and `getSystemDefaultPinnedSparks()` so bottom-right anchored sparks like `Spark Plugs` reliably display on the desktop.\n  - Connected `togglePinned()`, `toggleActive()`, and `updateStatus()` actions directly to `updateFeatureFlag()` and `launcherStore`.\n  - Added "Reset to Defaults" (`fal fa-undo`) header button on both Feature Flags and Pinned Apps views to restore factory default pinned sparks, disabled states, shortcut positions, and feature flag overrides via `launcherStore.resetToFactoryDefaults()`.\n  - Updated Side Rail pin icon in `PinnedAppsView.vue` to point left towards the side rail (`style="transform: rotate(90deg)"`), while restoring the standard red thumbtack (`fas fa-thumbtack`) for Webtop unpinning.\n- **WP Admin Spark Page Edge Spacing ([iframe-mask.css](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/mu-plugins/blackbox-bedrock/assets/css/iframe-mask.css), [wp-admin-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wp-admin/wp-admin-app.vue), [magic-formula-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/magic-formula/magic-formula-app.vue))**:\n  - Added `0 32px` side padding to `#wpcontent` across embedded WP admin iframe pages while removing extra top offset.\n  - Reset outer margins on `#wpbody-content > .wrap` and `.sui-wrap` so admin pages no longer press flush against the window edges.\n- **Frame-Perfect Camera Flight & Starting Position ([controls.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [u-desktop.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.ts), [youmeos.engine.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/engine/core/youmeos.engine.ts))**:\n  - Enforced initial starting camera position `(x: 120229, y: -57865, z: 551486.75)` with controls `(rotateX: -2.5518085782384268, rotateY: 0.37883458619339594, panX: 120229, panY: -57865)`.\n  - Bypassed restoring stale `youmeos:camera-state` from `localStorage` on the welcome landing route (`/welcome`, `/`), ensuring every initial session lands on the exact requested coordinates.\n  - Removed instant pan coordinate reset (`panX = 0`, `panY = 0`) from `setTourMode(true)` and implemented shortest-path angular interpolation to prevent frame jumping during camera transitions.\n\n## [2026-08-09]\n\n### Added\n- **Global MenuSkeleton Component Registration ([register-atoms.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/core/register-atoms.ts))**:\n  - Registered `MenuSkeleton` globally so `<menu-skeleton>`, `<x-menu-skeleton>`, and `<MenuSkeleton>` are available across all sparks without requiring local imports.\n\n### Changed\n- **u-window & u-window-shell Skeleton Loading Standardization ([u-window.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window.vue), [u-window-shell.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**:\n  - Added `navLoading` and `navSkeletonRows` props to `u-window` and `u-window-shell`.\n  - Automatically render `<menu-skeleton :rows="navSkeletonRows" />` in the window navigation drawer when `navLoading` is true.\n\n- **Sparks Dynamic Sidebar Skeleton Updates ([notepad-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/notepad/notepad-app.vue), [bugnet-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bugnet/bugnet-app.vue), [wp-admin-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wp-admin/wp-admin-app.vue))**:\n  - Replaced circular progress loading spinners in Alphabet Soup (`notepad-app.vue`) post types and post lists navigation views with `menu-skeleton`.\n  - Replaced circular progress loading spinners in Bug Net (`bugnet-app.vue`) recent bugs navigation view with `menu-skeleton`.\n  - Removed local `MenuSkeleton` import from `wp-admin-app.vue` and bound `:nav-loading="menuLoading"`.\n\n- **NucleOS Webtop Settings List Reordering ([WebtopView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/views/WebtopView.vue))**:\n  - Moved **Top Bar Across Top** setting toggle to the very top of the behavior list.\n  - Positioned **Factory Reset Device** setting button to the very bottom of the behavior list.\n\n## [2026-08-08]\n\n### Fixed\n- **AI Connector Registry Deduplication & Anthropic Key Option Alignment ([class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php))**:\n  - Aligned Anthropic fallback option key to `connectors_ai_anthropic_api_key` to match WordPress AI plugin standards while preserving fallback compatibility for `compass_anthropic_api_key`.\n  - Added strict connector ID and option key deduplication tracking in `get_connectors_api()` to eliminate duplicate card entries (e.g. Anthropic vs Anthropic Claude AI, Google vs Google Gemini AI).\n\n- **Launcher Store & Notepad App Runtime Fixes ([launcher.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/launcher.store.ts), [notepad-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/notepad/notepad-app.vue))**:\n  - Fixed `ReferenceError: updateFeatureFlag is not defined` when toggling spark status in `toggleSparkDisabled` by importing `updateFeatureFlag` from `@/config/feature-flags`.\n  - Fixed `TypeError: Cannot read properties of undefined (reading \'notepad\')` when rendering `NotepadApp` by destructuring `activeLexicon: lexicon` from `useLexicon()`.\n  - Fixed `[Vue warn]: setup() return property "__" should not start with "$" or "_"` by renaming the setup translation helper property from `__` to `t`.\n\n- **COMPASS Connectors Gateway UI Redesign & Native WP Connector Registry Integration ([compass-connectors-abilities.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-matrix/compass-connectors-abilities.vue), [class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php))**:\n  - Updated `get_connectors_api()` to dynamically query `wp_get_connectors()` from the WordPress native connector registry, guaranteeing COMPASS matches all connectors registered site-wide.\n  - Formatted connectors in a 2-column grid (`cols="12" md="6"`) sorted alphabetically (A-Z) by name with expandable key input drawers.\n  - Softened card outlines from harsh white `variant="outlined"` to dark translucent glassmorphism (`rgba(255, 255, 255, 0.07)` border) with subtle cyan hover highlights and `variant="tonal"` button actions.\n\n- **Speech-to-Text Dictation Button & Gemini API Route Fix in Bubblegum ([bubblegum-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum-app.vue), [bubblegum.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [class-xophz-compass-gemini-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-gemini-api.php))**:\n  - Integrated `MDictationBtn` (`m-dictation-btn.vue`) speech-to-text dictation button into the "✨ Generate Task List" modal header.\n  - Connected Web Speech API dictation handlers (`handleDictationInterim`, `handleDictationResult`, `handleDictationError`) to real-time transcribe voice input into `generationDumpText`.\n  - Fixed Gemini API model request (`gemini-2.0-flash`), added `credentials: "same-origin"` authentication headers, and improved error message reporting.\n\n- **UWindow Bar & System Bar Border Cleanup ([u-window-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window-bar.vue), [u-window.scss](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window.scss), [u-system-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-system-bar/u-system-bar.vue), [youmeos.scss](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/youmeos.scss))**:\n  - Removed top border on window drag handles while keeping the 1px bottom border separating the header from content.\n  - Stripped outer window borders, border-radius, and shadows when windows are docked/snapped (`&[class*="--snapped-"]`).\n  - Removed bottom border on `.v-footer.glass-panel.u-system-bar`.\n\n- **Moving Castle Dashboard Redesign & Identification Card Layout ([DashboardView.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/moving-castle/views/DashboardView.vue), [SubsitesView.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/moving-castle/views/SubsitesView.vue), [moving-castle.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/moving-castle/moving-castle.routes.ts))**:\n  - Created `DashboardView.vue` as the primary default landing route (`/moving-castle`), displaying network stats, total subsites, table counts, recorded migration history, and quick navigation shortcuts.\n  - Unmerged Export functionality from card clicks in `SubsitesView.vue`, giving site cards explicit "Details" and "Export" action buttons and dedicated modals.\n  - Redesigned Network & Subsite cards with a futuristic ID-Card badge structure featuring badge headers, glowing theme/site avatar frames, and database profile metrics.\n\n- **Beat Salad Cassette Tape Mode Persistence & View Switcher Fix ([jukebox-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/jukebox/jukebox-app.vue))**:\n  - Persisted user view mode choice in `localStorage` under `youmeos:jukebox:viewMode` (defaulting to retro Cassette Tape Deck mode).\n  - Updated window header action button icon (`fad fa-cassette-tape` / `fad fa-record-vinyl`) to accurately show destination mode when toggling between Cassette Tape and Classic Vinyl modes.\n\n- **Performance Matrix Widget Double Rendering Fix ([QuestbookCrmSummaryWidget.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/components/widgets/QuestbookCrmSummaryWidget.vue), [QuestbookPipelineSummaryWidget.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/components/widgets/QuestbookPipelineSummaryWidget.vue), [QuestbookInboxActivityWidget.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/components/widgets/QuestbookInboxActivityWidget.vue), [QuestbookCalendarEventsWidget.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/components/widgets/QuestbookCalendarEventsWidget.vue), [QuestbookOverview.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookOverview.vue))**:\n  - Resolved double `o-widget` card frame rendering on Performance Matrix (`#/compass/perform`) by removing internal nested `<o-widget>` tags from Questbook widget components.\n  - Standardized widget architecture across all performance widgets (`treasure-map`, `treasure-trove`, `silver-arrow`, `questbook`) so `compass-perform.vue` and `QuestbookOverview.vue` provide outer `<o-widget>` shell wrappers.\n\n- **Dynamic User Rail Spark Pinning & Deactivation Filtering ([launcher.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/launcher.store.ts), [u-user-rail.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue), [o-spark-card.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/organisms/o-spark-card.vue), [u-app-launcher.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-app-launcher/u-app-launcher.vue), [PinnedAppsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue))**:\n  - Configured default pinned side-rail Sparks (`DEFAULT_RAIL_SPARKS = ["my-compass-suite", "u-nucleos", "helios", "nexus"]`) stored in `launcher.store.ts` and persisted to `youmeos:pinnedRailSparks` in `localStorage`.\n  - Updated `UUserRail` (`railItems` and `activeWindows`) to filter against `launcherStore.visibleApps`, automatically hiding any deactivated/unplugged Sparks (`disabledSparks`) or unauthorized admin apps from the side rail.\n  - Added right-click context menu (`@contextmenu.prevent`) on `UUserRail` items for one-click unpinning directly from the side rail.\n  - Integrated a dedicated side-rail pin thumbtack button into `OSparkCard` for instant pinning while browsing in Spark Plugs.\n  - Added right-click glass context menus on shortcuts in `u-app-launcher.vue` (Launch Pad) to launch apps, pin/unpin from Side Rail, or pin/unpin from Webtop.\n  - Added Side Rail pin toggle action buttons to `PinnedAppsView.vue` in Wizard\'s Tower.\n\n- **Yellow Links COMPASS Admin App Route Implementation ([router.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/router.ts), [yellow-links.routes.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/yellow-links.routes.ts), [yellow-links.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/yellow-links.vue), [yellow-links.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/yellow-links.controller.ts), [yellow-links.api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/yellow-links.api.ts), [useYellowLinks.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/yellow-links/composables/useYellowLinks.ts))**:\n  - Registered `yellow-links` lazy route configuration in `src/routes/router.ts` at `/yellow-links`.\n  - Built out complete Yellow Links COMPASS admin sub-app module using `x-sub-app-layout` and Vuetify layout wrappers (`v-row`, `v-col`, `v-sheet`, `x-card`, `x-btn`).\n  - Created reusable `useYellowLinks()` composable in `src/routes/yellow-links/composables/useYellowLinks.ts` unifying single-source-of-truth state, loading indicators, error handling, status updates, deletion, voting, and submission logic across views.\n  - Added REST API endpoints in `class-yellow-links-api.php`:\n    - `POST /yellow-links/v1/links/{id}/status`: Updates `yellow_link` CPT post status (`publish`, `pending`, `draft`).\n    - `DELETE /yellow-links/v1/links/{id}`: Trashes target directory link post.\n    - `ensure_seeded_links()`: Automatically populates WordPress database with all 11 official ecosystem seed entries upon initial query.\n  - Implemented 5 dedicated sub-app views:\n    - **Link Directory (`views/yellow-links-directory.vue`)**: Search, category filter chips, vote casting, click tracking, Gemini URL safety badges, and submit link modal with AI URL analysis.\n    - **Link Management (`views/yellow-links-manage.vue`)**: Admin link moderation table with circular loading spinner (`<v-progress-circular>`), status toggles (Approved, Pending, Rejected), and deletion connected live to REST API via `useYellowLinks()`.\n    - **Analytics (`views/yellow-links-analytics.vue`)**: Click volume stats, voting trends, category breakdown progress bars, and Gemini AI health metrics.\n    - **Yellow Network & AI Ads (`views/yellow-links-network.vue`)**: Gemini AI sponsored ad generator (`/yellow-links/v1/gemini/suggest-ad`) with live ad preview cards and active sponsored network directory listing.\n    - **Settings (`views/yellow-links-settings.vue`)**: Directory configuration for auto-approval, Gemini safety threshold slider, and submission quotas.\n  - **Yellow Links Spark Splash Screen & Sidebar Navigation ([yellow-links-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/yellow-links/yellow-links-app.vue), [RightSidebar.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/yellow-links/src/components/organisms/RightSidebar.vue))**: Added `t-spark-splash` intro screen with `x-spark-splash-action` cards and sidebar navigation tabs (*Yellow Links Overview*, *Public Registry*, *Featured Bulletins* targeting `#bulletins` anchor).\n  - **UWindow Shell Start Over Icon Fix ([u-window-shell.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**: Replaced invalid icon class `fal fa-rotate-left` with standard FontAwesome icon `fal fa-undo` on the **Start Over** nav button.\n  - **Standalone Yellow Links Header Clean Up ([Header.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/yellow-links/src/components/organisms/Header.vue))**: Fixed `computed` import and cleaned header layout.\n- **Nucleos Spark ClockView Fix ([ClockView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/views/ClockView.vue))**: Renamed returned `__` i18n function in `setup()` to `t` to resolve Vue reserved prefix warning (`__`).\n\n\n- **Questbook CRM Custom Table Database, UI/UX & Dashboard Overhaul ([class-xophz-compass-quests-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-quests/includes/class-xophz-compass-quests-rest.php), [QuestbookOverview.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookOverview.vue), [QuestbookDirectory.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDirectory.vue), [QuestbookInbox.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookInbox.vue), [QuestbookPipeline.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookPipeline.vue), [QuestbookProfile.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookProfile.vue), [QuestbookDeals.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDeals.vue))**:\n  - **Database Migration**: Replaced WordPress Custom Post Types (`questbook_contact`, `questbook_log`) with high-performance Custom MySQL Tables (`xophz_qb_contacts`, `xophz_qb_logs`, `xophz_qb_deals`, `xophz_qb_tasks`, `xophz_qb_events`).\n  - **WP User <-> CRM Contact Bridge & Name Extraction**:\n    - **First & Last Name Parsing**: Updated `sync_wp_users()`, `format_contact()`, and `sync_new_wp_user()` to extract `first_name` and `last_name` from WordPress `user_meta` or parse non-email `display_name` strings, automatically updating any contacts whose name was set to an email address.\n    - **Automatic Synchronization**: Hooked into WordPress `user_register` action so whenever a new site user account is created, Questbook automatically creates a linked CRM contact record in `xophz_qb_contacts` (`wp_user_id`).\n    - **Manual Sync Endpoint & Button**: Created `POST /questbook/v1/contacts/sync-wp-users` REST endpoint and added a **Sync WP Users** button in [QuestbookDirectory.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDirectory.vue) header bar.\n    - **Cross-Table Search Bridge**: Updated `/contacts?search=` to query both `xophz_qb_contacts` and `wp_users` so unlinked site users automatically show up in contact search & live autocomplete dropdowns.\n  - **Hookshot & Webhook Ingest**: Updated Twilio SMS, Email, and Forminator webhooks to ingest directly into custom tables without CPT overhead.\n  - **REST API & Performance Widgets API**: Refactored all REST endpoints (`/contacts`, `/inbox`, `/events`, `/boards`, `/deals`, `/summary`). Added `compass_perform_widgets` PHP filter hook registering 4 CRM performance widget descriptors (`questbook-crm-summary`, `questbook-pipeline-summary`, `questbook-inbox-activity`, `questbook-calendar-events`).\n  - **Dashboard Overview (Default Page)**: Created [QuestbookOverview.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookOverview.vue) as the default entry point (`/questbook`) displaying a live grid of `<o-widget>` performance widgets that users can pin directly to their **My Compass Performance Matrix** tab with a single click.\n  - **Global Async Widget Registration Fix**: Registered Questbook widgets in [perform-widgets.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/core/perform-widgets.ts) using `defineAsyncComponent()` so navigating to `/compass/matrix` (Performance Matrix tab) resolves components cleanly without Vue Router component resolution errors.\n  - **MagicCloak Toasts & Internal Dialogs**: Replaced all native browser `confirm()` and `alert()` prompts with COMPASS `<x-dialog>` confirm modals and integrated the `useMagicCloak` (`showDirectHint`) internal toast system across Deals, Pipeline, Profile, and Inbox views.\n  - **Email-First Contacts Autocomplete & Autofill Suppression**: Built an interactive glassmorphic live dropdown list underneath the email search input in [QuestbookDirectory.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDirectory.vue) listing matching contacts in real-time. Suppressed browser auto-suggestions (`autocomplete="new-password"` + dummy forms) to prevent Chrome autofill from interfering with new contact creation.\n  - **UI/UX Refactor**:\n    - **Contacts**: Added company column, status filter chips, user initials avatars, and email-first smart lookup.\n    - **Inbox**: Fixed raw Forminator submission entry matching to properly show human-readable contact names and formatted email payloads, plus clear onboarding empty states.\n    - **Pipeline**: Enhanced stage columns with contact initials avatars, fad icons, and interactive drop target styling.\n    - **Profile**: Redesigned contact details sidebar with icon-labeled metadata fields and company integration.\n    - **Deals**: Introduced dedicated Deals view, store (`deals.store.ts`), and REST endpoints for tracking revenue opportunities through custom pipeline stages.\n\n- **Webtop Shortcut Bottom-Right Alignment & Drag Initialization Fixes ([u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue))**:\n  - Adjusted default bottom-right position offsets to clear ambient vertical scroll tracks and bottom footer controls without getting cut off.\n  - Constrained Webtop shortcut item width to 140px in SCSS to align with grid cell width (`CELL_WIDTH`).\n  - Fixed drag-and-drop initialization bug where state invalidation was wiping shortcut coordinates on `dragStart`, ensuring bottom-right and pinned icons are freely draggable across the Webtop.\n\n\n- **w⁴ Protocol Tesseract Splash & 4D Box of Boxes Vision ([tesseract-splash.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/tesseract/tesseract-splash.vue))**:\n  - Updated mission tagline: *"A 4-dimensional box of boxes. The w⁴ Protocol connects sovereign BlackBOX nodes running YouMeOS across 43% of the web into a unified, borderless Light Web."*\n  - Emphasized opaque BlackBOX encapsulation and 4D network federation across the 3 feature cards:\n    - **Step 1 (`fal fa-box-usd`)**: `"1. Claim Your BlackBOX"` (Provision your sovereign node—an opaque, self-contained box).\n    - **Step 2 (`fal fa-box-open`)**: `"2. Connect the Mesh"` (Unpack w⁴ to bridge your node into a 4-dimensional box of boxes).\n    - **Step 3 (`fal fa-box-full`)**: `"3. Illuminate the Light Web"` (Unify 43% of the web into an interconnected platform for the next 100 years).\n\n- **Welcome Spark Splash "Get Your Own" CTA Card ([v-welcome-splash.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/welcome-u/views/v-welcome-splash.vue), [welcome-u-spark.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/welcome-u/welcome-u-spark.vue))**:\n  - Added a third call-to-action (CTA) card to the Welcome Spark splash view titled "Get Your Own".\n  - Configured 3-column layout (`sm="4"`) for Author\'s Note, Back the Vision, and Get Your Own CTAs.\n  - Linked the "Get Your Own" CTA click event to launch the Tesseract spark (`tesseract`).\n\n- **Welcome Spark Vision Expansion & O.S. Optimistic Solution Cards ([v-welcome-vision.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/welcome-u/views/v-welcome-vision.vue))**:\n  - Elevated "The Vision" intro statement in the Welcome spark to emphasize human agency, sovereign focus, and human-computer symbiosis.\n  - Introduced YouMeOS as an **Optimistic Solution** engineered to transcend digital fragmentation and build a personal digital universe.\n  - Expanded the vision grid to 12 structured O.S. concept cards playing on the initials O.S., featuring **Open Singularity** (sovereign human-AI convergence) and **Omnipresent Synthesis** (unified cognitive knowledge web).\n  - Added O.S. tonal chips and FontAwesome icons with theme accent colors for all 12 vision cards.\n\n\n- **Alphabet Soup i18n Support, Comments Sidebar & Editor Scroll Fixes ([notepad-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/notepad/notepad-app.vue))**:\n  - Integrated `useLexicon` composable for dynamic spark terms and `__` translation helper fallback to WordPress `wp.i18n.__`.\n  - Wrapped UI text strings (window title, comments status toggle, sidebar drawer header, and disabled comments overlay) with translation bindings.\n  - Updated topbar comments toggle button with icon (`fal fa-comments`) and explicit text label (`Comments: Enabled` / `Comments: Disabled`).\n  - Added close icon button (`fal fa-times`) to the Comments drawer header so users can close the sidebar.\n  - Added glassmorphism overlay with a 1-click "Enable Comments" toggle button inside the sidebar when comments are disabled.\n  - Added `min-h-0` flexbox constraints on `.editor-container` so the TipTap editor scrolls vertically when content fills the container.\n\n- **Hookshot App Status & Real-Time Telemetry on My Compass Phone ([HookshotApp.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/apps/HookshotApp.vue), [PhoneAppView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/components/views/PhoneAppView.vue), [PluginCharts.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/components/organisms/PluginCharts.vue), [class-hookshot-rest-dashboard.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-hookshot/includes/class-hookshot-rest-dashboard.php))**:\n  - Implemented dedicated mobile glassmorphism `HookshotApp.vue` component matching the established `AppTemplate` design system.\n  - Added live status indicators for configured webhooks: glowing green `● RUNNING` for active hooks and muted `○ STOPPED` for inactive hooks.\n  - Implemented interactive toggle actions allowing users to start/stop hookshots directly from their mobile phone app.\n  - Rendered telemetry ECharts displaying 24h dispatch volume trends and health/status distribution charts.\n  - Added REST API read access (`check_read`) in `class-hookshot-rest-dashboard.php` so logged-in users on My Compass Phone can query webhook configurations and stats.\n\n- **Fixed Missing Roboto Fontface Import ([_font-awesome.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/vendor/_font-awesome.scss))**:\n  - Removed missing `roboto-fontface` CSS import from `_font-awesome.scss` to resolve PostCSS/Vite `ENOENT` build error.\n\n- **Default Top Bar Across Top to False ([window.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/window.store.ts))**:\n  - Updated default `appBarOrder` fallback value from `-1` to `1` in `useWindowStore`, ensuring "Top Bar Across Top" defaults to `false` for all users.\n  - Updated `flushPreferences()` to clear `youmeos:appBarOrder` from `localStorage` and reset `appBarOrder` to `1`.\n\n- **Passport Card Portrait Upload Fallback ([o-passport-card.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/omega-source/components/o-passport-card.vue), [o-passport-wallet.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/omega-source/components/o-passport-wallet.vue))**:\n  - Removed unnecessary `console.error` log when triggering portrait file uploads on passport cards.\n  - Added `@portrait-upload` event forwarding on `o-passport-wallet` to ensure fallback event emission functions cleanly when controller is not injected.\n\n- **Alphabetized Omega Source Navigation Items ([omega-source-app.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/omega-source/omega-source-app.controller.ts))**:\n  - Reordered `NAV_ITEMS` in `omega-source-app.controller.ts` so all navigation items are sorted alphabetically while keeping "Omega Source" pinned at the top.\n\n\n- **Registered Launch Pad Spark & Feature Flag Label ([launcher.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/launcher.store.ts), [feature-flags.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/config/feature-flags.ts))**:\n  - Registered `app-launcher` spark in `useLauncherStore` with title "Launch Pad", icon `fal fa-rocket-launch`, and red icon color `#ff5252`.\n  - Added label "Launch Pad" to `FEATURE_FLAGS[\'app-launcher\']` so it can be managed and pinned via Wizards Tower.\n\n- **Removed Sync Buttons from Plugin Action Bars & Cards ([x-plugin-action-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/bars/x-plugin-action-bar/x-plugin-action-bar.vue), [plugin-card.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/cards/plugin-card/plugin-card.vue), [plugin-grid-circle.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/plugin-grid-circle/plugin-grid-circle.vue), [plugin-reveal-circle.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/prefabs/plugin-reveal-circle/plugin-reveal-circle.vue))**:\n  - Removed `<x-sync-btn>` from plugin action bars and cards across the dashboard and plugin views.\n\n- **Beat Salad Cassette Tape Redesign & View Mode Toggle ([jukebox-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/jukebox/jukebox-app.vue))**:\n  - Redesigned Beat Salad spark UI into a landscape cassette tape aspect ratio deck inspired by classic vintage cassette tapes.\n  - Added micro-textured dark cassette shell, vintage Side A/B top label with handwritten track titles, and metallic gold/bronze foil banner.\n  - Added central smoked acrylic window with dual 6-point white spoke reels that animate and spin during audio playback.\n  - Positioned chunky tactile deck controls (Play, Pause, Prev, Next, Stop, Eject / Station List) and horizontal volume slider underneath the cassette body.\n  - Integrated a view mode toggle in the app bar to switch dynamically between Cassette Tape mode (640x460) and Classic Vinyl mode (360x680).\n\n\n- **Welcome Manifesto Splash Modal Hidden ([youmeos-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/youmeos-app.vue))**:\n  - Temporarily disabled auto-trigger of the `showManifesto` splash modal on mount while preserving modal component structure for future relocation.\n\n- **Desktop Shortcut Order Sync & Weight Sorting Fix ([u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [launcher.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/launcher.store.ts), [PinnedAppsView.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue))**:\n  - Fixed `webtopShortcuts` sorting to evaluate `FEATURE_FLAGS[id].weight` so desktop shortcut order stays in sync with Wizard\'s Tower.\n  - Restricted `endDragShortcut` to only commit positions for the dragged app instead of locking all shortcuts into static coordinates.\n  - Added `clearShortcutPosition` and `clearAllShortcutPositions` to `launcherStore` so reordering or saving layout in Wizard\'s Tower immediately updates desktop icons to match table order.\n\n- **Desktop Shortcut Collision Resolution & Auto-Displacement ([u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue))**:\n  - Implemented reactive `resolvedPositions` grid coordinate calculator to eliminate icon overlap on the desktop webtop canvas.\n  - Added dynamic auto-displacement so shortcuts automatically slide out of the way when dragged or when coordinates collide.\n  - Enabled grid-snapping on drag release to persist organized, non-overlapping shortcut positions in local storage.\n\n- **My Compass Suite Portal ID Resolution & Window Store Mapping ([window.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/window.store.ts), [feature-flags.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/config/feature-flags.ts))**:\n  - Implemented automatic portal ID resolution (`PORTAL_IDS` mapping) in `windowStore` actions (`launchApp`, `closeWindow`, `focusWindow`, `toggleMinimize`, `toggleMaximize`, `updateWindow`, `setSparkUrme`), mapping base portal IDs like `my-compass-suite` to registered window ID `u-my-compass-suite`.\n  - Added fallback `u-` prefix resolution to `getFeatureStatus` and `updateFeatureFlag` in `feature-flags.ts`.\n  - Resolved issue where launching `my-compass-suite` spawned an un-rendered dummy window and created a duplicate active window entry in the desktop user rail.\n\n- **Biosphere Tab Layout Standardization & Full Audit ([g-biosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-biosphere-tab.vue))**:\n  - Refactored Biosphere tab to consume `GPlanetaryTabLayout`, standardizing Threat and Taxa filter chips in the floating glass overlay.\n  - Achieved 100% full-suite layout alignment across all 7 Gaea OS instrument tabs.\n\n- **Chart Tooltip & Axis Unit Suffix Formatting ([g-anthroposphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Added explicit unit suffixes to **Anthroposphere Population Growth** chart (`7.265 Billion People` in tooltip, `{value} B` on Y-axis labels).\n  - Added unit suffixes across all **Atmospheric Gas** chart tooltips (`ppm`, `ppb`, `°C`).\n\n- **Atmosphere Chart Re-rendering & Option Bleed Fix ([g-atmosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Bound `:key="activeGas"` to `<v-chart>` to ensure full instance destruction/recreation on sub-tab switches, preventing ECharts Y-axis option merging bleed.\n  - Set explicit `min: -1.5` and `max: 2.0` bounds on Temperature Anomaly Y-axis.\n\n- **Atmosphere Charts & Anthroposphere Map Layer Fixes ([g-atmosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue), [g-anthroposphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue))**:\n  - **Temperature Anomaly Chart**: Upgraded to a diverging red (+) / blue (-) bar chart and fixed API payload parsing to prevent y-axis scale collapse.\n  - **Nitrous Oxide Telemetry**: Added robust NOAA N2O historical baseline fallback to prevent API parsing errors.\n  - **Anthroposphere Map Layer Modes**: Fixed `setMapLayerMode` so switching between `Population Tiers`, `Mortality & Conflict`, and `Combined Matrix` dynamically updates map marker colors, sizing, and dimming effects.\n\n- **Atmosphere Navigation Cleanup & Gas Selector Enhancement ([gaea-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/gaea-app.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Removed redundant `<v-bottom-navigation>` bar from `gaea-app.vue`.\n  - Moved icons (`fal fa-thermometer-half`, `fal fa-smog`, `fal fa-cloud-meatball`, `fal fa-flask-poison`) and full names (`Temperature (°C)`, `CO₂ Levels (ppm)`, `Methane (CH₄)`, `Nitrous Oxide (N₂O)`) to the top-right gas selector toolbar inside `g-atmosphere-tab.vue`.\n\n- **Leaflet Popup Dark Glassmorphism Styling Fix ([g-planetary-tab-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-planetary-tab-layout.vue))**:\n  - Added unscoped global CSS styles targeting `.leaflet-popup-content-wrapper` and `.leaflet-popup-tip` inside `GPlanetaryTabLayout`.\n  - Replaced Leaflet default white background boxes with high-contrast dark glassmorphism styling (`rgba(15, 23, 42, 0.92)`, `backdrop-filter: blur(12px)`, `border-white-15`) across all planetary map tabs.\n\n- **Full Suite GPlanetaryTabLayout & Map Camera Standardization ([g-anthroposphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue), [g-magnetosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Aligned Anthroposphere, Lithosphere, and Magnetosphere Leaflet map camera centers to `[15, 0]` at zoom `1.8`, providing a uniform global view across all tabs.\n  - Refactored all 6 planetary tabs to consume the standardized `GPlanetaryTabLayout` component.\n\n- **Cryosphere & Hydrosphere Map Center & Layout Standardization ([g-cryosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue))**:\n  - Aligned Cryosphere Leaflet map camera center to `[15, 0]` at zoom `1.8`, matching Hydrosphere map zoom position.\n  - Refactored both tabs to consume the standardized `GPlanetaryTabLayout` component.\n\n- **Standardized GPlanetaryTabLayout Construct & Atmosphere Engine ([g-planetary-tab-layout.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-planetary-tab-layout.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Built `GPlanetaryTabLayout` component to enforce atomic design standards, standardized view switcher buttons (`Split Instrument`, `Map View`, `Telemetry Chart`), and floating glass overlay map styling across Gaea OS tabs.\n  - Upgraded **Atmosphere Tab** using the layout construct, adding a Leaflet **Global Atmospheric Baseline & Greenhouse Gas Observatory Map** (Mauna Loa Observatory Hawaii, Cape Grim Tasmania, Mace Head Ireland, South Pole Baseline, Mount Waliguan China, Alert Station Arctic).\n  - Integrated multi-gas telemetry selector (Global Temperature Anomaly, Atmospheric CO₂ ppm, Methane ppb, Nitrous Oxide ppb).\n\n- **Planetary Leaflet Maps Floating Glass Overlay Redesign ([g-cryosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue), [g-anthroposphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue), [g-magnetosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Converted external control/legend cards into floating glassmorphic overlay cards (`position-absolute` at top of `.map-wrapper`), eliminating block gaps above the maps.\n  - Repositioned Leaflet map zoom controls to `topright` so zoom buttons do not collide with floating top overlay cards.\n  - Expanded Leaflet map elements to stretch 100% full height from top to bottom across all planetary tabs.\n\n- **Magnetosphere Split Instrument Layout Optimization ([g-magnetosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Implemented **Split Instrument View** allowing the Auroral Map and Planetary Kp Index chart to display together.\n  - Shrank Planetary Kp bar chart to a compact 170px height in Split mode, allowing the Leaflet Auroral Map to flex-grow and occupy 70%+ of vertical space.\n\n- **Planetary Instruments & Telemetry Suite Expansion ([g-instruments-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-instruments-tab.vue))**:\n  - Expanded Instruments suite to feature live telemetry gauges across all 6 primary planetary domains:\n    - **Atmosphere**: Live CO₂ levels (`ppm`) from Mauna Loa Observatory.\n    - **Lithosphere**: Live M4.8+ seismic activity count from USGS network.\n    - **Magnetosphere**: Live Planetary $Kp$ Index from NOAA Space Weather Prediction Center.\n    - **Cryosphere**: Live Arctic Sea Ice extent ($M\\,km^2$) from NASA NSIDC.\n    - **Hydrosphere**: Live Ocean Temperature Anomaly ($^\\circ C$) from global climate telemetry.\n    - **Anthroposphere**: Live Global Population ($B$) from World Bank Open API.\n  - Linked each instrument gauge card to navigate directly to its corresponding spark tab upon click.\n\n- **Magnetosphere & Space Weather Engine Buildout ([g-magnetosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue), [gaea-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/gaea-app.vue))**:\n  - Built interactive **Magnetosphere Instrument** featuring Leaflet High-Latitude Auroral Station Map (Poker Flat Alaska, Tromsø Norway, Yellowknife Canada, Abisko Sweden, Syowa Antarctica, Reykjavik Iceland).\n  - Integrated live NOAA SWPC Space Weather REST API (`noaa-planetary-k-index.json`), rendering a real-time Planetary $Kp$ Index bar chart with geomagnetic storm alert thresholds ($Kp \\ge 5$).\n  - Added dark glassmorphic styling for Leaflet map zoom controls and mounted `GMagnetosphereTab` component in `gaea-app.vue`.\n\n- **Cryosphere Layout & Zoom Control Fix ([g-cryosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue))**:\n  - Fixed map container height stretching (`flex-grow-1 h-100 min-h-0`) so Leaflet polar map occupies full available vertical space without layout shifts.\n  - Applied dark theme styling to Leaflet zoom controls (`.leaflet-control-zoom a`) so zoom buttons blend into the UI theme.\n\n- **Lithosphere Toolbar Default Time Range Update ([g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Set default seismic telemetry time range to `7 Days` for faster initial rendering and recent earthquake focus.\n\n- **Lithosphere USGS Time Window Query Parameter Scaling ([g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Dynamically scaled `minmagnitude` threshold (M4.5 for 7d, M4.8 for 30d, M5.0 for 90d, M5.2 for 365d) and increased result payload `limit` (up to 1,000 events).\n  - Resolved 90-day vs 1-year data truncation bug caused by fixed 300 event API limit capping recent events.\n\n- **Lithosphere Toolbar Date Range Selector & Responsive Layout ([g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Added interactive **Time Range Selector** (`7 Days`, `30 Days`, `90 Days`, `1 Year`) to the Lithosphere control toolbar.\n  - Dynamically queries USGS live GeoJSON endpoint with selected `starttime` parameter, refreshing both Leaflet Map markers and ECharts scatter plot.\n  - Made Leaflet Seismic Map stretch vertically to fill 100% of available viewport space in Map mode.\n\n- **Lithosphere Bi-Directional Map & Timeline Interactivity ([g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Implemented **Split Instrument View** allowing the Leaflet Seismic Map and Magnitude Timeline Scatter Plot to display together.\n  - Linked `@datazoom` slider events from the timeline scatter plot directly to the Leaflet map, dynamically filtering map markers in real time as the user scrubs time windows.\n  - Linked scatter chart point `@click` events to Leaflet `flyTo()` camera animation, centering the map on the selected quake and triggering its interactive popup.\n\n- **Lithosphere Leaflet Seismic Map & USGS Quake Telemetry Buildout ([g-lithosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Built dual-view interface featuring **Leaflet Seismic Map** and **USGS Magnitude Scatter Chart**.\n  - Plotted live M4.8+ global earthquakes in real time directly on the Leaflet map with magnitude-proportional circle markers.\n  - Highlighted major quake events (M $\\ge$ 6.5) with pulsing red alert rings and annotated major tectonic boundary fault zones (Ring of Fire, San Andreas Fault, Mid-Atlantic Ridge, Alpine-Himalayan Belt, East African Rift).\n\n- **Cryosphere & Hydrosphere Leaflet Map & Climate Data Buildouts ([g-cryosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue))**:\n  - **Cryosphere Tab Buildout**: Built dual-view interface featuring Leaflet Polar Station Map (Summit Station Greenland, Svalbard, Utqiaġvik Alaska, Alert Station, McMurdo Antarctica, Vostok, Dome C) and live ECharts Arctic Sea Ice extent trajectory.\n  - **Hydrosphere Tab Buildout**: Built dual-view interface featuring Leaflet Ocean & Water Basin Map (Pacific Basin, Atlantic AMOC Circulation, Indian Ocean Dipole, Southern Ocean, Amazon, Congo, Ganges-Brahmaputra) and ECharts ocean warming anomaly trend chart.\n  - Integrated live API endpoints from `global-warming.org` (Arctic sea ice & Ocean temperature anomaly) and World Bank Open Data.\n\n- **Anthroposphere Interactive Leaflet Population & Mortality Map Engine ([g-anthroposphere-tab.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue))**:\n  - Integrated Leaflet dark-theme world map engine into Gaea OS Anthroposphere tab matching COMPASS onboarding map design tokens.\n  - Implemented 3 interactive map modes: **Population Tiers**, **Mortality & Conflict**, and **Combined Matrix**.\n  - Structured population scale into 3 distinct visual tiers: **Mega 500M+** (44px), **Large 100M-500M** (28px), and **Standard <100M** (16px).\n  - Restricted continuous keyframe pulsing animation strictly to active crisis/conflict alert markers (`pulse-red`), keeping standard population pins static and clean.\n  - Moved data source attribution ("World Bank Live Open Demographic API & UN HDX") from popup overlay cards into the primary map legend header bar.\n\n## [2026-08-06]\n\n- **Dynamic Spark-Level & PHP Backend Magic Tour Architecture ([useMagicTutor.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/mechanics/useMagicTutor.ts), [bubblegum.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum.tour.ts), [solitaire.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/solitaire/solitaire.tour.ts), [notepad.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/notepad/notepad.tour.ts), [nucleos.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/nucleos/nucleos.tour.ts), [welcome-u.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/welcome-u/welcome-u.tour.ts), [tesseract.tour.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/tesseract/tesseract.tour.ts), [system-tours.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/mechanics/tours/system-tours.ts))**:\n  - Decoupled monolithic step arrays out of `useMagicTutor.ts` into modular, isolated spark tour files (`bubblegum.tour.ts`, `solitaire.tour.ts`, `notepad.tour.ts`, `nucleos.tour.ts`, `welcome-u.tour.ts`, `tesseract.tour.ts`, `system-tours.ts`), reducing `useMagicTutor.ts` from 469 lines down to 130 lines.\n  - Implemented dynamic `tourRegistry` with `registerTour` and `unregisterTour` functions, enabling sparks, controllers, and PHP backend plugin manifests (`compassStore.pluginList`) to serve tour definitions dynamically.\n\n- **Magic Tour Spark Window DOM ID Prop Binding Fix ([u-window.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window.vue))**:\n  - Bound `:id="id"` to the template root `<VueDraggableResizable>` component in `u-window.vue`. Because `id` is a declared prop on `u-window`, Vue swallowed `id="sparkId"` without forwarding it to the DOM HTML element. Binding `:id="id"` ensures spark windows render `#bubblegum`, `#notepad`, `#u-nucleos`, `#welcome-u` in HTML DOM, allowing tour target selectors to resolve immediately.\n  - Expanded Bubblegum spark tour in `useMagicTutor.ts` and `bubblegum-app.vue` to an 8-step deep-dive walkthrough targeting `#bubblegum`, `#nav-item-tasks`, `#nav-item-sandbox`, `#bubblegum-assess-btn`, `#nav-item-timer`, `#bubblegum-timer-chew-btn`, and `#nav-item-elasticity`.\n  - Upgraded Solitaire spark tour in `useMagicTutor.ts` and `solitaire-app.vue` from generic non-targeted cards to an interactive 6-step gameplay tutorial targeting `#solitaire`, `#sol-stock-pile`, `#sol-tableau-container`, `#sol-foundation-container`, and `#sol-action-tools`.\n  - Audited all 10 ecosystem tours in `useMagicTutor.ts` (`bubblegum`, `solitaire`, `u-nucleos`, `notepad`, `welcome-u`, `tesseract`, `cockpit`, `navigation`, `launchpad`, `custom-panels`), ensuring Step 1 window highlight, brand colors (`#ff69b4`, `#ffaa00`, `#4dfa7b`, `#9d4edd`, `#ff4757`, `#62c9ff`), naked icons, and clean content formatting across all steps.\n  - Configured `startTour` in `useMagicTour.ts` to automatically initialize `isPlaying.value = true`, auto-starting playback timer without requiring manual click on play button.\n  - Removed `<v-avatar>` background circle container in `x-magic-tour-tooltip.vue` so spark icons render naked against the step card with brand-tailored color accents (`#ff69b4` pink for Bubblegum, `#ffaa00` gold for Alphabet Soup, `#4dfa7b` green for Welcome-U, `#9d4edd` purple for Tesseract) and neon drop-shadow glow.\n  - Optimized `calculateReadingTime` in `useMagicTour.ts` to strip HTML tags and compute natural human reading pace (~230 WPM, 260ms per word + 1.8s base orientation delay, min 3.2s), ensuring autoplay steps advance at a natural reading speed.\n  - Cleaned up redundant inline End Tour HTML buttons from step content in `useMagicTutor.ts`, allowing the native tooltip card footer controls (`Done ✓` / `Stop ■`) to handle tour endings cleanly.\n  - Assigned corresponding spark app icons (`fal fa-circle`, `fad fa-book-spells`, `fal fa-atom-alt`, `fad fa-hand-spock`, etc.) to all steps across spark tours so the tour guide avatar reflects the current spark app being toured.\n  - Added comprehensive `[MagicTour]` debug logging in `useMagicTour.ts` for step resolution, selector matching, element bounding boxes, and fallbacks.\n  - Updated Step 1 of all spark tours in `useMagicTutor.ts` (`#bubblegum`, `#notepad`, `#u-nucleos`, `#welcome-u`) to highlight the entire spark window on welcome steps.\n  - Updated tooltip positioning in `x-magic-tour-tooltip.vue` to place tooltip cards to the right of the spark window frame (`winRect.right + GAP`), keeping window content clear and un-obscured during sidebar item tours.\n  - Refactored `focusCurrentStep` in `useMagicTour.ts` to decouple `onEnter` step callbacks from target element polling, executing `onEnter` once and awaiting Vue DOM layout settlement before querying element bounds.\n\n- **Magic Tutor Store Imports & Spark Tour Navigation Synchronization ([useMagicTutor.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/mechanics/useMagicTutor.ts), [bubblegum.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [x-card.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-card/x-card.vue), [v-welcome-vision.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/welcome-u/views/v-welcome-vision.vue))**:\n  - Wired `useSparkNav` into `bubblegum.controller.ts` for bi-directional active tab synchronization with `windowStore` `urme` route state.\n  - Implemented `navigateToTab` helper at outer function scope in `useMagicTutor.ts` to update `windowStore` sub-navigation and dispatch mouse click events, ensuring spark views navigate automatically while step spotlight bounding boxes highlight menu items.\n  - Imported `useBubblegumStore` via `../stores/bubblegum.store` in `useMagicTutor.ts` to fix `ReferenceError`.\n  - Updated `x-card.vue` to intercept and map `variant="glass"` to `variant="flat"` for underlying `<v-card>` components, preventing Vuetify prop validation warnings.\n\n## [2026-08-05]\n\n- **My Compass Decentralized AI Connectors & Abilities Architecture ([class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php), [class-xophz-compass-xp-abilities.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/includes/class-xophz-compass-xp-abilities.php), [class-hookshot-bridges.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-hookshot/includes/class-hookshot-bridges.php), [class-xophz-compass-quests-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-quests/includes/class-xophz-compass-quests-rest.php), [compass-connectors-abilities.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/compass/views/compass-matrix/compass-connectors-abilities.vue))**:\n  - Implemented decentralized abilities registration across individual COMPASS feature plugins (`xophz-compass-xp`, `xophz-compass-hookshot`, `xophz-compass-quests`) hooking into `wp_abilities_init` and `compass_abilities_registry`.\n  - Registered `/wp-json/xophz/v1/abilities` REST API endpoint to aggregate registered abilities dynamically for front-end discovery.\n  - Expanded `Xophz_Compass_Connectors` registry definitions with `openrouter` and local Docker `ollama` endpoints while inheriting native WP core connectors (`openai`, `anthropic`, `google`).\n  - Built `compass-connectors-abilities.vue` in My Compass SPA featuring credential management, per-task AI model routing allocations, and plugin abilities explorer without relying on WP Admin.\n  - Integrated direct navigation entrypoints: added top-right quick action header button (`compass-welcome.vue`) and a direct link button inside Step 3 of the setup wizard (`CompassOnboarding.vue`).\n\n- **Hookshot GitHub Release Bridge Non-Destructive Self-Update ([class-hookshot-bridges.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-hookshot/includes/class-hookshot-bridges.php))**:\n  - Implemented dedicated non-destructive self-update routine for `xophz-compass-hookshot` that bypasses WordPress `Plugin_Upgrader` (which internally calls `deactivate_plugins()` and deletes the running directory).\n  - Uses direct `download_url()`, `unzip_file()`, and in-place `copy_dir()` over the active directory so active PHP code files are never deleted or invalidated during execution.\n  - Automatically re-asserts active plugin state in `active_plugins` option to prevent WordPress from auto-deactivating Hookshot during release deployments.\n  - Implemented automatic target directory cleanup before package extraction to prevent collisions with submodules or locked `.git` metadata during updates.\n  - Upgraded error diagnostics to capture and return detailed `WP_Upgrader_Skin` and extraction error messages in webhook response payloads.\n\n- **ForTheXP Theme Build Automation & Git Pre-Commit Hook ([package.json](file:///home/xopher/www/x/Xophz-COMPASS/package.json), [pre-commit.sh](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/themes/forthexp-wp-theme/scripts/pre-commit.sh))**:\n  - Added `build:forthexp` script to root `package.json` and appended it to `prod:build` to ensure `wp-content/themes/forthexp-wp-theme/react` is built into `react-dist` during project compilation.\n  - Implemented git pre-commit hook (`scripts/pre-commit.sh`) in `forthexp-wp-theme` that checks for staged changes in `react/` and automatically compiles and stages updated `react-dist` assets before finalizing git commits.\n\n- **My Compass Media Library Organism Component & Site Icon REST API Persistence ([o-media-library-modal.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/organisms/o-media-library-modal/o-media-library-modal.vue), [class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php), [onboarding.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/onboarding.controller.ts))**:\n  - Implemented `o-media-library-modal.vue`, a reusable glassmorphic media gallery modal for asset management and file uploads via the WordPress REST API (`/wp-json/wp/v2/media`).\n  - Fixed site icon persistence: updated `/wp-json/xophz/v1/site-settings` REST API endpoint to save and resolve both attachment ID (`site_icon`) and fallback URL (`compass_site_icon_url`).\n  - Added instant REST API dispatch when selecting an icon in the onboarding wizard so changes automatically persist upon refresh.\n\n- **WordPress Multisite XP & Currency Isolation ([class-xophz-compass-xp-players.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/admin/class-xophz-compass-xp-players.php), [class-glow-api.php](file:///home/xopher/www/x/Xophz-COMPASS/apps/glowitheflow/wordpress-plugin/includes/class-glow-api.php))**:\n  - Implemented per-site isolation for user XP points, site GP balances (e.g. Driplets on Glowitheflow), rank titles, levels, and custom stats (`_xp_s{blog_id}_*`).\n  - Added legacy fallback for main site (site 1) so existing global player progress is seamlessly preserved.\n  - Added global `get_user_network_stats()` aggregator method and updated REST API `/xp/v1/state`, `/xp/v1/transaction`, `/xp/v1/spend-gp`, and `/xp/v1/simulate-decay` to return both current site stats and network-wide combined summaries.\n\n\n- **COMPASS Onboarding Wizard General Site Settings Restructuring ([class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php), [CompassOnboarding.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/CompassOnboarding.vue), [onboarding.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/onboarding.store.ts), [onboarding.controller.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/onboarding.controller.ts))**:\n  - Fixed pre-population of system options so current WordPress settings (`timezone_string` / `gmt_offset`, `site_language` / `get_locale`, `date_format`, `time_format`, `blogname`, `admin_email`, `users_can_register`, `default_role`) automatically auto-select on mount.\n  - Registered `/wp-json/xophz/v1/site-settings` REST API endpoint returning native WordPress available languages (`wp_get_available_translations`) and native system timezones (`timezone_identifiers_list`).\n  - Integrated an open-source equirectangular vector World Map with animated timezone highlight bands and dynamic pin positioning into Step 1 preview matching Linux OS setup wizards.\n\n- **Dynamic WordPress Connectors REST API & Vue Onboarding Integration ([class-xophz-compass-connectors.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/includes/class-xophz-compass-connectors.php), [CompassOnboarding.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/CompassOnboarding.vue), [onboarding.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/onboarding.store.ts))**:\n  - Registered REST API endpoints `GET/POST /wp-json/xophz/v1/connectors` in WordPress plugin to fetch all registered connectors (Stripe, Anthropic, Akismet, Hookshot, Patreon, Discord, Twilio, Pinata, Google, Wizard key, etc.) and save key settings into WP options.\n  - Refactored Onboarding Step 3 ("API & Connectors") from hardcoded static cards to a dynamic REST-driven list exposing real connector statuses ("CONNECTED" / "NOT CONFIGURED").\n  - Implemented inline connector key editor allowing users to set and update API keys directly within My Compass.\n\n## [2026-08-04]\n\n- **My Compass Setup Wizard ([CompassOnboarding.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/system/onboarding/CompassOnboarding.vue), [onboarding.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/onboarding.store.ts), [router.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/router.ts))**:\n  - Implemented an OS-inspired setup walkthrough wizard ("My Compass Setup Wizard") for new user onboarding and system configuration.\n  - Added multi-step setup checklist for System Branding, Commander Profile, Core Module Selection, WP Connectors API integration, XP/Gamification, and Automated Diagnostics.\n  - Configured router navigation guard to automatically present the setup wizard on first-run launch while keeping it accessible anytime via quick-launch buttons on the Welcome view and top System Bar.\n- **Vuetify Auto-Import Styles Resolution ([yellow-links/vite.config.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/yellow-links/vite.config.ts), [vite.config.js](file:///home/xopher/www/x/Xophz-COMPASS/vite.config.js))**:\n  - Added `styles: \'none\'` to `vite-plugin-vuetify` configuration (`vuetify({ autoImport: true, styles: \'none\' })`).\n  - Prevents Vite from attempting to auto-import non-existent per-component CSS files (e.g. `VChip.css`) which caused `[plugin:vite:import-analysis]` dev server resolution errors. Styles remain provided globally via `import \'vuetify/dist/vuetify.min.css\'`.\n- **Thoth Reader Svelte 5 Dual Runtime Resolution ([vite.config.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/vite.config.ts))**:\n  - Configured `resolve.dedupe: [\'svelte\']` and `optimizeDeps.exclude: [\'lucide-svelte\']` to prevent Vite from pre-bundling duplicate Svelte runtime chunks (`chunk-2FXNHGER` vs `chunk-WRHAMQGH`) which caused `Cannot read properties of undefined (reading \'call\')` errors during DOM effect cleanup.\n- **Thoth Reader Svelte 5 Effect Root Resolution ([savedReadingsState.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/state/savedReadingsState.svelte.ts))**:\n  - Wrapped `$effect` inside `$effect.root` in the `SavedReadingsState` constructor to prevent Svelte 5 `effect_orphan` runtime errors when instantiating singleton state at module level.\n\n### Removed\n- **My Compass Top System Bar Patreon Button ([system-bar.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/constructs/system-bar.vue))**:\n  - Removed the Patreon button (`fab fa-patreon`) from the top system bar (`SystemBar`) actions section.\n\n### Changed\n- **Thoth Reader Build Resolution ([ReadingReport.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/components/ReadingReport.svelte), [FourElementalPilesView.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/components/FourElementalPilesView.svelte))**:\n  - Created missing Svelte 5 organisms [`ElementalCutTracker.svelte`](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/components/organisms/ElementalCutTracker.svelte), [`ElementalCutArena.svelte`](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/components/organisms/ElementalCutArena.svelte), and [`ElementalPilesResultGrid.svelte`](file:///home/xopher/www/x/Xophz-COMPASS/apps/thoth-reader/src/components/organisms/ElementalPilesResultGrid.svelte) required by `FourElementalPilesView.svelte`.\n  - Removed non-existent `./NarrativeSynthesizer.svelte` and `./FullScreenStorybook.svelte` component imports left over from the React-to-Svelte refactor.\n\n- **ForTheXP Theme Tri-Currency Engine Prominence ([CurrenciesGuide.tsx](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/themes/forthexp-wp-theme/react/src/components/CurrenciesGuide.tsx), [Hero.tsx](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/themes/forthexp-wp-theme/react/src/components/Hero.tsx), [App.tsx](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/themes/forthexp-wp-theme/react/src/App.tsx))**:\n  - Moved the Tri-Currency Engine component (`CurrenciesGuide`) directly into the main `Hero` component right below the primary headline and CTA actions so it is highlighted above the fold on initial page load.\n  - Refactored `CurrenciesGuide` container to nest cleanly with responsive padding within the Hero fold.\n\n## [2026-08-03]\n\n### Fixed\n- **COMPASS Plugin Rebranding Synchronization across Ecosystem Applications ([class-xophz-compass-admin.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass/admin/class-xophz-compass-admin.php), [useApps.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/composables/useApps.ts))**:\n  - Updated `get_available_plugins()` REST API endpoint (`/xophz-compass/v1/plugins`) to retrieve and include customized plugin names (`Xophz_Compass_Branding::get_plugin_name()`) and descriptions (`Xophz_Compass_Branding::get_plugin_description()`).\n  - Updated COMPASS Phone `useApps.ts` composable to render `plugin.name` over `plugin.defaultName` for grid apps and dock apps, ensuring custom plugin rebrands update across all ecosystem mobile views.\n\n- **Global Tooltip Styling & Theme Alignment ([_tooltips.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_tooltips.scss), [layout/_index.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/layout/_index.scss))**:\n  - Created global `_tooltips.scss` stylesheet to override default light/un-themed Vuetify tooltip overlay presentation with signature COMPASS dark glassmorphism.\n  - Applied semi-transparent backdrop blur (`rgba(13, 20, 32, 0.85)` + `backdrop-filter: blur(12px)`), cyan glass glow border (`rgba(98, 201, 255, 0.3)`), drop shadow, and crisp light typography (`#f1f5f9`) to `.v-overlay-container .v-tooltip .v-overlay__content`.\n\n- **YouMeOS Splash Page & Webtop Desktop Isolation ([u-desktop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.vue), [u-desktop.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.ts), [u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [useAuth.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useAuth.ts))**:\n  - Added `isWelcomeRoute` computed property in [u-desktop.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.ts) and [u-webtop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/webtop/u-webtop.vue) to detect splash and authentication views (`welcome`, `login`, `register`, `reset`, `support`, and root `/`).\n  - Updated visibility conditionals on desktop HUD and navigation drawer elements ([u-desktop.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/blueprints/desktop/u-desktop.vue)) so that `u-system-bar`, `u-user-rail`, `u-portal-drawer`, `u-portal-app-bar`, `u-account-drawer`, `u-zoom-slider`, and desktop shortcuts are suppressed while on the splash page.\n  - Normalized auth payload extraction in [useAuth.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useAuth.ts) (`setAuthData`) to handle both nested `data.user` and flat response shapes (`user_id`, `id`, `user_email`, `email`), ensuring reactive properties (`user.value.email`, `displayName`) and global settings are updated cleanly on login.\n  - Exported reactive `isAuthenticated` computed property directly from [useAuth.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useAuth.ts) and consumed it in `u-desktop.ts` and `u-webtop.vue` so `u-user-rail` and desktop drawers reactively appear immediately upon successful login.\n\n## [2026-08-02]\n\n### Fixed\n- **Yellow Links WordPress Session Authentication Synchronization (`wp-content/plugins/xophz-compass-yellow-links/`, `apps/yellow-links/src/composables/useAuth.ts`)**:\n  - Registered `/yellow-links/v1/me` REST API endpoint in `class-yellow-links-api.php` returning current WordPress user profile information when logged in.\n  - Injected `currentUser` object into `window.wpApiSettings` via `xophz-compass-yellow-links.php`.\n  - Implemented `checkWpAuth()` in `apps/yellow-links/src/composables/useAuth.ts` to automatically detect active WordPress sessions (via `window.wpApiSettings`, parent window `xophzCompassSettings`, or `/yellow-links/v1/me`) so logged in WordPress users do not see "SIGN IN / REGISTER".\n- **Spark Plugs "Read Docs" Navigation to Specific Spark Page ([spark-plugs-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue), [enchiridion-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/enchiridion/enchiridion-app.vue), [u-window-shell.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**:\n  - Updated the "Read Docs" button action in [spark-plugs-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue) to persist target spark ID to `sessionStorage` before launching Enchiridion.\n  - Enhanced document query resolution in [enchiridion-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/enchiridion/enchiridion-app.vue) with `findMatchingDoc` to map raw spark IDs (e.g., `xophz-magic-formula`), title strings, and cleaned names to their target markdown files.\n  - Added auto-syncing of `navStack` in [u-window-shell.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/components/constructs/u-window/u-window-shell.vue) by watching `[() => props.activeNav, flattenedLeaves]` with `{ immediate: true }`, ensuring the side drawer automatically drills into the target spark category and highlights the active document even when documents or navigation items are lazily loaded.\n- **Spark Plugs Store Top Bar Search Width ([spark-plugs-app.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue))**:\n  - Fixed search input shrinking bug in top bar toolbar by setting explicit minimum width (`style="min-width: 220px; width: 280px"`) and adding `flex-shrink-0` to adjacent toolbar actions so search queries are easy to type and read.\n- **Magic Tour Highlight Alignment & Real-Time Target Tracking (`src/mechanics/useMagicTour.ts`, `apps/youmeos/mechanics/useMagicTutor.ts`)**:\n  - Implemented continuous `requestAnimationFrame` position tracking in [useMagicTour.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useMagicTour.ts) so target spotlight bounding boxes (`targetRect`) continuously update in real-time during CSS transitions, Vuetify `v-list-group` animations, and window/layout movements.\n  - Added list group expansion checks in [useMagicTutor.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/mechanics/useMagicTutor.ts) to prevent tour step triggers from accidentally toggling open accordion tracks closed when navigating between steps.\n- **Tesseract Spark Pricing Table Spacing (`apps/youmeos/app/sparks/tesseract/tesseract-app.vue`, `t-spark-splash-tier.vue`, `x-spark-splash-action.vue`)**:\n  - Expanded default Tesseract `u-window` width from `1000px` to `1150px`.\n  - Passed `:full-width="true"` from `t-spark-splash-tier.vue` to `t-spark-splash.vue` to unclamp the constrained 600px action slot width.\n  - Removed `max-width` bottlenecks on the features container to grant 100% full width layout (`w-100 px-4 sm:px-8`).\n  - Applied `text-no-wrap` on feature titles and list items so tier bullets (e.g., "YouMeOS - PWA Mini-verse", "XP API - Gamification System") fit cleanly on single lines across all columns.\n- **Nucleos Spark Output Device Select & `x-select` Primitive (`src/components/primitives/x-select`)**:\n  - Fixed issue where the audio output device dropdown displayed `[object Object]` instead of output titles.\n  - Replaced hardcoded `item-title="text"` on `x-select` with a resolver (`defaultItemTitle`) that dynamically resolves `title`, `text`, `label`, or `name` properties on item objects when an explicit `item-title` is not passed.\n\n### Changed\n- **Yellow Links Spark Window Sidebar Navigation (`apps/youmeos/app/sparks/yellow-links/yellow-links-app.vue`)**:\n  - Removed `nav-items` sidebar navigation array (`Directory Index`, `Submit a Link`) and `default-nav-pinned` from `u-window`.\n  - Hidden the left navigation rail so the main frame expands to full window width.\n\n### Added\n- **YouMeOS Universal OS Vision & Architecture Documentation (`docs/youmeos/Universal-OS-Vision.md`)**:\n  - Created comprehensive vision document outlining the micro-level (Sovereign Individual) and macro-level (Global Noosphere / Institutional Modernization) features, benefits, and architectural transformation roadmap.\n- **My Compass Phone Companion Plugin Icon (`wp-content/plugins/xophz-compass-phone/icon.svg`)**:\n  - Created standalone 512x512 vector SVG icon for the `xophz-compass-phone` WordPress plugin following the COMPASS Zelda/artifact design language.\n  - Aligned canvas radius (`r=256`) and object scale for exact visual uniformity with existing COMPASS dashboard card icons (`Magic Formulas`, `My Compass`, `You Me OS`).\n- **Yellow Links Companion Plugin Icon (`wp-content/plugins/xophz-compass-yellow-links/icon.svg`)**:\n  - Created standalone 512x512 vector SVG icon for the `xophz-compass-yellow-links` WordPress plugin following the COMPASS Zelda/artifact design language.\n  - Aligned canvas radius (`r=256`) and object scale for exact visual uniformity with existing COMPASS dashboard card icons (`Magic Formulas`, `My Compass`, `You Me OS`).\n\n## [2026-08-01]\n\n### Fixed\n- **YouMeOS Welcome Spark Logo & Subtitle Responsive Scaling (`apps/youmeos`)**:\n  - Replaced viewport-relative sizing (`vw`) with CSS Container Query inline width units (`cqw`) across `_branding.scss` and `o-youmeos-logo.vue`.\n  - Added `.brand-lockup-container` wrapper to establish container query context (`container-type: inline-size`).\n  - Added fluid container-query scaling for `welcome-subtitle` text inside `v-welcome-splash.vue` so the logo (`YouMeOS`) and header text ("Welcome to the Omega Source") dynamically shrink and always fit cleanly inside `u-window` without horizontal overflow.\n\n## [2026-07-30]\n\n### Changed\n- **Yellow Links UI/UX & Spacing Overhaul (`apps/yellow-links`)**:\n  - Overhauled layout grid, margins, padding, and visual hierarchy across all components (`App.vue`, `Header.vue`, `LeftSidebar.vue`, `RightSidebar.vue`, `LinkList.vue`, `LinkRow.vue`, `Footer.vue`, `SubmitLinkModal.vue`, `SubmitAdModal.vue`, `SafetyBadge.vue`, `index.css`).\n  - Expanded Directory Index link row spacing (`py-6 px-6 sm:px-8 gap-6`), added clear visual breaks between reference info and description, and upgraded metric columns with scannable pill badges.\n  - Restructured expanded Link Drawer into spacious, modular content cards (`space-y-8 p-8`), adding distinct contrast zones for submitter metadata, action buttons, security audit status, and community moderation logs.\n  - Eliminated negative-margin category ribbon overflow in LeftSidebar, upgrading index navigation to clean elevated cards (`px-4 py-3 space-y-2.5`) with semi-transparent yellow accent hover states (`hover:bg-[#FFCC00]/40 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.6)] hover:translate-x-0.5`).\n  - Enhanced search toolbar, sort buttons, modal overlays (`max-w-2xl p-8 sm:p-10 space-y-6`), and global scrollbars/elevation shadows.\n\n### Fixed\n- **Vuetify Styles Import Resolution (`src/core/vuetify.ts`, `apps/yellow-links`, `apps/my-compass-phone`)**:\n  - Replaced ambiguous `import "vuetify/styles"` with explicit direct stylesheet path `import "vuetify/dist/vuetify.min.css"` to prevent Vite import-analysis failure in dev server bundler environments.\n\n- **Yellow Links Spark Integration in YoumeOS (`apps/youmeos`, `src/stores/launcher.store.ts`, `src/config/feature-flags.ts`)**:\n  - Registered `yellow-links` feature flag in `src/config/feature-flags.ts`.\n  - Added `yellow-links` spark to `fullRegistry` in `apps/youmeos/app/index.ts` enabling async component loading of `yellow-links-app.vue`.\n  - Registered `Yellow Links` in `useLauncherStore` (`src/stores/launcher.store.ts`) under the Productivity category (`#FFCC00`, `fal fa-book-open`), making it immediately discoverable and launchable from the YoumeOS Launch Pad, Webtop, and Spark Plugs.\n\n- **Yellow Links Vue 3 + Vuetify Migration (`apps/yellow-links`)**:\n  - Completely rewrote Yellow Links sub-app from React (`React 19`, `@vitejs/plugin-react`, `lucide-react`) to Vue 3 (`vue`, `@vitejs/plugin-vue`, `vuetify`, `vite-plugin-vuetify`, `lucide-vue-next`).\n  - Implemented Vue 3 Composition API reactive store `useYellowLinks` for links, bulletins, search query, categories, sorting, modal states, and LocalStorage persistence.\n  - Rebuilt all UI components (`Header.vue`, `Footer.vue`, `LeftSidebar.vue`, `RightSidebar.vue`, `LinkList.vue`, `LinkRow.vue`, `SafetyBadge.vue`, `SubmitLinkModal.vue`, `SubmitAdModal.vue`) to achieve pixel-perfect visual and functional parity.\n  - Updated `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `main.ts`, and WordPress companion plugin `wp-content/plugins/xophz-compass-yellow-links/xophz-compass-yellow-links.php`.\n\n- **YouMeOS Dev Server Port & Connectivity Resolution (`wp-content/plugins/xophz-compass-event-horizon`)**:\n  - Replaced hardcoded `localhost:9000` URLs with dynamic `get_dev_server_url()` method resolving to port `8081` (or `VITE_DEV_SERVER_PORT`).\n  - Added active `check_dev_server()` ping check to automatically fallback to production `public/dist/` bundle when Vite dev server is not running, preventing `ERR_CONNECTION_REFUSED` errors.\n\n### Changed\n- **Thoth Reader 78-Card Physical Deck Cutting Engine (`apps/thoth-reader`)**:\n  - Upgraded `FourElementalPilesView` with realistic 78-card physical 3D deck thickness layers, gold-gilded side rim textures, and card count indicators.\n  - Implemented an interactive laser slicing beam effect and 3D stack lift physics (`z: 90px`, `rotateX: -12deg`, `rotateY: -16deg`), visually separating the top cut stack from the bottom stack along the cut plane.\n  - Enhanced the 4 elemental books view with card-count-proportional physical stack depth rims and gold foil edge detailing.\n- **Thoth Reader 3D WebGL Card Shuffling Engine (`apps/thoth-reader`)**:\n  - Rebuilt `DeckShuffleVisual` with `three` (Three.js WebGL 3D rendering pipeline), eliminating all DOM slice graininess, seam artifacts, and CSS 3D context flattening bugs.\n  - Implemented real 3D 24-segment plane mesh vertex deformation (`PlaneGeometry(2.2, 3.4, 24, 24)`), bending cards into smooth, continuous parabolic 3D Bezier bridge curves in GPU space.\n  - Rendered 32 individual card meshes with hardware-accelerated lerp physics for dealer split, 15% short-edge tip interlace, mid-air convex bridge arching, and bottom-first waterfall cascade release.\n  - Maintained 180-degree tarot card reversal orientation tracking and responsive WebGL camera & viewport management.\n\n### Added\n- **Thoth Reader Workspace Integration (`apps/thoth-reader`)**:\n  - Integrated `thoth-reader` into the Docker Compose setup as part of the `808x` port matrix on port `8089`.\n  - Configured workspace scripts (`build:thoth-reader`, `dev:thoth-reader`) in `package.json` and added `START_THOTH_READER` configuration toggles to `docker-compose.yml`, `docker/compass-node/start.sh`, and `.env.example`.\n- **WordPress Companion Plugin (`wp-content/plugins/xophz-thoth-reader`)**:\n  - Created `xophz-thoth-reader` WordPress plugin with custom slug routing (`/thoth-reader`), development mode Vite hot-reloading proxying (`http://compass:8089`), and production build asset rendering (`public/dist/index.html`).\n  - Added REST API routes under `thoth-reader/v1` (`/health`, `/readings/save`, `/readings/:id`, `/reading/interpret`, `/reading/synthesize-narrative`) powered by `Thoth_Reader_API`.\n\n## [2026-07-29]\n\n### Changed\n- **Standardized Dev Server Port Matrix (808x Series)**:\n  - Reorganized all ecosystem app dev servers into a clean, sequential `808x` port series:\n    - `8080`: Main Admin App (`xophz-compass`)\n    - `8081`: YouMeOS Public App (`youmeos`)\n    - `8082`: My Compass Phone App (`apps/my-compass-phone`)\n    - `8083`: Dodo Air App (`apps/dodo-air`)\n    - `8084`: Kitchen Synk App (`apps/kitchen-synk`)\n    - `8085`: Nook Phone App (`apps/nook-phone`)\n    - `8086`: Chatter App (`apps/chatter` / Radio Tower)\n    - `8087`: Glowitheflow App (`apps/glowitheflow`)\n    - `8088`: Yellow Links App (`apps/yellow-links`)\n  - Fixed pnpm workspace discovery (`pnpm-workspace.yaml`) by expanding package globs to `"apps/*"`.\n  - Updated `docker-compose.yml`, `docker/compass-node/start.sh`, `.env`, `.env.example`, Vite configs, and WordPress plugin proxy handlers (`xophz-kitchen-synk`, `xophz-compass-yellow-links`, `xophz-compass-phone`, `xophz-nook-phone`, `super-nerd-bros-dodo-air`).\n\n### Added\n- **Hookshot Admin Email Notifications (`class-hookshot-notifier.php`)**:\n  - Created an automated email notification system (`Hookshot_Notifier`) that immediately alerts the site owner (`admin_email`) via `wp_mail()` whenever webhooks fail, enter the dead-letter queue, or experience degraded health. Includes transient throttling (15–30 min) to prevent inbox flooding.\n- **Hookshot Plugin Documentation (`wp-content/plugins/xophz-compass-hookshot/README.md`)**:\n  - Authored a comprehensive `README.md` with Shield.io status badges, architectural overview, incoming/outgoing webhooks breakdown, authentication/signature verification details, automated bridges directory, JSONPath transformation rules, retry engine details, REST API route catalog, and developer action/filter hooks.\n\n### Fixed\n- **Hookshot Production ZIP Release Updating & Execution Reporting (`class-hookshot-bridges.php`, `class-xophz-compass-hookshot-rest.php`, `class-hookshot-rest-dashboard.php`)**:\n  - Removed all `git` / `.git` checks; production plugin deployments rely strictly on WordPress `Plugin_Upgrader` installing the release `.zip` asset.\n  - Fixed Amazon S3 400 error on private GitHub release asset redirects by dynamically stripping the `Authorization` header when `http_request_args` follows redirects to `objects.githubusercontent.com`.\n  - Added automatic fallback discovery for GitHub tokens (`GITHUB_TOKEN` constant or `xophz_compass_bugnet_github_token` option) for downloading private release assets.\n  - Implemented detailed bridge execution reporting (`status` and `details` messages) passed directly into webhook log metadata (`wh_log_bridge_results`) and returned in the HTTP REST API response body (`"bridges": { ... }`).\n\n### Changed\n- **My Compass Presentation Speed & Copy Refinement (`apps/my-compass-phone`)**:\n  - **Balanced Typewriter Animation (`DesktopPresentationPanel.vue`)**: Adjusted typewriter timing to a smooth middle ground (headers at 12ms delay, body text at 18ms delay, section pauses at 80ms, punctuation delay at 50ms).\n  - **Elevated "Shoulders of Giants" Copy (`usePresentation.ts`)**: Refined slide text to emphasize open-source security, platform stability, and infrastructure control without repeating SaaS cost/fragmentation messaging or using em dashes.\n  - **Design-Focused "UI Kit / Template" Copy (`usePresentation.ts`)**: Shifted messaging from dev stack jargon to spotlighting design aesthetic, glassmorphic layouts, and customizable interface templates.\n  - **Default Hero CTA Deck for Pricing Slide (`DesktopPresentationPanel.vue`)**: Removed the redundant custom pricing slide CTA block so the Pricing slide seamlessly uses the standard `$100 / mo INSTANT ACCESS` hero action deck.\n  - **Modular UI Kit Architecture (`src/ui-kit/`)**: Created standalone `ui-kit/` library package containing `GlassCard`, `GlassBtn`, `BadgePill`, `TypewriterText`, `PhoneFrame`, and `useTypewriter` composable for commercial UI kit packaging and preview composition.\n\n## [2026-07-26]\n\n### Added\n- **Noosphere Observer Interface & Cafeteria Forum Backend (`class-xophz-compass-cafeteria-cpt.php`, `useForumEngine.ts`, `NoosphereForums.vue`, `x-cafeteria-board-index.vue`)**:\n  - **WordPress CPT & Taxonomy Backend (`class-xophz-compass-cafeteria-cpt.php`)**: Registered custom post type `cafeteria_topic` and custom taxonomy `cafeteria_board` with full REST API support (`/wp-json/wp/v2/cafeteria_topic` and `/wp-json/wp/v2/cafeteria_board`), comments support, and custom term meta (`board_icon`, `board_order`).\n  - **Default Seed Engine**: Automatically seeds top-level parent category `noo` (*Noosphere*) and default Spheres (`u/noo/COMPASS`, `u/noo/Aesthetics`, `u/noo/General`).\n  - **Sphere Subscriptions API**: Added REST endpoint `/wp-json/xophz-compass/v1/subscriptions` and user meta persistence (`_xophz_subscribed_spheres`) for subscribing/unsubscribing to Spheres.\n  - **Observer Interface Overhaul (`NoosphereForums.vue`)**: Wired `NoosphereForums.vue` directly to the `cafeteria_board` taxonomy under parent category `noo/`. Enabled creating new Spheres under `noo/`, subscribing to Spheres with visual indicators, broadcasting `cafeteria_topic` posts, and replying to topics with comments.\n  - **Cafeteria Food Integration (`o-forum-window.vue`, `x-cafeteria-board-index.vue`)**: Enhanced Cafeteria Food board index with subscription status badges and 1-click subscription toggling for subscribed channels/spheres across sparks.\n\n### Fixed\n- **Forum Engine Import Path (`NoosphereForums.vue`)**: Corrected import of `useForumEngine` from `@/mechanics/useForumEngine` to `@umeos/mechanics/useForumEngine`.\n\n### Changed\n- **Noosphere Vortex → Global Sovereign Portal (`NoosphereVortex.vue`, `useVortexMetrics.ts`)**:\n  - Completely reimagined the Vortex from a telemetry dashboard to a **Sovereign Portal** — a futuristic global identity page synthesizing the user\'s entire digital presence across Helios, Nexus, and Noosphere.\n  - **State Engine (`useOmegaSource.ts`, `useVortexMetrics.ts`)**: Refactored `mission`, `stance`, and `emission` reactive refs to module-level singletons in `useOmegaSource.ts` with explicit `localStorage` caching (`youmeos:helios:mission`, `youmeos:nexus:stance`, `youmeos:noosphere:emission`), ensuring real-time state synchronization across all components.\n  - **Portal UI (`NoosphereVortex.vue`)**: 7-section immersive layout:\n    1. Sovereign Identity Hero (avatar, display name, bio, social links, scanline animation)\n    2. Triptych Sigmatures (Helios/Nexus/Noosphere prose declaration cards with 1-click **Edit Sigmature** navigation back to respective spark edit views)\n    3. Sovereign Projects Matrix (Helios flagships with tech stack chips and demo/repo links)\n    4. Mastery Constellation (skill progress bars with neon glow)\n    5. Timeline Odyssey (vertical timeline with glowing dot nodes)\n    6. Resonance & Influences (influence cards with category chips)\n    7. Identity Markers (global tags cloud)\n\n### Added\n- **Noosphere Vortex Telemetry & Live Multi-Source Link/Project Hub (`apps/youmeos/routes/noosphere/`)**:\n  - **Live Helios & Nexus Data Aggregation (`useVortexMetrics.ts`)**: Replaced all static/mock data with a multi-source aggregator pulling real user flagship projects from Helios Drive (`youmeos:helios:projects`), profile/social matrix links from Helios Comms (`youmeos:helios:communication`), and services from Helios Wallet.\n  - **Custom Link & Project Submission Modal (`NoosphereVortex.vue`)**: Built an in-app submission modal (`x-dialog`) allowing users to submit custom portfolio links, repositories, and profile URLs directly into the Vortex telemetry hub with real-time state persistence.\n  - **Dynamic ECharts Energy Density Matrix (`noosphere-overview-chart.vue`)**: Connected the circle packing node matrix directly to live user project items and profile links, sizing nodes dynamically by click volume and resonance.\n  - **Zero-Bloat WP Native Metrics & Profile Sync (`NoosphereProfile.vue`)**: Integrated live Vortex telemetry cards into Noosphere Profile and synced click counts / ratings via WP REST API (`/wp-json/xophz-compass/v1/vortex-metrics`) and `localStorage`.\n- **Container-Aware Mobile Size Detection for `u-window` (`apps/youmeos/components/constructs/u-window/`)**:\n  - Upgraded `u-window.vue` and `u-window-shell.vue` with `ResizeObserver` container width detection (`containerWidth < mobileBreakpoint`), allowing windows to automatically detect when their inner content/container is mobile size (default: < 600px width) regardless of global browser viewport width.\n  - Dynamically binds `.u-window--mobile` and `.u-window-wrapper--mobile` CSS selectors to enable responsive CSS overrides.\n  - Injected `uWindowMobile` context into `u-window-bar.vue` and `o-rail-header.vue` so window titlebars, action buttons, and navigation rails automatically switch to mobile drawer/toolbar mode when resized below the mobile threshold.\n- **Helios Celestial Spheres Self-Awareness & Self-Promotion Engine Buildout (`apps/youmeos/routes/helios/`)**:\n  - **Sol / Core ("I Am" - `HeliosStellarCommand.vue`)**: Added Public Digital Identity Badge preview card with a 1-click **Export Identity Badge** JSON payload copy feature.\n  - **Luna / Reflection ("Light & Shadow" - `HeliosVault.vue`)**: Built out full interactive journaling workspace under the *Light* tab supporting entry creation, category tagging (*Dream*, *Shadow Work*, *Insight*, *Breakthrough*), public profile showcase toggle, search filtering, and category selection.\n  - **Mercury / Comms ("Voice & Vibration" - `HeliosCommunication.vue`)**: Added a 1-click Public Social & Outreach Matrix (GitHub, LinkedIn, X, YouTube, Portfolio, Substack, Calendly, Public Email) and Public Availability Status & Guidelines badge ("How to reach me").\n  - **Venus / Taste ("Heart & Tempo" - `HeliosHeart.vue`)**: Added Curated Aesthetic Taste & Influences Showcase for featuring influential books, artistic mentors, and design philosophies with persistence.\n  - **Mars / Willpower ("Drive & Dance" - `HeliosDrive.vue`)**: Upgraded Daily Kinetic Endeavors with interactive streak tracking, dynamic Drive Score recalculation, and a Flagship Projects Showcase for featuring live portfolio builds (demo links, repo URLs, tech stack tags).\n  - **Jupiter / Worth ("Worth & Fortune" - `HeliosWallet.vue`)**: Built out Core Skills Matrix & Mastery Tree with proficiency ratings alongside a Services & Rate Card Catalog for self-promotion.\n  - **Saturn / Rhythm ("Time & Rhythm" - `HeliosIdentity.vue`)**: Added Living Resume & Milestone Timeline allowing users to showcase career eras, key role achievements, and pivotal history over time.\n- **Sunburst User Stat Wheel Overhaul (`apps/youmeos/components/organisms/o-helios-sunburst.vue` & `apps/youmeos/mechanics/godhead-categories.ts`)**:\n  - Restored and modernized the **User Life Stat Wheel** using accessible, modern domain titles paired with classic icons (`👑 Sovereignty`, `🏛️ Mastery`, `♊ Synergy`, `🛡️ Drive`, `🦁 Radiance`, `🕯️ Focus`, `⚖️ Balance`, `🦂 Transmutation`, `🏹 Alchemy`, `⛰️ Ambition`, `⚡ Innovation`, `🌊 Intuition`).\n  - Added high-contrast dark text borders (`textBorderColor: "#000000"`, `textBorderWidth: 2.5`) and radial centered alignment (`rotate: "radial"`), delivering sharp, high-contrast, crystal-clear label legibility against dark background slices.\n  - Hid text on the 72 micro outer skill slices (`show: false` on Level 5) to prevent squishing and overlap, maintaining a crisp visual wheel while allowing instant hover & click inspection in the Stat Inspector HUD.\n  - Added descriptive explanation subtext under `I - The Sunburst Chart` in [HeliosStellarCommand.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/youmeos/routes/helios/HeliosStellarCommand.vue): *"Your complete life stat matrix — tracking experience, skills, and archetypal progression across physical, mental, creative, and spiritual domains."*\n\n## [2026-07-25]\n\n### Added\n- **1-Month Free Dual Referral Marketing Program (`apps/kitchen-synk` & `wp-content/plugins/xophz-kitchen-synk`)**:\n  - **REST Referral Endpoint & Unique Code Generation**: Added `get_or_create_user_referral_code`, `process_referral_reward`, and `GET /kitchen-synk/v1/referral` REST endpoint in [trait-kitchen-synk-api-auth.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/traits/trait-kitchen-synk-api-auth.php) and registered in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php).\n  - **Dual 1-Month Pro Chef Access Granting**: Updated `rest_register_and_checkout` to parse `ref_code`. When a user registers via a referral link, both the newcomer and the referrer are awarded 1 month (30 days) of free Pro Chef access (referrers can stack multiple referrals to extend free subscription duration).\n  - **Referral Tracking & Incognito Persistence**: Added `?ref=` and `#/?ref=` URL parameter capture on boot in [App.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/App.svelte) and saved to `localStorage` across registration/verification.\n  - **Dedicated Referral Modal (`ReferralModal.svelte`)**: Created [ReferralModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/ReferralModal.svelte) with glassmorphic styling, copyable referral links, native Web Share API integration (`navigator.share`), and referral stats dashboard (Friends Invited, Free Months Earned).\n  - **Onboarding Banner & Navigation Integration**: Added an invitation banner to [AuthModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/AuthModal.svelte) for invited newcomers and added "Refer Friends" buttons to [Navbar.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/Navbar.svelte) and [LandingView.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/views/LandingView.svelte).\n- **Reusable SearchInput Atom (`apps/kitchen-synk`)**:\n  - Extracted the raw search inputs from `RecipesView.svelte` and `ViewHeader.svelte` into a reusable [SearchInput.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/atoms/SearchInput.svelte) component.\n  - Improved search placeholder text visibility on translucent/glassmorphic headers using high-contrast `placeholder-white/80` (closer to white).\n\n### Changed\n- **Kitchen Synk Recipe DIY Card & Bottom Sheet Ribbon Styling (`apps/kitchen-synk`)**:\n  - Swapped the top-left bookmark ribbon stamp to the top-right corner and the checkmark/cooked stamp to the top-left corner on recipe cards in [DIYRecipeCard.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/molecules/DIYRecipeCard.svelte).\n  - Updated the bottom sheet bookmark ribbon in [RecipesView.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/views/RecipesView.svelte) to a wide (100px x 48px), iconless, flat golden-yellow (`#eab308`) 3D folded ribbon with offset (`right: 32px`).\n- **Kitchen Synk Barcode Scanner Auto-Camera Startup (`apps/kitchen-synk`)**:\n  - Updated [ScannerView.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/views/ScannerView.svelte) so the live camera scanner view opens automatically on page load/mount without requiring the user to click the "SCAN BARCODE" button.\n  - Centered the "Connected to Open Food Facts Global Registry" status indicator and removed the paragraph subtext under the category bar.\n  - Automatically re-activates camera scanning when switching back to the "Global Barcode Database Scan" tab or when dismissing lookup result cards.\n  - Retained manual fallback options and error handlers if camera permissions are unavailable.\n\n## [2026-07-24]\n\n### Added\n- **Kitchen Synk Post-Stripe Checkout Auto-Login & Username Selection (`apps/kitchen-synk` & `wp-content/plugins/xophz-kitchen-synk`)**:\n  - **Auto-Login Rehydration**: Updated `verifyCheckoutSession` in [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) and `rest_verify_checkout_session` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php) to automatically log returning users in and rehydrate their active session.\n  - **Username Selection Modal (`UsernameSelectionModal.svelte`)**: Created [UsernameSelectionModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/UsernameSelectionModal.svelte) mounted in [App.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/App.svelte) allowing post-checkout users to choose a custom username or assign a random culinary username with 1 click.\n  - **Username Immutability Notice**: Added clear, prominent amber/rose notice: **"⚠️ Note: You cannot change your username later."**\n  - **REST Endpoint & Persistence**: Added `POST /kitchen-synk/v1/update-username` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php) and `confirmPostCheckoutUsername()` in [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) to update WordPress display names and sync state.\n  - **Empirical Unit Tests**: Added unit tests in [stripe-checkout-empirical.test.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/__tests__/stripe-checkout-empirical.test.ts) validating auto-login, username randomization, immutability notice rendering, and store persistence.\n\n## [2026-07-23]\n\n### Added\n- **Kitchen Synk Stripe Checkout Flow Finalization (`wp-content/plugins/xophz-kitchen-synk` & `apps/kitchen-synk`)**: Finalized end-to-end Stripe checkout flow for creating and upgrading accounts.\n  - **Dynamic Mode & Price IDs**: Updated `create_stripe_checkout_session` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php) to map `subscription` mode for `individual` and `family` tiers and `payment` mode for `lifetime` tier. Updated price IDs across [AuthModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/AuthModal.svelte) and [PricingModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/PricingModal.svelte) to price-agnostic IDs (`price_KS_INDIVIDUAL`, `price_KS_FAMILY`, `price_KS_LIFETIME`).\n  - **Checkout Return Handler & Feedback Banners**: Added `checkCheckoutReturnState()` in [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) and return banners in [App.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/App.svelte) to auto-detect checkout return status (`session_id`, `status=success`, `status=cancelled`), refresh license status, and present notification feedback.\n  - **Direct Instant Stripe Checkout & Auto Account Creation**:\n    - **Instant Guest Checkout**: Updated [PricingModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/PricingModal.svelte) so clicking any plan immediately launches Stripe Checkout for both guests and logged-in users, eliminating pre-checkout modal friction.\n    - **Guest Checkout REST Support**: Updated `/checkout/session` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php) to allow guest requests and prompt Stripe for customer email collection.\n    - **Webhook & Session Auto-Provisioning**: Updated `rest_stripe_webhook` and added `POST /kitchen-synk/v1/checkout/verify` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php). Automatically provisions WordPress accounts from Stripe customer emails, assigns user tier metadata, generates golden license keys, and logs returning users directly into their newly created/upgraded account upon payment completion.\n  - **2-Step OTP Account Registration & Auto-Selected Tier**:\n    - **Clean 2-Step Registration**: Refactored [AuthModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/AuthModal.svelte) into a 2-step flow. Step 1 takes only **Email Address** & tier selection (removing password/username clutter). Step 2 prompts for 6-digit **OTP code** and pre-fills an auto-suggested username generated from the email prefix (which users can edit if desired).\n    - **OTP REST Endpoints**: Added `POST /kitchen-synk/v1/send-otp` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/includes/class-kitchen-synk-api.php) generating 15-minute 6-digit transients and dispatching verification emails via `wp_mail()`. Updated `POST /kitchen-synk/v1/register-and-checkout` to verify OTP codes before account creation.\n    - **Auto-Selected Modal State**: Added `openAuthModal(tab, tier)` in [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) and connected [PricingModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/PricingModal.svelte). Clicking upgrade plans while logged out automatically opens `AuthModal` with **"Create Account"** active and the selected **Tier** pre-selected.\n\n- **Kitchen Synk Native WP User Integration (`wp-content/plugins/xophz-kitchen-synk` & `apps/kitchen-synk`)**: Integrated native WordPress user accounts and user state synchronization into Kitchen Synk.\n  - **WordPress Global State Injection**: Updated `template_redirect` in [xophz-kitchen-synk.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/xophz-kitchen-synk.php) to inject `wpUser` payload (`isLoggedIn`, `id`, `name`, `login`, `email`, `avatar`, `roles`, `loginUrl`, `logoutUrl`) into `window.wpApiSettings`.\n  - **REST API User Endpoints**: Added `GET /kitchen-synk/v1/me` and `POST /kitchen-synk/v1/profile` endpoints in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/class-kitchen-synk-api.php) to fetch current WP user info and sync user health/dietary profile data stored in `ks_user_profile` WP user meta.\n  - **Svelte Store User Integration**: Updated [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) and [types.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/types.ts) to populate user state from `window.wpApiSettings.wpUser`, default current user to active WP user display name, and auto-sync health profile updates with the WordPress REST API.\n  - **SPA Contained Authentication & Modal (`AuthModal.svelte`)**: Replaced external WordPress redirects with an in-app SPA modal [AuthModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/AuthModal.svelte).\n    - **UI Buttons**: Renamed "WP Login" buttons to **"Login"** across [Navbar.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/components/organisms/Navbar.svelte).\n    - **REST Auth Endpoints**: Added `POST /kitchen-synk/v1/login`, `POST /kitchen-synk/v1/logout`, and `POST /kitchen-synk/v1/register` in [class-kitchen-synk-api.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/class-kitchen-synk-api.php) allowing users to log in or register directly within the app without ever leaving or redirecting away from the SPA.\n    - **Store Auth Methods**: Implemented `loginUser()`, `registerUser()`, and `logoutUser()` in [userProfile.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/src/lib/stores/userProfile.svelte.ts) handling REST cookies & nonces seamlessly.\n\n### Changed\n- **Kitchen Synk WordPress Plugin Settings & Homepage Mode (`wp-content/plugins/xophz-kitchen-synk`)**: Upgraded WordPress plugin options and router in [xophz-kitchen-synk.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/xophz-kitchen-synk.php) to support setting Kitchen Synk as the site homepage or on target pages, matching the pattern established in Event Horizon (`xophz-compass-event-horizon`).\n  - **Load Mode Configuration**: Added `xophz_kitchen_synk_load_mode` setting supporting `custom_slug` (default: `/kitchen-synk`), `homepage` (replaces root site front page `/`), and `specific_page` (replaces selected WP page).\n  - **WP Admin Settings UI**: Redesigned WP Admin Settings page under **Settings > Kitchen Synk** with interactive load mode options, target page dropdown (`wp_dropdown_pages`), and system integration badges.\n  - **Admin Bar Quick Links**: Added WordPress Admin Bar integration (`add_admin_bar_button`) with quick links to Inventory, AI Recipes, Barcode Scanner, Grocery List, and WP Settings.\n  - **Public Routing & 404 Interceptor**: Enhanced `template_redirect` and `is_configured_page` to intercept root requests and SPA sub-routes when mounted in Homepage or Target Page mode.\n  - **Documentation**: Updated [README.md](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/README.md) with details on new settings, load modes, and administration options.\n\n## [2026-07-22]\n\n### Fixed\n- **KitchenSynk Styling & Asset Proxy Resolution (`wp-content/plugins/xophz-kitchen-synk`)**: Resolved unstyled page rendering for `mycompass/kitchen-synk/`.\n  - **Asset Proxy Script Stripping**: Updated [xophz-kitchen-synk.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/xophz-kitchen-synk.php) to serve static `.css` and `.js` asset requests cleanly with accurate `Content-Type` headers without prepending HTML `<script>` tags.\n  - **Canonical Redirect Exemption**: Added a `redirect_canonical` filter to prevent WordPress from appending trailing slashes to Next.js static asset URLs (e.g. `/layout.css` -> 301 `/layout.css/`).\n  - **Production Static Dist Build**: Configured Next.js static export (`output: \'export\'`) in [next.config.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/next.config.ts), automated copying `out/*` to `wp-content/plugins/xophz-kitchen-synk/public/dist/` in [package.json](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/package.json), and updated [xophz-kitchen-synk.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/xophz-kitchen-synk.php) to serve `public/dist/index.html` and assets in production mode matching `xophz-compass-phone` and `xophz-compass-yellow-links`.\n\n### Changed\n- **KitchenSynk WordPress Plugin README Update (`wp-content/plugins/xophz-kitchen-synk`)**: Created full technical documentation in [README.md](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk/README.md) covering deployment slug configuration, dev/prod proxy routing, REST API injection, and standalone static asset hosting.\n- **KitchenSynk Modular CSS Architecture (`apps/kitchen-synk`)**: Extracted inline component styles, glass cards, buttons, badges, inputs, floating dock navigation, and modal backdrop/container patterns into reusable, modular CSS files.\n  - **Tokens & Components Stylesheets**: Created [tokens.css](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/app/styles/tokens.css) (CSS variables, design tokens, custom scrollbars) and [components.css](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/app/styles/components.css) (reusable `@layer components` for `.ks-glass-card`, `.ks-modal-backdrop`, `.ks-modal-card`, `.ks-modal-header`, `.ks-modal-close-btn`, `.ks-btn-*`, `.ks-badge-*`, `.ks-input`, `.ks-bottom-dock-*`).\n  - **Component Style Refactoring**: Updated [globals.css](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/app/globals.css), [HealthProfileModal.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/HealthProfileModal.tsx), [HouseholdRoomModal.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/HouseholdRoomModal.tsx), [AIQuotaModal.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/AIQuotaModal.tsx), [NotificationsModal.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/NotificationsModal.tsx), [PricingModal.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/PricingModal.tsx), and [Navbar.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/Navbar.tsx) to consume standardized CSS classes without altering visual presentation or layout rendering.\n- **KitchenSynk README Update (`apps/kitchen-synk`)**: Updated [README.md](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/README.md) to accurately reflect the application\'s current architecture as a COMPASS micro-app (Next.js 15 + React 19 + Gemini API + Barcode Scanner + Household Synk Code) within the `Xophz-COMPASS` suite, removing obsolete Google AI Studio references.\n- **KitchenSynk Brand Logo Typography (`apps/kitchen-synk`)**: Replaced final letter "K" mirroring with initial letter "K" mirroring across logo elements in `KitchenSynkLogo.tsx`, `Navbar.tsx`, `SplashScreen.tsx`, and `HouseholdRoomModal.tsx`. The initial "K" in **Kitchen** is now mirrored (`<span className="inline-block [transform:scaleX(-1)]">K</span>itchen`) while the trailing "K" in **Synk** is standard (`Synk`).\n- **KitchenSynk Item List View Refinement (`apps/kitchen-synk`)**: Redesigned the Inventory List View layout in [InventoryView.tsx](file:///home/xopher/www/x/Xophz-COMPASS/apps/kitchen-synk/components/InventoryView.tsx).\n  - **Subtext Quantity**: Relocated size/quantity display from inline next to item title to subtext row underneath the title with a clean monospace pill badge, resolving duplicate unit text formatting (e.g. `1 carton` instead of `1 carton carton`).\n  - **Badges Redesign**: Upgraded `staple`, `⚠️ Sugar`, and storage category pills (`Fridge`, `Pantry`, `Freezer`) with pill styling (`rounded-full` / `rounded-md`), subtle borders, soft backgrounds, and refined typography.\n  - **Action Buttons**: Enhanced alignment, touch targets, and hover states for Reorder, Edit, and Delete action buttons.\n\n### Added\n- **Git Submodule (`xophz-kitchen-synk`)**: Added [xophz-kitchen-synk](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-kitchen-synk) as a Git submodule located in `wp-content/plugins/xophz-kitchen-synk`.\n- **Questbook CRM Vue Router Subroutes & Vuetify Bottom Navigation (`apps/my-compass-phone`)**: Split the Questbook CRM application into dedicated, modular Vue Router subroutes with Vuetify\'s `<v-bottom-navigation>` bar.\n  - **Subviews**: Created `QuestbookPipelineView.vue` (Contacts directory & stage filters), `QuestbookOnboardView.vue` (Live WP contact onboarding form), and `QuestbookActivityView.vue` (Quests & milestones).\n  - **Centralized Pinia Store**: Built `useQuestbookStore.ts` to manage contacts, quests, REST API operations (`/wp-json/questbook/v1/contacts` & `/wp-json/questbook/v1/quests`), loading indicators, and modal states across subviews.\n  - **Vuetify Bottom App Navigation**: Refactored `QuestbookApp.vue` to host `<router-view>` and a glassmorphic Vuetify `<v-bottom-navigation>` with neon cyan active states for seamless subroute navigation between `/questbook/pipeline`, `/questbook/onboard`, and `/questbook/activity`.\n  - **Router Config**: Registered Vue Router in `router/index.ts` and `main.ts` with web hash history for `my-compass-phone`.\n\n### Changed\n- **Fluid & Responsive Phone Home Screen Icon Sizing (`apps/my-compass-phone`)**: Added `container-type: inline-size` to `.phone-screen` in [PhoneOS.view.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/components/views/PhoneOS.view.vue) and converted fixed app/dock icon pixel dimensions (`68px`) to fluid `clamp()` values with `cqw` container query units in [PhoneHomeScreen.vue](file:///home/xopher/www/x/Xophz-COMPASS/apps/my-compass-phone/src/components/views/PhoneHomeScreen.vue). Icons now scale dynamically to fill Android Pixel and wider screen viewports with a big, tactile, bubbly aesthetic while maintaining proper proportions on iPhone desktop preview frames.\n\n### Added\n- **Mobile Sub-App Layout Template (`AppTemplate.vue`)**: Built a reusable mobile application layout component in `apps/my-compass-phone/src/components/templates/AppTemplate.vue` featuring a glassmorphic billboard header with app cut-off logo, category badge, dynamic version tag, mobile tab navigation (`v-tabs`), custom header action slots, and scrollable content containers.\n- **Questbook CRM & Live `xophz-compass-quests` Plugin REST API Integration**: Connected `QuestbookApp.vue` directly to the live WordPress backend REST API endpoints (`/wp-json/questbook/v1/contacts` and `/wp-json/questbook/v1/quests`), eliminating mock seed data.\n  - **Backend Field & Meta Enhancements**: Updated `class-xophz-compass-quests-rest.php` to format and persist client `company`, `servicePackage`, `paymentStatus`, `retainer`, and `notes` as post meta (`_qb_company`, `_qb_service_package`, `_qb_payment_status`, `_qb_retainer`, `_qb_notes`).\n  - **Real-Time Client Onboarding & Pipeline**: Onboarding form creates live `questbook_contact` post types in WordPress; pipeline stage selection updates contact meta via `POST /wp-json/questbook/v1/contacts/{id}`; deletion sends `DELETE` request to WordPress.\n  - **Live Quests Management**: Quests tab fetches and creates live `questbook_quest` posts via `/wp-json/questbook/v1/quests`.\n- **Authentication Gating for Sub-App Views (`PhoneAppView.vue`)**: Configured conditional rendering in `PhoneAppView.vue` based on user login state (`isLoggedIn`).\n  - **Authenticated Users**: Access full interactive applications (e.g. `QuestbookApp.vue` CRM & onboarding controls connected to live WordPress REST APIs).\n  - **Unauthenticated / Guest Users**: View the interactive Demo & Metrics Preview mode (`PluginCharts.vue` + feature billboard) with a glowing banner (`.demo-mode-banner`) positioned at the bottom of the view below the telemetry charts, prompting guests to log in or register to unlock live backend controls.\n- **Lucide SVG Icon Architecture in Mobile Apps (`AppTemplate.vue` & `QuestbookApp.vue`)**: Replaced unrendered FontAwesome string class names with native `lucide-vue-next` SVG icon components (`Users`, `UserPlus`, `ListTodo`, `RefreshCw`, `Search`, `Mail`, `CheckCircle2`, `Clock`, `X`, `Scroll`, `Hourglass`), eliminating missing glyph box artifacts and ensuring clean, crisp vector icon rendering across all mobile sub-apps.\n\n### Added (earlier)\n- **My Compass Phone Full WordPress Login & Registration Flow**: Implemented complete WordPress authentication and magic link account registration for My Compass Phone (`apps/my-compass-phone`).\n  - **REST API Endpoints**: Created `Xophz_Compass_Phone_Auth_Rest` (`class-xophz-compass-phone-auth-rest.php`) under `/wp-json/compass-phone/v1/` featuring `/check-email`, `/login`, `/send-magic-link`, `/verify-magic-link`, `/me`, and `/logout`. Sets WordPress auth cookies (`wp_set_auth_cookie`), refreshes REST nonces, and manages 15-minute transient magic tokens.\n  - **Email-First Dynamic Flow**: Updated `PhoneLockScreen.vue` and built `useAuth.ts` composable. Users enter email address first. System checks existence: existing users choose between Password Login and Magic Link; new/unrecognized emails are automatically offered ONLY the Magic Link option to create a new WordPress subscriber account.\n  - **Status Bar User State**: Updated `PhoneStatusBar.vue` to display current WordPress user avatar / logged-in indicator icon.\n\n## [2026-07-21]\n\n### Added\n- **XP Gamification Core SaaS API & Subscriptions**: Rebranded and packaged the XP REST API into **XP Gamification Core**, enabling developers to generate and manage API keys (`xp_live_...`), subscribe to competitive service tiers (**Developer Lite** at $19/mo, **Growth Engine** at $49/mo, **Enterprise Sovereign** at $199/mo), and authenticate API requests. Built REST endpoints `/xp/v1/keys` (`class-xophz-compass-xp-keys.php`) and `/xp/v1/subscriptions/checkout` (`class-xophz-compass-xp-subscriptions.php`) supporting Stripe Checkout session generation, monthly/yearly billing cycles, and Early Adopter discount code validation (`EARLYBIRD` 25% discount, `VIP50` 50% discount).\n- **XP Theme Interactive SaaS Pricing Table**: Created `PricingTable.tsx` component integrated into the XP WordPress theme (`wp-content/themes/xp/react/src/components/PricingTable.tsx`). Features monthly/annual billing cycle toggle (20% discount badge), early adopter discount code input field, tier feature comparisons, direct Stripe Checkout integration, and an embedded API Key Manager modal allowing developers to test, create, copy, and revoke XP API keys directly in the browser.\n- **Glowitheflow Plugin Icon Logo**: Designed and generated `icon.svg` for the `xophz-compass-glowitheflow` plugin, perfectly matching the 2.5D flat vector style, circular backdrop geometry, and color system of existing COMPASS plugin logos. Features a central glowing water droplet with luminous aqua/cyan layers, fluid ambient flow ribbons, satellite droplets, and 4-point magic sparkles. Integrated icon into `wp-content/plugins/xophz-compass-glowitheflow/icon.svg` and `apps/glowitheflow/public/icon.svg`, and updated `useApps.ts` category mapping.\n- **My Compass Post-Payment Onboarding Stepper & Backend Delivery**: Replaced broken icon with Lucide\'s `CheckCircle2` component and unlocked a multi-step post-checkout onboarding wizard (`DesktopPresentationPanel.vue`). Added client-side form validation requiring non-empty Full Name, Email, Phone Number, and Website URL with dynamic alert messaging before submission. Built the `/xophz/v1/client/onboard` REST API endpoint in `class-xophz-compass-modules-api.php` which logs client submissions in the WP database, dispatches an admin email notification (`wp_mail`), and sends an instant SMS alert via Twilio (`Xophz_Compass_Twilio_API`) so you have immediate client details to provision their instance on your WP-MU-DEV portal.\n- **My Compass Sales Copy & Buy Now CTAs**: Overhauled presentation slide copy into a compelling, high-converting sales narrative emphasizing software sovereignty, performance, zero seat taxes, and instant deployment. Renamed the core product line to **My Compass Business OS**, enabled `allow_promotion_codes` and recurring monthly subscription mode (`mode => \'subscription\'`) for monthly licenses via the Stripe API, and integrated an interactive promo code input field into the test modal. Connected to the backend WordPress Connectors API (`stripe_secret_key`) for live Stripe Checkout Session redirects with automatic fallback to an in-app test simulator modal.\n- **My Compass Phone Backswipe Gestures**: Added intuitive touch and mouse backswipe gestures to sub-app views (`PhoneAppView.vue`). Swiping right from the left screen edge or dragging right anywhere on the sub-app screen smoothly closes the sub-app and returns to the home screen.\n\n### Changed\n- **My Compass Phone OS Code Splitting & Provide/Inject Context**: Eliminated prop drilling across `App.vue`, `PhoneOS.vue`, `PhoneHomeScreen.vue`, `PhoneStatusBar.vue`, `PhoneLockScreen.vue`, `PhoneAppView.vue`, and `DesktopPresentationPanel.vue`. Built `usePhoneContext` (`src/composables/usePhoneContext.ts`) providing a unified reactive phone state using Vue\'s Provide/Inject pattern. All sub-components now inject reactive state and actions directly.\n- **My Compass Desktop Presentation Hero CTA & Header**: Re-imagined the "Buy Now", Developer UI Kit, and Enterprise button experience by replacing static header/slide buttons with high-impact glassmorphic **Hero Action Decks** (`.hero-cta-deck`). Features pulsing cyan status indicators, `$100/mo`, `$1,999/vpc`, `$49 Single Site`, and `$499 Unlimited` pricing callouts, neon icons (`ShieldCheck`, `Code2`, `Layers`, `Zap`, `Sparkles`), hover elevation, and interactive CTA buttons triggering the Stripe checkout & provisioning flow.\n\n### Fixed\n- **Glowitheflow Native WP & XP GP Integration**: Completely refactored Glowitheflow backend REST endpoints (`/wp-json/glow/v1/*`) to utilize native WordPress Custom Post Types (`glow_post`) and COMPASS XP\'s GP (`_xp_total_gp`). User droplets and driplets now sync directly with COMPASS XP\'s `_xp_total_gp` user meta and `Xophz_Compass_Xp_Players::add_currency()` method, eliminating custom database tables in favor of native `wp_posts` and `wp_usermeta`. Rebuilt static production bundle in `wp-content/plugins/xophz-compass-glowitheflow/public/dist/`.\n- **My Compass Phone Top Bar Unlock Animation**: Fixed the layout shift and jarring push-down effect when unlocking the phone. Replaced conditional `v-if` mounting of the status bar with bound `:is-visible` absolute positioning (`position: absolute`), maintaining fixed height layout geometry (`padding-top: 48px`). Changed the title animation from `fadeInDown` to a clean `fadeIn` opacity fade, ensuring a smooth, natural transition without pushing down home screen elements.\n\n## [2026-07-20]\n\n### Added\n- **My Compass Phone Desktop Slideshow**: Built a 5-step interactive slideshow for the desktop presentation panel explaining the Compass Fractal OS, the W4 Protocol, and Spatial Orchestration, ending with app launch links and a mobile redirection QR code. Added slide-fade transitions, navigation controls, glowing cyan sliding pill indicator dots (which expand smoothly on active state), and a human-like sequential typewriter animation effect that dynamically types out each slide\'s title, highlight, subtitle, and description text letter-by-letter with a blinking cursor at each step, natural pauses between sections, and a 99% success rate simulation where it types at realistic human speeds (20ms for headers, 30ms for descriptions) with random typos, realistic pauses, and backspacing corrections. Also added staggered list animations in the Ecosystem slide, causing category columns to slide in from the left and plugin lists to slide up from the bottom when selected, with "True North" configured as the default active category.\n- **My Compass Phone App Launch Animations**: Implemented premium iOS-like zoom and scale transitions when opening and closing sub-apps. The sub-app container scales from `0.8` to `1` using a spring cubic-bezier ease curve, while the background home screen simultaneously scales down to `0.92` and fades out with pointer events disabled.\n- **My Compass Phone Lock Screen / Onboarding**: Added a beautiful onboarding lock screen displaying the Compass branding logo centered in a floating glassmorphic circle with outer neon glow and subtle float animations. Locked state hides the top status bar, home bar, and main page content, revealing them with a smooth scale and fade-out GPU-accelerated transition upon tap/click.\n- **My Compass Phone Dock Apps Relocation**: Moved the Questbook, Compass, and Settings apps to the bottom application dock, filtering them out of the main grid. Removed the background containers from the dock icons, rendering the full-size images and SVGs directly at `68px` by `68px` (matching the main app grid sizing) with elegant scaling transitions on hover.\n- **My Compass Phone Lock Screen Dashboard**: Transformed the lock screen into a clean, automotive-inspired dashboard interface tracking real-world telemetry metrics (Campaign Open Rate, Active Users Engagement, Sent Delivery, and Systems Status) instead of sci-fi placeholders. Adjusted the Apache ECharts needle gauge to track the Campaign Open Rate. Removed all boxes, backgrounds, and borders from the layout, letting the charts and floating data metrics sit cleanly directly over the animated background. Moved the descriptive tagline to the top header area and kept the pulsing fingerprint button at the bottom center to close/unlock the dashboard.\n\n### Changed\n- **My Compass Phone Desktop Slideshow**: Updated the slideshow presentation copy to pitch My Compass as the ultimate all-in-one OS, detailing the $100/mo True North pricing, the Sovereign & Whitelabel Enterprise tier with enhanced compliance details (deploying the auditable codebase in private cloud VPCs to satisfy SOC2, HIPAA, and GDPR), the refined Spatial Orchestration features, and the $49 / $499 Developer UI Kit and Template offering. Refined the welcome slide description to position My Compass as an agnostic unified command center for the entire business to track and move the needle on all operations. Added dynamic Stripe Checkout integration via a custom WordPress REST API `/xophz/v1/stripe/checkout`, featuring fallback redirects to an interactive test-mode payment card simulator modal, integrated the Stripe Secret Key with the WordPress Connectors API (`compass_stripe_secret_key`), moved the redirection QR code to slide 2, and set the Developer UI Kit slide as the final step. Overhauled the plugin list view to remove card borders and backgrounds, introducing larger vector icons/images and bigger natural-cased typography with smooth hover slide animations. Switched the category icons to use premium Lucide icons (Server, Target, Star, Castle, Wand2) and updated both DesktopPresentationPanel.vue and App.vue to render them via `<component :is="...">` tags for perfect visual compatibility. Restructured the computed `appsByCategory` list to combine both `gridApps` and `dockApps` so that the Questbook app is correctly grouped and displayed in the Command Deck category. Top-aligned (`justify-start`) the slideshow wrapper and slide container with a fixed padding-top to keep the title area static and prevent it from shifting upward when description text wraps dynamically.\n- **My Compass Phone Desktop Layout spacing**: Realigned the main application layout to orient the presentation slideshow on the left and the preview phone on the right, spaced evenly across the desktop screen.\n- **My Compass Phone App Navigation Behavior**: Configured presentation app shortcuts to dynamically trigger the phone\'s lock screen fade-out unlock transition and close dashboard overlays, displaying the target app immediately.\n- **My Compass Phone Status Bar Rebranding**: Removed the mock Animal Crossing Leaf icon, the cell signal indicator, the battery percentage, and the battery icon. Replaced the Bell notification icon with a custom-styled Compass icon highlighted in neon cyan (#62c9ff) positioned in the top right of the status bar, functioning as the alert/notification indicator with the alert dot overlay.\n- **My Compass Phone Configure & Sub-App Navigation**: Updated the "Configure in Admin" button in the phone sub-app view to open the matching plugin configuration router page in the parent WordPress admin panel (`/wp-admin/admin.php?page=xophz-compass#/{plugin-slug}`). Brought back the glassmorphic bottom application dock inside the sub-app view layout, containing exactly one icon matching the currently active plugin that triggers the same configuration action. Moved the module version number to a sleek absolute-positioned badge in the top-right of the billboard header card, and removed the now redundant "Module Details" info panel container. Ensured the home indicator bar stays visible inside the sub-app view for consistent native navigation feedback.\n- **My Compass Phone Module Metadata**: Integrated real plugin details (Description, Version, and Category) retrieved from the COMPASS REST API into the phone\'s sub-app view. Sub-apps (including pre-loaded dock apps) now render their actual developer-defined description and version instead of static fallbacks, and the billboard subtitle displays the plugin\'s workspace category (e.g., `Trajectory`, `True North`, `Command Deck`) instead of `[Name] Foresight`. Added `version`, `description`, `category`, and `group` fields to the `get_available_plugins` REST API response on the backend.\n- **My Compass Phone Billboard Layout**: Adjusted the mobile billboard content by removing the `pl-2` spacing class override, allowing it to correctly use the stylesheet\'s `90px` left padding to place the app name and description to the right of the logo, preventing visual overlapping.\n- **My Compass Phone Sub-App Header**: Prevented truncation of the sub-app title in the toolbar by setting deep layout styles (`overflow: visible`, `white-space: nowrap`, and `text-overflow: clip`) to target Vuetify\'s nested title elements.\n- **My Compass Phone Sub-App Billboard & Dashboard**: Overhauled the phone\'s sub-app view to match the WP-Admin portal design. Introduced a glassmorphic mobile billboard header with the logo cut off on the left and dynamic title/subtitle/description on the right.\n- **My Compass Phone Metrics Grid Removal**: Removed the 2x2 mock metrics dashboard grid from the sub-app layout, keeping only the Module Details panel and the Configure button.\n\n### Fixed\n- **My Compass Phone Sub-App View**: Removed CSS line-clamp truncation on the sub-app description to allow the full description text to render completely.\n- **My Compass Phone App Header Close Button**: Moved the back/close button from the left side of the sub-app toolbar header to the top-right corner as an \'X\' icon, leaving the app icon/avatar and title aligned to the left of the toolbar.\n- **My Compass Phone Clean Header**: Redesigned the top status bar of the My Compass Phone application using clean Lucide icons (`Signal`, `Leaf`, `Bell`, `Battery`) to replace old custom SVGs and standard material design icons. Retyped the application data collections (`gridApps`, `dockApps`, `currentApp`) using a newly introduced `AppItem` interface to resolve TypeScript compilation errors during production builds.\n- **My Compass Phone Centering**: Centered the phone bezel vertically and horizontally in the viewport using the Vuetify application wrap flex properties.\n\n### Fixed\n- **Nook Phone Dev Server Fallback**: Fixed the Nook Phone shell rendering to fallback and serve the production build when the local Vite development server is not running, instead of outputting an error message and terminating.\n- **Nook Phone Map App Emojis Corruption**: Fixed a bug where building emojis under the "Places" section of the Map App displayed as corrupted character strings (like `83cudfdb`). This was caused by WordPress\'s REST/metadata update layer stripping backslashes (`\\u...` escaping) from the state JSON string when saved. Wrapped the JSON encoding with `wp_slash` in `class-xophz-nook-phone-rest.php` and introduced a self-healing `repairState()` migration routine in `nookState.svelte.ts` to automatically repair any corrupted icons in existing local and cloud states on load.\n\n## [2026-07-19]\n\n### Fixed\n- **Nook Phone App Passport Page**: Fixed a compile error in [PassportApp.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/components/pages/PassportApp.svelte) due to a duplicate closing `</div>` tag.\n\n### Changed\n- **Nook Phone App Contacts Messaging Integration**: Relinked the contacts detail "Bulletin" action button (renamed to "Message" and styled with the Messages app theme) to navigate directly to the Messages app. Configured the Messages App on mount to check for an incoming `activeChatPartner`, automatically loading their letter exchange if one exists, or navigating directly to pick stationery to draft a new letter to them. Added a local storage fallback layer and mock response simulator for NPC villagers (since they do not have real WordPress user IDs) to prevent `POST dms/send 400 Bad Request` API errors. Villagers will dynamically auto-reply to sent letters after 2 seconds.\n- **Nook Phone App Contacts Detail Layout**: Swapped the villager name and species/personality text tags in the contact detail view. The header title now displays the villager\'s personality and species (e.g., "Lazy Cat"), and the dialogue bubble badge shows the villager\'s name.\n- **Nook Phone App DIY Details Page layout & Crafting Animation**: Moved the recipe title and back button to the app toolbar header (replacing the static "DIY Recipes" title and "Workshop" subtitle with a capitalized recipe name when viewing details), hid the category selection bar when the details view is active, and removed the duplicate title/back header from the main content area. Removed the dark background (`bg-[#2f2b23]`) from the recipe image container. Re-engineered the crafting animation overlay inside [DiyApp.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/components/pages/DiyApp.svelte) to play a high-fidelity workbench sequence: displays rotating volumetric dust clouds, throws larger flying recipe ingredient items (`56px`) into the mix using parabolic jump arcs (gravity-simulated easeOut/easeIn ease curves scaling up to `1.6x` at the jump apex), triggers 4 hammer strikes synchronized with the in-universe `stamp` audio beats, and emits expanding dust puff particles. Added a success reveal screen featuring a spinning sunshine/starburst background, bouncing item reveal pop, shooting star particles, success audio chime, and a "Put Away" button to return to the recipe page.\n- **Nook Phone App Crafting Storage Integration**: Updated `craftRecipe()` in [nookState.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/lib/nookState.svelte.ts) to convert the crafted recipe\'s name into a lowercase hyphenated slug and automatically add the item to the user\'s storage catalog.\n- **Nook Phone App Shop Tab Filters**: Fixed the Nook Shopping app\'s list filtering inside [ShoppingApp.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/components/pages/ShoppingApp.svelte) by resolving an ID/name mismatch. The Storage, Wishlist, and For-Trade tabs now correctly filter using the item slug (`r.id`) matching the ID format utilized by the toggling buttons and state engine.\n- **Nook Phone App Directory Details View layout**: Relocated the Installed, Download, Uninstall, Get on iOS, and Get on Android action buttons from the absolute bottom container to the top header card inside [DirectoryApp.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/components/pages/DirectoryApp.svelte) to prevent them from overlapping with the user review input/fields, ordering them above the developer resources website/code buttons, and reduced the bottom padding on the main scrollable view.\n- **Nook Phone App Directory List Sorting & Categories**: Sorted the filtered apps list alphabetically by name. Added a new "Pre-Installed" category filter tab to filter apps based on whether they belong to the phone\'s native `CORE_APPS` suite.\n- **Nook Phone App Directory Rating and Download Sizing**: Increased the sizing of the rating and download counter text (`10px` to `12px`) and icons (`w-3` to `w-3.5` with slightly chunkier strokes) inside the header card to improve visibility and readability.\n- **Nook Phone App Directory Category Bar Visibility**: Hid the category filter bar at the top of the view when the app detail view is active (`currentView === \'detail\'`) to prevent category shifts while viewing app details.\n- **Nook Phone App Directory Immersion & Fourth Wall**: Cleaned up various app names and descriptions in [nookData.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/lib/nookData.ts) (including "ACNH Beginner\'s Guide" -> "Beginner\'s Guide", "Yue\'s ACNH Guides" -> "Yue\'s Island Guides") to remove out-of-universe terms (like "ACNH", "Animal Crossing", "AC:NH", "AC", "New Horizons") and preserve in-universe immersion.\n- **Nook Phone App Directory Default Apps Mapping**: Extended the `checkIsCoreApp` check to recognize `"Miles"`, `"Happy Island Designer"`, and `"Pattern Tool"` as core/pre-installed apps so they are correctly grouped in the "Pre-Installed" category tab and display the "Installed" status in the grid and detail views.\n- **Nook Phone App Directory Miles Icon Correction**: Changed the `appIcon` property for the Miles app in [nookData.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/lib/nookData.ts) from `\'diy\'` to `\'miles\'` so it uses the correct ticket stamp icon.\n- **Nook Phone App Directory Free User Install Tracking**: Modified the `/install` and `/apps` endpoints in [class-xophz-nook-phone-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-nook-phone/includes/class-xophz-nook-phone-rest.php) and [api.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/nook-phone/src/lib/api.ts) to track installs from non-logged-in (free) users using an automatically generated frontend UUID. This allows free users to view download stats and accurately increments app installs without double-counting on identical devices.\n\n## [2026-07-14]\n### Fixed\n- **Dodo Air Flight Time Label**: Changed the "Scheduled" sub-label under the flight time column in `DeparturesTab.svelte` to "Listed". This prevents confusion with real flight schedules, as the time shown represents when the gate was opened (`createdAt`), rather than a future scheduled departure time, making the UI 100% accurate and intuitive even for closed flights.\n\n## [2026-07-13]\n\n### Changed\n- **Dodo Air Funnel Statistics and All-Time Counters**: Reordered the telemetry cards in [TrafficControlModal.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/organisms/TrafficControlModal.svelte) to follow a logical funnel sequence (`Views`, `Visitors`, `Villagers`, `Islands`, `Passengers`, `Standby`). Added new options tracking historical all-time pilots (`dodo_air_alltime_pilots`) and passengers (`dodo_air_alltime_passengers`), incrementing them on new flight creation and passenger boardings respectively. Included these in the REST responses of both `/state` and `/visit` endpoints inside [class-super-nerd-bros-dodo-air-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/super-nerd-bros-dodo-air/includes/class-super-nerd-bros-dodo-air-rest.php). Updated the client store (`dalStore`) and layout to process and display these all-time metrics side-by-side with active counts using `now/alltime` formats.\n\n### Fixed\n- **Prettier Formatting Error**: Downgraded `prettier` dependency in both the root [package.json](file:///home/xopher/www/x/Xophz-COMPASS/package.json) and the Dodo Air [package.json](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/package.json) to `3.6.2` to resolve an AST visitor keys traversal bug (`getVisitorKeys is not a function`) when using Svelte/TailwindCSS plugins across the workspace.\n- **Dodo Air Traffic Control Modal Toggle**: Declared the missing `isTrafficModalOpen` reactive state property using `$state(false)` inside `dalStore` ([dal.svelte.ts](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/stores/dal.svelte.ts)), which resolves the issue where the Traffic Control button in the header was failing to open the modal due to missing Svelte 5 reactivity.\n- **Dodo Air Layout and Traffic Control Button**: Fixed a runtime ReferenceError in [+layout.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/routes/+layout.svelte) caused by referencing `liveTime` directly instead of deriving it from `dalStore.liveTime`, which had crashed the layout and stopped the traffic control button from working. Also cleaned up the obsolete `showFuelModal` state variable reference and `setShowFuelModal` prop from the `RadioTab` instance in the layout and template.\n\n## [2026-07-12]\n\n### Changed\n- **Dodo Air Terminal Header 4th Toolbar Button**: Added a 4th button in [+layout.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/routes/+layout.svelte) to toggle between Dodo Airlines (DAL) and Luna\'s Dream Library (LUNA) mode directly from the right-hand sleek toolbar group.\n- **Dodo Air Terminal Header FF Miles Relocation**: Relocated the FF Miles / Dream Dust display from the date/clock panel to the online user counts row in [TerminalHeader.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/organisms/TerminalHeader.svelte) to optimize layout space.\n- **Dodo Air Departures Airplane Hover Color**: Updated [DeparturesTab.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/templates/DeparturesTab.svelte) to remove the explicit plane type and color text ("orange • Switch") under the flight ID. The airplane icon now dynamically transitions to the specific plane\'s color (e.g. orange, blue, green, yellow) on hover or when selected, using CSS custom properties.\n- **DAL Tower Radio Message Order**: Reversed the rendering order of chatter messages in [RadioTab.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/templates/RadioTab.svelte) (both template and organism versions) so the most recent message is correctly displayed at the bottom of the feed.\n\n- **Friend Code & Dream Address Formatting Utility**: Created a formatting helper utility (`format.ts`) that automatically adds dashes to Nintendo Switch Friend Codes (`SW-XXXX-XXXX-XXXX`) and Dream Addresses (`DA-XXXX-XXXX-XXXX`) as users type. The helper automatically strips out prefixes (e.g., `SW-`, `DA-`), spaces, and any non-alphanumeric characters, and dynamically re-injects the proper prefix and dashes, allowing users to paste code snippets in any format cleanly.\n\n### Changed\n- **ACNH Dialogue Bubble Character Colors & Fonts**: Updated character colors in [AcnhBubble.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/molecules/AcnhBubble.svelte) to dynamically match the in-game Animal Crossing: New Horizons color palettes. Defined yellow-gold background and dark blue/teal text for Orville and Wilbur, and a purple/indigo background with white text for Luna, falling back to standard orange and brown for other characters. Additionally, updated the font styles in [app.css](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/app.css) to support custom variables: character dialogues render using `FOT-RodinBokutoh Pro EB` (the in-game dialogue font) while self dialogues (without a name tag) render using `FOT-Seurat Pro B` (the in-game UI/system font).\n- **DAL Tower Radio Redesign**: Completely redesigned the RadioTab component (both organism and template variants) with a full ACNH aesthetic. Added warm parchment container (`#FDF8E3`) with chunky 3D borders, a DAL blue gradient header with animated signal dots and "ON AIR" glow badge, ACNH-style chat bubbles with 3D bottom-border depth, a parchment gradient input dock with `btn-acnh` send button, and an animated empty state with a rotating satellite dish.\n- **Terminal Header Logo Centering**: Moved only the Dodo Airlines logo image to the center of the terminal header using a balanced 3-column layout on large screens, keeping the gateway brand titles on the left.\n- **Dodo Air Wilbur Message Box**: Updated the Wilbur/Luna message info box on the Flight Hub page (`CockpitTab.svelte`) to use the custom, stylized `AcnhBubble` dialogue component with dynamic Wilbur/Luna titles, character avatars, and matching typography.\n- **Dodo Air Bottom App Navigation**: Relocated the ACNH-style tab navigation buttons from the page body header to a premium, glassmorphic floating bottom app navigation bar. Designed distinct DAL (warm beige/yellow) and Luna (dark purple/lavender) visual styles with subtle hover transitions and active state highlights, adding bottom padding (`pb-28`) to the main content container to prevent occlusion.\n- **Dodo Air Header Logo**: Replaced the plain "Dodo Airlines" text in the gateway header with the official `dal.png` logo image, enhancing brand recognition and visual polish. Relocated `dal.png` to the WordPress plugin\'s public directory and injected the `pluginUrl` dynamically into `window.wpApiSettings` via the PHP controller, allowing Svelte code to load the image dynamically without custom rewrite rules.\n- **Dodo Air Traffic Control Icon**: Replaced the emoji indicator (`📡`) in the header quick-launch button and the modal title with the standardized Lucide `Radio` icon component for a cleaner, modern interface.\n\n### Changed\n- **Dodo Air Online Terminal Header Redesign**: Reimagined the top header for the Dodo Air SvelteKit app to establish a premium, uniform, and beautiful glassmorphic layout. Separated the digital flight information board (Date and Clock) from the toolbar action controls (Sound Toggle, Traffic Control radar, and Flyer Passport badge) to prevent layout wrapping and crowding. Replaced the duplicate system mode toggle button on the right with a clean, interactive Dial button on the left, and unified the button styling using glassmorphic `rounded-2xl` containers of equal heights (`w-10 h-10`).\n- **Sexy Scrollbars**: Implemented global premium, glassmorphic, and high-tech scrollbars for the COMPASS app. Upgraded the `@mixin scroll-bar` in [mixins.scss](file:///home/xopher/www/x/Xophz-COMPASS/src/styles/core/_mixins.scss) to support standard compliant `scrollbar-width`/`scrollbar-color` properties alongside legacy WebKit fallbacks. Added global default scrollbar styling to all scrollable elements (`*`) and optimized specific scrollbars on `v-main` layouts and the sub-app billboard to present a cohesive starship aesthetic.\n\n### Fixed\n- **Preparing Flight Loader Effect Loop**: Fixed an `effect_update_depth_exceeded` runtime error caused by the `$effect` in `+layout.svelte` tracking `tabChangeStartTime` as reactive state when it was read and written inside the effect context. Changed `tabChangeStartTime` to a standard, non-reactive variable to prevent tracking.\n- **Terminal Header Clock**: Fixed the digital clock in the terminal header to tick every second. Changed the format to a 12-hour AM/PM format, and added the timezone abbreviation dynamically next to the time.\n- **Dodo Air Flight Archiving**: Modified `myFlight` derivations in [+page.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/routes/+page.svelte) and [HubTab.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/organisms/HubTab.svelte), and active indicator checks in [TabsNav.svelte](file:///home/xopher/www/x/Xophz-COMPASS/apps/dodo-air/src/lib/components/organisms/TabsNav.svelte) to exclude closed flights. This resolves the issue where closing/archiving a gate would leave pilots stuck in the flight cockpit view instead of returning to the flight creation dashboard.\n- **Dodo Air REST visit endpoint**: Added the missing POST `/visit` API endpoint to [class-super-nerd-bros-dodo-air-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/super-nerd-bros-dodo-air/includes/class-super-nerd-bros-dodo-air-rest.php) to track view counts and unique visitor IDs for the Dodo Airlines Flight Hub.\n- **DAL Terminal Radio Layout**: Fixed right column styling by removing left padding/margin, borders, shadows, and background color containers on the terminal radio sidebar. Resolved horizontal window scrolling issues by assigning `min-w-0` to the flexed message input. Added custom sexy scrollbar rules to `app.css` for Svelte components.\n\n## [2026-06-26]\n\n### Fixed\n- **My Planner Spark Layout & Scrolling**: Wrapped the My Planner spark in a `u-window` component (configured with 40% width and 60% height, centered on screen) instead of launching it fullscreen without window chrome. Removed `min-height: 100vh` on the iframe style to enable native internal scrolling within the restricted container bounds.\n\n## [2026-05-29]\n\n### Added\n- **Hookshot Premium Upgrade**: Complete enterprise-grade upgrade of the Hookshot webhook integration hub.\n  - **HMAC Signature Verification**: Stripe-style `t=timestamp,v1=signature` format with 5-minute replay protection window. Configurable header name per webhook.\n  - **Retry Queue**: Action Scheduler-backed retry system with exponential backoff (2min → 15min → 1h → 6h) and WP-Cron fallback. Dead letter queue for permanently failed dispatches.\n  - **Payload Transforms**: JSONPath-style field mapping engine (`$.args.0.user_email`). Built-in presets for Zapier, Make, Slack, Discord. Separate maps for incoming/outgoing.\n  - **Health Monitor**: Rolling 24h success/failure tracking with three-tier status (healthy/degraded/critical). Dashboard-visible per-webhook health indicators.\n  - **Cross-Plugin Bridges**: Pre-wired handlers for Questbook CRM (auto-create contact), Bomb Bag (auto-subscribe), XP System (award XP), and custom WP actions. Per-webhook toggleable with field mapping config.\n  - **Outgoing Authentication**: Bearer token, Basic Auth, and custom API Key header support per webhook.\n  - **Security**: IP whitelisting, transient-based rate limiting (per-minute per-webhook), and verification challenge endpoint.\n  - **Webhook Categories**: New `hookshot_category` taxonomy for organizing webhooks into groups.\n  - **Dashboard REST API**: Full CRUD, test fire, paginated logs, dead letter management, stats aggregation, bridge discovery, transform presets, and auth type listing via `hookshot/v1/` namespace.\n  - **Vue 3 Dashboard**: Sub-app with 5 views: stats dashboard, webhook list with health indicators, 5-step creation wizard, tabbed detail view (config/logs/transform/bridges/health), and dead letter queue with retry.\n  - Documentation: Full rewrite of `docs/compass/plugins/Hookshot-System.md`.\n\n## [2026-05-27]\n\n\n### Changed\n- **Bomb Bag Premium Email Templates**: Replaced 3 basic seed templates with 12 premium email templates covering all 6 categories (newsletter, welcome, promotional, transactional, drip, custom). Refactored `seed_default_templates` to use a dedicated `get_default_template_definitions()` method for cleaner separation. Templates use table-based layouts, curated color palettes, and professional inline CSS. Also upgraded the composer fallback template to match the new dark-mode aesthetic.\n  - **Newsletter**: *Obsidian Digest* (dark-mode, multi-section), *Ivory Editorial* (light, serif typography)\n  - **Welcome**: *Neon Welcome* (dark, numbered onboarding steps), *Warm Handshake* (warm gradient, emoji features)\n  - **Promotional**: *Flash Sale* (urgency banner, feature grid), *Product Launch* (gradient hero, 2x2 feature cards)\n  - **Transactional**: *Order Confirmation* (receipt with line items), *System Notification* (dark alert with status dot)\n  - **Drip**: *Knowledge Series* (lesson format with progress bar), *Nurture Touch* (soft editorial narrative)\n  - **Custom**: *Midnight Minimal* (dark typography-only), *Canvas Blank* (light starter template)\n\n### Fixed\n- **XP Rogue App Bar Migration**: Migrated 5 legacy XP dashboard pages (`My Achievements`, `My Abilities`, `My Accessories`, `My Config`, `Milestone Badges`) from the deprecated `<v-main>` + embedded `<v-app-bar>` pattern to the standardized `<x-sub-route-layout>` with `<Teleport>` for toolbar actions. This eliminates the "rogue" double app bar that was stacking on top of the parent layout\'s app bar.\n- **CRM Inbox Ghost Submissions**: Refactored `get_global_inbox` to check `_qb_forminator_entry` metadata before falling back to email-based matching, preventing manually-linked submissions from re-appearing as "Unlinked" ghosts.\n- **TypeScript Zero-Error Audit**: Resolved all 29 real `vue-tsc` errors across 7 files (428 raw `tsc` errors were false positives from missing `.vue` module resolution). Fixes included: `useDisplay()` migration in QuestbookInbox, `Window` interface augmentation for `xophzCompassSettings`, `Number()` casts for `v-for` index narrowing in XP builders, corrected `compass-api` import path, and typed validation rule callbacks across Mirror Shield and Pixie Dust forms.\n\n### Added\n- **CRM Inbox Submission Linking**: Added "Link to Contact" and "Create Contact & User" action buttons on unlinked Forminator submissions in `QuestbookInbox.vue`, backed by new REST endpoints (`/inbox/link`, `/inbox/create-contact`).\n- **CRM WP User Invitation Flow**: Added "Create WP User Account" button to `QuestbookProfile.vue` for contacts without a WordPress account. Uses `get_password_reset_key` to send a clean "Set your password" invitation email rather than generating plaintext random passwords.\n\n## [2026-05-26]\n\n### Added\n- **Project Philosophy**: Created `docs/Project-Philosophy.md` to codify the YouMeOS "Starship" aesthetic and design principles, anchored by the foundational "Anthem" lyrics.\n- **Docker-to-Host Trusted Dependency Sync**: Resolved a persistent `[ERR_PNPM_IGNORED_BUILDS]` startup crash inside the `u-compass` container by configuring `only-allow-trusted-dependencies=false` inside the workspace-level [Host .npmrc](file:///home/xopher/www/x/Xophz-COMPASS/.npmrc). This synchronizes dependency permissions across the host and isolated container volume mounts.\n- **Inbox Shareable Deep-Linking**: Integrated robust URL state syncing using `useRoute` and `useRouter` queries (e.g. `#/questbook?contact=123` or `?contact=raw_456`) in [QuestbookInbox.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookInbox.vue). Added active watchers on page load, thread selection, and browser back/forward history navigation to auto-hydrate selected conversations reactive to the query parameter.\n- **Responsive Dual-Pane Inbox Mode**: Implemented a responsive mobile layout strategy inside [QuestbookInbox.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookInbox.vue). When on mobile, the contact list collapses automatically once a thread is selected, and a floating **Back Arrow** button enables seamless transition back to the lists. Additionally, action buttons automatically hide textual labels to keep layout components compact on small screens.\n\n### Changed\n- **Profile Thematic Branding & Typography**: Renamed the sci-fi `Comm-Link` tab header to a much clearer **`Messages & Notes`** in [QuestbookProfile.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookProfile.vue). Standardized abbreviation tab toggles from `Msgs` to **`Messages`** to match the core Inbox pane aesthetics.\n- **Node Entrypoint Resilience**: Upgraded the container entrypoint bootstrap script [start.sh](file:///home/xopher/www/x/Xophz-COMPASS/docker/compass-node/start.sh) to utilize `--ignore-scripts` during container initialization and direct `npx vite` runners. This bypasses rigid `pnpm` lifecycle status checks at runtime, ensuring robust dev-server booting.\n\n### Fixed\n- **Questbook Routing & Stepper Initialization**: Fixed a critical dynamic import compile-time crash (`TypeError: isFunction is not a function` at `defineComponent`) blocking all subroute transitions to the Questbook suite.\n- **Pinata Store Type Verification**: Resolved a TypeScript compilation error in [directory.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/stores/directory.store.ts) where the reactively bound `selected` ref array was defined but missing from the Pinia setup return block.\n- **Questbook Directory Implicit Any**: Resolved TypeScript implicit-any parameter compilation errors on dynamic row click triggers in [QuestbookDirectory.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookDirectory.vue).\n- **Questbook Inbox Union Type Narrowing**: Resolved a template-level type assertion error in [QuestbookInbox.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/questbook/views/QuestbookInbox.vue) by explicitly asserting the `selectedContactId` is not null inside click listeners, satisfying the `string | number` route parameters constraint.\n\n## [2026-05-22]\n\n### Added\n- **Bazaar POS Premium Upgrades**: Perfected the promotional styling, barcode scanner sensory feedback, CRM lookup with XP gamification, and cashier reconciliation.\n  - **Sensory Scanner Feedback**: Implemented a procedural Web Audio oscillator beep (880Hz, 120ms with exponential decay) and hardware-accelerated cyan border pulsing (`neonPulse` animation) inside [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue) triggered upon barcode scans.\n  - **CRM Customer Lookup & XP Rewards**: Added a glowing glassmorphic autocomplete directory combobox inside the Cart sidebar, enabling checkout linkages to WordPress user profiles that trigger real-time gamified XP rewards via `xophz_compass_record_action` hook inside [class-xophz-compass-bazaar-admin-orders.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php).\n  - **Register Shift Reconciliation**: Created a session reconciliation card inside Pinia store [pos.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/store/pos.store.ts) tracking payment gate aggregates, matched to a dedicated 80mm thermal receipt printing template under `@media print`.\n  - **Quick Custom Items**: Added a search header action to quick-add miscellaneous, non-catalog custom products (Title, Price) directly to checkout.\n  - **Stacked Glassmorphic Control Deck**: Redesigned promotions layout into a stacked panel with premium glassmorphic mixins and inline inputs, strictly utilizing Vuetify layout primitives with zero raw HTML containers.\n  - **POS Custom Discounts & Coupons**: Implemented full support for ad-hoc custom discounts (% or fixed $) and native WooCommerce coupons.\n    - Added [discount-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/discount-dialog.vue) for custom ad-hoc fixed-amount and percentage discounts with a custom green-money numpad and reason tracker.\n    - Added inline coupon entry with a ticket icon and tonal "Apply" action in [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue).\n    - Integrated with WooCommerce coupons on the PHP backend, utilizing `$order->apply_coupon()` and negative line item fees (`WC_Order_Item_Fee`).\n    - Added validation of WooCommerce coupon codes via `validate_pos_coupon` Ajax actions.\n  - **Dynamic Site Branding & Tagline Integration**: Replaced the hardcoded receipt header and thank-you text with `siteTitle` pulled dynamically from WordPress settings (in both PHP configs and the Vue client). Retreived the dynamic tagline (`siteDescription` pulled from `get_bloginfo(\'description\')`) to display directly under the receipt thank-you note using a named computed boolean condition (`hasSiteDescription`), formatted beautifully with responsive scaling. Formulated a recursive search selector that parses DOM links, examines `sizes` attributes (e.g. `192x192`), and falls back to apple-touch-icons, guaranteeing crisp high-resolution site icons on thermal receipts rather than blurry 16x16 standard favicons.\n  - **Centered SVG Barcode Generator**: Revamped the dynamic bar width calculation in [receipt-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/receipt-dialog.vue) to measure the final width of the generated barcode stream relative to the `300px` SVG viewBox and apply a balanced offset `Math.max(0, (300 - totalWidth) / 2)`, aligning the barcode perfectly regardless of dynamic Order ID lengths.\n  - **Vuetify Primitive Migrations**: Completed 100% migration of all layout tags in [receipt-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/receipt-dialog.vue) and [cash-tendering-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/cash-tendering-dialog.vue) to strict Vuetify `<v-sheet>` containers and typography primitives, ensuring zero raw layout HTML tags and absolute zero-comment standards.\n  - **Absolute Print Layout Isolation**: Rewrote print stylesheets in [receipt-dialog.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/receipt-dialog.vue) to hide `#wpwrap`, `#wpadminbar`, backdrop overlay scrims, cards, inputs, and action buttons during print, establishing beautiful isolated single-page 80mm receipt generation.\n  - **Secure QR Code Receipt Verification**: Integrated an eager-loading dynamic verification QR code onto the printed receipt labeled with custom caption **`w4 Quick Scan`**. Points securely to `{siteUrl}/?xophz_bazaar_receipt={orderId}&key={orderKey}` to display a public, mobile-responsive thermal receipt rendered via WooCommerce order key validation.\n\n## [2026-05-20]\n\n### Changed\n- **My Compass Categorized Navigation**: Refactored the flat navigation inside the "My Compass" spark window sidebar to support slot-based dynamic categorization under `#nav-content`.\n  - Active plugins are dynamically grouped into standard COMPASS categories ("Command Deck", "Trajectory", "True North", "Castle Walls", "Wizard\'s Tower").\n  - Modified navigation items to render custom SVG plugin icons using `<x-plugin-icon>` instead of generic page icons, matching the Logos spark\'s premium design pattern.\n  - Implemented a fallback "Other" group for active plugins that do not declare a matching standard category, preventing layout gaps.\n  - Removed all raw HTML layout wrappers (`div`, `span`) in the templates in favor of Vuetify components (`v-sheet`, `v-list-item-title`) to align with strict Primitive guidelines.\n  - Transformed the categorized accordion groups into a drill-down `v-window` interface, creating parity with the Logos spark sub-navigation experience and improving layout scaling.\n\n### Fixed\n- **Compass Welcome Router Crash**: Resolved a critical runtime SyntaxError (`Unexpected identifier \'as\'`) during Vue Router initialization.\n  - Replaced illegal inline TypeScript type-casting (`as any`) inside the `compass-welcome.vue` event directives with clean, type-safe controller methods (`startTachometerAnim`, `resetTachometerAnim`).\n  - Standardized the tachometer hover area by replacing layout `div` tags with Vue-native `<v-sheet color="transparent">` elements.\n  - Eliminated unused `magicCloak` imports and instantiations to ensure 100% clean ESLint compilation.\n\n## [2026-05-08]\n\n### Added\n- **Active Sparks Overlay**: Introduced a high-fidelity glassmorphic overlay for rapid switching between active sparks. Triggered by holding `Ctrl+Shift`, it provides a visual carousel of all open windows in stack order. Users can cycle through their active sparks using the left and right arrow keys and instantly focus their selection upon releasing the modifier keys.\n- **Enchiridion Raw PHP Snippets**: Upgraded the Enchiridion Executor to support evaluating raw PHP code via `eval()`, mimicking the functionality of standard code snippet plugins. This allows users to write arbitrary PHP code, including filter hooks like `add_filter(\'show_admin_bar\', \'__return_false\');`, and execute them directly.\n- **Hide Admin Bar Recipe**: Added a default pre-built recipe for hiding the WordPress admin bar for all users, demonstrating the new raw PHP snippet execution capability.\n\n### Changed\n- **Spark Renaming**: Renamed the internal `take-my-money` spark ID and all references to `vip-club` to remain consistent with its display name.\n\n## [2026-05-01]\n\n### Added\n- **Operations Matrix Portfolio Valuations**: Each plugin card in the BlackBOX Operations Suite now displays an estimated annual market replacement cost via a CSS ribbon at the bottom of the card (cyan for Compass Engines, gold for Infrastructure).\n  - Valuations are based on comparable SaaS market pricing (e.g., Forminator ≈ Typeform Pro @ $1,188/yr, Questbook ≈ HubSpot CRM Pro @ $5,400/yr).\n  - Each ribbon shows the annual value and the SaaS product it replaces.\n  - Header now includes a portfolio summary bar: total engines, active count, active value/yr, and total portfolio value/yr.\n  - Static `$valuations` registry maps all 40+ plugins to `[annual_cost, \'SaaS Equivalent\']`.\n- **Compass Plugin Sidebar Distribution**: Moved compass plugin submenu items from the flat "My Compass" list into their respective BlackBOX sidebar accordion groups (CMS, CRM, MA, POS, BI, LXP, ITSM).\n  - Each plugin declares a `Group:` header in its bootstrap PHP file — single source of truth, no hardcoded slug lists.\n  - `BlackBOX\\Admin::build_compass_group_map()` reads Group headers and translates them to panel names.\n  - JS redistributes submenu items as top-level menu items into the correct accordion panels using the compass omega icon.\n  - Introduced **BI** (Business Intelligence) accordion group for exec-level KPI tools (Treasure Map, Treasure Trove, Moving Castle).\n\n## [2026-04-30]\n\n### Changed\n- **Content Restriction Migration**: Migrated the "Members Only" content gating logic from the core `xophz-compass` plugin to the `xophz-compass-mirror-shield` plugin.\n  - Relocated `class-xophz-compass-content-restriction.php` to Mirror Shield.\n  - Transferred the settings UI for the Members Only feature (Global toggle, Default Tiers grid) to be registered by the Mirror Shield admin class.\n  - This separation ensures the core Compass plugin remains lean, while Mirror Shield takes full thematic ownership of content protection and access control.\n\n## [2026-04-28]\n\n### Added\n- **Bugnet Notifications & Guardrails**: Implemented graceful error handling when creating and syncing bugs.\n  - Wrapped `createBug` and `syncBug` in `try...catch` blocks to prevent silent failures.\n  - Integrated `useMagicCloak` to provide immediate, visual feedback via the "Magic Toast" system.\n  - Added success/error glassmorphic toasts with semantic icons and colors (e.g., `fas fa-check-circle`, `fas fa-exclamation-triangle`) when reporting bugs, updating details, or syncing to GitHub.\n- **Bug Net Wizard Redesign**: Rebuilt the "Catch a Bug" screen as a 3-step wizard with a gamified species selection system.\n  - **Step 1 — Identify**: Grid of 16 bug species cards with unique emojis (🐜 Ant, 🐞 Lady Bug, 🦗 Cricket, 🪲 Beetle, 🐛 Caterpillar, 🪳 Cockroach, 🦟 Mosquito, 🪰 Fly, 🐝 Bee, 🕷️ Spider, 🦂 Scorpion, 🔥 Fire Bug, 🦋 Butterfly, 🪱 Worm, 🐌 Snail, 🦠 Microbe). Each species has a tagline, description, suggested priority, color, and rarity tier (common/uncommon/rare/legendary).\n  - **Step 2 — Describe**: Title, description, priority (auto-suggested from species), and environment fields.\n  - **Step 3 — Locate**: URL/route, plugin selector, and a full review summary before submission.\n  - Created `bugnet.types.ts` with `BugSpecies` interface, `BUG_SPECIES` catalog, and `RARITY_COLORS` mapping.\n  - Extended `bugnet.api.ts` with `bug_emoji` and `bug_type` fields on `BugPost` and `createBug`.\n  - Registered `bug_type` as a new REST field and meta box in the PHP CPT class.\n\n## [2026-04-27]\n- **User-Driven Performance Matrix**: Pivoted the performance dashboard into a customizable, user-driven HUD.\n  - Active plugins register widget configurations via the `compass_perform_widgets` PHP filter hook as a "blueprint library".\n  - Created `GET /xophz/v1/perform/pinned` and `POST /xophz/v1/perform/pinned` endpoints to persist user\'s pinned widget IDs in `wp_usermeta`.\n  - Vue `usePerformWidgets` composable manages client-side `<component>` registry and user pinned state hydration.\n  - Upgraded the atom to an organism: `o-widget` provides standard framing, loading states, and a native "Pin to Dashboard" toolbar action.\n  - The `compass-perform` host view dynamically renders only the widgets the user has explicitly pinned, respecting grid span rules.\n- **Treasure Trove Widget**: Registered "Sovereign KPIs" widget. Now implemented with native `<o-widget>` wrapper to be used anywhere.\n- **Treasure Map Widget**: Registered "Quest Goals" widget. Now implemented with native `<o-widget>` wrapper to be used anywhere.\n- **Documentation**: Created `docs/compass/plugins/Performance-Widget-System.md` covering architecture, PHP filters, and Vue registration patterns.\n\n### Added\n- **Moving Castle SQL Dump Architecture**: Implemented `Trait_Moving_Castle_API_Database_Dump` for server-side SQL dump generation.\n- Integrated on-the-fly search and replace logic directly into the SQL dumper using `recursive_unserialize_replace`.\n- Added `api_version: 2` to the Moving Castle schema response for connection handshakes.\n\n### Changed\n- Refactored Moving Castle database migration from a row-by-row REST pipeline to a bulk SQL `dump-and-import` architecture for stability and speed.\n- Updated `moving-castle.controller.ts` to use the `pull_database` task instead of iterating over individual tables.\n\n### Fixed\n- Fixed the mid-migration "Cookie check failed" (403) errors by dynamically stashing and restoring the current user\'s `session_tokens` directly inside the `wp_usermeta` table immediately following the SQL import.\n- Fixed a major cache invalidation bug in Moving Castle where stale migration ZIP files (database, media, etc.) were incorrectly reused on subsequent migrations. `fresh=1` is now appended to the initial prepare requests to ensure updates on the source site are recognized.\n- Bumped Moving Castle version to `26.4.27.925` to correctly trigger WordPress plugin update routines and align with `composer.json`.\n\n## [2026-04-26]\n\n### Fixed\n\n- **Login Forbidden Errors**: Bypassed WordPress `rest_cookie_invalid_nonce` check for `/xophz-compass/v1/login`, `/register`, and `/lostpassword` endpoints. This prevents 403 Forbidden errors when an expired cookie is present but the user attempts to log in with valid credentials, ensuring seamless re-authentication without requiring the user to manually clear cookies.\n\n### Refactored\n\n- **Nimbus Media Drive Architecture**: Decomposed `media-drive-app.vue` (1932 → 1569 lines) by extracting drag-and-drop, selection, and sidebar logic into purpose-built composables and organisms.\n  - **`useMediaDragDrop.ts`**: Global and item-level drag state, external drop handling, item-to-folder move via Google API.\n  - **`useMediaSelection.ts`**: Selection toggling, summary computation, confirmation dialog state, trash/restore/empty-trash actions with snackbar notifications.\n  - **`o-timeline-sidebar.vue`**: Year/month timeline navigation drawer for non-Google-Drive tabs.\n  - **`o-miller-column-rails.vue`**: Multi-pane folder stack with rail collapse, pin, expand-on-hover, and drag-to-folder-drop semantics.\n  - Named boolean conditionals (`isRailCollapsed`, `isActiveRail`, `isExpandOnHover`, `isAlreadySelected`, `isValidDropTarget`) applied throughout.\n\n### Changed\n\n- **Welcome Tour Redesign**: Rewrote the COMPASS welcome tour from 3 generic UI-mechanic steps to a 6-step narrative arc that answers "What is this?", "What\'s the product?", "Who is it for?", "How do I navigate?", "How do I use it?", and "What next?" — addressing user confusion about the product\'s purpose and value.\n- **Explore Tour Variant**: Replaced the placeholder explore page tour with a focused 3-step module-specific walkthrough teaching users how to interact with the plugin grid.\n- **Tour Step Counter**: Added a "2 of 6" progress indicator to the `x-magic-tour-tooltip` component for user orientation during guided tours.\n\n### Added\n\n- **Nimbus Interaction Modes (Phases 1–5)**: Implemented the full mode-aware interaction system for the Nimbus Media Drive.\n  - **View Mode**: Default read-only browsing (unchanged behavior).\n  - **Select Mode**: Click items to toggle multi-selection with checkbox overlays and a summary bar showing file count and total size.\n  - **Destructive Mode**: Same selection UX with red-tinted styling, dumpster-fire icon overlays, and a "Trash Selected" action button with confirmation dialog.\n  - **Oscar Dumpster (Trash Tab)**: New sidebar nav item shows trashed Google Drive files. Supports multi-select restore and a toolbar "Empty Trash" button with permanent deletion confirmation.\n  - Mode switcher persisted to `localStorage` and wired from `media-drive-app.vue` through to `o-media-viewport.vue`.\n  - Selection clears on mode switch or folder navigation.\n  - Delete buttons hidden in select/destructive modes to prevent accidental actions.\n  - Toast notifications via `useSnackbar` for all trash/restore/empty operations.\n- **Google Drive API Extensions**: Added `trashFiles`, `restoreFiles`, `getTrashedFiles`, `emptyTrash`, and `moveFiles` batch methods to `google.service.ts`.\n\n- **Webtop Shortcuts**: Extended `UWebtop` to support rendering desktop shortcuts via the new `pinnedToWebtop` property in `LauncherApp`. The shortcuts utilize the existing `UShortcut` component and are placed on a dedicated surface layer that maintains pass-through clickability to the underlying 3D environment.\n- **Nucleos Autoplay**: Added an Autoplay toggle to the Auditory settings (`SoundView.vue`) in the Nucleos spark. Controls whether background audio automatically begins playing when the YouMeOS application is first loaded. Refactored `useAudio.ts` to utilize the new `isAutoplayEnabled` state (persisted to `localStorage` via `umeos_audio_autoplay`) during startup.\n\n### Changed\n\n- Updated `launcher.store.ts` to include `pinnedToWebtop` property for apps and set default pins for Nucleos and Welcome sparks.\n\n## [2026-04-25]\n\n### Added\n- **Magic Formula Conjure Wizard**: Replaced the flat single-textarea AI generator dialog with a 3-step guided wizard for form conjuring.\n  - **Step 1 — Choose Your Spell**: Form type selector (Form/Poll/Quiz) with selectable cards, quick-spell prompt templates per type, and customizable prompt textarea.\n  - **Step 2 — Brewing Animation**: Animated cauldron with cycling arcane messages and progress indicator during AI generation.\n  - **Step 3 — Review Your Formula**: Editable field list with inline label editing, type selector dropdowns, reorder controls, add/remove, and a formula name input before final conjure.\n  - New molecules: `m-conjure-type-card.vue`, `m-conjure-field-row.vue`.\n  - New organism: `o-conjure-wizard.vue`.\n  - Refactored `m-ai-generator-dialog.vue` as a thin wrapper delegating to the wizard.\n  - Updated `onFormConjured` to accept the enriched payload (fields, type, name) from the wizard.\n\n## [2026-04-24]\n\n\n### Added\n- **Moving Castle Migration HUD**: Neon percentage display and time remaining counter centered between the source/target castles in the Overseer Migration Terminal.\n  - Large monospace neon percentage (e.g., `01%`) with color-reactive glow matching migration status (cyan, warning, error, success).\n  - Estimated time remaining counter using elapsed-time-to-progress-ratio extrapolation.\n  - Timer starts on import begin, stops on completion or error.\n- **Migration Analytics**: Google Analytics event tracking for cross-import comparison.\n  - `migration_started`: Fires with source URL, scope, dry run flag, and table count.\n  - `migration_completed`: Fires with duration, tables/rows migrated, scope, and dry run flag.\n  - `migration_failed`: Fires with duration, error message, and dry run flag.\n  - Added reusable exports to `useAnalytics.ts` following existing consent-aware pattern.\n\n### Changed\n- **Migration Terminal UX**: Bottom action button now shows green "COMPLETE" with check icon on successful migrations instead of generic "DISCONNECT".\n\n## [2026-04-23] (Late Night)\n\n### Changed\n- **Moving Castle UX Overhaul**: Complete architectural refactor from flat single-page to multi-view sub-app with proper COMPASS navigation drawer integration.\n  - Restructured `moving-castle.routes.ts` with 4 child routes (Subsites, Import, History, Settings) that auto-populate the `x-sub-app-layout` nav drawer.\n  - Extracted monolithic view into 4 dedicated view components: `SubsitesView`, `ImportView`, `HistoryView`, `SettingsView`.\n  - Shell controller now uses `provide/inject` to share migration API and terminal state across child views.\n  - **SubsitesView**: Hero section with floating icon animation, radial glow backdrop, neon door cards with icon rings and hover-lift effects, connection link dialog with copy-to-clipboard.\n  - **ImportView**: Guided 3-step wizard UI with step indicators, connection link input, and "Begin Migration" CTA.\n  - **SettingsView**: Token TTL slider, data scope checkboxes (users/options/uploads), and security toggles (SSL/single-use tokens).\n  - **HistoryView**: Placeholder audit trail with empty-state illustration.\n  - Premium SCSS: hero glow radials, float keyframes, cursor-blink terminal animation, neon card borders with per-color hover shadows, step-number active rings, and gradient text utilities for each section color.\n\n### Added\n- **Moving Castle REST API**: Site-to-site migration endpoints.\n  - `POST /connection`: Generates a 32-char transient token linked to a `blog_id` (1-hour TTL).\n  - `GET /schema?token=`: Returns `SHOW CREATE TABLE` statements for all tables matching the subsite prefix.\n  - `GET /data?token=&table=&page=`: Paginated row export (1000 rows/page) with prefix-based security validation.\n  - `POST /import`: Target-site endpoint that parses a connection URL, handshakes with source via `wp_remote_get`, and returns the discovered table manifest.\n  - `beforeunload` browser guard prevents accidental tab closure during active migrations.\n\n## [2026-04-23] (Evening)\n\n### Changed\n- **Holosweeper Polish**: Major visual upgrade to the Minesweeper spark.\n  - Added animated progress bar showing percentage of safe cells cleared (color-coded: cool → warm → hot).\n  - Cell reveal pop animation for satisfying cascade feedback.\n  - Flag pulse animation on placed flags.\n  - Refined cell hover states with cyan glassmorphic glow.\n  - Improved win/loss status badges with glow effects and best-time tracking.\n  - Simplified win condition to track revealed safe cells instead of requiring all flags placed.\n\n### Added\n- **Snake Rabbit AI**: The rabbit (food) now attempts to flee from the snake.\n  - Detects snake head proximity within 5 Manhattan-distance tiles.\n  - Rabbit turns warning-orange and shakes when scared.\n  - Up to 3 flee attempts per spawn with 60% trigger chance per tick.\n  - Flee direction scored by distance-from-head and center-pull to avoid corners.\n  - Smooth CSS transition on rabbit movement for visible "hop away" effect.\n  - Start screen updated with mechanic hint.\n\n## [2026-04-23]\n\n### Changed\n- **Glassmorphic Design Unification**: Standardized `.glass-panel` across COMPASS admin and YouMeOS runtime.\n  - Set canonical blur to `20px` and border to `rgba(255, 255, 255, 0.08)` in both `src/styles/core/_variables.scss` and `apps/youmeos/styles/_variables.scss`.\n  - Established a single global `.glass-panel` utility class in `src/styles/utilities/_utils.scss`.\n  - Removed 20+ redundant scoped `.glass-panel` definitions from Lead Magnet, Magic Formula, Questbook, Magic Cloak, Midnight Nerd, Magic Boomerang routes and Blackbox, Cookie Jar, Lemon Aid, Chronos, Local Produce, Tourguide sparks.\n  - Deprecated `x-glass-card` in favor of `<x-card class="glass-panel">`.\n\n### Added\n- **Questbook Comm-Link Core Enhancements**:\n  - **Global Shared Inbox**: Implemented `/inbox` REST API endpoint and `QuestbookInbox.vue` UI component to aggregate all recent incoming and outgoing communications across all contacts. Added real-time notification badges for unread inbound messages.\n  - **Template Manager**: Added a "Canned Responses" tab in `QuestbookSettings.vue` with full CRUD operations. Backed by `qb_communication_templates` via the `questbook/v1/settings` REST endpoints.\n  - **Unread State Management**: Injected `_qb_is_read` meta flags for all webhook and form submissions. Added `POST /questbook/v1/contacts/{id}/read` endpoint to clear unread states when an agent opens a profile.\n  - **Forminator Webform Integration**: Enhanced the existing WPMU DEV hook (`Xophz_Compass_Quests_WPMUDEV`) to parse inbound form submissions and inject them directly into the Comm-Link stream as `webform` logs.\n\n- **Solitaire Gamification**: Integrated `useXpStore` and `useSnackbar` into the Solitaire spark. Players are now rewarded with 520 GP and a notification toast when they win a game.\n\n## [2026-04-22]### Added\n- **Jukebox Station Expansion**: Added several new radio stations (Chillhop, Space Station, Synphaera, DEF CON Radio) and implemented a dynamic genre-based grouping system in the track selector menu for easier navigation.\n- **Questbook CRM × Forminator Integration**: End-to-end pipeline connecting form submissions to the CRM.\n  - **Submission Capture Hook**: `Xophz_Compass_Quests_WPMUDEV` hooks into `forminator_custom_form_submit_before_set_fields` to intercept entries with identity resolution (logged-in → link by `_qb_user_id`, logged-out → resolve by email).\n  - **Unverified Protocol**: Logged-out submissions matching existing contacts are quarantined as `_qb_unverified_entry` to prevent black-hat data injection. Verified on login via Claim & Confirm flow.\n  - **Schema Mapper UI** (`v-crm-sync.vue`): New "Questbook Sync" tab in the Magic Formula spark for per-form field mapping. Administrators map Forminator field IDs to CRM core fields (`_qb_raw_email`, `first_name`, `_qb_phone`).\n  - **Mappings REST API**: `GET/POST /wp-json/magic-formula/v1/mappings` for persisting mapping configurations as `questbook_form_mappings` wp_option.\n  - **Dynamic Field Resolution**: The CRM hook reads mappings at runtime, falling back to convention (`email-1`, `name-1`) when no explicit mapping exists.\n  - **Entry Retrieval Endpoints**: `GET /questbook/v1/contacts/{id}/entries` and `GET /questbook/v1/contacts/{id}/unverified` for fetching linked Forminator submissions.\n  - **Claim API**: `POST /questbook/v1/contacts/{id}/claim` with `approve`/`reject` actions to resolve unverified entries.\n- **Questbook CRM Documentation**: Created `docs/compass/plugins/Questbook-CRM-System.md` covering full data model, identity resolution strategy, REST API surface, and Forminator integration patterns.\n\n### Changed\n- **Magic Formula Documentation**: Updated `docs/compass/plugins/magic-formula-system.md` with AI Conjure endpoint, Questbook Sync UI, `/mappings` endpoints, and complete spark file structure.\n- **WP Admin Spark**: Implemented a minimal, clean spark interface for the WordPress Admin dashboard within YouMeOS.\n  - Used `x-iframe` and injected custom CSS (`wp-admin-iframe-patch`) to hide native WP layout components (admin menu, toolbar, etc.) and seamlessly blend the iframe into the YouMeOS ecosystem.\n  - Replicated the WordPress Admin sidebar navigation using `v-window` to allow drilling down through menu items (Dashboard, Posts, Media, Appearance, Settings, etc.).\n  - Enabled native next/back/refresh actions mapping directly to the `x-iframe` content window history.\n  - Registered the spark as "WP Admin" in `launcher.store.ts` (adminOnly: true) and `app/index.ts`.\n\n### Fixed\n- **Jukebox Audio Stream**: Replaced the deprecated/broken `streamafrica.net` Lofi Girl radio stream with a highly reliable `laut.fm` Lofi stream to restore the background radio functionality.\n\n## [2026-04-21]\n\n### Added\n- **Wizards Tower Spark**: New developer-only spark providing a feature flag management UI for controlling spark visibility across access tiers.\n  - **Feature Flag Registry** (`src/config/feature-flags.ts`): Central declaration of every spark\'s status (`stable`, `beta`, `alpha`, `disabled`). Supports localStorage overrides merged at module load.\n  - **Access Tier System** (`src/config/feature-access.ts`): Four-tier access model — Public, Beta Tester, Alpha Tester, Developer. Developer tier auto-enabled on localhost.\n  - **Build-Time Filtering**: Disabled features are excluded from the system registry and launcher store, enabling tree-shaking in production builds.\n  - **Launcher Integration**: `visibleApps` in `launcher.store.ts` now filters through `canAccess()` based on feature status and the resolved access tier.\n  - **System Registry Gating**: `app/index.ts` filters `systemRegistry` through feature flags, preventing disabled spark components from loading.\n  - **Wizards Tower UI**: Two-view spark (Feature Flags + Access Tier) with search, inline status dropdowns, quick toggle, and save-with-reload workflow.\n\n### Fixed\n- **Accessibility Options Consolidation**: Centralized all 5 accessibility CSS overrides into `src/styles/accessibility.scss`. Previously, "Accessible Colors" only worked when the Welcome spark was loaded (CSS was trapped in `:global()` inside `welcome-u-spark.vue`), and "Right Align Rails" only existed in `u-rail.vue`. All options now work globally regardless of which sparks are open.\n  - **Accessible Colors**: Moved gradient-text overrides and semantic color replacements to global stylesheet.\n  - **High Contrast**: Expanded coverage to include `u-rail`, `v-navigation-drawer`, `v-app-bar`, `v-bottom-navigation`, and `.opacity-60`.\n  - **Right Align Rails**: Centralized from component-scoped to global, covering both `.u-rail` and `.v-navigation-drawer--rail`.\n- **Xophz_Compass_Updater Resilience**: Implemented a "Stale-While-Revalidate" fallback mechanism for GitHub plugin updates. The system now stores the last known good release in the `wp_options` table, preventing updates from "disappearing" if the GitHub API hits a rate limit or returns a temporary error.\n- **Update Cache Recovery**: Reduced the error cache TTL from 1 hour to 5 minutes to ensure faster recovery from transient network issues.\n- **Force Refresh Logic**: Improved the reliability of the `?xophz_force_update=1` parameter to ensure a complete bypass of all caches when manually triggered.\n\n## [2026-04-18]\n\n### Added\n- **Omega Source Spark**: New identity spark serving as a public-facing virtual passport / business card. Three-tab layout: Passport (avatar, headline, pulse rating, stat bar, reflections), Growth (expert tags, credentials, skills, resources, references), Links (social URLs, wallet address). Registered in system registry and Launch Pad under the "Gateways" category.\n\n## [2026-04-17]\n\n### Added\n- **Sovereign Utility Documentation**: Added `youmeos_user_guides_swiss_army_knife.md` to directly answer the "What good does it do me?" question, framing YouMeOS as the ultimate "Swiss Army Knife for life" that enables true digital sovereignty.\n\n## [2026-04-16]\n\n### Added\n- **Dirt Digital Mineral Economy**: Documented the core tokenomic philosophy for YouMeOS. The base currency ("Dirt") is pegged to a global fiat/commodity average ("Earth Cent") to ensure stable, borderless micro-transactions. Established the gamified synthesis hierarchy (Dirt -> Quartz -> Gems) and the "System Reserve" protocol to prevent oligarchic wealth hoarding.\n- **Tokenomics Milestone**: Updated the Web3 Vision Roadmap with the new Dirt economy architecture.\n\n### Fixed\n- **Environment Configuration Sync**: Audited and synchronized `.env` and `.youmeos-env-keys.php` to ensure credential consistency.\n- **Pinata RO Key Cleanup**: Removed redundant/duplicate Pinata Read-Only API keys from `.env` that were incorrectly mirroring the master keys.\n- **Discord Key Standardization**: Updated `.youmeos-env-keys.php` to include `VITE_` prefixed Discord keys, maintaining compatibility with frontend environment expectations on production.\n### Changed\n- **Spark Rebranding**: Renamed the "Box Office" spark to "The w⁴ Protocol" across the system registry, launcher store, and window title. Updated the internal ID from `boxes-u` to `tesseract`, renamed the core component files, and styled it with a classic Dr. Who "TARDIS blue" (`#003b6f`) and `fad fa-police-box` icon.\n- **Identity Carousel Evolution**: Integrated the "w⁴ Protocol" as the bridge card between digital identity and physical sovereignty. Replaced the generic final identity card with a signature green (`rgb(61, 238, 152)`) w⁴ Protocol upsell that links directly to the Platform Hosting tab.\n- **BlackBOX Branding Refinement**: Standardized the BlackBOX card tier with a legacy-consistent slate gradient, custom bolding (bold "BOX"), and forced black icons/high-contrast ribbons.\n- **Atomic Color Improvements**: Refactored `u-box-card.vue` to dynamically respect the `color` prop for all header elements (icon, price, watermark) while maintaining high-contrast overrides for the black tier.\n- **Welcome Spark Mobile UX**: Refactored secondary tabs (Personalize UX, Gateway Navigation, etc.) to use a "Float-Right" icon layout (no box) with ultra-bold ("black") titles and structured paragraph descriptions for a premium, integrated feel.\n\n## [2026-04-15]\n\n### Added\n- **Plugin Versions REST Endpoint**: New `GET /xophz-compass/v1/versions` endpoint returns version info for all COMPASS suite plugins. Supports optional `?slug=event-horizon` filter for individual lookups. Uses WordPress\'s native `get_plugins()` under the hood.\n- **Version Injection**: Both COMPASS admin and Event Horizon public shell now inject `compassVersion` and `eventHorizonVersion` into `window.xophzCompassSettings`.\n\n### Changed\n- **Legacy Asset Migration**: Extracted the 22 textures, 6 skybox images, 4 lensflare images, and audio tracks the modern engine still needs from the `youmeos_legacy` submodule into a new `public/deprecated/` directory (43MB vs 75MB original). This directory ships with the plugin package, eliminating the submodule dependency on production. Created a slim `manifest.json` with only audio config (no legacy scripts/styles).\n\n### Fixed\n- **YouMeOS System Bar Version**: Corrected the version displayed in the Event Horizon system bar bottom-left. Was showing the monorepo `package.json` version (`26.4.15.1118`); now shows the actual PHP plugin version from `XOPHZ_COMPASS_EVENT_HORIZON_VERSION`.\n- **Terminal Boot Banner**: HoloShell terminal boot message now shows the correct Event Horizon version instead of the monorepo version.\n- **Plugin Updates**: Added `update_plugins_github.com` hook to `Xophz_Compass_Updater` to prevent WordPress 5.8+ from dynamically stripping `xophz-compass` plugins from the updates transient due to the presence of the `Update URI` header.\n\n## [2026-04-14]\n\n### Added\n- **Passport REST API**: New `class-xophz-compass-passport-api.php` with `GET/POST /xophz/v1/passport` (authenticated) and `GET /xophz/v1/passport/public/{user_id}` (public) endpoints. Stores profile CID, wallet address, ENS name, and MMO stats in `wp_usermeta`.\n- **Server-Side CID Persistence**: Published IPFS CIDs are now saved to both `localStorage` (fast) and `wp_usermeta` (permanent) via the Passport API.\n- **Silent Wallet Reconnect**: `reconnectWallet()` uses `eth_accounts` (no popup) to auto-restore MetaMask connection on page load without requiring user interaction.\n- **Inspect Backpack**: Added "Inspect Backpack" button to the IPFS card that opens the Local Produce spark via `portal:fly` to visualize localStorage contents.\n- **SubtleCrypto Guard**: ENS namehash functions now gracefully degrade when `crypto.subtle` is unavailable (HTTP dev or SES lockdown environments).\n\n### Changed\n- **YouMeOS Legacy Relocation**: Moved `youmeos_legacy` engine (75MB) to its own repository (`hallofthegods/youmeos-legacy`) and re-integrated it as a git submodule. This prevents the legacy engine from being included in the primary plugin bundle, reducing the bundle size significantly while still allowing for optional inclusion during development.\n- **Passport UI Reorder**: Cards now display Wallet → IPFS Backpack → ENS Lookup (moved ENS below IPFS).\n- **Profile Data Source**: `handlePublishProfile` now builds the IPFS profile from server-hydrated user data instead of hardcoded mock values.\n- **Nonce Pattern**: Unified REST API nonce usage via `getCompassNonce()` helper reading from `xophzCompassSettings.nonce`.\n\n## [2026-04-12]\n\n### Fixed\n- **Error Template Conversion**: Resolved a PHP Fatal error ("Object of class WP_Error could not be converted to string") in `error-template.php` by correctly parsing `WP_Error` objects using `is_wp_error()` and extracting the nested messages instead of blindly echoing them.\n\n## [2026-04-11]\n\n### Added\n- **Daily Final Versioning**: Implemented a new GitHub Actions workflow (`daily-final-version.yml`) that triggers at 11:59 PM every day. It generates a "final" version tag (e.g., `v26.4.11`) without the `rc` suffix and updates `package.json` accordingly.\n- **Automated Versioning**: Created a GitHub Action workflow to automatically update the version string in `package.json` and generate Git tags upon every push to the `main` branch. The format is `vYY.M.DrcTS`, where `TS` represents the total seconds elapsed in the day (UTC), ensuring unique and time-sorted tags.\n- **Welcome-U Spark Enhancement**: Added a "Personalize UX" section within the Welcome guide to simplify UI customization. Designed with a clear, card-based layout pointing users toward Appearance, Window Behavior, Sound & Audio, and Date & Time.\n\n### Changed\n- **Version Formatting**: Standardized version tags across all automated workflows to use non-leading-zero month/day formats (e.g., `v26.4.11` instead of `v26.04.11`). This aligns with semver best practices and the project\'s new release pattern.\n- **Spark Splash Background**: Removed the forced black background and radial gradient from the `TSparkSplash` blueprint. The component now defaults to transparency, allowing for better integration with 3D canvas backgrounds and glassmorphic designs across all sparks.\n- **Spark Splash Prop Cleanup**: Deprecated and removed the redundant `transparent` prop from `TSparkSplash` and cleaned up its usages in `NoosphereEmit` and `NexusNetworkCommand`.\n\n## [2026-04-09]\n\n### Added\n- **Classic WP Admin Overrides**: Expanded the Compass Admin CSS theme system (`compass-admin.css`) to completely take over classic WordPress UI elements. Added comprehensive targeting for `.wp-list-table`, `.notice`, `.button-primary`, tablenav components, legacy dashboard widgets (`#dashboard_activity`, `#dashboard_primary`), WPMUDEV Beehive widgets (`.beehive-metric-grid`, SUI tabs, `.sui-notification`), and enforced the `.color-gold` palette on all native links to consistently enforce the glassmorphic and dark aesthetic globally.\n- **Plugin Metadata Stacking**: Refactored the `plugin-reveal-circle` to stack version and author metadata vertically, improving layout clarity within the glassmorphic expand state.\n- **Smart Icon Resolver**: Implemented a dynamic icon resolution engine in `x-magic-toast`. It now intelligently maps plain strings (e.g., "bomb-bag", "compass") to their official plugin SVG icons, while maintaining fallback support for FontAwesome classes and direct image paths.\n- **Improved Hint Imagery**: Updated the global "explore-welcome" hint to use the official COMPASS brand icon via the new smart resolver.\n\n- **Software Manager**: Reimagined the "Software Suite" page as a high-fidelity software manager with a master-detail layout.\n- **Dynamic Plugin Data**: Integrated the software manager with `compassStore.pluginList`, displaying version, author, and description directly from active plugins.\n- **Teleport Animation**: Integrated the `x-sequence-icon` primitive into the Software Suite category menu, specifically adding the animated teleport sequence for the "Command Deck" category.\n- **Global Scrolling**: Refactored the COMPASS welcome screen (`compass.vue`) to support full-page scrolling, resolving navigation overlap issues across all tabs (Accelerate, Software Suite).\n\n### Changed\n- **Software Categorization**: Updated `COMPASS_CATEGORIES` in `launcher.store.ts` to map plugins to thematic categories (True North, Command Deck, Trajectory, Wizard\'s Tower, Castle Walls) based on the project\'s design language.\n- **Layout Architecture**: Migrated to a sticky sidebar navigation for the Software Manager to keep categories accessible while browsing long module lists.\n\n### Fixed\n- **Software Manager Routing**: Fixed bug where plugins with mismatched text domains and routes (e.g., quests vs. questbook) were incorrectly filtered out of the suite categories.\n\n## [2026-04-07]\n\n### Added\n- **Trenchess Spark**: Added a new Spark for the game "Trenchess", loading via an iframe to `trenchess.forthexp.com`. Integrated into the system app registry and available in the App Launcher under the Games category.\n- **YouMeOS Admin Bar Button**: Added a branded YouMeOS button to the WordPress admin bar, positioned before the WP logo. Features the galaxy icon with gradient-text label and responsive hiding on mobile.\n- **Logos Embed Mode**: When Compass is launched from the Logos spark, the WordPress admin menu, toolbar, and footer are hidden automatically so Compass fills the full iframe viewport. Triggered by `&embed=1` query param on the Compass URL.\n- **Digital Picnic Category**: Introduced a new thematic category in the App Launcher to bundle the "Colored Popcorn", "Beat Salad", "Alphabet Soup", and "Lemonade" Sparks.\n- **Authenticity & Licensing Infrastructure**: New settings module for managing Youniverse licenses.\n- **Licensing State**: Integrated `license` state into `CompassStore` with persistence via `localStorage`.\n- **Sovereign Tiers**: Defined `Agent`, `Sentinel`, and `Architect` tiers for user access management.\n- **AuthenticityView**: New glassmorphic UI module for license activation and status tracking.\n- **My Compass Rail Integration**: Dedicated "My Compass" entry on the main navigation rail, appearing dynamically based on license accessibility.\n\n### Changed\n- **Rebranding**: Renamed "Steward" tier to **"Agent"** across the entire ecosystem.\n- **Welcome Screen**: Updated `Welcome-U` spark to reflect the new Sovereign Tiers nomenclature.\n- **Navigation Rail Order**: Reprioritized "My Compass" as the primary navigation item, moving it to the top of the main rail above Nucleos.\n- **Bomb Bag Categorization**: Reclassified "Bomb Bag" from "Communication" to "Trajectory" in the App Launcher and Spark Registry.\n- **Trajectory Categorization**: Renamed "Targeting" category to "Trajectory" across the ecosystem plugins (Bazaar, Silver Arrow, Bomb Bag, Lead Magnet, Magic Formulass).\n- **Wizards Categorization**: Renamed "Wizards" category to "Wizard\'s Tower" and replaced the wizard hat icon with a stone tower (rook) icon.\n- **Enchiridion Categorization**: Reclassified "Enchiridion" from "Command Deck" to "Wizard\'s Tower" in the core plugin metadata.\n\n\n### Fixed\n- **Settings Stability**: Resolved runtime errors in `AuthenticityView` by implementing safety checks for store state access.\n- **Slot Implementation**: Optimized `SettingsApp` window navigation to prevent slot-invocation warnings.\n- **Colored Popcorn Performance**: Achieved zero-lag drawing by decoupling the high-frequency stroke logic from the Vue reactivity system. Optimized canvas context state updates for maximum fluidity.\n\n### Added\n- **Rainbow Mode**: Implemented a true hue-cycling "Rainbow" brush for the Rainbow Pi (Paint) app, including a neon-animated tool button.\n\n## [2026-04-06]\n\n### Changed\n\n- **Brand Color Standardization**: Integrated the "Hall of the Gods" brand gold (`#d9be6f`) across the YouMeOS ecosystem.\n  - Added `hog-gold` to the Vuetify theme configuration in `src/engine/vuetify.ts`.\n  - Defined `--color-hog-gold` CSS variable in `src/styles/core/_colors.scss`.\n  - Updated the **Enter Youniverse** icon color in `WelcomeLanding.vue` and `u-account-drawer.vue` to use the new brand gold.\n- **Helios Starburst Calibration**: Updated the Starburst (Sunburst) chart in `o-helios-sunburst.vue` with a new pastel palette.\n  - Derived 7 harmonious pastel shades from the brand logo gradient.\n  - Refined chart glow effects for a softer, integrated visual feel.\n\n## [2026-04-02]\n\n### Added\n\n- **Launch Pad Sidebar**: Extended the Launch Pad with a category sidebar using the `u-window` `#nav-content` slot.\n  - Added `AppCategory` type and `APP_CATEGORIES` constant to `launcher.store.ts`.\n  - Each `LauncherApp` now carries a `category` field (portal, utility, developer, communication).\n  - Store exposes `filteredApps`, `activeCategory`, and `setCategory` for reactive filtering.\n  - Default view shows all apps; selecting a category filters the grid.\n  - Sidebar uses the existing collapsible rail with pin/expand-on-hover behavior.\n\n### Changed\n\n- **Welcome Spark Icon**: Changed the welcome spark\'s icon to `rocket-launch` while keeping the "Welcome" tab internal icon as `hand-spock`.\n  - Updated the main `u-window` icon to `fal fa-rocket-launch`.\n  - Reverted the "Welcome" navigation tab icon to `fad fa-hand-spock`.\n\n## [2026-04-01]\n\n### Changed\n\n- **Desktop Shortcuts Transition**: Transformed the primary dashboard and welcome overlay action panels from oversized glass cards into sleek, OS-native desktop shortcuts (`u-shortcut.vue`).\n  - Added new OS-style shortcut primitive with subtle hover blur, scaling animations, and refined text-shadow typography.\n  - Replaced `u-glass-card` elements in `WelcomeLanding.vue` and `PortalDashboard.vue` with native-feeling application icons.\n  - Simplified the grid layout to a fluid flex row, mimicking a true desktop environment.\n\n### Added\n\n- **Spark Core Navigation**: Added a cinematic camera "fly to" event when clicking the core dashboard tabs inside the specific sparks:\n  - Clicking "My Center" in the Helios spark flies the camera to the sun.\n  - Clicking "My Nexus" in the Nexos spark flies the camera to the Nexos sphere.\n  - Clicking "The Observer" in the Noosphere spark flies the camera to the Noosphere galaxy.\n\n### Fixed\n\n- **YouMeOS Window Borders & Spacing**: Removed the dashed/dotted border and outline from windows when maximized.\n  - Added `border: none !important` and `outline: none !important` to `.u-window-wrapper--maximized`.\n  - Specifically disabled the library\'s (`vue3-draggable-resizable`) default active outline using `::before` and `::after` pseudo-elements.\n  - Ensured internal `.u-window` also sheds its border in maximized state for a seamless full-screen experience.\n  - **Bottom Bar Layout Fix**: Converted the system bar (`u-system-bar`) from a `v-app-bar` to a fixed `v-sheet`. This removes it from Vuetify\'s layout grid, ensuring it no longer reserves space at the bottom and allowing maximized windows to utilize the full viewport height.\n  - Increased system bar `z-index` to `9999` for consistent accessibility over windows.\n\n## [2026-03-31]\n\n### Added\n\n- **YouMeOS Portal Page Configuration**: Added a WordPress Settings page (Settings → YouMeOS) to configure where YouMeOS loads on the front-end.\n  - **Routes Only** (default): YouMeOS only loads on `/youmeos/` and `/os/` as before.\n  - **Homepage**: Replaces the site\'s front page with the full YouMeOS portal.\n  - **Specific Page**: Load YouMeOS on any WordPress page via a dropdown selector.\n  - Settings stored via WP Options API (`youmeos_load_mode`, `youmeos_load_page_id`).\n  - Rewrite rules auto-flush when settings change.\n  - Refactored `class-xophz-compass-event-horizon-public.php` into clean named boolean methods (`is_configured_page`, `resolve_app_base`, `render_youmeos_shell`).\n\n## [2026-03-30]\n\n### Fixed\n\n- **YouMeOS Star Rendering Performance**: Converted all WebGPU particle generators from InstancedMesh billboard quads back to THREE.Points, eliminating ~720k unnecessary vertices per frame.\n  - `milky-way.ts`: 40k quads → 40k points (160k → 40k vertices)\n  - `background-stars.ts`: 119k quads → 119k points (478k → 119k vertices, biggest win)\n  - `starfield.ts`: 5k quads → 5k points (20k → 5k vertices)\n  - `interstellar-dust.ts`: 10k quads → 10k points (40k → 10k vertices)\n  - `interstellar-gas.ts`: 5k quads → 2k points (20k → 2k vertices, matched WebGL gas structure)\n  - Added early `.visible = false` cutoff at opacity ≤ 0.01 across all generators to prevent transparent geometry from consuming GPU cycles.\n  - Restored proper spectral color lookup in Hipparcos stars that was lost during the InstancedMesh migration.\n\n### Added\n\n- **Multi-Tab Audio Deduplication**: Implemented `useTabLeader` composable using BroadcastChannel API + localStorage heartbeat to elect a single "leader" tab across all open YouMeOS windows. Only the leader tab plays audio, preventing duplicate sound when multiple tabs are open.\n  - Leader election with automatic failover when the leader tab closes or becomes stale (5s threshold).\n  - Integrated into `useAudio` — gates `unlockAudio`, `togglePlay`, and auto-next-track behind `isLeader`.\n  - Exposes `isLeader` ref from `useAudio` for downstream consumption.\n\n### Fixed\n\n- **YouMeOS Framerate Drops**: Resolved a severe engine performance issue where `setupSkybox` was inadvertently called twice during `engine.init()`. This spawned double the post-processing geometries, causing massive overdraw and slashing the framerate.\n- **Sun Render Flickering (Texture Ping-Ponging)**: Addressed an insidious strobe-like flashing across the entire solar surface caused by `fract` wrap-around clamping. Switched the U-coordinate color mapping from a rigid `clamp(fract())` logic (which abruptly jumped values at the boundary edge) to a continuous `mix` triangle wave (ping-pong animation). This ensures the sun boils and shifts color completely seamlessly without hard jump cuts.\n- **Sun Render Flickering (Depth Pre-Pass)**: Eliminated overlapping precision Z-fighting artifacts on the Sun by explicitly assigning `depthTest = false` to all additive atmospheric layers (Flares, Halo, Corona). They now reliably render pure bloom over the solar body regardless of the billboard\'s depth collision with the 3D sphere.\n- **Solar Flare Polygons**: Optimized the `TorusGeometry` for the solar flares (reduced from 60x90 segments to 30x45) and reduced the cluster count from 6 to 4 flares per star, massively reducing vertex overhead without sacrificing the visual depth of the additive blend.\n\n\n### Fixed\n\n- **YouMeOS Guided Tour**: Restored the functionality of the "Start Tour" button and the touring mechanics to map accurately to the legacy jQuery engine version.\n  - **Camera Tween Safety**: Fixed `controls.flyTo` auto-unlocking `tourMode` upon completion. The camera is now safely locked during the entire duration of the `restTime` interval pauses.\n  - **Pan Persistence Bug**: Hardcoded `{ panX: 0, panY: 0 }` into the very first "AWAKENING" sequence to ensure the tour doesn\'t start off-center if the user previously panned around the galaxy.\n  - **UI Escape Hatch**: Restored the clickable "Skip Tour" button to the modern theater DOM. This binds directly to `createTheater()` and allows users to safely bypass the tour, killing all `window.TWEEN` tasks and restoring standard interactive controls.\n\n## [2026-03-11]\n\n### Added\n\n- **Bomb Bag News Drip System**: Complete buildout of the email marketing and automated drip sequence engine.\n  - **Drip Sequences**: New DB tables (`bomb_bag_drip_sequences`, `bomb_bag_drip_steps`, `bomb_bag_drip_enrollments`), full REST API with CRUD, step reordering, enrollment management, and per-sequence analytics.\n  - **Email Template Library**: New `bomb_bag_templates` table with REST API for template CRUD. Seeds 3 default templates (Modern Newsletter, Welcome Series, Minimal Text) on activation.\n  - **Campaign Scheduling**: Wired up the existing `scheduled_at` column with a 5-minute WP-Cron job. Campaigns can now be scheduled for future delivery via the REST API.\n  - **Email Provider Implementations**: New `class-bomb-bag-email-providers.php` with actual SendGrid (HTTP API), Mailgun (HTTP API), and Custom SMTP (PHPMailer hook) support. All sending paths now route through this centralized provider class.\n  - **Drip Builder UI**: New Vue timeline-based sequence builder (`bomb-bag-drip-builder.vue`) with step delay configuration, subject/content editing, activate/pause controls.\n  - **Drip List UI**: New Vue view (`bomb-bag-drips.vue`) displaying sequence cards with status, enrollment stats, and trigger type.\n  - **Template Library UI**: New Vue view (`bomb-bag-templates.vue`) with category filtering, scaled HTML preview thumbnails, create/edit/duplicate/delete dialogs, and full-screen preview.\n  - **TypeScript Types**: Comprehensive typed interfaces for all new entities (`DripSequence`, `DripStep`, `DripEnrollment`, `DripAnalytics`, `EmailTemplate`, etc.) with discriminated union types for statuses and triggers.\n  - **Store Expansion**: Pinia store extended with 15+ new actions for drip and template management.\n\n### Fixed\n\n- **WordPress Translation Notice (WP 6.7)**: Resolved "Translation loading for the woocommerce domain was triggered too early" notices and potential "headers already sent" warnings on WordPress 6.7.0.\n  - **Bazaar Reports Optimization**: Delayed WooCommerce report class inclusions (`WC_Admin_Report`, etc.) within `Xophz_Compass_Bazaar_Admin_Reports` until they are actually required by AJAX handlers.\n  - **Submenu Registration Refactor**: Updated `Xophz_Compass::add_submenu` to use `get_plugin_data()` for specific plugin files instead of `get_plugins()`, avoiding the expensive and problematic scanning of all plugin headers during menu registration.\n  - **Delayed Execution**: Ensured all menu registration and plugin header parsing is performed within the `admin_menu` action hook (priority 11), well after the WordPress `init` cycle.\n\n### Changed\n\n- **Route Name Safety**: Prefixed all Bomb Bag route names with "Bomb Bag" (e.g., `Dashboard` → `Bomb Bag Dashboard`) to prevent collision with other plugins. Extracted to typed `BOMB_BAG_ROUTE_NAMES` constant.\n- **Email Sending Centralization**: Replaced all raw `wp_mail()` calls in campaign batch processing and test emails with the new `Email_Providers::send()` static method.\n- **Dashboard Stats**: Added `active_drips` count to the stats response.\n- **Documentation**: Comprehensive rewrite of `Bomb-Bag-System.md` covering all 10 DB tables, REST API surface, PHP class map, and TypeScript type catalog.\n\n## [2026-03-11]\n\n### Added\n\n- **Bug Net Core Engine**: Built the foundational custom post type (`compass_bug`) for the Bug Net plugin to track system errors.\n  - Generates a "Bug Net" interface in the WordPress admin panel with a custom bug icon.\n  - Implements a meta box for "Bug Details" including `bug_status` (New, In Progress, Resolved, Closed), `bug_priority` (Low, Medium, High, Critical), and `bug_environment`.\n  - Exposes the bug data via the WordPress REST API for front-end Vue.js integration.\n\n### Changed\n\n- **Enchiridion UI/UX Reimagination**: Complete visual overhaul of the Enchiridion (Recipe Book) plugin across all three primary views.\n  - **Dashboard**: Migrated to x-atoms (`x-glass-card`, `x-btn`, `x-avatar`, `x-icon`, `x-chip`). Stat cards now feature HUD monospace values with Arcane Violet (`#7C4DFF`) neon glow, oversized ghost icons, and `arcane-glow` hover effects. Category overview cards display split active/dormant chip counts.\n  - **Recipes**: Recipe cards use `x-glass-card` with `pulse-active` neon ring animation when enabled. Category headers feature tonal avatars with gradient divider lines. Switch labels replaced with HUD-styled `x-chip` status badges.\n  - **Custom Code**: Code editor panels now have themed gradient header bars (blue for CSS, amber for JS) with language icons. Save button features neon glow on enabled state. Timestamp uses monospace violet styling with green dot indicator.\n  - **SCSS Foundation**: New `_enchiridion.scss` with `.hud-value`, `.hud-violet`, `.arcane-glow`, `.pulse-active`, `.code-panel-header`, `.save-btn-glow`, `.category-divider`, and `.stat-icon-bg` utility classes.\n\n- **Magic Boomerang UI/UX**: Completely overhauled the Magic Boomerang dashboard to align with the Project Compass high-tech Starship aesthetics.\n  - Upgraded standard Vuetify cards to `x-glass-card` for a deep, premium glassmorphism layout.\n  - Implemented `.hud-value` and `.hud-cyan` SCSS utility classes to format critical data readouts (traffic, server load, visitors) with technical monospace fonts and neon glows.\n\n## [2026-03-09]\n\n### Added\n\n- **Plugin Documentation**: Defined the functional separation between the Magic Mirror and Moving Castle plugins.\n  - Created `docs/plugins/Magic-Mirror-System.md` focusing on SEO/performance competitor benchmarking ("Fairest of them all").\n  - Renamed and updated `docs/plugins/Moving-Castle-System.md` to focus on WordPress multisite management, environments, staging escapes, and on-the-fly theme switching.\n  \n### Fixed\n\n- **Sass Deprecation Migration**: Migrated legacy `@import` rules to the modern `@use` syntax in `u-window.vue` and `u-window-shell.vue` to resolve Dart Sass 3.0.0 deprecation warnings. Verified that all custom SCSS and Vue files in `src/` and `apps/` now use modern Sass module syntax.\n\n## [2026-02-06]\n\n\n### Changed\n\n- **Bootstrap Cleanup**: Comprehensively removed legacy Bootstrap variables, mixins, and utilities from the codebase.\n  - **Variables**: Gutted `src/styles/core/_variables.scss`, retaining only essential color palette, glassmorphism tokens, and layout basics. Removed unused maps (`$theme-colors`, `$font-sizes`) and component-specific variables.\n  - **Mixins**: Cleaned `src/styles/core/_mixins.scss`, removing 10+ legacy helpers (badges, buttons, variants) while preserving critical `glass` and device breakpoints.\n  - **Utilities**: Refactored `src/styles/utilities/_utils.scss` to remove 600+ lines of duplicate utility classes, keeping only `thin-scroll`, `glass` helpers, and standard Font Awesome fixes.\n  - **Colors**: Decoupled `src/styles/core/_colors.scss` from the now-deleted Bootstrap `$theme-colors` map.\n  - **Regression Fix**: Restored critical layout variables (`$toolbar-height`, `$sm-toolbar-height`, `$breadcrumb-height`) that were inadvertently removed during cleanup, ensuring `app-shell` and `routes-navigation-drawer` compile correctly.\n\n## [2026-02-05]\n\n### Changed\n\n- **WordPress Style Isolation**: Implemented Enhanced Scoping strategy to eliminate conflicts between WordPress admin styles and Vuetify components.\n  - **Consolidated Form Resets**: Created unified `src/styles/vendor/_wp-form-reset.scss` to eliminate duplicate code previously scattered across `_reset.scss` and `_wordpress.scss`. All form element resets now live in a single, well-documented source.\n  - **Aggressive PHP Dequeuing**: Reduced WordPress admin stylesheets to the bare minimum (`dashicons`, `admin-bar`, `button-color`). Deregistered problematic core styles (`wp-admin`, `admin-menu`, `colors`, `forms`, `common`) that were applying white backgrounds, borders, and padding to form inputs, preventing Vuetify\'s dark theme from displaying correctly.\n  - **Optimized Load Order**: Reorganized `app.scss` to ensure WordPress vendor styles load first (lowest priority) and COMPASS utilities load last (highest priority), guaranteeing proper style precedence through CSS cascade source order.\n  - **Result**: Text fields, buttons, selects, dialogs, and all Vuetify form components now render with proper glassmorphic dark styling instead of WordPress\'s white-background admin styles bleeding through.\n\n## [2026-02-04]\n\n\n### Changed\n\n- **Alphabet Soup Table**: Refined the "Quick Edit" action in the posts table.\n  - Converted the "Quick Edit" text button to an icon button (`fas fa-bolt`) for a cleaner UI.\n  - Changed the behavior to toggle the quick edit row visibility (expand/collapse) instead of only opening it.\n  - Added visual feedback (active state color) to the quick edit button.\n\n## [2026-02-03]\n\n### Changed\n\n- **Compass Admin Styles**: Hidden standard WordPress notices (e.g., `.notice`, `.notice-warning`, `.update-nag`, `.inline`) specifically on the Compass dashboard page (`.toplevel_page_xophz-compass`) to provide a cleaner, app-like experience.\n\n## [2026-01-30]\n\n### Changed\n\n- **Global Glass Styling**: Updated the `u-window` component to use the system-wide transparent "glass" aesthetic (`42,42,42` base).\n  - Wired `u-window` SCSS to use `--glass-bg`, `--glass-blur`, and `--glass-border` CSS variables.\n  - Ensured the window style aligns with the "Answer to the Universe" design philosophy.\n- **Settings App**: Updated the Settings application (`settings-app.vue`) to use `x-list` and `x-list-item` primitives within its navigation rail, ensuring visual consistency with the glass theme.\n  - Also fixed relative import paths in the system registry `index.ts`.\n- **X-Switch Compatibility**: Resolved a Vue warning and `IndexSizeError` caused by an invalid `size="large"` prop on `x-switch` in `SoundView.vue` and `AppearanceView.vue`. Vuetify\'s `v-switch` does not support the `size` prop, which was being passed down to the underlying HTML `<input>`, causing browser-level validation errors.\n\n### Added\n\n- **Portal Exit Button**: Added a dedicated "Exit Portal" button to the `UPortalAppBar` component.\n  - Linked to a new `exitPortal` function that clears portal navigation state and returns the user to the absolute application root (`/welcome`).\n  - Updated the `goBack` function to also fallback to the app root if history is empty.\n  - Utilizes the `fad fa-portal-exit` icon for clear visual intent.\n  - Refactored `UPortalAppBar` to use the native Vuetify `append` slot, simplifying the template.\n- **Spark Library Improvements**: Refined the Library Explore view.\n  - Renamed "Browse Apps" to "Browse Sparks" to align with project nomenclature.\n  - Enforced `min-height: 100%` on the explore view to resolve layout collapse issues.\n\n## [2026-01-29]\n\n### Fixed\n\n- **System Bar Positioning**: Resolved an issue where the bottom system bar was not positioned at the very bottom of the screen.\n  - Added explicit `order="10"` to `u-system-bar` to ensure it renders outside of the `u-portal-navigation` in the layout stack.\n- **Window Stacking & Z-Index Orchestration**: Resolved an issue where selecting a window from the User Rail would not consistently bring it to the foreground.\n  - Implemented explicit `z-index` binding in `u-window.vue` to override third-party component internal state.\n  - Increased the base `highestZIndex` in `window.store.ts` to 500 to ensure windows always stack above secondary UI elements while remaining beneath primary system bars and drawers.\n  - Synchronized the `focusWindow` logic across the User Rail and Webtop environment.\n- **Enhanced Window Interaction**: Added standard OS behavior to the `u-window-bar` and User Rail.\n  - **Rail Toggle**: Clicking an active window\'s icon in the User Rail now correctly toggles its minimization state (Minimize if active, Restore/Focus if inactive).\n  - Double-clicking the window title bar now toggles between Maximized and Restored states.\n  - **Bug Fix**: Restriced window dragging strictly to the title bar. Interacting with internal window content (sliders, buttons, etc.) no longer triggers a global window drag by implementing event propagation hijacking on the window shell.\n  - **Premium Resizing**: Eliminated the visible "white box" resize marks. The window is now resizable from any edge or corner via large, invisible hit areas, providing a seamless and native desktop interaction feel.\n\n### Changed\n\n- **Nexos Navigation Transmutation**: Refined the navigation items for the Nexos (Social) layer to align with the project\'s alchemical and celestial aesthetic.\n  - "Messages" → **Resonance** (Focus on social sync and pulses).\n  - "Relations" → **Constellations** (Mapping connections between sovereign suns).\n  - "Subspace Comms" → **Aether Channels** (Tracking transmissions across the void).\n  - "Arcade" → **The Forge** (Transmuting reality through simulation).\n- **Noosphere Navigation Transmutation**: Refracted the highest-level view with a balance of familiar and evocative terms.\n  - Introduced **Akashic Archive** to represent the collective intelligence.\n  - Retained **Thought Stream** and **Mind Map** for welcoming intuition.\n  - Standardized on **Galactic Forums** and **Universal Net** to reflect the orbital scale.\n- **Portal Child Routes**: Implemented a nested routing architecture for Nexos and Noosphere portals, mirroring the Helios pattern.\n  - Created placeholder components for all transmuted navigation items.\n  - Updated `NexusView` and `NoosphereView` to use `<router-view>` for seamless nested transitions.\n  - Federated navigation state through controllers and router metadata.\n- **Reactive Billboard System**: Decoupled Portal Identity from the Billboard Context in `UPortalBlueprint`.\n  - The **Portal Identity** in the Drawer now acts as a stable anchor and link back to the portal dashboard.\n  - The **Billboard Header** refracts fully based on the active route, updating its `title`, `description`, `icon`, and `iconColor`.\n  - Icon spinning is now intelligently gated: active for the portal soul (dashboard), stationary for specific tasks (subroutes).\n  - Child routes inherit portal branding unless explicitly overridden via `meta.billboard`.\n- **Helios Placeholder Expansion**: Completed the navigation architecture for the Helios (Personal) layer.\n  - Created placeholder components for **Chronicles**, **Chronos**, **Pictures**, **Videos**, **Music**, and **Solar Profile**.\n  - Migrated and transmuted **Stellar Settings** to **Stellar Profile**, relocating it from Helios to the **Nexos** (Network) layer to reflect network-wide resonance calibration.\n  - Manifested the **Youniversal Profile** in the **Noosphere** layer, completing the trinity of Sovereign identity levels with the `fal fa-sunglasses` icon.\n  - Synchronized `helios.controller.ts`, `nexus.controller.ts`, `noosphere.controller.ts`, and `router.ts` with transmuted names and celestial iconography.\n\n## [2026-01-28]\n\n### Changed\n\n- **Route Transitions**: Simplified the global `fade` transition by removing scale and vertical translation. This resolves the jittery "content picking up" effect during page navigation, replacing it with a clean, cinematic opacity fade.\n\n### Fixed\n\n- **Lit-Lamp Logs**: Resolved a TypeScript error where the log `item` was untyped (`unknown`) in the virtual scroll template.\n  - Defined explicit `LogEntry` and `LogData` interfaces.\n  - Refactored `lit-lamp-logs.vue` to use COMPASS X-Primitive components (`x-btn`, `x-card`, `x-chip`, `x-list-item`, `x-text-field`, `x-select`, `x-icon`).\n  - Improved type safety for the search debounce timer.\n- **Routes Navigation Drawer**: Fixed a Vue template compilation error caused by a redundant `</v-list>` tag.\n\n## [2026-01-28] (Continued)\n\n### Changed\n\n- **Portal Toolbar Centralization**: Refactored individual portal toolbars into a centralized `v-app-bar` within the main desktop layout.\n  - Introduced `UPortalAppBar` construct to render portal-specific titles and actions.\n  - Enhanced `usePortalNavigation` composable to support data passing for app bar components and props.\n  - Standardized layout `order` for drawers and bars: `u-user-rail` (0), `u-portal-app-bar` (1), `u-portal-drawer` (2).\n  - Cleaned up `u-portal-blueprint.vue` by removing local toolbar logic, significantly reducing template complexity.\n\n### Fixed\n\n- **U-Window Geometry Sync**: Resolved "ghosting" artifacts during dragging and resizing by switching to `v-model` binding for real-time geometry updates.\n  - Implemented writable computed properties in `u-window.vue` for seamless store synchronization.\n  - Added `:parent="true"` constraint and `:disable-user-select="true"` for improved interaction feel.\n- **Component Reactivity Warnings**: Resolved Vue performance warnings by wrapping dynamically injected components in `markRaw`.\n  - Updated `usePortalNavigation.ts` to protect `component` and `actions` definitions.\n  - Updated `window.store.ts` to protect window-hosted application components.\n\n## [2026-01-20]\n\n### Added\n\n- **U-Portal-Blueprint**: Introduced a standardized page blueprint for YouMeOS portal views (Helios, Nexus, Noosphere).\n  - Centralizes the glassmorphic "Billboard" header, content grid structure, and transition logic.\n  - Integrates `usePageContentVisibility` for unified HUD toggling behavior.\n  - Refactored `HeliosView`, `NexusView`, and `NoosphereView` to use the new blueprint, reducing code duplication and ensuring visual consistency.\n\n### Changed\n\n- **System Bar Home Branding**: Added a logo button to the start of the system bar that provides quick navigation back to the main YouMeOS dashboard.\n  - Features smooth hover scaling and glassmorphism styling.\n  - Linked to the root `/u` (YouMeOS) route.\n\n### Changed\n\n- **System Bar Refactor**: Refactored the `USystemBar` component to use the `x-btn` primitive instead of raw `v-btn` components, aligning with project design system standards.\n\n### Fixed\n\n- **WebGPU Nexus Material**: Fixed a `TypeError` in the WebGPU star generator caused by a missing `MeshBasicNodeMaterial` constructor. Migrated the implementation to correctly import from `three/webgpu` and implemented proper TSL projection logic for billboarding.\n\n## [2026-01-18]\n\n### Added\n\n- **YouMeOS Visionary Manifesto (README.md)**: Completely rewrote the Event Horizon plugin README as a comprehensive philosophical and technical document:\n  - Defined the core philosophy of YouMeOS: Ancient-Futuristic, Individual Sovereignty, Collective Unity, and Global Balance.\n  - Documented the full Celestial Hierarchy (Youniverse, Star, Helios, Nexos, Noosphere, Oort Cloud, Satellites).\n  - Articulated the vision of the "Operational Internet", a paradigm shift from passive browsing to spatial inhabitation.\n  - Projected YouMeOS\'s potential 50 years (2076) and 100 years (2126) into the future, positioning its creators as "Pioneers of the Operational Internet."\n  - Integrated the dedication to Xopher\'s children and aligned all messaging with the project\'s philosophical core.\n- **Dual-Renderer Architecture**: Implemented foundation for WebGL/WebGPU user toggle:\n  - Created `renderer.factory.ts` — Abstracts renderer creation with WebGL2 (stable) and WebGPU (experimental) modes.\n  - Added `getRendererPreference()` / `setRendererPreference()` for persisting user choice in localStorage.\n  - Added `isWebGPUAvailable()` for runtime capability detection.\n  - Updated `YouMeOSEngine` to use the factory pattern; renderer is now created in `init()`.\n  - Exposed `rendererType` property on engine for UI status display.\n  - Created comprehensive migration plan: `/docs/WebGPU-Migration-Plan.md`.\n  - **Blockers identified**: Custom GLSL shaders and `Lensflare` addon need TSL migration.\n  - Confirmed Three.js version at r182 (latest) with modern GLSL ES 3.00 syntax.\n\n### Added\n\n- **WebGPU Support**: Activated the actual `WebGPURenderer` class from `three/webgpu`.\n- **TSL Shader Migration**: Successfully migrated the following shaders to Three.js Shading Language (TSL):\n  - Galactic Stars (Galaxy & Gas systems)\n  - Data Stars (Hipparcos star field)\n  - Sun Materials (Surface, Flare, Halo, Corona)\n- **Material Factory**: Implemented `material.factory.ts` to abstract material creation, enabling seamless toggling between WebGL2 (GLSL) and WebGPU (TSL).\n\n### Changed\n\n- Refactored `galaxy.ts`, `gas.ts`, `hipparcos.ts`, and `sun.ts` to use the new Material Factory.\n- Updated `renderer.factory.ts` to instantiate and initialize the `WebGPURenderer`.\n- Enhanced `youmeos.engine.ts` to support asynchronous renderer initialization.\n\n### Fixed\n\n- Resolved `Uncaught TypeError` related to `WebGLProgram` when selecting WebGPU mode by ensuring compatible materials are used.\n- Fixed TypeScript lint errors in TSL shaders and engine initialization.\n- Temporarily disabled `Lensflare` in WebGPU mode to prevent renderer-specific addon crashes.\n- **Generator Decoupling**: Implemented the Generator Factory pattern to fully decouple WebGL and WebGPU implementations:\n  - Created `generator.factory.ts` as the central router for scene object creation.\n  - Migrated `Dust`, `Gas`, and `Galaxy` generators to separate `webgl/` (GLSL/Points) and `webgpu/` (TSL/InstancedMesh) directories.\n  - Updated `YouMeOSEngine` to support asynchronous generator initialization.\n  - This architecture eliminates runtime conditionals and ensures clean separation of concerns for the ongoing migration.\n\n### Changed\n\n- **README Consolidation**: Removed the redundant `README.txt` file. All plugin documentation now lives in `README.md` using rich Markdown formatting for better readability and maintenance.\n\n### Fixed\n\n- **Window Management Regression**: Resolved an issue where maximized windows would incorrectly overlap navigation drawers and app bars.\n  - Refactored `u-webtop` to implement a `.u-webtop-surface` relative coordinate system. This surface naturally respects `v-main` layout padding, ensuring all absolute-positioned windows stay within the "safe" content area.\n  - Synchronized `x-window` maximization logic with Vuetify\'s `useLayout` variables, ensuring pixel-perfect alignment with the available content area.\n  - Explicitly enforced `h-100` and flex-grow behavior on the `x-main` (webtop) to ensure the desktop environment utilizes the full vertical space provided by the layout.\n- **Side Zoom Slider Layering**: Lowered `u-zoom-slider` z-index to `5`. This ensures it remains visible above the 3D engine canvas (z-index 0) but sits safely beneath any application windows (starting z-index 100) and even raw primitives (z-index 10), preventing the slider from interfering with interactive window content.\n- **Helios Navigation & Zoom**: Resolved an issue where navigating to Helios would not consistently reset the camera to the correct "Sun Level" zoom.\n  - Updated Helios target zoom from `1.17` to `2.0` as requested (Zoom Level 2).\n  - Consolidated portal navigation fly-to logic to ensure camera transitions trigger even when clicking the active tab\'s root icon (reinforcing "navigate to" intent).\n  - Optimized the route watcher to handle path-specific resets for all major portal dashboards (Helios, Nexos, Noosphere).\n\n### Added\n\n- **Base URL & Routing awareness**: Optimized the application to work correctly within WordPress subdirectories and multiple entry points (`/youmeos/` and `/os/`).\n  - Implemented broader WordPress rewrite rules in `class-xophz-compass-event-horizon-public.php` to prevent 404s on deep-link refreshes.\n  - Dynamically detects the application vessel (`youmeos` vs `os`) and site path to configure a robust `historyBase` for Vue Router.\n  - Refactored `useLegacyLoader.ts` to ensure all 3D engine assets and manifests load relative to the WordPress site path.\n  - Standardized internal navigation links to be base-relative, ensuring consistent behavior across all deployment environments.\n- **Authentication Flow**: Resolved several issues preventing successful login and navigation in YouMeOS.\n  - Added `X-WP-Nonce` header to the login request in `useAuth.ts` to prevent 403 Forbidden errors when legacy session cookies are present.\n  - Updated the PHP login handler in `class-xophz-compass-event-horizon-public.php` to include the `user_id` in the response.\n  - Updated `useAuth.ts` to sync the successful login state with the global `window.xophzCompassSettings.currentUser.ID`, ensuring the router guard allows entry to authenticated routes.\n  - Integrated `loadPlugins` reload into the `LoginView.vue` successful login sequence to ensure the Noosphere and other data-driven components refresh with authenticated data.\n- **API Robustness**: Added defensive checks to `src/engine/api.ts` to prevent application crashes when network or server errors return an undefined response object.\n- **Navigation & Camera Fly-To**: Resolved an issue where clicking Helios, Nexos, or Noosphere links would not trigger the camera transition in the 3D engine.\n  - Corrected hardcoded path matching logic in `u-desktop.ts` and `useNavigation.ts` that was expecting `/os/` prefixes.\n  - Ensured compatibility with the new dynamic `historyBase` routing configuration.\n\n## [2026-01-16]\n\n### Fixed\n\n- **Global Component Registry**: Fixed a Vite resolution error by removing a stale and redundant `PluginGrid` entry from `global-components.ts`. The component was successfully migrated to Primitives as `x-plugin-grid`.\n- **Tour System Transition**: Fixed broken tour transitions in the modern engine.\n  - Connected `WelcomeView` → `enterUniverse()` to the modern tour via `youmeos:tour:start` custom event.\n  - Updated `u-desktop.ts` to listen for the event and trigger `enterApp()`.\n  - Enhanced `useTourGuide.ts` with a dedicated theater DOM overlay featuring:\n    - Glassmorphic message display with Orbitron typography\n    - Message fade-out during camera movement\n    - Message fade-in upon camera arrival\n    - Proper handling of stationary slides (`travelTime: 0`)\n  - Deprecated legacy `window.tour.start()` in favor of modern event-driven architecture.\n- **Interactive Star Navigation**: Restored the ability to click on labeled stars to fly the camera to them. Implemented `onMarkerClick` in `youmeos.engine.ts` with correct coordinate transformations for the rotating universe model.\n\n## [2026-01-15]\n\n### Added\n\n- **Welcome View Refactor**: Redesigned the entry screen to match the Helios/Portal layout.\n  - Implemented a 3-card interactive layout: **Start Tour**, **Enter Youniverse**, and **Weave a Youniverse**.\n  - Integrated the signature sprite-based spinning loader for the "Start Tour" card.\n  - Updated the "Youniverse" title branding with smooth gradient text and a 3D spinning "ni" element.\n- **YouMeOS Taxonomy**: Established official celestial terminology for the system.\n  - **The Noosphere**: The high-level Galaxy perspective representing the "sphere of human thought."\n  - **The Nexos**: The social/hipparcos level representing relationships and connections.\n  - **Helios**: The personal/sun level representing the core dashboard.\n  - **Satellites**: Functional applications (Wapps) mapped to planetary bodies (e.g., Saturn = Blog, Earth = Pictures).\n  - **Oort Cloud**: The user\'s content and consumption cloud.\n- **Randomized Loader Messages**: Expanded the boot sequence with a philosophical "batch" of over 100 randomized messages.\n  - Aligned messaging with the **YouMeOS Movement**: Global balance, individual sovereignty, and collective unity.\n  - Implemented `getRandomLoaderMessage` helper in `loader-messages.ts`.\n- **Documentation**: Created `docs/Taxonomy.md` and updated `docs/Project-Philosophy.md` to reflect the new "Ancient-Futuristic" terminology.\n\n### Changed\n\n- **Navigation UI**: Updated the portal bottom navigation to use the new nomenclature (Noosphere, Nexos, Helios).\n- **Core Logic**: Updated `youmeos.controller.ts` and `u-desktop.ts` to support the new tab values and associated zoom/coordinate targets.\n- **Theme Principle**: Refined the "Compass Metaphor" to "Celestial Navigation" within the project philosophy.\n\n- **Shared Pinia Instance**: Created `src/engine/pinia.ts` as a singleton Pinia store that both COMPASS and YouMeOS share. This ensures that YouMeOS wapps (like Noosphere) have access to the same plugin list, user data, and application state as the main COMPASS application.\n- **Wapps Directory**: Organized YouMeOS sub-applications into a dedicated `apps/youmeos/app/wapps/` folder for cleaner architecture. Moved `noosphere` and `settings` into this new directory.\n\n### Changed\n\n- **Mount Files Refactor**: Updated `mount-app.ts` and `mount-youmeos.ts` to import the shared Pinia instance from `@/engine/pinia` instead of creating separate instances.\n- **Engine Barrel Export**: Added `pinia` to the engine barrel file (`src/engine/index.ts`) for convenient imports.\n\n### Fixed\n\n- **Noosphere "Disabled" Apps**: Resolved an issue where the Noosphere Wapp Store showed all apps as "Not Available". The root cause was YouMeOS creating its own Pinia instance, resulting in an empty `pluginList`. Now that both apps share the same store, the plugin data is available immediately.\n- **Consolidated Window Management**: Removed `UWindowManager` and consolidated its logic into `UWebtop`. Both the COMPASS admin and YouMeOS desktop now share `UWebtop` as the primary window orchestration layer, ensuring architectural consistency across the entire system and resolving previous import path errors.\n\n### Added\n\n- **Window Layout Awareness**: Refactored `u-webtop` and `x-window` to respect Vuetify\'s layout variables. Maximized windows now dynamically account for active app bars and navigation drawers using the `useLayout` composable, ensuring they stay within the "safe" content area.\n- **Window Stacking & Interaction**: Fixed an issue where the `u-webtop` content layer was blocking clicks to the underlying 3D visualization. Restricted `pointer-events` to window components only while maintaining "click-through" for the background.\n- **Window Scrolling**: Resolved an issue where window content was not scrollable. Explicitly enabled `pointer-events: auto` and `overflow: auto` on the `x-window__body` to ensure internal content receives mouse and touch events correctly.\n- **The Noosphere**: Renamed "The Armory" to "The Noosphere" throughout the system registry, component file naming, and portal navigation links to align with the core project narrative.\n- **Zoom Slider Stacking**: Lowered `u-zoom-slider` z-index (1000 -> 50) to ensure application windows (starting z-index 100) always appear on top when overlapping.\n- **Window Drawer Animation**: Refactored the `u-window` internal drawer to use the `x-navigation-drawer` primitive. Added smooth expansion/collapse animations using a premium `cubic-bezier` transition that dynamically adjusts `backdrop-filter` blur intensity (10px to 40px) during interaction.\n\n### Fixed\n\n- **Window Maximization**: Resolved an issue where maximized windows would overflow under app drawers and bars by implementing layout-aware dimension calculations.\n- **Window Draggability**: Restricted `x-window` dragging to the system bar (header) only. Implemented event propagation blocking on the window body to prevent content clicks from triggering the `vue3-draggable-resizable` drag logic, as the library\'s `drag-handle` prop was found to be unsupported in the current version.\n\n## [2026-01-13] - Tour Guide Integration\n\n### Changed\n\n- **Start Tour Button**: Connected the new Vue `useTourGuide` composable to the "Start Tour" button in `u-main-app-bar.vue`.\n- **Legacy Tour Replication**: Migrated the complete 40-stop `GALAXY_TOUR` from the legacy `tour.js` into the modern Vue architecture, preserving all camera positions, rotation angles, timing, and messages.\n- **Composable Enhancement**: Updated `useTourGuide.ts` to handle edge cases:\n  - Stops with `travelTime: 0` now instantly teleport the camera without animation\n  - Stops with only rotation changes (no z-position change) now properly advance to the next stop\n  - Added unified `onArrival` handler for consistent state management\n- **Callback Support**: Legacy engine callbacks (`materializeGalaxy`, `highlightMilkyWay`, `highlightStarHeat`, `displaySunEarthDiagram`) are now properly invoked during the tour.\n- **UI Restoration**: Tour completion now automatically restores the UI visibility after the final "KINNEXUS!" message.\n\n## [2026-01-13] - User Profile Update\n\n### Changed\n\n- **Profile Avatar**: Updated the sidebar user profile to use the custom "Y Logo" asset (`y-logo-v2.png`) and changed the list item variant to `text` for a seamless transparent look.\n\n## [2026-01-13] - Navigation UI Refinement\n\n### Fixed\n\n- **Zoom Slider Height**: Restored the `85vh` height to the vertical zoom slider by ensuring internal Vuetify components ($v-input__control$, $v-slider$) correctly inherit the container\'s height.\n- **X-Slider Vertical Sizing**: Enhanced `x-slider` styles to strictly enforce 100% height and width on internal Vuetify 3 elements (`.v-input__control`, `.v-slider__track`, `.v-slider-track__container`), resolving sizing issues where the slider might collapse or not align properly.\n- **Zoom Slider Force Override**: Applied an explicit `height: 85vh !important` to the `.v-input__control` within `u-zoom-slider.vue` to override deeply nested Vuetify defaults that were preventing the slider from expanding to the full intended height.\n\n### Changed\n\n- **Left Sidebar**: Made the left navigation drawer "permanent" with `rail` and `expand-on-hover` behavior. It is now visible throughout the application whenever the UI is active, rather than being restricted to the Portal view.\n- **Right Sidebar**: Restored the right navigation drawer to its original `temporary` behavior with hover-triggers.\n- **UI Consistency**: Updated the app bar toggle buttons to match the new sidebar visibility rules.\n\n## [2026-01-13] - Portal & Galaxy UI Fixes\n\n### Fixed\n\n- **Portal Centering**: Re-implemented `PortalView.vue` with `fill-height` and flex centering to ensure content is vertically and horizontally centered in the viewport.\n- **Galaxy Link Restoration**: Restored the "Galaxy" card in `PortalView.vue` which was previously replaced by the "Support" button.\n- **Navigation Restoration**: Restored the "Galaxy" link in the primary navigation drawer.\n\n### Changed\n\n- **Support Button Relocation**: Moved the Patreon/Support button to the System Bar (footer) for global access without displacing core navigation elements.\n\n## [2026-01-13] - Documentation & UI Polish\n\n### Added\n\n- **Plugin Documentation**: Created a modern `README.md` for the Event Horizon plugin, featuring a structured overview, feature list, and technical architecture summary.\n\n### Changed\n\n- **Patreon Integration**: Created `SupportView.vue`, a premium landing page explaining the project\'s subscription and key-based entry model.\n- **Universal Access Key**: Generated and integrated a high-fidelity "Access Key" asset for the Bazaar.\n- **Bazaar Navigation**: Added "Bazaar" to the primary navigation links and user drawer.\n- **Support Documentation**: Created `docs/Patreon-and-Bazaar.md` to outline the new payment and contribution model.\n- **Event Horizon README**: Updated the legacy `README.txt` with actual plugin information, replacing the boilerplate template.\n\n## [2026-01-13] - Engine Visual & Interaction Polish\n\n### Changed\n\n- **UI Scalability & Performance**: Capped the number of 3D star markers at 100 to prevent massive FPS drops caused by excessive DOM elements. Optimized the marker update loop with **per-marker proximity checks** (<800 units) to prevent thousands of labels from rendering simultaneously at key zoom thresholds (like `z=1483`). Added a CSS-based fade-in transition for smoother label appearance.\n- **Unified Galactic Rotation**: Introduced a `galaxyContainer` that acts as a single source of truth for the galactic tilt and internal spin. All star systems (Hipparcos, Galaxy, Solar System) now reside in this group, ensuring they move as a cohesive "universe" and eliminating the \'disconnected\' look.\n- **Skybox Logic**: Simplified skybox update logic to strictly follow the universe\'s rotation group, ensuring constant celestial movement during navigation.\n\n## [2026-01-13] - Grid Pulse & Glow Refinement\n\n### Added\n\n- **Procedural GlowSpan Texture**: Replaced the static `glowspan.png` with a programmatically generated `CanvasTexture`. This new texture implements a smooth Gaussian-like gradient that fades to absolute transparency on both ends, ensuring the light "beam" is perfectly centered and avoids hard artifacts during rapid pulses.\n\n### Changed\n\n- **Visual Balancing**: Refined the "light blue" grid pulse to a deeper, more atmospheric cosmic blue (`0x3388cc`).\n- **Pulse Intensity**: Dramatically lowered the pulse opacity range (from 80% peak down to 40% peak) in `galaxy.ts` for a more "ghostly" and sophisticated breathing effect.\n- **Rendering Quality**: Enabled `depthTest` for grid pulse materials to prevent visual clutter and "blown out" overlaps, resulting in a cleaner and more structured geometric appearance.\n\n## [2026-01-13] - Audio & Media Player Robustness\n\n### Changed\n\n- **Interaction Listener**: Moved the global audio interaction listener to the beginning of the application mount. This ensures that early user clicks (even during the boot sequence) can successfully unlock the audio context.\n- **Media Player Logic**: Refactored `togglePlay` and `nextTrack` in `youmeos.controller.ts` to use async/await and handle play promises. Added better error recovery: if a playback fails, it automatically attempts to re-unlock the context.\n- **Auto-Switching**: Improved track switching in `useAudio.ts`. The auto-switch (15s delay) now double-checks that the user hasn\'t manually started another track during the stylistic pause, preventing overlapping audio.\n- **State Synchronization**: Enhanced `isPlaying` and `isUnlocked` reactivity to better reflect the actual state of the HTML5 Audio elements, with comprehensive logging and error catching for better debugging of autoplay policies.\n\n## [2026-01-12] - Grid Legacy Material Reversion\n\n### Changed\n\n- **Material Logic**: Reverted the galactic grid from `ShaderMaterial` back to `MeshBasicMaterial` to restore the legacy aesthetic.\n- **Texture Manipulation**: Re-implemented the diagonal scrolling animation on the `glowspan.png` texture, reproducing the "flowing lattice" effect from the original engine.\n- **Visuals**: Updated the grid color to a bright "Whitish Blue" (`0xddeeff`) and increased opacity to 85% for better visibility against the new dark space background.\n\n## [2026-01-12] - Cosmic Background & Gas Systems\n\n### Added\n\n- **Gas/Nebula System**: Introduced `gas.ts` which spawns colorful, vibrant nebulas using addictive blending. These "gases" use a variety of textures (`p_0`, `p_1`, `p_2`) and colors (pinks, purples, cyans, golds) to add depth to the galactic disk.\n- **Deep Space Background**: Added `distant_galaxies.ts` which places small galaxy sprites at extreme distances (~2M+ units). This ensures that when zooming out far enough to see the galaxy as a point, there is a realistic background of neighboring galaxies in the "Local Group."\n\n## [2026-01-12] - Grid Aesthetic Refinement\n\n### Changed\n\n- **Grid Visibility**: Darkened the galactic grid to a "Midnight Purple/Blue" (`0x1a0633`) and reduced its opacity to 60% for a more subtle, integrated look.\n- **Grid Geometry**: Tightened the grid pattern (Subdivision 5) and refined the "lens" shape. Brought the outer edges to ~66k units (slightly expanded from 60k) and squeezed the center bulge to a 0.15 Y-scale.\n- **Shader Modulation**: Adjusted the `grid.fsh` shader to use deeper blue highlights and reduced the intensity of the additive breathing glow on ripple peaks.\n\n## [2026-01-12] - Visionary Boot Sequence\n\n### Added\n\n- **Dedicated Children\'s Statement**: Added a personal dedication to the beginning of the loader sequence: _"Dedicated to my Children: Krislynn Night, Khronus Infinidee, Gaia RhaeSatori, Ronan Tesla, and Kairos Sol"_\n- **Sequenced Captions**: Updated `loader-messages.ts` with the new `vision` caption.\n\n- **Interactive Controls Restored**: Fixed an issue where the user would lose control of the camera (panning/zooming) after the initial boot or when entering the Portal.\n- **Canvas Interaction**: Ensured `glContainer` is always interactive by setting `pointer-events: none` on blocking UI containers (`PortalView`, `WelcomeView`, and `v-layout`).\n- **Rotation Lock Removal**: Removed the `spinCutoff` logic that previously disabled rotation when zoomed in below 100 units, allowing for smooth navigation at all levels.\n- **Interruptible Zoom**: Made the 15-second initial "Cosmic Zoom" interruptible; manual user interaction now immediately stops the automated transition for responsive control.\n\n### Changed\n\n- **Loader Choreography**: Refined `useLegacyLoader.ts` to prioritize the vision statement.\n- **Reading Time Optimization**: Doubled the display duration for the vision statement (4s) and standard messages (2s) to ensure readability.\n- **Responsive Text Styling**: Improved `x-loader.vue` typography with `max-width`, improved `line-height`, and responsive padding to handle long visionary statements gracefully.\n- **Three.js Quaternion Patch**: Implemented a global patch for `THREE.Quaternion.setFromEuler` to prevent crashes in multi-context (HMR) environments where prototype checks may fail.\n- **Engine Shielding (Anti-Flicker)**: Added an `isEngineRunning` guard to the legacy `start()` function to prevent multiple animation loops and WebGL context conflicts.\n- **Singleton Loader Pattern**: Refactored `useLegacyLoader.ts` to use a singleton `isLoading` state, ensuring the boot sequence only triggers once regardless of route navigation or component remounting.\n- **Legacy Dedication Sync**: Synchronized the dedication text within the legacy `main.js` internal tour sequence.\n\n## [2026-01-12] - Intro Caption Restoration\n\n## [2026-01-12] - Documentation Refinement\n\n### Changed\n\n- **YouMeOS-Engine.md**: Major overhaul of the engine integration documentation.\n  - Documented the modern modular architecture (`youmeos.controller.ts` + `useLegacyLoader.ts`).\n  - Updated synchronization details for the Global Event Bridge and Visionary Boot Sequence.\n  - Implemented a dual roadmap view featuring both a high-level **Summary Table** and detailed **Evolution Tracking**.\n  - Added specific guidance on the "Cosmic Tour" choreography and "Orbitron" typography.\n\n## [2026-01-12] - Galaxy Engine, Navigation & UI Refinement\n\n### Added\n\n- **Independent Rotation Toggles**: Separated internal Galaxy spin from Camera Orbit in the system bar.\n- **Custom Icons**: Added **Galaxy** and **Sun** icons with choreographed slow rotations (15s) in the system bar.\n- **Reversible Spin**: Implemented `.fa-spin-reverse` CSS animation for counter-clockwise icon rotation.\n\n### Changed\n\n- **"Plate on a Stick" Rotation**: Fixed the galaxy/star wobble by implementing true local-axis rotation (`rotateY` and `rotateOnAxis`) in the legacy engine.\n- **Cinematic Speeds**: Optimized internal rotation and camera orbit speeds for a smoother, less frantic experience.\n- **Dramatic Welcome Entry**: Refined the "YouMeOS" title animation to take 3.2 seconds and scale up from a much smaller point (0.3).\n\n### Fixed\n\n- **Scroll Direction**: Inverted scroll-to-zoom direction (UP = Zoom IN) for standard navigation feel.\n- **Restored Zoom Slider**: Re-integrated missing HTML for the legacy zoom slider (`#minimap`) into the layout.\n- **Orbit Direction Override**: Fixed a hard-coded logic in `main.js` that previously overrode the camera\'s rotation direction every frame.\n- **Rotation Global Safety**: Added `enableGalaxySpin` and `toggleGalaxySpin` to `main.js` with robustness checks for `userData`.\n\n## [2026-01-12] - Fix Build Configuration\n\n### Fixed\n\n- **Vite Configuration**:\n  - Corrected router path in `vite.config.js` warmup configuration (`./src/router/router.ts` → `./src/routes/router.ts`).\n  - Added missing `@umeos` alias mapped to `./apps/youmeos` to resolve import errors in `youmeos.controller.ts`.\n  - Removed explicit `vuetify` component imports from `optimizeDeps` to prevent resolution failures during dependency scanning.\n- **Type Definitions**:\n  - Commented out deep internal `echarts` module declarations in `src/types/core/echarts.d.ts` that were causing dependency scan failures due to path mismatch.\n\n## [2026-01-12] - Loader Optimization\n\n### Changed\n\n- **Loader Timing**: Optimized the loader message sequence interval from 2 seconds to 1 second per message in `useLegacyLoader.ts` to speed up the boot experience.\n- **Intro Sequence**: Reduced the initial "Hello World!" message breathe time from 2 seconds to 1 second for a snappier startup.\n\n---\n\n## [2026-01-12] - Fix Build Configuration\n\n### Fixed\n\n- **Vite Alias**: Added `@umeos` alias to `vite.public.config.js` to correctly resolve imports from `apps/youmeos/components`, fixing build errors in `legacy-layout.vue`.\n- **Typography**: Changed main application font to **Orbitron** to align with the sci-fi/OS aesthetic.\n- **Brand Alignment**: Updated loader messages in `loader-messages.ts` to follow the project motto.\n- **Loader Timing**: Implemented a 5-second "message lock" in `useLegacyLoader.ts` to ensure visionary messages (like "Expanding into the infinite...") remain readable even if the engine sends technical status updates immediately after.\n- **Thematic Mapping**: Added mapping for legacy technical loader messages (e.g., "Igniting solar plasma" → "Igniting the Universal Core...") to maintain immersion throughout the boot sequence.\n- **Boot Choreography**: Implemented a mandatory 15-second "Visionary Sequence" in `useLegacyLoader.ts`. Messages are queued and displayed for 3 seconds each to ensure the project motto is fully conveyed.\n- **UI Reveal**: Configured a choreographed entrance: once boot completes, the camera zooms into the star clusters, followed by a staged fade-in of the Vue OS UI elements.\n- **Design System**: Extracted font families into CSS variables (`--font-main`, `--font-body`) in `_variables.scss`.\n\n## [2026-01-11] - YouMeOS Engine Port & Starfield Fix\n\n### Added\n\n- **YouMeOS Layout Initialization**: Initialized the topmost layer with `v-app` for full-screen layout support.\n- **Glass Panel Aesthetic**: Implemented a "glass panel" navigation drawer (`x-navigation-drawer`) on the right side with `backdrop-filter` blur and semi-transparent styling.\n- **Copyright Notice**: Added a dynamic copyright notice to the right navigation drawer footer.\n- **Background Integrity**: Configured CSS absolute positioning and transparency to ensure the WebGL starfield remains the main background while the Vue UI sits on top.\n- **YouMeOS Routing**: Migrated the legacy "Welcome Overlay" to a route-based architecture using `vue-router`.\n  - Added dedicated views for `Welcome`, `Login`, `Register`, and `Reset`.\n  - Implemented a top navigation drawer for central authentication access.\n  - Applied smooth fade transitions between routes.\n- **Hog Branding**: Updated the global sidebar with official "Hall of the Gods, Inc." branding and copyright notice.\n- **YouMeOS Engine Port**: Successfully ported the legacy 100,000 stars engine logic.\n  - Implemented `UniverseEngine` using legacy Three.js r62 with modern TypeScript integration.\n  - Configured high-density starfield rendering (115k+ stars) with custom shaders.\n  - Integrated legacy loader UI with real-time status messages.\n- **Vendor Assets**: Properly enqueued legacy `three-r62.min.js`, `Detector.js`, and `tween-legacy.js` with global scope patches to resolve `ReferenceError` issues.\n- **YouMeOS Relocation**: Moved legacy code from `public/youmeos_legacy` to `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy` for better plugin organization.\n- **Path Aliasing**: Configured `@plugins` alias in `vite.config.js` to support cross-plugin asset references.\n- **Documentation**: Created `docs/plugins/YouMeOS-Engine.md` documenting the architecture and future scalability improvements (Manifest-driven loading, Composablization, etc.).\n- **Manifest-Driven Loading**: Refactored `PublicApp.vue` to load legacy scripts, styles, and audio configuration from a `manifest.json` file, removing hardcoded lists.\n- **Environment Configuration**: Implemented `.env` support for YouMeOS, moving `VITE_YOUMEOS_PLUGIN_PATH` and `VITE_DEV_SERVER_PORT` out of the source code.\n- **Standalone App Architecture**: Refactored YouMeOS into a fully standalone app structure at `/apps/youmeos/`.\n  - Moved entry point to `apps/youmeos/index.html` and `mount-youmeos.ts`.\n  - Split `PublicApp.vue` into `youmeos-app.vue` (Template), `youmeos.controller.ts` (Logic), and `youmeos.scss` (Styles) for better separation of concerns.\n\n### Fixed\n\n- **THREE CORS Issues**: Explicitly set `THREE.ImageUtils.crossOrigin = "anonymous"` in `PublicApp.vue` to resolve `texImage2D` security errors when loading textures from the dev server.\n- **YouMeOS Entry Point Fix**: Updated the PHP plugin\'s template redirect to point to the correct Vite dev server (port 9000) and the renamed `mount-youmeos.ts` entry point.\n- **Legacy Logic Fixes**: Corrected broken HTML comments in `login.html` that caused script parsing issues.\n- **Engine Initialization**: Resolved "black screen" issues by identifying a depth-clipping bug. Increased `sceneSize` to 100,000 to prevent immediate fading at the default camera distance (57,777).\n- **Asset Paths**: Corrected texture and data fetching paths to be compatible with both Vite dev server and WordPress plugin architecture.\n- **Visuals**: Optimized star point sizes (60.0) for modern high-resolution displays.\n- **Build Error**: Resolved `[ERROR] Unexpected "..."` in `pixie-dust-pixel-form.vue` by replacing ambiguous `...` inside script tag string placeholder with `/* code here */`.\n- **Parsing Error**: Refactored `pixie-dust-pixel-form.vue` to use `<script setup>` syntax, resolving `esbuild` parsing issues with the previous `defineComponent` block.\n- **YouMeOS Audio Playback**: Resolved `NotAllowedError` by gracefully handling autoplay failures and retaining event listeners until successful interaction.\n- **Console Violations**: Added `passive: true` to touch event listeners in `youmeos.controller.ts` to resolve scroll-blocking warnings.\n- **YouMeOS UI**: Refactored the "Welcome/Login" overlay into a native Vue component (`YouMeOSOverlay.vue`), replacing the legacy `login.html` injection. This lays the groundwork for router-based navigation while preserving the original "UMeOS" branding and "Click to Enter" behavior.\n\n### Note\n\n- **Node.js Environment**: Identified that the project\'s Vite 7 configuration require Node.js 20+. Current host environment (v18.19.1) will cause `crypto.hash` errors during build. Users are advised to use the provided Docker containers for all compilation and development tasks.\n\n---\n\n## [2026-01-10] - Documentation Overhaul\n\n### Changed\n\n- **Design-System-Atoms.md**: Completely rewrote documentation to reflect current project structure.\n  - Renamed "Atoms" to "Primitives" per game engine naming convention\n  - Updated directory paths from `components/atoms/` to `components/primitives/`\n  - Documented all 30+ current primitives in categorized tables\n  - Added component hierarchy (Primitives → Prefabs → Constructs → Blueprints)\n  - Updated global registration details to match `src/engine/primitives.ts` plugin\n  - Added guidance for creating new primitives with template patterns\n- **Architecture-and-Migration.md**:\n  - Removed outdated Tailwind CSS references; confirmed Vuetify 3 + SCSS as the primary styling stack.\n  - Updated tech stack to include Axios and TanStack Vue Query.\n  - Corrected engine file paths (`primitives.ts`, `global-components.ts`).\n  - Refined current focus to emphasize WordPress REST API integration.\n- **Migration-Progress.md**:\n  - Removed outdated Tailwind CSS tasks.\n  - Added completed tasks for Barrel Exports, ECharts, and Bomb Bag refactoring.\n- **Component-Refactoring-Guide.md**:\n  - Removed Tailwind-specific typography and utility class mentions.\n  - Standardized on Vuetify utility classes and `.text-mono` for HUD elements.\n- **System Docs**:\n  - Moved specific plugin documentation (`Bomb-Bag-System.md`, `Magic-Cloak-System.md`, etc.) to `docs/plugins/` for better organization.\n  - Updated `Magic-Cloak-System.md` to reflect dynamic hint fetching implementation.\n\n---\n\n## [2026-01-09] - Vuetify Component Catalog\n\n### Added\n\n- Migrated Three.js engine from r62 to r182 using ES modules and TypeScript.\n- New engine directory `apps/youmeos/engine/` housing modernized components.\n- Modernized rendering modules: `galaxy.ts`, `hipparcos.ts`, `sun.ts`, `solarsystem.ts`, `dust.ts`, `skybox.ts`.\n- Implemented `YouMeOSEngine` class for centralized initialization and management.\n- Modernized marker system using `CSS2DRenderer`.\n- Refactored all GLSL shaders to version 300 es (modern `in/out` syntax).\n- Integrated `pnpm` and Node 25 for better development environment stability.\n- Added `env.d.ts` for Vite-specific raw import type support.\n- **Component Catalog**: New reference page in the **Enchiridion** module showcasing Vuetify components with the project\'s custom glassmorphic styling.\n  - Path: `/enchiridion/components`\n  - Categories: Buttons, Form Elements, Cards & Chips, App Layout, Feedback & Progress.\n  - Includes interactive examples of project-specific `@mixin glass` and `@mixin glass-accent` applications.\n- **Mock App Layout**: Added a simulated `v-layout` environment within the catalog to demonstrate `v-app-bar`, `v-navigation-drawer`, and `v-system-bar` coordination.\n- **Route Registration**: Added `EnchiridionComponents` route to `enchiridion.routes.ts` with a pink `puzzle-piece` icon.\n\n---\n\n## [2026-01-09] - WordPress Admin Menu Refinement\n\n### Changed\n\n- **Menu Item Height**: Overrode the height of the first menu item ("Xophz Compass") in the WordPress sidebar to 40px to match the **System Bar** height.\n  - Corrected the selector in `_wordpress.scss` to target `li.toplevel_page_xophz-compass`.\n  - Added `display: flex` and `align-items: center` to the menu link for better vertical centering.\n\n---\n\n## [2026-01-09] - Reactive Color Scheme Synchronization\n\n### Fixed\n\n- **UI Synchronization**: Refactored `useWpTheme.ts` to share reactive state globally.\n  - Changes made via the **System Bar**\'s theme menu now immediately reflect on the **Profile Page** billboard and color scheme picker.\n  - Live hover previews are now synchronized across all components using the `useWpTheme` mechanic.\n  - Resolved an issue where the profile page would show "Midnight" as active even after switching to another theme.\n\n---\n\n## [2026-01-09] - System Bar Layout Refinement\n\n### Changed\n\n- Swapped the positions of the **Compass** and **Theme** buttons on the system bar.\n  - **Compass** (navigation) moved to the left grouping for primary visibility.\n  - **Theme** (utility) moved to the right grouping near the user profile.\n\n---\n\n## [2026-01-09] - Color Palette Picker Refactor\n\n### Added\n\n- **Global Theme Mechanic**: Created `useWpTheme.ts` composable to centralize WordPress administrative color scheme management.\n  - Supports live preview on hover\n  - Handles stylesheet swapping and body class updates\n  - Updates CSS variables (`--wp-theme-*`) for application-wide consistency\n- Created `useWpTheme` mechanic to consolidate WordPress admin color scheme management.\n- Created `theme-menu-btn.vue` prefab for global theme switching in the system bar.\n- Created `x-theme-snackbar.vue` to provide a unified, glass-accented feedback UI for theme changes.\n\n### Changed\n\n- Refactored `profile-color-scheme.vue` to use the new `useWpTheme` mechanic.\n- Integrated `theme-menu-btn` into the default `system-bar.vue`.\n- Updated profile billboard to reactively show theme colors on its chips.\n- Unified snackbar design across the application using `x-theme-snackbar`.\n- Enhanced theme menu aesthetics with custom 3x3 grid and rough-glass styling.\n\n---\n\n## [2026-01-09] - Profile UI & Billboard Enhancements\n\n### Added\n\n- **Profile Billboard Chips**: Enhanced the profile billboard with new informational chips:\n  - **User Email**: Added a chip displaying the user\'s email with a Font Awesome envelope icon.\n  - **Join Date**: Added a "Joined [Month] [Year]" chip using native `Intl.DateTimeFormat`.\n  - **Color Scheme**: Added a chip displaying the active administrative color scheme name with a paintbrush icon.\n- **Data Integration**: Injected `xophzCompassSettings` into `profile.controller.ts` to map scheme keys to human-readable names.\n\n### Changed\n\n- **Color Scheme Picker Refinements**:\n  - **"Active" Badge Repositioning**: Moved the active status indicator from inside the button to the top-left corner of the scheme card using absolute positioning.\n  - **Tonal Styling**: Updated the active badge to use the `tonal` variant for a more subtle, premium look.\n  - **Icon Integration**: Moved the duotone paintbrush icon from the main selection button to the active badge itself.\n  - **Flex Layout**: Added `ga-2` and `flex-wrap` to the billboard chip container to ensure clean wrapping and spacing.\n\n---\n\n## [2026-01-09] - Profile Billboard Fix\n\n### Fixed\n\n- **Billboard Slot System**: Added default slot support to `sub-app-billboard.vue`. When custom content is passed (e.g., profile page with user avatar/name), it now renders that content instead of the plugin-based image/title/description. Plugin billboard pages remain unaffected.\n\n---\n\n## [2026-01-09] - Plugin Grid Order Persistence\n\n### Added\n\n- **User Preference Storage**: Plugin grid order is now saved to the user\'s WordPress profile and persists across page refreshes.\n- **Backend**: Added `save_plugin_order` and `get_plugin_order` AJAX handlers in `class-xophz-compass-admin.php` that store order in `_compass_plugin_order` user meta.\n- **Frontend API**: Added `savePluginOrder()` and `getPluginOrder()` methods to `compass.api.ts`.\n- **Pinia Store**: Updated `useCompassStore` to:\n  - Load saved order on startup (parallel with plugin list fetch)\n  - Sort plugins based on saved order\n  - Save new order with 500ms debounce after drag-and-drop reordering\n\n### Fixed\n\n- **API Wrapper**: Fixed `api.post()`, `api.put()`, and `api.delete()` in `engine/api.ts` to send form-encoded data (`application/x-www-form-urlencoded`) instead of JSON body. WordPress `$_REQUEST` cannot read JSON body, causing all POST/PUT/DELETE API calls to fail silently. This fix affects all plugins using the API wrapper.\n- **Profile Color Scheme**: Registered `admin_color` as a REST API field in `class-xophz-compass.php`. WordPress doesn\'t expose this field by default, causing the color scheme picker to fail silently. Now properly saves via `POST /wp/v2/users/me`.\n\n---\n\n## [2026-01-09] - Profile Schema Form Redesign\n\n### Changed\n\n- **wp-schema-form**: Redesigned the profile schema form to match WordPress admin form-table layout pattern.\n  - Replaced `v-row`/`v-col` grid with semantic `<table class="form-table">` structure\n  - Labels now appear in `<th scope="row">` cells, inputs in `<td>` cells\n  - Boolean checkboxes use inline label pattern (checkbox + description text) like WordPress admin\n  - Added `getFieldLabel` helper to convert field keys (e.g., `first_name`) to readable labels ("First Name")\n  - Moved field descriptions below inputs (for non-boolean fields) instead of using them as labels\n  - Added proper WordPress-style form-table SCSS with row borders, vertical alignment, and theming\n\n---\n\n## [2026-01-09] - REST API & Console Cleanup\n\n### Fixed\n\n- **usePostType URL Construction**: Fixed a bug where REST API URLs were incorrectly formed with two question marks when WordPress uses the `?rest_route=` format (e.g., `/index.php?rest_route=/wp/v2/post_type?query=value` → `/index.php?rest_route=/wp/v2/post_type&query=value`). Now correctly uses `&` separator when the base URL already contains a query string.\n- **404 Error Handling**: `usePostType` now gracefully handles 404 responses for optional/conditional post types (like `compass_cloak_hint` which only exists when Magic Cloak plugin is active) by returning an empty array instead of throwing an error.\n- **Console Noise**: Disabled verbose debug logging in `SubAppBillboard` controller to reduce console clutter. Debug info still available via the `pluginDebug` computed property.\n\n---\n\n## [2026-01-09] - Bomb Bag UI Improvements\n\n### Changed\n\n- **Navigation**: Removed "Bomb Bag" prefix from all sub-routes for a cleaner sidebar appearance.\n- **Icons**: Assigned unique, descriptive Duotone icons to all Bomb Bag sub-routes (Dashboard, Campaigns, Subscribers, Settings, etc.).\n- **Styling**: Added custom Duotone primary/secondary color mappings for all new sub-route icons in `_icon-colors.scss`.\n\n### Fixed\n\n- **Logic**: Updated all internal navigation calls (`router.push`) to match the new route naming convention.\n\n---\n\n## [2026-01-08] - Mount App Refactor\n\n### Changed\n\n- **Modular Extraction**: Refactored `mount-app.ts` from 126 to 60 lines by extracting logic into dedicated modules:\n  - `engine/filters.ts` — Currency and kFormatter filter functions\n  - `engine/echarts.ts` — ECharts module registration and VChart export\n  - `engine/global-components.ts` — Centralized async component registry\n- **Component Registration**: Replaced repetitive manual PascalCase/kebab-case registration with automated loop using `toKebabCase()` helper.\n- **Code Organization**: Improved readability with clear section comments and logical grouping.\n\n---\n\n## [2026-01-08] - Bomb Bag Email Marketing Plugin\n\n### Added\n\n- **New Plugin**: Implemented Bomb Bag email marketing plugin with campaign management, subscriber lists, and newsletter delivery.\n- **Backend**:\n  - Custom database tables: `wp_bomb_bag_campaigns`, `wp_bomb_bag_subscribers`, `wp_bomb_bag_lists`, `wp_bomb_bag_list_subscribers`, `wp_bomb_bag_emails`, `wp_bomb_bag_analytics`\n  - REST API endpoints for campaigns, subscribers, lists, settings, and analytics\n  - Email handler with batch processing via WP-Cron\n  - Open/click tracking via tracking pixel and URL rewriting\n  - One-click unsubscribe handling\n  - Email provider configuration (WordPress, SendGrid, Mailgun, SMTP)\n- **Frontend**:\n  - Dashboard view with stat cards, subscriber growth chart, and quick actions\n  - Campaigns list with status filtering and CRUD operations\n  - Subscriber management with search, filtering, and CSV import\n  - Email composer with HTML editor and live preview (desktop/mobile toggle)\n  - Settings view for email service provider configuration\n  - Pinia store and API composable with full TypeScript types\n- **Theme**: Pink accent (#ED55A9) matching plugin color\n- **Documentation**: Created `Bomb-Bag-System.md` technical documentation.\n\n---\n\n## [2026-01-08] - Mirror Shield Security Plugin\n\n### Added\n\n- **New Plugin**: Implemented Mirror Shield security plugin with honeypot traps, attack logging, and IP blocking.\n- **Backend**:\n  - Custom database tables: `wp_mirror_shield_logs`, `wp_mirror_shield_traps`, `wp_mirror_shield_blocked`\n  - REST API endpoints for logs, stats, traps CRUD, and IP blocking\n  - Honeypot handler for decoy endpoints and hidden form fields\n  - Auto-blocking of repeat offenders (3+ triggers in 1 hour = 24h block)\n- **Frontend**:\n  - Dashboard view with ECharts attack timeline and effectiveness gauge\n  - Traps management view with CRUD operations\n  - Attack logs view with server-side pagination and filters\n  - Pinia store and API composable\n- **Default Traps**: Seeded honeypots for `/wp-admin/backup.php`, `/wp-config.bak`, `/administrator/`, and login form honeypot field.\n- **Documentation**: Created `Mirror-Shield-System.md` technical documentation.\n\n---\n\n## [2026-01-08] - Glass Card & API Nonce Fixes\n\n### Added\n\n- **New Component**: Created `x-glass-card` primitive component to encapsulate the "glassmorphic" aesthetic and resolve Vue warnings.\n\n### Fixed\n\n- **API**: Updated `usePostType` and `api.ts` to correctly send the WordPress Nonce (`X-WP-Nonce`) via `xophzCompassSettings.nonce`, resolving 403 Forbidden and 400 Bad Request errors.\n- **Dependencies**: Fixed missing `x-glass-card` component used in `profile-color-scheme.vue`.\n\n---\n\n## [2026-01-08] - Hover Icon Interaction for Go Button\n\n### Added\n\n- **New Interaction**: Added yellow "slow" traffic light icon to `x-go-btn` when hovering over the associated toggle button in `plugin-grid-circle`.\n- **New Prop**: Added `slow` prop to `x-go-btn` to control the traffic light state independently of the `disabled` state.\n\n---\n\n## [2026-01-08] - Plugin Grid Navigation & Cursor Refinements\n\n### Added\n\n- **Navigation**: Clicking a `plugin-grid-item` now triggers navigation (emits `go`) if the plugin is activated.\n- **Visual Feedback**: The cursor now remains `default` when hovering over a deactivated plugin grid item to signal that it is not clickable.\n\n---\n\n## [2026-01-08] - Vue 3 Transition Reveal Animation\n\n### Changed\n\n- **`plugin-reveal-circle`**: Refactored to use Vue 3 native `<Transition>` component with JS hooks instead of CSS-only class toggles.\n  - Icon now uses `icon-anchor` wrapper for stable positioning during expand/collapse\n  - Content reveal uses `onEnter`/`onLeave` JS hooks for orchestrated stagger animation\n  - Children (meta, title, desc, actions) animate in sequence with 50ms delays\n  - Effects layer wrapped in `<Transition name="effect">` for fade in/out\n- **SCSS**: Added Vue transition classes (`.effect-enter-active`, etc.) and simplified hover state styling\n\n---\n\n## [2026-01-08] - Grid Circle Reveal Animation\n\n### Added\n\n- **`x-pulsing-ring` Primitive**: New reusable component for pulsing ring/ripple effects. Extracted from `compass-circle` for broader reuse.\n  - Configurable ring count (1-5)\n  - Optional outer structural rings\n  - Pulse-on-hover mode\n- **`plugin-reveal-circle` Prefab**: New animation pattern for plugin grid items replacing the flip animation.\n  - Default: Full-size plugin image fills the circle\n  - Hover: Image shrinks to center, outer rings grow in, content fades in around image\n  - Supports scanline, grid, and dots background effects\n\n### Changed\n\n- **`plugin-grid-item`**: Switched from `plugin-grid-circle` (flip) to `plugin-reveal-circle` (reveal) for a smoother, less jarring animation in the grid context.\n- **Animation Philosophy**: Flip animation preserved in `compass-circle` for hero/intro contexts; reveal animation used for dense grid layouts.\n\n---\n\n## [2026-01-08] - Compass Circle Animation Options\n\n### Added\n\n- **Animation Prop**: Added `animation` prop to `compass-circle.vue` with \'flip\' (default) and \'fade\' options.\n- **Fade Animation**: New fadeout-fadein animation that crossfades between front and back faces instead of 3D flip.\n\n### Changed\n\n- **Plugin Grid Items**: Updated `plugin-grid-item.vue` to use \'fade\' animation by default, providing a smoother transition for the plugin grid.\n- **Animation Passthrough**: Added animation prop passthrough in `plugin-grid-circle.vue`.\n\n---\n\n## [2026-01-08] - Plugin Grid Component Redesign\n\n### Added\n\n- **New Components**: Created 3 new components for a cleaner, self-contained plugin grid:\n  - `x-plugin-icon` (Primitive): Simple circular avatar for icons.\n  - `plugin-grid-item` (Construct): Interactive cell wrapping `compass-circle` with flip behavior.\n  - `plugin-grid` (Blueprint): Responsive grid container.\n\n### Changed\n\n- **Migration**: Replaced fragile manual grid in `compass-explore.vue` with `<plugin-grid>` component.\n- **Layout**: Icons start at 80px and expand to 300px on hover with full flip animation.\n- **Cleanup**: Removed conflicting wrapper styles from `_compass-explore.scss`.\n\n---\n\n## [2026-01-08] - Plugin Grid Visibility Improvements\n\n### Changed\n\n- **Plugin Size**: Increased base `size` from 180 to 220 in `compass-explore.vue`.\n- **Scaling Enhancement**: Updated base scale from 0.6 to 0.82 in `_compass-explore.scss`, making plugins significantly more prominent and easier to interact with.\n- **Hover Transitions**: Refined hover scale to 1.1 with a smoother 0.6s cubic-bezier transition.\n- **Grid Layout**: Adjusted `v-col` breakpoints (`cols="6" sm="4" md="3" lg="2"`) to ensure a balanced grid of 2 to 6 items per row rather than a single horizontal line on large screens.\n- **Spacing**: Tightened column padding to reduce gaps and create a more cohesive grid look.\n- **Global Height Optimization**: Standardized `100%` height and `min-height: 100vh` across `html`, `body`, and all main layout blueprints (`x-compass-layout`, `x-sub-app-layout`, `x-sub-route-layout`). This ensures that the application shell and content areas always utilize the full available vertical space, preventing content from being cramped or background gradients from cutting off.\n- **Plugin Grid Centering**: Applied `fill-height` and `align-content="center"` to the `compass-explore` grid for perfect vertical alignment within the expanded viewport.\n\n---\n\n## [2026-01-08] - Plugin List Runtime Fixes\n\n### Fixed\n\n- Resolved `Uncaught TypeError: compassStore.pluginList.some is not a function` in `useMagicCloak.ts`.\n- Ensured `compassStore.pluginList` is always an array by adding defensive logic in `loadPlugins` action to handle object responses from WordPress API.\n- Added safety checks in `useMagicCloak` and `compass-explore` controllers for all native array method calls on `pluginList`.\n\n---\n\n## [2026-01-07] - Explore Redesign & Magic Cloak System\n\n### Added\n\n- **Magic Cloak System**: New global mechanic (`useMagicCloak`) for context-aware hints and tips.\n- **Technical Documentation**: Created `Magic-Cloak-System.md` outlining the architecture for the new messaging system.\n\n### Changed\n\n- **Compass Explore UI**: Redesigned the plugin exploration page with a high-density grid layout.\n- **Interactive Icons**: Plugin icons now scale down to 60% by default and grow smoothly to 100% on hover.\n- **Glass Toast**: Replaced the static `v-alert` with a premium glassmorphic Magic Cloak toast that appears conditionally when the plugin is active.\n- **Responsive Grid**: Improved `v-col` sizing to support many more plugins "above the fold."\n\n---\n\n## [2026-01-07] - Thor\'s Hammer Fix\n\n### Fixed\n\n- Added self-healing logic to `xophz-compass-thors-hammer` to automatically recreate the `wp_xophz_thors_hammer_bans` database table if it goes missing, preventing SQL errors and "headers already sent" warnings.\n\n---\n\n## [2026-01-07] - Plugin Icon SVG Standardization\n\n### Changed\n\n- Standardized all 27 plugin icon SVGs to use uniform `viewBox="-44 -44 600 600"`.\n- All icons now have consistent 44px spillover space on all sides for elements extending beyond the circle.\n- Updated `plugin-circle.vue` icon width from 100% to 117% (600/512 ratio) to align inner circles with compass border.\n\n### Fixed\n\n- Resolved icon alignment issues where some icons appeared smaller or offset within the compass circle.\n- Icons with spillover elements (lantern handle, castle flags, etc.) now display correctly outside the circle.\n\n---\n\n## [2026-01-07] - Engine Refactor\n\n### Changed\n\n- Renamed `src/plugins` to `src/engine` to align with "Game Engine" naming convention.\n- Moved `src/plugins/alphabet-soup.api.ts` to `src/routes/alphabet-soup/alphabet-soup.api.ts`.\n- Renamed `src/utils` to `src/toolkit` to serve as a container for pure utility functions.\n- Introduced `src/engine/patches` directory for environment-specific code.\n- Moved `src/utils/admin_menu_fix.ts` to `src/engine/patches/wordpress-menu.ts`.\n- Updated all import paths and `vite.config.js` to reflect these changes.\n- Fixed type errors in `xp/store/index.ts` related to API response handling.\n\n---\n\n## [2026-01-07] - Asset Reorganization\n\n### Changed\n\n- Moved `src/fonts` folder to `src/assets/fonts` to align with standard asset organization.\n- Updated font paths in `src/styles/core/_variables.scss` and `src/assets/fonts/flaticon/_flaticon.scss` to reflect the new location.\n\n---\n\n## [2026-01-07] - Vue Template SyntaxError Fixes\n\n### Changed\n\n- Refactored `admin_menu_fix.ts` to use modern ES6+ arrow function syntax.\n- Improved robustness with safety checks for `window.jQuery` and existence of `menuRoot` element.\n- Standardized URL/Path parsing for more reliable matching in WordPress Admin.\n- Replaced `self.parents("li")` with `$self.closest("li")` and added check for `wp-first-item`.\n- Improved initial highlighting logic with loop breaking for performance.\n\n### Fixed\n\n- Resolved `SyntaxError: Unexpected identifier \'as\'` project-wide by removing invalid TypeScript `as` casts from Vue templates.\n- Fixed template syntax errors in:\n  - `routes-navigation-drawer.vue`\n  - `enchiridion-dash.vue`\n  - `enchiridion-recipes.vue`\n  - `sparkplug.vue`\n  - `xp-my-achievements-index.vue`\n- Resolved implicit `any` and `unknown` type errors in templates by improving controller prop types and adding helper methods.\n- Verified project-wide with `npm run type-check` (now passing with 0 errors).\n\n### Documentation\n\n- Updated `Component-Refactoring-Guide.md` with new standards for TypeScript usage in templates.\n\n---\n\n## [2026-01-07] - TypeScript Type System Improvements\n\n### Added\n\n- `src/types/index.ts` — Root barrel file for all type exports\n- `src/types/core/index.ts` — Barrel file for core type augmentations\n- `src/types/core/window.d.ts` — Global Window interface augmentation (jQuery)\n- `src/types/core/echarts.d.ts` — Type shims for vue-echarts and echarts modules\n\n### Changed\n\n- Moved global type declarations to centralized `src/types/core/` directory\n- Added barrel exports for cleaner imports: `import "@/types"` instead of full paths\n- Standardized import pattern using ES modules instead of triple-slash references\n- Eliminated `any` types in `admin_menu_fix.ts` with proper `JQueryStatic` typing\n\n### Fixed\n\n- All TypeScript errors resolved — `npm run type-check` now exits with 0 errors\n- Fixed navigation drawer interface extension (changed to type alias)\n- Refactored bazaar `grid` and `stats` controllers to Composition API\n- Fixed sparkplug computed property (added missing setter)\n- Installed `@types/jquery` for proper jQuery type support\n\n---\n\n## [2026-01-07] - Type-Check Cleanup (Phase 1)\n\n### Added\n\n- New type definition files in `src/types/plugins/`:\n  - `xp.d.ts` - XpUser, Achievement, Ability, SoundFxMixin interfaces\n  - `bazaar.d.ts` - BazaarProduct, BazaarOrder, BazaarCategory, BazaarPaging interfaces\n  - `lit-lamp.d.ts` - CronJob, CronData, FileInfo, LogInfo interfaces\n  - `alphabet-soup.d.ts` - Post interface\n\n### Fixed\n\n- Reduced type-check errors from 342 to 284 (~17% reduction)\n- Fixed Vue template typing using `{ item }: { item: TypeName }` pattern in slot bindings\n- Updated `xp-my-abilities.vue` to use Vuetify 3 menu activator pattern (`props` vs `v-on`)\n- Fixed `isMobile.ts` mixin with proper `defineComponent` and typed methods\n- Fixed `alphabet-soup.api.ts` with proper parameter types\n- Added TypeScript `lang="ts"` to `xp-my-abilities-index.vue` and `xp-my-accessories-index.vue`\n- Fixed `soundFx` computed property in XP level-up controllers\n\n---\n\n## [2026-01-07] - SCSS Import Fixes\n\n### Fixed\n\n- Resolved Sass compilation errors in multiple components caused by outdated and broken `@use "@/styles/variables"` and `@use "@/styles/mixins"` paths.\n- Removed redundant SCSS imports from `.vue` and `.scss` files as these are now automatically injected via `vite.config.js`.\n- Fixed broken imports in `lit-lamp`, `pixie-dust`, `enchiridion`, `xp`, and layout components.\n\n---\n\n## [2026-01-07] - Stylesheet Cleanup & Reorganization\n\n### Added\n\n- New folder structure: `core/`, `vendor/`, `layout/`, `utilities/`\n- `core/_typography.scss` - fonts and heading styles\n- `layout/_app-shell.scss` - html, body, v-application containers\n- `layout/_animations.scss` - keyframes (drift, float)\n- `_index.scss` files in each folder using `@forward` for module exports\n\n### Changed\n\n- Reorganized `_variables.scss`, `_mixins.scss`, `_colors.scss`, `_icon-colors.scss` into `core/`\n- Moved `_wordpress.scss` to `vendor/`\n- Moved `_utils.scss` to `utilities/`\n- Rewrote `app.scss` with modern `@use` syntax (no deprecation warnings)\n- Updated `vite.config.js` scss paths to `core/` folder\n\n### Removed\n\n- Deleted `_overrides.scss` (1038 lines of unused Bootstrap overrides)\n- Deleted `_general.scss` (malformed syntax, duplicated content)\n- Deleted `_base.scss` (contents split into new architecture)\n\n---\n\n## [2026-01-07] - Sparkplug Component Update\n\n### Added\n\n- Added `collapsed` prop to `sparkplug` component to allow starting the component in a collapsed state.\n- Enhanced initial state logic to support both `expanded` and `collapsed` attributes.\n\n---\n\n## [2026-01-07] - Prettier Formatting Update\n\n### Changed\n\n- Added `singleAttributePerLine: true` to `.prettierrc` to format HTML/Vue attributes on separate lines.\n\n---\n\n## [2026-01-07] - Charts Library Migration\n\n### Changed\n\n- Migrated from ApexCharts to ECharts for better performance and flexibility.\n- Replaced `vue3-apexcharts` with `vue-echarts` package.\n- Refactored `sparkplug` component to use ECharts `v-chart` component.\n- Updated chart configuration from ApexCharts format to ECharts option format.\n\n---\n\n## [2026-01-07] - Sparkplug Styling\n\n### Changed\n\n- Updated `sparkplug` header typography for a more premium look.\n- Enhanced timeline icons size and spacing.\n\n---\n\n## [2026-01-07] - Compass Layout Refactor\n\n### Fixed\n\n- Refactored `compass.vue` to resolve layout issues caused by incorrect `v-layout` usage in Vuetify 3.\n- Centered the navigation stepper using `v-row` and `v-col` with `justify="center"`.\n- Modernized the stepper buttons by migrating to `x-btn` atom and adding "flare" styling (01, 02 prefix).\n- Improved glassmorphism with `backdrop-blur-md` and updated spacing for better mobile-first responsiveness.\n- Fixed `compass-dashboard.vue` layout by replacing `v-layout` with `v-container`, resolving row/column stacking issues.\n- Updated `sparkplug` component to support an `expanded` prop, defaulting to `true` for immediate visibility of metrics.\n\n---\n\n## [2026-01-06] - Pixie Dust Plugin Implementation\n\n### Added\n\n- Complete Pixie Dust marketing pixel management plugin\n- Pre-built templates for Facebook, GA4, GTM, Google Ads, TikTok, LinkedIn, Pinterest\n- Custom post type `compass_pixie_pixel` for pixel storage\n- Vue frontend with dashboard, pixel list, and add/edit form\n- Automatic pixel injection via `wp_head`, `wp_body_open`, `wp_footer`\n- Conditional loading options (all, home, single, archive, shop)\n\n---\n\n## [2026-01-06] - Moving Castle Planning\n\n### Added\n\n- Created roadmap for Moving Castle WordPress Multisite management system\n- Defined 5-phase implementation plan (Network Dashboard → Site Management → Content Sync → User/Domain → Advanced)\n- Clarified scope: Theme switching handled by Enchanted Mirror, Moving Castle focuses on Multisite only\n- Documented UI concepts (Portal Dial, Portal Cards) and technical requirements\n\n---\n\n## [2026-01-06] - Alphabet Soup Fix\n\n### Fixed\n\n- Resolved `TypeError: Cannot read properties of undefined (reading \'loadPosts\')` in `alphabet-soup-index.controller.ts`.\n- Refactored `alphabet-soup-index.controller.ts` and `createUpdatePost.controller.ts` to use `useAlphabetSoupStore()` directly instead of `mapStores`.\n- Changed `alphabet-soup` store ID to `alphabetSoup` (camelCase) for better consistency and reliability.\n\n## [2026-05-27] - Bomb Bag Refinements\n\n### Added\n- Created `bomb-bag-lists.vue` to provide a full UI for managing Subscription Lists.\n- Added PrismEditor integration to `bomb-bag-composer.vue` and `bomb-bag-templates.vue` for syntax-highlighted HTML coding.\n- Added tooltips to icon buttons across Bomb Bag UI (Delete, Edit, Node Actions).\n- Created `docs/Bomb-Bag-System.md` architectural documentation.\n\n### Changed\n- Refactored `bomb-bag.routes.ts` meta titles to remove redundant "Bomb Bag" prefixes in the sidebar navigation.\n- Mass-updated FontAwesome icons across all Bomb Bag views from FA6 (`fa-solid`) back to FA5 (`fas`, `far`, `fab`) to ensure correct rendering.\n\n',Q=`# Cloudflare Email Routing & Vanity Email Architecture

This document describes the strategy and infrastructure for the YouMeOS vanity email system, leveraging Cloudflare Email Routing to provide users with a tiered spatial identity.

## Strategic Tiers

### Tier 1: The Community Layer (Free / Low-Cost)
- **Format:** \`[username]@mail.umeos.com\`
- **Purpose:** A streamlined, minimalist address for early adopters. It gets people into the ecosystem without giving away the premium brand real estate.
- **Routing Implementation:** Catch-all or programmatic routing on the subdomain \`mail.umeos.com\`.

### Tier 2: The Explorer Layer (Mid-Tier Paid)
- **Format:** \`@[concept].youmeos.com\` (e.g. \`@iam.youmeos.com\`)
- **Purpose:** For users willing to pay for a more customized, premium spatial identity. Users claim their specific "node" or "space" within the OS.
- **Routing Implementation:** Requires managing specific subdomain zones in Cloudflare or creating discrete aliases to forward to user-provided destination addresses.

### Tier 3: The Core / Official Members (Reserved)
- **Format:** \`firstname@youmeos.com\`
- **Purpose:** Strictly gated for the core team, partners, and high-tier foundational investors. Holding a root domain address proves the individual is part of the architecture itself.
- **Routing Implementation:** Carefully managed manual aliasing directly on the root \`youmeos.com\` zone in Cloudflare.

## Technical Setup (Cloudflare)

To implement this infrastructure programmatically using Cloudflare Email Routing, follow these guidelines:

### Prerequisites
1. Domain(s) registered and Active in Cloudflare (\`youmeos.com\`, \`umeos.com\`).
2. Cloudflare API Token with \`Email Routing:Edit\` permissions.

### Steps to Implement:
1. **Enable Email Routing:** Navigate to the specific Zone in Cloudflare dashboard -> Email -> Email Routing. Enable and let Cloudflare configure the necessary MX and TXT records.
2. **Create Destination Addresses:** Users must verify their destination inbox first (where emails will be forwarded). This is done via the Cloudflare API or Dashboard.
3. **Set Up Custom Rules:** Use Custom Addresses to link the vanity prefix (\`username@\`) to the verified Destination Address.

### Automation & API Integration
To fully automate Tier 1 and Tier 2 provision via the YouMeOS registration flow:
1. An endpoint in our application interacts with the **Cloudflare API**.
2. When a user requests \`xopher@mail.umeos.com\` to forward to \`xopher@gmail.com\`:
   - Add \`xopher@gmail.com\` as a Destination Address.
   - Wait for user to click the verification email.
   - Add a routing rule for \`xopher@mail.umeos.com\` pointing to that destination ID.

### Security & Sender Reputation
- *Outbound Sending:* Cloudflare Email Routing is purely for **inbound** forwarding. If users wish to *send* as their vanity email, they will need SMTP relay capabilities (e.g. Resend, Mailgun) or they map the address as a "Send Mail As" alias in Gmail using an external SMTP provider.
- *Root Domain Protection:* By strictly isolating Tier 1 (\`mail.umeos.com\`), we protect the main \`youmeos.com\` sender reputation from potential spam implications from open user signups.
`,K="# Design Tokens (Magic Hat & Magic Wand)\n\nThis document outlines the foundational CSS variables (Design Tokens) used by the **Magic Hat** theme and the **Magic Wand** plugin. \n\nThese variables define the \"Tech/Glassmorphism\" aesthetic of the COMPASS ecosystem and can be live-edited via the Magic Wand interface in the WordPress Customizer.\n\n## Naming Convention\nAll tokens use the `--mh-` (Magic Hat) prefix to prevent collisions with WordPress core or other plugins.\n\n## 1. Color System (Semantic Intent)\nInstead of abstract names like \"Primary\", colors are named based on their intended structural or interaction purpose. Core interface colors use a 4-tier functional state stack (Base, Hover, Active, Muted).\n\n> [!NOTE]\n> **Circadian Rhythm Integration:** All color tokens listed below are dynamically calculated. The system generates `--mh-color-{name}-light` and `--mh-color-{name}-dark` variants and seamlessly interpolates between them based on the user's local time using `color-mix()`. See Section 8 for details.\n\n### Brand\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-brand-base` | Main brand identity | `#62c9ff` |\n| `--mh-color-brand-hover` | Brand hover state | `#8be0ff` |\n| `--mh-color-brand-active`| Brand active/pressed state | `#40a0df` |\n| `--mh-color-brand-muted` | Faint background highlights | `#1a3a4d` |\n\n### Call To Action (CTA)\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-cta-base` | Main button color | `#ff3366` |\n| `--mh-color-cta-hover` | Button hover state | `#ff668c` |\n| `--mh-color-cta-active`| Button active/pressed state | `#e62050` |\n| `--mh-color-cta-muted` | Ghost button/faint highlights | `#4d1a26` |\n\n### Links\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-link` | Default link color | `#62c9ff` |\n| `--mh-color-link-hover` | Link hover state | `#ff3366` |\n| `--mh-color-link-active` | Link active/pressed state | `#e62050` |\n| `--mh-color-link-visited`| Link visited state | `#9b59b6` |\n\n### Surfaces & Backgrounds\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-body` | The absolute deepest background layer | `#0a0b10` |\n| `--mh-color-main` | The main content wrapper background | `#0f172a` |\n| `--mh-color-section`| Slightly elevated grouping background | `rgba(255, 255, 255, 0.02)` |\n| `--mh-color-card` | Highest elevation (Cards, popups) | `rgba(255, 255, 255, 0.05)` |\n\n### Text\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-text-main` | Primary reading text | `#f8fafc` |\n| `--mh-color-text-muted` | Secondary text | `#94a3b8` |\n| `--mh-color-text-inverse` | Text on top of brand/cta colors | `#0f172a` |\n\n### Status\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-color-success` | Success/Positive actions | `#10b981` |\n| `--mh-color-warning` | Warning/Caution actions | `#f59e0b` |\n| `--mh-color-danger` | Error/Destructive actions | `#ef4444` |\n| `--mh-color-info` | Informational messages | `#3b82f6` |\n\n## 2. Typography (The Voice)\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-font-heading` | Font family for headings | `'Outfit', sans-serif` |\n| `--mh-font-body` | Font family for body text | `'Inter', sans-serif` |\n| `--mh-font-mono` | Font family for code/tech vibes | `'JetBrains Mono', monospace` |\n\n### Font Sizes (Modular Scale)\n| Token | Size |\n| :--- | :--- |\n| `--mh-text-xs` | `0.75rem` (12px) |\n| `--mh-text-sm` | `0.875rem` (14px) |\n| `--mh-text-base` | `1rem` (16px) |\n| `--mh-text-lg` | `1.125rem` (18px) |\n| `--mh-text-xl` | `1.25rem` (20px) |\n| `--mh-text-2xl` | `1.5rem` (24px) |\n| `--mh-text-3xl` | `1.875rem` (30px) |\n| `--mh-text-4xl` | `2.25rem` (36px) |\n\n## 3. Spacing & Layout Engine (The Rhythm)\nSpacing is powered by a central **Base Spacing Unit** (`--mh-space-base`), managed in the Customizer. All other layout tokens are mathematically calculated from this core unit to ensure perfect proportional scaling.\n\n| Token | Calculation | Default Result (Base = 8px) |\n| :--- | :--- | :--- |\n| `--mh-space-1` | `calc(var(--mh-space-base) * 0.5)` | 4px |\n| `--mh-space-2` | `calc(var(--mh-space-base) * 1)` | 8px |\n| `--mh-space-3` | `calc(var(--mh-space-base) * 1.5)` | 12px |\n| `--mh-space-4` | `calc(var(--mh-space-base) * 2)` | 16px |\n| `--mh-space-5` | `calc(var(--mh-space-base) * 3)` | 24px |\n| `--mh-space-6` | `calc(var(--mh-space-base) * 4)` | 32px |\n| `--mh-space-7` | `calc(var(--mh-space-base) * 6)` | 48px |\n| `--mh-space-8` | `calc(var(--mh-space-base) * 8)` | 64px |\n\n> [!TIP]\n> **Tailwind Utilities:** These tokens automatically generate Tailwind-style utility classes globally. You can use `.p-1` through `.p-8` (and margin variants `.m-1`, `.gap-2`, etc.) anywhere in the HTML.\n\n## 4. Glassmorphism & Translucency (The Magic)\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-glass-blur-sm` | Light background blur | `4px` |\n| `--mh-glass-blur-md` | Standard background blur | `8px` |\n| `--mh-glass-blur-lg` | Heavy background blur | `16px` |\n| `--mh-glass-bg` | Standard glass background | `rgba(255, 255, 255, 0.05)` |\n| `--mh-glass-border` | Subtle glass border | `rgba(255, 255, 255, 0.1)` |\n\n## 5. Borders & Radii (The Shape)\n| Token | Size |\n| :--- | :--- |\n| `--mh-radius-sm` | `4px` |\n| `--mh-radius-md` | `8px` |\n| `--mh-radius-lg` | `16px` |\n| `--mh-radius-pill` | `9999px` |\n\n## 6. Elevation & Shadows (The Depth)\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-shadow-sm` | Subtle drop shadow | `0 1px 2px rgba(0, 0, 0, 0.3)` |\n| `--mh-shadow-md` | Standard drop shadow | `0 4px 6px rgba(0, 0, 0, 0.4)` |\n| `--mh-glow-brand` | Neon accent glow | `0 0 10px var(--mh-color-brand-base)` |\n\n## 7. Transitions (The Movement)\n| Token | Description | Default Value |\n| :--- | :--- | :--- |\n| `--mh-transition-fast` | For micro-interactions (hover) | `150ms ease-out` |\n| `--mh-transition-normal` | For larger component states | `300ms ease-out` |\n\n## 8. Circadian Rhythm Engine (The Clock)\nMagic Hat has completely abandoned manual \"Light/Dark Mode\" switches in favor of an earth-synced algorithmic cycle.\n\nA lightweight JavaScript calculator injected into `<head>` reads the user's local timezone clock and processes a continuous Cosine wave:\n- **12:00 PM (Noon)** = 100% Light\n- **12:00 AM (Midnight)** = 0% Light (100% Dark)\n- **6:00 AM / 6:00 PM** = 50% Mix\n\nThis value dynamically sets the `--mh-daylight` CSS percentage property every minute.\n\nAll core design tokens evaluate this percentage continuously using native CSS `color-mix()`:\n```css\n--mh-color-brand-base: color-mix(in srgb, var(--mh-color-brand-base-light) var(--mh-daylight), var(--mh-color-brand-base-dark));\n```\n\nThis guarantees that the application layout accurately reflects the current lighting environment of the user viewing the screen, without requiring them to press a single button.\n",$=`# Hello World!

Welcome to the YouMeOS Enchiridion, the central knowledge repository and documentation suite for the entire COMPASS ecosystem.

Whether you're exploring the Youniverse as a user, contributing as a developer, or architecting the **w⁴ Worldwide Webwork** underneath it all, this is your starting point.

## Navigating the Enchiridion

To the left, you'll find the primary navigation drawer outlining the hierarchical structure of the system's documentation:
- **00. Welcome**: You are here! Essential onboarding and introductions.
- **01. YouMeOS**: Documentation, user guides, and blueprints regarding the browser-based environment (OS officially standing for Omega Source, though users may define their own universal acronyms like Operating System).
- **02. COMPASS**: Details on the underlying engine, API structures, and data schemas running quietly under the hood to power the BlackBOX nodes and YouMeOS.
- **03. Platform Docs**: Global references, change logs, philosophies, and overarching notes. Start with the [Ecosystem Architecture Guide](./reference/Ecosystem-Architecture.md) to understand the Trillion-Dollar spatial grid we are building.

Enjoy your journey into the stars.
`,J=`# Project Philosophy: YouMeOS Design & UX Principles

> *"Creating concrete visions of a macroscopic prism... With a brilliant optimism and appropriate ambition"*

The design and user experience of YouMeOS and Project COMPASS are rooted in a deep philosophical foundation. Our interfaces are not merely tools; they are digital environments that reflect human awareness, intuition, and connection, aiming to honor the great beauty around us.

## The Anthem

\`\`\`text
Creating concrete visions of a macroscopic prism
With a brilliant optimism and appropriate ambition
To be open from the center, redirected to the moment
This is it love, this is it love, unrestrainable nature
We can change it from the edges, we can challenge all our borders
There is always a new leader, there is always a new order
Our pathway is proceeding and the way is always changing
We are free from what prevents us to realize our destination
Oh
Free from all old stories I've been told
I walk through the valley of my own shadow
Free from all old stories I've been told
I walk through the valley of my own shadow
Awareness is my virtue, and I'm grateful for the search to
Dive deep within my own mind and to trust the intuition
Of the lives I've lived before this, our essential form of gnosis
It's a simple form of freedom, it's as smooth as inhalation
Oh the exhale is releasing all the tension I've been feeling
On the surface and beneath me, I'm connecting to my spirit
And I'm here now right before you, I am present in this moment
And my life's work is to honor the great beauty all around you
Oh
Free from all old stories I've been told
I walk through the valley of my own shadow
Free from all old stories I've been told
I walk through the valley of my own shadow
Creating concrete visions of a macrocosmic prism
With a brilliant optimism and appropriate ambition
To be open from the center, redirected to the moment
This is it love, this is it love, unrestrainable nature
This is it love, this is it love, this is it love, this is it love
\`\`\`

## UX / UI Translation (The "Starship" Aesthetic)

The lyrical themes of the YouMeOS anthem directly translate into our architectural and design principles.

### 1. "Concrete visions of a macroscopic prism" (Glassmorphism)
Our UI acts as a prism—transparent, structured, and refracting light. 
We use \`backdrop-filter: blur()\` and semi-transparent backgrounds for containers to create depth and clarity. The interface doesn't block the view; it focuses it.

### 2. "Valley of my own shadow" (Dark Mode Default)
The canvas of YouMeOS is dark, representing the vast space of the cosmos and the introspective journey of shadow work. We assume dark backgrounds for a calm, non-extractive, and reflective experience.

### 3. "Brilliant optimism" (Neon Accents)
Against the darkness of the shadow valley, we use signature colors—like our neon Cyan (\`#62c9ff\`)—as highlights. These vivid accents act as a spark of hope, illuminating interactive elements and guiding the user's path.

### 4. "Smooth as inhalation" (Dynamic Animations)
Interactions must feel organic, responsive, and alive. We employ smooth micro-animations, gentle glass hover states, and transitions that make the software feel like it's breathing and "present in this moment". 

### 5. "Connecting to my spirit" (Zero-Entropy Design)
We strive for clean code, semantic atom-based components (\`<x-btn>\`, \`<x-card>\`), and reduced cognitive load. Our design system avoids clutter so the user can focus entirely on the great beauty around them, free from old constraints and stories.
`,Z=`# The W4 Protocol: Fractal Architecture & Civilizational Infrastructure

> *"From the Sovereign Individual to the Global Noosphere. Building the Operational Internet."*

This document defines the philosophical and architectural trajectory of YouMeOS and the COMPASS ecosystem. It outlines how a collection of WordPress plugins and a Vue-based spatial interface scale into a 4-dimensional engine capable of running global infrastructure.

---

## 1. The Civilizational Scale (The 4D Tesseract)

The traditional internet is built on 2D isolated spaces (websites) and walled 3D silos (SaaS platforms). YouMeOS is a 4-dimensional **Tesseract**—a network of networks where data, identity, and commerce move fluidly across dimensional boundaries without friction.

The architecture scales infinitely based on the "Box" deployed:
1. **Sovereign (The Individual):** The personal digital identity and vault (Omega Source).
2. **Business (The Local Hub):** The economic engine driving commerce and automated drip marketing (The Bazaar & Bomb Bag).
3. **Conglomerate (The Enterprise):** Cross-domain orchestration of multiple brands with a Single Customer View (Questbook).
4. **Metropolis (Municipal Infrastructure):** City-wide or county-wide networks running interconnected public services on a single shared database.
5. **Planetary (The W4 Protocol):** A borderless global operating system unifying disparate multi-networks.

---

## 2. The W4 Protocol (World Wide Web Work)

The **W4 Protocol** is the connective tissue of this global ecosystem. It defines the standards for how Sovereign boxes communicate, share state, and exchange value (Dirt micro-transactions). 

It ensures that while every node (BlackBOX to PalladiumBOX) is sovereign and completely owned by its user, they can natively interoperate. A user can drag a digital asset out of a municipal network and drop it into their personal Sovereign identity box without leaving the YouMeOS interface.

---

## 3. Fractal Architecture: Boxes Within Boxes

The true power of YouMeOS is its **Fractal Architecture**. It is designed to be packed into a massive Box (The Server/Node), but instantly unpacked into micro-boxes for the end user.

### The Macro-Boxes (Infrastructure)
*   **The w⁴ Protocol:** The central orchestrator for provisioning, managing, and navigating the vast network of YouMeOS environments.
*   **BlackBoxWhiteGlove & Buildablox:** The deployment engines that allow agencies and enterprises to stamp out customized, pre-configured Sovereign nodes at scale. 

### The Micro-Boxes (Sparks as PWAs)
YouMeOS does not trap functionality inside a single browser tab. **Every YouMeOS Spark is fundamentally designed as a standalone Progressive Web App (PWA).**

Because the frontend is decoupled from the WordPress core via the COMPASS REST API:
*   A user can "unpack" a specific tool—like the **Questbook CRM**—and install it directly on their iPhone as a solo mobile app.
*   A corporation doesn't just deploy a web portal; they instantly deploy a suite of standalone mobile applications for their employees. 
*   **The Paradigm:** The macro-box hosts the data; the micro-boxes (Sparks) are pre-packed PWAs distributed directly into the user's pocket.

---

## 4. The Backend Engine (COMPASS PHP Plugins)

To achieve this fractal nature without requiring massive proprietary SaaS infrastructure, YouMeOS hijacks the most ubiquitous web framework on earth: **WordPress**.

The **COMPASS PHP Plugins** act as the tectonic plates of the OS:
*   They enforce strict, future-proof database schemas (EAV model).
*   They expose airtight REST API endpoints (\`/questbook/v1\`, \`/magic-formula/v1\`).
*   They leverage \`WP Multi Network\` to achieve the cross-domain identity sharing required by the Tesseract.

By using WordPress as the dark-matter data layer, any of the 800 million WP sites on earth can be upgraded into a YouMeOS node simply by installing the plugins. 

---

## 5. The Path Forward

**How do we get there?**
1. **The Trojan Horse:** Distribute the COMPASS plugins to the existing WP market, converting legacy websites into API-first micro-nodes.
2. **The App Unboxing:** Finalize the PWA service workers so that Sparks can be easily detached and installed to home screens.
3. **The Multi-Network Matrix:** Harden the Moving Castle routing so that Titanium and Palladium boxes can seamlessly spin up and manage thousands of interconnected domains under a Single Customer View.
4. **The Global Tesseract:** Connect the disparate Networks via the W4 Protocol, allowing peer-to-peer data validation and asset transfer.
`,ee=`# YouMeOS Federated Identity Architecture

## The Concept

The **YouMeOS Federated Identity** system allows a user to carry an "MMO-style profile" natively built on hybrid Server-to-Server and Web3 (IPFS) mechanics across the entire YouMeOS Multiverse.

Every website running YouMeOS is treated as a separate "Universe". By adhering to this global standard, users can seamlessly transition between domains. They carry their identity, aesthetics, and global XP across their own galaxy (if not their own universe), while strictly submitting to the local permissions of whichever Universe they are visiting. This architecture transforms the YouMeOS ecosystem into a living Universe—or even a Multiverse.

## Authentication (AuthN) vs Authorization (AuthZ)

To avoid breaking privilege chains or creating backdoors between discrete YouMeOS servers, the system actively separates **Identity** from **Permissions**:

- **Identity (AuthN)** - *Who are you?* (Sync Key Handshake + IPFS Backpack)
- **Permissions (AuthZ)** - *What can you do here?* (Local Site Admin Control)

When Site B (the destination) queries Site A (the origin), Site A strictly strips out all session tokens and role keys (\`isAdmin\`). Plural realms only share the \`GlobalPlayerProfile\`. A shadow profile is created locally on Site B to govern permissions independently of where the user originally authenticated from.

## The Dual-Pipeline Architecture

### 1. Server-to-Server Pipeline (The Secure Vault)
The central secure back-channel built to withstand bad actors.
- **Payload:** Cryptographic Handshakes (Sync Keys), Auth tokens, direct message payloads.
- **Mechanism:** Standard encrypted REST API POST calls over HTTPS bypassing browser CORS restrictions. Server B connects to Server A securely validating the user's \`Sync Key\`.

### 2. IPFS Pipeline (The Complete Backpack)
A purely decentralized state-bucket. Stored on IPFS and served blazingly fast through CloudFlare IPFS Gateways (e.g., \`ipfs.youmeos.com\`).
- **Payload (The MMO Slate):** Profile layout preferences, Dark/Light Neon theme settings, unified Avatars, global \`mmo\` state (XP, Level, Badges).
- **Mechanism:** As long as the hash matches the User's verified profile, any YouMeOS UI can instantly read and render this config to make the user feel "At Home."

## The "Sync Key" Handshake Flow

**1. The Request:**
A user logged into Site A opens their settings and requests to sync with Site B (or uses a Universal Link).

**2. The Generation:**
Site A's backend spins up a temporary (\`expires_at\`), cryptographically secure single-use token tied to the user's origin signature. Concurrently, Site A ensures the latest visual layout/XP data is pinned to IPFS, appending the CID to the payload.

**3. The Courier:**
The User (or URL) brings the generic \`Sync Key\` token payload to Site B.

**4. The Verification Check:**
Instead of trusting the token, Site B makes a backend server-to-server request back to Site A: *"Hey Site A, here is a Sync Key someone gave me. Is it valid, and if so, who does it belong to?"*

**5. The Data Grant:**
Site A answers truthfully. Site B links the new CID to a local "Guest/Shadow" account exactly replicating the aesthetic/identity of the imported account without inheriting any local rights.

## Extension

By keeping the Global Profile extensible, custom Sparks on different sites can independently query \`mmo\` badges or even extend the type model to incorporate unique Web3 items, mounts, or titles across the Noosphere.

## Web3 Gateways

| Gateway | URL | Purpose |
|---------|-----|---------|
| IPFS Read | \`https://ipfs.youmeos.com/ipfs/{CID}\` | Fetch pinned profiles globally |
| Ethereum RPC | \`https://aether.youmeos.com\` | ENS resolution via raw JSON-RPC |

Pinning is handled via the **Pinata API** using \`VITE_PINATA_JWT\` from the environment. The composable pins \`GlobalPlayerProfile\` JSON and returns the CID.

## REST API Endpoints

| Method | Endpoint | Auth | Purpose |
|--------|----------|------|---------|
| \`GET\` | \`/xophz/v1/passport\` | Logged-in user | Returns current user's passport (CID, wallet, ENS, MMO) |
| \`POST\` | \`/xophz/v1/passport\` | Logged-in user | Updates passport fields in \`wp_usermeta\` |
| \`GET\` | \`/xophz/v1/passport/public/{user_id}\` | Public | Read-only passport for cross-site identity resolution |

**User meta keys:** \`youmeos_profile_cid\`, \`youmeos_wallet_address\`, \`youmeos_ens_name\`, \`youmeos_mmo\`

## Composable: \`useWeb3Gateways.ts\`

Located at \`src/mechanics/useWeb3Gateways.ts\`. Provides:

- \`connectMetaMask()\` — Prompts MetaMask, saves wallet + ENS to server
- \`reconnectWallet()\` — Silently restores wallet via \`eth_accounts\` (no popup)
- \`resolveENS(name)\` — Forward resolution via raw \`eth_call\` against ENS Registry
- \`syncENS(address)\` — Reverse resolution (wallet → \`.eth\` name)
- \`pinProfileToIPFS(profile)\` — Publishes \`GlobalPlayerProfile\` to IPFS via Pinata
- \`fetchProfileFromIPFS(cid)\` — Reads profile back from \`ipfs.youmeos.com\`
- \`loadPassport()\` — Hydrates state from WordPress REST API
- \`savePassport(payload)\` — Persists passport fields to \`wp_usermeta\`

**ENS Note:** Uses \`SubtleCrypto\` for namehash computation, which requires HTTPS. On HTTP dev servers, ENS resolution gracefully degrades while wallet connection still works. Server-stored ENS names are hydrated via \`loadPassport()\` regardless.

## UI Location

The Passport interface lives inside \`Nucleos > Authenticity > PASSPORT\` tab. It is the default sub-tab when opening the Authenticity settings category.

Files:
- \`apps/youmeos/app/sparks/settings/views/PassportView.vue\`
- \`apps/youmeos/app/sparks/settings/views/AuthenticityView.vue\` (parent)
`,ne='# Google Analytics Integration\n\n## Overview\n\nYouMeOS uses Google Analytics 4 (GA4) via `gtag.js` with tracker ID `G-YHY2WZFMDM`.\n\nAll analytics are routed through `apps/youmeos/mechanics/useAnalytics.ts` — a centralized module that:\n\n1. Checks cookie consent from Cookie Jar before firing events\n2. Provides typed helper functions for each event category\n3. Guards against missing `window.gtag` (dev mode, ad blockers)\n\n## Event Catalog\n\n### Auth Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `login` | `trackLogin(method)` | `useAuth.login()`, `LoginView` OAuth watcher |\n| `sign_up` | `trackSignUp(method)` | `useAuth.register()` |\n| `logout` | `trackLogout()` | `useAuth.logout()` |\n| `password_reset_requested` | `trackPasswordReset()` | `useAuth.requestPasswordReset()` |\n\nMethods: `"credentials"`, `"discord"`, `"google"`\n\n### Navigation Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `page_view` | `trackPageView(path, title)` | `router.afterEach` guard |\n\n### Welcome Screen Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `welcome_action_click` | `trackWelcomeAction(action)` | `WelcomeLanding.vue` CTA handlers |\n| `fullscreen_prompt_response` | `trackFullscreenPrompt(accepted)` | `WelcomeLanding.handlePromptResponse` |\n\nActions: `"weave_youniverse"`, `"tour_youniverse"`, `"enter_youniverse"`, `"tesseract_youmeverse"`\n\n### Engagement Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `tour_started` | `trackTourStarted()` | `useTourGuide.startTour()` |\n| `tour_ended` | `trackTourEnded(completed)` | `useTourGuide.endTour()` |\n\n### Media Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `audio_play` | `trackAudioPlay(stationId)` | `useAudio.playTrack()` |\n| `audio_station_change` | `trackStationChange(id, title)` | `useAudio.setTrack()` |\n\n### Migration Events\n| Event | Function | Trigger Location |\n|---|---|---|\n| `migration_started` | `trackMigrationStarted(url, scope, isDry, tables)` | `moving-castle.controller.ts` on import start |\n| `migration_completed` | `trackMigrationCompleted(params)` | `moving-castle.controller.ts` on import success |\n| `migration_failed` | `trackMigrationFailed(url, dur, err, isDry)` | `moving-castle.controller.ts` on import error |\n\nParams for `migration_completed`: `sourceUrl`, `durationSeconds`, `tablesMigrated`, `rowsMigrated`, `isDryRun`, `scope`\n\n### Privacy Events\n| Event | Function | Available For |\n|---|---|---|\n| `cookie_consent_update` | `trackConsentUpdate(a, p, m)` | Cookie Jar spark |\n\n## Cookie Consent\n\nAll events check `youmeos_consent` cookie before firing. If the cookie\'s `analytics` field is `false`, no events are sent. If the cookie is absent (pre-consent), events are allowed by default.\n\n## Adding New Events\n\n1. Add a typed export function to `useAnalytics.ts`\n2. Import and call it at the relevant trigger point\n3. Add to this doc\'s Event Catalog\n4. Re-export via `mechanics/index.ts` (already done via barrel)\n\n## Key Files\n\n- `apps/youmeos/mechanics/useAnalytics.ts` — central module\n- `apps/youmeos/routes/router.ts` — SPA page_view guard\n- `src/mechanics/useAuth.ts` — auth event triggers\n- `apps/youmeos/routes/welcome/WelcomeLanding.vue` — welcome CTA triggers\n- `apps/youmeos/mechanics/useTourGuide.ts` — tour lifecycle triggers\n- `apps/youmeos/mechanics/useAudio.ts` — media event triggers\n- `apps/youmeos/index.html` — gtag.js script tag\n',te=`# Authenticity & Licensing System

## Overview
The Authenticity & Licensing system manages user sovereignty tiers and digital credentials within the YouMeOS ecosystem. It provides a visual interface for license activation and tier management.

## Sovereignty Tiers
YouMeOS uses a four-tier "Box" licensing model:

1. **BlackBOX (Entry)**
   - Entry-level sovereignty for individual agents.
   - Standard Sparks access & Community support.
   - Manual node synchronization.
   - Price: $14.99/mo

2. **BronzeBOX (Pioneer)**
   - Enhanced telemetry and stable core hosting.
   - Advanced protection & heuristics.
   - Priority Forge access.
   - Automatic node recovery.
   - Price: $34.99/mo

3. **SilverBOX (Navigator)**
   - High-tier performance for professional digital navigators.
   - Full Galaxy hosting capabilities.
   - Multi-core synchronization.
   - Unlimited Sparks access.
   - Price: $74.99/mo

4. **GoldBOX (Architect)**
   - The ultimate Youniverse experience. Whiteglove infrastructure.
   - Dedicated Node Instance & Custom Domain Mapping.
   - Alpha Feature Access.
   - Price: $129.99/mo

## Implementation Details
- **State Management**: Handled via \`CompassStore\` (\`src/routes/compass/store/index.ts\`).
- **Persistence**: License keys and tiers are persisted to \`localStorage\` to survive session restarts.
- **UI Components**: 
  - \`AuthenticityView.vue\`: Main settings module for licensing.
  - \`AuthenticityView.scss\`: Glassmorphic styles and status indicators.

## License Activation
Licenses are activated by entering a key in the Authenticity settings or synced via the w4.youmeos.com identity bridge.
- Keys starting with \`BLCK-\` grant **BlackBOX** status.
- Keys starting with \`BRNZ-\` grant **BronzeBOX** status.
- Keys starting with \`SLVR-\` grant **SilverBOX** status.
- Keys starting with \`GOLD-\` grant **GoldBOX** status.

## Future Plans
- **Backend Verification**: Integration with Hall of the Gods auth servers for cryptographic key validation.
- **Feature Gating**: Dynamically enabling/disabling Sparks based on the current license tier.
- **Auto-Renewal**: Integration with Patreon API for real-time status updates.
`,oe=`# Bazaar POS Premium Upgrades

This document outlines the architecture, integration patterns, and operational usage of the high-end premium upgrades added to the YouMeOS COMPASS Bazaar Point-of-Sale (POS) system.

## Architectural Overview

The Bazaar POS system has been enhanced with state-of-the-art sensory feedback, Customer Relationship Management (CRM) connectivity with real-time gamified XP rewards, register session reconciliation, and advanced glassmorphic control decks. 

\`\`\`mermaid
graph TD
    A[Bazaar POS View] -->|Barcode Scan / Input| B(Web Audio Synth Feedback)
    A -->|Cart Pulse animation| C(Sidebar Neon Glow)
    A -->|CRM Lookup Search| D(WP Customer Directory)
    D -->|Link Profile| E(Pinia pos.store: selectedCustomer)
    A -->|Checkout Submit| F(PHP: createPosOrder)
    F -->|Assign WP User ID| G(WC Order Allocation)
    F -->|Trigger Action Hook| H(XP System Rewards)
    A -->|Register Shift Stats| I(Local Shift Reconciliation)
    I -->|Printer Utility| J(80mm Thermal Receipt Layout)
\`\`\`

---

## 1. Barcode Scanner Sensory Feedback
Upon resolving a scanned barcode, the POS triggers simultaneous auditory and visual cues to replicate high-end physical checkout registers.

### Auditory Synth (Web Audio API)
To avoid bundling heavy binary audio assets (\`.mp3\` or \`.wav\`), the system generates high-fidelity sound procedurally in [bazaar-pos.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue):
- **Frequency:** \`880Hz\` (Crisp A5 register pitch).
- **Volume Envelope:** \`0.12\` gain initial, decaying exponentially to \`0.01\` over \`120ms\` for a punchy, clean arcade feel.
- **Web Audio Context:** Created dynamically to prevent standard browser autoplay blocking flags.

### Visual Neon Flash
- Binds to the Cart sidebar container: \`:class="{ 'neon-pulse-glow': isCartPulsing }"\`
- Uses a CSS keyframe animation (\`neonPulse\`) that applies an intense hardware-accelerated glowing cyan shadow (\`#62c9ff\`) to the sidebar container borders during scan resolution.
- Simultaneously pushes a floating toast via \`magicCloak.showDirectHint\` outlining the product title and updated cart quantity.

---

## 2. Customer CRM Lookup & XP Rewards Linkage
Checkouts can now be bound to registered WooCommerce customer profiles in real-time, feeding directly into the YouMeOS gamification engine.

### CRM User Queries
An autocomplete combobox queries the WordPress user database via \`WP_User_Query\` on typing:
- Searches by \`username\`, \`nicename\`, \`display_name\`, and \`email\` using wildcard criteria.
- Returns \`{ id, name, email, phone }\` to avoid leakage of administrative credentials.

### Order Allocation & XP Earning Hook
When a transaction is finalized:
- The backend order processor (\`createPosOrder()\`) intercepts the \`customerId\` payload parameter.
- Executes \`$order->set_customer_id($customer_id)\` and copies billing profile attributes.
- Triggers the native COMPASS XP hook:
  \`\`\`php
  do_action('xophz_compass_record_action', 'bazaar_pos_purchase', $customerId, [
      'order_id' => $orderId,
      'total' => $total_due
  ]);
  \`\`\`

---

## 3. Register Shift Reconciliation
Allows cashiers to monitor current register session sales parameters and produce physical reconciliation receipts.

### Live Session Aggregates
The Pinia store (\`pos.store.ts\`) tracks a reactive register shift session model:
- \`shiftSales: { cash, card, coupons, customDiscounts }\`
- Automatically increments totals upon every checkout action depending on the chosen payment gateway (e.g. cash, Stripe, PayPal).

### 80mm Print Layout
The shift reconciliation modal mounts a printing utility (\`printShiftSummary\` invoking \`window.print()\`) styled strictly for thermal receipt printers:
- Under \`@media print\`, hides the standard viewport dashboard grids.
- Positions the register shift card at \`width: 80mm\` centered with complete black text on a clean white background.
- Eliminates administrative headers and modal backdrop elements for a clean paper cut.

---

## 4. Stacked Glassmorphic Control Deck
The promotions and totals panel at the base of the Cart sidebar has been reorganized:
- **Promo Field:** Positioned at the top of the stack, utilizing custom neon focused inputs and inline coupon apply button elements.
- **Custom Discount:** A prominent, large full-width \`<x-btn>\` styled using high-end glassmorphism mixins (\`border border-white-10\`, glowing text shadow, percent tag icon).
- **Vuetify Compliant Primitives:** Contains absolutely zero raw HTML wrapper tags (\`div\`, \`span\`), enforcing the strict layout guidelines of the platform.

---

## 5. Dynamic Site Branding & Centered SVG Barcode
The receipt card handles dynamic store configurations and pristine barcode rendering.
- **Dynamic Site Branding:** Fetches \`siteTitle\` from \`window.xophzCompassSettings.siteName\` dynamically rather than hardcoding headings.
- **High-Res Favicon Parsing:** Recursively inspects standard link elements in the DOM to filter for high-definition sizes (e.g. \`sizes="192x192"\`) and falls back to apple-touch-icons, ensuring a crisp site logo prints rather than a blurry standard favicon.
- **Centered SVG Barcode Generator:** Measures the sum of the generated barcode stream's bar-widths and applies a calculated offset \`Math.max(0, (300 - totalWidth) / 2)\` within the \`300px\` SVG viewBox. This positions the barcode dead-center on the receipt regardless of how many digits the order ID contains.

---

## 6. Isolated Receipt Printing & Secure QR Verification
Thermal printing has been fully isolated and linked directly to secure verification page resources.

### Absolute Print Isolation
The \`@media print\` style overrides hide the main site background container (\`#wpwrap\`), the WordPress admin bar (\`#wpadminbar\`), dialog backdrop overlays (\`.v-overlay__scrim\`), card headers, receipt delivery inputs, and action buttons. 
Containment layers are reset to static blocks to prevent browser absolute-centering or grey scrim overlays from polluting the print job. The receipt area prints at \`width: 80mm\` on a pure white background with black typography.

### Secure QR Verification Page
An eager-loading verification QR code is generated underneath the barcode pointing to:
\`{siteUrl}/?xophz_bazaar_receipt={orderId}&key={orderKey}\`
Scanning this QR code directs the user to a secure, public receipt page in WordPress, confirming the purchase credentials using native WooCommerce order keys.
`,ae=`# Sovereignty Box Architecture & Value Ladder

## Overview
This document outlines the 8-tier "Box" ecosystem designed to scale YouMeOS into a high-fidelity, customer-funded infrastructure. Every tier is architected to provide increasing levels of **Sovereignty, Performance, and Redundancy**.

---

## 💎 The Value Ladder

### Phase 1: The Personal Layer (Entry & Basic)
*Target: Individual users, hobbyists, and digital citizens.*

#### ⬛ BlackBOX ($14.99/mo) - "The Entry Node"
*   **Interface:** Black Compass
*   **Infrastructure:** Dedicated WP Environment
*   **Specs:** 10GB SSD Storage | 512MB RAM / 1 vCPU
*   **Included Sparks:** Passport, Identity, Neon-Notes, Notepad, Free SSL.
*   **Gating:** Limited to 1 personal instance. Standard "YouMeOS" branding.

#### 🟫 BronzeBOX ($34.99/mo) - "The Pioneer Node"
*   **Interface:** Bronze Compass
*   **Infrastructure:** Dedicated WP Environment
*   **Specs:** 25GB SSD Storage | 1GB RAM / 1 vCPU
*   **Included Sparks:** All BlackBOX + \`Magic-Formula\` (Pro Form Builder), \`Shrink-Ray\` (Image Opt), Analytics.
*   **Gating:** Basic telemetry metrics unlocked.

---

### Phase 2: The Professional Layer (Growth & Productivity)
*Target: Creators, small business owners, and active digital navigators.*

#### ⬜ SilverBOX ($74.99/mo) - "The Navigator Node"
*   **Interface:** Silver Compass
*   **Infrastructure:** Dedicated WP Environment
*   **Specs:** 65GB NVMe Storage
*   **Included Sparks:** All BronzeBOX + \`Brand-Unicorn\` (White-Labeled Admin), \`Lead-Magnet\` (Marketing Pop-ups), \`Pro-Force-Field\` (Security), \`Lens-of-Truth\` (Uptime), Automated Reports.
*   **Gating:** Optimized for high-fidelity content creation.

#### 🟨 GoldBOX ($129.99/mo) - "The Architect Node"
*   **Interface:** Gold Compass
*   **Infrastructure:** Multisite Capable Environment
*   **Specs:** 160GB NVMe Storage | 8GB RAM / 4 vCPUs
*   **Included Sparks:** All SilverBOX + \`Bazaar\` (Commerce w/ Conversion tracking), Health Check (Quarterly Audit), Auto-Healing.
*   **Gating:** Priority Routing (Senior Support). Network Admin control.

---

### Phase 3: The Infrastructure Layer (Power & Scale)
*Target: Developers, agencies, and high-frequency data nodes.*

#### 💠 PlatinumBOX ($299/mo) - "The Sovereign Node"
*   **Interface:** Platinum Compass
*   **Infrastructure:** Multisite Capable Environment
*   **Specs:** 320GB NVMe Storage | 16GB RAM / 6 vCPUs
*   **Included Sparks:** All GoldBOX + Platinum Compass Suite.
*   **Gating:** Unrestricted compute resources for WebGL/WebGPU rendering.

#### ☢️ UraniumBOX ($650/mo) - "The Nuclear Node"
*   **Interface:** Uranium Compass
*   **Infrastructure:** Enterprise Multisite Ready
*   **Specs:** 640GB NVMe Storage | 32GB RAM / 8 vCPUs
*   **Included Sparks:** All PlatinumBOX + Uranium Compass Suite.
*   **Gating:** High-Priority Telemetry pipelines. Raw API access.

---

### Phase 4: The Elite Layer (Redundancy & Sovereignty)
*Target: Enterprise, organizations, and the "Hall of the Gods" elite.*

#### 🔘 TitaniumBOX ($1250/mo) - "The Guardian Node"
*   **Interface:** Titanium Compass
*   **Infrastructure:** Enterprise Multisite Ready
*   **Specs:** 1.2TB NVMe Storage | 64GB RAM / 16 vCPUs
*   **Included Sparks:** All UraniumBOX + Titanium Compass Suite.
*   **Gating:** Multi-Region Redundancy. Sovereign Vault Recovery.

#### 🔷 PalladiumBOX ($2499/mo) - "The Celestial Node"
*   **Interface:** Palladium Compass
*   **Infrastructure:** Unlimited Network Scaling
*   **Specs:** 1.6TB NVMe Storage | 96GB RAM / 24 vCPUs
*   **Included Sparks:** All TitaniumBOX + Palladium Compass Suite.
*   **Gating:** Critical Response (< 1 Hour SLA). Full White-Label Federation.

---

## 🛠️ Technical Execution: Feature Gating

The \`CompassStore\` will enforce these tiers using a **Waterfall Logic**:
1.  **Identity Fetch:** On login, \`getCurrentUser()\` pulls \`license_tier\`.
2.  **Capability Map:** The OS maps the tier to a bitmask of allowed Sparks and Infrastructure flags.
3.  **UI Feedback:**
    *   **Locked Sparks:** Appear with a subtle "Tier Lock" icon and a direct link to \`w4.youmeos.com\` for upgrade.
    *   **Active Tier Glows:** The \`AuthenticityView\` renders the specific glow (e.g., Uranium Green or Gold Amber) to provide immediate status feedback.

## 📈 Infrastructure Scaling

This architecture ensures that as the user's need for **Sovereignty** grows, the system scales to provide the necessary resources, redundancy, and security. By productizing the "Box" as a container for digital life, we provide a clear path for users to invest in their own private, high-fidelity digital ecosystem.
`,ie=`# Compass Suite: Early Access Pricing & Marketing Proposal

## The Core Philosophy
**The Software is Free. The Convenience is Premium.**

Our marketing strategy hinges on a powerful, irresistible offer: **My Compass Suite is 100% Free.** We believe in empowering our users with unrestricted access to the ultimate digital ecosystem. However, great software requires robust infrastructure. 

## The Early Access Offer (Pre-Public Release)
Until the official public release of My Compass Suite, we are offering an exclusive Early Access program. 

**The Caveat:** During this pre-release phase, we handle all the technical heavy lifting. We host, maintain, and license the suite directly on our premium servers to ensure a flawless, high-performance experience.

### Simple, Transparent Pricing
We are keeping the pricing structure exceptionally clean and straightforward. No hidden fees, no confusing tiers.

*   **My Compass Suite Software:** **$0** (Free forever)
*   **Early Access Hosting & Licensing:** **$99 / month** (or $1200 / year)

### What the $99/Month Covers
By subscribing to the Early Access program, users aren't buying the software; they are subscribing to peace of mind and premium infrastructure:
*   **Turnkey Hosting:** Fully managed hosting on our secure, high-speed servers.
*   **Zero Setup Required:** We handle the complex deployment and configuration.
*   **Continuous Updates:** Seamless, automatic updates as we push new features pre-launch.
*   **Priority Support:** Direct access to our team while we refine the product for public release.

## Marketing Messaging & Angles

### 1. The "Own Your Data" Angle
*"Get the ultimate operating system for your digital life, completely free. For just $99/month, we'll host it on our enterprise-grade servers so you can focus on building, not managing infrastructure. Once it's public, you can take it anywhere—but you'll probably want to stay."*

### 2. The "Early Adopter Advantage" Angle
*"My Compass Suite will change the way you interact with the web. The software is free. Join our Early Access program for $99/month to get a fully managed, hosted instance right now, before the rest of the world catches on."*

### 3. The "Transparent Value" Angle
*"No complex tiers. No feature gating. Just one clean price: $99 a month for us to host, maintain, and license the entire suite for you while we prepare for public launch. The software itself? That's always free."*

## Next Steps
1.  **Update Landing Pages:** Reflect the "$99/mo Early Access" messaging on the main Compass website.
2.  **Streamline Checkout:** Ensure the checkout process clearly highlights that the software is free, and the user is paying for the hosted early access license.
3.  **FAQ Creation:** Build an FAQ section addressing what happens after the public release (e.g., options to self-host or remain on our managed servers).
`,se=`# Dirt: The Distributed Digital Mineral Economy

## Overview
Dirt is the foundation of the YouMeOS gamified economic engine. Moving away from the exclusionary, USD-pegged, hyper-financialized models of traditional crypto, YouMeOS grounds its tokenomics in a "Digital Mineral" hierarchy. 

## 1. The Global Unit Peg: "Dirt Cheap"
The base currency of YouMeOS is literally called **Dirt**. 

### The Earth Cent & Algorithmic Stability
Dirt is mathematically pegged to a "Global Average Unit" (an aggregate index of all granular global fiat currencies). 

**How does it hold its value?**
It operates as an **Algorithmic Stablecoin** powered by decentralized "Oracles" and the Synthesis Engine.
1. **The Global Oracle (The Seers):** A decentralized network of data-fetchers constantly pulls the live foreign exchange (FX) rates of all granular world currencies (USD, EUR, JPY, INR, NGN, etc.). The smart contract calculates the exact average value across all these currencies in real-time. This is the "Earth Cent" target price.
2. **Elastic Supply (The Mint/Burn Cycle):** 
   - **If Dirt is too expensive (High Demand):** The smart contract automatically mints *more* Dirt. It increases the "drop rate" for users performing daily tasks or sells it into liquidity pools. The increased supply brings the price back down to the exact Earth Cent average.
   - **If Dirt is too cheap (Low Demand):** The system incentivizes "Synthesis." It offers highly profitable blueprints for users to compress their Dirt into Quartz or Gems. This acts as a massive "burn" mechanism. As users burn their Dirt, the circulating supply shrinks, driving the price back up to the exact Earth Cent average.

- It is untethered from the US Dollar or any single nation's monetary policy.
- Its value is designed to be around the equivalent of a penny, making it "dirt cheap" and psychologically frictionless to spend.
- It acts as an egalitarian universal translator for human value.

### Utility vs. Hoarding
Because Dirt is tied to a global mathematical average, speculators cannot pump its price to the moon. Its purpose is high-velocity utility: tipping, micro-transactions, unlocking features, and acting as the foundational raw material for synthesis.

## 2. The Two-Tiered Economy & Transmutation
To protect the real-world value of Dirt from botting and exploitation, the YouMeOS economy is split into two layers: the Internal Gamification Layer (Off-Chain) and the Cryptographic Layer (On-Chain).

### The Internal Layer (The Arcade & Social Tipping)
Within the OS, users earn internal, off-chain points. This allows for fast, free, and highly granular gamification without incurring blockchain gas fees. But these are not just hoarded—they are the **social currency of the network**.

**The Granular Value of GP: Emotional Ledgers & Reactions**
At its absolute base level, one primary way to earn Game Points (GP) is through human interaction—specifically, the "click" of an emotional reaction. It is important to note that *GP is not cryptocurrency*; it is the internal, off-chain gamified social currency. 
*   **The Emoji Exchange:** The system acts as an exchange that "buys" an emoji reaction from a user for exactly 1 GP (though conversion scales may become dynamic based on demand). This is a purely gamified transaction to encourage network activity.
*   **The Emotional Ledger (Anti-Bloat Architecture):** To track which emotions a user is "selling" without causing massive database bloat (e.g., writing a new row for every single click in MySQL), YouMeOS utilizes a **Rolling JSON Tally**. Instead of logging every transaction permanently, the server simply updates an aggregated JSON object on the user's metadata (e.g., \`{"❤️": 402, "🔥": 12, "😭": 55}\`). This maintains a lightweight "Emotional Ledger" without the server overhead. (Note: Future iterations may pipe this raw click data through a decentralized p2p network like Gun.js or Nostr relays, keeping local DB footprint at zero while creating a global emotional graph).
*   **Empathy Detection:** By reading this lightweight JSON ledger, the system tracks what emotions a user is expressing the most. If a profile is predominantly selling sad or distressed emojis, the system can algorithmically identify that the user might be depressed and proactively route uplifting content, community support, or "light" to their feed.

**Peer-to-Peer Content Grading:**
The Khepri Ladder acts as a unified tipping mechanism. Instead of generic "likes," users grade content by directly transferring their assets. This masks the complex math behind fun, human interactions:
*   🪙 **1 GP (Reaction):** A basic nod of approval or emotional expression.
*   ⭐ **1 Life (1-UP):** Great content (Transfers 100 GP).
*   ❤️ **1 Heart (Love):** Deep appreciation (Transfers 4 Lives).
*   ✨ **1 Fairy (Bless):** Top-tier contribution (Transfers 5 Hearts).
*   ☄️ **1 Wish (Grant):** Life-changing insight (Transfers 7 Fairies).
*   🐞 **1 Scarab (Forge):** Unparalleled value.

When a creator's post goes viral, they accumulate these assets directly from the community, organically building their swarm of Golden Scarabs to eventually Transmute into real-world wealth.

**The Labor & Service Protocol (P2P Bartering):**
Wealth generation is not limited to algorithmic rewards and social tipping. YouMeOS acts as a borderless digital marketplace where users can directly trade their real-world skills, labor, and services in exchange for the ecosystem's assets. 
*   A developer can code a custom Spark for a business and be contracted for 500 Golden Scarabs.
*   An artist can design a logo or digital asset in exchange for Wishes or Fairies.
*   This creates a robust, closed-loop bartering system. Users can hire global talent without ever needing to convert to fiat currency. This gives immediate, intrinsic, real-world value to the gamified assets simply based on the human labor they can purchase.

### The Cryptographic Layer (Transmutation)
**Dirt** is the actual, on-chain cryptocurrency. You cannot "farm" Dirt directly. Instead, you must **Transmute** your internal gamified assets into Dirt through a strict cryptographic gateway known as **The Alchemist Protocol**.

To successfully sign a transaction that mints Dirt on the exchange, a user must satisfy four non-negotiable vectors. This guarantees that only proven, active human contributors can extract real-world value, acting as an absolute firewall against bot networks:

1.  **Material Cost:** The user must provide the exact aggregate gamified material (e.g., exactly 500 Golden Scarabs to forge 1 Dirt).
2.  **The Reputation Floor:** The user must hold a minimum threshold of lifetime **Reputation Points (RP)** to even access the forge. If your RP is too low, the system considers you an unverified actor or a bot.
3.  **The Reputation Burn:** Transmutation is an alchemist transmutation process. Executing the mint permanently burns a specific amount of RP (\`-X RP\`). You are literally spending your built-up community trust to extract financial value.
4.  **The Velocity Gate (Alchemist Status):** You cannot just hoard RP and go dormant. Transmutation requires current **Ability Point (AP) Velocity**. You must have generated a specific amount of AP within a rolling time period leading up to the mint. 
    *   *The Scaling Rule:* The larger the Dirt payout you are attempting to mint, the higher the required AP velocity, and the longer the sustained time period must be. You must prove you are *currently* active and contributing to the network.

## 3. The Apex Minerals & The Anti-1% Protocol
Once a user holds Dirt, they have entered the true on-chain economy. However, Dirt is merely the foundation. To lock in a base economics for the core system and prevent runaway inflation, users can transmute Dirt under extreme pressure into higher-tier **Apex Minerals** (e.g., Quartz, Rubies, Emeralds, Diamonds). 

**Strict Tier Caps:**
Every tier above Dirt has a mathematically hard-capped global supply. The higher the value of the mineral, the fewer can ever exist.

**The Anti-1% Gating Mechanism:**
To solve the modern global wealth disparity (where the top 1% simply buys up all valuable assets), the highest valued tokens (The Core Crystals) cannot simply be purchased with fiat liquidity. 
*   They are heavily gated behind the Alchemist Protocol. 
*   Even if a billionaire attempts to buy all the Dirt, they cannot transmute it into Core Crystals without an immense, sustained **Reputation (RP)** and actual network **Proof-of-Contribution (AP)**. 
*   They are held in the "System Treasury" (The Mantle/Core) and distributed *only* by the system protocol to users who actively run hosting nodes, develop features, and maintain the network.

By aggressively gating the highest tiers of wealth behind human reputation and contribution, YouMeOS aims to create a singular, balanced global currency structure that permanently prevents a financial oligarchy.
*   These top-tier tokens represent network equity and governance power, rather than just spending power.

## 4. The "Pay Dirt" Experience
When a user hits a milestone or their hosted node processes a batch, they "hit pay dirt." The terminology is universally understood, approachable, and strips away the elitism of typical Web3 jargon. It makes building a network fun, grounded, and rewarding.
## 5. Macro-Economic Safeguards & The Hardware Layer (DePIN)
To ensure this digital economy interacts flawlessly with the real world, YouMeOS relies on physical hardware, localized inflation algorithms, and fiat liquidity bridges.

### The Fiat Bridge: The Blackbox & WWWW
A digital currency only survives if real-world capital backs it. YouMeOS solves the "Cold Start Liquidity" problem through its hardware ecosystem: **The Blackbox** and the **WWWW** (World Wide Web Wallet).
*   **The Hardware Subsidy:** When a user purchases a physical Blackbox hosting node, **10% of that fiat purchase** is injected directly into the YouMeOS Liquidity Pool (LP) to back the value of Dirt.
*   **The Point Rebate:** The user receives **5% of their purchase back as GP**, instantly giving them social ammunition.
*   **The Baseline Peg:** This hardware influx establishes a foundational mathematical floor. At inception, the baseline peg is engineered so that **1 Dirt (42,000,000 GP) = $0.01 USD**, fully backed by actual hardware sales. As the network scales and more capital enters via marketplace gas fees, this floor rises.

### Decentralized Consensus of Value (The Sunburst)
The system does not arbitrarily decide what is "valuable." The users do.
*   Because transferring assets (Hearts, Fairies) costs the user their own hard-earned points, the act of tipping is an un-fakeable cryptographic proof of value.
*   The system tracks this flow of wealth using a **Sunburst Wheel** algorithm, which aggregates global sentiment to determine what the world currently finds valuable, adjusting Reputation (RP) yields accordingly.

### Algorithmic Geo-Balancing (Anti-Inflation)
A core tenet of YouMeOS is that a farmer running a node in rural India provides the exact same cryptographic value to the network as a software engineer in Silicon Valley. 
*   If a user resides in a country suffering from hyperinflation or economic collapse, the YouMeOS global wallet algorithm detects this disparity.
*   It dynamically adjusts and increases the value weight of their payouts. By paying out based on equalized global purchasing power rather than arbitrary USD exchange rates, the system actively fights local poverty and balances the global economic structure.

### DePIN & The DAO Core Crystals
YouMeOS is a **Decentralized Physical Infrastructure Network (DePIN)**. The WordPress/PHP core and Vue frontend literally live on the Blackboxes purchased by users.
*   Every person buying a Blackbox physically creates and expands the system.
*   Because users provide the actual hosting infrastructure, they are rewarded with the highest tier of the economy: **The Core Crystals**.
*   **The 100-Year Governance:** The Core Crystals are not just wealth; they are the ultimate **DAO Tokens**. Holding Core Crystals grants governance voting rights over the core operating system, allowing the proven, decentralized network of hosters to guide the upgrades of digital civilization for the next 100 years.
`,re=`# Hall of the Gods: Ecosystem Overview & Business Model

This document serves as the single source of truth for the overarching business model, entity hierarchy, and customer funnel within the Hall of the Gods ecosystem. 

Our digital infrastructure is designed to bridge the gap between complex web management and an intuitive, sovereign digital experience. The ecosystem is composed of five distinct, yet interlocking, entities:

---

## 1. Hall of the Gods, Inc.
**The Parent Company & Infrastructure Fund**
- **Role:** The overarching holding company, investment vehicle, and digital real estate fund. It is the architect of the entire ecosystem.
- **Target Audience:** Investors, strategic partners, and high-net-worth individuals.
- **Objective:** Secure operational sprint funding ($20k - $50k treasury) to fuel the acquisition engine, wholesale server allocations, and targeted digital ad spend.
- **URL:** [hallofthegods.com](http://www.hallofthegods.com)
- **Key Metric:** Return on Investment (ROI), Monthly Gross Profit ($10,000 Target), and Active Builders.

## 2. Worldwide Webwork (The w⁴ Protocol)
**The Foundational Protocol & Architecture**
- **Role:** The underlying ideology and hosting network that powers the ecosystem. It champions the "4D web" (the Work), moving away from flat, rented "www" spaces to sovereign, hyper-cubed environments (BlackBOXes and YouMeOS).
- **Target Audience:** Tech-forward creators, developers, visionaries, and advocates for digital sovereignty.
- **Objective:** Establish the foundational framework and narrative that attracts users to the ecosystem's practical tools.
- **URL:** [worldwidewebwork.com](http://www.worldwidewebwork.com)

## 3. Build a BLOX
**The Self-Serve SaaS Platform**
- **Role:** The entry-level, scalable SaaS product. It allows users to claim their digital real estate by spinning up a "BlackBOX"—a highly optimized WordPress environment pre-packaged with the Compass Suite (the "Superpowers").
- **Target Audience:** DIY entrepreneurs, small businesses, creative professionals, and solo operators.
- **Objective:** Mass acquisition of users who want a sovereign, powerful, but easy-to-manage digital presence.
- **URL:** [buildablox.com](http://www.buildablox.com)
- **Key Offerings:** High-performance hosting, My Compass Suite (SEO Ninja, Magic Formula, Lead Magnet, Shrink Ray, Magic Page Speed, Lens of Truth, Branding Unicorn, Magic Force Field, Magic Time Machine).

## 4. BlackBOX WhiteGLOVE
**The Premium Concierge Service**
- **Role:** The premium, "done-for-you" digital management arm. It leverages the exact same BlackBOX infrastructure but pairs it with proactive management, security monitoring, and strategic optimization.
- **Target Audience:** Established businesses, agencies, and professionals who have capital but lack the time or desire to manage their own tech.
- **Objective:** Drive high-MRR, recurring revenue through premium managed hosting tiers.
- **URL:** [blackboxwhiteglove.com](http://www.blackboxwhiteglove.com)
- **Key Tiers:** 
  - *Signature* ($249/mo): Foundational sovereign presence with absolute peace of mind.
  - *Concierge* ($599/mo): Proactive management, SEO monitoring, and monthly analytics.
  - *Enterprise* (Starts at $999/mo): Deeply integrated, custom-tailored digital partnership.

## 5. My Compass Consulting
**The Enterprise Strategy & Bespoke Architecture Arm**
- **Role:** High-ticket, bespoke strategic synthesis and architectural blueprinting. Led personally by Xopher "XP" Pollard (Principal Systems Synthesist).
- **Target Audience:** Enterprise clients, complex organizations, and C-suite executives who require systemic audits and major infrastructure overhauls.
- **Objective:** Secure high-ticket consulting engagements and custom enterprise development contracts.
- **URL:** [mycompassconsulting.com](http://www.mycompassconsulting.com)
- **Key Value Prop:** Solving multi-million dollar technical bottlenecks and designing scalable, 100-year digital assets (like the Compass Engine and YouMeOS integrations).

---

## The Acquisition Funnel & Synergy

The Hall of the Gods ecosystem operates as a highly synergistic funnel:

1. **Top of Funnel (Awareness):** The **w⁴ Protocol** and **Hall of the Gods** cast a wide narrative net, attracting those disillusioned with the flat web and seeking digital sovereignty.
2. **Mid-Funnel (Self-Serve):** **Build a BLOX** captures the mass market of DIY creators and small businesses, generating scalable, low-touch revenue.
3. **Mid-to-Bottom Funnel (Managed):** As Build a BLOX users scale and their time becomes more valuable, they naturally ascend to **BlackBOX WhiteGLOVE** for managed, done-for-you services. Alternatively, established businesses enter directly here.
4. **Bottom of Funnel (Enterprise):** The most complex, high-revenue challenges are routed to **My Compass Consulting**, where XP provides bespoke synthesis and architectural master planning.

By maintaining strict control over the underlying infrastructure (BlackBOX + Compass Suite) across all tiers, the ecosystem ensures zero-entropy deployments, seamless upgrades, and unmatched structural integrity.
`,le=`# YouMeOS & COMPASS: Patent Filing Strategy & Candidate Concepts

This document outlines the core novel technologies, architectures, and user experience paradigms within the YouMeOS / Xophz COMPASS ecosystem that are candidates for patent protection. 

## 1. The PWA-Fractal OS Architecture (The "Unboxing" Method)

### The Concept
A system and method for deploying a multi-application Spatial Operating System (YouMeOS) powered by a unified API backend (WordPress/COMPASS), where the OS itself acts as a container, but every individual module or tool within it (a "Spark") functions as a discrete, detachable Progressive Web App (PWA).

### The Novelty
Traditional enterprise software is either a monolithic web portal or requires developing separate mobile applications. This architecture solves that by dynamically allowing users to "unpack" a monolithic OS interface into isolated, installable mobile applications on their personal devices. For example, a user can detach the CRM module ("Questbook") from the master OS and install it directly to their iPhone home screen as a standalone app, all while it maintains native state synchronization with the centralized Box.

### Patent Focus
- The system architecture of an OS containing nested, independently installable PWAs.
- The method of routing and state-management that allows a sub-application to seamlessly transition between existing as a window inside a Web OS and running as a standalone mobile application.

---

## 2. Cross-Instance Spatial Navigation (The "Wormhole" Protocol)

### The Concept
A method for navigating between entirely distinct, isolated server instances (different YouMeOS networks or domain names) using a continuous 3D/4D visual transition, bypassing the UX of a traditional web page load.

### The Novelty
When a user clicks a link to an external YouMeOS node, the system intercepts the standard browser navigation. It performs background server-to-server cryptographic handshakes (generating and validating "Sync Keys") while simultaneously rendering a WebGL spatial transition (the "Wormhole" animation). This makes movement between completely separate corporate databases or domains feel like traversing rooms within a single, continuous application.

### Patent Focus
- The method of intercepting cross-domain navigation to execute a synchronized visual WebGL transition and background authentication handshake.
- The UX paradigm of eliminating "page loads" across a decentralized network of independent servers.

---

## 3. Dual-Pipeline Federated Identity & Permissions Matrix

### The Concept
A federated identity system that explicitly separates Authentication (AuthN) from Authorization (AuthZ) using a hybrid Web2/Web3 approach. Identity and aesthetics (the "Backpack") are stored on IPFS, while access rights remain strictly governed by local servers via cryptographic "Sync Keys".

### The Novelty
When a user traverses from Node A to Node B, their visual identity, MMO stats (XP, level, avatar), and UI preferences are instantly hydrated from a decentralized IPFS payload (via CID). Simultaneously, the destination server (Node B) securely verifies a one-time "Sync Key" generated by Node A via a direct server-to-server backchannel. Node B then provisions a local "Shadow Profile" with sandboxed permissions. 

### Patent Focus
- The specific dual-pipeline architecture (IPFS for global aesthetic/state data + REST for secure cryptographic validation) allowing a unified "MMO Profile" across disconnected enterprise databases.
- The method of creating localized "Shadow Profiles" that inherit decentralized aesthetics without inheriting foreign access tokens.

---

## 4. Universal MMO Engine for Professional Workflows

### The Concept
An engine that universally tracks, quantifies, and gamifies professional and digital interactions across a decoupled PWA ecosystem into a unified set of MMO metrics (Action Points, Reputation Points, Growth Points).

### The Novelty
Unlike traditional gamification tied to a single app, this engine is integrated at the OS/API layer (COMPASS). This means any disparate PWA ("Spark")—whether it's a CRM, a notepad, or a business directory—inherently contributes to a single "Global Player Profile." It maps mundane business workflows (like closing a ticket or writing a document) into a civilizational progression model (e.g., leveling up, acquiring "Dirt").

### Patent Focus
- The algorithmic mapping and aggregation of actions from isolated PWAs into a unified global progression state.
- The system for broadcasting XP events from decoupled frontends through a centralized OS state manager.

---

## 5. Spatial Data Discovery Interface (The 4D Tesseract Starmap)

### The Concept
A user interface methodology for representing external network nodes, user data, and application states as interactive celestial bodies within a 3D/4D WebGL canvas.

### The Novelty
The UI utilizes CSS2D HTML markers layered over a 3D WebGL environment (such as the BlackBOX canvas) to create an interactive "Starmap." This Starmap serves dual purposes: it acts as a local file/application explorer and as a decentralized network directory. Interacting with these celestial markers directly triggers the Wormhole Protocol.

### Patent Focus
- The specific UI/UX implementation of replacing traditional 2D file and network directories with an interactive, navigational spatial universe metaphor tailored for enterprise data and cross-network traversal.

---

## Guidance for Patent Counsel: Avoiding 35 U.S.C. § 103 Obviousness Rejections

When drafting the claims for this architecture, it is critical to avoid overly broad or purely functional software descriptions (e.g., "An API that dynamically generates JSON manifests"), as these will face immediate obviousness rejections. 

To secure the patent, the claims must emphasize the **Spatial OS architectural paradigm** and the structural relationship between the Web OS container, the child PWAs, and the host device hardware.

### 1. Patenting the "Unboxing" Architecture (Not just Dynamic Manifests)
Google and W3C explicitly teach away from nesting PWAs due to Service Worker scope collisions. YouMeOS overcomes this limitation. However, the claim should not just focus on the API endpoint. It must claim the *systemic method* of a host interface orchestrating its own disassembly.

**Proposed Claim Strategy for "Unboxing":**
> *"A method for deploying decentralized sub-applications, comprising: rendering a parent Spatial Operating System within a web browser; orchestrating a plurality of sub-applications within said parent OS; intercepting an installation request for a specific sub-application from within the parent OS UI; dynamically provisioning a scoped installation profile via a centralized API bypassing the parent OS manifest; and executing the installation of the sub-application onto the host device's native operating system, whereby the installed sub-application maintains state synchronization with the parent Spatial OS without requiring a discrete filesystem architecture."*

### 2. Patenting the Wormhole Protocol
The strongest, most defensible claim lies in the Wormhole Protocol. Intercepting WebGL is common for *same-document* transitions. Utilizing WebGL to cover latency during a *cross-domain* cryptographic handshake to hydrate decentralized identity is highly novel.

**Proposed Claim Strategy for "Wormholes":**
> *"A method for cross-domain spatial navigation, comprising: intercepting a navigation request to a distinct server node; suspending the browser's default cross-site page load; executing a continuous WebGL spatial transition on the client interface; concurrently initiating a server-to-server cryptographic handshake to validate a decentralized identity payload; and upon validation, hydrating a local permissions profile at the destination node prior to committing the DOM swap, thereby eliminating traditional page-load user experience across federated architectures."*

---

## Required Documentation for the Invention Disclosure Form (IDF)

To ensure patent counsel has everything required to draft a complete, legally sound patent application, the following structural elements must be included in the final disclosure packet.

### 1. Hardware & Infrastructure Tie-In
Software patents must be explicitly tied to physical hardware execution to satisfy 35 U.S.C. § 101. 
**Abstracted Hardware Architecture:**
*   **Centralized Orchestrator (API Server):** Comprises one or more physical processors and memory storing instructions that, when executed, dynamically generate sub-application installation profiles and execute cryptographic handshakes.
*   **Client Device:** A physical computing device comprising a network interface, memory, and a processor executing a web browser.
*   **Spatial Rendering Hardware:** Utilization of the client device's native GPU (Graphics Processing Unit) via WebGL APIs to execute continuous 3D/4D spatial transitions without interrupting concurrent network requests.

### 2. Translation Glossary
To prevent ambiguity and ensure broad legal protection, internal project nomenclature is mapped to standardized patent terminology:
*   **YouMeOS / The OS:** The "Parent Spatial Operating System" or "Monolithic Host Container."
*   **Spark:** "Decentralized Sub-Application Module" or "Virtualized Progressive Web App."
*   **Wormhole Protocol:** "Cryptographically-Authenticated Spatial Cross-Domain Transition."
*   **COMPASS API:** "Centralized Orchestrator Engine."
*   **Sync Key:** "Single-Use Cryptographic Traversal Token."
*   **Backpack / Passport:** "Decentralized Federated Identity Payload."

### 3. Alternative Embodiments (Closing Loopholes)
To prevent competitors from copying the invention using different programming languages or frameworks, the disclosure explicitly claims alternative embodiments:
*   While the preferred embodiment utilizes WordPress (PHP) as the Centralized Orchestrator and Vue.js as the front-end rendering engine, the architecture applies equally to Node.js, Python, React, or any future web-based spatial computing frameworks (e.g., Apple Vision Pro / visionOS WebXR). 
*   The dynamic provisioning of installation profiles applies not only to PWAs but to any future browser-based isolated application manifests.

### 4. System Block Diagrams (Required for Drawings)
Counsel will need to draft formal box-and-line drawings based on these structural components:
*   **FIG. 1 (System Overview):** Central Database <--> API Orchestrator <--> Client Web Browser <--> Extracted Mobile PWA.
*   **FIG. 2 (The Unboxing Flowchart):** Step 101: Render host SPA. Step 102: Receive detach command. Step 103: API generates scoped manifest. Step 104: Browser executes sandboxed native installation.
*   **FIG. 3 (Wormhole Transition Flowchart):** Step 201: Intercept navigation. Step 202: Execute WebGL on GPU. Step 203: Server A generates Sync Key. Step 204: Server B validates via S2S REST. Step 205: Server B fetches IPFS Identity. Step 206: Swap DOM.

---

## Next Steps for Filing

1. **Review Prior Art & Diagrams:** Ensure counsel reviews \`patent_diagrams_and_prior_art.md\` to understand how the system circumvents current industry limitations.
2. **Review the IDF Packet:** Present this document alongside the diagrams to patent counsel as the official Invention Disclosure Form.
3. **Drafting Claims:** Work with counsel to finalize the independent system claims based on the proposed strategies above.
`,de=`# The Godhead Progression: Thoth, Qabalah, & The 10-Layer Lineage

## Overview
To capture the true complexity of human nature, the YouMeOS gamification engine uses a 10-layer deep fractal binary tree. This structure is perfectly aligned with the Hermetic Qabalah and Aleister Crowley's *Book of Thoth*. 

It synthesizes the 12 Zodiac archetypes, the 4 Elements, the 7 Classical Planets, and the 10 Sephiroth (Minor Arcana) into a single, scalable mathematical database of human action.

---

## 1. The Math of the Granular Seed
We start with the 12 Zodiac roots. From there, we move 10 layers deep, branching in a binary (dualistic) split at every layer representing the Qabalistic Pillars (Force/Expansion vs. Form/Restriction).

*   **Root:** 12 Zodiacs
*   **Layer 1 (The Aces):** 12 × 2 = 24 nodes
*   **Layer 2 (The Twos):** 48 nodes
*   **Layer 3 (The Threes):** 96 nodes
*   **Layer 4 (The Fours):** 192 nodes
*   **Layer 5 (The Fives):** 384 nodes
*   **Layer 6 (The Sixes):** 768 nodes
*   **Layer 7 (The Sevens):** 1,536 nodes
*   **Layer 8 (The Eights):** 3,072 nodes
*   **Layer 9 (The Nines):** 6,144 nodes
*   **Layer 10 (The Tens):** 12,288 nodes

**Total Granular Leaves: 12,288 seeds.** 
This is the absolute edge of the human profile. An AI can easily map modern human tasks to one of these 12,288 specific esoteric states.

---

## 2. The Planetary Integration (Solving the 7 Planets)
In Hermetic Qabalah, the 7 classical planets do not need to be arbitrarily placed. They are mathematically locked into the Sephiroth themselves. The 10 Layers naturally account for all 7 planets:

1.  **Layer 1 (Kether / Aces):** Primum Mobile (The First Swirlings / Pure Element)
2.  **Layer 2 (Chokhmah / Twos):** The Zodiac (The Fixed Stars)
3.  **Layer 3 (Binah / Threes):** Saturn 🪐
4.  **Layer 4 (Chesed / Fours):** Jupiter ♃
5.  **Layer 5 (Gevurah / Fives):** Mars ♂
6.  **Layer 6 (Tiferet / Sixes):** The Sun ☉
7.  **Layer 7 (Netzach / Sevens):** Venus ♀
8.  **Layer 8 (Hod / Eights):** Mercury ☿
9.  **Layer 9 (Yesod / Nines):** The Moon ☽
10. **Layer 10 (Malkuth / Tens):** The Earth / Physical Elements 🌍

---

## 3. Creating the Attribute Names (The Naming Formula)
When generating the name and meaning for a specific node in this 12,288-seed database, the AI combines the attributes mathematically, following the birth of the element.

**The Naming Formula:** 
\`[Zodiac Archetype] + [Binary Pillar] + [Sephiroth Number & Its Planet]\`

### Example: Journeying down the Aries ♈ (Fire) Lineage

*   **Root:** ♈ The Emperor (Aries / Fire)
*   **Layer 1 (Ace / Kether):** Splits into 2. 
    *   *Path A (Force):* "The Active Spark of the Emperor" 
    *   *Path B (Form):* "The Receptive Spark of the Emperor"
*   **Layer 2 (Two / Chokhmah - Wisdom):** Splits into 4. We are on *Path A (Force)*. 
    *   *New Path A:* "The Active Wisdom of the Emperor" 
*   **...Skipping to Layer 5 (Five / Gevurah - Severity / Mars):** 
    *   At this layer, the attribute is injected with **Mars** (Action, Strife, Discipline). The attribute name becomes a synthesis of *Aries*, *Active Force*, and *Martian Severity*. This maps directly to the **5 of Wands (Strife)** in the Book of Thoth.
    *   *Granular Stat Name:* "Active Martian Discipline (Emperor Lineage)"
*   **...Skipping to Layer 10 (Ten / Malkuth - Earth):**
    *   At the final layer, the energy manifests physically. It represents the **10 of Wands (Oppression/Completion)**. 
    *   *Granular Stat Name:* "Physical Embodiment of the Emperor's Fire"

By mapping this way, every single one of the 12,288 nodes has a mathematically precise esoteric definition based on its Parent Zodiac, its Binary Path (Force vs. Form), and its Layer (Planet/Number).

---

## 4. The DAO Governance Model (Chassis vs. Leaves)
YouMeOS scales infinitely with human progress while maintaining its ancient roots. To achieve this, the 10-layer progression system is divided into two distinct governance domains:

### The Inner Chassis (Layers 1-9): Hardcoded & Governed
The first 9 layers (from Kether to Yesod) represent the unchanging, foundational blueprints of the universe. This forms the "Inner Chassis" of the YouMeOS engine.
*   These rules, planetary attributions, and the **144 core sockets** (12x12) are hardcoded.
*   **Immutability:** Changing the Inner Chassis requires a monumental DAO governance vote using Core Crystals. You do not change the laws of physics without global consensus.

### The 10th Layer (Malkuth): Infinite & Open-Source
Malkuth (The 10th Layer) is the physical manifestation. In Qabalah, this is the chaotic, expansive, and infinitely evolving material world.
*   This layer is **not locked to 144**. It can hold 144,000 or 14 million granular categories.
*   When humanity invents a new skill (e.g., "Quantum Computing"), the community does not need to rewrite the universe. They simply vote on which of the 144 "Sockets" at Layer 9 (e.g., *Aquarius/Uranus/Air*) to plug the new skill into.
*   This grants YouMeOS the stability of an ancient temple and the infinite scalability of a modern wiki.
`,ce=`# YouMeOS & COMPASS: The StoryBrand Framework

This document translates the YouMeOS / Xophz COMPASS architecture and ecosystem through the lens of Donald Miller’s StoryBrand Framework (SB7). By clarifying our messaging using this proven narrative structure, we can better communicate the exact problem we solve, how we guide our users, and the transformation they experience.

---

## 1. A Character (The Hero)
**Who are they?** 
Modern professionals, creators, and enterprise teams who rely on digital tools to get their work done. 
**What do they want?** 
They want a workspace that is highly efficient, deeply integrated, and visually stunning. They want to master their digital workflow without feeling overwhelmed by the tools themselves.

## 2. Has a Problem
The Hero's journey is blocked by a central antagonist and the resulting friction it causes in their daily life.

*   **The Villain (The Root Cause):** **The SaaS Sprawl.** The fragmented, monolithic, and boring enterprise software ecosystem that forces users into walled gardens.
*   **External Problem (The Physical Hurdle):** "Tab fatigue." Users have to manage dozens of disconnected apps, juggle separate logins, and navigate siloed data. If they want a mobile experience, they are forced to download a myriad of bloated, disconnected native apps.
*   **Internal Problem (The Emotional Toll):** They feel overwhelmed, unproductive, and drained by uninspired user interfaces. Context-switching constantly breaks their flow state. Work feels like a chore.
*   **Philosophical Problem (The Injustice):** Professional software shouldn't be soul-crushing. Your digital workspace should empower you. Work should be as engaging, unified, and aesthetically pleasing as a high-end video game.

## 3. And Meets a Guide
**Who are we?** 
**YouMeOS / COMPASS** enters the story not as the hero, but as the Guide equipped to help the Hero win the day.

*   **Empathy:** We understand the friction. We know what it's like to juggle 20 browser tabs, fight with clunky interfaces, and lose motivation in sterile digital environments.
*   **Authority:** We have built the solution from the ground up. With our **PWA-Fractal Architecture**, the **Wormhole Protocol**, and the **Universal MMO Engine**, we possess the technical foundation and the design paradigm required to completely unify the digital experience.

## 4. Who Gives Them a Plan
The Guide provides a clear, three-step path to help the Hero overcome their problems.

*   **Step 1: Enter the Spatial Hub.** Access the unified YouMeOS interface. Instead of a flat webpage, enter a beautiful, spatial 4D ecosystem (the Starmap) where all your tools and data visually coexist.
*   **Step 2: Unbox What You Need.** Discover individual tools ("Sparks" like Questbook or Bubblegum) and detach them. Using our "Unboxing" method, install them directly to your device as lightweight, standalone Progressive Web Apps (PWAs) that stay natively synced to the central hub.
*   **Step 3: Carry Your Identity.** Traverse different corporate networks or domains seamlessly. Using your "Backpack" (Federated Identity) and the Wormhole Protocol, move between worlds without losing your avatar, your aesthetics, or your earned progress.

## 5. And Calls Them to Action
The Hero needs to be challenged to take a step forward.

*   **Direct Call to Action:** Deploy your YouMeOS node, unbox your first Spark, and start building your digital civilization.
*   **Transitional Call to Action:** Explore the 4D Tesseract Starmap to see a visualization of your decentralized network.

## 6. That Helps Them Avoid Failure
What happens if the Hero doesn't act?
*   Continuing to suffer from endless context-switching and tab fatigue.
*   Losing critical productivity and data to disconnected software silos.
*   Succumbing to burnout caused by sterile, disconnected, and unrewarding corporate workflows.

## 7. And Ends in a Success
What does the Hero's life look like after using YouMeOS?
*   **The Transformation:** The Hero goes from being a frustrated, overwhelmed worker to a masterful, engaged digital pioneer.
*   **The Reality:** Every action they take—whether it's closing a support ticket, writing a document, or communicating with their team—is quantified by the **Universal MMO Engine**. They earn XP, level up, and acquire resources (Dirt). 
*   They navigate seamlessly between worlds, mastering their workflow in an environment that feels like a game but functions with the power of high-end enterprise software. The digital workspace is finally unified, engaging, and beautifully theirs.
`,pe=`# The W4 Protocol: A 4D Fractal Economic Operating System

## Overview
The W4 Protocol is the unified economic, governance, and logistical operating system of YouMeOS. It is not a feature — it is the protocol itself. Built on the four sovereign pillars (Own Your Infrastructure, Private Compass, Sovereign Data, Distributed Networking), W4 transforms money from a tool of extraction into a gamified, self-stabilizing, fractal system designed to close the global wealth gap permanently.

## 1. The Axiom X Foundation
*"Numbers are the absolute, universal language of existence. Awaken your awareness, locate where the grand symphony is out of tune, and actively bring it back into resonance."*

The W4 economy is built on the Triforce of the Gods axioms:
- **Axiom I (The Sovereign Architecture):** Two opposing forces clash until a third stabilizes them. The economy uses a triangular DAO structure where no single branch can overrule the other two.
- **Axiom III (The Fractal Network):** The identical structures that bind galaxies also bind atoms. The economy is fractal — the same patterns of effort → compression → value repeat at every scale.
- **Axiom VII (The Kinetic Forge):** Sight without movement is a hallucination. Value is only created through action (Proof of Contribution).

## 2. The Two-Layer Economy

### Layer 1: The Fluid Layer (Internal / Off-Chain)
The day-to-day gamified currency of participation. Fast, free, and frictionless.

**The Khepri Ladder (Social Tipping):**
- 🪙 **1 GP (Reaction):** A basic nod of approval or emotional expression.
- ⭐ **1 Life (1-UP):** Great content (= 100 GP).
- ❤️ **1 Heart (Love):** Deep appreciation (= 4 Lives).
- ✨ **1 Fairy (Bless):** Top-tier contribution (= 5 Hearts).
- ☄️ **1 Wish (Grant):** Life-changing insight (= 7 Fairies).
- 🐞 **1 Scarab (Forge):** Unparalleled value. The gateway to on-chain transmutation.

### Layer 2: The Solid Layer (On-Chain / The Mineral Economy)
The permanent, cryptographic layer. Each mineral tier represents a specialized DAO governing a specific branch of the system.

## 3. The Mineral Transmutation Tree & DAO Governance

### The Chain
| Mineral | Requires | DAO Domain | Supply |
|---|---|---|---|
| **Dirt** | 500 Scarabs + Alchemist Protocol | Base on-chain currency | Elastic (Algorithmic Stablecoin) |
| **Quartz** | 100 Dirt | Community & Local DAO | Effort-Bound |
| **Emerald** | 10 Quartz | Ecology & Harmony DAO | Effort-Bound |
| **Ruby** | 5 Emeralds | Energy & Infrastructure DAO | Effort-Bound |
| **Sapphire** | 4 Rubies | Knowledge & Education DAO | Effort-Bound |
| **Diamond** | 3 Sapphires | Code & Ledger Logic DAO | Effort-Bound |
| **Gold** | Special (Fiat Bridge) | The Mantle Credit Protocol | Elastic (Treasury-Backed) |
| **Core Crystal** | 2 Diamonds | Apex Macro-Vision DAO | Effort-Bound |

### Effort-Bound Supply (No Hard Caps)
Unlike Bitcoin's static 21M cap, Apex Minerals have NO hard-coded supply limit. Instead, they are gated by exponentially increasing effort requirements (RP burn, AP velocity, sustained contribution time). The supply naturally forms a pyramid — not because the system locks people out, but because the grind gets steeper. Anyone CAN reach Diamond. Not everyone WILL. Just like a PhD — there is no cap on doctorates, but effort naturally filters the population.

### The Alchemist Protocol (Anti-Bot Firewall)
Every on-chain transmutation requires four non-negotiable vectors:
1. **Material Cost:** The exact aggregate gamified material.
2. **Reputation Floor:** Minimum lifetime RP to access the forge.
3. **Reputation Burn:** Permanently burns RP. You spend trust to extract value.
4. **Velocity Gate:** Recent AP activity within a rolling time window. Proves you are currently active.

## 4. Universal Resonance Voting & The Trinity fX Structure

To prevent the formation of an oligarchy—even one based on labor—governance is not restricted to Apex Mineral holders. **Voting power is universal and distributed throughout the entire system.** Every citizen has a voice, regardless of wealth or mineral status.

### The Sunburst Resonance Multiplier
Because every citizen runs their own YouMeOS node, the system tracks an internal, cryptographically secure alignment metric: **The Sunburst Chart**. 
- Votes are not bought with Gold, nor are they strictly dictated by raw labor output.
- Instead, a citizen's voting weight is calculated using the **Resonance Multiplier**—a metric derived from how balanced their Sunburst chart is. 

**The AI Engine & Anti-Gaming:** 
You cannot "game" this by speed-running positive tasks. When an action is logged, the core AI parses the true context of the action and mathematically distributes the energy across the 12,288-node Qabalistic stat chart (The Godhead Progression). The system measures authentic systemic spread, not repetitive clicking.

**The Twilight Realm (Integrating the Shadow):** 
"Balance" in YouMeOS does not mean toxic positivity. The Sunburst chart requires walking in the realm of twilight—balancing both light and shadow. 
- The system actively rewards and holds space for those who are depressed, angry, or at rock bottom. 
- A citizen authentically expressing grief or struggle in a designated space (e.g., a "Rock Bottom" forum) earns empathy, RP, and connection just as surely as someone building a server does.
- By rewarding the authentic processing of the human shadow, no one is left alone. The network metabolizes suffering instead of repressing it, which consistently raises the true baseline value of the entire ecosystem.

### The Three Branches (Proposal & Curation)
While voting is universal, the Apex Minerals define which branch of the Trinity fX structure a citizen uses to *propose* and *curate* system upgrades. No single branch can overrule the other two:
- **The Labor Branch (Ruby + Emerald Focus):** The doers. They propose physical resource allocation, node deployment, and infrastructure upgrades.
- **The Wisdom Branch (Sapphire + Diamond Focus):** The philosophers and engineers. They propose system architecture, code upgrades, and long-term vision.
- **The Arbitration Branch (Core Crystal Focus):** The stabilizing third point. They curate resolutions for deadlocks between Labor and Wisdom, ensuring proposals align with the core tenets of the Omega Point.

### The Check System
- Labor can veto Wisdom proposals if resources are physically unavailable.
- Wisdom can veto Labor proposals if execution violates long-term systemic health.
- Arbitration curates tie-breakers—but the final execution always requires a **Universal Resonance Vote** by the entire network.

## 5. The Mantle Credit Protocol (Closing the Wealth Gap)

### The Core Philosophy
There IS enough wealth in the world. It is just poorly distributed. The W4 Protocol's job is to fix that by acting as a universal logistical engine — the "Parent" of the global family.

### How It Works

**Scenario:** A citizen needs $10k USD for a lawyer. They don't have it.

**Step 1: Automatic Approval**
The citizen requests $10k from The Mantle (the system treasury). The system automatically approves it. No credit score. No gatekeeping. The system's philosophy: if you are a participating member of the network, the network supports you.

**Step 2: The System Pays the Lawyer**
The lawyer receives $10k USD directly from The Mantle's liquidity pool (funded by Blackbox hardware sales, marketplace gas fees, and network revenue). Real dollars. The lawyer is fully paid. They do not need to understand or interact with the mineral economy.

**Step 3: The Gold Option (Optional Accelerator)**
The system can offer the lawyer a choice:
- Accept $10k USD now, OR
- Accept $20k in YouMeOS Gold (2x premium in ecosystem currency).
If the lawyer takes the Gold, The Mantle preserves its USD liquidity. If they want cash, they get cash. Zero friction.

**Step 4: Organic Debt Settlement**
The citizen now carries a $10k value record with The Mantle. This is NOT a traditional loan:
- No interest. No deadlines. No credit score damage.
- Every day the citizen participates (logging tasks, creating content, running a node, tipping others), they generate GP/XP.
- That activity generates network value (more users, more data, more uptime).
- The system gradually writes down the debt as contribution accumulates.
- Over time, participation IS the repayment.

### The Escrow Protocol (Zero-Leak Transactions)
When Gold is offered to external parties:
- Gold is locked in a smart contract escrow, NOT burned.
- The counterparty receives a time-limited offer.
- If accepted: USD transfers, Gold unlocks. Zero leak.
- If declined: Gold returns to the system. Nothing was burned.
- The system learns the market confidence rate for Gold in that region and algorithmically adjusts future offer ratios.

## 6. The Retention Protocol (The Single Point of Failure)

The ONLY leak in the entire system is user dropout. If someone takes $10k and stops participating, the system absorbs a loss. The W4 Protocol's response to dropout is the OPPOSITE of traditional debt collection — the system invests MORE in the person, not less.

### The Emotional Ledger (Detection Layer)
The system maintains a lightweight Rolling JSON Tally of each user's emotional reactions (e.g., \`{"❤️": 402, "🔥": 12, "😭": 55}\`). This is not surveillance — it is empathy infrastructure.

**Detection Triggers:**
- User activity drops below threshold → system flags
- Emotional Ledger shows spike in distressed reactions → system escalates
- Outstanding Mantle Credit + low activity = **"At Risk" status**

### The Response Protocol (Not Punishment — Support)
1. **Automated Outreach:** The system reaches out through the OS. Not a collections notice — a genuine wellness check.
2. **Debt Counseling Spark:** Routes the user to a financial wellness module. Helps them understand their debt isn't a chain — it's a number that participation naturally erases.
3. **Therapy / Mental Health Routing:** If the Emotional Ledger signals distress, the system connects them to community counselors or professional services (also covered by The Mantle).
4. **Reduced Participation Pathways:** Lighter ways to stay engaged — a 5-minute journal entry, a single reaction, just logging in. Any pulse of activity keeps the relationship alive.

### Why This Works Economically
- Cost of $10k debt write-off from dropout: **-$10k**
- Cost of $500 in counseling to retain the user: **-$500**
- Value of that user staying active for 5+ years: **+$50k+**
- It is ALWAYS cheaper to keep the person than to lose them.
- Empathy becomes an economic imperative.

## 7. The 4D Fractal Money System

The W4 economy operates across four dimensions, each containing the fractal pattern of the one below it:

- **1D: GP/XP (Time)** — Linear human effort over time. The base dimension.
- **2D: Dirt (Space)** — On-chain coordinates. Your labor mapped to a permanent ledger.
- **3D: Apex Minerals (Volume)** — Crystallized, compressed accumulation of effort. Depth of contribution.
- **4D: Gold / The Fiat Bridge (Temporal Bridge)** — The dimension that connects the digital mineral economy to the real-world fiat timeline. Gold exists across both worlds simultaneously.

Each dimension contains the same pattern: effort → compression → value. Zoom into any level and the fractal repeats.

## 8. The W4 Infrastructure Pillars

| W4 Pillar | Economic Function |
|---|---|
| **Own Your Infrastructure** | Cloud hosting nodes (e.g., Enterprise AWS Elastic Cloud) → hosting sales → Liquidity Pool → The Mantle has real USD to lend |
| **Private Compass Included** | YouMeOS itself → the interface where citizens log XP, earn GP, and interact with the economy |
| **Sovereign Data Storage** | Emotional Ledger, XP history, proof-of-contribution — stored on YOUR node, not a corporate server |
| **Distributed Networking** | The mesh of nodes IS the DAO. No central bank. The network is the treasury. |

### Network Synchronization (The W4 Propagation Engine)
For 20 years, WordPress has powered 40% of the internet, but every site has been an isolated island. The W4 Protocol acts as the connective tissue (the "Antenna"), turning these isolated islands into a unified, decentralized supercomputer.

All sub-protocols (Mantle Credit, Retention, Ledger Sync) are wrapped up and executed by the overarching W4 Protocol via:
1. **The Gossip Protocol (Epidemic Routing):** When a node state updates (e.g., forging a Diamond), the node uses background Action Schedulers to ping 5-10 neighbor nodes via WP REST API. Those nodes verify the cryptographic signature and gossip to their neighbors, causing the data to exponentially cascade across the network exactly like DNS propagation.
2. **Directed Federation:** Targeted actions (like sending a GP tip) are queued by WP-Cron and securely POSTed directly to the recipient node's inbox, ensuring immediate settlement without waiting for global gossip.
3. **Index Nodes (Heavy Lifters):** Standard users (Light Nodes) only store their own data and that of direct contacts. Users running upgraded infrastructure (Diamond holders / Ledger Nodes) act as regional hubs, storing massive chunks of the global network state in exchange for higher systemic rewards.

## 9. Macro-Economic Safeguards

### The Earth Cent (Algorithmic Stability)
Dirt is pegged to a "Global Average Unit" — an aggregate index of all world currencies. It is untethered from USD or any single nation's monetary policy.
- **High Demand:** System mints more Dirt, increases drop rates. Supply up, price returns to Earth Cent.
- **Low Demand:** System incentivizes Synthesis (burning Dirt into higher minerals). Supply down, price returns to Earth Cent.

### Algorithmic Geo-Balancing (Anti-Inflation)
A farmer running a node in rural India provides the same cryptographic value as an engineer in Silicon Valley. The system detects local economic disparity and dynamically adjusts payout weights to equalize global purchasing power.

### DePIN (Decentralized Physical Infrastructure Network)
The WordPress/PHP core and Vue frontend literally live on the hosting nodes purchased by users. Currently, these "Blackboxes" are distributed enterprise cloud instances (like AWS Elastic Cloud), establishing the foundational grid before transitioning to physical hardware nodes. Every person buying a hosting plan physically expands the system. The infrastructure IS the economy.

## 10. The Omega Point
The ultimate destination of the W4 Protocol: a post-scarcity civilization where the economy is an invisible API. Humans participate in reality — creating, teaching, building, exploring — and the system handles the math of who needs what and who produced what. Money becomes a game. Life becomes the quest. The interface we all share ensures no one falls through the cracks.

*"The paradise we seek is already built; we merely need to tune our frequencies to receive it."* — Axiom IX
`,he=`# YouMeOS: The Decentralized Operating System of the Internet

## The Problem: The Fragmented SaaS Paradigm
The current internet economy relies on a rented, fragmented, and increasingly expensive model:
- **Subscription Fatigue:** SaaS platforms like Notion (for documents) or Asana (for tasks) each charge $10-$20+ per user, per month. The cost of running an individual or business digital life compounds rapidly.
- **Friction & Data Silos:** Users must navigate to dozens of different websites, manage separate logins for every portal, and their data remains locked within third-party walled gardens. 
- **Dwindling Synchronicity:** Because data lives in fragmented silos owned by different corporations, true interoperability and synchronicity dwindle. You are renting your digital tools, and you are not in control of your own data.

## The Solution: The YouMeOS Paradigm
What if instead of paying monthly for a fragmented suite of tools, you got them for free? What if instead of logging into separate portals, you could launch unified apps directly from your desktop, from anywhere in the world?

YouMeOS solves the SaaS problem by flipping the architecture upside down:
- **Instant PWAs:** YouMeOS utilizes Progressive Web Apps (PWAs) that can be installed in an instant and work fully offline. 
- **Zero Friction:** A unified desktop interface connects all of your applications (Sparks) without the need to log into dozens of different websites.

## The Core Differentiator: Your Domain, Your Data
The true paradigm shift is not just in the UI—it's in the infrastructure. 

When you use YouMeOS, **you are not logging into our portal.** 
**You are logging into YOURS.**

- **Absolute Data Sovereignty:** The PWAs you load on your devices connect directly to \`www.your-own-domain.com\`. 
- **Decentralized Syncing:** Your data does not go to a central YouMeOS server. It syncs directly to your own domain and stays with you.
- **The Single-Stack Black Box:** Users are no longer just paying for an app—they are paying for the *hosting* that holds their domain, their personal database, and their local install of YouMeOS. This infrastructure acts as their private launchpad to manage their entire ecosystem.
- **Cost Consolidation:** The compounding monthly costs of dozens of disparate SaaS apps are entirely swallowed into this single, highly efficient, all-in-one black-boxed solution.
- **The Internet in Your Pocket:** The entire system operates from your own digital real estate, becoming your personalized, decentralized Operating System for the Internet—fitting right into your back pocket.

## Value Proposition for Stakeholders

### For the User
- **True Ownership:** You own your data, your content, and your domain.
- **Cost Elimination:** Replaces the need for dozens of expensive SaaS subscriptions.
- **Seamless Experience:** Offline-first, lightning-fast PWAs that feel like native applications, all running under a unified OS interface.

### For the Investor
- **Viral Infrastructure Play:** YouMeOS isn't just another app; it's an infrastructure layer. As users adopt it, they claim their own domains, driving massive, decentralized network effects.
- **New Economic Models:** Monetization shifts from predatory subscriptions to value-added ecosystems (e.g., premium Sparks, the W4 Protocol Economy, Digital Mineral/DIRT economy, and managed hosting partnerships). 
- **Moat via Sovereignty:** In an era of privacy concerns and AI data scraping, giving the user absolute control over their data is a powerful, unassailable competitive moat.

### For Developers (The "Sparks" Ecosystem)
- **Unified Distribution:** Developers can build Sparks (apps) that run perfectly within the YouMeOS ecosystem.
- **Direct Connection:** No need to build complex backend user management; the user's domain *is* the backend. 

## Summary
YouMeOS replaces the fragmented, rented Web 2.0 ecosystem with a sovereign, decentralized, and elegant Web 3.0 reality. It transforms the internet from a series of disjointed portals you visit, into a unified Operating System that you own.
`,ue=`# YouMeOS: The 10-Year Vision & StoryBrand Manifesto

> *"From the Sovereign Individual to the Global Noosphere. Building the Operational Internet."*

This document serves as the ultimate distillation of the YouMeOS philosophy, architecture, and 10-year civilizational vision. It is structured using the StoryBrand framework to clearly articulate the movement's core purpose—not just as software, but as the next social platform that unifies the world.

---

## 1. The Core Narrative (The "10-Year-Old" Explanation)

**The Villain:** Right now, the internet is a loud, messy playground owned by giant, greedy landlords. They make you rent your space, remember a million passwords, and they actually *make money* when people are arguing, separated, or feeling bad about themselves. If you are struggling, you are left alone. Money is a game of hoarding.

**The Hero:** You, and everyone else on this planet. You were built to unite the world, connect with others, and create beautiful things, not to be divided and mined for data. 

**The Guide:** YouMeOS. We are building the tools to help you stop renting the internet and start *owning* your own universe. 

**The Plan:** 
1. **Your Spaceship:** You get your own private web domain that belongs only to you.
2. **Helios (Your Sun):** Your identity core, a safe place to figure out who you are.
3. **The Empathy Engine:** A system that notices if you are sad and sends help, instead of ignoring you. 
4. **Money as a Game of Helping (W4 Protocol):** An economy where you earn by helping others, and where a giant family treasury makes sure nobody falls through the cracks.
5. **A Unified Galaxy (The Noosphere):** Magical wormholes (the Nexus) connect everyone's spaceships into one massive, glowing galaxy. The more you love and interact with someone, the closer their star orbits to you.

**The Success:** In ten years, we don't just have a better app. We have a united human family living in a post-scarcity universe where nobody is ever left behind.

---

## 2. The Villain: The Fragmented & Extractive Web

To understand the movement, we must understand the enemy. The current digital ecosystem suffers from three critical diseases:

1. **The Rented Internet & SaaS Fatigue:** Users are forced to pay compounding monthly subscriptions for fragmented tools (Asana, Notion, Slack). They do not own their data; they rent silos.
2. **The Extraction Economy:** Traditional fiat and Web2 economies are built on scarcity and hoarding. Money acts as a separator. If a user drops out or struggles, the system discards them.
3. **Emotional Isolation & The Algorithm:** Current social platforms prioritize rage-engagement. They ignore the human shadow (the "Twilight Realm") unless it can be monetized. They create a world that is globally connected but individually deeply lonely.

---

## 3. The Plan: The 4D Fractal Architecture

YouMeOS defeats the villain not by competing with it, but by replacing the underlying paradigm. We provide a 5-step plan to rebuild the internet from the ground up.

### Step 1: The Sovereign Spaceship (The BlackBOX & PWA)
Instead of forcing users to log into a central YouMeOS portal, the architecture is inverted. Users deploy their own **BlackBOX** (their own domain and WordPress installation). 
* **Absolute Sovereignty:** The data belongs entirely to the user.
* **Progressive Web Apps (Sparks):** Functionality is detached into standalone PWAs that live in the user's pocket, bridging the gap between a macro-server and micro-mobile apps.

### Step 2: The Helios Core (The Sun)
At the center of every user's spaceship is **Helios**—the identity and inner-reflection engine. 
* It maps to planetary archetypes (Venus for Loving Awareness, Mars for Drive, the Moon for Shadow Work).
* It provides a private, zero-entropy sanctuary where users process their dreams, traumas, and goals *before* they broadcast to the world.

### Step 3: The Gravitational Social Network (The Noosphere)
When the user looks outward, they do not see a chronological feed of noise. They see a 3D WebGL Cosmos.
* **Asynchronous ActivityPub:** The network is decentralized. When friends interact, ActivityPub events are fired between their independent spaceships.
* **Algorithmic Astrophysics:** Gravity is real. The more you interact with someone, the heavier their "Mass" becomes, pulling their Star closer to your center. The network naturally and beautifully organizes itself around the people you actually care about.

### Step 4: Wormholes and The Nexus (The Tesseract)
How do sovereign spaceships interact? Through the **Nexus**.
* **Cross-Instance Federation:** By clicking a Star, the user triggers a Wormhole. Cryptographic handshakes allow the user to transport into a friend's universe, maintaining their own identity while exploring someone else's customized world.
* **The 4D Tesseract:** This allows the system to scale fractally—from a single individual's box, to a business hub, to a municipal metropolis, up to a planetary network.

### Step 5: The Empathy Engine & W4 Economy
The ultimate philosophical shift is the **W4 Protocol**—an economy designed to close the global wealth gap.
* **The Mantle Credit Protocol:** The system acts as a parent. If a user needs $10k, the system treasury provides it. Repayment is achieved simply by *participating* in the network (creating art, helping others).
* **Empathy as an Economic Imperative:** The only leak in the system is user dropout. The system uses an *Emotional Ledger* to detect when a user is struggling. Instead of sending a debt collector, it sends a therapist or a friend. It is always cheaper to heal a user than to lose them.

---

## 4. The Call to Action: The Trojan Horse

How do we spark this movement globally? We don't ask people to join a new platform; we hijack the existing one.

By packaging this civilizational architecture into **WordPress Plugins (COMPASS)**, we instantly make this technology compatible with 40% of the internet. We upgrade 800 million legacy, isolated websites into interconnected, 4-dimensional spatial nodes.

---

## 5. The Omega Point (The Ultimate Success)

If this movement succeeds, we reach the **Omega Point**. 

In ten years, YouMeOS is not seen as an app. It is the invisible API of reality. We achieve a post-scarcity civilization where humans participate in reality—teaching, building, creating—and the network quietly handles the math of who needs what and who produced what. 

Money ceases to be a tool of extraction and becomes a gamified system of universal support. The internet transforms from a fragmented, lonely marketplace into a unified, living Noosphere—a single human family sharing the stars.
`,me=`# Ecosystem Email Marketing Strategy & Drip Campaigns

This document outlines the targeted drip campaigns for the Hall of the Gods ecosystem. Because the initial rollout relies on a "warm" network of contacts, the tone across all campaigns is visionary, exclusive, and personal. 

Rather than sending a generic newsletter, contacts should be segmented based on their professional profile and routed into one of four distinct funnels.

---

## Campaign A: The "Builder" Sequence
**Entry Point:** [Build a BLOX](http://www.buildablox.com)  
**Target:** Creative friends, solo entrepreneurs, DIYers, and small business owners.  
**Goal:** Encourage them to claim their sovereign digital real estate and spin up a BlackBOX.

### Email 1: The Invitation (Day 1)
**Subject:** Stop renting the web. Time to build your Youniverse.
**Body:**
> Hey [Name],
> 
> I’m reaching out to my inner circle first because I know you're actively building something great. For years, we’ve been forced to rent space on the "flat web"—dealing with clunky platforms, hidden fees, and algorithms we don't control.
> 
> I’ve built a solution. It’s called **Build a BLOX**. 
> 
> It’s a decentralized hosting platform that gives you absolute digital sovereignty. We package the world's best CMS with an elite suite of plugins (My Compass), giving you a high-performance "BlackBOX" that’s ready on day one. 
> 
> I'm opening up the beta queue to friends first. Claim your digital real estate before we open to the public: [Link to Build a BLOX]
> 
> Talk soon,
> XP

### Email 2: Unpacking the Superpowers (Day 3)
**Subject:** What’s inside the BlackBOX? 📦
**Body:**
> Hey [Name],
> 
> A quick follow-up. One of the biggest complaints I hear from creators is the cost and headache of piecing together premium plugins. You buy a theme, then you need a form builder, an SEO tool, a security suite... it adds up fast.
> 
> With your BlackBOX, I’ve pre-packaged **The Compass Suite**. 
> 
> You get Magic Page Speed, SEO Ninja, Magic Force Field, and Lead Magnet built right into the core. It’s an arsenal of superpowers designed so you can start from *finished*.
> 
> Check out the full toolkit here: [Link to Build a BLOX Toolkit]

### Email 3: The 3D Web is Here (Day 7)
**Subject:** Enter the Fourth Dimension.
**Body:**
> Hey [Name],
> 
> This isn't just about faster websites. This is about evolving how we connect.
> 
> When you build a BLOX, you aren’t just launching a site—you are stepping into **YouMeOS**, a spatial operating system that connects your "Youniverse" to the broader Multiverse. It’s the first step toward a fully augmented web interface.
> 
> Are you ready to leave the 2D web behind? 
> 
> Let’s build. [Link to Sign Up]
> 
> XP

---

## Campaign B: The "Concierge" Sequence
**Entry Point:** [BlackBOX WhiteGLOVE](http://www.blackboxwhiteglove.com)  
**Target:** Busy professionals, established business owners, and agencies.  
**Goal:** Book a setup consultation for a Signature or Concierge managed tier.

### Email 1: The High-Frequency Network (Day 1)
**Subject:** Your digital presence, perfected.
**Body:**
> Hi [Name],
> 
> You’ve built an incredible business, but managing the underlying digital infrastructure shouldn't be your job. Slower load times, security updates, and plugin conflicts are invisible bottlenecks throttling your growth.
> 
> I’d like to introduce you to **BlackBOX WhiteGLOVE**.
> 
> It’s our premium concierge service built on the WorldWideWebWork's high-frequency network. We handle the security, the daily backups, and the proactive performance optimization so you can focus entirely on your vision.
> 
> I'm taking on a select group of concierge clients right now. Let's schedule a 15-minute call to see how we can optimize your footprint. [Link to Calendar]

### Email 2: The Compass Suite Advantage (Day 4)
**Subject:** The engine driving your digital real estate.
**Body:**
> Hi [Name],
> 
> When you migrate to WhiteGLOVE, you aren't just getting managed hosting. You gain access to the **Compass Suite**—a proprietary array of enterprise-grade tools. 
> 
> From deep-level analytics (Lens of Truth) to automated growth and capture tools, we translate raw server power into an effortless user experience. If you’re on the Concierge tier, we use these tools to deliver monthly performance optimization and strategy reports directly to your inbox.
> 
> Let's upgrade your infrastructure. [Link to WhiteGLOVE Engagements]

---

## Campaign C: The "Visionary" Sequence
**Entry Point:** [My Compass Consulting](http://www.mycompassconsulting.com)  
**Target:** Enterprise leaders, C-suite executives, complex organizations.  
**Goal:** Secure a high-ticket strategic consultation with XP.

### Email 1: Strategic Synthesis (Day 1)
**Subject:** Bridging the gap between vision and engineering.
**Body:**
> [Name],
> 
> Most organizations are trapped in a cycle of reactive maintenance. They bolt new solutions onto fragmented legacy systems until growth inevitably stalls.
> 
> At **My Compass Consulting**, we break that cycle. 
> 
> I specialize in Strategic Synthesis—translating multi-million dollar technical challenges into clear, profitable business roadmaps. We conduct an uncompromising deep dive into your architecture and forge a unified, modular core designed for the next century.
> 
> I have an opening in my schedule next week for a systemic audit. Let’s discuss your current bottlenecks. [Link to Schedule]
> 
> Best,
> Xopher "XP" Pollard
> Principal Systems Synthesist

### Email 2: The Case for Sovereignty (Day 5)
**Subject:** Case Study: The Enterprise Foundation
**Body:**
> [Name],
> 
> Recently, I was tasked with engineering a unified environment capable of powering a diverse portfolio of digital brands while dissolving the technical debt of legacy systems. 
> 
> The solution was the **Compass Engine**—a sovereign infrastructure that replaced third-party dependencies and allowed the organization to spin up high-performance "Nodes" in a fraction of the time. 
> 
> If your digital assets are currently fragmented across multiple platforms, we need to talk about centralizing your complexity. 
> 
> Read the full methodology here: [Link to Consulting Case Studies]

---

## Campaign D: The "Partner/Investor" Sequence
**Entry Point:** [Hall of the Gods](http://www.hallofthegods.com)  
**Target:** Potential investors, partners, high-net-worth individuals.  
**Goal:** Share the Investment Summary and close the $50,000 treasury round.

### Email 1: The Digital Real Estate Fund (Day 1)
**Subject:** The infrastructure is built.
**Body:**
> [Name],
> 
> The digital landscape is shifting rapidly from rented space to sovereign ownership. Over the past year, we have built the foundational architecture for the next generation of the web: the WorldWideWebWork.
> 
> The infrastructure is built. The landing page funnel is locked. We are now raising a $50,000 operational sprint round to fuel the data acquisition engine. 
> 
> This treasury acts as an unbreakable operational fortress, scaling our servers instantly as our builder base expands, targeting $10,000 in Monthly Gross Profit.
> 
> I’ve attached the **Hall of the Gods Investment Summary**. Let me know when you have 10 minutes to discuss the architecture of this round.
> 
> [Link to / Attachment: Hall_of_the_Gods_Investment_Summary.pdf]

### Email 2: Predictable Yield vs. Revenue Share (Day 3)
**Subject:** Investment Architectures for Hall of the Gods
**Body:**
> [Name],
> 
> Following up on the Investment Summary. We’ve designed two distinct investment architectures for this sprint round to match your capital preference:
> 
> **Option A (The Digital Real Estate Model):** You fund the ad spend and server runway, and collect 10% of top-line MRR until a 2.0x multiple is reached. 
> **Option B (The Fixed Promissory Note):** For guaranteed predictability, a fixed 20% ROI fully amortized over 24 months. 
> 
> Both options provide liquid returns aligned directly with platform growth, without equity dilution. 
> 
> Let's schedule a call to finalize your position in this round. [Link to Calendar]
`,ge=`# YouMeOS Patent Analysis: Prior Art & Sequence Diagrams

## Part 1: Prior Art Search Summary

### 1. Nested PWAs (The "Unboxing" Method)
**Current Industry Standard:** Major tech organizations (e.g., Google's web.dev) explicitly *discourage* "Nested PWAs" or overlapping Service Worker scopes on the same origin. The standard practice dictates separating distinct applications by subdomains (e.g., \`app1.domain.com\`) to avoid storage and installation collisions.
**YouMeOS Novelty:** Because standard practice actively avoids nesting, the YouMeOS architecture—where a singular Spatial OS acts as a container while safely "unboxing" discrete sub-applications (Sparks) into installable mobile apps—is a highly differentiated and non-obvious solution. It overcomes the exact limitations the industry struggles with.

### 2. Spatial Cross-Domain Navigation (The Wormhole Protocol)
**Current Industry Standard:** Developers currently use the new \`window.navigation\` API (Navigation API) combined with \`fetch()\` to intercept clicks and run WebGL animations. However, this is strictly used for **same-document** or same-origin Single Page Applications (SPAs).
**YouMeOS Novelty:** YouMeOS intercepts navigation for **cross-domain** transitions. It pauses the browser's default cross-site navigation, executes a cryptographic Server-to-Server handshake (Sync Keys), hydrates a localized shadow profile via IPFS, and covers the latency with a 3D WebGL Wormhole transition. This bridges the gap between disparate SaaS nodes without the user ever feeling a traditional page load.

---

## Part 2: Technical Sequence Diagrams

### Diagram A: The Wormhole Protocol & Dual-Pipeline Identity

This diagram illustrates the flow when a user traverses from one sovereign YouMeOS node (Site A) to a completely separate one (Site B).

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor User
    participant Client A as Site A (Client OS)
    participant Server A as Site A (Backend)
    participant IPFS as IPFS Gateway (Backpack)
    participant Client B as Site B (Client OS)
    participant Server B as Site B (Backend)

    User->>Client A: Clicks "Wormhole Link" to Site B
    Note over Client A: Intercepts navigation<br/>Prevents default page load
    Client A->>Client A: Triggers 3D/4D WebGL Wormhole Animation
    
    rect rgb(20, 40, 60)
        Note right of Client A: Dual-Pipeline Auth Phase
        Client A->>Server A: Request Sync Key for Site B traversal
        Server A->>IPFS: Ensure GlobalPlayerProfile (Aesthetics/XP) is pinned
        IPFS-->>Server A: Return CID
        Server A->>Server A: Generate single-use Cryptographic Sync Key
        Server A-->>Client A: Return [Sync Key + CID] payload
    end

    Client A->>Client B: Execute Cross-Domain Navigation with Payload
    Client B->>Server B: Submit [Sync Key + CID] payload
    
    rect rgb(60, 20, 20)
        Note right of Server B: Server-to-Server Backchannel Verification
        Server B->>Server A: Validate Sync Key
        Server A-->>Server B: Confirmation (Valid & Signature matches)
    end

    Server B->>IPFS: Fetch GlobalPlayerProfile using CID
    IPFS-->>Server B: Return MMO Stats, Avatars, UI Preferences
    
    Server B->>Server B: Hydrate local "Shadow Profile"<br/>(Grants local permissions, applies imported aesthetics)
    Server B-->>Client B: Issue local session Auth Token
    
    Client B->>Client B: Complete Wormhole Animation
    Client B-->>User: Reveal Site B Interface (Styled as User's Home)
\`\`\`

### Diagram B: The Decentralized MMO Gamification Engine

This diagram illustrates how isolated PWAs ("Sparks") feed into a unified civilizational progression model without being tightly coupled to the central database.

\`\`\`mermaid
sequenceDiagram
    participant User
    participant Spark as Isolated PWA (e.g. Bubblegum Task)
    participant Compass as COMPASS OS Event Bus
    participant MMO Engine as XP / Progression Engine
    participant DB as Central Node Database

    User->>Spark: Completes a localized task (e.g., checks off a To-Do)
    Spark->>Spark: Computes local state change
    Spark->>Compass: Emits standard event: \`COMPASS_ACTION_COMPLETED\`
    Note over Compass: Event contains Action Type & Metadata
    
    Compass->>MMO Engine: Route event for XP evaluation
    MMO Engine->>MMO Engine: Map action to Progression Matrix<br/>(Action Points, Reputation, Growth)
    
    alt Threshold Met (e.g., Level Up)
        MMO Engine->>Compass: Emit \`COMPASS_LEVEL_UP\`
        Compass-->>User: Trigger OS-level Visual Celebration (Confetti/Audio)
    end
    
    MMO Engine->>DB: Asynchronously commit new XP totals
    DB-->>MMO Engine: State Persisted
\`\`\`

### Diagram C: PWA "Unboxing" (Fractal OS)

\`\`\`mermaid
sequenceDiagram
    actor User
    participant Browser as Desktop Web Browser
    participant OS as YouMeOS Container
    participant Spark as Questbook (PWA Spark)
    participant Mobile as User's Mobile Device
    
    User->>OS: Opens YouMeOS Web Portal
    OS->>Browser: Loads Spatial Interface (Starmap, Dock)
    User->>OS: Launches Questbook Spark
    OS->>Spark: Instantiates Spark within OS iFrame/Window container
    
    Note over User, OS: User wants mobile access to just the CRM
    User->>OS: Clicks "Unbox / Install Spark"
    OS->>Spark: Triggers Service Worker App Manifest isolation
    Spark-->>Mobile: Prompts "Add to Home Screen"
    
    User->>Mobile: Installs Questbook
    Note over Mobile, Spark: Questbook now functions as a standalone mobile app
    Mobile->>Spark: App launched directly from Home Screen
    Spark->>Server B: API calls map directly back to central DB, bypassing OS UI
\`\`\`
`,ye=`# Bazaar Multi-Inventory & Warehouse Stock System (COMPASS PRO)

This document outlines the architecture, data models, AJAX endpoints, and PRO subscriber entitlement logic for the native COMPASS Multi-Inventory and Warehouse Stock Management system.

## Architectural Overview

The Multi-Inventory system extends WooCommerce inventory capabilities to support multiple physical warehouses, retail stores, suppliers, and fulfillment centers.

\`\`\`mermaid
graph TD
    A[Bazaar POS / Store Admin View] -->|AJAX Fetch Locations| B(wp_ajax_bazaar_get_inventory_locations)
    B -->|Check PRO Status| C{Xophz_Compass_Xp_Players::is_pro_user}
    C -->|Authorized| D[Get CPT compass_warehouse Posts]
    A -->|Save Product Multi-Stock| E(wp_ajax_bazaar_save_product_inventories)
    E -->|Update Meta| F[Product Meta: _compass_multi_inventory]
    F -->|Sync Cumulative Total| G[WC_Product::set_stock_quantity]
    H[Order / POS Checkout Created] -->|Filter woocommerce_reduce_order_stock| I[Deduct Stock from _pos_location_id]
\`\`\`

---

## 1. PRO Entitlement Verification

Multi-inventory management is a premium feature restricted to **COMPASS PRO** accounts.

### PHP Gate
The backend class [Xophz_Compass_Bazaar_Admin_Multi_Inventory](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-multi-inventory.php) checks PRO user entitlement via:
\`\`\`php
Xophz_Compass_Bazaar_Admin_Multi_Inventory::is_pro_user( $user_id );
\`\`\`
- Calls \`Xophz_Compass_Xp_Players::is_pro_user()\` if available.
- Checks \`_xp_is_pro\` user metadata.
- Validates user roles (\`administrator\`, \`editor\`, \`shop_manager\`, \`pro\`, \`achiever\`).

Non-PRO users are denied write access to location creation, product stock allocation, CSV imports, and bulk stock updates (returns HTTP 403 Forbidden).

---

## 2. Location Custom Post Type (\`compass_warehouse\`)

Inventory locations (warehouses, retail stores, suppliers) are saved as private Custom Post Types.

### Post Meta Fields

| Meta Key | Data Type | Description |
|---|---|---|
| \`_location_address\` | String | Store / Warehouse physical street address |
| \`_location_phone\` | String | Contact phone number |
| \`_location_email\` | String | Store manager email address |
| \`_location_manager\` | String | Store manager display name |
| \`_location_lat\` | Float | Latitude coordinate for geo-distance sorting |
| \`_location_lng\` | Float | Longitude coordinate for geo-distance sorting |
| \`_location_restricted_shipping\` | Array | Restricted shipping method IDs |
| \`_location_restricted_payments\` | Array | Restricted payment gateway IDs |
| \`_location_is_default\` | Boolean | Primary default location flag |

---

## 3. Product Multi-Stock Meta Schema

Location-based inventory levels are stored in product meta key \`_compass_multi_inventory\` as an associative array keyed by \`location_id\`:

\`\`\`php
[
  101 => [
    'location_id'         => 101,
    'stock_quantity'      => 150,
    'low_stock_threshold' => 10,
    'sku'                 => 'WH-MAIN-001',
    'price'               => 24.99,
    'is_enabled'          => true,
  ],
  102 => [
    'location_id'         => 102,
    'stock_quantity'      => 45,
    'low_stock_threshold' => 5,
    'sku'                 => 'RET-DOWNTOWN-001',
    'price'               => null, // Falls back to standard WC price
    'is_enabled'          => true,
  ]
]
\`\`\`

When saved, the system automatically sums active location quantities and updates the native WooCommerce \`stock_quantity\` on the \`WC_Product\` object.

---

## 4. AJAX Endpoints Reference

### Location Management
- **\`bazaar_get_inventory_locations\`** (GET): Returns list of registered warehouses/stores.
- **\`bazaar_save_inventory_location\`** (POST, PRO required): Create or update a location.
- **\`bazaar_delete_inventory_location\`** (POST, PRO required): Delete a location.

### Product Stock Management
- **\`bazaar_get_product_inventories\`** (GET): Fetch multi-location stock levels for a product ID.
- **\`bazaar_save_product_inventories\`** (POST, PRO required): Save multi-location stock levels for a product ID.
- **\`bazaar_bulk_update_inventory_stock\`** (POST, PRO required): Bulk update stock quantities across multiple products and locations.

### CSV Import / Export
- **\`bazaar_export_inventory_csv\`** (GET): Export multi-location inventory levels to a standard CSV file.
- **\`bazaar_import_inventory_csv\`** (POST, PRO required): Bulk import location stock levels from a CSV file.

---

## 5. Order Stock Reduction Hook

The backend intercepts the WooCommerce \`woocommerce_reduce_order_stock\` filter. If an order contains the \`_pos_location_id\` order meta key (set during Bazaar POS checkout or store location allocation), stock is deducted directly from that specific location's inventory array in addition to standard order processing.
`,we=`# YouMeOS Taxonomy & Terminology

This document defines the official naming conventions for the YouMeOS system and its celestial components, utilizing an "Ancient-Futuristic" aesthetic for its primary navigation levels.

## Core System Entities

### YouMeOS

The system as a whole. An Intergalactic Operating System for the Internet, built as a 4D interface for WordPress.

### Youniverse

An individual instance of YouMeOS. It is a 4D interface of a galaxy, capable of seeing distant galaxies in the background. It serves as the site's user-facing portal into the system.

## The Three "God-Views" (Primary Navigation)

### The Noosphere (Galaxy Level)

The highest perspective. A visualization of the entire collective of stars (users) and information. It represents the "sphere of human thought" integrated into the intergalactic web.

### The Nexos (Hipparcos Level)

The spatial level that visualizes your relation to others. It is a time-based grid where users/suns appear on a canvas. This acts as the connecting point between stars. This level is also referred to as **Hipparcos** (after the star catalog used for positional data).
_Note: The time-based grid visualization for user positions is planned for future development._

### Helios (Sun Level)

The personal core. At the very center of a user's system is a large, beautiful Sun. This is the **Default Dashboard** where core management and overview reside. It is named **Helios** to evoke the ancient personification of the Sun.

## Celestial Hierarchy

### Star

Each user on a YouMeOS-enabled site is represented as their own **Star**.

### Main Star

The main WordPress site itself is the **Main Star** (or central sun) of that specific system.

### Oort Cloud

Visible when zooming into your own sun (or someone else's). This contains all the content produced, linked, watched, or consumed by that user. It is the outer layer of a user's digital footprint.

### Sparks

Small, energetic applications that perform specific functions or add features to your system. They are the evolutionary successors to Apps:
**Program** → **Application** → **App** → **Spark**.

In the legacy engine, these were visualized as planets, but now they are treated as ignited modules within your system:

- **Mercury**: Messages
- **Venus**: Relations
- **Earth**: Pictures
- **Mars**: Videos
- **Jupiter**: Music
- **Saturn**: Blog
- **Uranus**: Arcade
- **Neptune**: Calendar

## Installation

YouMeOS is typically installed as a **Plugin** on a WordPress site, transforming the traditional admin experience into a celestial navigation interface.
`,fe='# Xophz-COMPASS Architecture & Migration Documentation\n\n## Overview\n\nXophz-COMPASS is a Vue-based administration portal, originally built with Vue 2, Vuetify 1.5, and Bootstrap. It has been migrated to Vue 3 and Vuetify 3, utilizing a custom "X-Atoms" design system for a premium, game-inspired aesthetic.\n\n> For a deep dive into the system\'s "Apps" and "Plugins", see [Portals & Ecosystem](Portals-and-Ecosystem.md).\n\n## Tech Stack\n\n- **Frontend Framework**: Vue 3 (Composition API)\n- **UI Component Library**: Vuetify 3\n- **Styling**: Vanilla SCSS + Vuetify utility classes (No Tailwind CSS)\n- **State Management**: Pinia\n- **Build Tool**: Vite\n- **Data Fetching**: Axios + TanStack Vue Query\n\n## Project Structure\n\n- `src/`: Core source code\n  - `mount-app.ts`: Entry point\n  - `app.vue`: Root layout component\n  - `assets/`: Static assets (fonts, images)\n  - `routes/`: Module-based routing and components\n    - `compass/`: Core navigation and exploration\n    - `xp/`: Gamification / XP module\n    - `bazaar/`: Product/Sales module\n    - `bomb-bag/`: Email marketing module\n  - `components/`: Global reusable components using game engine-inspired hierarchy:\n    - `primitives/`: Basic building blocks (`x-btn`, `x-card`, etc.)\n    - `prefabs/`: Reusable, interactive components\n    - `constructs/`: Complex, functional UI sections\n    - `blueprints/`: Page layouts and structural wrappers\n  - `styles/`: Global SCSS styles\n  - `engine/`: Core application setup\n    - `primitives.ts`: Global registration of X-Primitives\n    - `global-components.ts`: Registration of complex global components\n    - `api.ts`: Centralized API configuration\n\n## Migration Patterns\n\n### Grid System\n\n- **Legacy**: `v-layout` / `v-flex` (Vuetify 1.x)\n- **Modern**: `v-row` / `v-col` (Vuetify 3)\n\n### Utility Classes\n\n- Use standard Vuetify utility classes (`ma-0`, `pa-0`, `d-flex`).\n- Custom utility classes (e.g., `.glass`, `.rough-glass`) located in `src/styles/core/_utilities.scss`.\n\n### Icons\n\n- Uses **Font Awesome 5 Pro** (SVG/JS or Webfont).\n- Wrap in `<x-icon>` for consistent themed color support.\n\n## Key Components\n\n### Billboard\n\nLocated in `@blueprints/sub-app-billboard/sub-app-billboard.vue`. It serves as a header/hero area that changes based on the active route/plugin.\n\n### Routes Navigation Drawer\n\nLocated in `@constructs/routes-navigation-drawer/routes-navigation-drawer.vue`. Handles the side-level navigation.\n\n### X-Primitives (Atoms)\n\nGeneric UI building blocks (e.g., `<x-btn>`, `<x-card>`) that extend Vuetify components with the unique "Xophz Flare". These are the preferred way to build UI instead of raw `v-` components.\n\n## Current Focus\n\nRefining the premium HUD aesthetic, completing the migration of all legacy modules to the new X-Primitive system, and ensuring robust integration with the WordPress REST API.\n',be=`# Patreon & Bazaar Integration

## Overview

The **Bazaar** is the community contribution and value-exchange module for the YouMeOS ecosystem. It introduces a "Contribution-as-Access" model where users can support the project via Patreon and receive **Universal Access Keys** to enter the OS and gain beta access to new plugins.

## Architecture

### 1. Support View (\`/support\`)
A dedicated, premium view (\`SupportView.vue\`) explains the project's mission and the benefits of becoming a Patron. It features a generated "Universal Access Key" visual asset and directs users to the project's Patreon page.

### 2. Access Keys
- **Purpose**: Keys are used to gate access to the OS and its advanced features.
- **Acquisition**: Currently, keys are obtained by backing the project on Patreon.
- **Entry**: The **Register** screen (\`RegisterView.vue\`) is the primary entry point for keys. It has been updated to specifically label the password/access field as "Access Key".

### 3. Navigation
- **Bazaar Item**: Added to the \`useNavigation\` composable, providing a central link in the portal navigation.
- **Support Link**: Added to the user interaction drawer (right sidebar) for easy access from anywhere in the app.

## Branding & Aesthetics
The Bazaar uses a **Primary Cyan** color scheme with **Patreon Red** hover accents. The "Universal Access Key" asset follows the project's glassmorphism and holographic HUD aesthetic.

## Future Roadmap
- **Automated Key Delivery**: Integration with Patreon API to automatically issue keys upon contribution.
- **Plugin Marketplace**: The Bazaar will eventually house a "Plugin Store" where Patrons can browse and install beta plugins.
- **Subscription Model**: Introduction of a tiered subscription model for advanced OS features.
`,ve=`# Portals & Ecosystem

> "The Light Web: Weaving the digital universe together, one star at a time."

## 1. The Concept

### Portals (The "Apps")
In **YouMeOS**, a **Portal** is more than just a webpage; it is a destination. When a user navigates into a Portal (e.g., Helios or Nexos), they aren't just changing routes, they are initiating a **Visual Journey**.

- **The Background Canvas**: The defining feature of a Portal is its ability to command the global Background Canvas. As the user moves through the system, the background travels, morphs, and animates to visually represent the current context (e.g., zooming into a Sun, flying through a Nebula, or mapping a Constellation).
- **Spatial Navigation**: The interface is designed to feel "spatial," blending the utility of a traditional OS with the immersion of a video game.

### The Open Ecosystem
Just as Windows has \`.exe\` files and Android has \`.apk\`s, YouMeOS is designed as a platform for **Sparks**.
-   **Evolution**: Program → Application → App → **Spark**.
-   **Concept**: A Spark is a lightweight, living utility that ignites functionality on the canvas.
-   **Build It**: Developers can create their own Portals and Sparks.
-   **Connect It**: These sparks plug into the main YouMeOS/COMPASS core.
-   **Scale It**: The vision is a thriving **You Me Sparks** library that extends the operating system's capabilities.

---

## 2. Core Portals

The default installation comes with three primal Portals, representing the three "God-Views" of reality.

### 🔥 Helios (The Personal Core)
**"The Heart of Your Solar System"**
Helios is the creative suite and media center. It is where the User (the Star) manages their own light-content.

| Nav Item | Purpose |
| :--- | :--- |
| **Chronicles** | Blog posts, journals, and written journey logs. |
| **Pictures** | Visual gallery and image management. |
| **Videos** | Cinematic records and motion captures. |
| **Music** | Audio tracks, playlists, and sonic vibrations. |
| **Vault** | Secure, private storage for sensitive data. |
| **Profile** | The public face of the Star; identity management. |

### ⚛️ Nexos (The System Layer)
**"The Grids That Bind Us"**
Nexos handles the connections, hardware (settings), and the structural relationships between things. It is the "Engineering" deck.

| Nav Item | Purpose |
| :--- | :--- |
| **Resonance** | Social syncing; aligning frequencies with other users. |
| **Constellations** | Organization of friends, groups, and clusters. |
| **Channels** | Communication pipelines (Aether Channels). |
| **Forge** | The Holospace for simulations, games, and tools. |
| **Profile** | Technical profile and system calibration. |

### 🌌 Noosphere (The Collective)
**"The Universal Mind"**
The Noosphere is the "Internet" of YouMeOS, the shared space where all Stars interact, share wisdom, and form the collective consciousness.

| Nav Item | Purpose |
| :--- | :--- |
| **Akashic Archive** | The global library of shared knowledge (Wiki/Docs). |
| **Thought Stream** | The real-time river of global activity and consciousness. |
| **Mind Map** | A visualization of connected ideas and topics. |
| **Forums** | Galactic meeting halls for discussion. |
| **Universal Net** | The visual network graph of the Noosphere. |

---

## 3. Ecosystem Architecture

Understanding how the pieces fit together is crucial for building new extensions.

### COMPASS (The Host)
The "Motherboard". COMPASS is the core WordPress plugin that provides the API, authentication, and database structures.

### YouMeOS (The OS)
The "Interface". This is the Vue.js frontend application. It consumes the COMPASS API and renders the interactive 4D desktop environment.

### Sparks (The "Apps")
Extensions that provide specific "backend" functionality or specialized UI modules. A Spark can expose:
1.  **API Endpoints**: New data sources.
2.  **Vue Components**: New primitive atoms or widgets.
3.  **Portals**: Entire new top-level routes.

#### Standard Sparks
Existing "Cartridges" that plug into the system:

-   **💣 Bomb Bag**: The **Email Marketing** engine. Manages campaigns and subscribers.
-   **🔮 Magic Cloak**: The **Contextual Helper**. Provides "Glass Toast" notifications and guides users based on events.
-   **🛡️ Mirror Shield**: The **Security** layer. Deploys honeypots and blocks malicious entities.
-   **🏰 Moving Castle**: The **Multisite Manager**. Controls the network of sites from a single interface.

---

## 4. Development Guide

### How to Create a Portal
1.  **Define the Route**: Add a new route object in \`router.ts\` under the \`/u\` (Youniverse) path.
2.  **Set Navigation Meta**:
    \`\`\`typescript
    meta: {
      requiresAuth: true,
      navigation: [
        {
           title: "My Portal",
           icon: "fal fa-rocket",
           to: "/u/my-portal/start",
           description: "Launch into the unknown.",
           value: "my-portal-start"
        }
      ]
    }
    \`\`\`
3.  **Create the Component**: Build a Vue component (Leaf) that serves as the layout for your portal.
4.  **Connect the Canvas**: Use the \`useCanvasStore()\` to dispatch a "travel" event when your route is mounted.

### How to Ignite a Spark
1.  **Backend**: Create a WordPress plugin that registers REST API routes under \`xophz-compass/v1/my-spark/\`.
2.  **Frontend**: In YouMeOS, create a \`service\` that fetches data from these endpoints.
3.  **UI**: Create standard \`x-\` components to display the data.
`,Se=`# Software Manager (Compass Suite)

The **Software Manager** is a high-fidelity administrative dashboard within the COMPASS welcome screen designed to provide a comprehensive overview of installed plugins and modules. It replaces the legacy dial-pad interface with a modern master-detail layout.

## Architecture

### Master-Detail Layout
- **Left Sidebar**: A sticky category menu that groups plugins based on the project's thematic design language (e.g., True North, Command Deck, Trajectory).
- **Right Panel**: A dynamic list of plugins for the selected category.

### Data Source
The software manager pulls data directly from the \`CompassStore.pluginList\`, which is populated by the WordPress REST API. It matches plugins using their \`TextDomain\` naming convention (e.g., \`xophz-compass-bomb-bag\`).

## Components

### X-Sequence-Icon Integration
The category menu utilizes the \`x-sequence-icon\` primitive to provide animated feedback for specific navigation items.

- **Command Deck**: Features a "Teleport" animation sequence (\`fal fa-transporter\` range).

### Scrolling Behavior
Scrolling is handled at the global \`compass.vue\` level. The entire route view scrolls independently of the bottom navigation bar, while the software manager's category sidebar remains fixed in place using \`position: sticky\`.

## Configuration

Categories are defined in \`src/stores/launcher.store.ts\` via the \`COMPASS_CATEGORIES\` constant.

\`\`\`typescript
export const COMPASS_CATEGORIES: CompassCategoryDef[] = [
  {
    id: "command deck",
    label: "Command Deck",
    subtext: "Strategy & Operations",
    icon: "fal fa-ship",
    plugins: ["newsroom", "questbook", "event-horizon", "profile"]
  },
  // ...
];
\`\`\`

## Styling
- **Glassmorphism**: Uses the signature COMPASS glass styling for cards and lists.
- **HUD Typography**: Module metadata (version, author) uses subtle caption styling for an "OS dashboard" feel.
`,ke=`# Bazaar POS (Point of Sale) System

## Purpose
The Bazaar POS System is a high-fidelity checkout terminal designed for direct over-the-counter retail transactions within the Xophz COMPASS suite. It integrates seamlessly with WooCommerce products, payment methods, and coupons, allowing store operators to process card and cash sales, scan physical barcodes, and apply dynamic discounts.

## Architecture

| Component | Responsibility | Location |
|---|---|---|
| **POS Store (\`usePosStore\`)** | Manages cart state, active discounts, payment methods, and handles the checkout dispatch. | \`src/routes/bazaar/store/pos.store.ts\` |
| **POS Main View** | The terminal layout containing product search, visual product catalog, and the cart checkout panel. | \`src/routes/bazaar/routes/bazaar-pos/bazaar-pos.vue\` |
| **Cash Tendering Dialog** | A high-fidelity modal featuring a custom cash-green numpad and quick bill selectors. | \`src/routes/bazaar/routes/bazaar-pos/cash-tendering-dialog.vue\` |
| **Discount Dialog** | A green-money themed modal with a custom numpad for applying fixed-amount or percentage custom discounts. | \`src/routes/bazaar/routes/bazaar-pos/discount-dialog.vue\` |
| **Bazaar API Wrapper** | Frontend network gateway for product retrieval, coupon validation, and order submission. | \`src/routes/bazaar/bazaar.api.ts\` |
| **Order Handler (PHP)** | Backend router processing Ajax checkouts, creating WooCommerce orders, and applying coupons/fees. | \`wp-content/plugins/xophz-compass-bazaar/admin/class-xophz-compass-bazaar-admin-orders.php\` |

## Barcode Scanning Integration

The POS terminal provides dual barcode capture workflows to maximize checkout speed:

### 1. Device Camera Scanner
- Leveraging \`html5-qrcode\` inside a responsive \`<v-dialog>\`, cashiers can tap the barcode icon to initialize their device's environment camera.
- Scanned barcodes are parsed instantly, matching against catalog SKUs to auto-add items to the active cart.

### 2. Physical USB Barcode Scanner
- A global keyboard event listener captures high-frequency keydown sequences.
- If a sequence of character inputs completes with a carriage return (\`Enter\`) within a **50ms** inter-character threshold, it is automatically processed as a barcode scan.
- This bypasses active page focus unless the cashier is specifically inside an input or textarea element.

## Discounts & Coupons Architecture

The Bazaar POS supports dynamic checkout-level price adjustments via two mechanisms:

### 1. WooCommerce Coupons
- An elegant **inline coupon field** in the cart panel lets operators input coupons on the fly.
- Clicking "Apply" invokes a backend Ajax check (\`validate_pos_coupon\`) to verify coupon expiration, discount type, and value directly against the WooCommerce DB.
- Validated coupons are added to the POS checkout state and applied natively via \`$order->apply_coupon()\` in the backend.

### 2. Custom Ad-Hoc Discounts
- The secondary **Add Discount** button triggers a glassmorphic dialog.
- Cashiers can input custom Fixed Dollar (\`$\`) or Percentage (\`%\`) deductions using a custom green money-numpad.
- Allows recording a custom name/reason (e.g. "Damaged Box", "Friends & Family").
- On the backend, custom discounts are dynamically generated as negative order fee line items using \`WC_Order_Item_Fee\`.

## Cash Tendering Flow

The cash checkout uses an interactive cash-green tendering dialog:
- **Quick Bills:** Interactive bills represent values \`$1\`, \`$5\`, \`$10\`, \`$20\`, \`$50\`, and \`$100\`. They are styled with a green money-gradient that scales darker as the bill value increases.
- **Numpad entry:** A tactile currency numpad handles custom values and loose change.
- **Change Calculation:** Displays due, tendered, and change-to-be-returned calculations dynamically.
- **Visual Indicators:** Borders transition from warning-orange to success-green once sufficient cash is tendered.

## Clerk Tracking & Security
- Every POS order captures the currently logged-in clerk's ID.
- The order creation pipeline saves this tracking data under the \`_pos_cashier_id\` post meta field in WordPress, establishing an audit trail for store management.
`,xe='# Bomb Bag News Drip System\n\nThe **Bomb Bag** is an email marketing and automated drip sequence plugin for COMPASS. It provides campaign management, subscriber lists, newsletter delivery, open/click tracking, scheduled campaigns, drip sequences, and reusable email templates.\n\n## Philosophy\n\nBomb Bag transforms email marketing into an intuitive, visual experience. Users can create campaigns, manage subscribers, compose beautiful emails, build automated drip sequences, and track performance, all from a sleek, mobile-first interface with the signature COMPASS "HUD" aesthetic and a pink (#ED55A9) accent theme.\n\n## Architecture\n\n### 1. Database Schema\n\n| Table                          | Purpose                                       |\n| ------------------------------ | --------------------------------------------- |\n| `wp_bomb_bag_campaigns`        | Campaign metadata, status, scheduling, stats  |\n| `wp_bomb_bag_subscribers`      | Email addresses, names, status                |\n| `wp_bomb_bag_lists`            | Subscriber grouping/segmentation              |\n| `wp_bomb_bag_list_subscribers` | Many-to-many list↔subscriber junction         |\n| `wp_bomb_bag_emails`           | Individual sent emails with tracking ID       |\n| `wp_bomb_bag_analytics`        | Open/click/unsubscribe events                 |\n| `wp_bomb_bag_drip_sequences`   | Drip sequence metadata and status             |\n| `wp_bomb_bag_drip_steps`       | Individual steps in a drip sequence            |\n| `wp_bomb_bag_drip_enrollments` | Subscriber enrollment state in drip sequences |\n| `wp_bomb_bag_templates`        | Reusable email templates                      |\n\n### 2. REST API\n\nBase URL: `/wp-json/xophz-compass/v1/bomb-bag/`\n\n#### Core Endpoints\n\n| Endpoint                  | Method         | Description                 |\n| ------------------------- | -------------- | --------------------------- |\n| `/stats`                  | GET            | Dashboard statistics        |\n| `/settings`               | GET/POST       | Plugin settings             |\n| `/settings/test`          | POST           | Test email connection       |\n| `/campaigns`              | GET/POST       | List or create campaigns    |\n| `/campaigns/:id`          | GET/PUT/DELETE | Single campaign CRUD        |\n| `/campaigns/:id/send`     | POST           | Queue campaign for sending  |\n| `/campaigns/:id/schedule` | POST           | Schedule campaign for later |\n| `/campaigns/:id/test`     | POST           | Send test email             |\n| `/subscribers`            | GET/POST       | List or add subscribers     |\n| `/subscribers/:id`        | PUT/DELETE     | Update or remove subscriber |\n| `/subscribers/import`     | POST           | Bulk CSV import             |\n| `/lists`                  | GET/POST       | List management             |\n| `/lists/:id`              | PUT/DELETE     | Update or delete list       |\n| `/analytics/:campaign_id` | GET            | Campaign-specific analytics |\n\n#### Drip Sequence Endpoints\n\n| Endpoint                               | Method     | Description                 |\n| -------------------------------------- | ---------- | --------------------------- |\n| `/drips`                               | GET/POST   | List or create sequences    |\n| `/drips/:id`                           | GET/PUT/DELETE | Single sequence CRUD    |\n| `/drips/:id/steps`                     | POST       | Add a step                  |\n| `/drips/:id/steps/:step_id`            | PUT/DELETE | Update or delete a step     |\n| `/drips/:id/steps/reorder`             | POST       | Reorder steps               |\n| `/drips/:id/enrollments`               | GET        | List enrollments            |\n| `/drips/:id/enroll`                    | POST       | Enroll a subscriber         |\n| `/drips/:id/analytics`                 | GET        | Drip-specific analytics     |\n\n#### Template Endpoints\n\n| Endpoint         | Method         | Description            |\n| ---------------- | -------------- | ---------------------- |\n| `/templates`     | GET/POST       | List or create         |\n| `/templates/:id` | GET/PUT/DELETE | Single template CRUD   |\n\n### 3. Email Delivery\n\n- **Batch Processing**: Emails queued in database, processed via WP-Cron\n- **Configurable batch size** (default: 50) and delay between batches\n- **Providers Supported**:\n  - WordPress Default (`wp_mail`)\n  - SendGrid (HTTP API with Bearer token)\n  - Mailgun (HTTP API with Basic auth)\n  - Custom SMTP (PHPMailer hook)\n- **Provider Implementation**: All providers implemented in `class-bomb-bag-email-providers.php`\n\n### 4. Tracking\n\n- **Open Tracking**: 1x1 transparent GIF pixel\n- **Click Tracking**: URL rewriting through tracking endpoint\n- **Unsubscribe**: One-click unsubscribe via tracking URL\n\nTracking endpoint: `?bomb_bag_track={open|click|unsubscribe}&tid={tracking_id}`\n\n### 5. Campaign Scheduling\n\n- Campaigns can be scheduled for future delivery via the `scheduled_at` field\n- A WP-Cron job runs every 5 minutes to check for campaigns due to send\n- When due, the scheduler calls `queue_campaign()` to start batch processing\n\n### 6. Drip Sequences (News Drip)\n\n- **Sequences** contain ordered **steps**, each with a subject, content, and delay\n- **Triggers**: `subscribe` (auto-enroll on list subscription), `manual`, `tag_added`\n- **Enrollments** track each subscriber\'s progress through the sequence\n- A WP-Cron job runs hourly to process due drip emails\n- Each step can use a template from the template library\n\n### 7. Frontend Views\n\n| Route                     | View          | Description                                         |\n| ------------------------- | ------------- | --------------------------------------------------- |\n| `/bomb-bag`               | Dashboard     | Stats cards, subscriber growth chart, quick actions  |\n| `/bomb-bag/campaigns`     | Campaigns     | Campaign list with status filters                    |\n| `/bomb-bag/campaigns/new` | Campaign Form | Create new campaign                                  |\n| `/bomb-bag/campaigns/:id` | Campaign Form | Edit existing campaign                               |\n| `/bomb-bag/subscribers`   | Subscribers   | Subscriber list, search, import                      |\n| `/bomb-bag/composer/:id`  | Composer      | HTML editor with live preview                        |\n| `/bomb-bag/settings`      | Settings      | Email provider configuration                         |\n| `/bomb-bag/drips`         | Drips         | Drip sequence listing with stats                     |\n| `/bomb-bag/drips/new`     | Drip Builder  | Timeline-based sequence builder                      |\n| `/bomb-bag/drips/:id`     | Drip Builder  | Edit existing sequence                               |\n| `/bomb-bag/templates`     | Templates     | Email template library with preview                  |\n\n### 8. Route Names\n\nAll route names are prefixed with "Bomb Bag" to prevent collision with other plugins. Constants are defined in `bomb-bag.routes.ts`:\n\n```typescript\nconst R = BOMB_BAG_ROUTE_NAMES;\nrouter.push({ name: R.campaigns });\n```\n\n## Email Template Variables\n\nAvailable in campaign and drip content:\n\n| Variable              | Description                |\n| --------------------- | -------------------------- |\n| `{{first_name}}`      | Subscriber\'s first name    |\n| `{{last_name}}`       | Subscriber\'s last name     |\n| `{{email}}`           | Subscriber\'s email address |\n| `{{unsubscribe_url}}` | One-click unsubscribe link |\n\n## Default Behavior\n\nOn plugin activation:\n\n1. Creates 10 database tables\n2. Sets default email provider to WordPress (`wp_mail`)\n3. Seeds "Main Newsletter" subscriber list\n4. Seeds 3 default email templates (Modern Newsletter, Welcome Series, Minimal Text)\n\n## PHP Class Map\n\n| Class | File | Purpose |\n| --- | --- | --- |\n| `Xophz_Compass_Bomb_Bag` | `class-xophz-compass-bomb-bag.php` | Main plugin class, hooks, cron |\n| `Xophz_Compass_Bomb_Bag_Rest` | `class-bomb-bag-rest.php` | Core REST API (campaigns, subscribers, lists, settings) |\n| `Xophz_Compass_Bomb_Bag_Drip_Rest` | `class-bomb-bag-drip-rest.php` | Drip sequence REST API |\n| `Xophz_Compass_Bomb_Bag_Template_Rest` | `class-bomb-bag-template-rest.php` | Template REST API |\n| `Xophz_Compass_Bomb_Bag_Email_Handler` | `class-bomb-bag-email-handler.php` | Email batch processing, tracking, drip processing |\n| `Xophz_Compass_Bomb_Bag_Email_Providers` | `class-bomb-bag-email-providers.php` | Provider-specific email sending |\n| `Xophz_Compass_Bomb_Bag_Activator` | `class-xophz-compass-bomb-bag-activator.php` | DB table creation, seeding |\n\n## TypeScript Type Map\n\nAll types defined in `bomb-bag.api.ts`:\n\n| Type | Purpose |\n| --- | --- |\n| `Campaign`, `CampaignPayload` | Campaign data and creation payloads |\n| `Subscriber`, `SubscriberPayload` | Subscriber data |\n| `SubscriberList` | List metadata |\n| `DripSequence`, `DripSequencePayload` | Drip sequence data |\n| `DripStep`, `DripStepPayload` | Individual drip steps |\n| `DripEnrollment` | Subscriber enrollment state |\n| `EmailTemplate`, `EmailTemplatePayload` | Template data |\n| `CampaignAnalytics`, `DripAnalytics` | Analytics responses |\n| `Stats`, `Settings` | Dashboard and configuration |\n| `CampaignStatus`, `DripStatus`, `DripTrigger`, `EmailProvider` | Union type constants |\n',Pe="# Bug Net System\n\n## Purpose\nThe Bug Net System is the official bug-catching and tracking engine for the COMPASS platform. It leverages a dedicated WordPress Custom Post Type (`compass_bug`) to log, monitor, and resolve system issues, acting as an integrated issue tracker for the suite.\n\n## Architecture\n\n| Component | Responsibility | Location |\n|---|---|---|\n| **CPT (`compass_bug`)** | Stores bug data (Title, Description, Environment, Status, Priority). | `wp-content/plugins/xophz-compass-bugnet/includes/class-xophz-compass-bugnet-cpt.php` |\n| **Meta Box** | WP Admin interface for reviewing bug state (classic editor, Gutenberg disabled). | Same as above |\n| **REST API** | Exposes `bug_status`, `bug_priority`, `bug_environment` for Vue integration. | `rest_api_init` hooks inside the CPT class |\n| **Error Interceptor** | Catches runtime JS/Vue errors and auto-creates bug posts. | `src/engine/bugnet-interceptor.ts` |\n| **Vue Dashboard** | Card-based bug tracking UI with search, filters, and inline editing. | `src/routes/bugnet/views/` |\n| **API Composable** | Typed wrapper around `usePostType('compass_bug')` with shared constants. | `src/routes/bugnet/bugnet.api.ts` |\n\n## Meta Fields & Status Lifecycle\n\n### Bug Status (`bug_status`)\n- `new`: A newly reported issue waiting for triage.\n- `in-progress`: Actively being worked on by the development team.\n- `resolved`: The fix has been applied and tested but not fully closed out.\n- `closed`: Verified complete.\n\n### Priority (`bug_priority`)\n- `low`: Minor visual inconsistencies or trivial edge cases.\n- `medium`: Expected functionality issues that don't block the core user experience.\n- `high`: Severe operational failure in a primary system component.\n- `critical`: Total system failure, data loss, or significant security vulnerability.\n\n## Automatic Error Interception\n\nThe Bug Net interceptor (`src/engine/bugnet-interceptor.ts`) is installed during app bootstrap in `mount-app.ts`. It hooks into three error surfaces:\n\n| Source | What It Catches |\n|---|---|\n| `window.addEventListener('error')` | Uncaught JS errors (syntax, reference, type errors) |\n| `window.addEventListener('unhandledrejection')` | Failed async/await and unhandled Promise rejections |\n| `app.config.errorHandler` | Vue component lifecycle errors (render, setup, watchers) |\n\n### Safety Mechanisms\n- **Fingerprint Deduplication**: Identical errors within a 10-second window are suppressed.\n- **Batched Queue**: Posts are flushed in batches of 5 every 2 seconds to avoid API floods.\n- **Max Queue Cap**: Only 20 pending reports are queued at any time.\n- **Silent Failure**: The interceptor itself never throws, as a bug reporter creating bugs would be ironic.\n- **Nonce Guard**: If no WP nonce is present (e.g., logged-out user), auto-reporting is disabled entirely.\n\n### Auto-Generated Bug Format\n- **Title**: `[Auto] <error message>` (truncated to 200 chars)\n- **Content**: `<pre>` block containing the full error message + stack trace\n- **Status**: Always `new`\n- **Priority**: `high` for JS errors, `critical` for Vue component errors\n- **Environment**: Auto-populated with `navigator.userAgent` and current route\n\n## Vue Dashboard Views\n\n| Route | Component | Purpose |\n|---|---|---|\n| `/bugnet` | `bugnet-dashboard.vue` | Card grid of all bugs with search, status/priority filters, and \"Report Bug\" dialog |\n| `/bugnet/:id` | `bugnet-detail.vue` | Single bug view with inline status/priority editing and quick Resolve/Close actions |\n\n## Future Development\n- Funnel critical bugs to designated communication channels (Slack, Discord, etc.) via WP hooks.\n- Add bug assignment to team members via the Questbook CRM contact system.\n- Integrate with the XP system to reward users who report bugs.\n",Ae="# Xophz Magic Hookshot — Premium\n\n**Status**: Premium Integration Hub\n**Core Location**: `wp-content/plugins/xophz-compass-hookshot/`\n**Frontend**: `src/routes/hookshot/`\n**Primary Role**: Bidirectional external HTTP communication — the central nervous system for all COMPASS integrations.\n\n## Architecture\n\n### Data Models (CPTs)\n\n- **`compass_webhook`**: Webhook configuration with full meta schema\n- **`compass_wh_log`**: Immutable log entries for both incoming and outgoing dispatches\n\n### Taxonomy\n\n- **`hookshot_category`**: Hierarchical categorization for webhook organization (Payment Hooks, CRM Hooks, etc.)\n\n### Meta Schema — `compass_webhook`\n\n| Meta Key | Purpose |\n|---|---|\n| `hookshot_type` | `incoming` or `outgoing` |\n| `hookshot_status` | `active` or `inactive` |\n| `hookshot_secret` | Auto-generated secret for incoming endpoint URLs |\n| `hookshot_target_url` | Destination URL for outgoing webhooks |\n| `hookshot_trigger_event` | WP Action hook that triggers outgoing dispatch |\n| `hookshot_signing_secret` | HMAC-SHA256 shared secret for signature verification |\n| `hookshot_sig_header` | Custom signature header name (default: `X-Hookshot-Signature`) |\n| `hookshot_auth_type` | `none`, `bearer`, `basic`, `api_key` |\n| `hookshot_auth_value` | Token/key value for outgoing auth |\n| `hookshot_auth_header` | Custom header name for API key auth |\n| `hookshot_transform` | JSON transform map for outgoing payload reshaping |\n| `hookshot_incoming_transform` | JSON transform map for incoming payload normalization |\n| `hookshot_bridges` | Array of enabled bridge slugs |\n| `hookshot_bridge_config` | Per-bridge field mapping configuration |\n| `hookshot_allowed_ips` | Comma-separated IP whitelist for incoming |\n| `hookshot_rate_limit` | Max requests per minute for incoming |\n| `hookshot_max_retries` | Max retry attempts before dead letter (default: 5) |\n| `hookshot_async` | Fire-and-forget mode for outgoing |\n| `hookshot_last_fired` | Timestamp of last dispatch |\n| `hookshot_last_status` | `success` or `failure` |\n\n## Premium Features\n\n### 1. HMAC Signature Verification (`class-hookshot-signature.php`)\n\n- Stripe-style `t=timestamp,v1=signature` format with replay protection (5min window)\n- Falls back to raw HMAC-SHA256 comparison for simpler senders\n- Configurable header name per webhook\n- Applied to both incoming verification and outgoing signing\n\n### 2. Retry Queue (`class-hookshot-retry.php`)\n\n- **Action Scheduler** primary (WP-Cron fallback for sites without WooCommerce)\n- Each failed dispatch schedules its own individual retry — no polling queue\n- Exponential backoff: 2min → 15min → 1h → 6h\n- After max attempts → marked as `dead_letter`, fires `do_action('xophz_hookshot_dead_letter', ...)`\n- Dead letters visible in dashboard for manual re-fire\n\n### 3. Payload Transforms (`class-hookshot-transform.php`)\n\n- Lightweight JSONPath-style field mapping: `{ \"customer_email\": \"$.args.0.user_email\" }`\n- Built-in presets for Zapier, Make, Slack, Discord\n- Extensible via `xophz_hookshot_transform_presets` filter\n- Separate transforms for incoming (`hookshot_incoming_transform`) and outgoing (`hookshot_transform`)\n\n### 4. Health Monitor (`class-hookshot-health.php`)\n\n- Rolling 24h success/failure tracking via transient cache\n- Three-tier status: `healthy` (<10% failure), `degraded` (10-50%), `critical` (>50%)\n- Fires `do_action('xophz_hookshot_health_degraded', $webhook_id)` at 50%+ failure rate\n- Aggregate stats endpoint for dashboard overview\n\n### 5. Cross-Plugin Bridges (`class-hookshot-bridges.php`)\n\nPre-wired handlers that route incoming payloads to other COMPASS plugins:\n\n| Bridge | Target Plugin | Action |\n|---|---|---|\n| `questbook_contact` | Questbook CRM | Auto-create contact from payload |\n| `bombbag_subscribe` | Bomb Bag | Auto-subscribe email to list |\n| `xp_grant` | XP System | Award XP to user |\n| `wp_action` | WordPress Core | Fire custom WP action |\n\n- Per-webhook toggleable with field mapping config\n- Extensible via `xophz_hookshot_register_bridges` action\n- Self-documenting — each bridge registers name, description, icon, and expected fields\n\n### 6. Outgoing Authentication (`class-hookshot-auth.php`)\n\n| Type | Header Format |\n|---|---|\n| Bearer Token | `Authorization: Bearer {token}` |\n| Basic Auth | `Authorization: Basic {base64}` |\n| API Key | Custom header with configurable name |\n\n### 7. Incoming Security\n\n- IP Whitelisting — comma-separated allowed IPs per webhook\n- Rate Limiting — transient-based counter per minute per webhook\n- Verification Challenge — `POST /hookshot/verify/{secret}` for Stripe-style endpoint confirmation\n\n## REST API\n\n### Dashboard API (`hookshot/v1/`)\n\n| Endpoint | Method | Purpose |\n|---|---|---|\n| `/webhooks` | GET/POST | List all + create |\n| `/webhooks/{id}` | GET/PUT/DELETE | CRUD |\n| `/webhooks/{id}/test` | POST | Send test ping |\n| `/webhooks/{id}/logs` | GET | Paginated log history |\n| `/webhooks/{id}/health` | GET | Health stats |\n| `/dead-letters` | GET | All dead letter entries |\n| `/dead-letters/{id}/retry` | POST | Manual retry |\n| `/stats` | GET | Dashboard aggregates |\n| `/bridges` | GET | Available bridge definitions |\n| `/presets` | GET | Transform presets |\n| `/auth-types` | GET | Auth type options |\n\n### Incoming Webhook API (`xophz/v1/`)\n\n| Endpoint | Method | Purpose |\n|---|---|---|\n| `/hookshot/incoming/{secret}` | POST | Receive external webhook |\n| `/hookshot/verify/{secret}` | POST | Verification challenge/response |\n\n## Frontend (Vue 3)\n\n### Routes\n\n| Route | View | Description |\n|---|---|---|\n| `/hookshot` | Dashboard | Stats, health overview, recent activity |\n| `/hookshot/webhooks` | List | All webhooks with type filters, health indicators |\n| `/hookshot/webhooks/new` | Wizard | 5-step guided creation (type → target → auth → bridges → review) |\n| `/hookshot/webhooks/:id` | Detail | Tabbed view: Config, Logs, Transform, Bridges, Health |\n| `/hookshot/dead-letters` | Dead Letters | Failed dispatches with retry |\n\n### Key Files\n\n| File | Purpose |\n|---|---|\n| `hookshot.routes.ts` | Route definitions with named constants |\n| `hookshot.api.ts` | Typed REST client + all TypeScript interfaces |\n| `hookshot.store.ts` | Pinia store wrapping all API calls |\n| `hookshot.controller.ts` | Sub-app setup (compass store, navigation) |\n\n## PHP Class Map\n\n| Class | File | Purpose |\n|---|---|---|\n| `Xophz_Compass_Hookshot` | `class-xophz-compass-hookshot.php` | Core plugin, dependency loader |\n| `Xophz_Compass_Hookshot_CPT` | `class-xophz-compass-hookshot-cpt.php` | CPT + taxonomy registration |\n| `Xophz_Compass_Hookshot_REST` | `class-xophz-compass-hookshot-rest.php` | Incoming webhook handler |\n| `Xophz_Compass_Hookshot_Sender` | `class-xophz-compass-hookshot-sender.php` | Outgoing dispatch with retry/health |\n| `Hookshot_Signature` | `class-hookshot-signature.php` | HMAC signing + verification |\n| `Hookshot_Auth` | `class-hookshot-auth.php` | Outgoing auth headers |\n| `Hookshot_Transform` | `class-hookshot-transform.php` | Payload reshape engine |\n| `Hookshot_Health` | `class-hookshot-health.php` | Health monitor |\n| `Hookshot_Retry` | `class-hookshot-retry.php` | Action Scheduler retry queue |\n| `Hookshot_Bridges` | `class-hookshot-bridges.php` | Cross-plugin bridge router |\n| `Hookshot_REST_Dashboard` | `class-hookshot-rest-dashboard.php` | Vue dashboard REST API |\n",Ce=`# Lemon Aid System

## Overview
**Lemon Aid** (also referred to technically as the \`xophz-lemonade-stand\` or Alphabet Soup) is an RSS feed aggregator and user curation spark natively integrated into YouMeOS. It serves a dual purpose:
1. Acting as a personal feed reader for individual users to aggregate their preferred news sources.
2. Crowdsourcing content curation for the broader **Noosphere** collective feed.

## The Sugar vs Lemon Mechanic
Inside the Lemon Aid Spark, every incoming feed item is actionable via two gamified inputs:
- **Sugar 🧊 (Upvote)**: Positive reinforcement signaling high value, interesting, or relevant content.
- **Lemon 🍋 (Downvote)**: Negative feedback indicating low quality, clickbait, or irrelevant noise ("sour" content).

### Noosphere Promotion
As users cast "Sugar" on stories in their personal reading queues, a background algorithm calculates the **Sweetness Ratio**. When content reaches specific Sweetness thresholds, the article is automatically promoted directly into the **Noosphere**—the global OS network overview—as an "Editor's Pick" or "Trending" item. Conversely, articles stacked with Lemons are filtered out from global visibility and deprioritized even in personal queues.

## Architecture
### Backend (Data Fetching & Storage)
Controlled by the \`xophz-compass-alphabet-soup\` WordPress plugin.
- Background cron jobs fetch the latest RSS XML updates.
- Emits sanitized, normalized Feed post types via the REST API.
- Logs Sugar and Lemon interactions to aggregate global post weights.

### Frontend (Vue Spark)
The UI inside YouMeOS is a native Vue application plotting the \`lemon-aid\` framework.
- **View:** \`apps/youmeos/app/sparks/lemon-aid/\`
- **Design System:** Borrows standard \`<x-list>\` and \`<x-card>\` glassmorphic primitives to present stories. Follows the "Digital Picnic" (\`picnic\`) design taxonomy.
`,Te=`# Magic Cloak System

The **Magic Cloak System** is a modular, event-driven contextual messaging and guidance service for COMPASS. It provides a non-intrusive way to deliver hints, tips, and system updates to users through premium "glass toasts."

## Philosophy

Inspired by the "Office Assistant" concept, Magic Cloak aims to be a helpful companion that lives within the COMPASS ecosystem. It is designed to be:

- **Contextual**: Messages appear based on the user's current location or action.
- **Conditional**: The entire system is bound to the activation status of the **Magic Cloak** plugin.
- **Premium**: High-end visual design that emphasizes COMPASS's modern, game-like aesthetic.

## Architecture

### 1. The Source (Magic Cloak Plugin)

The \`xophz-compass-magic-cloak\` plugin acts as the bridge between the backend/configuration and the frontend.

- **Completed Phase**: Hardcoded message registry in the frontend controller/mechanic.
- **Current Phase**: Dynamic fetching of messages from WordPress via the custom post type \`compass_cloak_hint\`.
- **API Endpoint**: \`/wp-json/wp/v2/compass_cloak_hint\` (or custom endpoint configured in \`api.ts\`).

**Registry Schema:**

\`\`\`typescript
interface MagicHint {
  id: string | number;
  trigger: string; // e.g., 'route:enter:compass-explore'
  content: string; // The message body
  icon?: string; // Optional: Plugin shorthand, ID, Name, Path, or FA class
  priority?: number; // Handling overlapping messages
  title?: string; // Optional hint header
  timeout?: number; // Display duration (default 8s)
}
\`\`\`

### Smart Icon Resolution

The Magic Cloak system features an intelligent icon resolution engine. When a hint is triggered, the \`icon\` field is processed with the following priority logic:

1. **Direct Path/URL**: If the string contains \`/\` or \`.\`, it is rendered as an \`<img>\`.
2. **Plugin Shorthand/ID**: It attempts to match the string against \`TextDomain\` (e.g., \`"bomb-bag"\`), full TextDomain (\`"xophz-compass-bomb-bag"\`), or Plugin Name (\`"Bomb Bag"\`). If matched, it uses the official plugin SVG.
3. **FontAwesome Fallback**: If no plugin match is found, it is treated as a FontAwesome icon class (e.g., \`"fad fa-atom"\`).
4. **System Default**: If no icon is provided, it defaults to the **Magic Cloak** plugin icon.

### 2. The Mechanic (\`useMagicCloak\`)

Located in \`src/mechanics/useMagicCloak.ts\`, this hook is responsible for:

- Checking if the Magic Cloak plugin is active via \`CompassStore\`.
- Reacting to global events (routing, component interactions).
- Dispatching messages to the UI layer.

### 3. The UI Layer (\`x-snackbar\`)

A specialized primitive designed for the Magic Cloak's specific aesthetic requirements and reusable across other plugins:

- **Glassmorphism**: 20px blur, semi-transparent backgrounds (\`rgba(13, 17, 23, 0.4)\`).
- **Micro-animations**: Smooth entry/exit inherited from \`v-snackbar\`.
- **Global Availability**: Registered as an atomic component for use in any route.
- **Layout**: Positioned in the bottom-right (\`bottom end\`) corner to minimize obstruction of central content.

## Integration Plan

1. **Pilot Phase**: Replace the static \`v-alert\` on the Explore page with a dynamic toast triggered by the \`useMagicCloak\` mechanic.
2. **Expansion**: Add "Events" to other core plugins (e.g., titan's mitt, enchiridion) that the Magic Cloak can listen for.
3. **Configuration**: Develop a UI within the Magic Cloak plugin to manage or override these messages.
`,Me=`# Magic Mirror: Competitive Benchmarking & Performance Analytics

> *"Magic Mirror on the wall, who is the fairest one of all?"*

Magic Mirror is an SEO, performance, and accessibility benchmarking tool designed to gamify website optimization. Instead of viewing analytics in a vacuum, Magic Mirror lets users directly compare their site's "reflection" against their fiercest competitors.

---

## Scope

**Magic Mirror focuses exclusively on competitive audits, benchmarking, and actionable insights.**

Theme switching, environments, and staging escapes are handled by **Moving Castle**.

---

## Core Features

### Phase 1: The "Fairest of Them All" Dashboard (MVP)
- [ ] UI to input 1-3 competitor URLs.
- [ ] Integration with PageSpeed Insights API (or similar) for Lighthouse scoring.
- [ ] Side-by-side comparison matrix for Core Web Vitals (LCP, FID, CLS).
- [ ] Overall "Fairest" designation awarded to the winning site.
- [ ] Caching of results to prevent API rate limiting.

### Phase 2: Actionable Insights ("The Mirror's Truth")
- [ ] Highlight specific metrics where competitors are winning.
- [ ] Generate actionable, clear-English recommendations ("Site X is faster because their images are optimized using WebP").
- [ ] Visual UI shifts based on performance (e.g., the glassmorphic mirror UI "cracks" or gets cloudy when losing to a rival, and shines brilliantly when winning).
- [ ] Historical tracking (are we gaining or losing ground over time?).

### Phase 3: Comprehensive Auditing
- [ ] SEO comparison (Meta tags, heading structure, keyword presence).
- [ ] Accessibility comparison (ARIA, contrast ratios).
- [ ] Security headers check.
- [ ] Automated weekly checks and notifications if a competitor overtakes the user.

---

## UI Concept

**The Reflection Board**: A sleek, dark-mode, glassmorphic layout. The user's site is in the center, flanked by competitors. The UI should feel like gazing into a crystal or mirror, utilizing neon cyan (#62c9ff) for positive metrics and warning colors (like red/orange) for metrics where the user is falling behind.

---

## Technical Notes

### Key Integrations
- Google PageSpeed Insights REST API.
- W3C Validator API.

### Database Tables (Proposed)
- \`wp_compass_magic_mirror_rivals\` - Stored competitor URLs and metadata.
- \`wp_compass_magic_mirror_audits\` - Historical audit data for charting over time.

---

## Status

🔴 **Not Started** - Concept defined, awaiting implementation phase.
`,ze="# Mirror Shield System\n\nThe **Mirror Shield** is a security plugin for COMPASS that provides honeypot traps, attack logging, and IP blocking capabilities.\n\n## Philosophy\n\nMirror Shield acts as a defensive layer that catches malicious actors before they can cause harm. By deploying invisible honeypot traps, it identifies and blocks attackers while legitimate users remain unaffected.\n\n## Architecture\n\n### 1. Honeypot Traps\n\nThree types of traps are supported:\n\n| Type | Description |\n|------|-------------|\n| `decoy_endpoint` | Fake URLs that attackers probe (e.g., `/wp-admin/backup.php`) |\n| `honeypot_field` | Hidden form fields bots fill out but humans don't see |\n| `fake_login` | Decoy login pages that capture credentials |\n\n### 2. Database Schema\n\n**`wp_mirror_shield_logs`** - Attack log records\n- `ip_address`, `trap_type`, `user_agent`, `request_uri`, `blocked`, `created_at`\n\n**`wp_mirror_shield_traps`** - Trap configuration\n- `trap_type`, `name`, `target_url`, `config`, `is_active`, `hit_count`\n\n**`wp_mirror_shield_blocked`** - Blocked IPs\n- `ip_address`, `reason`, `blocked_until`, `is_permanent`\n\n### 3. REST API\n\nBase URL: `/wp-json/xophz-compass/v1/mirror-shield/`\n\n| Endpoint | Method | Description |\n|----------|--------|-------------|\n| `/logs` | GET | Paginated attack logs |\n| `/stats` | GET | Dashboard statistics |\n| `/traps` | GET/POST | List or create traps |\n| `/traps/:id` | PUT/DELETE | Update or delete trap |\n| `/block` | GET/POST | List or block IPs |\n| `/block/:ip` | DELETE | Unblock IP |\n\n### 4. Frontend Views\n\n| Route | View | Description |\n|-------|------|-------------|\n| `/mirror-shield` | Dashboard | ECharts attack timeline, stats cards, top attackers |\n| `/mirror-shield/traps` | Traps | CRUD management for honeypot traps |\n| `/mirror-shield/logs` | Logs | Server-side paginated attack log browser |\n\n## Auto-Blocking Behavior\n\nIPs are automatically blocked for 24 hours after **3+ triggering events** within 1 hour. Manual blocking from the UI supports permanent or time-limited blocks.\n\n## Default Traps\n\nThe plugin seeds these default traps on activation:\n\n1. **Fake Backup File** - `/wp-admin/backup.php`\n2. **Fake Config File** - `/wp-config.bak`\n3. **Fake Admin Panel** - `/administrator/`\n4. **Login Form Honeypot** - Hidden `website_url` field\n",_e=`# Moving Castle: Database Migration Engine

> *"Open your door to many ventures, markets, and brands without moving."*

Moving Castle provides a robust, file-based dump-and-import architecture for migrating databases across WordPress environments (e.g., between Production and Staging). 

---

## Scope

**Moving Castle handles database serialization, SQL dumping, domain-specific string replacement, secure transfer, and bulk importing.**

Competitor benchmarking and performance analysis is handled by **Magic Mirror**.
Theme/page building (content creation) is handled by **Pegasus Boots**.

---

## Core Features

### Phase 1: Robust SQL Dump Architecture
- Server-side generation of complete SQL dumps for all tables matching the subsite prefix.
- Built-in on-the-fly string replacement (using \`recursive_unserialize_replace\`) to safely map source URLs and file paths to the destination environment.
- Compression into a ZIP archive (\`.zip\`) for secure, fast cross-server transfer.
- Implements \`fresh=1\` cache invalidation to ensure subsequent migrations reflect real-time source updates.

### Phase 2: Secure Transfer & Validation
- Transient token-based handshakes (1-hour TTL) between source and target environments to initiate migrations.
- Target-site endpoint parses connection URLs, handshakes via \`wp_remote_get\`, and downloads the prepared ZIP archive.
- Verification of the SQL file manifest before executing the import.

### Phase 3: Bulk Import & State Restoration
- Replaces legacy REST-based row-by-row synchronization with a fast, reliable bulk batch import handler.
- Automatically stashes and restores the current user's session tokens (\`session_tokens\`) inside \`wp_usermeta\` during the import to prevent 403 Forbidden errors mid-migration.

### Phase 4: Migration Terminal UI
- **SubsitesView**: Hero section with floating icon animation, radial glow backdrop, and connection link dialogs.
- **ImportView**: Guided 3-step wizard UI with step indicators, connection link input, and a "Begin Migration" CTA.
- **SettingsView**: Token TTL sliders, data scope checkboxes (users, options, uploads), and security toggles.
- **HUD & Analytics**: Neon percentage display and time-remaining counter during active migrations. Integration with Google Analytics to track success rates, durations, and payload sizes.

---

## UI Concept

**Overseer Migration Terminal**: A visual interface aligned with COMPASS glassmorphism.
- Features neon progress rings, terminal cursor-blink animations, and clear visual separation of source vs. target castle details.
- "Complete" state transitions gracefully with a success indicator, hiding generic disconnect warnings once the migration has securely finished.

---

## Technical Notes

### Key Traits & Classes
- \`Trait_Moving_Castle_API_Database_Dump\` - Handles the heavy lifting of the server-side SQL dump generation and ZIP compression.
- \`moving-castle.controller.ts\` - Drives the Vue application, invoking the \`pull_database\` task to manage the multi-step import.

### Key WordPress APIs
- \`wp_remote_get\` for site-to-site handshakes.
- \`recursive_unserialize_replace\` for domain mapping inside serialized PHP objects.

---

## Status

🟢 **Stable** - Bulk dump-and-import architecture is live, resolving legacy timeout and authorization issues.

---

## Related Plugins

| Plugin | Responsibility |
|--------|---------------|
| Moving Castle | Database migration and cross-environment data synchronization. |
| Magic Mirror | Competitor benchmarking, SEO/Performance comparison. |
| Pegasus Boots | Theme & page visual builder. |
`,Oe=`# Performance Widget System

## Overview

The Performance Matrix (\`compass-perform\`) is a user-driven HUD where users can pin customized widgets from various active COMPASS plugins. Active plugins register their available widgets via PHP filter hooks as a "blueprint library". The dashboard only renders the widgets that the user has explicitly pinned.

## Architecture

\`\`\`
COMPASS Plugin (PHP)                    COMPASS Core (PHP)
add_filter('compass_perform_widgets')   GET /xophz/v1/perform/widgets (Blueprints)
            │                           GET/POST /xophz/v1/perform/pinned (User Meta)
            └──────────── aggregates ───────────────┘
                                                   │
                                          compass-perform (Vue)
                                          fetchPinnedWidgets()
                                          fetchWidgetDescriptors()
                                                   │
                                          Filter By Pinned State
                                                   │
                                          resolveWidget(component)
                                                   │
                                          <component :is="...">
                                          (Component wraps self in <o-widget>)
\`\`\`

## User Pinning

Users pin widgets using the pin icon embedded in the \`<o-widget>\` toolbar. Clicking it toggles the widget's unique \`key\` in the \`_xophz_compass_pinned_widgets\` array stored in their \`wp_usermeta\`.

## PHP: Registering a Widget

Each COMPASS plugin uses the \`compass_perform_widgets\` filter:

\`\`\`php
add_filter('compass_perform_widgets', function ($widgets) {
    $widgets[] = [
        'key'           => 'bomb-bag-velocity',
        'plugin'        => 'xophz-compass-bomb-bag',
        'title'         => 'Publishing Velocity',
        'icon'          => 'fad fa-bomb',
        'color'         => '#ff6b35',
        'component'     => 'perform-widget-bomb-bag',
        'data_endpoint' => '/wp-json/xophz/v1/bomb-bag/performance',
        'size'          => 'md',
        'order'         => 10,
    ];
    return $widgets;
});
\`\`\`

### Widget Descriptor Fields

| Field | Type | Description |
|---|---|---|
| \`key\` | string | Unique widget identifier |
| \`plugin\` | string | TextDomain of the owning plugin |
| \`title\` | string | Display title |
| \`icon\` | string | Font Awesome icon class |
| \`color\` | string | Hex accent color |
| \`component\` | string | Vue component key (matched client-side) |
| \`data_endpoint\` | string | REST URL for widget-specific data |
| \`size\` | sm/md/lg/full | Grid column span (1/2/3/4) |
| \`order\` | int | Sort priority (lower = first) |

## Vue: Registering a Widget Component

Each plugin's Vue route registers its component:

\`\`\`ts
import { registerPerformWidget } from '@/composables/usePerformWidgets'
import MyWidget from './components/perform-widget.vue'

registerPerformWidget('perform-widget-my-plugin', MyWidget)
\`\`\`

The component itself should be wrapped in the \`<o-widget>\` organism so it can be deployed anywhere and handles its own pinned state:

\`\`\`vue
<template>
  <o-widget
    widget-key="bomb-bag-velocity"
    :title="config.title"
    :icon="config.icon"
    :color="config.color"
    :loading="loading"
  >
    <div>Widget Content Here</div>
  </o-widget>
</template>
\`\`\`

## Files

| File | Purpose |
|---|---|
| \`includes/class-xophz-compass-performance-api.php\` | REST endpoint for blueprint aggregation and pinned user meta |
| \`src/composables/usePerformWidgets.ts\` | Client-side registry, pinned state manager, + fetch |
| \`src/components/organisms/o-widget/\` | Glassmorphic organism with pinning controls |
| \`src/routes/compass/views/compass-perform/\` | Host dashboard that renders pinned widget components |
`,Re='# Questbook CRM System\n\nQuestbook is the central CRM and customer journey tracker for the COMPASS platform. It manages contacts, lead pipelines, quest-based engagement tracking, and form submission linking — all built on WordPress\'s native CPT + Post Meta architecture for zero-migration scalability.\n\n## Design Philosophy: Zero-Migration Schema\n\nQuestbook is built to **never require a database migration**. Following the same EAV (Entity-Attribute-Value) pattern that powers WordPress core (`wp_posts` + `wp_postmeta`), all CRM data is stored as post meta on Custom Post Types. New fields can be added at any time without schema changes.\n\n### Why This Works\n\n- **`wp_posts`** stores the entity identity (contact name as `post_title`, timestamps, status)\n- **`wp_postmeta`** stores all CRM-specific data as key-value pairs\n- **`wp_terms`** provides hierarchical categorization via taxonomies\n- **Forminator** stores all raw form submission data in its own tables\n- **Questbook** stores only identity pointers and references, never raw form payloads\n\n## Data Model\n\n### Custom Post Types\n\n| CPT Slug | Purpose | Supports |\n|----------|---------|----------|\n| `questbook_contact` | CRM contact entity | `title` |\n| `questbook_quest` | Journey milestone definitions | `title`, `editor` |\n| `questbook_log` | Historical interaction log entries | `title` |\n\n### Taxonomies\n\n| Taxonomy | Attached To | Purpose |\n|----------|-------------|---------|\n| `qb_contact_type` | `questbook_contact` | Hierarchical categorization (Lead, Customer, Partner, etc.) |\n\n### Contact Meta Schema\n\nThese are the standardized meta keys used on `questbook_contact` posts:\n\n#### Identity & Linking\n\n| Meta Key | Type | Purpose |\n|----------|------|---------|\n| `_qb_user_id` | `int` | Links contact to a `wp_users` ID (if registered) |\n| `_qb_raw_email` | `string` | Primary email for unlinked leads |\n\n#### Core Fields\n\n| Meta Key | Type | Purpose |\n|----------|------|---------|\n| `_qb_phone` | `string` | Contact phone number |\n| `_qb_lead_status` | `string` | Pipeline stage (New Lead, Contacted, Qualified, Won, Lost) |\n| `_qb_source` | `string` | Acquisition source (e.g., "Forminator Form #412", "Hustle Opt-in #7") |\n\n#### Forminator Integration\n\n| Meta Key | Type | Multi-Value | Purpose |\n|----------|------|-------------|---------|\n| `_qb_forminator_entry` | `int` | Yes | Verified Forminator entry IDs linked to this contact |\n| `_qb_unverified_entry` | `int` | Yes | Pending entry IDs awaiting Claim & Confirm |\n\n#### Assignment & Workflow\n\n| Meta Key | Type | Purpose |\n|----------|------|---------|\n| `_qb_assigned_to` | `int` | WP User ID of the assigned agent/team member |\n\n### Identity Resolution Strategy\n\n```\nForm Submitted\n     │\n     ▼\n Is user logged in?\n   ├── YES → Find contact by _qb_user_id\n   │         ├── Found → Link entry as _qb_forminator_entry ✓\n   │         └── Not Found → Create contact, link to wp_user, attach entry ✓\n   │\n   └── NO → Extract email from form\n             ├── Email matches existing contact?\n             │   ├── YES → Store as _qb_unverified_entry ⚠️\n             │   └── NO → Create new "Raw Lead" contact ✓\n             │\n             └── On Login → Magic Cloak triggers Claim & Confirm dialog\n                            ├── Approve → Move to _qb_forminator_entry ✓\n                            └── Reject → Delete _qb_unverified_entry ✗\n```\n\n## PHP Plugin (`wp-content/plugins/xophz-compass-quests/`)\n\n| File | Purpose |\n|------|---------|\n| `xophz-compass-quests.php` | Bootstrap — requires COMPASS core |\n| `includes/class-xophz-compass-quests.php` | Core class — loads dependencies, registers hooks |\n| `includes/class-xophz-compass-quests-cpt.php` | CPT + taxonomy registration |\n| `includes/class-xophz-compass-quests-rest.php` | Primary REST API (full CRUD + entries + claim) |\n| `includes/class-xophz-compass-quests-wpmudev.php` | Forminator/Hustle submission capture hooks |\n| `includes/class-xophz-compass-quests-loader.php` | WordPress hook orchestration |\n| `admin/class-xophz-compass-quests-admin.php` | WP Admin menu + meta box registration |\n\n## REST API Endpoints\n\n### Contacts CRUD\n\n| Method | Route | Auth | Description |\n|--------|-------|------|-------------|\n| `GET` | `/questbook/v1/contacts` | `manage_options` | List all contacts (with WP user resolution) |\n| `POST` | `/questbook/v1/contacts` | `manage_options` | Create a new contact |\n| `GET` | `/questbook/v1/contacts/{id}` | `manage_options` | Get single contact detail |\n| `PUT` | `/questbook/v1/contacts/{id}` | `manage_options` | Update contact fields |\n| `DELETE` | `/questbook/v1/contacts/{id}` | `manage_options` | Delete a contact |\n\n### Relationships\n\n| Method | Route | Auth | Description |\n|--------|-------|------|-------------|\n| `GET` | `/questbook/v1/contacts/{id}/assets` | `manage_options` | All CPT posts authored by or linked to this contact |\n| `GET` | `/questbook/v1/contacts/{id}/entries` | `manage_options` | Verified Forminator entries linked to this contact |\n\n### Unverified / Claim Flow\n\n| Method | Route | Auth | Description |\n|--------|-------|------|-------------|\n| `GET` | `/questbook/v1/contacts/{id}/unverified` | `manage_options` | Pending unverified Forminator entries |\n| `POST` | `/questbook/v1/contacts/{id}/claim` | `manage_options` | Approve or reject an unverified entry |\n\n#### Claim Request Body\n\n```json\n{\n  "entry_id": 1042,\n  "action": "approve"   // or "reject"\n}\n```\n\n## Forminator Integration\n\nThe `Xophz_Compass_Quests_WPMUDEV` class hooks into `forminator_custom_form_submit_before_set_fields` to intercept every form submission. It reads the per-form field mappings from the `questbook_form_mappings` option (managed by the Magic Formula Questbook Sync UI) to dynamically resolve which Forminator fields map to CRM core fields.\n\n### Key Behaviors\n\n1. **No mapping exists** → Falls back to convention (`email-1`, `name-1`, `phone-1`)\n2. **Mapping exists but disabled** → Submission is completely ignored by the CRM\n3. **Mapping exists and enabled** → Uses the configured field keys for extraction\n4. **Unverified Protocol enabled** → Logged-out submissions matching existing contacts are quarantined\n\n## Feature Set (Planned)\n\n1. **Pipeline** — Kanban board for managing lead stages (New, Contacted, Qualified, Won, Lost)\n2. **Directory** — Filterable data table for bulk contact management\n3. **Journey Timeline** — Historical log of interactions and completed quests\n4. **Claim & Confirm** — Magic Cloak notification → `x-dialog` for data reconciliation\n\n## XP Integration\n\nQuestbook integrates directly with the `xophz-compass-xp` system. Completing specific "Quests" in a customer\'s journey can automatically grant `XP`, `AP`, or `GP` to the linked WordPress user, unified through the platform\'s Gamification engine.\n\n## Legacy Notes\n\nThe `class-xophz-compass-quests-rest.php` is the canonical REST implementation and should be used for all new development.\n',Ie=`# Silver Arrow System Architecture

**Category:** Trajectory · **Status:** Architectural Blueprint

## Overview

**Silver Arrow** is the ultimate Continuous Historical A/B Testing engine for the COMPASS ecosystem. Instead of forcing marketers into the traditional, clunky paradigm of "Creating Variant Pages", Silver Arrow introduces **Continuous Historical Testing**. 

It allows users to test their current landing page against past versions of itself seamlessly. By weaponizing WordPress's native saving mechanism, Silver Arrow automatically captures complete snapshots of a page's DNA over time.

## 1. The Data Layer: Pure Core Revisions & Targeted Pages

**The Targeted State:** 
Silver Arrow intentionally avoids global bloat. Pages are ignored by default. When a marketer wants to optimize a page, they explicitly **"Target"** it in the Silver Arrow dashboard. 

When a page becomes "Targeted," Silver Arrow assumes control of its traffic routing and immediately begins **Passive Tracking**. It tracks the conversion rate of whatever revision is currently live, creating a master historical baseline for the page even outside of formal tests.

**The Pool:** 
Silver Arrow reads the page's natural history using \`wp_get_post_revisions()\`. The user selects two (or more) revisions from the timeline to pit against each other. 

**The Traffic Allocation Engine (Multiple Tests):**
Silver Arrow treats visitors as a Global Traffic Pool (100%). A user can spin up multiple **Isolated Test Sessions** simultaneously on a targeted page.
- Test 1 might pit Revision A vs B vs C (receiving 20% of global traffic).
- Test 2 might pit Revision A vs D (receiving 20% of global traffic).
- **Split URL Tests:** A test session can also route traffic to completely different URLs (e.g., \`domain.com/checkout-v2\`). The engine seamlessly handles the external redirect while maintaining the Double-Tag cookie tracking.
- The remaining 60% of "Live" traffic routes naturally to the latest published revision.

**Pruning the Clones:**
Because revisions can build up over time, Targeted pages include a "Garbage Collection" UI. When a revision is clearly underperforming across its tests, the user can click "Discard." Silver Arrow not only removes it from the test pool, but safely deletes that specific revision (the "clone") from the WordPress database to maintain a lean, bloat-free system.

**The Magic Finish:**
If an older revision wins the split test, you simply click "Crown Winner." Silver Arrow uses WordPress's native restore function to make that revision the live page, and turns the test off.

## 2. The Traffic Router: PHP 302 Cache Splitting

**The Problem with WP A/B Testing:**
Caching is the enemy of A/B testing.
- **JS DOM Swapping** causes a terrible visual flicker (the "flash of unstyled content") that destroys landing page trust.
- **Silent PHP Swapping** (changing the \`$post\` under the same URL) fails entirely because caching layers like WP Rocket and Cloudflare will serve the first cached variant to 100% of visitors.

**The Silver Arrow Solution:**
Silver Arrow splits traffic at the server level *before* the browser begins rendering, using **Instant PHP Header Redirects**.

1. A visitor clicks a link to \`domain.com/landing-page\`.
2. The Silver Arrow PHP router intercepts the request instantly, rolls the dice, and assigns a revision ID.
3. It issues a blazing-fast \`302 Found\` HTTP redirect to \`domain.com/landing-page/?sa_rev=123\`.
4. **The Cache Bucket Magic:** Because we use a query parameter, Cloudflare and WP Rocket generate an independent, hyper-fast cache file *specifically for that revision*. The next 10,000 visitors assigned to that revision get served instantly from the CDN. We achieve perfect traffic splitting with zero visual flicker and maximum caching performance.

## 3. Decoupled Conversion Tracking (The Forminator Handshake)

**The Problem:** 
Most A/B plugins inject heavy JavaScript tracking scripts that are frequently blocked by Brave Browser shields or ad-blockers, skewing conversion data.

**The Silver Arrow Solution:**
Silver Arrow operates as a silent observer on the backend. We do not touch the Forminator funnel, and we do not rely on fragile frontend JS.

1. When a user submits a Forminator form, it fires an AJAX \`POST\` request.
2. **POST requests are never cached.** They punch straight through the CDN directly to the WordPress server.
3. Silver Arrow hooks into Forminator's backend processing (\`forminator_custom_form_submit_before_set_fields\`).
4. At the exact moment the lead is securely saved in the database, Silver Arrow reads the user's cookie.
5. **The Double-Tag Cookie:** Because a single revision (Revision A) could be running in multiple simultaneous tests, the cookie stores both \`[Test_ID]\` and \`[Revision_ID]\`. 
6. Silver Arrow logs the conversion against BOTH variables.

This decoupled handshake allows Forminator to process leads normally, while Silver Arrow precisely credits the conversion to the mathematically isolated Test Session, preventing overlapping data pollution.

## 4. Visualization, Settings & The Magic Formula

When a page is Targeted, Silver Arrow provides two critical visualization layers:

- **The Global View (The Revisions):** Shows the lifetime historical performance of every revision. Users can instantly pinpoint their historical "Golden Child" revision and click "Restore" if recent updates have cratered their conversion rate.
- **The Focused View (The Tests):** Analyases performance within an Isolated Test Session (e.g., "In Test 1, Revision A beat C. In Test 2, Revision D is destroying A").
- **Traffic Allocation:** Sliders that allow you to dictate how the global traffic pool is divided among isolated tests and the live default revision.
- **Multi-Armed Bandit (Auto-Pilot Optimization):** Instead of manually managing traffic sliders, users can enable the Bandit algorithm. A background cron job continuously evaluates real-time performance and dynamically shifts more traffic to the winning revision (e.g., automatically moving from 50/50 to 80/20). This maximizes conversions *while* the test is still running.
- **Statistical Significance:** Integration with the ecosystem's **Magic Formula** to provide real-time mathematical confidence scores.

## 5. Enterprise Fail-Safes

- **SEO Canonical Injection:** When serving a variant via \`?sa_rev=\`, Silver Arrow injects a \`<link rel="canonical">\` tag pointing to the clean URL to prevent duplicate content penalties.
- **Bot Filtering:** The PHP router detects Googlebot, Bingbot, Facebook scraper, and generic crawlers via User-Agent regex. Bots are served the live page and are NOT tracked as impressions.
- **Cache Bypass:** Targeted pages declare \`DONOTCACHEPAGE\` so the PHP router always executes. The variants they redirect to (\`?sa_rev=\`) are independently cached by the CDN.

## 6. DNA Meta Snapshotting (The Silver Bullet)

When a Targeted page is saved, Silver Arrow hooks into \`wp_put_post_revision\` and captures ALL post meta into a single compressed JSON string (\`_sa_meta_archive_{rev_id}\`). When serving that revision to a visitor, Silver Arrow intercepts all \`get_post_metadata\` calls and feeds the page builder (Elementor/Gutenberg/ACF) the exact meta it had at the time of that revision. This allows testing a Gutenberg layout vs an Elementor redesign without any rendering issues.

## 7. Implementation Status

| Component | File | Status |
|---|---|---|
| Plugin Bootstrap | \`xophz-compass-silver-arrow.php\` | ✅ Complete |
| Traffic Router | \`public/class-xophz-compass-silver-arrow-public.php\` | ✅ Complete |
| REST API | \`includes/class-silver-arrow-rest.php\` | ✅ Complete |
| Vue API Layer | \`src/routes/silver-arrow/silver-arrow.api.ts\` | ✅ Complete |
| Dashboard View | \`src/routes/silver-arrow/views/silver-arrow-dashboard.vue\` | ✅ Complete |
| Detail View | \`src/routes/silver-arrow/views/silver-arrow-detail.vue\` | ✅ Complete |
| Routes | \`src/routes/silver-arrow/silver-arrow.routes.ts\` | ✅ Complete |
| Multi-Armed Bandit Cron | — | ⏳ Pending |
| ECharts Timeline Graphs | — | ⏳ Pending |

---
**Summary:** Silver Arrow acts as an enterprise-grade Conversion Version Control System. By passively tracking global revision performance, allowing Split URL redirects, and utilizing Multi-Armed Bandit traffic allocation, marketers can execute scientifically pure, auto-optimizing tests while maintaining a complete historical timeline of their page's true conversion rate.
`,De=`# Treasure Trove & Treasure Map System

## Overview
The transition of YouMeOS toward a model of **Individual Sovereignty and Collective Unity** requires a concrete mechanism for users to own their data and receive value for their participation. The **Treasure Trove** and **Treasure Map** plugins act as the core architectural pillars for this vision.

- **Treasure Trove (The Sovereign Vault)**: Reimagined from a KPI dashboard into the user's centralized, encrypted personal data locker. It stores preferences, behavioral history, and sovereign identity artifacts.
- **Treasure Map (The Path to Rewards)**: Reimagined from a simple site walkthrough into a gamified discovery and reward engine. It ties the user's sovereign data participation and platform contributions to the YouMeOS XP system.

---

## 1. Treasure Trove: The Sovereign Vault Architecture

### Concept
Treasure Trove acts as the "Swiss Bank Account" for a user's digital soul. Instead of the platform owning the user's analytics and behavioral data, the data is encrypted and held in trust. The user holds the keys and decides *if* and *how* that data interacts with the collective Noosphere.

### Core Mechanisms
1. **Local Encryption (Simulated/Actual)**: 
   - Sensitive user activity, preferences, and form data are encrypted client-side or before database insertion. 
   - A master decryption key (derived from the user's session or a sovereign identity token) is required to parse the true payload.
2. **Data Categories**:
   - **Identity Data**: Personal details, profile configurations.
   - **Chronicle Data**: History of actions, posts (Alphabet Soup), and interactions (Bug Catching Net).
   - **Contribution Data**: How much processing power/insight the user has donated to the Noosphere.
3. **The Data Ledger (UI)**:
   - A glassmorphic dashboard within the Spark that visualizes the "weight" of the user's data vault.
   - Granular privacy toggles: Users can toggle specific data clusters from "Private (Encrypted)" to "Shared (Noosphere)".

### Technical Flow
- **Storage**: Data is stored in customized WordPress tables (\`wp_compass_trove_ledgers\`), but the \`payload\` column contains AES-256 encrypted JSON.
- **Access**: When the user opens the Treasure Trove Spark, the Vue application requests their ledger. The backend serves the encrypted blob, and the Vue PWA (acting as a secure node) decrypts it client-side.

---

## 2. Treasure Map: The Discovery & Reward Engine

### Concept
If Treasure Trove is the vault, Treasure Map is how the user earns what goes into it. It visualizes the user's journey through YouMeOS and rewards them for embracing the "Ancient-Futuristic" protocols (like setting up security, contributing to the Noosphere, or configuring their Bomb Bag).

### Core Mechanisms
1. **Waypoints (Milestones)**:
   - Specific triggers across the COMPASS suite act as waypoints (e.g., "First Login", "Connected to Noosphere", "Encrypted First Payload").
2. **The Reward Matrix**:
   - Tied directly to the \`xophz-compass-xp\` system. 
   - Unlocking a waypoint on the Treasure Map grants XP, digital assets (like special celestial skyboxes), or new abilities within the 3D engine.
3. **The Celestial Map (UI)**:
   - An interactive, 3D/2.5D visual representation of the user's progress using the \`4d-youniverse\` engine. Instead of a flat website walkthrough, users navigate a literal "map" of their digital evolution.

### Integration with Treasure Trove
- **Data Dividends**: If a user toggles their Treasure Trove setting to "Share Anonymous Behavioral Data with Noosphere", the Treasure Map periodically generates "Passive XP Rewards". 
- **Proof of Sovereignty**: Completing the setup of the Treasure Trove is the primary quest on the Treasure Map, acting as the onboarding phase.

---

## 3. Implementation Roadmap

### Phase 1: Foundation (Current)
- [x] Redefine plugin metadata and descriptions to reflect the Sovereignty & Gamification vision.
- [ ] Establish \`wp_compass_trove\` database schema for encrypted payloads.
- [ ] Create the \`TreasureTroveView.vue\` and \`TreasureMapView.vue\` Spark entry points.

### Phase 2: The Vault Mechanics
- [ ] Implement client-side/server-side hybrid encryption utilities in \`youmeos.engine.ts\` or a new \`crypto\` sub-module.
- [ ] Build the UI for users to view and manage their data "clusters" (Private vs. Public).

### Phase 3: The Gamified Journey
- [ ] Connect Treasure Map event listeners to COMPASS global actions (e.g., \`do_action('compass_user_milestone_reached')\`).
- [ ] Render the visual Map using the existing WebGL/Three.js primitives in the YouMeOS engine.
- [ ] Issue XP rewards and trigger cinematic animations when a user claims a treasure.
`,Ee=`# Magic Formula System

Magic Formula is the COMPASS proxy layer for [Forminator](https://wpmudev.com/project/forminator-pro/) (WPMU DEV). It provides both a COMPASS admin sub-app and a YouMeOS spark for managing and consuming forms, polls, and quizzes — all connected to the Questbook CRM for full-funnel lead tracking.

## Architecture: The Bridge Pattern

Magic Formula demonstrates the **Bridge Pattern** — where COMPASS (admin) and YouMeOS (public) share the same data layer but expose access-filtered interfaces:

| Layer | COMPASS (Admin) | YouMeOS (Public) |
|-------|-----------------|-------------------|
| **Layout** | \`x-sub-app-layout\` (billboard + side-nav) | \`u-window\` (spark shell) |
| **Navigation** | Full: Dashboard, Builder, Analytics, Config | Filtered: Available forms/polls/quizzes only |
| **API** | \`magic-formula/v1/*\` (all endpoints) | \`magic-formula/v1/forms\` (public published only) |
| **Naming** | Forms, Polls, Quizzes | Magic Formulas, Magic Quizzes, Magic Poll-ulas |

## PHP Plugin (\`wp-content/plugins/xophz-compass-magic-formula/\`)

| File | Purpose |
|------|---------|
| \`xophz-compass-magic-formula.php\` | Bootstrap — requires COMPASS + Forminator |
| \`includes/class-xophz-compass-magic-formula-rest.php\` | REST API proxy (\`magic-formula/v1/*\`) |
| \`includes/class-xophz-compass-magic-formula-wpmudev.php\` | Forminator hook intercepts (stub for future use) |
| \`public/class-xophz-compass-magic-formula-public.php\` | Spark registration + manifest |

## YouMeOS Spark (\`apps/youmeos/app/sparks/magic-formula/\`)

| File | Purpose |
|------|---------|
| \`magic-formula-app.vue\` | Root spark layout with sidebar nav and section routing |
| \`magic-formula-canvas.vue\` | Animated cauldron canvas for the Intro splash |
| \`views/v-formula-dashboard.vue\` | KPI overview + module cards |
| \`views/v-formula-detail.vue\` | Form detail (tabs: overview/submissions/settings) |
| \`views/v-crm-sync.vue\` | **Questbook Sync** — Schema Mapper UI for CRM field linking |
| \`molecules/m-form-card.vue\` | Form listing card component |
| \`molecules/m-ai-generator-dialog.vue\` | "Conjure with AI" dialog for AI-driven form generation |
| \`organisms/o-submissions-feed.vue\` | Submissions data feed organism |

### Navigation Structure

\`\`\`
── overview ─────────────
   Intro               Cauldron splash page
   Dashboard           KPIs, module cards, recent activity

── builder ──────────────
   Forms               List/manage forms → detail view
   Polls               List/manage polls
   Quizzes             List/manage quizzes
   Templates           Pre-built starting points

── analytics ────────────
   Submissions         All submissions across forms (with CRM status)
   Reports             Conversion funnels, trends

── config ───────────────
   Questbook Sync      Map form fields → CRM core fields
   Integrations        Questbook CRM, webhooks, email (Forminator iframe)
   Settings            Global form defaults, captcha (Forminator iframe)
   Add-ons             Payment gateways, conditional logic (Forminator iframe)
\`\`\`

## REST API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| \`GET\` | \`/wp-json/magic-formula/v1/forms\` | \`manage_options\` | All forms, polls, quizzes (normalized) |
| \`GET\` | \`/wp-json/magic-formula/v1/submissions/{id}\` | \`manage_options\` | Entries for a form with CRM status lookup |
| \`POST\` | \`/wp-json/magic-formula/v1/submit/{id}\` | Public | Submit form data through the proxy |
| \`POST\` | \`/wp-json/magic-formula/v1/conjure\` | \`manage_options\` | AI-generate a Forminator form from field descriptors |
| \`GET\` | \`/wp-json/magic-formula/v1/mappings\` | \`manage_options\` | Fetch all Questbook field mappings |
| \`POST\` | \`/wp-json/magic-formula/v1/mappings\` | \`manage_options\` | Save Questbook field mappings |

## CRM Integration (Questbook Sync)

Form submissions are linked to Questbook CRM contacts via the \`forminator_custom_form_submit_before_set_fields\` hook in \`xophz-compass-quests\`. The integration uses a **Link & Extract** pattern:

### Schema Mapper

Administrators configure per-form field mappings via the **Questbook Sync** tab in the Magic Formula spark. Mappings are stored as a single JSON option (\`questbook_form_mappings\`) in \`wp_options\`:

\`\`\`json
{
  "412": {
    "enabled": true,
    "useUnverified": true,
    "fields": {
      "_qb_raw_email": "email-1",
      "first_name": "name-1",
      "_qb_phone": "phone-1"
    }
  }
}
\`\`\`

### Core CRM Fields (Mapped)

| CRM Meta Key | Purpose |
|---------------|---------|
| \`_qb_raw_email\` | Primary identity resolution key |
| \`first_name\` | Contact display name (stored as \`post_title\`) |
| \`_qb_phone\` | Contact phone number |

### Linked Entry IDs (Not Mapped — Stored by Reference)

| CRM Meta Key | Purpose |
|---------------|---------|
| \`_qb_forminator_entry\` | Verified Forminator entry IDs (multi-value via \`add_post_meta\`) |
| \`_qb_unverified_entry\` | Unverified entry IDs pending Claim & Confirm |

All remaining form data stays in Forminator's native tables and is fetched on-demand via \`Forminator_API::get_entry()\`. This prevents CRM schema bloat regardless of how many custom fields exist on any form.

### Unverified Protocol

When a logged-out user submits a form and the email matches an existing CRM contact, the entry is stored as \`_qb_unverified_entry\` instead of being auto-linked. Upon login, the Magic Cloak notification system triggers a Claim & Confirm dialog where the user can approve or reject the merge.

## AI Conjure

The \`/conjure\` endpoint accepts an array of field descriptors (\`{ type, label }\`) and dynamically creates a Forminator form using \`Forminator_API::add_form()\`. The AI dialog in the spark generates these descriptors from a natural language prompt.
`,Be=`# XP & Bells Progression Engine for PRO Accounts

This document outlines the architecture, hooks, and REST API integration for YouMeOS COMPASS PRO account XP progression, Bells-GP sync, and automated collection milestone rewards.

## Architectural Overview

The gamification engine bridges the **Nook Phone** (Svelte frontend + SQLite/Nookipedia proxies) with the **YouMeOS COMPASS XP system** (PHP CPTs, Actions, Goals, and Level-Scaling Engine).

\`\`\`mermaid
graph TD
    A[Nook Phone Svelte state] -->|save / syncToCloud| B[WP REST API: save_nook_state]
    B -->|Check old state delta| C[Action: xophz_nook_phone_state_saved]
    C -->|XP Players Engine| D[Xophz_Compass_Xp_Players]
    D -->|Delta Actions Fired| E[do_action xophz_compass_record_action]
    E -->|1. Baseline Default Rewards| F[XP / GP Bells Awarded]
    E -->|2. Criteria Evaluation| G[XP Goals & Badges CPT]
    F -->|PRO Check| H{Is PRO User?}
    H -->|Yes| I[Accumulate XP + AP + GP]
    H -->|No| J[Accumulate GP Bells Only]
\`\`\`

---

## 1. PRO User Account Verification

XP progression, Level-Scaling, and Action Points (AP) are premium features restricted to **PRO accounts**. 

### PHP Access Controls
The central class [Xophz_Compass_Xp_Players](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-xp/admin/class-xophz-compass-xp-players.php) manages PRO authorization via \`Xophz_Compass_Xp_Players::is_pro_user( $user_id )\`:
- Inspects user metadata \`_xp_is_pro\` (checks for \`'yes'\`, \`'1'\`, \`1\`, or \`true\`).
- Inspects user roles (authorizes administrative, editor, shop manager, pro, or achiever roles).
- Exposes a filter \`xophz_compass_is_pro_user\` for downstream plugin override.

### Restricting Currency
When adding currency via \`add_currency( $user_id, $xp, $ap, $gp )\`:
- If the target user is not PRO, \`$xp\` and \`$ap\` are stripped to \`0\`.
- Users still accumulate \`$gp\` (Bells) regardless of subscription status.

---

## 2. Bells & Gold Points (GP) Synchronization

Bells in the Nook Phone are synonymous with Gold Points (GP) in the YouMeOS gamification dashboard. The sync engine coordinates real-time alignment:

### Syncing on Get State
In \`get_nook_state\` ([class-xophz-nook-phone-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-nook-phone/includes/class-xophz-nook-phone-rest.php)):
- Retrieves the user's \`_xp_total_gp\` metadata.
- Automatically populates the \`bells\` property inside the state response.
- Embeds current XP progress metrics (\`xp_level\`, \`xp_current\`, \`xp_target\`, \`xp_total\`, and \`is_pro\` status) in the state wrapper.

### Syncing on Save State
In \`save_nook_state\` ([class-xophz-nook-phone-rest.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-nook-phone/includes/class-xophz-nook-phone-rest.php)):
- Extracts \`bells\` from the incoming JSON payload.
- Syncs the value back to the user's primary \`_xp_total_gp\` meta key.

---

## 3. Automated Collection & Activity Tracking

Whenever a PRO user updates their Nook Phone state, the backend compares the incoming array with their previously cached state to compute deltas. Any new milestone triggers a native COMPASS XP action.

### Automated Delta Triggers
The action hook \`xophz_nook_phone_state_saved\` is listened to by \`Xophz_Compass_Xp_Players::handle_nook_phone_state_saved\` to detect additions:

| Category | Svelte State Field | Delta Action Slug | Payload Parameters |
|---|---|---|---|
| **DIY Recipes** | \`diy.unlockedRecipes\` | \`unlock_diy_recipe\` | \`recipe_id\` |
| **Residents** | \`residents\` | \`add_resident\` | \`villager_id\` |
| **Best Friends** | \`bestFriends\` | \`add_best_friend\` | \`villager_id\` |
| **Critter Catching** | \`critters.caught\` | \`catch_critter\` | \`critter_id\` |
| **Critter Donating** | \`critters.donated\` | \`donate_critter\` | \`critter_id\` |
| **Villager Talk** | \`villagerMilestones[id].talkedToday\` | \`talk_villager\` | \`villager_id\` |
| **Villager Gift** | \`villagerMilestones[id].giftedToday\` | \`gift_villager\` | \`villager_id\` |
| **Villager Poster** | \`villagerMilestones[id].hasPoster\` | \`earn_villager_poster\` | \`villager_id\` |
| **Villager Photo** | \`villagerMilestones[id].hasPhoto\` | \`earn_villager_photo\` | \`villager_id\` |

---

## 4. Default Reward Engine

To ensure collection updates reward players out-of-the-box, the XP reward controller injects baseline filterable default points:

\`\`\`php
$default_rewards = apply_filters('xophz_compass_default_xp_rewards', [
    'unlock_diy_recipe'    => ['xp' => 10, 'gp' => 50],
    'add_resident'         => ['xp' => 50, 'gp' => 200],
    'add_best_friend'      => ['xp' => 100, 'gp' => 500],
    'catch_critter'        => ['xp' => 15, 'gp' => 100],
    'donate_critter'       => ['xp' => 25, 'gp' => 150],
    'talk_villager'        => ['xp' => 5, 'gp' => 20],
    'gift_villager'        => ['xp' => 10, 'gp' => 50],
    'earn_villager_poster' => ['xp' => 30, 'gp' => 150],
    'earn_villager_photo'  => ['xp' => 50, 'gp' => 250],
]);
\`\`\`

These values can be overridden by creating specific custom **XP Goals** CPT rules in the WordPress Admin dashboard or hooking into the \`xophz_compass_default_xp_rewards\` filter.

---

## 5. Developer REST Endpoints

### Get / Update Player State
- **Route:** \`GET /wp-json/xp/v1/state\`
- **Response:**
  \`\`\`json
  {
      "is_logged_in": true,
      "user_id": 1,
      "is_pro": true,
      "state": {
          "level": 3,
          "current_xp": 150,
          "target_xp": 450,
          "total_xp": 600,
          "total_ap": 20,
          "total_gp": 25000,
          "title": "Syntax Warrior",
          "stats": {}
      }
  }
  \`\`\`

### Toggle PRO Subscription Status
- **Route:** \`POST /wp-json/xp/v1/pro\`
- **Payload:**
  \`\`\`json
  {
      "is_pro": true
  }
  \`\`\`
- **Response:** Returns updated user stats and new subscription confirmation status.
`,We=`# My Compass Media Library (\`o-media-library-modal\`)

## Purpose
\`o-media-library-modal.vue\` is a reusable, atomicized organism component designed to provide a modern, reimagined Media Gallery experience within the My Compass ecosystem. It mirrors the core capabilities of the WordPress Media Library while adhering to the project's glassmorphism and neon-accent design standards.

## Usage Example

\`\`\`vue
<template>
  <o-media-library-modal
    v-model="isMediaModalOpen"
    aspect-ratio="1:1"
    :multiple="false"
    @select="handleMediaSelect"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMediaModalOpen = ref(false)

function handleMediaSelect(mediaItem: any) {
  console.log('Selected Asset:', mediaItem.source_url)
}
<\/script>
\`\`\`

## Props API

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| \`modelValue\` | \`boolean\` | \`false\` | Controls the visibility of the modal dialog (\`v-model\`). |
| \`multiple\` | \`boolean\` | \`false\` | Enables multi-asset selection mode. Returns an array of selected items upon emit. |
| \`aspectRatio\` | \`string \\| number\` | \`undefined\` | Target aspect ratio (e.g. \`'1:1'\`, \`'16:9'\`). Triggers an interactive crop preview step prior to final selection emission. |
| \`allowedTypes\` | \`string[]\` | \`undefined\` | Optional mime type filters. |

## Events

| Event | Payload | Description |
| --- | --- | --- |
| \`update:modelValue\` | \`boolean\` | Fired when the modal open state changes. |
| \`select\` | \`object \\| array\` | Emits the chosen asset object (or array of objects if \`multiple\` is \`true\`). |

## Features & Implementation
- **95% Fullscreen Layout & Infinite Scroll Area**: Renders as a 95vw &times; 92vh centered dialog modal with constrained flex heights (\`min-height: 0\`) and custom-styled cyan scrollbars for seamless vertical scrolling across large asset libraries.
- **Hidden Drag & Drop Overlay**: The drag-and-drop zone stays completely hidden to maximize media grid space, revealing a full-screen drop overlay (\`z-index: 2000\`) only when dragging files over the modal.
- **REST API Integration**: Directly fetches and uploads files via the WordPress REST API endpoint (\`/wp-json/wp/v2/media\`).
- **Live Search & Media Filter Toolbar**: Real-time filtering across Images, Audio, Video, and Document assets, alongside live title/slug search.
- **Attachment Details Drawer**: Collapsible right-hand inspector panel displaying asset dimensions, file size, mime type, copyable URL, and editable Title, Alt Text, and Caption.
`,Le=`# GitHub Plugin Updater

The COMPASS core plugin includes a built-in GitHub Releases-based update system. It automatically detects new versions of all \`xophz-compass-*\` plugins and surfaces native WordPress update notifications — no third-party libraries needed.

## How It Works

### Auto-Discovery

When COMPASS loads, \`Xophz_Compass_Updater::init()\` scans all installed plugins via \`get_plugins()\`. Any plugin with a \`TextDomain\` starting with \`xophz-compass\` is automatically registered.

Each text domain maps to \`HalloftheGods/{text-domain}\` on GitHub.

### Update Check Flow

\`\`\`
WP cron triggers update check
  → pre_set_site_transient_update_plugins filter fires
  → For each registered plugin:
      → Fetch https://api.github.com/repos/HalloftheGods/{slug}/releases/latest
      → Compare tag_name (stripped of \`v\` prefix) to installed Version header
      → If newer: inject update object into transient
  → WP shows native update badge
\`\`\`

### Caching

GitHub API responses are cached in WordPress transients:
- **Success**: 12-hour TTL (\`xophz_gh_rel_{md5(repo)}\`)
- **Failure**: 1-hour TTL (avoids hammering on errors)

GitHub's public API rate limit is 60 requests/hour per IP. With ~25 plugins and 12-hour caching, this uses ~25 requests per check cycle — well within limits.

### Download Source

The updater looks for a \`.zip\` asset attached to the GitHub Release (created by the \`build-plugin-zip.yml\` workflow). Falls back to the GitHub-generated \`zipball_url\` if no asset exists.

### Icon Resolution

The update modal displays plugin icons fetched from the repo root:
1. \`icon.svg\` (preferred)
2. \`icon.png\` (fallback)

Loaded from \`raw.githubusercontent.com/{repo}/main/icon.*\`.

### Changelog

The GitHub Release body (markdown) is converted to HTML and displayed in the "View Details" modal under the Changelog tab.

## Requirements for New Plugins

To participate in the update system, a new plugin needs:

1. **TextDomain** starting with \`xophz-compass\` in the plugin header
2. **A matching GitHub repo** at \`HalloftheGods/{text-domain}\`
3. **The shared CI workflow** (\`auto-version.yml\`) to create tagged releases with zip assets
4. **\`Update URI\` header** — automatically injected by the CI workflow on first release

That's it. No registration code needed in the child plugin.

## Update URI Header

The \`wp-plugin-update.yml\` workflow automatically injects this header if missing:

\`\`\`
* Update URI:        https://github.com/HalloftheGods/{repo-name}
\`\`\`

This tells WordPress 5.8+ not to check wordpress.org for updates to this plugin, preventing slug collisions.

## File Locations

| File | Purpose |
|------|---------|
| \`xophz-compass/includes/class-xophz-compass-updater.php\` | The updater class |
| \`xophz-compass/includes/class-xophz-compass.php\` | Loads and initializes the updater |
| \`.github/workflows/wp-plugin-update.yml\` | CI: version bump + Update URI injection |
| \`.github/workflows/build-plugin-zip.yml\` | CI: builds and attaches zip to release |

## **Updates not showing?**
- Check that a GitHub Release exists with a tag newer than the installed version.
- Force a refresh by visiting: \`YOUR_SITE_URL/wp-admin/plugins.php?xophz_force_update=1\`
- This clears all cached GitHub responses and the WordPress update transient.

**Updates disappeared after initially showing?**
- This usually happens if the GitHub API rate limit is hit (60 requests/hour for public API).
- The system now includes a "Stale-While-Revalidate" fallback that stores the last known good release in the \`wp_options\` table.
- If the API call fails (due to rate limits or network issues), the system will fall back to the last successfully fetched version.
- Errors are now only cached for 5 minutes (instead of 1 hour) to allow for faster recovery.

**Rate limited?**
- The 60 req/hour public limit can be hit if you have many plugins (40+) and check frequently.
- Avoid rapid clicking of "Check Again" on the Updates page.
- If you need more headroom, a GitHub token can be added to the \`wp_remote_get\` headers (1000 req/hour).
`,Fe=`# Magic Door — Multi-Theme Domain Mapping

## Overview

Magic Door is a feature within the **Moving Castle** plugin that enables a single WordPress installation to serve different themes based on the incoming request context. Inspired by the magic door in *Howl's Moving Castle*, each configured "door" maps a trigger condition (domain, subdomain, user role, or URL parameter) to a specific installed WordPress theme.

## Architecture

### PHP Backend

**File:** \`includes/class-xophz-compass-moving-castle-magic-door.php\`

The Magic Door class handles:
- **REST API endpoints** for CRUD operations on door configurations
- **Theme override logic** via WordPress \`template\` and \`stylesheet\` filters
- **Persistence** via \`wp_options\` table under the key \`mc_magic_doors\`

### REST API Endpoints

| Method   | Endpoint                                | Purpose                       |
|----------|-----------------------------------------|-------------------------------|
| \`GET\`    | \`/moving-castle/v1/magic-door/themes\`   | List all installed WP themes  |
| \`GET\`    | \`/moving-castle/v1/magic-door/doors\`    | List all configured doors     |
| \`POST\`   | \`/moving-castle/v1/magic-door/doors\`    | Create a new door             |
| \`PUT\`    | \`/moving-castle/v1/magic-door/doors/:id\`| Update a door                 |
| \`DELETE\` | \`/moving-castle/v1/magic-door/doors/:id\`| Delete a door                 |
| \`POST\`   | \`/moving-castle/v1/magic-door/doors/:id/toggle\` | Toggle active state |

All endpoints require \`manage_options\` capability.

### Theme Override Mechanism

The \`apply_theme_override()\` method hooks into \`setup_theme\` — the earliest WordPress lifecycle hook where theme switching is effective. It:

1. Loads all active doors from \`wp_options\`
2. Evaluates each door's trigger against the current request
3. On first match, applies \`add_filter('template', ...)\` and \`add_filter('stylesheet', ...)\` to override the active theme

### Trigger Types

| Type        | Evaluates Against              | Example                    |
|-------------|-------------------------------|----------------------------|
| \`domain\`    | \`$_SERVER['HTTP_HOST']\`       | \`cool-brand.com\`           |
| \`subdomain\` | \`$_SERVER['HTTP_HOST']\`       | \`beta.yoursite.com\`        |
| \`role\`      | Current user's WordPress role | \`administrator\`            |
| \`param\`     | \`$_GET\` query parameters      | \`?door=red\`                |

### Door Data Schema

\`\`\`json
{
  "id": "unique_string",
  "label": "The Red Door",
  "triggerType": "domain",
  "trigger": "cool-brand.com",
  "themeSlug": "astra",
  "themeName": "Astra",
  "color": "red",
  "active": true
}
\`\`\`

## Frontend

### API Layer
**File:** \`src/routes/moving-castle/moving-castle.api.ts\`

Methods: \`getInstalledThemes()\`, \`getDoors()\`, \`createDoor()\`, \`updateDoor()\`, \`deleteDoor()\`, \`toggleDoor()\`

### View
**File:** \`src/routes/moving-castle/views/MagicDoorView.vue\`

**Route:** \`#/moving-castle/magic-door\`

Features:
- Circular dial UI inspired by Howl's door mechanism
- Door list with real-time toggle switches
- Config dialog with trigger type selection, theme dropdown (fetched from WP), and color picker
- All operations are persisted to the WordPress database via REST API

## Use Cases

1. **White-labeling:** \`client-a.com\` and \`client-b.com\` both point to the same WP install but display completely different themes
2. **Staging new designs:** Map \`beta.yoursite.com\` to a new theme, test it with real production data
3. **Role-based theming:** Admins see a dashboard theme; regular visitors see the public theme
4. **Campaign landing pages:** Visitors arriving via \`?door=promo\` get a special promotional theme

## DNS Requirements

For domain/subdomain triggers, the DNS records must point to the WordPress server. WordPress itself doesn't need multisite — the Magic Door handles the theme routing at the application layer.
`,Ue=`# The Hall of the Gods Ecosystem Architecture

While this repository (**COMPASS**) focuses entirely on the "Systems Interface" and tools for WordPress, it sits within a much larger spatial computing infrastructure. This document outlines the grand vision and the century-scale architecture that developers and contributors must understand when working on the codebase.

We are not building a simple web UI; we are building the operational layers of a $1T spatial deployment network.

## The Trillion-Dollar Stack (TDS)

The ecosystem is divided into five distinct foundational layers, moving from the physical protocol to the overarching cultural genesis.

### 1. The Protocol: w⁴ (Worldwide Webwork)
The bedrock layer. The w⁴ Protocol takes the traditional, flattened "World Wide Web" and adds a fourth dimension: The Work. It is a highly-pressurized, spatial deployment grid leveraging the undeniable dominance of WordPress (45% of the web). It provides a self-healing, hyper-cube architecture where "websites" cease to be 2D brochures and become nodes in a sovereign network.

### 2. The Nodes: BlackBOX
A BlackBOX is the individual, isolated sovereign environment (node) deployed onto the w⁴ grid. It represents a user's absolute digital sovereignty.
*   **Build a BLOX**: The mechanism by which individuals forge their own node.
*   **BlackBOX WhiteGLOVE**: The managed concierge service where our architects steward the node's growth on the high-frequency network.

### 3. The Interface: My Compass Suite
**_(This is where Xophz-COMPASS lives)_**
Raw server power and spatial grids are chaotic and inaccessible to most. The **Compass Suite** is the internal command center installed in every BlackBOX. It translates that raw industrial power into an elegant, gamified user experience. 

It strips away legacy WordPress bloat and replaces it with functional superpowers:
*   *Force Field* (Security)
*   *Time Machine* (Restoration/Redundancy)
*   *Lens of Truth* (Analytics)
*   *Magic Formulass* (Interaction)

### 4. The Digital Cosmos: YouMeOS
The horizon of our infrastructure. When BlackBOXes are woven together, they form a living, interactive network. **YouMeOS** (OS officially representing the **Omega Source**, though it can universally stand for Operating System or whatever fits the user's worldview) operates as the personal spatial environment connecting these decentralized nodes, moving humanity away from rented social media silos and back into sovereign web ownership.

### 5. The Genesis Point: Hall of the Gods
The overarching Nexus. The Hall is the cultural and structural entity that guides the webwork. Founded as a gathering place for creators—the "gods" of this age—to build, debate, and impose their will on the void. The Hall of the Gods is the architect behind the w⁴ Protocol.

---

## Why Understanding The Stack Matters

As you write code in the \`Xophz-COMPASS\` repository, you must remember that you are constructing **Layer 3**. 

Every atom, component, and Vue view you build isn't just updating a WordPress plugin—it is the control interface for a sovereign BlackBOX node. The UI must feel like a starship HUD (Heads-Up Display) because it literally controls the user's trajectory through the w⁴ spatial network. 

> *"People are looking at decades. We are looking at centuries."*

Design with extreme precision, ensure zero-lag execution, and build for scale.
`,Ge=`# Project Compass Philosophy

## Core Mission

**Simplifying the WordPress Admin User Experience (UX).**

The goal of Compass is to transform the traditional, often cluttered WordPress dashboard into a sleek, responsive, and intuitive "Command Center." We aim to empower users to manage their WordPress sites effortlessly, specifically prioritizing a **Mobile-First** approach.

## Design Pillars

### 1. Mobile-First & Responsive

- **Manage from Anywhere**: The interface interprets complex admin tasks into touch-friendly interactions.
- **Scalability**: UI elements scale gracefully from a desktop "cockpit" view down to a phone's "handheld scanner" view without losing functionality.

### 2. Aesthetic Vision: "Sleek, Futuristic, Modern"

- **Visual Style**: High-end Glassmorphism, deep layered backgrounds, and neon/fluorescent accents (Cyan/Blue #62c9ff).
- **The "Nerdy" Twist**: We embrace the "System" aesthetic. HUD (Heads-Up Display) elements, micro-animations, monospace data readouts, and gyroscope-like rings. It should feel like operating a starship or high-tech machinery.
- **Typography**: Modern geometric sans-serifs (Cairo, Rajdhani) paired with technical monospace fonts for data.

## Terminology & Taxonomy

The project uses a celestial metaphor to represent the digital architecture:

- **YouMeOS**: The system as a whole.
- **Youniverse**: An individual instance/galaxy (the user-facing portal).
- **Star**: A user within the system.
- **Main Star**: The primary site.
- **Nexos**: The "Hippocros" level visualizing relationships.
- **Oort Cloud**: A user's content cloud (links, media, consumption).
- **Satellites**: Functional modules and tools (Wapps).
- **The Sun**: The central dashboard of a Star.

See \`docs/Taxonomy.md\` for full definitions.

## UX Principles

- **Surprise & Delight**: Interfaces should not just be functional; they should be satisfying to use. (e.g., The "flip" of the compass intro).
- **Focus**: Reduce cognitive load by hiding unnecessary WP clutter and surfacing the most vital controls.
- **Direct Manipulation**: Interactive elements (toggles, sliders, wheels) over static input fields where possible.
- **Celestial Navigation**: Moving through the site should feel like traversing space, with the "Compass" as your guide between the Galaxy (Global), Nexos (Social), and Sun (Personal) levels.
`,Xe=`# Versioning System

The Xophz-COMPASS ecosystem uses an automated date-based versioning system to ensure continuous delivery and clear release tracking.

## Version Format

Versions follow the pattern: \`vYY.M.D[rcTS]\`

- **YY**: Last two digits of the year (e.g., \`26\`).
- **M**: Month without leading zeros (e.g., \`4\` for April).
- **D**: Day of the month without leading zeros (e.g., \`11\`).
- **rcTS** (Optional): Release Candidate suffix. \`TS\` is the total seconds elapsed in the day (UTC), used for unique push-based versions.

### Examples
- \`v26.4.11rc46986\`: A release candidate generated during a push on April 11, 2026.
- \`v26.4.11\`: The final daily version for April 11, 2026.

## Workflows

### 1. Auto Version (Push-to-Main)
- **File**: \`.github/workflows/auto-version.yml\`
- **Trigger**: Every push to the \`main\` branch.
- **Action**: Generates an \`rc\` version, updates \`package.json\`, and creates a Git tag.
- **Purpose**: Rapid iteration and testing versions.

### 2. Daily Final Version (Schedule)
- **File**: \`.github/workflows/daily-final-version.yml\`
- **Trigger**: Every day at **11:59:00 PM UTC** (\`59 23 * * *\`).
- **Action**: Generates the final daily version (strips \`rc\`), updates \`package.json\`, and creates/overwrites the daily tag.
- **Purpose**: Stable daily snapshot for production-ready states.

## Manual Trigger
Both workflows can be triggered manually via the GitHub Actions "Run workflow" button for out-of-band releases.
`,Ne='# Wizards Tower — Feature Flag System\n\n## Overview\n\nThe Wizards Tower is a developer-only spark that provides a UI for managing feature flags across YouMeOS. It controls which sparks and menu items are visible based on access tiers.\n\n## Architecture\n\n### Two-Layer System\n\n1. **Build-Time Config** (`src/config/feature-flags.ts`) — Declares default status for every spark\n2. **Runtime Overrides** (`localStorage: youmeos:feature-flag-overrides`) — UI-driven overrides merged at module load\n\n### Access Tiers\n\n| Tier        | Description                                      | Sees Statuses            |\n|-------------|--------------------------------------------------|--------------------------|\n| `public`    | Standard users                                   | `stable`                 |\n| `beta`      | Beta testers                                     | `stable`, `beta`         |\n| `alpha`     | Alpha testers                                    | `stable`, `beta`, `alpha`|\n| `developer` | Auto-enabled on `localhost` / `import.meta.env.DEV` | Everything except `disabled` |\n\n### Feature Statuses\n\n| Status     | Build Included | Menu Visible     | Who Sees It           |\n|------------|----------------|------------------|-----------------------|\n| `stable`   | ✅             | ✅               | Everyone              |\n| `beta`     | ✅             | Tagged with badge| Beta testers + devs   |\n| `alpha`    | ✅             | Hidden by default| Alpha testers + devs  |\n| `disabled` | ❌ (tree-shaken) | ❌             | Nobody                |\n\n## Key Files\n\n| File | Purpose |\n|------|---------|\n| `src/config/feature-flags.ts` | Feature flag declarations + localStorage override merging |\n| `src/config/feature-access.ts` | Access tier resolution, `canAccess()` utility |\n| `src/stores/launcher.store.ts` | Filters `visibleApps` through feature flags |\n| `apps/youmeos/app/index.ts` | Filters `systemRegistry` through feature flags |\n| `apps/youmeos/app/sparks/wizards-tower/` | The Wizards Tower spark UI |\n\n## Usage\n\n### Adding a New Feature Flag\n\n1. Add the entry to `FEATURE_FLAGS` in `src/config/feature-flags.ts`:\n   ```typescript\n   "my-new-spark": { status: "alpha", label: "My New Spark" }\n   ```\n\n2. The spark will automatically be filtered from the launcher and system registry unless the user has alpha/developer access.\n\n### Setting Access Tier\n\n- **Development**: Automatically `developer` tier — sees everything\n- **Production**: Open Wizards Tower → Access Tier → Select tier\n- **localStorage key**: `youmeos:access-tier`\n\n### Overriding Flags via UI\n\n1. Open Wizards Tower spark\n2. Navigate to "Feature Flags" tab\n3. Change status via dropdown or quick toggle\n4. Click "Save & Reload"\n5. Overrides are stored in `localStorage: youmeos:feature-flag-overrides`\n\n## Integration Points\n\nThe feature flag system hooks into two filtering layers:\n\n1. **`launcher.store.ts` → `visibleApps`**: Controls what appears in the app launcher, user rail, and category filters\n2. **`app/index.ts` → `systemRegistry`**: Controls what components are loaded into the webtop\'s active app renderer\n\nBoth layers call `canAccess(status, tier)` from `feature-access.ts`.\n',He=`# Omega Source (Virtual Passport)

The Omega Source is a YouMeOS spark that serves as the user's **public-facing identity card** — a virtual passport / business card combining personal branding, expertise, and social presence into a single shareable profile.

## Spark Metadata

| Field       | Value                  |
|-------------|------------------------|
| ID          | \`omegafile\`            |
| Icon        | \`fal fa-id-card\`       |
| Brand Color | \`#62c9ff\`              |
| Category    | Gateways (portal)      |
| Location    | \`apps/youmeos/app/sparks/omegafile/\` |

## Architecture

\`\`\`
sparks/omegafile/
├── omegafile-app.vue              # Main u-window spark template
└── omegafile-app.controller.ts    # Composable with all state & logic
\`\`\`

### Data Sources
- **useAuth** — Display name, email, nicename
- **useXpStore** — XP, GP, AP, RP, level, avatar
- **useWeb3Gateways** — Wallet address, server profile (headline, location)

## Tabs

### 1. Passport (Identity Card)
The core virtual passport card with:
- **Avatar** with level-colored ring border (cyan → green → red → purple)
- **Headline** — pulled from server profile or defaults to "Sovereign Digital Citizen"
- **Location** — optional geolocation string
- **Pulse Rating** — 1-5 bar self-assessment indicator
- **Stat Bar** — AP, RP, GP, Level at a glance
- **My Reflection** — Three expandable entries:
  - My Passion
  - My Purpose
  - My Power

### 2. Growth (Room to Grow)
Professional development section with:
- **Expert In** — Taggable skill/job title chips (add/remove)
- **Credentials** — Verified credentials with special glow when confirmed
- **Skills** — Documented skill list
- **Resources** — Available resources
- **References** — Professional references

### 3. Links (Social Presence)
Web presence aggregation:
- **Social Links** — Website, Blog, GitHub, LinkedIn, X/Twitter
- **Wallet** — Connected Ethereum address (from Passport/MetaMask)

## Navigation Sidebar
The left nav panel displays:
- User avatar with level-colored ring
- Display name and headline
- Location
- Tab navigation (Passport / Growth / Links)
- Level chip + RP chip
- XP progress bar

## Wireframe Mapping

From the original wireframe sketch:

| Wireframe Element       | Implementation                     |
|-------------------------|------------------------------------|
| Avatar area             | \`v-avatar\` with \`omegafile-avatar-ring\` |
| Username                | \`displayName\` computed             |
| Frame color by type     | \`profileFrameColor\` by level tier  |
| My Pulse (1-5)          | \`pulseRating\` with dot indicators  |
| My Reflection entries   | \`reflections\` array with expand    |
| Expert In / tags        | \`expertTags\` with v-chip + add/remove |
| Credentials             | \`credentials\` ref (placeholder)    |
| Skills                  | \`skills\` ref (placeholder)         |
| Resources               | \`resources\` ref (placeholder)      |
| References              | \`references\` ref (placeholder)     |
| Social links / websites | \`socialLinks\` array                |
| Prana/XP stats          | AP, RP, GP, Level stat boxes       |
| Color Guard (badges)    | Level-based \`profileFrameColor\`    |

## Future Enhancements
- Persist reflection entries via WP REST API
- Save/load expert tags, credentials, skills, resources, references
- IPFS publication of public profile data
- QR code generation for profile sharing
- Color wheel for 12-category resonance mapping
- "Room to Growth" iteration tracking
- Triple DNA Strand Rating System (Quality, Integrity, Service)
`,Ve=`# YouMeOS Nomenclature & Terminology Map

This document serves as the central mapping for translating YouMeOS "Hall of the Gods" terminology into Standard Operating System nomenclature. This mapping will be used when the user enables the \`standardNomenclature\` accessibility toggle.

## Core System Architecture

| YouMeOS Term | Standard Term | Context / Description |
| :--- | :--- | :--- |
| **YouMeOS** | OS / Workspace | The overarching operating system and interface environment. |
| **Spark** | Application / App | A standalone application, utility, or program. |
| **Spark Plug** | Extension / Plugin | Add-ons or plugins that extend the core system functionality. |
| **Nucleos** | Settings / Control Panel | The central hub for system preferences and configurations. |
| **Enchiridion** | Documentation / Help | The system manual and documentation hub. |
| **THEOS** | Identity / Account | User identity and access management system. |
| **Nexos Network** | Discovery Network | The peer-to-peer network for active platforms. |

## Apps (Sparks)

| YouMeOS Term | Standard Term | Context / Description |
| :--- | :--- | :--- |
| **Moving Castle** | Migration Tool | Cross-site data transfer and migration engine. |
| **Omega Source** | Integrations / Connections | Platform for managing OAuth, Discord, Google, etc. |
| **Midnight Nerd** | Support / Help Desk | User support and ticketing system. |
| **Bugnet (Bug-Catching Net)** | Bug Reporter | Application for capturing and logging bugs. |
| **Bubblegum** | Task Manager / To-Do | Task tracking and management application. |
| **Blackbox** | System Logs | Diagnostic logs and event tracking. |
| **Gaea** | File Explorer / Storage | System storage and file management. |
| **Chronos** | Clock / Calendar | Time management and scheduling. |
| **Jukebox** | Media Player | Audio and media playback. |
| **Lemon Aid** | RSS Reader / Curation | Personal feed reader and Noosphere content curator. |
| **Local Produce** | Media Library | Local file and image assets. |
| **Magic Formula** | Form Builder | Application for creating and managing forms. |
| **Wizards Tower** | Developer Tools | Advanced configuration and developer tools. |
| **Trophy Case** | Achievements | Gamified XP and user milestone tracking. |
| **Questbook** | CRM / Contacts | User profiles and relationship management. |

## Interface & Controls

| YouMeOS Term | Standard Term | Context / Description |
| :--- | :--- | :--- |
| **Wormhole** | Minimize | Minimizing a window to the background or dock. |
| **Eject** | Close / Logout | Closing an application or logging out. |
| **Optical Shuttle** | Navigation / Browser | Interface for navigating backwards and forwards. |
| **Fly to Sun (Sol)** | Home | Returning to the main dashboard or home screen. |
| **Chi X** | Developer Access | The highest tier of administrative/developer permissions. |
| **Omega** | Standard Access | Stable, standard administrative tier. |

## Next Steps for Implementation

1. **Review and Refine:** Determine if the above standard terms are the exact ones we want to use.
2. **Implement Translation Wrapper:** Create a Vue composable (e.g., \`useTerminology()\`) or component wrapper that consumes the \`accessibilityStore.standardNomenclature\` flag.
3. **Rollout:** Systematically replace hardcoded strings with the translation wrapper throughout the UI (starting with the Topbar, App Launcher, and Nucleos).
`,Ye=`# YouMeOS: Universal Internet Operating System Vision & Architecture

> Building the Micro-to-Macro Sovereign Internet Infrastructure for Humankind

---

## 1. Executive Summary

YouMeOS is a universal, personalized internet operating system designed to operate seamlessly across two distinct scales:

1. **Micro-Level (The Sovereign Individual):** A stateful, personalized digital workspace that gives users full ownership of their identity, data, assets, and computational environment.
2. **Macro-Level (The Federated Noosphere):** A decentralized network of WordPress installations, enterprise nodes, municipal services, and global institutions connected via the W4 Protocol and ActivityPub.

By upgrading standard web infrastructure into interconnected YouMeOS nodes, this architecture replaces opaque, siloed legacy software in private and public sectors with transparent, highly engaging, and auditably secure digital systems.

---

## 2. Micro-Level Architecture: The Sovereign Individual

At the individual level, YouMeOS provides a desktop-grade web application environment that runs on any modern browser or PWA container.

### Key Micro Features

* **Sovereign Passport (Omega Source):**
  * Decentralized identity backed by IPFS CIDs and ENS/Web3 identity standards.
  * Universal cross-domain authentication (AuthN) independent of local site permissions (AuthZ).
  * MMO-style persistent profile, badges, XP, and customization settings that travel everywhere with the user.

* **Fractal Spark Architecture:**
  * Modular applications ("Sparks") operating inside a spatial Window Manager (\`x-window\`).
  * Sparks can be detached and installed individually as Progressive Web Apps (PWAs) on mobile devices or desktop environments.
  * Direct client-to-REST communication decoupled from server-side visual rendering.

* **Unified Data & Asset Storage:**
  * Virtual File System (VFS) abstraction (\`home://\`, \`wp://\`, \`ipfs://\`).
  * Frictionless drag-and-drop asset movement between local vaults, personal clouds, and federated domains.
  * Integrated micro-transaction engine (Dirt/XP) for direct peer-to-peer value exchange.

### User Benefits

* **Total Data Sovereignty:** Users own their identity and data. No single centralized platform can revoke user credentials or lock user data in vendor silos.
* **Unified Digital Experience:** Eliminates redundant logins, disparate dashboards, and fragmented user interfaces across websites.
* **Zero-Friction Portability:** Personal aesthetics, tool configurations, and digital assets follow the user across every YouMeOS node seamlessly.
* **Privacy by Design:** Strict cryptographic separation of identity verification from site-level administrative authorization.

---

## 3. Macro-Level Architecture: Global & Institutional Modernization

At the macro level, YouMeOS leverages the ubiquity of WordPress (powering over 40% of the web) and open protocols (ActivityPub, W4, REST APIs) to federate millions of sovereign nodes into a global operating system.

### Institutional & Global Application

* **Government & Public Sector Modernization:**
  * Replaces legacy, opaque administrative portals with transparent, real-time YouMeOS Sparks.
  * Public voting, budget tracking, municipal permit processing, and civic reporting run as auditable, open Sparks.
  * High-concurrency spatial dashboards allow citizens to monitor public services and engage directly with local governance.

* **Enterprise & Institutional Federation:**
  * Cross-domain organization management using COMPASS PHP core plugins and WP Multi-Network.
  * Single Customer View (SCV) across parent companies, subsidiaries, and partner institutions without centralizing sensitive database keys.
  * Automated workflows, CRM tracking (Questbook), and multi-channel communication (Bomb Bag) operating across institutional boundaries.

* **Global Spatial Graph (Starmap):**
  * Visual representation of people, institutions, and services in a 3D WebGL cosmos.
  * Proximity and gravity calculated by interaction velocity and ActivityPub event flows.
  * Instant cross-instance navigation via secure "Wormhole" handshakes.

---

## 4. Institutional Transformation: Benefits for Humankind

\`\`\`
+-----------------------------------------------------------------------+
|                            THE NOOSPHERE                              |
|   (Federated Global Infrastructure via W4 Protocol & ActivityPub)      |
+-----------------------------------------------------------------------+
                                   |
        +--------------------------+--------------------------+
        |                                                     |
        v                                                     v
+-------------------------------+             +-------------------------------+
|     MICRO (INDIVIDUAL)        |             |      MACRO (INSTITUTION)      |
|  - Sovereign Passport (IPFS)  |             |  - Municipal & State Sparks   |
|  - Detachable PWA Sparks      |  <=======>  |  - Auditable Governance       |
|  - P2P Value & XP Mechanics   |  Handshakes |  - Transparent Civic Graphs   |
|  - Window Manager Interface   |             |  - Cross-Domain Federation    |
+-------------------------------+             +-------------------------------+
\`\`\`

### Key Macro Benefits

1. **Radical Software-Level Transparency:**
   * Government agencies, public utility providers, and NGOs publish real-time operational data directly to public Sparks.
   * All administrative actions generate immutable event logs for open civic auditing.

2. **Skyrocketing Social & Civic Engagement:**
   * Turns civic participation into interactive, gamified experiences (XP, badges, civic bounties).
   * Direct line of interaction between citizens, public officials, and organizational leaders without intermediary censors.

3. **Democratized Infrastructure Deployment:**
   * Any municipality or business can launch a YouMeOS node in minutes using standard WordPress hosting and COMPASS plugins.
   * Drastically reduces IT infrastructure overhead for public institutions by using open-source, federated micro-architectures.

4. **100-Year Resilience & Interoperability:**
   * Decentralized data pinning (IPFS) and standard protocols guarantee that data remains accessible even if individual servers go offline.
   * Multi-generational adaptability through modular Spark upgrades without breaking the core identity pipeline.

---

## 5. Implementation Roadmap

1. **Phase 1: Plugin Distribution (The Trojan Horse):**
   * Distribute COMPASS PHP plugins to existing WordPress sites to turn standard installations into API-first YouMeOS nodes.
2. **Phase 2: Spark PWA Unboxing:**
   * Finalize service worker caching and PWA manifests so individual Sparks function as standalone mobile and desktop apps.
3. **Phase 3: Institutional & Civic Pilot Modules:**
   * Deploy dedicated civic management Sparks (voting, municipal transparency, public feedback engines) for pilot organizations.
4. **Phase 4: Global W4 Noosphere Integration:**
   * Interconnect public nodes, enterprise servers, and sovereign identity vaults into a unified, borderless internet operating system.
`,je=`# Helios Modules Documentation

## Overview
The Helios spark serves as the central hub for user identity, inner reflection, and personal growth within the YouMeOS network. It is architected around planetary/solar archetypes, divided into distinct domains of consciousness.

## Architecture

Helios is built as a primary OS application ("Spark") and utilizes standard Project Compass glassmorphic components (\`<u-window>\`, \`<u-spark-view>\`, \`<u-glass-card>\`) combined with \`<v-window>\` and \`<v-bottom-navigation>\` elements for interior module routing.

### Core Modules

1. **I Am (Sun) - \`HeliosStellarCommand.vue\`**
   - **Route:** \`my-center\`
   - **Purpose:** Core overview, mission statement, public profile, and spectral frequency. Captures the central user identity.
   - **Features:** A profile configuration area syncing with WordPress User meta data via the Event Horizon layer.

2. **Loving Awareness (Venus) - \`HeliosHeart.vue\`**
   - **Route:** \`helios-heart\`
   - **Purpose:** Interpersonal connection, release of density, self-love, and energetic frequency resonance.
   - **Features:** Incorporates an interactive "Release Void" mechanism, forgiveness affirmations, and emotional resonance tags.

3. **Light & Shadow (Moon) - \`HeliosVault.vue\`**
   - **Route:** \`helios-vault\`
   - **Purpose:** Subconscious reflections, shadow work, trigger logs, and the astral vault.
   - **Features:** Safe storage interface (Memory Crystals) with categorized tags for Dreams, Shadow Work, and Insight logs.

4. **Voice & Vibration (Mercury) - \`HeliosCommunication.vue\`**
   - **Route:** \`helios-communication\`
   - **Purpose:** Message management, inbound/outbound communication filtering, and vocal resonance settings.
   - **Features:** Notification thresholds and focus-state signal filtering.

5. **Drive & Discipline (Mars) - \`HeliosDrive.vue\`**
   - **Route:** \`helios-drive\`
   - **Purpose:** Tracking active endeavors, kinetic output, willpower, and disciplined energy.
   - **Features:** A dynamic drive score and an interactive tracker for morning protocols, flow sessions, and other disciplined endeavors.

6. **Fortune & Expansion (Jupiter) - \`HeliosWallet.vue\`**
   - **Route:** \`helios-wallet\`
   - **Purpose:** Karmic wealth aggregation, resource alignment, and expansion vectors.
   - **Features:** Real-time generation visualization of karmic credits and tracking of professional vs. artistic expansion vectors.

7. **Time & Structure (Saturn) - \`HeliosIdentity.vue\`**
   - **Route:** \`helios-identity\`
   - **Purpose:** Long-term responsibilities, karmic structure, and timeline commitments.
   - **Features:** Comprehensive milestone timeline and time auditing dashboard showing structural boundaries and blockages.

## Component Philosophies

- **Zero-Entropy Logic:** All interior Helios modules focus on single-responsibility interfaces.
- **Starship Aesthetics:** Dark mode default using \`bg-transparent\` overlays over the OS desktop. Sub-surfaces use \`<u-glass-card>\` with varying opacities and subtle neon borders.
- **Atoms First:** Extensive usage of standard Vuetify primitives matched with atomic wrapper styling or OS-specific custom atoms where practical.
`,qe='# Legacy Engine Mechanics & Architecture\n\n> [!NOTE]\n> This document records R&D findings regarding the legacy Three.js engine (r62) located in `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/main.js`. Use this reference when modifying core universe behavior.\n\n## Core Scene Graph Hierarchy\n\nThe engine uses a specific hierarchy of `THREE.Object3D` containers to manage different types of potential movement.\n\n1.  **`scene`** (Root)\n    *   **`rotating`** (`THREE.Object3D`)\n        *   **Purpose**: Controls the **Camera\'s Orbital Rotation** (View Rotation).\n        *   **Behavior**:\n            *   Rotated by user input (mouse drag) via `rotateX` and `rotateY` global variables.\n            *   "Pinning" works by damping `rotateVX` and `rotateVY` to zero when dragging stops.\n        *   **Children**:\n            *   **`galacticCentering`** (`THREE.Object3D`)\n                *   **Purpose**: An intermediate container, likely for centering offsets.\n                *   **Children**:\n                    *   **`translating`** (`THREE.Object3D`)\n                        *   **Purpose**: Controls **Linear Movement** (Panning/Zooming target).\n                        *   **Behavior**: Interpolates position to `targetPosition`.\n                        *   **Contents**: All actual celestial objects live here.\n\n## Global Objects of Interest\n\nThese global variables are defined in `main.js` and can be manipulated in the `animate()` loop.\n\n| Variable | Type | Description |\n| :--- | :--- | :--- |\n| `pGalacticSystem` | `THREE.ParticleSystem` | The main galaxy swirl (generated by `galaxy.js`). Rotation here spins the galaxy *internally*. |\n| `pSystem` | `THREE.ParticleSystem` | The Hipparcos star data (100,000 stars). |\n| `starModel` | `THREE.Object3D` | The generated procedural star models (when enabled). |\n| `solarSystem` | `THREE.Object3D` | The solar system container. |\n| `camera` | `THREE.PerspectiveCamera` | The main camera. Note: In this engine, the *camera* usually stays at `z` distance, while the *universe* (`rotating`) rotates around it. |\n\n## Rotation Mechanics\n\n### 1. View Rotation ("Orbiting")\nThe user doesn\'t actually rotate the camera around the objects; they rotate the **Universe Container** (`rotating`) in front of the camera.\n\n```javascript\n// Found in animate()\nrotating.rotation.x = rotateX;\nrotating.rotation.y = rotateY;\n```\n\n### 2. Internal Rotation ("Spinning")\nTo make an object spin continuously *regardless* of view rotation (like a galaxy swirling on its axis), you must rotate the object itself within the `translating` container.\n\n```javascript\n// Added to animate() for Galaxy Swirl\nif (pGalacticSystem) {\n    pGalacticSystem.rotation.y += 0.0008; // Continuous internal rotation\n}\n```\n\n## Grid Mechanics\n\nThe engine historically uses multiple grid layers to provide spatial reference.\n\n| Grid Layer | File | Geometry | Material | Texture |\n| :--- | :--- | :--- | :--- | :--- |\n| **Galactic Grid** | `galaxy.ts` | `IcosahedronGeometry` (scaled 1.15, 0.15, 1.15) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n| **Solar Plane** | `plane.js` | `CylinderGeometry` (scaled 1.0, 0.001, 1.0) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n| **Star Lattice** | `sun.js` | `IcosahedronGeometry` (radius * 1.25) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n\n**Texture Manipulation**:\nThe "flowing" effect is achieved by decrementing the texture offset in the `animate` loop or an object-specific `update` function:\n\n```javascript\n// Example from legacy animate loop\nmesh.material.map.offset.y -= 0.001;\n```\n\n## "Pinning" vs. Auto-Rotate\n\n-   **Pinning**: The user clicks and drags. This stops the *View Rotation* (the `initialAutoRotate` flag is often used to re-enable view rotation after inactivity, but the legacy code relies on friction).\n-   **Simultaneous Rotation**: By separating View Rotation (`rotating.rotation`) from Internal Rotation (`pGalacticSystem.rotation`), we can have the galaxy swirl eternally even while the user has "pinned" the view angle.\n\n## File Locations\n\n-   **Engine Entry**: `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/main.js`\n-   **Manifest**: `.../youmeos_legacy/manifest.json` (Controls script loading order)\n-   **Galaxy Logic**: `.../youmeos_legacy/js/galaxy.js`\n',Qe=`# OS Architecture & Design

## Overview

YouMeOS aims to replicate a desktop operating system feel within a web browser. This requires moving beyond standard web routing to a stateful, window-based architecture where multiple "Applications" can coexist, overlap, and interact.

## 1. The Window Manager (\`wm\`)

The Window Manager is responsible for rendering, positioning, and managing the lifecycle of window containers (\`x-window\`).

### Core Responsibilities

- **Z-Index Management**: Ensuring the focused window is always on top.
- **Focus Management**: Tracking the \`activeWindowId\`.
- **Geometry**: Handling dragging, resizing, maximizing, and minimizing.
- **Constraints**: Keeping windows within the viewport (the "Desktop").

### Component: \`<x-window>\`

A new construct that mimics a native OS window.

- **Props**: \`title\`, \`icon\`, \`width\`, \`height\`, \`x\`, \`y\`, \`is-resizable\`, \`is-minimizable\`.
- **Slots**: \`header\`, \`toolbar\`, \`default\` (content), \`footer\`.
- **Events**: \`close\`, \`minimize\`, \`maximize\`, \`focus\`, \`move\`, \`resize\`.

### Store: \`useOsStore\`

A Pinia store to manage the state of the OS.

\`\`\`typescript
state: () => ({
  windows: [
    { id: 'app-settings', appId: 'settings', zIndex: 10, state: 'normal', ... }
  ],
  activeWindowId: 'app-settings',
  nextZIndex: 100
})
\`\`\`

## 2. The Application Model

An "App" in YouMeOS is more than just a route; it is a self-contained unit of functionality with metadata and lifecycle events.

### App Definition

Apps are defined in a registry (likely \`apps.config.ts\`) with a standardized interface:

\`\`\`typescript
interface AppDefinition {
  id: string; // Unique slug (e.g., 'calculator', 'file-explorer')
  name: string; // Display name
  icon: string; // Iconify key or image URL
  component: Component; // Vue component to render inside the window
  defaultSize: { w: number; h: number };
  singleton: boolean; // If true, only one instance allowed
}
\`\`\`

### App Lifecycle

- **Launch**: Triggered via Start Menu or Desktop. Creates a new Window entry in \`useOsStore\`.
- **Suspend/Background**: When minimized or obscured.
- **Terminate**: When the window is closed.

## 3. Process Management & Taskbar

The system must track "Running Processes" to display them in the Taskbar (or Dock).

- **Taskbar Item**: Represents a window (or group of windows for the same app).
- **Context Menu**: Right-click to "Close", "Minimize", "Pin".
- **Visual Feedback**: Active apps have a "glow" or indicator.

## 4. The UI Shell

The Shell is the container for the entire OS experience.

- **Desktop**: The background area where windows float. Supports icons/shortcuts.
- **System Bar / Taskbar**: Global navigation, clock, system tray, start menu anchor.
- **Start Menu / Launch Pad**: A centralized grid or list of all installed App Definitions.

## 5. File System Abstraction (VFS)

(Future Scope)
To support a true OS feel, we need a Virtual File System (VFS) to standardize how apps access data.

- **Drive Mapping**:
  - \`home://\` -> User's local settings/data.
  - \`wp://\` -> WordPress Media Library.
- **File Explorer**: An app to browse these paths.

## 6. Integration with Routes

While the OS uses windows, we still need to support deep linking.

- **URL Mapping**: \`/os/app/settings\` -> Boots the OS and immediately launches the Settings app.
- **Browser History**: Opening an app might push a state to the history stack (optional).
`,Ke=`# Spark Federation Protocol & Security Architecture

## Overview
The "Spark Federation" is the protocol that elevates YouMeOS from a solitary application into an interconnected "OS for the Internet." It allows independent WordPress instances running the Xophz-COMPASS plugin to embed each other natively as "Sparks" (mini-browser windows) within the YouMeOS 3D desktop environment.

To achieve this decentralized network without compromising the sovereignty and security of the user, the protocol must tightly navigate modern web browser restrictions.

## Security Gotchas & Architectural Solutions

### 1. The Third-Party Cookie Apocalypse
**The Threat:** Modern browsers (Safari, Firefox, Chrome) block third-party cookies by default to prevent tracking. If \`client.com\` is rendered inside an iframe on \`xopher.com\`, the browser views \`client.com\` as a third-party and blocks access to its authentication cookies, effectively logging the user out within the Spark.

**The Solution: Token-Based Auth Bridge**
YouMeOS nodes cannot rely on legacy HTTP cookies when embedded.
- Implement a decoupled, token-based authentication bridge (e.g., JWT).
- When Node A (host) embeds Node B (child), auth state must be securely passed via \`window.postMessage\` or persisted in partitioned memory, bypassing the cookie restriction entirely.

### 2. The Clickjacking Reversal
**The Threat:** To permit embedding, a YouMeOS node must disable the standard \`X-Frame-Options\` defense. Doing this globally would allow malicious actors to invisibly embed the node on nefarious sites to hijack user clicks (Clickjacking).

**The Solution: Dynamic Content Security Policies (CSP)**
- Never globally disable \`X-Frame-Options\` or permit \`frame-ancestors *\`.
- Implement a rigid CSP \`frame-ancestors\` directive that is dynamically generated. 
- A node only drops its shields if the requesting URL is explicitly whitelisted or cryptographically verified as an authorized YouMeOS node on the user's connection network.

### 3. Cross-Site Scripting (XSS) & \`postMessage\` Poisoning
**The Threat:** Federation requires the parent OS and the embedded Spark to communicate (e.g., transmitting identity or gamification data) via \`window.postMessage\`. If listeners blindly accept payloads, a malicious node could inject scripts or execute destructive commands.

**The Solution: Zero Trust Messaging**
- Strict \`origin\` verification must be enforced on every single \`message\` event listener.
- Sensitive payloads (Identity transfers, XP events) must be cryptographically signed to ensure data integrity and proof of origin mid-flight.

### 4. Resource & GPU Exhaustion 
**The Threat:** If a YouMeOS instance embeds another full YouMeOS instance, multiple heavy WebGL/Three.js contexts will attempt to initialize simultaneously. This will instantly devour the client's GPU and RAM, crashing the browser.

**The Solution: 2D-Only "Embedded Mode"**
- The parent OS handles *all* 3D space rendering.
- When a YouMeOS instance boots, it must execute a context check: if it is running inside an iframe (\`window.self !== window.top\`), it triggers "Embedded Mode."
- In Embedded Mode, the application completely bypasses the 3D engine initialization and *only* serves the 2D HTML/Vue layers (the dashboards, lists, and glass UI).
- The parent window manager will also actively pause iframe execution for Sparks that are minimized or out of focus.
`,$e=`---
title: Starmap & Federation Mechanics
date: 2026-05-08
status: Draft / Architecture
category: Blueprint
---

# Starmap & Federation Mechanics Blueprint

This document defines the core logic behind YouMeOS's visual metaphor—the spatial awareness of people, websites, and data as "Stars"—and how the underlying federation protocols connect these instances into a cohesive "Youniverse."

## 1. The Spatial Metaphor (Stars & Constellations)

In YouMeOS, the 3D WebGL engine is not just an aesthetic background; it is the **primary user interface for the social graph**. 

### The Observer-Centric Cosmos
Every user views the "Youniverse" from the perspective of their own Main Star. There is no objective map of the network. Instead, the local Vue3/Three.js engine calculates the coordinates of other entities based strictly on interaction metrics:

*   **Stars (Entities):** Every person, website, or decentralized app (dApp) is represented as a Star.
*   **Mass & Gravity (Proximity):** The more frequently you interact with an entity (DMs, shared Sparks, profile views), the greater its "Mass" becomes in your local simulation. High-mass stars are pulled closer to your center.
*   **Brightness (Recency):** The recency and volume of data payloads received from a Star dictate its luminosity. 
*   **Constellations (Groups):** Users who are mutually connected or share common tags/interests are drawn together via simulated gravitational nodes, forming recognizable "Constellations."

### The "Blank Slate" & Default Data
To prevent users from logging into an empty void or being overwhelmed by 100,000 static, meaningless real-world Hipparcos stars, the initial dataset is curated dynamically:

*   **The Host Site Anchor:** The WordPress installation the user is currently visiting acts as a massive "Local Anchor" star. Initially, it occupies a prominent, close position. However, it obeys the same gravitational physics: if the user stops interacting with the host site's content over time, it will gradually drift to the outer edges of their map, even if they remain logged into it.
*   **The Local Cluster:** The host site's local userlist forms the immediate star cluster. Instead of rendering every registered user, it prioritizes users based on site-wide activity and the observer's mutual connections, providing a meaningful, populated local neighborhood from day one.

### Scale Limits & UI Culling
Displaying and labeling hundreds of thousands of stars renders the visual map useless. The engine employs strict rendering and UI limits:

*   **Visual Maximum (10k - 20k Stars):** The engine will only ever render a maximum of 10,000 to 20,000 stars to form the visual background ("The Milky Way"). These are drawn using optimized Particle Systems and serve primarily as aesthetic depth.
*   **Interactive Limit (Top 50 - 100 Stars):** Only the closest, highest-gravity stars (the top 50 to 100) are fully interactive. Only these top stars are granted HTML/Vue text labels and click events. This prevents "wall of text" clutter and ensures the UI remains pristine and usable.

## 2. Syncing Contacts & "Adding Friends"

The process of populating the Starmap leverages the **Unified Contacts Engine** alongside the **IPFS Identity Backpack**.

### Import & Discovery
1.  **Syncing:** A user connects their external accounts (Google, Apple, Microsoft) via the OS Settings (\`OnlineAccountsView.vue\`).
2.  **Resolution:** The \`useContactSync\` engine pulls the contact list and queries the global YouMeOS registry (via ENS or DID resolution) to see if those emails/phone numbers map to a YouMeOS Identity.
3.  **Birth of a Star:** 
    *   **Matched Contacts:** Instantly materialize in your 3D Starmap as fully formed Stars, pulling their avatar and aesthetic from their IPFS profile.
    *   **Unmatched Contacts:** Appear as "Protostars" or cosmic dust clouds. You can send them a "Spark" (an invite). If they join, their Protostar ignites into a Star.

### Establishing Orbits ("Friending")
*   "Adding a friend" is not a traditional bidirectional database row. It is establishing an **Orbit**.
*   When you choose to "Follow" or "Add" someone, you are sending a gravitational tether (via ActivityPub \`Follow\` event). This locks their Star into a stable orbit within your local UI, preventing them from drifting away due to inactivity.

## 3. Instance Federation (Websites as Stars)

YouMeOS transforms standard WordPress websites into interconnected spatial nodes.

### The ActivityPub Backbone
*   **Asynchronous Math:** We do not rely on expensive real-time multiplayer networking. Instead, we use **ActivityPub** (the W3C standard).
*   When Site A (e.g., a friend's blog) publishes a post or sends a message, it fires an ActivityPub event to Site B (your local node). 
*   Your local node stores this event, and the WebGL engine uses it to recalculate the Starmap math (increasing that site's brightness and pulling it closer).

### Cross-Instance Navigation (Wormholes)
*   When you click on a Star representing another website/installation, the engine triggers a "Wormhole" animation.
*   **The Sync Key Handshake:** Behind the scenes, your local node generates a cryptographic \`Sync Key\`. You are seamlessly transported to the new URL. The destination site verifies your key via Server-to-Server REST APIs, reads your IPFS backpack, and renders *their* Universe using *your* aesthetic preferences. You remain yourself, but you are now subject to their local permissions (AuthZ).

## 4. The Visual Architecture

To map this data to the legacy WebGL engine (\`tour.js\` and \`main.js\`), the Vue3 layer must bridge the gap:

1.  **Pinia Store (\`useStarmapStore\`):** Holds the sanitized ActivityPub graph (nodes and edges with interaction weights).
2.  **Physics Bridge:** A worker thread calculates the Barnes-Hut or simple force-directed graph math, assigning \`x, y, z\` coordinates to each contact.
3.  **WebGL Render:** The Vue app injects these coordinates into the Three.js \`pSystem\` (Particle System) or instanced \`starModel\` meshes, mapping the social graph into visual space.
`,Je=`---
title: Unified Contacts & Address Book
date: 2026-04-05
status: Draft / Brainstorming
category: Blueprint
---

# Unified Contacts & Address Book Blueprint

This document outlines the proposed architecture and integration path for a centralized Address Book ("Contacts Spark") within YouMeOS. The goal is to allow users to pull in and merge their contacts from external ecosystems (Google, Apple, Microsoft, GitHub) into a single, cohesive interface.

## Core Philosophy

Following modern OS paradigms (macOS, GNOME, Windows), YouMeOS will manage authentication and sync permissions globally via the system **Settings** Spark, rather than embedding complex OAuth flows directly into the Contacts app. The Contacts app itself acts as a lightweight display and organization layer over the synchronized data.

### Outstanding Design Decisions

1. **Data Persistence**
   - *Option A: Browser Local* (\`IndexedDB\`). Maximum privacy and zero backend overhead, but contacts exist only on the current device unless the user goes through the OAuth flow on every device.
   - *Option B: Cloud Hosted* (WordPress Event Horizon API). Synced securely to the user's data vault, persisting across devices automatically.
   - *Current Stance:* Actively debating. Likely starting with Browser Local Storage to reduce initial friction.

2. **OAuth Onboarding**
   - Requires setting up respective apps on Google Cloud Console and Microsoft Entra ID. 
   - *Current Stance:* On hold. When implemented, initial development will use mock adapters to build the UI before wiring real keys.

## Proposed Architecture

### 1. Synchronization Engine (\`useContactSync\`)

A dedicated composable (e.g., \`useContactSync.ts\`) or Pinia store that acts as the pipeline:
- Monitors the authenticated accounts list.
- Interrogates the "Sync Contacts" preference mapped to each account.
- Maps varying API response formats into a standardized \`CompassContact\` TypeScript interface.
- Executes deduplication logic (merging records with identical emails or phone numbers).

### 2. OS Settings Integration

The existing \`OnlineAccountsView.vue\` in the Settings spark will serve as the control center.
- **Location:** \`apps/youmeos/app/sparks/settings/views/OnlineAccountsView.vue\`
- **Additions:** Beneath each account's "Connect" option, a \`<v-switch>\` or equivalent checkbox will be offered specifically for "Sync Contacts".
- Toggling this will trigger the Synchronization Engine to perform a fetch or wipe.

### 3. The Contacts Spark (UI)

A dedicated spark established purely for the address book function.
- **Location:** \`apps/youmeos/app/sparks/contacts/\`
- **Layout Flow:** Split-pane design, with an alphabetical, virtualized list on the left and full contact detail view on the right.
- **Visuals:** Uses the \`x-avatar\` component. Profiles originating from connected accounts will bear a small provider badge (e.g., a tiny Google 'G' icon in the lower corner of the avatar).

## Implementation Steps (When Ready)

1. **Define Schema:** Solidify the \`CompassContact\` structure. Complete the mock generator in \`useContactSync\`.
2. **Build the Spark:** Scaffold the main window frame for the Contacts Spark and implement the virtualized list components.
3. **Upgrade Settings:** Add the necessary checkboxes to the Online Accounts view.
4. **Wire It Up:** Connect the UI arrays to the synchronization engine.
5. **Phase Two:** Implement the actual standard OAuth libraries.
`,Ze=`# YouMeOS: The Asynchronous Cosmos

This document defines how YouMeOS visualizes a decentralized internet using an "Observer-Centric" Noosphere without the need for expensive, real-time multiplayer telemetry (P2P/WebRTC). It outlines the mathematical ruleset for how interaction history generates the 3D cosmos.

## The Problem
Rendering an intergalactic network of 100k+ users crossing between individual decentralized nodes typically requires a real-time multiplayer engine. If a user moves their spaceship, everyone else needs the X/Y/Z telemetry instantly. This crashes databases and makes true decentralization over WordPress impossible.

## The YouMeOS Solution: Asynchronous, Observer-Centric Map
Because YouMeOS is a spatial operating system meant for long-term data navigation, not twitch-gaming, it uses an entirely different paradigm. 

The Noosphere is **deeply subjective.** Every user is the absolute center of their own universe (the Main Star/Sun). The stars around them are placed algorithmically based strictly on *historical interaction data*, not real-time telemetry. If another user moves their ship locally on their own screen, it does not matter to you.

### 1. The Protocol: ActivityPub Polling
Instead of a P2P graph database, YouMeOS Native relies structurally on **ActivityPub**. ActivityPub acts like standard HTTP REST polling natively built for the W3C Open Web (powering software like Mastodon).
*   Every time you follow someone, read their "Sparks" (messages), or reply to them, an ActivityPub event is recorded.
*   Your Vue3 WebGL engine simply digests a stream of these historical events from your local database.

### 2. Algorithmic Astrophysics
With your ActivityPub event stream in hand, the Vue3 engine calculates the physical properties of foreign Stars in your Noosphere using the following rules:

*   **Mass & Gravity (Proximity):** Determined by *interaction frequency*. If you constantly exchange DMs/Sparks with User B, the mathematical weight of that relationship increases their Mass. The heavier their Mass relative to yours, the stronger the gravitational pull. Over weeks, User B's Star will physically orbit closer and closer to your center Sun until they are in your immediate inner solar system.
*   **Brightness (Intensity):** Determined by *recency and volume*. If User C just dumped 50 new Sparks (photos, blogs) into their Oort Cloud, their Brightness spikes. They may be far away (low interaction mass), but they shine brilliantly, catching your eye across the Noosphere. If you interact with them, their Mass increases, pulling them closer.
*   **Cosmological Drift (Decay):** Over time, if relationships cool down, the system applies a time-decay algorithm to the Mass. A formerly close Star will slowly drift outwardly back into the distant Oort Cloud. 

## Result: A Living Social Graph
By rendering the Cosmos asynchronously, YouMeOS eliminates the overhead of multiplayer servers. Every user gets a completely unique, personalized galaxy where their closest friends and most interacted nodes literally form the constellations orbiting their world. ActivityPub provides all necessary data through simple webhooks.
`,en=`# YouMeOS: The Sovereign Node Architecture

This document outlines the infrastructure choices that allow YouMeOS to scale infinitely while remaining decentralized, leveraging WordPress as the core operating layer alongside Progressive Web App (PWA) client technologies.

## The Problem
Running a 4D WebGL-based universe is resource-intensive. Centralizing physics parsing, real-time shaders, and vast data stores on a single server kills scalability and runs contrary to decentralization. 

## The YouMeOS Solution
Because over **50% of the internet** is powered by WordPress, it serves as the ultimate "Trojan Horse" to construct an "Intergalactic Federation of Sites." Users do not need to learn a new, esoteric decentralized blockchain system. They simply install the YouMeOS plugin into WordPress.

### 1. WordPress as the "Main Star Processor"
Every YouMeOS instance is driven by a WordPress backend. Whether hosted on a standard $5 shared host or spun up locally, WP serves as the fundamental data-lake and API endpoint.
*   **Data Silo:** It securely handles user content (Sparks), Media (the Oort Cloud), and processes incoming ActivityPub federation updates from other nodes.
*   **The Power of Ecosystem:** Building strictly on WordPress means users can use 60,000+ existing plugins (WooCommerce, memberships, caching) to customize their personal Main Star node natively, without proprietary lockdowns.

### 2. The PWA (Progressive Web App) Front-End
The visual "Operating System" (built in Vue3, Vuetify, and WebGL) executes entirely on the user's local machine via a headless architecture layered over the WP REST API.
*   **Service Workers:** Once users load the YouMeOS dashboard, service workers cache the heavy WebGL engine, the 3D textures, and the core routing mechanics. Future loads happen instantly off the hard drive. 
*   **Instant UI:** Navigating Windows, accessing sparks, and rotating the camera around the Noosphere happen with zero-lag because "rendering" is decoupled from "database polling." 
*   **Installable:** It looks, feels, and installs exactly like a native OS Application on the user's tablet, phone, or desktop.

### 3. The Ultimate Goal: The "1-Click" Desktop Node
For true decentralization, a user shouldn't even need to rent a server. The roadmap builds toward a fully wrapped Desktop Application.
*   Using frameworks like **Tauri** or **Electron** bundled closely with lightweight development environments (like WordPress Studio or WP-Env SQLite), non-technical users will be able to download an \`.exe\` or \`.dmg\` that runs an entirely self-contained WordPress instance on their laptop hard drive.
*   **Sovereign Local-First:** They log into their Desktop App. They write their Sparks and view the WebGL Noosphere entirely offline. When they connect to the internet, their local WP node pushes their ActivityPub packets out to the broader internet.

This strategy ensures total data sovereignty while maintaining modern, high-tier visual fidelity through decoupling the processing engine (PWA local rendering) from the data vault (WP PHP/MySQL backend).
`,nn=`# YouMeOS: Sovereign Identity Architecture 

This document outlines the identity model for YouMeOS, detailing how users authenticate, maintain sovereignty, and traverse the Intergalactic Federation of Sites without relying on centralized Web 2.0 silos or gas-dependent Web 3.0 blockchains.

## The Problem
Traditionally, a user's identity is "owned" by the database of the platform they are visiting (e.g., a row in \`wp_users\`). If the platform goes down, or the user is banned, their identity and digital footprint vanish. 

## The YouMeOS Solution: Hybrid Sovereignty
YouMeOS utilizes a two-pronged approach, merging the simplicity of the open web (IndieAuth) with the cryptographic security of Web3 (DIDs). 

### 1. The Anchor: WordPress as the Main Star
In YouMeOS, **your WordPress URL is your identity**. This is achieved using **IndieAuth** (OAuth2 for the Open Web).
*   **The Passport URL:** When visiting a foreign YouMeOS node, you do not create an account. You enter your Main Star's URL (e.g., \`https://my-local-youmeos.com\`).
*   **The Handshake:** The foreign node temporarily redirects you to your Main Star, asking for cryptographic permission to log you in. Your Main Star validates the request and sends an authorization token back to the foreign node.
*   **Result:** You are authenticated on a foreign system without passwords, centralized databases, or third-party log-ins.

### 2. The Cryptographic Layer: Decentralized Identifiers (DIDs)
While URLs are excellent for human readability, raw cryptography is needed for immutable "Oort Cloud" asset ownership to ensure true data portability if your web host fails. 

*   **The DID Document:** Your Main Star (WordPress) automatically generates and publishes a \`did:web\` document at \`https://my-local-youmeos.com/.well-known/did.json\`. 
*   **Wallet Fallback:** Because this DID document contains public keys, a user can choose to authenticate using a standard Web3 wallet by signing a payload matching the public key registered in their DID document. **This requires absolutely zero gas or cryptocurrency**, it strictly uses the math behind the wallet.

## Portability of the Oort Cloud
When you log into a foreign node via IndieAuth or DID, you do not arrive empty-handed. Your authentication handshake passes pointers to your **Oort Cloud** (your avatar, bio, and public sparks). The foreign node renders your Star immediately using the data *you* host on your Main Star or via IPFS.

If you ever migrate from \`my-local-youmeos.com\` to a new domain, you simply update your DID registry, and your entire identity traverses with you, unbroken.
`,tn=`# YouMeOS Engine Integration

The **YouMeOS Engine** is a high-performance cosmic visualization and portal system, originally built with Three.js (r62) and now masterfully integrated into the **Xophz-COMPASS** ecosystem. It manages the rendering of 100,000+ stars and serves as the primary navigation gateway for the "Youniverse" experience.

---

## 🏗️ Architecture

The integration follows a sophisticated hybrid model, bridging legacy procedural logic with modern reactive Vue 3 patterns.

### 1. Modular Engine Control

The engine is no longer monolithic. It is managed via:

- **\`youmeos-app.vue\`**: The main entry point within the YouMeOS sub-app, responsible for the high-level layout and UI overlay.
- **\`youmeos.controller.ts\`**: Handles the lifecycle and interaction logic, coordinating between the Vue UI and the Three.js canvas.
- **\`useLegacyLoader.ts\`**: A dedicated Vue Composable that orchestrates the dynamic loading of legacy assets and scripts.

### 2. Entry Points & Routing

Standalone application gateways are located in the root \`/apps\` directory (e.g., \`/apps/youmeos/index.html\`) to separate portal logic from the main Compass SPA, allowing for specialized performance optimizations.

### 3. Portal Page Configuration

YouMeOS can be configured to load on different pages via **Settings → YouMeOS** in wp-admin:

| Mode | Behavior |
| :--- | :--- |
| **Routes Only** (default) | Serves YouMeOS on \`/youmeos/\` and \`/os/\` only |
| **Homepage** | Replaces the site's front page with YouMeOS |
| **Specific Page** | Loads YouMeOS on a chosen WordPress page |

The \`/youmeos/\` and \`/os/\` routes remain available regardless of the selected mode. Settings are stored in \`youmeos_load_mode\` and \`youmeos_load_page_id\` WP options.

### 4. Legacy Asset Management

Core logic, shaders, and textures are relocated to the plugin's public directory: \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy\`.

---

## ✨ Key Integration Features

### 🚀 Visionary Boot Sequence

The application features a perfectly choreographed boot sequence defined in \`apps/youmeos/config/loader-messages.ts\`.

- **Message Timing**: 1-second intervals for a rapid, high-tech experience.
- **Visual Stability**: Messages are centered and themed (e.g., "Calibrating Universe...", "Welcome to YouMeOS").
- **Automatic Reveal**: The UI fades in gracefully only after the engine signals readiness (\`window.hideLoader\`).

### 🌉 Global Event Bridge

The \`useLegacyLoader\` establishes a safety bridge between contexts:

- \`window.start()\`: Triggers the legacy engine initialization.
- \`window.setLoadMessage()\`: Allows legacy scripts to report status to the modern Vue loader.
- \`window.hideLoader()\`: Signals that the starfield is fully rendered and the UI can be revealed.

### 🌌 Cosmic Tour Choreography

Finalized tour choreography in \`tour.js\` provides an immersive onboarding experience:

- **Quartic Easing**: Smooth, cinematic camera movements.
- **Synchronized Transitions**: Message fade-out/in is perfectly timed with camera arrival at star clusters.
- **Star Presentation**: Integrated callbacks for highlighting Milky Way and star heat signatures.

### 💎 Design System Alignment

The "SuperDomX" aesthetic has been unified with the "Compass" design system:

- **Shared Primitive Mapping**: Legacy UI classes map to modern **X-Atom** (Primitives) mixins for a consistent glassmorphic look.
- **Typography**: **Orbitron** is the primary font, ensuring a high-tech, futuristic feel across both legacy and modern UI layers.

---

## 📈 Evolution & Roadmap

To ensure the system remains scalable and maintainable as it grows, the following improvements are being tracked:

| Feature                      | Status | Description                                                        |
| :--------------------------- | :----: | :----------------------------------------------------------------- |
| **Manifest-Driven Loading**  |   ✅   | Scripts and styles are loaded dynamically via \`manifest.json\`.     |
| **Modular Composablization** |  [/]   | Audio and Interface complete; Star Gen and Physics pending bridge. |
| **Shared Primitive Mapping** |   ✅   | Consistent glassmorphism across legacy and modern contexts.        |
| **Global Bridge (SDK)**      |   ✅   | Robust communication between Three.js and Vue 3.                   |
| **Cosmic Tour Refinement**   |   ✅   | Finalized choreography, easing, and message centering.             |
| **Advanced Asset Pipeline**  |   ⏳   | Implementation of **Basis** or **KTX2** for 100k+ star textures.   |
| **Physics Engine Bridge**    |   ⏳   | Exposing legacy inertia and physics to Pinia state.                |

### Detailed Progression

- [x] **Manifest-Driven Loading**
      Instead of hardcoding script sequences in \`youmeos-app.vue\`, implement a \`manifest.json\` generated by the PHP plugin. This allows for dynamic module loading and easier updates to engine components without frontend recompilation.

- [/] **Gradual "Composablization"**
  Wrap legacy features (Audio, Star Generation, Physics) into modern **Vue Composables** (e.g., \`useYouMeOSAudio()\`). While Audio and Interface are complete, Star Generation and Physics still need to be bridged to Reactive Vue (Pinia) to enable unified controls across the entire platform.

- [x] **Shared Primitive Mapping**
      Unify the "SuperDomX" aesthetic with the "Compass" design system by mapping legacy UI classes to modern **X-Atom** (Primitives) mixins. This allows for a consistent glassmorphic look without invasive code changes to the legacy engine.

- [x] **Centralized Environment Configuration**
      Move hardcoded paths (e.g., \`pluginPath\`) and server settings (e.g., \`devServerPort\`) into Vite \`.env\` files or a central \`config/\` directory.

- [ ] **Advanced Asset Pipeline**
      Implement a modern asset pipeline for the legacy textures (100k+ stars). Use compressed formats like **Basis** or **KTX2** and Vite's image optimization tools to reduce initial load times and GPU memory footprint.

- [x] **Global Event Bridge (SDK)**
      Establish a \`window.CompassBridge\` (and helpers like \`window.start\`, \`window.hideLoader\`) to facilitate safe communication between the modern Vue context and the legacy Global context, preventing \`ReferenceError\` or \`TypeError\` during complex cross-context interactions.

- [ ] **Physics Engine Bridge**
      Expose legacy inertia and physics parameters to Pinia state, allowing for modern UI sliders to control the starfield movement speed and direction in real-time.

---

> [!TIP]
> To modify the engine's boot sequence messages, visit **\`apps/youmeos/config/loader-messages.ts\`**. To adjust the tour choreography, see **\`public/youmeos_legacy/js/tour.js\`**.
`,on=`# Component Architecture

## Naming Conventions

### X-Components (\`x-*\`)

- **Location**: \`src/components/primitives/\`
- **Purpose**: Base "Compass" primitives.
- **Nature**: Wrappers around Vuetify \`v-*\` components or raw HTML.
- **Usage**: Universal building blocks available to all apps.
- **Examples**: \`x-btn\`, \`x-card\`, \`x-window\`.

### U-Components (\`u-*\`)

- **Location**: \`apps/youmeos/components/\`
- **Purpose**: YouMeOS-specific constructs.
- **Nature**: OS-level UI elements, windows, and widgets.
- **Usage**: Only within the YouMeOS context.
- **Examples**: \`u-window\`, \`u-taskbar\`, \`u-launcher\`.

## Component Types

1. **Primitives**: Dumb, functional atoms (Buttons, Inputs).
2. **Constructs**: Logical compositions (Dialogs, Windows).
3. **Blueprints**: Page-level layouts (Desktops, Dashboards).
`,an='# Component Refactoring Guide (Vuetify 3)\n\nThis document outlines the standard patterns to use when refactoring components in Xophz-COMPASS.\n\n> **Important**: Before using raw Vuetify components (`v-*`), check the [Design System: Atoms/Primitives](./Design-System-Atoms.md) to see if a pre-styled primitive (`x-*`) is available.\n\n## Game Engine Naming Convention\n\nWe use a video game-inspired naming convention instead of standard Atomic Design.\n\n| Atomic Term  | Game Engine Term | Description                       | Examples                          |\n| :----------- | :--------------- | :-------------------------------- | :-------------------------------- |\n| **Atom**     | **Primitive**    | Basic building blocks.            | `x-btn`, `x-icon`, `x-input`      |\n| **Molecule** | **Prefab**       | Reusable, interactive components. | `search-box`, `user-card`         |\n| **Organism** | **Construct**    | Complex, functional UI sections.  | `nav-drawer`, `dashboard-grid`    |\n| **Template** | **Blueprint**    | Page layouts and structures.      | `auth-layout`, `dashboard-layout` |\n| **Page**     | **Level**        | Specific views with data.         | `home-level`, `login-level`       |\n| **Hook**     | **Mechanic**     | Reusable logic and behaviors.     | `useNavigationMechanic`           |\n\n## Grid System\n\n### Legacy (Avoid)\n\n```html\n<v-layout\n  row\n  wrap\n>\n  <v-flex\n    xs12\n    sm6\n    >...</v-flex\n  >\n</v-layout>\n```\n\n### Modern (Standard)\n\n```html\n<v-row>\n  <v-col\n    cols="12"\n    sm="6"\n    >...</v-col\n  >\n</v-row>\n```\n\n## Spacing and Utility Classes\n\n### Spacing\n\nUse Vuetify\'s spacing utilities.\n\n| Class Pattern  | Description                              |\n| :------------- | :--------------------------------------- |\n| `ma-*`, `pa-*` | Margin/Padding all sides                 |\n| `mt-*`, `pt-*` | Margin/Padding top                       |\n| `mb-*`, `pb-*` | Margin/Padding bottom                    |\n| `ml-*`, `pl-*` | Margin/Padding left                      |\n| `mr-*`, `pr-*` | Margin/Padding right                     |\n| `mx-*`, `px-*` | Margin/Padding horizontal (left + right) |\n| `my-*`, `py-*` | Margin/Padding vertical (top + bottom)   |\n\n### Flexbox\n\n| Class                   | Description                   |\n| :---------------------- | :---------------------------- |\n| `d-flex`                | Display flex                  |\n| `d-none`                | Display none                  |\n| `align-center`          | Align items center            |\n| `align-start`           | Align items start             |\n| `justify-center`        | Justify content center        |\n| `justify-space-between` | Justify content space-between |\n\n## Vuetify Component Updates\n\n### Buttons\n\n- **Preferred**: Use `<x-btn>` instead of `<v-btn>` to ensure consistent flare.\n- Use `size="small"` instead of `small`.\n- Use `variant="text"`, `variant="outlined"`, `variant="tonal"`.\n- Use `start` or `end` props on `v-icon` inside buttons.\n\n### Chips and Avatars\n\n- Use `size="small"`, `size="x-small"`.\n- Use `v-avatar` with `start` or `end` inside chips.\n\n### List Items\n\nUse slots for prepend/append content:\n\n```html\n<v-list-item\n  title="Title"\n  subtitle="Subtitle"\n>\n  <template v-slot:prepend>\n    <v-icon>...</v-icon>\n  </template>\n</v-list-item>\n```\n\n## Typography\n\nUse Vuetify typography classes:\n\n- `.text-caption` for small notes.\n- `.text-h6`, `.text-h5` for headings.\n- `.text-mono` for technical data or HUD elements (technical monospace).\n- `.font-weight-bold` for bold text.\n\n## TypeScript in Templates\n\n> [!IMPORTANT] > **Do not use TypeScript-specific syntax (like `as any` or `as string`) inside `<template>` blocks.**\n\nVue templates are compiled to standard JavaScript and do not support TypeScript casting at runtime. This will cause a `SyntaxError` in the browser.\n\n### Correct Pattern\n\nIf you need to access properties on an object that TypeScript thinks is `any` or `unknown`, do one of the following:\n\n1. **Proper Prop Typing**: Use `PropType<T>` for props in your controller to ensure the template has the correct types.\n2. **Helper Methods**: Create a small helper method in your controller to perform the cast and return the typed value.\n3. **Reactive State**: Use properly typed `ref` or `computed` properties to expose the data to the template.\n\n#### Example (Prop Typing):\n\n```typescript\nprops: {\n  items: {\n    type: Array as PropType<MyItem[]>,\n    required: true\n  }\n}\n```\n\n#### Example (Helper Method):\n\n```typescript\nmethods: {\n  getMember(obj: any) {\n    return obj.member;\n  }\n}\n```\n\nIn template: `{{ getMember(item) }}`\n',sn=`# Design System: X-Primitives

Xophz-COMPASS uses a set of **Primitive** components that serve as thin wrappers around vanilla Vuetify elements. These components allow us to maintain a consistent "flare" or aesthetic across the application while retaining the full API and flexibility of Vuetify.

> **Note:** We use a **Game Engine-inspired naming convention**. What is traditionally called "Atoms" in Atomic Design, we call **Primitives**. See the [Component Refactoring Guide](./Component-Refactoring-Guide.md) for the full naming hierarchy.

---

## Core Principles

1.  **Prefix**: All primitives use the \`x-\` prefix (e.g., \`<x-btn>\`).
2.  **Transparent API**: Every primitive uses \`v-bind="$attrs"\` and forwards all \`$slots\`, ensuring they are drop-in replacements for their \`v-\` counterparts.
3.  **Flare**: Custom styles are defined in local \`_x-*.scss\` files within each component's folder, utilizing project variables for glassmorphism, backdrop blurs, and hover transitions.
4.  **File Structure**: Each primitive resides in its own folder: \`src/components/primitives/x-<name>/\`
    - \`x-<name>.vue\` — The template file
    - \`x-<name>.controller.ts\` — The script/logic
    - \`_x-<name>.scss\` — The scoped styles

---

> [!TIP] > **Interactive Reference**: You can see all these components and more in action at the **[Enchiridion Component Catalog](/wp-admin/admin.php?page=xophz-compass#/enchiridion/components)** (Route: \`/enchiridion/components\`).

---

## Component Hierarchy

We use a video game-inspired naming convention. See the [Component Refactoring Guide](./Component-Refactoring-Guide.md) for details.

| Level | Term          | Directory                    | Description                               |
| :---: | :------------ | :--------------------------- | :---------------------------------------- |
|   1   | **Primitive** | \`src/components/primitives/\` | Basic building blocks (\`x-btn\`, \`x-card\`) |
|   2   | **Prefab**    | \`src/components/prefabs/\`    | Reusable, interactive components          |
|   3   | **Construct** | \`src/components/constructs/\` | Complex, functional UI sections           |
|   4   | **Blueprint** | \`src/components/blueprints/\` | Page layouts and structural wrappers      |
|   5   | **Level**     | \`src/routes/.../\`            | Specific views with data (routed pages)   |

---

## Available Primitives

All primitives are globally registered and can be used without importing.

### Core Layout

| Component               | Vuetify Base            | Purpose                                |
| :---------------------- | :---------------------- | :------------------------------------- |
| \`<x-main>\`              | \`<v-main>\`              | Main content area                      |
| \`<x-app-bar>\`           | \`<v-app-bar>\`           | Top application bar                    |
| \`<x-system-bar>\`        | \`<v-system-bar>\`        | OS-style system bar with glassmorphism |
| \`<x-footer>\`            | \`<v-footer>\`            | Application footer                     |
| \`<x-navigation-drawer>\` | \`<v-navigation-drawer>\` | Side navigation drawer                 |
| \`<x-bottom-sheet>\`      | \`<v-bottom-sheet>\`      | Bottom sheet overlay                   |

### Buttons & Controls

| Component        | Vuetify Base   | Purpose                             |
| :--------------- | :------------- | :---------------------------------- |
| \`<x-btn>\`        | \`<v-btn>\`      | Button with custom hover lift       |
| \`<x-switch>\`     | \`<v-switch>\`   | Toggle switch with micro-animations |
| \`<x-checkbox>\`   | \`<v-checkbox>\` | Checkbox with subtle glow effects   |
| \`<x-go-btn>\`     | —              | Custom navigation/action button     |
| \`<x-toggle-btn>\` | —              | Custom toggle button                |

### Display & Data

| Component             | Vuetify Base          | Purpose                                 |
| :-------------------- | :-------------------- | :-------------------------------------- |
| \`<x-card>\`            | \`<v-card>\`            | Glass card with glassmorphism aesthetic |
| \`<x-glass-card>\`      | —                     | Premium frosted glass card              |
| \`<x-table>\`           | \`<table>\`             | Styled table with uppercase headers     |
| \`<x-data-table>\`      | \`<v-data-table>\`      | Glassmorphic data table                 |
| \`<x-chip>\`            | \`<v-chip>\`            | Chip with hover scaling                 |
| \`<x-avatar>\`          | \`<v-avatar>\`          | Avatar with duotone support             |
| \`<x-divider>\`         | \`<v-divider>\`         | Divider with optional gradient flare    |
| \`<x-icon>\`            | \`<v-icon>\`            | Icon with themed color support          |
| \`<x-skeleton-loader>\` | \`<v-skeleton-loader>\` | Loading placeholder                     |
| \`<x-powerline>\`       | —                     | Segmented status bar using chevrons (\`>\`) |
| \`<x-iframe>\`          | \`<iframe>\`            | Transparent iframe with \`color-scheme\` fix|

### Forms & Inputs

| Component        | Vuetify Base     | Purpose                             |
| :--------------- | :--------------- | :---------------------------------- |
| \`<x-text-field>\`   | \`<v-text-field>\`   | Text input with consistent styling      |
| \`<x-select>\`       | \`<v-select>\`       | Dropdown select with custom borders     |
| \`<x-autocomplete>\` | \`<v-autocomplete>\` | Autocomplete with project-specific look |
| \`<x-slider>\`       | \`<v-slider>\`       | Slider with full height support         |

### Lists & Navigation

| Component            | Vuetify Base    | Purpose                      |
| :------------------- | :-------------- | :--------------------------- |
| \`<x-list>\`           | \`<v-list>\`      | Transparent list container   |
| \`<x-list-item>\`      | \`<v-list-item>\` | List item with hover states  |
| \`<x-nav-item.vue>\`   | —               | Navigation item for menus    |
| \`<x-nav-avatar.vue>\` | —               | Avatar-based navigation item |

### Overlays & Feedback

| Component      | Vuetify Base   | Purpose                                          |
| :------------- | :------------- | :----------------------------------------------- |
| \`<x-dialog>\`   | \`<v-dialog>\`   | Modal dialog with glass content class            |
| \`<x-window>\`   | —              | Draggable, resizable window with OS-style header |
| \`<x-menu>\`     | \`<v-menu>\`     | Dropdown menu with glass styling                 |
| \`<x-snackbar>\` | \`<v-snackbar>\` | Toast notification with \`rough-glass\`            |

### Plugin-Specific

| Component              | Purpose                                   |
| :--------------------- | :---------------------------------------- |
| \`<x-plugin-icon>\`      | Renders a WordPress plugin's icon         |
| \`<x-plugin-image>\`     | Renders a WordPress plugin's banner image |
| \`<x-pulsing-ring>\`     | Animated ring effect for visual feedback  |
| \`<x-background-smoke>\` | Animated smoke/fog background effect      |

---

## Usage Examples

### Buttons (\`x-btn\`)

Standard button with a custom hover lift and project-specific weight.

\`\`\`html
<x-btn
  color="primary"
  @click="doSomething"
>
  Save Action
</x-btn>
\`\`\`

### Cards (\`x-card\`)

Implements the core glassmorphism aesthetic.

\`\`\`html
<x-card class="pa-4">
  <v-card-title>Header</v-card-title>
  <v-card-text>Content goes here.</v-card-text>
</x-card>
\`\`\`

### Input Fields (\`x-text-field\`, \`x-select\`)

Standard inputs with consistent border-radius and focus rings.

\`\`\`html
<x-text-field
  label="Username"
  v-model="user"
/>
<x-select
  :items="options"
  label="Choose Category"
/>
\`\`\`

### Selection Controls (\`x-checkbox\`, \`x-switch\`)

Interactive controls with subtle micro-animations and glow effects.

\`\`\`html
<x-checkbox label="Draft Mode" />
<x-switch
  label="System Active"
  color="success"
/>
\`\`\`

### Chips & Avatars (\`x-chip\`, \`x-avatar\`)

Standard chips with project-specific hover scaling and duotone support.

\`\`\`html
<x-avatar size="48">
  <v-img :src="profilePic" />
</x-avatar>

<x-chip
  variant="tonal"
  color="info"
>
  Level 99
</x-chip>
\`\`\`

### Lists (\`x-list\`, \`x-list-item\`)

Clean list layouts that preserve transparency and add hover states to items.

\`\`\`html
<x-list>
  <x-list-item
    title="Profile"
    prepend-icon="fa-user"
  />
  <x-list-item
    title="Settings"
    prepend-icon="fa-cog"
  />
</x-list>
\`\`\`

### Menu & Dialog (\`x-menu\`, \`x-dialog\`)

Overlays that automatically apply the COMPASS glassmorphism content classes.

\`\`\`html
<x-menu>
  <template #activator="{ props }">
    <x-btn v-bind="props">Open Menu</x-btn>
  </template>
  <x-list>...</x-list>
</x-menu>

<x-dialog v-model="showModal">
  <x-card>...</x-card>
</x-dialog>
\`\`\`

### Tables (\`x-table\`)

Sleek, transparent tables with bold, uppercase headers and standardized row spacing.

\`\`\`html
<x-table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Active</td>
    </tr>
  </tbody>
</x-table>
\`\`\`

### Powerline Stats (\`x-powerline\`)

A segmented, chevron-styled stats bar designed to sit at the bottom of cards (\`zsh\` powerline aesthetic). It accepts an array of \`items\` containing \`label\`, \`value\`, \`icon\`, and \`color\`.

\`\`\`html
<x-powerline 
  :items="[
    { label: 'TEMP', value: '2198K', color: 'rgba(0,0,0,0.4)', icon: 'fas fa-fire' },
    { label: 'MASS (M☉)', value: '1.04', color: 'rgba(0,0,0,0.3)' }
  ]" 
  :flush="true" 
/>
\`\`\`

### Iframes (\`x-iframe\`)

A wrapper for standard \`iframe\` elements that ensures transparent backgrounds work across environments by explicitly resetting \`color-scheme: normal\`.

\`\`\`html
<x-iframe
  src="/wp-admin/admin.php?page=plugin-slug"
  name="compass-sub-app"
/>
\`\`\`

### Data Tables (\`x-data-table\`)

A wrapper for \`v-data-table\` that applies glassmorphism transparency and styling to headers and rows.

\`\`\`html
<x-data-table
  :headers="headers"
  :items="items"
/>
\`\`\`

### Dividers (\`x-divider\`)

Standard dividers with added support for gradient flare via the \`inset\` prop.

\`\`\`html
<x-divider class="my-4" /> <x-divider inset />
<!-- Shows a gradient flare divider -->
\`\`\`

---

## Global Registration

Primitives are auto-registered via the \`primitives.ts\` plugin in \`src/engine/primitives.ts\`. This plugin scans all \`.vue\` files within \`src/components/primitives/\` and registers them globally.

**You do NOT need to import primitives manually in your \`.vue\` files.**

Both PascalCase (\`<XBtn>\`) and kebab-case (\`<x-btn>\`) naming conventions are supported.

\`\`\`typescript
// src/engine/primitives.ts
const primitives = import.meta.glob("@primitives/**/*.vue", { eager: true });

export default {
  install(app: App) {
    Object.entries(primitives).forEach(([path, definition]) => {
      const filename = path
        .split("/")
        .pop()
        ?.replace(/\\.\\w+$/, "");
      if (filename) {
        const pascalName = upperFirst(camelCase(filename));
        app.component(pascalName, definition.default);
        if (filename !== pascalName) {
          app.component(filename, definition.default);
        }
      }
    });
  }
};
\`\`\`

---

## Creating New Primitives

When creating a new primitive:

1.  **Create the folder**: \`src/components/primitives/x-<name>/\`
2.  **Add the files**:
    - \`x-<name>.vue\` — Template with \`v-bind="$attrs"\` and slot forwarding
    - \`x-<name>.controller.ts\` — \`defineComponent({ name: 'X<Name>' })\`
    - \`_x-<name>.scss\` — Scoped styles using project variables
3.  **Ensure it's picked up** by the auto-registration in \`src/engine/primitives.ts\`.
4.  **Document it** in this file under the appropriate category

### Template Pattern

\`\`\`vue
<template>
  <v-<base-component> v-bind="$attrs" class="x-<name>">
    <template v-for="(_, slot) in $slots" #[slot]="scope">
      <slot :name="slot" v-bind="scope || {}" />
    </template>
  </v-<base-component>>
</template>

<script lang="ts" src="./x-<name>.controller.ts"><\/script>
<style lang="scss" src="./_x-<name>.scss"></style>
\`\`\`

---

## When to Use Native Vuetify (\`v-*\`)

Use raw Vuetify components only when:

- **Layout components**: \`<v-row>\`, \`<v-col>\`, \`<v-container>\`, \`<v-spacer>\`
- **Complex widgets**: \`<v-tabs>\`, \`<v-window>\`, \`<v-progress-linear>\`, \`<v-stepper>\` (when no \`x-\` wrapper exists)
- **Sub-components**: \`<v-card-title>\`, \`<v-card-text>\`, \`<v-list-item-title>\`, etc.

---

## Related Documentation

- [Component Refactoring Guide](./Component-Refactoring-Guide.md) — Migration patterns and game engine naming
- [Project Philosophy](./Project-Philosophy.md) — Design pillars and UX principles
- [Architecture & Migration](./Architecture-and-Migration.md) — Tech stack and project structure
`,rn=`# Sub-App Layout & Bazaar Routing Investigation

## Summary

Investigated issues with the Bazaar sub-app layout not rendering correctly. The root cause was determined to be **route configuration and component hierarchy**.

## Key Findings

### 1. Route Structure Issue

The \`/bazaar\` route was configured with nested child routes but the parent \`bazaar.vue\` component wasn't properly set up to render child content via \`<router-view>\`.

**Before:**

\`\`\`
/bazaar → bazaar.vue (no nested router-view)
/bazaar/dashboard → child route (never rendered)
\`\`\`

### 2. x-sub-app-layout Component

Located at: \`src/components/templates/x-sub-app-layout/\`

This template component provides:

- Standard sub-app header/navigation structure
- Sidebar layout support
- Content area with proper scrolling
- Integration with app-level state

**Usage Pattern:**

\`\`\`vue
<template>
  <x-sub-app-layout>
    <template #sidebar>...</template>
    <template #content>...</template>
  </x-sub-app-layout>
</template>
\`\`\`

### 3. Controller Pattern

The codebase uses a controller pattern (\`*.controller.ts\`) to separate business logic from Vue components. Controllers handle:

- State management
- API calls
- Business logic

### 4. Billboard vs Dashboard Routes

- \`/bazaar\` → Main bazaar view (billboard/landing)
- \`/bazaar-dash\` → Dashboard variant (separate top-level route)
- \`/bazaar/dashboard\` → Nested dashboard (requires parent router-view)

## Recommendations

1. **For nested routes**: Ensure parent component includes \`<router-view>\` to render children
2. **For layouts**: Use \`x-sub-app-layout\` template for consistent sub-app structure
3. **For controllers**: Keep Vue components thin, delegating logic to controllers

## Files Examined

- \`src/routes/bazaar/bazaar.vue\`
- \`src/routes/bazaar/bazaar.controller.ts\`
- \`src/routes/bazaar/routes/bazaar-dash/bazaar-dash.vue\`
- \`src/components/blueprints/layouts/x-sub-app-layout/x-sub-app-layout.vue\`
- \`src/components/blueprints/layouts/x-sub-app-layout/x-sub-app-layout.controller.ts\`
- \`src/mount-app.ts\` (route and app initialization)
`,ln=`# Project Roadmap

## 🚩 Milestone 1: The Alpha Release (Current Focus)

**Theme:** "Systems Online"
**Goal:** Establish a stable, "Wow"-inducing core for early adopters and demonstrate the power of the Compass Ecosystem.

### 🌟 Core Experience (The "OS" Feel)

- [ ] **Holographic Snap Previews**:
    -   *Objective*: Visual "ghost" overlays when dragging windows to screen edges (Aero Snap).
    -   *Status*: **Pending Implementation**.
- [ ] **Magic Cloak (System Intelligence)**:
    -   *Objective*: Contextual help system that gives the OS a "voice".
    -   *Status*: **In Progress**.

### 📦 Compass Ecosystem (Plugins)

We are prioritizing plugins based on completeness and "Hero" potential.

#### 💣 Bomb Bag (The Hero)
**Domain:** Email Marketing & Audience Relationship Management.
*Why?*: It is the most technically mature plugin and demonstrates high-value business logic.

- [ ] **UI Polish**: Verify layouts match the Sub-App Billboard/Drawer pattern.
- [ ] **Functionality**: Ensure Campaigns and Subscribers can be managed via API.

#### 🔮 Magic Cloak (The Support)
**Domain:** User Onboarding & Contextual Help.
*Why?*: It reinforces the "Agentic" nature of the OS.

- [ ] **Hint Fetching**: Connect frontend to the WordPress \`compass_cloak_hint\` CPPT.
- [ ] **Editor**: functional UI for creating new hints.

### 💤 Deprioritized / Future Milestones (Beta)

- **Alphabet Soup (Content)**: Currently a shell. Will be revisited in Beta.
- **Bazaar (Commerce)**: Complex logic; deferred until Alpha foundation is solid.
- **Silver Arrow / Titans Mitt**: Utility plugins deferred.

---

## 🔮 Future Horizons

### Milestone 2: The Beta (Connectivity)
-   **Noosphere**: Public profiles and social graph.
-   **Bazaar**: Full commerce integration.

### Milestone 3: 1.0 Release (Sovereignty)
-   **Moving Castle**: Multisite management.
-   **Production Security Review**.
`,dn=`# Project Migration Progress

## Completed Tasks

### Store Migration (Vuex -> Pinia)

- [x] **Alphabet Soup Module**: Migrated to Pinia, updated controllers. (Now part of general content management).
- [x] **Bazaar Module**: Migrated to Pinia, updated controllers.
- [x] **Compass Module**: Migrated to Pinia, updated controllers.
- [x] **XP Module**: Migrated to Pinia, updated controllers.
- [x] Removed legacy \`src/app.store.js\`.

### Framework & Styles

- [x] Removed **Bootstrap** dependencies and SCSS imports.
- [x] Updated to **Vuetify 3** and resolved major migration hurdles.
- [x] Established **X-Primitives** (Atoms) system with global registration via \`src/engine/primitives.ts\`.
- [x] Created premium **Glassmorphism** utility system (\`.glass\`, \`.rough-glass\`).
- [x] Implemented **Barrel Export** pattern in \`src/engine/index.ts\`.
- [x] Integrated **ECharts** for high-performance data visualization.

### UI Refactoring (Vuetify 3 + X-Primitives)

- [x] **Index / Root Layout**: Refined header, breadcrumbs, and billboard integration.
- [x] **Compass Module**:
  - [x] \`compass.vue\`: Refined custom stepper layout with glass HUD aesthetic.
  - [x] \`compass-dashboard.vue\`: Refactored to Vuetify 3/X-Primitives.
  - [x] \`compass-explore.vue\`: Refactored to Vuetify 3/X-Primitives.
- [x] **XP Module**:
  - [x] \`xp-categories.vue\`: Modernized list items and grid.
  - [x] \`xp-leaderboard.vue\`: Modernized cards and dialogs.
- [x] **Bomb Bag Module**:
  - [x] Refactored routes and modernised UI with pink (#ED55A9) accent theme.

## In Progress / Next Steps

- [ ] **Mobile Responsive Pass**: Ensure all refactored layouts work well on mobile.
- [x] **Bootstrap Variable Cleanup**: Fully remove unneeded variables from \`_variables.scss\`.
- [ ] **Magic Cloak System**: Complete dynamic hint fetching from \`compass_cloak_hint\` CPPT.
- [ ] **Documentation overhaul**: Update all system docs to match current architecture.
`,cn=`# YouMeOS: The 4D Tesseract Visualization Plan

## Overview

The **Tesseract** is the 4D extension of the YouMeOS canvas. It transforms the 3D celestial navigation into a living history by treating **Time as the Y-Axis (Verticality)**. This allows users to visualize their digital footprint and interactions as spatial objects that can be navigated, scrubbed, and "pulled" into the present.

---

## 1. Core Concept: The Vertical Temporal Strand

Instead of a "Star" or "Spark" being a static point in 3D space, every object in the Tesseract is a **Temporal Strand**, a vertical filament of light extending downwards from the current "Universal Now" (the Base Plane).

### The Spatial Mapping (XYZ + T)
*   **X & Z (Celestial Position):** Represents the *identity* or *context* of the object (e.g., its coordinate in the Hipparcos galaxy or its orbital distance in the Helios solar system).
*   **Y (Temporal Offset):** Represents the *timestamp*. 
    *   \`Y = 0\`: The Present (The Base Plane).
    *   \`Y < 0\`: The Past (Deep History).
    *   \`Y > 0\`: Predicted or Scheduled Events (The Future).

---

## 2. Visualizing "The Pull" (Data Interaction)

The "4D" aspect comes alive through the interaction between the user's **Sun (Sol)** and the surrounding **Stars (Galaxies)**.

### Data Pulses (Sparks)
When a user "pulls" data from a star (e.g., viewing a Facebook post or a YouTube video), the interaction is visualized as a **Data Pulse**:
1.  **Origin:** A glowing spark ignites on the target Star's strand at a specific historical \`Y\` coordinate.
2.  **Traversal:** The spark travels along a relationship thread (the "Hipparcos Line") toward the user's central Sun.
3.  **Impact:** As the spark arrives at the Sun, it "ignites" or updates a local Spark (App/Planet), visualizing the transfer of information from the "Them" to the "You."

---

## 3. The Navigation Levels (Nexos vs. Helios)

The w⁴ Protocol manifests differently depending on the user's perspective:

### The Nexos (Hipparcos) Tesseract
*   **Visualization:** A dense forest of vertical strands representing the interaction history of all connected users/stars.
*   **Use Case:** Seeing "Cluster Clouds" where many strands are connected by horizontal relationship threads at the same \`Y\` level, indicating a shared global event or viral moment.

### The Helios (Solar System) Tesseract
*   **Visualization:** A focused view of the user's own "Oort Cloud" and planetary Sparks.
*   **Use Case:** Looking down through the "Pictures" or "Messages" planets to see a vertical stack of historical snapshots, allowing for "Time-Travel" through your own content.

---

## 4. User Interaction: The "Chronos" Scrubber

To navigate the 4D Tesseract, the **Compass Suite** UI provides a "Temporal Scrubber":
*   **Slicing the Tesseract:** Moving the scrubber slides a horizontal "Clipping Plane" up and down the Y-axis.
*   **State Reconstruction:** As the plane moves, the 3D objects on the canvas (Stars/Planets) update their size, color, and relations to match the historical data at that exact \`Y\` level.
*   **Ghosting:** Objects from the "Future" or "Deeper Past" appear as faint, translucent silhouettes, providing context for the current temporal slice.

---

## 5. Technical Requirements (Simple Start)

1.  **Temporal Buffer:** A centralized store to track \`(id, timestamp, data)\` snapshots.
2.  **Strand Shader:** A custom shader for \`THREE.Line\` or \`THREE.Points\` that renders vertical filaments with a "breathing" neon pulse.
3.  **Global Time Ref:** A reactive variable in the \`useChronos\` store that drives the Y-offset of all canvas objects.

---

## 6. Philosophy: The "Ancient-Future" Logbook

By visualizing time as a physical dimension, we move away from the "infinite scroll" of Web2 and toward a "celestial record." The w⁴ Protocol makes the intangible nature of data history something you can literally fly through, touch, and reorganize.
`,pn=`# Three.js Legacy Migration Guide

This document tracks breaking changes and migration steps for Three.js, from r56 to r183.
**Current Project Version:** \`0.182.0\` (as per \`package.json\`)
**Target Legacy Version:** \`r62\` (approximate legacy code base version)

Use this guide to upgrade legacy components.

## Detected Legacy Usage in Codebase

The following files utilize deprecated Three.js classes and need migration:

### \`THREE.Geometry\` (Removed in r125)

- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/plane.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/util.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/solarsystem.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/infocallout.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/hipparcos.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/guides.js\`

### \`THREE.ParticleSystem\` / \`THREE.ParticleBasicMaterial\` (Removed in r62/r68)

- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/solarsystem.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/galaxy.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/guides.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/hipparcos.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/dust.js\`
- \`wp-content/plugins/xophz-compass-event-horizon/public/js/engine/solarsystem.js\`

**Action Plan:**

1.  Replace \`THREE.Geometry\` with \`THREE.BufferGeometry\`.
2.  Replace \`THREE.ParticleSystem\` with \`THREE.Points\`.
3.  Replace \`THREE.ParticleBasicMaterial\` with \`THREE.PointsMaterial\`.

## Migration Log

### 182 → 183

- **Clock**: Deprecated. Use \`Timer\` instead.
- **WebGPURenderer**: Shadows improved. Remove/decrease shadow bias values used to mitigate acne.
- **RoomEnvironment**: Scene position updated. PMREM lighting will look different. See #32646.
- **Sky/SkyMesh**: Legacy gamma correction removed. Visuals will differ; no parameter restoration available. See #32677.
- **MeshPostProcessingMaterial**: Removed.

### 181 → 182

- **WebGLRenderer**: \`PCFSoftShadowMap\` deprecated. Use \`PCFShadowMap\` (now soft).
- **WebGPURenderer**: \`colorBufferType\` -> \`outputBufferType\`. \`getColorBufferType()\` -> \`getOutputBufferType()\`.
- **VOXLoader**: \`load()\` changed. \`onLoad()\` callback now returns a scene with parsed meshes. #32488.

### 180 → 181

- **PBR Materials**: Indirect specular light computation improved. Rough materials (> 0.5) conserve energy better and appear brighter.
- **PMREM**: Reflections improved.
- **WebGPURenderer**: Async methods (\`renderAsync\`, \`computerAsync\`, \`clearAsync\`, etc.) deprecated. Initialize via \`await renderer.init()\` or \`renderer.setAnimationLoop()\`.
- **WebGPURenderer**: \`waitForGPU()\` removed.
- **KTX2Loader**: \`detectSupportAsync()\` deprecated. Use \`detectSupport()\` after renderer init.
- **TSL**: \`PI2\` -> \`TWO_PI\`.
- **GTAONode**: Internal AO render target optimized to \`r\` channel. Blend formula: \`vec4( scenePassColor.rgb.mul( aoPass.r ), scenePassColor.a )\`.
- **PassNode**: \`setResolution()\` -> \`setResolutionScale()\`, \`getResolution()\` -> \`getResolutionScale()\`.
- **AfterImageNode**: \`damp\` property is now \`Node<float>\`.
- **WaterMesh**: \`resolution\` -> \`resolutionScale\`.
- **Docs**: New API docs based on JSDoc. No i18n support.

### 179 → 180

- **DepthOfFieldNode**: New implementation/API. See \`webgpu_postprocessing_dof\`.
- **RGBELoader**: Renamed to \`HDRLoader\`.
- **RGBMLoader**: Removed. Use \`EXRLoader\`, \`HDRLoader\`, \`HDRCubeTextureLoader\` meant for HDR or \`UltraHDRLoader\`.
- **PostProcessing Nodes**: \`resolution\` -> \`resolutionScale\` (scalar, not Vector2) for \`ReflectorNode\`, \`AnamorphicNode\`, \`GaussianBlurNode\`.
- **WebGLRenderer**:
  - \`USE_REVERSEDEPTHBUF\` -> \`USE_REVERSED_DEPTH_BUFFER\`.
  - \`USE_LOGDEPTHBUF\` -> \`USE_LOGARITHMIC_DEPTH_BUFFER\`.

### 178 → 179

- **Timer**: Moved to core (THREE namespace).
- **USDZLoader**: Deprecated. Use \`USDLoader\`.
- **TRAAPassNode**: Now \`TRAANode\`, requires new setup.
- **WebGLRenderer**: \`reverseDepthBuffer\` parameter -> \`reversedDepthBuffer\`.
- **TSL**: \`label()\` -> \`setName()\`.
- **GaussianBlurNode**: Improved blur. Custom sigma values must be doubled.

### 177 → 178

- **Blending**: \`MultiplyBlending\` and \`SubtractiveBlending\` require \`Material.premultipliedAlpha = true\`.

### 176 → 177

- **ColorManagement**:
  - \`fromWorkingColorSpace()\` -> \`workingToColorSpace()\`.
  - \`toWorkingColorSpace()\` -> \`colorSpaceToWorking()\`.
- **JSON Object Scene**: Version 4.6 -> 4.7.
- **GLTFExporter**: Pushes parent node indices first.
- **PeppersGhostEffect**: Removed.

### 175 → 176

- **CapsuleGeometry**: \`length\` -> \`height\`.
- **GLTFLoader**: WebP/AVIF support detection removed.
- **LottieLoader**: Deprecated. Use \`lottie-web\`.

### 174 → 175

- **AnimationClip**: \`parseAnimation()\` deprecated.
- **ParametricGeometries**: Renamed to \`ParametricFunctions\`. Inner classes removed.
- **LUTImageLoader**: Constructor changed (only loading manager). Flip handled by property.
- **SMAAPass/HalftonePass**: \`width\`/\`height\` removed from constructor.
- **Controls**: \`connect()\` requires DOM element.

### 173 → 174

- **Timer**: No longer uses Page Visibility API automatically. Call \`timer.connect( document )\` for old behavior.
- **RenderTarget**: \`clone()\` performs full structural clone (no texture sharing).

### 172 → 173

- **MeshGouraudMaterial**: Deprecated. Use \`MeshLambertMaterial\`.
- **InstancedPointsNodeMaterial**: Removed. Use \`PointsNodeMaterial\`.
- **TSL**:
  - \`varying()\` -> \`toVarying()\`.
  - \`vertexStage()\` -> \`toVertexStage()\`.

### 171 → 172

- **TextureNode**: \`uv()\` -> \`sample()\`.
- **TSL**:
  - \`rangeFog()\` -> \`fog( color, rangeFogFactor() )\`.
  - \`densityFog()\` -> \`fog( color, densityFogFactor() )\`.
  - \`materialAOMap\` -> \`materialAO\`.
  - \`shadowWorldPosition\` -> \`shadowPositionWorld\`.
- **DotScreenNode**: \`center\` property removed.
- **PostProcessingUtils**: Renamed to \`RendererUtils\`.

### 170 → 171

- **WebGPURenderer Imports**: Use \`three/webgpu\` and \`three/tsl\`.
- **TSL**: Renamed blending functions (\`burn\` -> \`blendBurn\`, etc.). \`storageObject()\` -> \`storage().setPBO( true )\`.

### 169 → 170

- **Material.type**: Now static, cannot be modified.
- **TSL**: Modules moved to addons.
- **Texture**: Mipmaps always generated if \`generateMipmaps\` is true.
- **GLTFExporter**: Non-PBR \`metallicFactor\` 0, \`roughnessFactor\` 1.
- **MMD Modules**: Deprecated.
- **WebGLRenderer**: \`copyTextureToTexture3D()\` deprecated -> \`copyTextureToTexture()\`.
- **WebXRManager**: Honors camera layers.
- **CinematicCamera**: Removed.
- **LDrawLoader**: Conditional line material injection restriction.

### 168 → 169

- **TransformControls**: Derived from \`Controls\`. Use \`scene.add( controls.getHelper() )\`.
- **Exporters**: \`EXRExporter\`, \`KTX2Exporter\`, \`LightProbeGenerator\` methods now async.
- **PackedPhongMaterial**: Removed.
- **SDFGeometryGenerator**: Removed.
- **TiltLoader**: Removed.
- **GPUStatsPanel**: Removed. Use \`stats-gl\`.
- **GeometryCompressionUtils**: Accepts geometries, not meshes.

### 167 → 168

- **TSL**: Chaining removed (e.g., \`fxaa( outputPass )\` instead of \`outputPass.fxaa()\`).
- **TSL**: \`viewportTopLeft\` -> \`viewportUV\`, \`viewportBottomLeft\` removed (use flipY), \`uniforms()\` -> \`uniformArray()\`.
- **DragControls**: \`activate/deactivate\` -> \`connect/disconnect\`. Getters/setters removed for properties.
- **PointerLockControls**: \`getObject()\` -> \`object\`.
- **LogLuvLoader**: Removed.

### 166 → 167

- **WebGPURenderer/TSL**: Imports changed.
- **HDRJPGLoader**: Removed. Use \`UltraHDRLoader\`.
- **LDrawLoader**: recursive pack script renamed to \`.mjs\`.

### 165 → 166

- **BatchedMesh**: Must call \`addInstance()\` after adding geometry.

### 164 → 165

- **WebGLRenderer**: \`copyTextureToTexture\` and \`copyFramebufferToTexture\` signatures changed (added region/level support).

### 163 → 164

- **LWOLoader**: Coordinate system changed (left to right-handed).
- **USDZLoader**: \`parse\` -> \`parseAsync\`.
- **Shaders**: \`lightmap_fragment\` removed.
- **WebGLNodeBuilder**: Removed.

### 162 → 163

- **WebGLRenderer**: WebGL 1 support dropped. Stencil \`false\` by default.
- **TextGeometry**: \`height\` -> \`depth\`.
- **Scene.environment**: Attenuate with \`environmentIntensity\`. Material \`envMapIntensity\` only affects material envMap.

### 161 → 162

- **WebGLMultipleRenderTargets**: Removed. Use \`count\` property.
- **Hand-Tracking**: Manual request required.
- **InteractiveGroup**: API changed (\`listenToXRControllerEvents\`, \`listenToPointerEvents\`).
- **HTMLImageElement**: Uses \`naturalWidth\`/\`naturalHeight\` for dimensions.

### 160 → 161

- **Build Files**: \`build/three.js\` removed. Use ES modules.
- **WebGLRenderer**: Precision qualifiers for samplers.
- **GroundProjectedSkybox**: Replaced with \`GroundedSkybox\`.
- **Equirectangular**: Auto-converts to cube map (higher memory).

### 159 → 160

- **HBAOPass**: Replaced with \`GTAOPass\`.
- **Triangle**: Updates to \`getBarycoord\` / \`getInterpolation\`.

### 158 → 159

- **BatchedMesh**: \`applyGeometry()\` -> \`addGeometry()\`.
- **BufferAttributes**: \`updateRange\` -> \`updateRanges\`.
- **SkinnedMesh**: No WebGL 1 support.

### 157 → 158

- **Quaternions**: Must be normalized.
- **Materials**: \`bumpScale\` invariant to UV scale.

### 156 → 157

- **LightProbe**: Ambient/Hemisphere probes removed.
- **GLSL**: \`GeometricContext\` removed.
- **AnimationUtils**: \`arraySlice()\` removed.

### 155 → 156

- **FilmPass**: \`scanlines\` params removed.
- **SAOPass**: \`useDepthTexture\`/\`useNormals\` removed.
- **SSAOPass**: Requires prior RenderPass.

### 154 → 155

- **WebGLRenderer**: \`useLegacyLights\` false by default (deprecated).
- **ToneMapping**: Inline only works for screen. Use \`OutputPass\` for post-processing.
- **OutputPass**: No constructor params.

### 153 → 154

- **Shaders**: \`encodings_fragment\` -> \`colorspace_fragment\`, \`output_fragment\` -> \`opaque_fragment\`.

### 152 → 153

- **WebGL 1**: Deprecated.
- **EffectComposer**: Default \`HalfFloatType\`.
- **AdaptiveToneMappingPass**: Removed.
- **CubeTextureLoader**: sRGB by default.

### 151 → 152

- **UVs**: \`uv\`, \`uv2\`, \`uv3\`, \`uv4\` -> \`uv\`, \`uv1\`, \`uv2\`, \`uv3\`.
- **ColorManagement**: \`outputEncoding\` -> \`outputColorSpace\`. \`texture.encoding\` -> \`texture.colorSpace\`.
- **SVGLoader**: \`renderOrder\` required.

### 150 → 151

- **Float16BufferAttribute**: Auto-conversion.
- **SkinnedMesh**: \`boneTransform()\` -> \`applyBoneTransform()\`.
- **InstancedMesh**: \`frustumCulled\` true by default.
- **MapControls**: Moved to own module.
- **Tween.js**: Import path changed.
- **Points**: Support texture coordinates.
- **ShaderMaterial**: \`forceSinglePass\` true by default.
- **aoMap/lightMap**: No longer use uv2.

### 149 → 150

- **Build**: \`three.js\` deprecated.
- **BasisTextureLoader**: Removed. Use \`KTX2Loader\`.
- **ColorManagement**: \`legacyMode\` -> \`enabled\`.
- **Lights**: \`physicallyCorrectLights\` -> \`useLegacyLights\`.

### 148 → 149

- **Euler/Object3D**: Default constants renamed (e.g. \`DefaultOrder\` -> \`DEFAULT_ORDER\`).
- **ViewHelper**: \`controls\` removed.
- **Three.TwoPassDoubleSide**: Removed.

### 147 → 148

- **Examples**: \`js\` directory removed (use \`jsm\`).
- **Defaults**: Geometry radial values increased.
- **GLTFLoader**: Node order preserved.

### 146 → 147

- **Lights**: Decay default 2 (physically correct).
- **PixelShader**: Removed -> \`RenderPixelatedPass\`.

### 145 → 146

- **BloomPass/BokehPass**: Constructor params removed.

### 144 → 145

- **Controls**: Fly/FirstPerson use Pointer Events.
- **BufferGeometry**: Alias deprecated (use specific geometries).

### 143 → 144

- **BufferGeometry**: \`merge()\` removed.
- **MeshLambertMaterial**: Per-fragment shading.
- **Scene**: \`autoUpdate\` -> \`Object3D.matrixWorldAutoUpdate\`.

### 142 → 143

- **AnimationUtils**: Named import.
- **PCDLoader**: White default color.

### 141 → 142

- **DataUtils**: Named import.

### 140 → 141

- **GLTFExporter**: \`embedImages\` removed.
- **Geometry**: Removed completely.
- **SelectionHelper**: constructor changed.

### 139 → 140

- **SkinnedMesh**: Floating point vertex textures required.

### 138 → 139

- **CubeUVRefractionMapping**: Removed.

### 137 → 138

- **WebGLMultisampleRenderTarget**: Removed.
- **Node Material**: Replaced with new implementation.
- **VRMLoader**: Removed -> \`three-vrm\`.

### 136 → 137

- **RGBFormat**: Removed -> \`RGBAFormat\`.
- **BasisTextureLoader**: Deprecated.
- **ASTC**: sRGB removed.

### 135 → 136

- **WebGL 1**: HDR requires extensions.
- **ETC1**: WebGL 1 only.
- **ArcballControls**: Event listener changes.

### 134 → 135

- **dat.gui**: Replaced with \`lil-gui\`.
- **Texture**: Properties immutable after use.

### 133 → 134

- **DeviceOrientationControls**: Removed.
- **OrbitControls**: No zooming while rotating.
- **FileLoader**: Uses \`fetch\`.

### 132 → 133

- **Raycaster**: Recursive true by default.
- **Parametric/TextGeometry/Font**: Moved to examples.

### 131 → 132

- **BufferGeometryUtils**: Import change.
- **MeshPhysicalMaterial**: \`sheen\` -> \`sheenTint\`.
- **ComputeFaceNormals**: Removed.

### 130 → 131

- **MorphTargets**: Removed from material.
- **envMap**: Converted to PMREM.

### 129 → 130

- **Controls**: No \`preventDefault\`. All use Pointer Events.

### 128 → 129

- **WebGLRenderer**: \`render()\` target/clear args removed.
- **Skinning**: Removed from materials.

### 127 → 128

- **Classes**: ES6 classes for core components.
- **NPM**: Bare specifier imports.
- **XLoader**: Removed.

### 126 → 127

- **Scene.background**: No \`WebGLCubeRenderTarget\`.
- **AssimpLoader**: Removed.

### 125 → 126

- **Types**: Moved to \`three-types\`.
- **Face3**: Removed (moved to deprecated).
- **CSS3DRenderer**: No IE11.

### 124 → 125

- **Geometry**: Removed from core.
- **Converters**: Removed.

### 123 → 124

- **ColladaLoader**: Animation clips location changed.

### 122 → 123

- **Matrix**: \`getInverse\` deprecated -> \`invert\`.
- **DragControls**: Pointer Events.

### 121 → 122

- **ExplodeModifier/Fire**: Removed.

### 120 → 121

- **PolyhedronGeometry**: Detail param changed.
- **Geometry Generators**: Split files.

### 119 → 120

- **Scene.dispose**: Removed.
- **ShaderMaterial**: \`glslVersion\` required for GLSL 3.0.
- **CannonPhysics**: Removed.
- **Controls**: Pointer Events.

### 118 → 119

- **Transparency**: Renamed to \`transmission\`.

### 117 → 118

- **SphericalReflectionMapping**: Removed.
- **WebGLRenderer**: WebGL 2 auto-created.
- **Water**: LinearEncoding required.

### 116 → 117

- **Texture.mipmaps**: Type \`any[]\`.
- **CubeCamera**: Constructor change.

### 115 → 116

- **TopMapping**: Default \`NoToneMapping\`.
- **TranslucentShader**: Renamed \`SubsurfaceScatteringShader\`.

### 114 → 115

- **Matrix**: \`throwOnDegenerate\` removed.
- **Pragmas**: \`unroll_loop\` deprecated.

### 113 → 114

- **Material.vertexColors**: Boolean.
- **Raycaster**: Honors invisible objects (use layers).
- **GLTFLoader**: Returns \`Group\`.

### 112 → 113

- **Math**: Renamed \`MathUtils\`.
- **WebGLDeferredRenderer/RaytracingRenderer**: Removed.
- **Default Material Color**: White.

### 111 → 112

- **PMREMGenerator**: New implementation. (Core).
- **Gamma**: Removed (\`gammaInput\`, \`gammaOutput\`). Use encoding.
- **WebVR**: Removed -> WebXR.

### 110 → 111

- **Material.needsUpdate**: Integer check.
- **Legacy Helpers**: Removed.

### 109 → 110

- **BufferAttribute**: \`dynamic\` deprecated -> \`usage\`.
- **Methods**: \`addAttribute\` -> \`setAttribute\`.

### 108 → 109

- **Loaders**: \`Babylon\`, \`PlayCanvas\`, \`AWD\`, \`SEA3D\` removed.

### 107 → 108

- **CTMLoader**: Removed.
- **MeshPhysicalMaterial**: \`clearCoat\` -> \`clearcoat\`.

### 106 → 107

- **Constants**: \`MipMap\` -> \`Mipmap\`.
- **Namespace**: \`WEBGL\`, \`WEBVR\` -> \`THREE\`.

### 105 → 106

- **Examples**: ES6 modules.
- **VRMLLoader**: New implementation.

### 104 → 105

- **Debug**: \`checkShaderErrors\` true by default.

### 103 → 104

- **WebGLRenderer**: No error checking default.

### 102 → 103

- **Editor**: PWA.
- **SVGLoader**: Returns data object.

### 101 → 102

- **WebGLRenderer**: \`renderTarget\` args removed from \`render()\`.
- **Viewport**: \`(x,y)\` is lower left.

### 100 → 101

- **FirstPersonControls**: \`lookAt()\`.

### 99 → 100

- **Octree**: Removed.

### 98 → 99

- **SSAO**: New implementation.
- **JSONLoader**: Removed from core.
- **SkinnedMesh**: No \`initBones()\`.

### 97 → 98

- **CanvasRenderer**: Removed.

### 96 → 97

- **BinaryLoader**: Removed.
- **PointerLockControls**: Refactored.

### 95 → 96

- **EquirectangularToCubeGenerator**: Constructor changed.

### 94 → 95

- **OrbitControls**: Mouse buttons renamed.

### 93 → 94

- **Loaders**: \`TDS\`, \`MD2\`, \`X\` produce BufferGeometry.

### 92 → 93

- **ExtrudeBufferGeometry**: \`amount\` -> \`depth\`.

### 91 → 92

- **ExtrudeBufferGeometry**: \`frames\`, \`getArrays\`, etc. removed.

### 90 → 91

- **Geometry**: \`center()\` returns \`this\`.
- **ShaderChunks**: Split lights/normal pars.

### 89 → 90

- **Lensflare**: Moved out of core.
- **JSON Exporters**: Removed.

### 88 → 89

- **ImageUtils**: Removed.

### 87 → 88

- **CombinedCamera**: Removed.
- **Curves**: Renamed methods.

### 86 → 87

- **GLTF2Loader**: Replaced \`GLTFLoader\`.

### 85 → 86

- **Animation**: Removed deprecated classes.

### 84 → 85

- **MultiMaterial**: Removed -> Array.
- **Matrix4**: Methods removed.
- **BoxHelper**: \`update()\` args removed.

### 83 → 84

- **Spline**: Removed -> \`CatmullRomCurve3\`.
- **Vector3**: \`applyProjection\` deprecated.

### 82 → 83

- **Loaders**: \`STL\`, \`PDB\`, \`Assimp\` produce BufferGeometry.
- **BoundingBoxHelper**: Removed.
- **XHRLoader**: Renamed \`FileLoader\`.

### 81 → 82

- **PLYLoader**: BufferGeometry.
- **TubeGeometry**: \`taper\` removed.

### 80 → 81

- **Box2/3/Line3**: \`center()\` -> \`getCenter()\`.

### 76 → 77

- **GridHelper**: Colors in constructor.

### 75 → 76

- **Audio**: \`load\` deprecated -> \`AudioLoader\`.
- **Uniforms**: No \`.type\`.

### 74 → 75

- **Vector3**: \`setFromMatrixColumn\` signature.

### 73 → 74

- **Shadows**: Prop names changed (\`shadowDarkness\` removed).
- **MeshPhongMaterial**: \`metal\` removed.

### 72 → 73

- **Geometry**: \`morphColors\` removed.

### 71 → 72

- **PointCloud**: Renamed \`Points\`.

### 70 → 71

- **Material**: \`ambient\` removed.

### 69 → 70

- **Object3D**: \`renderDepth\` removed.

### 68 → 69

- **ColladaLoader**: Returns Scene.

### 67 → 68

- **Object3D**: Transform properties immutable.

### 66 → 67

- **Face3**: No centroid.

### 65 → 66

- **CubeGeometry**: Renamed \`BoxGeometry\`.

### 64 → 65

- **WebGLRenderer**: \`physicallyBasedShading\` removed.

### 62 → 63

- **WebGLRenderer**: Opaque background default.

### 61 → 62

- **Particle**: Removed -> \`Sprite\`.

### 59 → 60

- **Face4**: Removed.
- **OrbitControls**: Zoom methods renamed.

### 58 → 59

- **Object3D**: \`rotation\` is Euler. \`useQuaternion\` removed.
- **Mesh**: \`setGeometry/setMaterial\` removed.

### 57 → 58

- **Matrix4**: \`translate/rotate\` removed.
- **Object3D**: \`getChildByName\` -> \`getObjectByName\`.

### 56 → 57

- **BufferGeometry**: Attribute naming changed.
`,hn=`# YouMeOS Web3 Vision & Roadmap

## Overview

This document outlines the strategic vision for transitioning YouMeOS from a centralized web platform into a fully decentralized, community-owned Web3 operating system. It covers tokenomics, decentralized governance, and the technical architecture required to host the software itself on decentralized networks.

### The Real-World Mission: The w⁴ Protocol & Solving the Web2 Crisis
It is critical to understand that the immersive aesthetics and gamification of YouMeOS are simply vehicles to facilitate profound real-world change, not to distract from it. The foundation of this change is governed by the **w⁴ Protocol**: transforming the "World Wide Web" into a "Worldwide Webwork" by adding the critical fourth dimension: *the Work*.
*   **Ending Data Exploitation:** Corporations currently harvest and endlessly profit off user data without compensation. The NFT Data Protocol dismantles this by returning cryptographic ownership, and the resulting passive income, to the true creators of that data.
*   **Establishing a Digital Meritocracy:** By binding network earning power to a soulbound Reputation system, we break the "pay-to-win" dynamics of the flat web. We are engineering an ecosystem where value is generated based on community contribution rather than extracted from the bottom up.
*   **The BlackBOX (Sovereign Digital Reality):** At the infrastructural level, every user operates from a **BlackBOX**: a hardened, autonomous, sovereign server. This transforms the user from a passive consumer into an "owner-operator" of a high-performance node in a global spatial network.
*   **The w⁴ Protocol (The 4D System View):** The w⁴ Protocol is not solely a user interface; it is the entirety of the vast, interconnected system when viewed from above. By weaving time and cryptographic timestamps directly into the YouMeOS canvas, users can visualize and navigate their individual "youniverse" at any given historical moment, literally expanding the 3D spatial network into a living 4D construct.
*   **The Compass Suite (The Navigation Interface):** To traverse this massive Tesseract, the *Compass Suite* UI unpacks the extreme density of decentralized environments, storage, and temporal data routing into a seamless, ancient-future command center.

---

## 1. Tokenomics: Currency vs. Governance

A core decision in Web3 design is structuring the token economy. YouMeOS rejects the standard exclusionary, USD-pegged models in favor of a gamified, egalitarian "Digital Mineral" economy.

### The "Dirt" Economy (The Base Layer)
Instead of a standard utility token, the base currency is called **Dirt**.
*   **The Earth Cent Peg:** Dirt is pegged mathematically to a "Global Average Unit" (an aggregate of world fiat/commodities), untethering it from any single nation's economy.
*   **Micro-Transaction Velocity:** Designed to be worth around a penny ("dirt cheap"), it removes the psychological friction of spending.
*   **Synthesis Hierarchy:** Users don't just hold Dirt; they "synthesize" or refine it under pressure to create higher-tier assets (Quartz -> Rubies -> Emeralds).
*   **System Reserve:** The wealthiest top-tier tokens (Apex Minerals/Core Crystals) are not sold; they are held by the system and granted only through proof-of-contribution (hosting, building). This prevents oligarchic hoarding.

### Option A: The Single-Token Model (e.g., \`$YOS\`)
In this model, a single token is used for *both* buying assets within the OS (like app licenses, storage space, or digital property) and for voting on protocol changes.
*   **Pros:** A simpler mental model for users. Concentrates all network value into one asset.
*   **Cons:** If the token becomes highly valuable due to speculators buying it for governance power, it becomes too expensive for normal users to use for everyday OS transactions, creating a high barrier to entry.

### Option B: The Tri-Token Model (Recommended)
This approach separates the economy, governance, and reputation, building a robust and fair Web3 ecosystem.
1.  **The Utility/Gas Token (e.g., Energy/Credits):** An inflationary, highly liquid token used for daily OS operations. Users earn it by interacting with the platform, providing computing resources, or completing bounties. They spend it on transactions, apps, and decentralized storage.
2.  **The Governance Token (e.g., \`$YOS\`):** A fixed-supply token representing ownership and voting power in the YouMeOS ecosystem.
3.  **The Reputation Token (XP System):** A specialized, non-transferable (soulbound) token or on-chain XP point system that tracks user reputation. Users earn this token through positive community contributions, good behavior, and high-quality interactions. 
    *   **Sybil Attack Prevention:** Because these tokens are soulbound to a specific wallet, they cannot be bought, sold, or transferred. This prevents wealthy entities from simply "buying" a good reputation; they must actually earn it.
    *   **Proof of Good Citizenship:** The system uses a reward mechanism where building a strong reputation directly correlates to earning the platform's primary (Utility or Governance) tokens. This effectively pays users to be helpful and constructive, aligning financial incentives directly with the health of the YouMeOS community.

---

## 2. Data Ownership & The NFT Data Protocol

A fundamental pillar of YouMeOS is the absolute ownership of personal data. Instead of data being harvested and siloed by centralized corporations, YouMeOS envisions a system where user data is explicitly tokenized and controlled by its creator.

### Tokenizing Personal Information & The Privacy Architecture
Blockchains are public ledgers, meaning publishing raw user data directly to the chain would be a severe privacy violation. To solve this, the NFT acts as an **Access Key** rather than the data storage itself.
*   **The Encrypted Payload:** A user’s personal information, preferences, and behavioral data are aggregated, encrypted, and securely stored on decentralized networks (like IPFS or Arweave) or kept locally in secure sovereign storage.
*   **Data as Access NFTs:** The user mints a secure Non-Fungible Token (NFT) that serves as the cryptographic decryption and access key to their underlying payload.
*   **Absolute Ownership:** Because the NFT key is an asset in their Web3 wallet, the user has literal, cryptographic ownership. No corporation or AI can access or read the data unless they are explicitly mathematically granted permission by that specific NFT.

### Data Vaults & Tiered Packaging (The "Identity Broker" Spark)
This tokenized information is not a monolith; it is securely layered so users maintain granular control over exactly what they monetize. This entire process operates physically within the user's sovereign BlackBOX and is managed visually via the UI Tesseract (a dedicated YouMeOS Spark), acting as their personal data command center.
*   **Layer 1 (The Basic Lead):** Standard public or semi-public information typically given in website lead forms (Name, Email, Phone, basic demographics). This is the most frequently requested, baseline data package.
*   **Layer 2 (The Behavioral Graph):** Platform usage statistics, app preferences, content engagement, and contextual interactions within the YouMeOS ecosystem.
*   **Layer 3 (The Deep Persona):** Highly specific, deeply personal metrics, financial interactions, or AI-derived psychological profiles.
*   **Granular Packaging:** The Identity Broker Spark allows users to select specific layers or curate custom "data sets" to mint as targeted access NFTs. This ensures they only sell the exact tiers of information they are comfortable sharing, pricing them accordingly.

### The Resale and Royalty Mechanism
*   **Consensual Data Monetization:** If a company wants to use a person's data for marketing, research, or training AI, they must purchase a license or a copy of that data directly from the user.
*   **Smart Contract Royalties:** The true power of this system lies in secondary markets. If the company that initially bought the data resells it to a third party, the underlying smart contract ensures that a significant percentage of that resale value is automatically routed back to the original owner (the user) as a royalty kickback.
*   **Passive Income:** This creates a paradigm where users generate ongoing passive income from the very data they produce, correcting the exploitative nature of current data harvesting practices.

---

## 3. Decentralized Autonomous Organization (DAO)

By implementing a DAO, YouMeOS transitions the community from just being "users" to being "owner-operators."

### How Voting Works
Holders of the Governance Token participate in the **YouMeOS DAO**.
*   **Proposals:** Any user holding a minimum threshold of tokens can submit a YouMeOS Improvement Proposal (YIP).
*   **Voting:** Token holders vote on these proposals. The weight of their vote is proportional to their token holdings.
*   **Treasury:** A portion of all transaction fees on the platform (or app sales) goes into a community treasury smart contract. The DAO votes on how to allocate these funds.

### What Does the DAO Govern?
*   **Protocol Upgrades:** Voting on changes to core smart contracts.
*   **Treasury Allocation:** Funding developers to build new core apps, covering decentralized server costs, or marketing campaigns.
*   **Economy Tweaks:** Adjusting token inflation rates or platform fee structures.
*   **Universe Lore/Features:** In a gamified environment, voting on opening new sectors, global events, or default App Store curation.

---

## 4. Hosting Software "On the Blockchain"

Is it possible to put the software itself on the blockchain? Yes, but a hybrid approach is required.

Blockchains (like Ethereum, Solana, or L2s like Arbitrum) are essentially highly secure, slow, and expensive global state machines. They are perfect for verifying ownership, but entirely unsuited for storing large files like 3D GLTF models, textures, or large JavaScript application bundles.

### The Hybrid Web3 Architecture
To make YouMeOS censorship-resistant and decentralized, we utilize a combination of decentralized technologies:

#### A. The State Layer (On-Chain)
*   **Smart Contracts:** Deployed on an EVM-compatible chain or Solana. These hold the "truth" of the universe. They track who owns which tokens, who owns which digital items/apps (represented as NFTs), and the state of the DAO treasury.
*   **Identity:** Users authenticate using their Web3 wallets (e.g., MetaMask, Phantom) instead of traditional usernames and passwords.

#### B. The Storage Layer (Decentralized File Systems)
*   **IPFS (InterPlanetary File System) or Arweave:** This is where the actual YouMeOS software lives. The compiled Vue.js/Three.js code, 3D assets, audio, and images are uploaded to these decentralized storage networks.
*   **How it works:** Instead of pulling \`youmeos.js\` from a centralized AWS server, the user's browser pulls it from a peer-to-peer network using the file's unique cryptographic hash. Once uploaded, the frontend cannot be taken down centrally.

#### C. The Access Layer (Decentralized Naming)
*   **ENS (Ethereum Name Service):** Instead of relying on a centralized DNS registrar (like GoDaddy) for \`youmeos.com\`, an ENS domain like \`youmeos.eth\` points directly to the IPFS hash containing the frontend code. Browsers with Web3 capabilities resolve this domain, loading the OS entirely from the decentralized web.

### Fully On-Chain Exceptions
While the Hybrid architecture is the gold standard for visually rich applications, some lightweight logic *can* be fully on-chain. For instance, the core rule engine or critical random number generation (RNG) for OS events can be executed via smart contracts or Zero-Knowledge (ZK) proofs, while the visual rendering remains off-chain.

---

## 5. Phased Rollout Plan

Transitioning to this architecture should be gradual.

*   **Phase 1: Web2.5 (The Foundational Bedrock)**
    *   Establish the BlackBOX infrastructure using WordPress (which powers 45% of the flat web) as the foundational bedrock to ensure massive interoperability.
    *   Implement Web3 wallet login authentication ("Connect Wallet" as an alternative to email) to seamlessly transition Web2 users into the Web3 framework.
    *   Mint basic NFTs representing internal digital assets (e.g., Desktop Themes, Premium Apps) on a low-cost Layer-2 network like Polygon.

*   **Phase 2: Token Generation Event (TGE) & DAO Formation**
    *   Launch the Utility and Governance tokens.
    *   Airdrop tokens to early adopters, contributors, and active users to bootstrap the economy.
    *   Establish off-chain DAO voting (using tools like Snapshot) based on token holdings to guide early development.

*   **Phase 3: Decentralized Storage Integration**
    *   Package the compiled YouMeOS frontend and publish versions to IPFS.
    *   Link the dApp URL to the IPFS gateway, allowing users to load the OS via decentralized storage.

*   **Phase 4: Full Decentralization**
    *   Move governance entirely on-chain.
    *   Hand over control of the master smart contracts (and the treasury) to the DAO.
    *   The OS runs autonomously on peer-to-peer networks, maintained and upgraded by the community.
`,un=`# WebGPU Migration Plan

> **Status**: In Progress  
> **Started**: 2026-01-18  
> **Goal**: Dual-renderer architecture with user toggle

## Overview

YouMeOS uses a custom 3D engine built on Three.js for rendering the Youniverse. This document outlines the migration path from WebGL to WebGPU while maintaining backwards compatibility.

## Current State

| Component       | Version             | Status           |
| :-------------- | :------------------ | :--------------- |
| Three.js        | r182                | ✅ Latest        |
| Renderer        | WebGLRenderer       | ✅ Stable        |
| Shaders         | GLSL ES 3.00        | ✅ Modern syntax |
| Browser Support | All modern browsers | ✅ Universal     |

## Target Architecture

\`\`\`
┌─────────────────────────────────────────────────────────────┐
│                     YouMeOSEngine                           │
├─────────────────────────────────────────────────────────────┤
│                    RendererFactory                          │
│           ┌───────────────┬───────────────┐                 │
│           │   WebGL2      │    WebGPU     │                 │
│           │  (Stable)     │  (Experimental)│                │
│           └───────────────┴───────────────┘                 │
├─────────────────────────────────────────────────────────────┤
│           ShaderFactory (Material Abstraction)              │
│     ┌─────────────────────┬─────────────────────┐           │
│     │   GLSL Materials    │   TSL NodeMaterials │           │
│     │   (ShaderMaterial)  │   (NodeMaterial)    │           │
│     └─────────────────────┴─────────────────────┘           │
└─────────────────────────────────────────────────────────────┘
\`\`\`

## Blockers Identified (2026-01-18)

### 1. Custom GLSL Shaders

WebGPURenderer does not support raw \`ShaderMaterial\` with GLSL. These must be migrated to **TSL (Three.js Shading Language)**.

| Shader                  | Purpose                  | Priority |
| :---------------------- | :----------------------- | :------- |
| \`galacticstars.vsh/fsh\` | Star particles in galaxy | High     |
| \`datastars.vsh/fsh\`     | Data-driven star colors  | High     |
| \`grid.vsh/fsh\`          | Coordinate grid overlay  | Medium   |
| \`starsurface.vsh/fsh\`   | Sun surface animation    | Medium   |
| \`starhalo.vsh/fsh\`      | Sun glow effect          | Medium   |
| \`starflare.vsh/fsh\`     | Solar flare effect       | Medium   |
| \`corona.vsh/fsh\`        | Sun corona effect        | Medium   |
| \`galacticdust.vsh/fsh\`  | Nebula dust clouds       | Low      |
| \`cubemapcustom.vsh/fsh\` | Skybox rendering         | Low      |

### 2. Legacy Three.js Addons

| Addon           | Issue                       | Solution                          |
| :-------------- | :-------------------------- | :-------------------------------- |
| \`Lensflare\`     | Uses \`getCurrentViewport()\` | Disable in WebGPU mode or rewrite |
| \`CSS2DRenderer\` | Works with both             | No changes needed                 |

## Implementation Phases

### Phase 1: Renderer Abstraction (Current)

Create a renderer factory that can create either WebGL or WebGPU renderers:

\`\`\`typescript
// apps/youmeos/engine/core/renderer.factory.ts
export type RendererType = "webgl" | "webgpu";

export async function createRenderer(
  type: RendererType,
  options: RendererOptions
): Promise<THREE.WebGLRenderer | WebGPURenderer>;
\`\`\`

### Phase 2: Material Abstraction

Create a material factory that returns appropriate materials based on renderer:

\`\`\`typescript
// apps/youmeos/engine/core/material.factory.ts
export function createStarMaterial(
  rendererType: RendererType,
  options: StarMaterialOptions
): THREE.Material;
\`\`\`

### Phase 3: Shader Migration to TSL

Migrate each shader pair from GLSL to TSL:

\`\`\`typescript
// OLD: GLSL String
const vertexShader = \`
  uniform float zoomSize;
  in vec3 customColor;
  void main() { ... }
\`;

// NEW: TSL (JavaScript)
import { uniform, attribute, varying, vec3 } from "three/tsl";
const zoomSize = uniform("float", 1.0);
const customColor = attribute("vec3");
// ...node-based logic
\`\`\`

### Phase 4: User Toggle

Add a toggle in the UI settings:

\`\`\`typescript
// Stored in localStorage
const rendererPreference = localStorage.getItem("youmeos_renderer") || "webgl";

// User can switch; requires reload
function setRendererPreference(type: "webgl" | "webgpu") {
  localStorage.setItem("youmeos_renderer", type);
  location.reload(); // Renderer initialized at boot
}
\`\`\`

## File Structure

\`\`\`
apps/youmeos/engine/
├── core/
│   ├── youmeos.engine.ts      # Main engine (uses factory)
│   ├── renderer.factory.ts    # NEW: Creates WebGL or WebGPU renderer
│   └── material.factory.ts    # NEW: Creates GLSL or TSL materials
├── webgl/                     # NEW: WebGL-specific implementations
│   └── materials/             # GLSL ShaderMaterial wrappers
├── webgpu/                    # NEW: WebGPU-specific implementations
│   └── materials/             # TSL NodeMaterial implementations
└── 4d-youniverse/
    └── effects/
        └── shaders/           # Existing GLSL files (unchanged)
\`\`\`

## Testing Strategy

1. **WebGL Mode**: Default, battle-tested, no regressions
2. **WebGPU Mode**: Opt-in via toggle, expect visual differences during migration
3. **Feature Flags**: Disable incompatible features (Lensflare) in WebGPU mode

## Browser Support

| Browser       | WebGL2 | WebGPU       |
| :------------ | :----- | :----------- |
| Chrome 113+   | ✅     | ✅           |
| Edge 113+     | ✅     | ✅           |
| Firefox 131+  | ✅     | ✅ (Nightly) |
| Safari 18+    | ✅     | ✅           |
| Mobile Chrome | ✅     | ⚠️ (Limited) |

## References

- [Three.js WebGPU Guide](https://threejs.org/docs/#manual/en/introduction/How-to-use-WebGPU)
- [TSL Documentation](https://github.com/mrdoob/three.js/wiki/Three.js-Shading-Language)
- [WebGPU Spec](https://www.w3.org/TR/webgpu/)
`,mn=`# WebGPU Shader Migration Plan

This plan outlines the step-by-step process for converting custom GLSL shaders to Three.js Shading Language (TSL) and integrating them into the YouMeOS engine.

## Phase 1: Foundation (Current Status)

- [x] Create \`renderer.factory.ts\` for dual-renderer support.
- [x] Update \`YouMeOSEngine\` to use renderer factory.
- [x] Add UI Toggle for renderer preference.
- [x] Update \`EngineContext\` type definition.
- [ ] **Fix**: Initialize \`rendererType\` in \`YouMeOSEngine\` constructor (fixes lint error).
- [ ] Create \`material.factory.ts\` as the central abstraction layer.

## Phase 2: Material Factory Integration

We will refactor existing generators to use \`create[Name]Material()\` from the factory instead of \`new THREE.ShaderMaterial()\`.

- **Goal**: Isolate shader instantiation so the generator code doesn't care about WebGL vs WebGPU.

### Target Files:

1.  \`apps/youmeos/engine/4d-youniverse/celestial/galaxy.ts\` -> \`createGalacticStarMaterial\`
2.  \`apps/youmeos/engine/4d-youniverse/celestial/hipparcos.ts\` -> \`createDataStarMaterial\`
3.  \`apps/youmeos/engine/4d-youniverse/celestial/sun.ts\` -> \`createSunMaterial\` (Surface, Halo, Corona, Flare)
4.  \`apps/youmeos/engine/4d-youniverse/effects/skybox.ts\` -> \`createSkyboxMaterial\`
5.  \`apps/youmeos/engine/4d-youniverse/effects/dust.ts\` -> \`createDustMaterial\`

## Phase 3: Shader Migration (TSL Implementation)

We will migrate shaders one by one. For each shader:

1.  Analyze GLSL (\`.vsh\`, \`.fsh\`).
2.  Create TSL counterpart in \`apps/youmeos/engine/webgpu/materials/\`.
3.  Register in \`material.factory.ts\`.
4.  Verify in WebGPU mode.

### Priority 1: The Galaxy (Core Visuals)

- [ ] **Galactic Stars**
  - _Status_: TSL Drafted (\`materials/galacticstars.ts\`).
  - _Action_: Integrate into factory and test.
- [ ] **Galactic Dust**
  - _Complexity_: Low. Texture sampling + noise.

### Priority 2: Unverified Stars (Hipparcos)

- [ ] **Data Stars** (\`datastars\`)
  - _Complexity_: Medium. Vertex attributes for size/color.

### Priority 3: The Sun (Complex Effects)

- [ ] **Star Surface** (\`starsurface\`)
  - _Complexity_: High. Time-based noise animation.
- [ ] **Star Halo** (\`starhalo\`)
  - _Complexity_: Medium. Glow gradients.
- [ ] **Star Flare** (\`starflare\`) & **Corona** (\`corona\`)
  - _Complexity_: Medium.

### Priority 4: Environment

- [ ] **Skybox** (\`cubemapcustom\`)
  - _Complexity_: Low. Cubemap sampling.
- [ ] **Grid** (\`grid\`)
  - _Complexity_: Low.

## Phase 4: Feature Parity & Cleanup

- [ ] **Lensflare Replacement**:
  - Identify WebGPU native lens flare solution or implement custom TSL billboard.
- [ ] **WebGPU Renderer Activation**:
  - Once critical shaders are ported, update \`renderer.factory.ts\` to instantiate the **actual** \`WebGPURenderer\` class instead of the WebGL fallback.
`,gn=`# Window Management & Workspace Orchestration Roadmap

This document outlines the evolutionary path for the YouMeOS windowing environment. Our goal is to forge a desktop experience that balances the familiarity of traditional operating systems with the fluid, celestial nature of the YOUniverse.

## 🌌 Core Philosophy: Sovereign Agency

Windows in YouMeOS are not just containers; they are **Resonant Viewports** into specific sparks of functionality. The user (Sovereign Sun) should have absolute control over their spatial organization.

---

## 🛤️ Evolution Horizons

### Phase I: Stability & Persistence (Current Focus)

Ensuring the environment is reliable and remembers the user's intent.

- [x] **Z-Index Stacking**: Selected windows always rise to the peak of the Heat Signature.
- [x] **Double-Click Maximization**: Standard OS interaction patterns on the window bar.
- [x] **Chrono-Persistence (Geometry Storage)**: Save window positions, sizes, and open/closed states to persistent storage.
- [x] **Focus Reclamation**: Automatically focus the most recently used window when the active one is closed.
- [x] **"Show Desktop" Pulse**: A system-level trigger to clear all overlays and reveal the 3D visualization.
- [x] **Global Glass Styling**: Unify window aesthetics with the system-wide \`42,42,42\` glass morphism variables.

### Phase II: Spatial Fluidity

Improving the speed and ease of window organization.

- [x] **Aero-Snap / Magnetic Anchoring**: Drag windows to edges/corners to snap into 50% or 25% layouts.
- [ ] **Holographic Snap Previews**: Show a spectral outline of the snap target before the user releases the window.
- [ ] **Intelligent Tiling**: Single-click command to organize all open windows into a non-overlapping grid.
- [x] **Active Sparks Overlay**: A high-fidelity overlay for rapid switching between active sparks.
  - **Ctrl+Shift** (hold): Opens the Active Sparks overlay
  - **←/→** while held: Cycles through open windows in stack order
  - Release to focus selected spark
  - _Note: Avoids OS-reserved shortcuts like Alt+Tab_

### Phase III: Deep Context & Multi-Dimensionality

Advanced features for power-users and complex workflows.

- [ ] **Right-Click Resonance (Context Menus)**: Granular window controls (Pin to Top, Move to Workspace, Collapse to Rail).
- [ ] **Multi-Workspaces (Celestial Realms)**: Paginated desktop environments that users can swipe between.
- [ ] **Live Peek / Hover Previews**: Real-time thumbnails appearing when hovering over the User Rail icons.
- [ ] **Cross-Portal Drag & Drop**: Moving content between windows and sparking interactions between different applications.

---

## 🛠️ Technical Strategy

- **State Management**: Utilize the \`window.store.ts\` (Pinia) as the Single Source of Truth for all geometry and visibility.
- **Persistence Layer**: Implement a debounce-save logic to update WordPress User Meta with window states, preventing excessive API calls.
- **Interaction Layer**: Enhance the \`u-window\` wrapper with edge-detection logic for the Snap system.
- **Animation Philosophy**: All transitions must use the project's signature \`cubic-bezier\` durations defined in \`design-system.scss\` to maintain a premium, cinematic feel.

---

## ✅ Progress Log

| Feature                        | Status    | Date Manifested |
| :----------------------------- | :-------- | :-------------- |
| Z-Index Logic                  | Completed | 2026-01-29      |
| Double-Click Maximization      | Completed | 2026-01-29      |
| Chrono-Persistence             | Completed | 2026-01-29      |
| Aero-Snap / Magnetic Anchoring | Completed | 2026-01-29      |
| Snap Logic                     | Completed | 2026-01-29      |
| Rail Toggle Minimization       | Completed | 2026-01-29      |
| Global Glass Styling           | Completed | 2026-01-30      |
`,yn=`# YouMeOS Decentralization & Local-First Architecture Roadmap

To realize the vision of an "Intergalactic Federation of Sites" where YouMeOS runs locally, remains decentralized, and operates across many internet nodes, we must evolve the current architecture (WordPress + Vue 3/WebGL) into a federated, local-first mesh network.

## Strategic Pillars

### 1. The Bedrock Strategy: WP Node + PWA Client
Since over 50% of the web runs on WordPress, it serves as the ultimate "Trojan Horse" to decentralize the internet. 

*   **WordPress as the Main Star Processor:** The core server software for a node remains WordPress. Anyone with a standard shared host can install the YouMeOS plugin and instantly become an active star in the Noosphere. 
*   **The Desktop "Local Node":** For true localized running, we will package a "1-click YouMeOS Desktop App" (using technologies like Tauri or Electron bundled with a lightweight PHP/SQLite runtime like WordPress-Studio). This allows a user to run their own sovereign WordPress node locally on their laptop, completely offline.
*   **The PWA (Progressive Web App):** The Vue 3/WebGL frontend will be served as an installable PWA. The user interfaces with the lightning-fast PWA, which syncs seamlessly back to their local (or hosted) WordPress node running in the background.

### 2. Sovereign Identity (IndieAuth + Web3 DIDs)
To move across different deployments and nodes, a user's identity cannot be tied exclusively to a single node's \`wp_users\` table. Rather than choosing between Web3 cryptography and traditional Web2 URLs, we will tie them together.

*   **The Best of Both Worlds:** We adopt **IndieAuth** (OAuth2 for the Open Web) so your WordPress URL *is* your primary identity. However, we tie your WordPress User profile to a **DID (Decentralized Identifier)**. 
*   **How it Works:** Your WordPress site (Main Star) publishes a DID document. This means a user can authenticate to external Noospheres uniquely in two ways:
    1.  Entering their URL (e.g., \`my-local-youmeos.com\`) and verifying via IndieAuth (No crypto needed).
    2.  Signing a cryptographic payload with a Web3 Wallet that matches the public key registered in their Main Star's DID document.
*   **Portable "Oort Clouds":** User content and settings are tied to this dual-layered identity, allowing them to carry their digital footprint safely across the "Noosphere" to different YouMeOS instances.

### 3. Asynchronous Federation (The Galactic Math)
We need a protocol for Stars (WordPress nodes) to communicate and form the Noosphere. Based on the fundamental insight that the Noosphere is a deeply *personal, localized* map, we do not require instant P2P real-time telemetry (like Gun.js or WebRTC multiplayer).

*   **ActivityPub (The Single Source of Truth):** We will use ActivityPub (the W3C standard powering Mastodon) natively inside WordPress HTTP REST. When you interact with another node (send a Spark, reply, follow), it registers as an ActivityPub event.
*   **The "Observer-Centric" Cosmos:** Because every user sees the Youniverse with themselves as the center Sun, there is no "objective" map. If User A interacts heavily with User B, User B's ActivityPub payload gets sent to User A's node. 
*   **Calculating Celestial Physics from Data:** The Vue3 WebGL engine locally calculates the "gravity," "brightness," and "mass" of other Stars based strictly on the asynchronous interaction history:
    *   **Mass & Gravity:** Determined by interaction frequency (how many DMs, replies, or Sparks are shared). High interaction pulls the Star closer into your immediate orbit.
    *   **Brightness:** Determined by the recency and volume of data payloads received.
    *   **Drift:** Because relationships change over days/weeks, the starry constellations drift slowly. Pure ActivityPub event polling gives us everything we need to compute these beautiful, unique cosmological maps without the overhead of real-time multiplayer networking.

### 4. Distributed Storage (The Collective Space)
Building a heavy media-driven 3D cosmos on localized nodes will bottleneck bandwidth if scaled traditionally.

*   **IPFS (InterPlanetary File System):** For hosting rich media, 3D glTF assets, and textures for the WebGL engine. Assets are addressed by their hash instead of a central URL, meaning dense planetary textures can be loaded from the nearest peer instead of the source node.

## Implementation Roadmap

### Phase 1: Local-First Optimization & IndieAuth Core
*   Implement full PWA caching and Service Workers for the core YouMeOS Vue app.
*   Install/Configure IndieAuth within the Compass plugin so a user's WordPress installation becomes their universal passport.
*   Introduce the DID public registry on the WordPress user profile.

### Phase 2: Inter-Node Federation (ActivityPub)
*   Extend the \`xophz-compass\` plugin to support basic ActivityPub endpoints.
*   Map Compass "Sparks" (Mercury messages, Saturn blogs, etc.) into ActivityPub object types so external nodes can broadcast their activity streams.

### Phase 3: The Vue3 Observer-Centric WebGL Engine
*   Update the YouMeOS WebGL \`tour.js\` and Star Generators to consume ActivityPub interaction metadata.
*   Implement algorithms mapping interaction frequency to physical Star Properties (Mass, Gravity, Orbit Proximity, and Brightness) to generate deeply subjective, personalized cosmos renderings.

### Phase 4: Desktop Node Wrapper 
*   Once the PWA and federation protocols are hardened, wrap the entire ecosystem (WordPress + PHP + Vue3) into a single downloadable desktop application (using Tauri or similar) to allow non-technical users to run a 1-click sovereign Main Star node perfectly locally.
`,wn=`# BlackBOX

## Overview
System internals and diagnostics

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,fn=`# Blackjack

## Overview
Hit or stand in this casino classic

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,bn=`# Bubblegum

## Overview
**Bubblegum** is a reimagined task manager designed to cause less friction in your workflow. By seamlessly integrating estimation, MoSCoW prioritization, and sprint mechanics, Bubblegum helps you focus on what truly matters.

## The Concept
At its core, Bubblegum is a fusion of a Pomodoro timer and estimation points. Instead of vaguely estimating how long a task will take, you are essentially "voting" on how many focused sessions it will require to get the thing done. 

- **Session Length**: A single focus session (a "bubble") is exactly 25 minutes.
- **Estimation**: You assign a task a number of bubbles. This breaks down large tasks into manageable 25-minute chunks of deep focus.
- **MoSCoW Prioritization**: Easily classify tasks as *Must Have*, *Should Have*, *Could Have*, or *Won't Have* for the current sprint.
- **Sprints**: Group your focused sessions into larger sprints to track velocity and momentum over time.

## Usage
Launch Bubblegum to view your current sprint backlog. Add tasks, assign their MoSCoW priority, and estimate them by assigning "bubbles" (25-minute sessions). When you're ready to work, select a task and start the timer to begin popping your bubbles!
`,vn=`# Bug-Catching Net

## Overview
Report and track platform bugs

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Sn=`# Cafeteria Food

## Overview
Quick bites and daily specials

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,kn=`# Calculator

## Overview
The **Calculator** spark provides quick and easy mathematical operations right from your YouMeOS desktop environment. It's designed to be lightweight, fast, and accessible at a moment's notice.

## Features
- **Basic Arithmetic**: Addition, subtraction, multiplication, and division.
- **Floating Window**: Can be dragged around the screen to keep it handy while you work on other tasks.
- **Glassmorphic Design**: Seamlessly blends with the True North aesthetics of the platform.

## Usage
Launch the Calculator spark from the application menu or command deck. Use the on-screen buttons or your keyboard's numpad to enter calculations. The results are calculated in real-time.
`,xn=`# Chronos

## Overview
Master time with clocks and timers

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Pn=`# Cookie Jar

## Overview
Manage cookies and sweet treats

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,An=`# Debug Console

## Overview
Inspect logs and runtime diagnostics

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Cn=`# Enchiridion

## Overview
The sacred manual of knowledge

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Tn=`# Gaea OS

## Overview
Living earth environment system

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Mn=`# Helios

## Overview
Solar-powered content dashboard

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,zn=`# Holosweeper

## Overview
**Holosweeper** is a modern reimagining of the classic Minesweeper game, featuring a sleek, neon-infused, holographic interface.

## Features
- **Classic Gameplay**: Clear the board without detonating any of the hidden mines.
- **Neon Aesthetics**: The board is stylized with glowing elements and glassmorphic overlays.
- **Adjustable Difficulty**: Choose between beginner, intermediate, and expert board sizes and mine densities.

## Usage
Launch Holosweeper from the Games category. Left-click to reveal a tile, and right-click to flag a potential mine. The goal is to uncover all non-mine tiles as quickly as possible.
`,_n=`# Beat Salad

## Overview
Community jukebox and radio station

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,On=`# Local Produce

## Overview
Browse fresh community offerings

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Rn=`# Logos

## Overview
Admin web management portal

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,In=`# Lunch Room

## Overview
Team hangout and coffee chat

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Dn=`# Midnight Nerd

## Overview
Direct line of contact to XP.

The Midnight Nerd spark acts as the primary support and ticketing system for the COMPASS platform. It replaces the legacy Terminal/Console concept with a fully functional, real-time client-to-admin communication hub.

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics. It uses a high-tech console interface to facilitate support requests.

### Core Architecture

- **Custom Post Type**: Backed by the \`midnight_ticket\` CPT to handle ticket submissions securely and natively within WordPress.
- **Correspondence**: Utilizes native WordPress comments for ticket correspondence, ensuring robust data persistence and easy management.
- **Ticket Meta**: Uses post meta to track ticket status, urgency levels, and system logs.
- **Remote Synchronization**: Features a webhook-based dispatcher that syncs ticket states between the local client site, the YouMeOS global platform, and the main MidnightNerd.com dashboard.
- **Admin UI**: A dedicated Vue-based admin UI within COMPASS allows for efficient client-to-admin ticket management and status tracking.

### Access Control
Access to the Midnight Nerd support system is strictly authenticated. The system hides its webtop icons and shortcuts from unauthenticated users, ensuring privacy and security for all support tickets.
`,En=`# Scratch Paper

## Overview
Quick sticky notes that glow

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Bn=`# Nexos

## Overview
Connected intelligence network

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Wn=`# Noosphere

## Overview
Explore the collective thought space

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Ln=`# Alphabet Soup

## Overview
A rich text scratchpad for notes

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Fn=`# THEOS

## Overview
Account settings and identity hub

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Un=`# Night's Light

## Overview
Draw and paint under the moonlight

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Gn=`# Neon Snake

## Overview
Classic snake with electric style

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Xn=`# Social Preview

## Overview
Preview your social sharing cards

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Nn=`# Solitaire

## Overview
The timeless card game

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Hn=`# Spark Plugs

## Overview
The **Spark Plugs** application is the primary hub for managing, discovering, and installing sparks within YouMeOS. It serves as your personal app store and configuration tool.

## Features
- **Discover**: Browse the library of available sparks categorized by their function.
- **Toggle**: Enable or disable sparks instantly without needing to reload the environment.
- **Search**: Quickly find sparks using the built-in search functionality.

## Usage
Simply launch the Spark Plugs application from your desktop or the command deck. You can browse through the categories or search directly for a spark by name. Clicking on a spark will toggle its active status.

## Configuration
Sparks that are turned off are hidden from your main interface, keeping your environment clean. When you toggle a spark on, you'll receive a Magic Cloak notification confirming the activation, along with a quick action to read its documentation right here in the Enchiridion.
`,Vn=`# Suggestion Box

## Overview
Submit ideas and feature requests

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Yn=`# System Monitor

## Overview
Real-time system performance metrics

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,jn=`# VIP Club

## Overview
Exclusive perks for premium members

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,qn=`# Chaos

## Overview
Peer into the cosmic unknown

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Qn=`# HoloShell

## Overview
Holographic command-line interface

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Kn=`# The w⁴ Protocol

## Overview
Fourth-dimensional hosting platform

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,$n=`# Galaxy Guide

## Overview
Interactive walkthrough of the platform

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Jn=`# Trenchess

## Overview
Strategic chess in the trenches

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,Zn=`# Trophy Case

## Overview
Showcase your earned achievements

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,et=`# Nucleos

## Overview
Your central desktop environment

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,nt=`# Welcome

## Overview
Your first steps into YouMeOS

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,tt=`# Wizard's  Tower

## Overview
Advanced development configuration

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,ot=`# WP Admin

## Overview
WordPress administration panel

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,at=`# Lemon Aid

## Overview
Fresh lemonade economy simulator

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,it=`# Magic Formula

## Overview
Brew powerful automation recipes

## Details
This spark operates natively within the YouMeOS environment, providing seamless integration with the glassmorphic desktop and True North aesthetics.
`,st=`# Getting Started with YouMeOS

## Welcome to YouMeOS
YouMeOS is your centralized, browser-based operating environment. Designed to feel like a native desktop operating system, it provides a seamless workspace where you can launch tools, manage your profile, and multitask effortlessly. 

## Interface Overview

### The Desktop
The main visual area of YouMeOS is the Desktop. This is your primary workspace where all windowed applications (known as **Sparks**) will open, float, and operate. 

### The System Bar
Located at the bottom of the screen, the System Bar is your navigational anchor:
- **App Launcher**: Typically found on the far left, clicking this will bring up a grid of all available Sparks on your system.
- **Active Processes**: As you open Sparks, they will appear in the center of the System Bar, allowing you to quickly switch between them, minimize them, or bring them to the forefront.
- **System Tray**: On the far right, you'll find system status indicators such as the current time, system settings, or environment details.

### Navigation Rails
- **Left Rail**: When expanded, provides global navigation elements across the broader COMPASS ecosystem.
- **Right Rail**: Reserved for context-specific communications, notifications, or quick actions depending on your active tasks.

## Sparks: Your Applications
In YouMeOS, applications are called **Sparks**. They behave exactly like native windows: you can drag them around the desktop, minimize them to the System Bar, maximize them to take up the full viewport, and close them when finished.

Some essential Sparks to get you started include:
- **Welcome-U**: Your onboarding screen that provides a friendly introduction to the environment. 
- **Enchiridion**: The official documentation system. Use this to search and drill down into guides and technical references (like this very document!).
- **HoloShell Terminal**: Your command-line interface access for direct system interaction.
- **Scratch Paper**: A sleek notepad for jotting down thoughts quickly. Your notes persist automatically between sessions.
- **Helios**: Your profile and identity control center, where you can configure your "I Am" statements and manage your display name.
- **System Monitor**: An interactive visualizer to see the current load and activity of your OS environment.

## Window Management
Multitasking in YouMeOS is intuitive and dynamic:
- **Focus**: Clicking on any part of a Spark's window will bring it to the front and make it the active window.
- **Drag**: Click and hold the header of any Spark to move it anywhere on the desktop.
- **Resize**: Grab the edges or corners of a supported window to adjust its dimensions to your liking. 
- **Animations**: Watch out for smooth transitions when minimizing (sending a window down to the System Bar) and maximizing.

## Getting Help
If you are ever unsure how a specific subsystem operates, launch the **Enchiridion** spark from the App Launcher. From there, you can browse an alphabetically organized, scrollable sidebar that houses all available platform documentation.
`,rt=`# The Swiss Army Knife for Life

## What Good Does This Do Me?

When exploring YouMeOS and the COMPASS platform, the number one question people ask is simple: *"What good does this actually do me?"*

The short answer: **It is the Swiss Army Knife for life that makes you a true sovereign person with the rest of the world.**

We often use the word "Sovereign" to describe our overarching vision, and while it might sound like a heavy, philosophical term, its practical meaning for your daily life is incredibly grounding and empowering.

## What Does "Sovereignty" Actually Mean for You?

In the context of YouMeOS, personal sovereignty isn't about isolation; it's about absolute, irrefutable ownership of your digital existence. It means you are the undisputed owner of your data, your identity, and your creative output. 

Instead of renting space on platforms that monetize your attention and data, you operate from a foundation that you control. You are a sovereign entity interfacing with the world on your own terms.

## The Swiss Army Knife Utility

Just as a physical Swiss Army Knife equips you with the exact right tool for a multitude of unexpected real-world situations, YouMeOS equips you for the digital world. 

Here is how it acts as your ultimate multi-tool:

### 1. Unified Command Center
Everything you need—from managing your decentralized identity (Helios) to jotting down spontaneous ideas (Scratch Paper) and interacting with global economic protocols (Nexos)—happens in one cohesive, desktop-like environment. You don't have to juggle fragmented apps; your tools are unified.

### 2. Absolute Portability
Your workspace, your assets, your documents, and your identity aren't locked to a specific device. Because YouMeOS is a browser-based operating environment backed by robust, decentralized principles, your digital life travels with you. 

### 3. Economic Independence
Through integrated systems like The Crucible and the W4 Protocol, you aren't just a consumer; you are an active participant in a decentralized economy. You can transmute your time, effort, and engagement into tangible, system-recognized value without relying on traditional, predatory financial gateways.

### 4. Uncompromised Privacy
True sovereignty requires true privacy. By centralizing your tools within an environment built on self-ownership, you sever the reliance on third-party data harvesters. Your actions, notes, and metrics belong to you.

## The Bottom Line

When you boot into YouMeOS, you aren't just logging into a website. You are stepping into your own digital territory. You are equipping yourself with a versatile, ever-expanding Swiss Army Knife designed to help you navigate, build, and thrive as a sovereign individual in an interconnected universe.
`,lt=`# YouMeOS & My Compass Software Suite: Official Architectural Whitepaper

> *Bridging Codebase Implementation and System Documentation for Sovereign Internet Infrastructure*

---

## 1. Executive Summary

The **My Compass Software Suite** and **YouMeOS** represent a unified, stateful operating system architecture designed to transcend static, flat web interfaces. By combining a WordPress backend data engine (powering over 40% of the web) with a spatial Vue 3 + TypeScript desktop runtime, YouMeOS provides digital self-sovereignty for individuals while giving developers and enterprise platform builders (such as Amiara) the infrastructure to instantiate customized, federated software platforms.

### System Architecture Overview

\`\`\`mermaid
graph TB
    direction TB
    subgraph ClientLayer["Frontend Presentation Layer"]
        direction TB
        Desktop["YouMeOS Spatial Webtop (apps/youmeos)"]
        PWA["Standalone Unboxed Sparks (PWAs)"]
        Admin["WordPress Admin SPA (src/)"]
    end

    subgraph StateLayer["Application State & Router Layer"]
        direction TB
        WinStore["Window Store (useWindowStore)"]
        LaunchStore["Launcher Store (useLauncherStore)"]
        AppRouter["Vue Hash Router (router.ts)"]
    end

    subgraph APILayer["REST API Transport Layer"]
        direction TB
        Endpoints["COMPASS REST Endpoints (/wp-json/xophz-compass/v1)"]
        AuthN["Omega Source Identity & Auth"]
    end

    subgraph CoreLayer["Backend Core Data Layer"]
        direction TB
        MainPlugin["Core Plugin (xophz-compass)"]
        ModPlugins["Modular Plugins (xophz-compass-*)"]
        WPDB[("WordPress Database")]
    end

    ClientLayer --> StateLayer
    StateLayer --> APILayer
    APILayer --> CoreLayer
\`\`\`

---

## 2. Codebase vs. Architectural Documentation Mapping

To ensure structural accuracy without speculative abstraction, the following matrix aligns system documentation with verified codebase symbols:

| System Component | Documentation Abstraction | Verified Codebase Symbol & Path |
| :--- | :--- | :--- |
| **Window Manager** | \`<x-window>\` Construct | \`apps/youmeos/components/constructs/u-window/u-window.vue\` |
| **OS Window State** | \`useOsStore\` | \`src/stores/window.store.ts\` (\`useWindowStore\`) |
| **App Launcher** | Launch Pad / Start Menu | \`src/stores/launcher.store.ts\` (\`useLauncherStore\`) |
| **Main App Shell** | Layout Blueprint | \`src/components/blueprints/layouts/x-compass-layout/x-compass-layout.vue\` |
| **Router Engine** | Lazy Route Loader | \`src/routes/router.ts\` (Hash History for WP Admin) |
| **YouMeOS Standalone** | Web Desktop App | \`apps/youmeos/mount-youmeos.ts\` & \`apps/youmeos/routes/router.ts\` |
| **Core PHP Plugin** | Dark-Matter Data Layer | \`wp-content/plugins/xophz-compass/\` |
| **Modular Plugins** | Feature Sparks | \`wp-content/plugins/xophz-compass-*\` (25+ modular plugins) |

---

## 3. Micro-Level Architecture: The Sovereign Desktop

At the individual level, YouMeOS delivers a desktop-grade web application environment running in modern browsers or Progressive Web App (PWA) containers.

\`\`\`mermaid
graph TB
    subgraph Webtop["YouMeOS Spatial Webtop Runtime"]
        direction TB
        subgraph Core["Sovereign Core Layer"]
            direction TB
            ID["Omega Source ID (AuthN/AuthZ)"]
            VFS["Virtual File System (home://, wp://)"]
            P2P["P2P Dirt/XP Micro-Transactions"]
        end
        subgraph WM["Window Store Runtime (useWindowStore)"]
            direction TB
            W1["Spark: Questbook (x: 100, y: 100)"]
            W2["Spark: Custom App - Amiara (variant: nyx/sol/luna)"]
        end
        Core --> WM
    end
\`\`\`

### Verified Runtime Mechanics
* **Window State Management (\`useWindowStore\`):** Tracks geometry (\`x\`, \`y\`, \`width\`, \`height\`), \`zIndex\`, window modes (\`webtop\`, \`viewport\`, \`display\`, \`maximus\`), theme variants (\`nyx\`, \`infinity\`, \`rhae\`, \`tesla\`, \`sol\`, \`luna\`), and Aero-Snap bounds (\`left\`, \`right\`, \`top\`, \`top-left\`, etc.).
* **Decoupled PWA Sparks:** Frontend routes (\`/bomb-bag\`, \`/questbook\`, \`/magic-formula\`) act as independent apps. Service Workers allow individual Sparks to unbox from the main shell and run natively on desktop or mobile home screens.
* **Component Atomic Hierarchy:** Enforces X-Atoms (\`x-btn\`, \`x-card\`, \`x-text-field\`, \`x-window\`, \`x-declaration\`, \`x-markdown\`) over raw HTML elements to maintain visual and functional consistency.

---

## 4. Macro-Level Architecture: The W4 Protocol & WordPress Core

At the macro-level, YouMeOS scales through the **W4 Protocol (World Wide Web Work)**, connecting sovereign nodes into a federated tesseract.

\`\`\`mermaid
graph TB
    direction TB
    W4["The W4 Protocol (Global Federated Tesseract)"]
    
    subgraph SovNode["Sovereign Node"]
        direction TB
        BB["BlackBOX WordPress Engine"]
        API["COMPASS PHP REST APIs"]
        PWA["Standalone Sparks / PWAs"]
    end
    
    subgraph EntNode["Enterprise Node"]
        direction TB
        MN["Multi-Network Clusters"]
        SCV["Single Customer View (SCV)"]
        Civic["Civic Transparency Sparks"]
    end
    
    W4 --> SovNode
    W4 --> EntNode
    SovNode <-->|"ActivityPub / W4 Handshake"| EntNode
\`\`\`

### Backend Data Layer
* **WordPress Engine:** Utilizes custom PHP plugins (\`xophz-compass\`, \`xophz-compass-bazaar\`, \`xophz-compass-bomb-bag\`, \`xophz-compass-quests\`, \`xophz-compass-moving-castle\`, etc.) to expose REST API endpoints without requiring proprietary SaaS server clusters.
* **Multi-Network Scaling:** Leverages \`wp-multi-network\` for cross-domain identity and Single Customer View (SCV) across parent companies and partner platforms.

---

## 5. Platform Redistribution Model (Building Platforms Like Amiara)

Third-party builders, creators, and platform developers (such as Amiara) can build, deploy, and redistribute custom digital platforms on top of YouMeOS using a five-stage pipeline:

\`\`\`mermaid
graph TB
    direction TB
    S1["1. Node Provisioning<br/>(Build a BLOX Engine)"] --> S2["2. Spark SDK & API Integration<br/>(Vue 3 + COMPASS REST)"]
    S2 --> S3["3. PWA Packaging & Unboxing<br/>(Standalone Install)"]
    S3 --> S4["4. Federated Identity & Shared State<br/>(Omega Source & Auth)"]
    S4 --> S5["5. Bazaar Marketplace Distribution<br/>(Monetization & Micro-Txns)"]
\`\`\`

### Stage Breakdown
1. **Node Provisioning (Build a BLOX Engine):**
   * Platform builders deploy pre-configured WordPress instances (BlackBOX nodes) pre-loaded with the COMPASS plugin suite.
2. **Spark SDK & API Integration:**
   * Builders build custom Vue 3 components using project X-Atoms and connect to existing REST API endpoints or custom namespace routes (\`/amiara/v1\`).
3. **PWA Packaging & Unboxing:**
   * Apps are compiled as standalone Progressive Web Apps. Users can access Amiara inside the YouMeOS spatial shell or install it as a standalone app icon.
4. **Federated Identity & Shared State:**
   * Integrates with \`useAuth\` and Omega Source identity mechanisms, allowing user credentials, preferences, and XP to move seamlessly across nodes.
5. **Bazaar Marketplace & Micro-Transactions:**
   * Builders publish custom Sparks to the YouMeOS Bazaar (\`xophz-compass-bazaar\`), utilizing Dirt micro-transactions for app distribution and premium feature upgrades.

---

## 6. End-to-End Data & Execution Flow

\`\`\`mermaid
graph TB
    direction TB
    UserAction["User Click / Drag Event"] --> VueComponent["X-Atom / Spark Component"]
    VueComponent --> PiniaStore["Pinia Store (windowStore / launcherStore)"]
    PiniaStore --> AxiosService["HTTP Service (axios / REST Client)"]
    AxiosService --> WPEndpoint["WordPress REST Controller (/wp-json/xophz-compass/v1)"]
    WPEndpoint --> PHPPlugin["COMPASS PHP Plugin Layer"]
    PHPPlugin --> Database[("WordPress MySQL Database")]
\`\`\`

---

## 7. Business Hierarchy & Acquisition Funnel

The Hall of the Gods ecosystem structures operations into five interlocking tiers:

\`\`\`mermaid
graph TB
    direction TB
    Tier1["1. Hall of the Gods, Inc.<br/>(Parent Holding Company & Infrastructure Fund)"]
    Tier2["2. Worldwide Webwork - W4 Protocol<br/>(Foundational Narrative & 4D Architecture)"]
    Tier3["3. Build a BLOX<br/>(Self-Serve SaaS & BlackBOX Provisioning)"]
    Tier4["4. BlackBOX WhiteGLOVE<br/>(Managed Concierge Hosting Tiers)"]
    Tier5["5. My Compass Consulting<br/>(Enterprise Bespoke Strategy & Synthesis)"]

    Tier1 --> Tier2
    Tier2 --> Tier3
    Tier3 --> Tier4
    Tier4 --> Tier5
\`\`\`

---

## 8. Starship Interface Standard

Applications extending YouMeOS follow strict UI design rules:
* **Background:** Dark mode default (\`#0d1117\`).
* **Highlight Accent:** Neon Cyan (\`#62c9ff\`) for primary focus states.
* **Glassmorphism:** Backdrops using \`backdrop-filter: blur(20px)\` and semi-transparent containers.
* **Micro-Animations:** Organic hover states and responsive window movement.
`,dt=`# Nimbus Interaction Modes

## Mode Overview

| Mode | Icon | Behavior | Key Feature |
|------|------|----------|-------------|
| **View** | \`fal fa-eye\` | Current default — click to open/preview | Read-only browsing |
| **Select** | \`fal fa-check-square\` | Click to toggle selection with checkbox | Multi-select, total size display, drag-to-folder |
| **Split** | \`fal fa-columns\` | Dual-pane browser | Navigate independently, drag between panels |
| **Destructive** | \`fal fa-dumpster-fire\` | Select + trash overlay | Move to Google Trash with confirmation |

## Mode Switcher

Lives in the viewport toolbar (next to the view-mode icon group). Persisted to \`localStorage\` under \`nimbus-interaction-mode\`.

## Build Order

Phase 1 → 2 → 4 → 5 → 3

| Phase | Feature | Status |
|-------|---------|--------|
| 1 | Mode state + View baseline | ✅ Done |
| 2 | Select Mode | ✅ Done |
| 3 | Split Mode (most complex) | ⬜ |
| 4 | Destructive Mode | ✅ Done |
| 5 | Oscar Dumpster — Trash Viewer | ✅ Done |

## Key Files

- \`media-drive-app.vue\` — Parent state, toolbar, mode switcher
- \`o-media-viewport.vue\` — Viewport rendering per mode
- \`google.service.ts\` — Google Drive API methods (\`moveFile\`, \`trashFiles\`, \`getTrashedFiles\`)

## Google API Endpoints

**Move file:**
\`\`\`
PATCH /drive/v3/files/{fileId}
Body: { addParents: targetFolderId, removeParents: currentParentId }
\`\`\`

**Trash file:**
\`\`\`
PATCH /drive/v3/files/{fileId}
Body: { trashed: true }
\`\`\`

**List trashed:**
\`\`\`
GET /drive/v3/files?q=trashed=true
\`\`\`

**Restore from trash:**
\`\`\`
PATCH /drive/v3/files/{fileId}
Body: { trashed: false }
\`\`\`

**Empty trash:**
\`\`\`
DELETE /drive/v3/files/trash
\`\`\`

## Design Decisions

- Split mode navigation: Shared sidebar rails — whichever panel is focused receives sidebar navigation
- All modes work for both Google Drive and local WordPress media
- Selection clears on mode switch or folder navigation
`,ct=["innerHTML"],pt=D({__name:"x-markdown",props:{content:{}},setup(x){const c=x,w=u(()=>c.content?G.parse(c.content):"");return(r,P)=>(y(),E("div",{class:"x-markdown-container",innerHTML:w.value},null,8,ct))}}),ht=I(pt,[["__scopeId","data-v-c9651a1d"]]),ut={class:"h-100 w-100",style:{position:"relative"}},mt={class:"reading-pane mx-auto w-100 brand-styled-content"},gt="../../../../../docs/",yt=D({__name:"enchiridion-app",setup(x){const c=Object.assign({"../../../../../docs/Bomb-Bag-System.md":j,"../../../../../docs/CHANGELOG.md":q,"../../../../../docs/Cloudflare-Email-Routing.md":Q,"../../../../../docs/Design-Tokens.md":K,"../../../../../docs/Hello-World.md":$,"../../../../../docs/Project-Philosophy.md":J,"../../../../../docs/The-W4-Protocol-and-Fractal-OS.md":Z,"../../../../../docs/YouMeOS-Federated-Identity.md":ee,"../../../../../docs/analytics_google-analytics-integration.md":ne,"../../../../../docs/authenticity_and_licensing.md":te,"../../../../../docs/bazaar_pos_premium-upgrades.md":oe,"../../../../../docs/business/BOX_TIER_ARCHITECTURE.md":ae,"../../../../../docs/business/business_compass_pricing_proposal.md":ie,"../../../../../docs/business/business_dirt_digital_mineral_economy.md":se,"../../../../../docs/business/business_ecosystem_overview.md":re,"../../../../../docs/business/business_patent_strategy.md":le,"../../../../../docs/business/business_sephiroth_godhead_progression.md":de,"../../../../../docs/business/business_storybrand_framework.md":ce,"../../../../../docs/business/business_w4_protocol_economy.md":pe,"../../../../../docs/business/business_youmeos_decentralized_pwa_model.md":he,"../../../../../docs/business/business_youmeos_storybrand_manifesto.md":ue,"../../../../../docs/business/marketing_drip_campaigns.md":me,"../../../../../docs/business/patent_diagrams_and_prior_art.md":ge,"../../../../../docs/compass/bazaar_multi_inventory_system.md":ye,"../../../../../docs/compass/blueprints/Core-Taxonomy.md":we,"../../../../../docs/compass/blueprints/System-Overview.md":fe,"../../../../../docs/compass/ecosystem/Patreon-and-Bazaar.md":be,"../../../../../docs/compass/ecosystem/Portals-and-Ecosystem.md":ve,"../../../../../docs/compass/ecosystem/software_manager.md":Se,"../../../../../docs/compass/plugins/Bazaar-POS-System.md":ke,"../../../../../docs/compass/plugins/Bomb-Bag-System.md":xe,"../../../../../docs/compass/plugins/Bug-Net-System.md":Pe,"../../../../../docs/compass/plugins/Hookshot-System.md":Ae,"../../../../../docs/compass/plugins/Lemon-Aid-System.md":Ce,"../../../../../docs/compass/plugins/Magic-Cloak-System.md":Te,"../../../../../docs/compass/plugins/Magic-Mirror-System.md":Me,"../../../../../docs/compass/plugins/Mirror-Shield-System.md":ze,"../../../../../docs/compass/plugins/Moving-Castle-System.md":_e,"../../../../../docs/compass/plugins/Performance-Widget-System.md":Oe,"../../../../../docs/compass/plugins/Questbook-CRM-System.md":Re,"../../../../../docs/compass/plugins/Silver-Arrow-System.md":Ie,"../../../../../docs/compass/plugins/Treasure-Trove-and-Map-System.md":De,"../../../../../docs/compass/plugins/magic-formula-system.md":Ee,"../../../../../docs/compass/xp-pro-features.md":Be,"../../../../../docs/compass_media_library_system.md":We,"../../../../../docs/github-plugin-updater.md":Le,"../../../../../docs/moving-castle_magic-door.md":Fe,"../../../../../docs/reference/Ecosystem-Architecture.md":Ue,"../../../../../docs/reference/Project-Philosophy.md":Ge,"../../../../../docs/reference/versioning.md":Xe,"../../../../../docs/spark_wizards-tower_feature-flags.md":Ne,"../../../../../docs/sparks_omegafile.md":He,"../../../../../docs/youmeos/Nomenclature-Mapping.md":Ve,"../../../../../docs/youmeos/Universal-OS-Vision.md":Ye,"../../../../../docs/youmeos/blueprints/Helios-Modules.md":je,"../../../../../docs/youmeos/blueprints/Legacy-Engine-Mechanics.md":qe,"../../../../../docs/youmeos/blueprints/OS-Architecture.md":Qe,"../../../../../docs/youmeos/blueprints/Spark-Federation-Security.md":Ke,"../../../../../docs/youmeos/blueprints/Starmap-and-Federation-Blueprint.md":$e,"../../../../../docs/youmeos/blueprints/Unified-Contacts-Blueprint.md":Je,"../../../../../docs/youmeos/core-engine/Asynchronous-Cosmos.md":Ze,"../../../../../docs/youmeos/core-engine/PWA-Desktop-Node.md":en,"../../../../../docs/youmeos/core-engine/Sovereign-Identity.md":nn,"../../../../../docs/youmeos/core-engine/YouMeOS-Engine.md":tn,"../../../../../docs/youmeos/design-system/Component-Architecture.md":on,"../../../../../docs/youmeos/design-system/Component-Refactoring-Guide.md":an,"../../../../../docs/youmeos/design-system/Design-System-Atoms.md":sn,"../../../../../docs/youmeos/design-system/Sub-App-Layout.md":rn,"../../../../../docs/youmeos/roadmaps/General-Roadmap.md":ln,"../../../../../docs/youmeos/roadmaps/Migration-Progress.md":dn,"../../../../../docs/youmeos/roadmaps/Tesseract-4D-Visualization.md":cn,"../../../../../docs/youmeos/roadmaps/ThreeJS-Legacy-Migration.md":pn,"../../../../../docs/youmeos/roadmaps/Web3-Vision-Roadmap.md":hn,"../../../../../docs/youmeos/roadmaps/WebGPU-Migration.md":un,"../../../../../docs/youmeos/roadmaps/WebGPU-Shader-Migration.md":mn,"../../../../../docs/youmeos/roadmaps/Window-Management.md":gn,"../../../../../docs/youmeos/roadmaps/YouMeOS-Decentralization-Roadmap.md":yn,"../../../../../docs/youmeos/spark-plugs/blackbox.md":wn,"../../../../../docs/youmeos/spark-plugs/blackjack.md":fn,"../../../../../docs/youmeos/spark-plugs/bubblegum.md":bn,"../../../../../docs/youmeos/spark-plugs/bugnet.md":vn,"../../../../../docs/youmeos/spark-plugs/cafeteria.md":Sn,"../../../../../docs/youmeos/spark-plugs/calculator.md":kn,"../../../../../docs/youmeos/spark-plugs/chronos.md":xn,"../../../../../docs/youmeos/spark-plugs/cookie-jar.md":Pn,"../../../../../docs/youmeos/spark-plugs/debug-console.md":An,"../../../../../docs/youmeos/spark-plugs/enchiridion.md":Cn,"../../../../../docs/youmeos/spark-plugs/gaea.md":Tn,"../../../../../docs/youmeos/spark-plugs/helios.md":Mn,"../../../../../docs/youmeos/spark-plugs/holosweeper.md":zn,"../../../../../docs/youmeos/spark-plugs/jukebox.md":_n,"../../../../../docs/youmeos/spark-plugs/local-produce.md":On,"../../../../../docs/youmeos/spark-plugs/logos.md":Rn,"../../../../../docs/youmeos/spark-plugs/lunch-room.md":In,"../../../../../docs/youmeos/spark-plugs/midnight-nerd.md":Dn,"../../../../../docs/youmeos/spark-plugs/neon-notes.md":En,"../../../../../docs/youmeos/spark-plugs/nexus.md":Bn,"../../../../../docs/youmeos/spark-plugs/noosphere.md":Wn,"../../../../../docs/youmeos/spark-plugs/notepad.md":Ln,"../../../../../docs/youmeos/spark-plugs/omega-source.md":Fn,"../../../../../docs/youmeos/spark-plugs/paint.md":Un,"../../../../../docs/youmeos/spark-plugs/snake.md":Gn,"../../../../../docs/youmeos/spark-plugs/social-preview.md":Xn,"../../../../../docs/youmeos/spark-plugs/solitaire.md":Nn,"../../../../../docs/youmeos/spark-plugs/spark-plugs.md":Hn,"../../../../../docs/youmeos/spark-plugs/suggestion-box.md":Vn,"../../../../../docs/youmeos/spark-plugs/sys-monitor.md":Yn,"../../../../../docs/youmeos/spark-plugs/take-my-money.md":jn,"../../../../../docs/youmeos/spark-plugs/telescope.md":qn,"../../../../../docs/youmeos/spark-plugs/terminal.md":Qn,"../../../../../docs/youmeos/spark-plugs/tesseract.md":Kn,"../../../../../docs/youmeos/spark-plugs/tourguide.md":$n,"../../../../../docs/youmeos/spark-plugs/trenchess.md":Jn,"../../../../../docs/youmeos/spark-plugs/trophy-case.md":Zn,"../../../../../docs/youmeos/spark-plugs/u-nucleos.md":et,"../../../../../docs/youmeos/spark-plugs/welcome-u.md":nt,"../../../../../docs/youmeos/spark-plugs/wizards-tower.md":tt,"../../../../../docs/youmeos/spark-plugs/wp-admin.md":ot,"../../../../../docs/youmeos/spark-plugs/xophz-lemonade-stand.md":at,"../../../../../docs/youmeos/spark-plugs/xophz-magic-formula.md":it,"../../../../../docs/youmeos/user-guides/youmeos-user-guides-getting-started.md":st,"../../../../../docs/youmeos/user-guides/youmeos_user_guides_swiss_army_knife.md":rt,"../../../../../docs/youmeos/youmeos_compass_whitepaper.md":lt,"../../../../../docs/youmeos_nimbus_interaction-modes.md":dt}),w=n=>{const e=n.toLowerCase();return e.includes("start here")?"fal fa-stars":e.includes("blueprints")?"fal fa-drafting-compass":e.includes("user guides")?"fal fa-map-signs":e.includes("core engine")?"fal fa-microchip":e.includes("design system")?"fal fa-swatchbook":e.includes("roadmaps")?"fal fa-road":e.includes("ecosystem")?"fal fa-planet-ringed":e.includes("plugins")||e.includes("sparks")?"fal fa-plug":e.includes("reference")?"fal fa-books":e.includes("general")?"fal fa-book-spells":"fal fa-folder"},r=u(()=>Object.keys(c).map(n=>{const e=n.replace(gt,""),t=e.split("/"),o=t.pop()||"",a=o.replace(".md","");let l=a.split("-").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" "),h="03. Platform Docs",m="General";const W=o.toLowerCase()==="hello-world.md",L=t.length>=2&&["compass","youmeos"].includes(t[0].toLowerCase());W?(h="00. Welcome",m="Start Here"):L?(h=t[0].toLowerCase()==="youmeos"?"01. YouMeOS":"02. COMPASS",m=t[1]):t.length>0&&(h="03. Platform Docs",m=t[0]);const z=m.replace(/[-_]/g," ").split(" ").map(p=>p.charAt(0).toUpperCase()+p.slice(1).toLowerCase()).join(" ");let b="fal fa-file-alt",v="#62c9ff";if(z.toLowerCase()==="sparks"){const g=U().apps.find(F=>F.id===a);g&&(b=g.icon||b,v=g.color||v,l=g.title||l)}return{path:n,relativePath:e,title:l,category:z,root:h,icon:b,color:v}}).sort((n,e)=>n.root!==e.root?n.root.localeCompare(e.root):n.category!==e.category?n.category.localeCompare(e.category):n.title.localeCompare(e.title))),P=u(()=>{const n={};return r.value.forEach(e=>{const t=`${e.root}/${e.category}`;n[t]||(n[t]=[]),n[t].push(e)}),Object.keys(n).sort().map(e=>{const t=n[e],o=t[0].category;return{id:e,title:o,icon:w(o),children:t.map(a=>({id:a.path,title:a.title,icon:a.icon}))}})}),i=R("splash"),A=u(()=>r.value.find(n=>n.path===i.value)),C=u(()=>i.value==="splash"||!c[i.value]?null:c[i.value]),f=R(null);X(i,()=>{f.value&&(f.value.scrollTop=0)},{flush:"post"});const B=n=>{if(!n)return null;const e=n.toLowerCase(),t=e.replace(/^u-/,"").replace(/^xophz-/,"").replace(/\.md$/,"");let o=r.value.find(a=>(a.relativePath.split("/").pop()?.replace(".md","").toLowerCase()||"")===e);return o||(o=r.value.find(a=>(a.relativePath.split("/").pop()?.replace(".md","").toLowerCase()||"").replace(/^u-/,"").replace(/^xophz-/,"")===t),o)||(o=r.value.find(a=>a.path.toLowerCase().includes(e)||a.path.toLowerCase().includes(t)),o)?o:(o=r.value.find(a=>a.title.toLowerCase().includes(t)),o||null)},T=n=>{const e=B(n);e&&(i.value=e.path)},M=typeof sessionStorage<"u"?sessionStorage.getItem("youmeos:enchiridion:open"):null;return M&&(T(M),typeof sessionStorage<"u"&&sessionStorage.removeItem("youmeos:enchiridion:open")),typeof window<"u"&&window.addEventListener("youmeos:enchiridion:open",n=>{const e=n.detail;e&&T(e)}),(n,e)=>{const t=S("x-spark-splash-action"),o=S("t-spark-splash"),a=S("u-window");return y(),_(a,{id:"enchiridion",title:"Enchiridion",icon:"fal fa-book-spells","brand-color":"#62c9ff",width:1e3,height:700,"default-nav-pinned":"","nav-items":P.value,"active-nav":i.value,"onUpdate:activeNav":e[0]||(e[0]=l=>i.value=l)},{"app-bar-title":d(()=>[H(V(A.value?.title||"Enchiridion"),1)]),default:d(()=>[O("div",ut,[C.value?(y(),E("div",{key:1,ref_key:"contentScrollEl",ref:f,class:"enchiridion-content fill-height custom-scrollbar",style:N({"--brand-color":A.value?.color||"#62c9ff"})},[O("div",mt,[s(ht,{content:C.value},null,8,["content"])])],4)):(y(),_(o,{key:0,icon:"fal fa-book-spells",title:"Enchiridion",subtitle:"The Ultimate Handbook to the","subtitle-highlight":"Youniverse"},{background:d(()=>[s(Y)]),actions:d(()=>[s(k,{cols:"12",sm:"4"},{default:d(()=>[s(t,{title:"Explore",description:"All the knowledge of the Youniverse",icon:"fal fa-compass","icon-color":"#62c9ff"})]),_:1}),s(k,{cols:"12",sm:"4"},{default:d(()=>[s(t,{title:"Learn",description:"Master the tools of the Youniverse",icon:"fal fa-book-open","icon-color":"#D9BE6F"})]),_:1}),s(k,{cols:"12",sm:"4"},{default:d(()=>[s(t,{title:"Dream",description:"Shape the future of your Youniverse",icon:"fal fa-sparkles","icon-color":"#22c55e"})]),_:1})]),_:1}))])]),_:1},8,["nav-items","active-nav"])}}}),At=I(yt,[["__scopeId","data-v-3177f1f2"]]);export{At as default};
