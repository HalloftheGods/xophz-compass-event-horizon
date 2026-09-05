import{_ as G,a as z,b as F,c as Y,d as H,e as U,f as N,g as V,h as j,i as q,j as X,k as $,l as K,m as Q,n as Z,o as J,p as ee,q as ne,r as te,s as oe,t as ae,u as ie,v as re,w as se,x as le,y as ce,z as de,A as ue,B as pe,C as me,D as he,E as ge,F as ye,G as we,H as fe,I as ve,J as be,K as Se,L as ke,M as Te,N as Pe,O as xe,P as Ae,Q as Me,R as Ce,S as Le,T as Oe,U as Re,V as _e,W as De,X as Ie,Y as We,Z as Ee,$ as Be,a0 as Ge,a1 as ze,a2 as Fe,a3 as Ye,a4 as He,a5 as Ue,a6 as Ne,a7 as Ve,a8 as je,a9 as qe,aa as Xe,ab as $e}from"./yellow-links-Bo3re5Rm.js";import{_ as D,R as Ke}from"./youmeos-JczLmkDX.js";import{f as I,cf as f,cd as W,e as h,cM as Qe,v as Ze,O as Je,c8 as en,W as S,cg as O,ci as u,q as R,j as c,n as nn,Y as tn,J as on,b as _}from"./vendor-6TLe4exs.js";import an from"./enchiridion-canvas-CVJf_S9J.js";import{o as k}from"./vendor-vuetify-DOi9NQDe.js";import"./vendor-core-BCGDVfqk.js";import"./vendor-three-t6OjKSDq.js";import"./vendor-echarts-DI9TvtdM.js";const rn='# YouMeOS Changelog\n\nAll notable changes to the YouMeOS spatial computing environment and microverse web platform will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).\n\n## [2026-09-04]\n\n### Added\n- **Author\'s Note Spark Welcome Landing Integration ([WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue), [useWelcomeLanding.ts](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/composables/useWelcomeLanding.ts), [welcome.d.ts](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/types/welcome.d.ts), [u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [author-note-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/author-note/author-note-spark.vue))**:\n  * Added "Author\'s Note" shortcut to desktop navigation on the YouMeOS Welcome Landing page alongside Login, Guest, and Register.\n  * Configured brand signature Neon Cyan styling and hover perspective effects for the Author\'s Note shortcut.\n  * Updated `u-webtop.vue` active app and window filtering to allow the Author\'s Note spark to render on the welcome route while keeping background desktop windows suppressed.\n  * Enhanced `author-note-spark.vue` card toss completion handler to persist completion state to local storage.\n\n- **HoloShell Unix-Like Operating System Environment & Pluggable CLI Registry ([terminal-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/terminal-app.vue), [core-commands.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/commands/core-commands.ts), [man.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/commands/man.ts), [command-registry.service.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/services/command-registry.service.ts), [useTerminalState.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/composables/useTerminalState.ts), [m-terminal-top-monitor.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/components/m-terminal-top-monitor.vue), [m-terminal-pager.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/terminal/components/m-terminal-pager.vue))**:\n  * Transformed HoloShell from a static mock console into a genuine Unix-like operating system environment bound to live reactive Pinia stores (`useWindowStore`, `useLauncherStore`).\n  * Added process lifecycle commands (`ps` formatted process snapshot table, `open`/`launch <spark>`, `kill <pid|spark>`, `focus`, `minimize`, `maximize`).\n  * Added interactive live `top` process monitor displaying real-time JS heap memory metrics (`performance.memory`), active window counts, and running sparks, dismissable via `q` or `Ctrl+C`.\n  * Added `man <spark>` manual reader featuring an inline interactive markdown pager with scroll navigation and clean `q` exit, parsing genuine documentation assets from `docs/sparks/*.md`.\n  * Added extensible pluggable CLI command registry service enabling sparks (e.g. Solitaire, Notepad) to dynamically export and register custom CLI commands and subcommands with Tab autocompletion and execution context.\n  * Added virtual filesystem (VFS) navigation and shell utilities (`ls [-l]`, `cd`, `pwd`, `cat`, `uname [-a]`, `theme [variant]`, `env`, `whoami`, `uptime`, `date`, `clear`, `history`).\n  * Added pipeline stream executor supporting command chaining (`|`) and standard text filters (`grep [-i]`, `wc [-l|-w|-c]`, `head [-n]`, `tail [-n]`).\n  * Purged all synthetic mock data, randomized ping mocks, toy gimmicks, and hardcoded listings in compliance with Zero Mock Data rules.\n  * Colocated all project specs, test suites, and documentation inside `apps/youmeos/app/sparks/terminal/docs/` and `apps/youmeos/app/sparks/terminal/tests/`.\n\n- **Desktop Tour System & Spatial Onboarding Experience ([tour-content.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/tour-content.ts), [useDesktopTour.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/composables/useDesktopTour.ts), [useDesktopFlight.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/composables/useDesktopFlight.ts), [useDesktopCamera.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/composables/useDesktopCamera.ts), [useDesktopIgnition.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/composables/useDesktopIgnition.ts), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Implemented full 3D/4D cosmic onboarding narrative guiding users from individual sovereignty to business collaboration, civic transparency, and planetary webwork.\n  * Added camera glide physics with multi-stage coordinate transitions (`rx`, `ry`, `z`, `travelTime`, `restTime`) synchronizing camera flight and gliding message banners.\n  * Added `useDesktopTour` composable managing tour state, step navigation, spatial camera sequencing, and completion triggers.\n  * Added `m-fullscreen-prompt-dialog.vue` and integrated tour launches into `WelcomeLanding.vue` onboarding flows.\n  * Built automated tour verification test suite (`run-tour-tests.mjs`, `youmeos-tour-integration.spec.ts`, `u-desktop.spec.ts`) validating sequential tour stop execution and camera trajectory calculations.\n  * Enriched 4D temporal navigation messaging (Stop 6) with Lightweb mapping and personal timeline visualization to revisit personal growth alongside the internet.\n\n### Fixed\n- **WebSpark Installer Modal Scrollability & Pinned Layout ([o-webspark-installer-modal.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-webspark-installer-modal.vue))**:\n  * Configured `.webspark-installer-card` with flex column layout and viewport-adaptive maximum height (`max-height: min(85vh, 760px)`).\n  * Pinned the top header, step tracker indicator, and bottom action footer (`flex-shrink: 0`) to remain permanently accessible across all wizard steps.\n  * Enabled smooth vertical scrolling on `.webspark-installer__body` (`overflow-y: auto`, `min-height: 0`, `flex: 1 1 auto`) with project signature Neon Cyan starship scrollbar (`@include scroll-bar`).\n  * Replaced native `v-btn` close button with design-system primitive `x-btn`.\n\n- **Card Vault Launcher Icon Resolution & FontAwesome 5 Mask Extension ([_font-awesome.scss](file:///home/xopher/www/elysium/src/styles/vendor/_font-awesome.scss), [launcher.store.ts](file:///home/xopher/www/elysium/src/stores/launcher.store.ts), [useWebSparkIcons.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useWebSparkIcons.ts), [fa-icons.json](file:///home/xopher/www/elysium/src/assets/fa-icons.json))**:\n  * Resolved missing icon for Card Vault in Launch Pad and WebTop surfaces caused by `fa-cards` not existing in FontAwesome 5 Pro (v5.15.4).\n  * Created custom CSS mask implementation for `.fa-cards`, `.fal.fa-cards`, `.far.fa-cards`, and `.fas.fa-cards` in `_font-awesome.scss` using an inline scalable vector trading card wireframe with `currentColor` fill.\n  * Registered `card-vault` with `fal fa-cards` in `apps.value` defaults in `launcher.store.ts` for consistent launcher rendering.\n  * Added `My Card Vault` preset to `WEBSPARK_SITE_PRESETS` in `useWebSparkIcons.ts` and registered `cards` in `src/assets/fa-icons.json`.\n  * Generated standalone SVG fallback assets in Event Horizon spark-icons library for server-side icon resolution.\n\n## [2026-09-02]\n\n### Changed\n- **YouMeOS Spark Brand Color Auto-Resolution & Window Toolbar Gradient ([u-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.vue), [u-window-shell.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-shell.vue), [u-window-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-bar.vue), [u-window.scss](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.scss), [youmeos.scss](file:///home/xopher/www/elysium/apps/youmeos/app/youmeos.scss), [t-spark-splash.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/t-spark-splash.vue))**:\n  * Implemented automated brand color resolution in `u-window`: windows automatically inherit the spark\'s registered brand color from `launcherStore.apps` when `:brand-color` is omitted.\n  * Injected dynamic bottom-to-top linear gradient on `.u-window-bar` using `color-mix(in srgb, var(--window-brand-color, #62c9ff) 25%, transparent)` at the bottom edge radiating upwards to transparent at the top.\n  * Standardized spark splash blueprint top border to automatically reflect the resolved brand color via `--window-brand-color`.\n\n## [2026-09-01]\n\n### Fixed\n- **WordPress Admin Spark Full Navigation, Fallback & Bedrock Engine Portal ([wp-admin-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/wp-admin-spark.vue), [useWpAdminState.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/composables/useWpAdminState.ts), [wp-admin.config.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/wp-admin.config.ts))**:\n  * Restored full `u-window` `#nav-content` drawer with two-step animated navigation hierarchy, Dashicons mapping, and `<menu-skeleton :rows="10" />` loader.\n  * Restored `window.xophzCompassSettings.adminMenu` lookup and `DEFAULT_WP_ADMIN_MENU` fallback ensuring the spark never renders a blank menu state on public/unauthenticated environments.\n  * Restored Bedrock Loading Portal animation (`wp-loading-portal` with orbital energy rings, pulsing status badge, and ambient glow).\n  * Restored automatic WordPress iframe CSS stylesheet injection (`#adminmenumain` hiding, transparent canvas background, and cosmic gradient scrollbars) with in-iframe link click interception.\n  * Restored forward, back, and reload app bar buttons in `#app-bar-actions`.\n\n- **Solitaire Spark Layout Alignment, Aspect Ratio & Cascade Rendering ([solitaire-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/solitaire/solitaire-spark.vue), [m-solitaire-top-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/solitaire/molecules/m-solitaire-top-bar.vue), [m-solitaire-tableau.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/solitaire/molecules/m-solitaire-tableau.vue), [useSolitaireState.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/solitaire/composables/useSolitaireState.ts))**:\n  * Fixed giant logo overflow and unstyled stock pile by replacing raw `<img>` element with encapsulated `<x-playing-card :face-up="false" />`.\n  * Unified 7-column layout across top bar (Stock, Waste, Tools, Foundations) and tableau row using standardized `.sol-grid` with `aspect-ratio: 2.5 / 3.5` and `max-width: 850px` centering.\n  * Restored smooth `top: calc(cIndex * 28px)` card cascade spacing and wired up `@flip-card` interaction for revealing hidden tableau cards.\n  * Reinstated casino green felt background gradient (`radial-gradient` + `backdrop-filter: blur(20px)` + inner shadow).\n\n- **SomaFM Audio Player Stream Endpoints, Document-Level Referrer Policy & Stream Lookup ([useAudio.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useAudio.ts), [background-audio.vue](file:///home/xopher/www/elysium/apps/youmeos/components/primitives/background-audio.vue), [index.html](file:///home/xopher/www/elysium/apps/youmeos/index.html), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Added `<meta name="referrer" content="no-referrer">` at the document level and injected dynamically in `useAudio.ts` (`ensureNoReferrerPolicy()`) to prevent browsers from sending localhost `Referer` headers on cross-origin stream media requests, which triggered SomaFM\'s hotlinking firewall `403 (Forbidden)` rejections.\n  * Replaced `ice1.somafm.com` stream URLs with SomaFM DNS load-balanced cluster endpoints (`https://ice.somafm.com/...`).\n  * Fixed `u-desktop.ts` background click sound un-pausing to check `unifiedStream` as well as named track elements, preventing stream playback resets.\n  * Resolves `NotSupportedError: Failed to load because no supported source was found` and restores streaming in Beat Salad / Jukebox.\n\n- **Nucleos Spark Category Sub-Tab Navigation ([nucleos-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/nucleos-spark.vue), [AboutView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/views/AboutView.vue))**:\n  * Fixed `Uncaught TypeError: settingsCategories.some is not a function` in `handleSettingsOpen` by unwrapping the computed `settingsCategories.value` array.\n  * Added direct `@open-tab` event emitter on `AboutView.vue` and bound it to `navigate()` in `nucleos-spark.vue`.\n\n- **Side Menu Skeleton Shadow Loader Standardization ([o-forum-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-forum-window/o-forum-window.vue), [m-bugnet-nav.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bugnet/molecules/m-bugnet-nav.vue), [global-components.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/global-components.ts))**:\n  * Standardized side navigation loading states across all sparks to use animated `<menu-skeleton>` instead of spinner circles (`v-progress-circular`).\n  * Replaced loading spinner in `o-forum-window.vue` (used by Suggestion Box, Cafeteria, etc.) with `<menu-skeleton :rows="6" />`.\n  * Added `loading` prop support and `<menu-skeleton :rows="5" />` to `m-bugnet-nav.vue`.\n  * Registered `MenuSkeleton` (`menu-skeleton`) globally in `global-components.ts`.\n\n- **Dev Server Service Worker Fallback Resolution ([usePwaInstall.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/usePwaInstall.ts), [useDevicePush.ts](file:///home/xopher/www/elysium/apps/youmeos/composables/useDevicePush.ts))**:\n  * Added development port check to route Service Worker registrations to `/sw.js` when running on Vite dev servers, preventing `404` and `unsupported MIME type (\'text/html\')` console errors.\n\n- **Spark Card Status Plug & Color Visibility ([o-spark-card.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-spark-card.vue), [launcher.store.ts](file:///home/xopher/www/elysium/src/stores/launcher.store.ts))**:\n  * Resolved Night\'s Light and Swag Shop losing their side plug icon and card glow in the Spark Plugs Store by implementing computed `effectiveColor` fallback in `o-spark-card.vue` and replacing `"transparent"` color entries with `#00f2fe` and `#ff9800`.\n  * Sanitized FontAwesome icon strings in `launcher.store.ts` by removing inline `u-brand-gradient-text` classes.\n\n- **Night\'s Light Paint App Active Glow & Icon ([paint-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/paint/paint-app.vue))**:\n  * Fixed missing lightbulb icon when toggling Neon Glow by removing `text-yellow` from `:prepend-icon` string.\n  * Added `:active="isGlowing"`, `:class="{ \'glow-active\': isGlowing }"`, and luminous neon yellow CSS text-shadow and drop-shadow styling.\n  * Boosted canvas stroke `shadowBlur` multiplier to provide a radiant neon outline for all brush sizes.\n\n- **Service Worker PWA URL Resolution ([usePwaInstall.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/usePwaInstall.ts))**:\n  * Fixed `unsupported MIME type (\'text/html\')` and `404 (Not Found)` console errors by accurately resolving the Service Worker script path to the plugin distribution directory.\n\n- **Bubblegum Task List Props & Store Resilience ([o-task-list.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-task-list/o-task-list.vue), [m-task-group.vue](file:///home/xopher/www/elysium/apps/youmeos/components/molecules/m-task-group/m-task-group.vue), [m-task-row.vue](file:///home/xopher/www/elysium/apps/youmeos/components/molecules/m-task-row/m-task-row.vue))**:\n  * Fixed `Missing required prop: "parsedList"` and `Cannot read properties of undefined (reading \'length\')` by implementing computed `effectiveList` supporting both `:groups` and `:parsed-list`, and adding `effectiveStore` fallback with optional chaining across group and row molecules.\n\n- **Tab Leader & Audio LocalStorage Quota Resilience ([useTabLeader.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useTabLeader.ts), [useAudio.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useAudio.ts), [bubblegum.store.ts](file:///home/xopher/www/elysium/apps/youmeos/stores/bubblegum.store.ts))**:\n  * Wrapped `localStorage.setItem` and `localStorage.removeItem` in safe `try/catch` guards within `useTabLeader.ts` (`writeLeaderRecord`, `resignLeadership`) and `useAudio.ts` (`safeSetItem`, `safeGetItem`).\n  * Guarded `BroadcastChannel` initialization in `useTabLeader.ts` to prevent runtime crashes in restricted iframe/browser environments.\n  * Prevented unhandled `QuotaExceededError` from crashing Vue setup lifecycle in `DesktopLayout` and `YouMeOSApp`.\n  * Added resilient persistence error handling in `bubblegum.store.ts` for timer state, bubbles history, and task packs.\n\n- **Bubblegum Spark Template Ref & Prop Bindings ([bubblegum-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/bubblegum-spark.vue), [useBubblegumState.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/composables/useBubblegumState.ts))**:\n  * Fixed `Template ref "importInput" used on a non-ref value` by properly providing a typed `ref<HTMLInputElement | null>(null)` in `useBubblegumState`.\n  * Resolved `Invalid prop: type check failed for prop "getPackStats"` by defining and exporting `getPackStats` and `activePackStats` functions in `useBubblegumState`.\n\n- **YouMeOS Sparks Architecture & Monolithic Decomposition ([apps/youmeos/app/sparks/](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/))**:\n  * Decomposed all 11 monolithic sparks (`notepad`, `bubblegum`, `media-drive`, `neon-notes`, `bugnet`, `solitaire`, `tesseract`, `chronos`, `wp-admin`, `cookie-jar`, `midnight-nerd`) into the Gold Standard Atomic Layout: thin `<spark-id>-spark.vue` (<200L), `composables/use<SparkName>State.ts`, pure ambient `types/*.d.ts`, `views/`, and `molecules/`.\n  * Standardized Quantum Composable Contracts across all sparks (plain object returns with individual `ref()` / `computed()` primitives, clean destructuring, and autonomous `onScopeDispose` teardown).\n  * Integrated `useSparkNav` URL query synchronization (`?sparks=id:urme1:urme2`) across multi-tab sparks for deep-linking.\n  * Standardized WordPress PHP REST API envelopes to `{ success: true, data: T }` with seamless unwrapping in `useSparkRegistry.ts` and `launcher.store.ts`.\n  * Eliminated all dynamic `text-*` icon classes across `apps/youmeos/` components in compliance with FontAwesome SVG rendering requirements.\n\n## [2026-08-27]\n\n### Added\n- **Transparent Iframe Background Support for WebSparks & Subpages ([u-webapp.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-webapp.vue))**:\n  * Added automated `compass_iframe=1`, `theme=transparent`, and `embed=1` query parameter normalization to local/WordPress iframe URLs in `u-webapp.vue`.\n  * Assigned `name="compass-sub-app"` to embedded iframes to trigger WordPress Bedrock\'s transparent iframe mask (`iframe-mask.css`).\n  * Injected same-origin transparent background stylesheets on iframe load (`html, body, #wpwrap, #wpbody, #wpcontent, #wpbody-content`), matching `MyCompassApp` and `WPAdminApp` starship glassmorphism transparency.\n\n- **Dedicated External Link Window Action for WebSparks ([u-webspark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/webspark/u-webspark.vue), [u-webapp.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-webapp.vue), [u-window-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-bar.vue))**:\n  * Retained the standard `eject` button (`fal fa-eject`) for native sparks in `u-window-bar`.\n  * Added a dedicated standalone popout button with `<v-icon icon="fal fa-external-link" />` specifically for iframe/subpage sparks in `u-webspark.vue` via `#app-bar-actions`.\n  * Removed floating "Eject" overlay button from `u-webapp.vue` to prevent overlapping with iframe subpage contents and navigation bars.\n\n- **Magic Hat Theme Submodule & Microverse Integration ([.gitmodules](file:///home/xopher/www/youmeos-microverse/.gitmodules), [composer.json](file:///home/xopher/www/youmeos-microverse/composer.json), [00.00.00.01.auto-activator.php](file:///home/xopher/www/youmeos-microverse/blackbox/mu-plugins/00.00.00.01.auto-activator.php), [update-plugins.sh](file:///home/xopher/www/youmeos-microverse/scripts/update-plugins.sh))**:\n  * Added `hallofthegods/xophz-magic-hat` as an active Git submodule at `blackbox/themes/xophz-magic-hat` in `youmeos-microverse` tracking upstream repository updates.\n  * Integrated `hallofthegods/xophz-magic-hat` into Microverse\'s `composer.json` package configuration.\n  * Configured `00.00.00.01.auto-activator.php` to set `xophz-magic-hat` as the active theme by default across fresh container initializations.\n  * Updated `update-plugins.sh` scanner to inspect and track theme updates under `blackbox/themes`.\n\n### Fixed\n- **YouMeOS Media Player Play/Pause Double-Click Resolution ([useAudio.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useAudio.ts), [useTabLeader.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useTabLeader.ts), [u-system-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-system-bar/u-system-bar.vue), [u-desktop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.vue), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Fixed an issue where clicking the media play/pause button required two clicks due to uncleaned document-level interaction listeners catching bubbling click events and re-triggering `unlockAudio()`.\n  * Implemented atomic interaction listener cleanup (`cleanupInteractionListeners`) that immediately removes document listeners upon initial user interaction or programmatic playback.\n  * Added pause state awareness to `unlockAudio()` to prevent auto-resuming playback when audio was explicitly paused.\n  * Exported and integrated `claimLeadership` across `useAudio` actions (`togglePlay`, `playTrack`, `pauseTrack`, `nextTrack`, `prevTrack`) to eliminate stale leader delays on user interactions.\n  * Fixed Previous Track event wiring in `u-system-bar.vue` and `u-desktop.vue` from `next-track` to `prev-track`.\n\n- **Wizard\'s Tower Side Rail Configuration Persistence ([feature-flags.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/config/feature-flags.ts), [vite-plugin-feature-flags.js](file:///home/xopher/www/x/Xophz-COMPASS/src/core/vite-plugin-feature-flags.js), [SideRailSparksView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/SideRailSparksView.vue), [PinnedAppsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue), [FeatureFlagsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/FeatureFlagsView.vue), [launcher.store.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/stores/launcher.store.ts), [wizards-tower-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/wizards-tower-app.vue))**:\n  * Fixed an issue where Wizard\'s Tower Side Rail Sparks settings were failing to persist to the source file `src/config/feature-flags.ts`.\n  * Added dedicated `railPinned` and `railOrder` properties to `FeatureFlag` schema, decoupling side-rail docking from desktop corner anchors (`bottomRight`) and desktop order (`weight`).\n  * Updated `vite-plugin-feature-flags.js` AST parser and code generator to parse, rewrite, and persist `railPinned` and `railOrder` values to `src/config/feature-flags.ts`.\n  * Updated `SideRailSparksView.vue`, `PinnedAppsView.vue`, `FeatureFlagsView.vue`, and `launcher.store.ts` to cleanly mutate and synchronize `railPinned` and `railOrder` across Pinia state, localStorage, and source configuration.\n  * Added Side Rail docking status to the inspector drawer in `wizards-tower-app.vue`.\n\n- **Spark Share Wormhole PHP Launcher Route Link Restoration ([u-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.vue), [class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php))**:\n  * Restored the dedicated PHP wormhole launcher link parameter `share_spark` with window dimensions (`width`, `height`, `name`, `icon`) in `onShare`.\n  * Routed the generated link to the Event Horizon plugin\'s PHP template redirect interceptor (`render_share_spark_interceptor`), rendering the Three.js 3D spacetime wormhole canvas before auto-launching the standalone spark window.\n  * Sanitized spark display name by stripping internal system prefixes (such as `u-` or `webspark-`), rendering clean title names (e.g., "SPARK PLUGS" instead of "U SPARK PLUGS").\n\n## [2026-08-26]\n\n### Added\n- **Welcome Spark Unified Glassmorphic Redesign & Horizontal Scroll Elimination ([v-welcome-vision.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-vision.vue), [v-welcome-first-steps.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-first-steps.vue), [v-welcome-customize.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-customize.vue), [v-welcome-tours.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-tours.vue), [v-welcome-docs.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-docs.vue), [v-welcome-splash.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-splash.vue), [m-welcome-action.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/molecules/m-welcome-action.vue), [welcome-u-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/welcome-u-spark.vue))**:\n  * Unified all Welcome Spark view tabs around the Vision page aesthetic (centered hero icon, brand gradient headline, context description sheet, and 2-column responsive `<x-card>` glass grid).\n  * Eliminated unwanted horizontal scrollbars by stripping legacy negative margins (`-12px`) in action items and enforcing strict `overflow-x-hidden` across window items and scroll containers.\n  * Added standardized tonal action chips and interactive glass hover states across Gateway Navigation, Personalize UX, Spark Tours, and System Archives.\n\n## [2026-08-25]\n\n### Added\n- **Omega Source Sovereign Credentials & Licensure Tab ([o-credentials-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/components/o-credentials-tab.vue), [omega-source-app.controller.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/omega-source-app.controller.ts), [omega-source-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/omega-source-app.vue))**:\n  * Consolidated sovereign identity, collegiate graduation verification, and state professional licensure into **Omega Source** (`THEOS`).\n  * Added `credentials` tab in navigation items and splash screen quick-action triggers.\n  * Linked Welcome U first-run onboarding directly into Omega Source credentials management.\n\n- **YouMeOS Login User Flow Audit & Session Recovery ([useAuth.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/mechanics/useAuth.ts), [api.ts](file:///home/xopher/www/x/Xophz-COMPASS/src/core/api.ts), [x-login-overlay.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/x-login-overlay/x-login-overlay.vue), [class-xophz-compass-event-horizon-public.php](file:///home/xopher/www/x/Xophz-COMPASS/wp-content/plugins/xophz-compass-event-horizon/public/class-xophz-compass-event-horizon-public.php), [embedded-setup.ts](file:///home/xopher/www/youmeos-microverse/src/main/engine/embedded-setup.ts))**:\n  * Implemented unified 401/403 session expiration recovery across all Axios instances.\n  * Added automated workspace window minimization via `windowStore.minimizeAllWindows()` when an unauthenticated or 403 Forbidden response occurs.\n  * Replaced legacy interim login iframe with a native, starship glassmorphic re-authentication modal supporting credentials, OAuth providers, and inline key recovery.\n  * Added `/wp-json/xophz-compass/v1/me` REST route for lightweight session freshness validation.\n  * Added `checkAuth()` and `handleSessionExpired()` to `useAuth.ts` composable.\n  * Injected persistent deterministic authentication salts and cookie domain configuration into the embedded WordPress engine setup.\n\n- **Scratch Paper UI/UX & Mobile Overhaul ([neon-notes-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/neon-notes/neon-notes-app.vue), [neon-notes.md](file:///home/xopher/www/x/Xophz-COMPASS/docs/youmeos/spark-plugs/neon-notes.md))**:\n  * Added live voice-to-text dictation via Web Speech API (`SpeechRecognition`) that streams and types words into the note in real time as the user speaks.\n  * Added active listening status banner with pulsing audio indicator and one-click dictation toggle.\n  * Implemented adaptive Master-Detail layout for mobile screens and narrow window widths with seamless view switching and dedicated back navigation.\n  * Relocated live search bar into the universal top app header for unified discoverability across both list and active editor states.\n  * Streamlined templates to scratchpad formats (Quick Memo, Brain Spark, Code Scratchpad, Meeting Notes) to prevent functional overlap with the Bubblegum task manager spark.\n  * Added multi-color filter bar with pinned-only toggle and active count indicators.\n  * Added pin-to-top, note duplication, text export, and touch-accessible context actions for mobile users.\n  * Built quick formatting shelf (bullets `- `, headers `#`, code blocks, quotes `>`, dividers, timestamps).\n  * Added monospace font toggle, reactive copy feedback, live word/character/line metrics, and debounced auto-save indicators.\n  * Rebuilt styling with Starship glassmorphism, 7-color neon palette, and custom neon scrollbars.\n\n### Changed\n- **Responsive Spark Loading & Fast Loader Transition ([index.ts](file:///home/xopher/www/elysium/apps/youmeos/app/index.ts), [u-desktop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.vue), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts), [x-loader.vue](file:///home/xopher/www/x/Xophz-COMPASS/src/components/primitives/x-loader/x-loader.vue))**:\n  * Retained the `x-loader` overlay during async spark bundle loading while optimizing its fade transition from 0.85s down to a snappy 0.2s for instantaneous dismissal on load.\n  * Enhanced `sparkName` computation in `u-desktop.ts` to dynamically resolve titles from `windowStore.loadingSparks` for live loader status messaging.\n  * Eliminated the 9-frame initial ignition pause and 9-frame per-spark stagger delays in `executeIgnition`, allowing startup sparks to mount and unlock immediately.\n\n- **System Bar Desktop Toggle Relocation & Icon Update ([u-system-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-system-bar/u-system-bar.vue))**:\n  * Relocated the desktop minimize/restore toggle from the bottom-left branding section to the right-side systems tray alongside fullscreen and system controls.\n  * Updated icon from rocket to a persistent desktop icon (`fal fa-desktop` / `fad fa-desktop`), maintaining permanent visibility as a toggle button across window states.\n\n### Fixed\n- **YouMeOS Login Overlay Import Paths ([x-login-overlay.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/x-login-overlay/x-login-overlay.vue))**:\n  * Corrected invalid relative imports for `useDiscord` and `useGoogle` to use the `@umeos/composables` alias.\n\n## [2026-08-21]\n\n### Changed\n- **100% Audit of COMPASS License Descriptions & Literal Tool Naming ([license-cloud-manager.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/renderer/license-cloud-manager.ts), [architecture-3d.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/renderer/architecture-3d.ts), [desktop_licensing_and_upsell_funnels.md](file:///home/xopher/www/youmeos-microverse/docs/desktop_licensing_and_upsell_funnels.md), [hosting-tiers.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/hosting-tiers.ts), [tesseract.tour.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/tesseract.tour.ts))**:\n  * Replaced all primary fantasy branding names with literal descriptive tool terms across the Microverse license store and COMPASS Tesseract spark (`Personal WebTop Desktop OS`, `Customer Relationship Manager (CRM)`, `Email Marketing & Automated Drip Sequences`, `Visual Form Builder & Workflow Automation`, `Web Application Firewall (WAF) & Honeypot Security`, `Point-of-Sale (POS) & E-Commerce Storefront`, `Continuous A/B Split Testing & Conversion Router`).\n  * Relegated fantasy branding names (`YouMeOS Nucleos`, `Questbook CRM`, `Bomb Bag News Drip`, `Magic Formula`, `Castle Walls & Mirror Shield`, `Bazaar POS`, `Silver Arrow`) to subtext, taglines, and badges.\n  * Audited 5th-grader value explanations, superpower bullet lists, and hardware specs across all 11 tiers (`Quantum`, `Bronze`, `Silver`, `Silver Enhanced`, `Gold`, `Gold Enhanced`, `Platinum`, `Platinum Enhanced`, `Uranium`, `Titanium`, `Palladium`).\n  * Added enhanced tier colors to `COMPASS_TIER_COLORS` in `architecture-3d.ts` for dynamic 3D lighting sync.\n  * Replaced all em dashes with standard punctuation across Tesseract spark tours, splash views, and documentation.\n\n## [2026-08-20]\n\n### Added\n- **WebSpark Native Electron Webview Support & Iframe Fallback ([useIframeChecker.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useIframeChecker.ts), [u-webapp.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-webapp.vue))**:\n  * Added `hasWebviewSupport()` and `canEmbedInWebSpark()` helpers in `useIframeChecker.ts` to detect Electron execution environments automatically.\n  * Enhanced `u-webapp.vue` to dynamically mount an Electron `<webview>` tag with persistent session partitioning and event listeners (`did-stop-loading`, `did-finish-load`, `dom-ready`) when available.\n  * Preserved full fallback to standard `<iframe>` and frame-protection ejection prompts when running in browser or web environments.\n\n### Changed\n- **YouMeOS Microverse Desktop App Live Stripe Checkout ([license-cloud-manager.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/renderer/license-cloud-manager.ts), [index.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/main/index.ts))**:\n  * Replaced embedded mock HTML checkout form and fake credit card simulator with real-time checkout session creation via `https://youmeos.com/wp-json/xophz/v1/stripe/checkout`.\n  * Updated Electron checkout popup window to load live Stripe Checkout URLs directly.\n  * Added automated navigation capture for `https://youmeos.com/callback/stripe` and `/checkout/success` callback parameters to activate license keys instantly upon verified payment.\n\n### Fixed\n- **OAuth Popup Routing & Auth Composable Error Fixes ([index.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/main/index.ts), [useDiscord.ts](file:///home/xopher/www/elysium/apps/youmeos/composables/useDiscord.ts), [useGoogle.ts](file:///home/xopher/www/elysium/apps/youmeos/composables/useGoogle.ts))**:\n  * Updated Electron Portal window `setWindowOpenHandler` in `desktop/src/main/index.ts` to whitelist OAuth identity provider domains (`discord.com`, `discordapp.com`, `google.com`, `accounts.google.com`, `github.com`, `appleid.apple.com`), allowing OAuth popups to be created within the Electron application context instead of opening externally and severing `window.opener.postMessage` communication.\n  * Extracted `showDirectHint` from `useMagicCloak()` at the setup level in `useDiscord.ts` and `useGoogle.ts` to prevent a `ReferenceError` during post-auth message handling.\n\n- **Welcome Splash Fullscreen Dialog Checkbox & Atom Standardization ([WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue))**:\n  * Replaced native Vuetify elements with design system atoms (`x-dialog`, `x-checkbox`, `x-btn`).\n  * Added `inline` prop to `x-checkbox` in the fullscreen confirmation dialog to ensure the checkbox toggle box renders properly inline alongside the label.\n\n- **Cosmic Login Camera Pre-Flight Offset Centering & Starfield Sun Plunge ([controls.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [LoginView.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/auth/LoginView.vue), [RegisterView.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/auth/RegisterView.vue), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Implemented a dedicated 2-step `flyToSun` sequence in `controls.ts` that first centers camera pan offsets (`panX: 0, panY: 0`) and aligns orientation (`rx: -0.45, ry: 0.35`) at high altitude before zooming into the Sun.\n  * Eliminated the camera offset discrepancy where logarithmic Z zoom plunged through empty space to the side of the galaxy before the Sun slid in sideways at the end of the flight.\n  * Updated `LoginView.vue` and `RegisterView.vue` authentication completion handlers to execute `flyToSun` with `windowStore.isFlying` state tracking, ensuring users plunge directly through the Hipparcos starfield, constellation lines, and orbiting satellites into the central Sun.\n  * Updated `u-desktop.ts` to respect active in-flight login transitions without interruption upon mounting `/u`.\n\n## [2026-08-19]\n\n### Added\n- **3D Spatial Youniverse Event Horizon Visual & Perspective Unification ([index.html](file:///home/xopher/www/youmeos-microverse/desktop/src/renderer/index.html), [styles.css](file:///home/xopher/www/youmeos-microverse/desktop/src/renderer/styles.css))**:\n  * Unified the isometric dimensions and perspective angles (130px width, standard isometric slope) across all three architecture layer graphics (Event Horizon Spatial Youniverse, Headless Core Cube, and Blackbox Bedrock Slab).\n\n- **Microverse Bloatware Removal & Gitignore Updates ([.gitignore](file:///home/xopher/www/youmeos-microverse/.gitignore), [embedded-setup.ts](file:///home/xopher/www/youmeos-microverse/desktop/src/main/engine/embedded-setup.ts))**:\n  * Removed default WordPress bloatware plugins (`akismet`, `hello.php`) and default themes (`twentytwentythree`, `twentytwentyfour`, `twentytwentyfive`).\n  * Configured `embedded-setup.ts` to automatically purge default plugins and themes upon WordPress core zip extraction.\n  * Added gitignore patterns for Composer-managed plugins, themes, runtime tokens (`_token_*.php`), and upgrade directories.\n\n- **Compass Smoke Generative Canvas & Background Migration ([smoke-canvas.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/smoke-canvas.vue), [u-desktop-background.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-desktop-background/u-desktop-background.vue), [BackgroundView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/views/BackgroundView.vue))**:\n  * Migrated the signature Compass dynamic smoke wave and kinetic stardust animation into YouMeOS as a first-class desktop generative background canvas (`smoke` / `compass-smoke`).\n  * Registered "Compass Smoke Vapor" in Nucleos Background settings under the Atmospheric category with live preview thumbnail support and cyan highlight aesthetics.\n\n## [2026-08-18]\n\n### Added\n- **Tour & Hitchhiker Demo Audio Preference Prompt ([WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue), [useInterface.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useInterface.ts), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Added background music toggle checkbox (`Play background music`, enabled by default) to the immersive experience confirmation dialog on the welcome splash page.\n  * Extended the pre-flight confirmation prompt to trigger when launching the Hitchhiker guest demo so users can configure audio playback and display mode prior to starting.\n  * Updated tour initialization pipeline to honor the `playMusic` state across both Cinematic Galaxy and Hitchhiker tours.\n\n### Changed\n- **WebSpark Installer: Live HTML Title Probe ([o-webspark-installer-modal.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-webspark-installer-modal.vue))**:\n  * Added parallel HTML fetch during URL probing to extract the actual `<title>` tag and `og:description` / `meta description` from the target page.\n  * Non-preset, non-WordPress sites now show the real page title (e.g., "Vanta" instead of "vanta.com") and actual meta description instead of generic fallback text.\n  * Runs in parallel with the existing WP-JSON probe so no additional latency is introduced.\n  * Title fallback chain: WP name > preset name > HTML `<title>` > domain.\n  * Description fallback chain: WP description > HTML meta description > generic fallback.\n\n- **Splash Page Gateway Shortcut Icon Brand Gradient Colors ([WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue))**:\n  * Aligned the 4 gateway action icons with their respective solid color stops across the YouMeOS brand gradient:\n    * **Take a Tour**: Magenta/Orchid (`#d56eff` glow)\n    * **Hitchhike the Multiverse**: Gold (`#ffd700`)\n    * **Weave the Light Web**: Cyan (`#00f2fe`)\n    * **Login to your Youniverse**: Cobalt Blue (`#2962ff`)\n  * Updated interactive hover drop-shadow glows and animations to match the new color scheme.\n\n### Fixed\n- **YouMeOS Cinematic Tour Camera Centering & Splash Offset Reset ([tour-content.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/tour-content.ts), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Fixed off-center camera alignment and flight trajectory in the "Take a Tour" cinematic tour (`getGalaxyTour`) by prepending a centering stop (`z: 551486.75`, `panX: 0`, `panY: 0`) before swooping into the central Sun at `z: 0.57`.\n  * Prevented persistent splash page camera offsets (`panX: 120229, panY: -57865`) when leaving welcome routes by explicitly defaulting `panX` and `panY` to 0 across portal fly-to navigation and non-welcome initial desktop mountings.\n\n## [2026-08-17]\n\n### Added\n- **Spark Plugs Sidenav Migration & Responsive Grid Redesign ([spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue), [o-spark-card.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-spark-card.vue))**:\n  * Migrated Spark Plugs store categories from inline button rows to the standard `u-window` sidenav rail (Featured, Active Sparks, All Sparks, WebSparks, and populated category groups).\n  * Connected bi-directional URME routing (`useSparkNav`) to allow direct linking and back/forward navigation across store categories.\n  * Refactored `.spark-plugs-grid` to responsive CSS Grid with `repeat(auto-fill, minmax(260px, 1fr))` ensuring cards retain optimal spacing across compact and large window sizes.\n  * Overhauled `o-spark-card.vue` internal layout with scaled status plug icons (38px), balanced typography, two-line text clamping, and full fidelity power-up and flicker animations.\n  * Streamlined WebSparks subcategory filters into clean sub-header action chips.\n\n### Changed\n- **YouMeOS Open Graph Social Preview Image & Metadata Sync ([index.html](file:///home/xopher/www/elysium/apps/youmeos/index.html), [og-image.png](file:///home/xopher/www/elysium/apps/youmeos/public/og-image.png))**:\n  * Generated and deployed a high-resolution 1200x630 Open Graph / Twitter Card social preview image (`og-image.png`) based directly on the live UI screenshot.\n  * Enhanced cosmic background contrast, neon particle vibrancy, and centered the authentic 3D wireframe galaxy, bubble-font brand lockup, and gateway navigation actions while removing browser/audio toolbar chrome.\n  * Preserved the original `takemymoney.jpg` asset in `public/` and updated `og:image`, `twitter:image`, `og:image:width`, `og:image:height`, and JSON-LD structured data in `index.html`.\n\n- **Tesseract DIY Box Hover & Pricing State ([tesseract-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/tesseract-app.vue), [Tesseract-Pricing-and-White-Glove-Service.md](file:///home/xopher/www/x/Xophz-COMPASS/docs/Tesseract-Pricing-and-White-Glove-Service.md))**:\n  * Updated DIY action button non-hover text from `DIY [Tier]Box (Coming Soon)` to `DIY [Tier]Box`.\n  * Moved `(Coming Soon)` text to hover state alongside the tier price (`${tier.price} (Coming Soon)`) for parity with the White Glove button hover behavior.\n\n- **Dynamic User Rail Launch Pad Button Title ([u-user-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue))**:\n  * Replaced static "YouMeOS" label on the bottom-left rail trigger button with dynamic `launchPadTitle` computed from the active Launch Pad spark metadata and branding store (`launcherStore.visibleApps` / `launcherStore.apps`).\n\n### Fixed\n- **Start / Welcome Gateway Navigation Guard & Camera Reset ([router.ts](file:///home/xopher/www/elysium/apps/youmeos/routes/router.ts), [WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Fixed bug where navigating back to the start/welcome screen (`/` or `/welcome`) failed to load because `router.beforeEach` was redirecting any authenticated user or active guest mode session (`youmeos:guest_mode`) back to `/u`.\n  * Added `onMounted` camera reset in `WelcomeLanding.vue` and route path watcher in `u-desktop.ts` to restore UI visibility, disable tour controls lock, and smoothly glide the 3D camera to `WELCOME_DESTINATION` when returning to the splash landing.\n\n- **Electric Wave Generative Canvas Animation Loop ([electric-wave-canvas.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/electric-wave-canvas.vue))**:\n  * Fixed blank/black canvas issue caused by raw unwired HTML `<canvas>` element lacking render loop initialization.\n  * Replaced with `<x-canvas>` engine primitive and implemented multi-harmonic high-voltage oscillating sine waves with dynamic crest spark particle discharge.\n\n- **Nucleos Background & Wallpaper Layout Overhaul ([BackgroundView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/views/BackgroundView.vue))**:\n  * Adopted standard Vuetify `<x-select>` dropdown controls with `variant="outlined"` and `density="compact"` for **Backdrop Mode** and **Category Filters**, matching Nucleos system styling.\n  * Corrected icon sizing and SVG rendering using `<x-icon>` with explicit `:color` and size props (`size="large"`, `size="medium"`).\n  * Refined 4D Youniverse telemetry card, generative canvas showcase grid, and 4K wallpaper controls with proper Vuetify grid spacing.\n\n- **Helios Earth Night Shader Compilation ([solarsystem.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/webgpu/generators/helios/solarsystem.ts))**:\n  * Fixed Three.js `MeshStandardMaterial` fragment shader compilation error (`VALIDATE_STATUS false`) on Earth night texture hook.\n  * Replaced obsolete `vMapUv` reference with `vUv` wrapped in `#ifdef USE_UV` and explicitly defined `USE_UV` in material defines.\n  * Properly anchored vertex and fragment shader uniform/varying injection in `#include <common>` and set `customProgramCacheKey` to prevent program cache collisions.\n\n- **Wizards Tower FeatureFlagsView Import ([FeatureFlagsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/FeatureFlagsView.vue))**:\n  * Restored missing `defineComponent`, `ref`, `computed`, and `watch` imports from `vue` resolving component loader runtime ReferenceError.\n\n- **Launch Pad App Cursor & Drag-and-Drop to Webtop / User Rail ([u-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.vue), [u-app-launcher.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-app-launcher/u-app-launcher.vue), [u-user-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue), [u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [useSparkDragDrop.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useSparkDragDrop.ts))**:\n  * Fixed window wrapper container `ondragstart` cancellation: cleared `el.ondragstart = null` on `VueDraggableResizable` root container on component mount and post-flush watcher in `u-window.vue` to allow native HTML5 drag-and-drop from child elements inside any open window.\n  * Added `e.stopPropagation()` in `u-app-launcher.vue` to prevent dragstart event bubbling to parent window layout wrappers.\n  * Fixed cursor on Launch Pad shortcuts to use `cursor: pointer` instead of grab.\n  * Removed `@mousedown.stop` and `@touchstart.stop` event blockers from Launch Pad shortcuts that were preventing HTML5 drag initiation in Chromium and WebKit browsers.\n  * Added drag guards in `u-app-launcher.vue` to prevent accidental app launch when finishing a drag operation.\n  * Added `dragOverTarget` and drop handlers across User Rail (`u-user-rail.vue`) and Webtop (`u-webtop.vue`) with proper event stopping to prevent dropped items from bubbling or desynchronizing drop targets.\n  * Aligned drop grid coordinates in `useSparkDragDrop.ts` with Webtop desktop grid metrics.\n\n## [2026-08-16]\n\n### Added\n- **Visited Star Read-Only Helios Profile View ([HeliosStellarCommand.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/helios/HeliosStellarCommand.vue), [helios.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/helios/helios.vue), [star-characteristics.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/celestial/star-characteristics.ts))**:\n  * Implemented `resolveStarProfile` to synthesize complete, deterministic public profile statements (traits, environments, feelings, bio) for visited nodes across the Youniverse.\n  * Added visitor read-only mode to `HeliosStellarCommand`, disabling inputs and replacing edit buttons with public sovereign badges.\n  * Passed `isVisitor` and `targetStar` props through `u-helios` window view hierarchy.\n\n- **Post-FlyTo Spark Window Launch Synchronization ([youmeos.engine.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/core/youmeos.engine.ts))**:\n  * Synchronized the spark window launch event to fire upon completion of the camera\'s cinematic `flyTo` transit instead of instantly upon canvas click.\n\n- **Dynamic Star Scale, Heat & Mass Synthesis ([star-characteristics.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/celestial/star-characteristics.ts), [sun.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/webgpu/generators/helios/sun.ts), [youmeos.engine.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/core/youmeos.engine.ts))**:\n  * Added deterministic physical star characteristics resolver deriving unique radius scale ($0.6\\times$ to $2.0\\times$), spectral color index ($-0.25$ to $1.45$), stellar class (O-M), and mass ($0.4$ to $4.0\\text{ M}_\\odot$) per star.\n  * Added `setScale` and scale-proportional corona/halo fading to the central star model in both WebGL and WebGPU pipelines.\n  * Isolated the local home planetary solar system (Mercury-Pluto) to Sol / "I Am", hiding orbital rings when browsing distant visited stars.\n  * Integrated visitor profile state into `u-helios` window controller to display visited star telemetry and profile modes.\n\n- **Topless Maximus Auto-Hiding Hover Exit Controls & Escape Hotkey ([u-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.vue), [u-window.scss](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.scss))**:\n  * Implemented an auto-hiding top-edge hover trigger zone (`.u-window-maximus-edge-zone`) for borderless maximized windows.\n  * Hovering within the top 40px smoothly slides down a floating glass pill containing the spark icon, title, **Restore Window** (`fal fa-window-restore`), **Minimize** (`fal fa-minus`), and **Close** (`fal fa-times`) actions.\n  * Added global `Escape` keyboard listener to immediately un-maximize the active window.\n\n- **YouMeOS System Installer & Sovereign Node Deployment Flow ([usePwaInstall.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/usePwaInstall.ts), [o-system-installer-dialog.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-system-installer-dialog.vue), [u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [WelcomeLanding.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/welcome/WelcomeLanding.vue), [useAnalytics.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useAnalytics.ts))**:\n  * Created `usePwaInstall` composable managing live standalone PWA detection (`display-mode: standalone`), native `beforeinstallprompt` interception, and app installation triggers.\n  * Created `OSystemInstallerDialog` organism providing a dual-pathway onboarding experience:\n    1. **Install Standalone Desktop App (PWA)**: 1-click device installation with offline caching and native window controls.\n    2. **Deploy Sovereign Node (The Tesseract)**: One-click bridge to provision independent w⁴ Webwork nodes and cloud databases.\n  * Added **Demo as Guest** gateway action to `WelcomeLanding.vue` for 1-click entry into the live desktop without credentials.\n  * In Live Web mode, dynamically mounts an iconic **Install YouMeOS** shortcut on the Webtop.\n  * In Standalone PWA mode, automatically suppresses the installer and transitions to **The Tesseract** node management.\n  * Added typed GA4 event trackers (`guest_demo_entered`, `installer_opened`, `pwa_install_outcome`, `tesseract_interaction`, `webspark_interaction`) in `useAnalytics.ts` with complete user consent validation.\n\n- **Multi-Spark Human-Readable Boot Loader Formatting ([u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Implemented `resolveSparkTitle` to decode and resolve raw spark query strings, JSON encoded URL arrays, and `u-` prefixes into formal spark names (e.g. *Launch Pad*, *Spark Plugs*, *Yellow Links*).\n  * Replaced raw JSON array outputs on system boot with natural grammatical conjunctions (e.g. `Initializing Launch Pad, Spark Plugs & Yellow Links...`).\n\n- **Sovereign WebSpark Installer Wizard ([o-webspark-installer-modal.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-webspark-installer-modal.vue), [spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue), [yellow-links-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/yellow-links/yellow-links-app.vue))**:\n  * Created `OWebsparkInstallerModal` organism featuring a 3-step modern OS installation workflow (Target URL & Probe -> Calibrate & Brand -> Deploy & Pin).\n  * Built real-time Database Duplicate Verification Engine checking entered URLs against existing Launch Pad sparks, active WebSparks, and the entire Yellow Links database (`useYellowLinks` and `SEEDED_FALLBACK_LINKS`).\n  * Configured default `https://` input prefix and automatic protocol stripping so users only need to enter plain domain names or paste full URLs seamlessly.\n  * If a duplicate is already installed, short-circuits the wizard and transforms the action button directly into *"Open WebSpark"*; if found in the registry but unplugged, directly offers *"Plug In Now"*; if brand new, awards a *"Verified New WebSpark"* badge and proceeds to calibration.\n  * Added dual-action workflow allowing users to deploy locally to Launch Pad and simultaneously publish to the Yellow Links WordPress API (*"Add to Community Directory"*).\n  * Integrated direct "Install WebSpark" entry points into the Spark Plugs Store header and WebSparks grid, as well as the Yellow Links splash dashboard.\n\n- **Iframe Security & Standalone HUD Launchpad Revamp ([useIframeChecker.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useIframeChecker.ts), [u-webapp.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-webapp.vue))**:\n  * Expanded `RESTRICTED_IFRAME_DOMAINS` in `useIframeChecker.ts` with over 100 known services enforcing strict frame-ancestors / `X-Frame-Options` policies (including Docker Hub, Discord, Steam, Spotify, OpenAI, Claude, Figma, Slack, Trello, Jira, Asana, Linear, Dropbox, Amazon, eBay, PayPal, Stripe, etc.).\n  * Upgraded `u-webapp.vue` to render a starship-themed HUD launcher whenever a frame-restricted application is loaded in a `<u-window>`, featuring brand icon, hostname, security policy explanation, one-click "Launch Standalone App" ejection, and "Attempt Embedded Loading" fallback controls.\n  * Added floating quick-eject action button overlay to actively embedded iframes.\n\n- **WordPress REST Site Detection & Sidebar Navigation in WebSparks ([useWordPressSiteNav.ts](file:///home/xopher/www/elysium/apps/youmeos/composables/useWordPressSiteNav.ts), [u-webspark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/webspark/u-webspark.vue), [spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue))**:\n  * Built `useWordPressSiteNav` composable to automatically probe target WebSpark URLs for WordPress REST API (`/wp-json/`) availability.\n  * Dynamically queries WP 5.9+ Navigation (`/wp/v2/menu-items`), WP REST API Menus (`/wp-api-menus/v2/menus`, `/menus/v1/menus`), and Core Published Pages (`/wp/v2/pages`) to extract site structure, site title, and tagline.\n  * Renders dynamic sidebar navigation inside `u-window` with `default-nav-pinned`, title, subtitle, and context-aware FontAwesome icons.\n  * Clicking any sidebar menu item smoothly steers the embedded `UWebapp` iframe to that specific page without leaving the sovereign window environment.\n\n- **Futuristic Animated Bedrock Loading Portal & Speculative Prefetching ([wp-admin-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/wp-admin-app.vue))**:\n  * Upgraded WP Admin spark in YouMeOS with an animated starship portal loading screen featuring orbital energy rings, pulsing ambient glows, breathing WordPress bedrock core, and dynamic telemetry status badge.\n  * Implemented speculative hover link prefetching on navigation list items (`<link rel="prefetch">`) to preload subsequent admin pages in the background before click, drastically accelerating inter-page navigation speed.\n  * Intercepted in-iframe link clicks to trigger seamless loading transitions instantly upon navigation.\n\n- **WP Admin Spark Navigation & Scrolling ([wp-admin-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/wp-admin-app.vue))**:\n  * Fixed iframe viewport scroll locking by injecting `overflow-y: auto !important` on `html`, `body`, and `#wpwrap` with custom themed scrollbars (`::-webkit-scrollbar`).\n  * Fixed sidebar hanging in loading state when `/wp-admin/index.php` delays, redirects, or fails to return `#adminmenu`.\n  * Added `AbortController` timeout guard (2.5s) to the scraping request.\n  * Ingested full `DEFAULT_WP_ADMIN_MENU` fallback registry covering Dashboard, Posts, Media, Pages, Comments, Appearance, Plugins, Users, Tools, and Settings.\n\n### Changed\n- **Tour Guide System Bar Terminology ([system-tours.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/tours/system-tours.ts))**:\n  * Updated tour step title and copy to refer to "The System Bar & Media Player" and music control instead of "ambient soundtrack".\n\n### Fixed\n- **Tesseract Stripe Checkout Return & Cancel URL Navigation ([tesseract-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/tesseract-app.vue))**:\n  * Fixed Stripe Checkout return navigation reload error where canceling or clicking back in Stripe redirected to a broken hash URL (`#/tesseract`), losing the open spark and active tier state.\n  * Updated `cancel_url` and `success_url` to dynamically build the exact browser URL with active `sparks` matrix query parameter including `[\'tesseract\', tier.id]`, seamlessly returning users directly to their selected Tesseract tier upon return.\n\n- **Distant Star Dynamic Name Label Resolution ([youmeos.engine.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/core/youmeos.engine.ts), [marker.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/interaction/marker.ts))**:\n  * Updated star model label to dynamically reflect the selected distant star\'s actual name rather than defaulting to "I Am".\n  * Added reactive `setName` method and label update watcher to `attachMarker`.\n\n- **Hitchhiker Sun Zoom Focal Point Alignment ([tour-content.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/tour-content.ts))**:\n  * Unified Hitchhiker tour stop 1 camera destination zoom distance to $z = 0.57$ to match the standard user solar focal point.\n\n- **Star Cluster Zoom & Star Model Tracking ([youmeos.engine.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/core/youmeos.engine.ts), [constellations.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/webgpu/generators/nexus/constellations.ts))**:\n  * Fixed star tracking lag where the camera zoomed into empty space due to asymptotic translation lerping while the galaxy rotated.\n  * Dynamically scaled `lerpFactor` in the engine render loop based on camera proximity to lock 100% on target position at close zoom ($z \\le 5.0$).\n  * Maintained continuous per-frame synchronization of `starModel` position with the tracked distant star.\n  * Enhanced star spectral index resolution in `onMarkerClick` to search `starSystems` by both key and name attribute as well as Pinia store metadata.\n  * Fixed WebGPU constellation star positions by applying proper rotation matrix and removing unneeded 2x distance multiplier.\n\n- **Hitchhiker & Splash Tour Audio Continuity ([useAudio.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/useAudio.ts), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Prevented active music playback from resetting to 0:00 when clicking Hitchhike the Multiverse or entering splash tours.\n  * Added playback guard in `setTrack` to return early without resetting `currentTime` when the requested track is already active and playing.\n  * Updated tour initialization in `u-desktop.ts` to only trigger default background music if audio is not already playing.\n\n- **My Compass Navigation Sidebar Data Mapping & Iframe Hash Routing ([my-compass-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/my-compass/my-compass-app.vue))**:\n  * Fixed nested sidebar navigation clicks inadvertently replacing the embedded iframe `src` with relative route slugs (which loaded YouMeOS recursively) by separating `activeNav` state from `currentUrl` and updating the iframe hash router directly (`location.hash = targetRoute`).\n  * Fixed empty sidebar navigation drawer in My Compass Suite by correcting category lookup keys (`cat.label` / `cat.id`) and properly structuring child nodes (`children` / `items`).\n  * Simplified default slot delegation in [`u-rail.vue`](file:///home/xopher/www/elysium/apps/youmeos/components/primitives/u-rail/u-rail.vue) and [`u-card.vue`](file:///home/xopher/www/elysium/apps/youmeos/components/primitives/u-card.vue) to render child DOM nodes directly without nested scoped slot closures.\n\n- **My Compass Spark Runtime Initialization Fix ([my-compass-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/my-compass/my-compass-app.vue))**:\n  * Fixed `ReferenceError: isNorthLocked is not defined` uncaught runtime error during setup by defining `const isNorthLocked = ref(false);`.\n\n- **URail, UCard & ORailHeader Slot Forwarding Resolution ([u-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/primitives/u-rail/u-rail.vue), [u-card.vue](file:///home/xopher/www/elysium/apps/youmeos/components/primitives/u-card.vue), [o-rail-header.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-rail-header/o-rail-header.vue), [u-user-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue), [u-window-shell.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**:\n  * Eliminated Vue warning (`Slot "default" invoked outside of the render function`) during navigation drawer hover expansion and re-renders.\n  * Replaced dynamic `$slots` proxy loops with explicit, guarded named slot bindings (`prepend`, `append`, `image`, `default`) across `URail` and `UCard`.\n  * Removed nested `<v-list-item-title>` default slot element in `ORailHeader` in favor of `:title` prop on `XNavItem`.\n  * Replaced nested `<v-img>` inside `<v-avatar>` in `UUserRail` and `UWindowShell` with the native `:image` prop on `VAvatar` to prevent `Slot "additional" invoked outside of the render function` warnings from `VResponsive`.\n\n- **YouMeOS PWA Installer & Hitchhiker Visibility Restriction ([u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [usePwaInstall.ts](file:///home/xopher/www/elysium/apps/youmeos/mechanics/usePwaInstall.ts), [o-system-installer-dialog.vue](file:///home/xopher/www/elysium/apps/youmeos/components/organisms/o-system-installer-dialog.vue), [manifest.json](file:///home/xopher/www/elysium/apps/youmeos/public/manifest.json))**:\n  * Restricted the Webtop **Install YouMeOS** shortcut strictly to **Hitchhikers** (`isGuest.value && !isStandalone.value`), suppressing it for authenticated users and existing PWA installations.\n  * Enhanced PWA standalone mode detection using start URL queries (`?source=pwa`), session flags, and cross-browser display mode matchers (`standalone`, `fullscreen`, `minimal-ui`, iOS navigator).\n  * Ensured Service Worker (`sw.js`) registration triggers on boot to fulfill Chromium installability criteria and fire `beforeinstallprompt`.\n  * Updated shortcut click handler to trigger the native PWA prompt directly upon user interaction when available, falling back to the installer dialog.\n  * Added platform-specific step-by-step installation fallback instructions in `OSystemInstallerDialog` when programmatic prompts are unavailable.\n\n- **Gaea OS Biosphere Species Image Asset Restoration ([g-biosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-biosphere-tab.vue))**:\n  * Fixed broken/blank animal photo cards caused by Wikimedia Commons external hotlinking rate limits and 400/404/429 errors.\n  * Downloaded and bundled verified high-resolution local assets for all 8 conservation priority species (*Amur Leopard*, *Javan Rhino*, *Vaquita*, *Kakapo*, *Hawksbill Sea Turtle*, *Panamanian Golden Frog*, *Mountain Gorilla*, *Blue Whale*).\n  * Added graceful loading skeleton indicators and fallback error handlers to `<v-img>` photo containers.\n\n- **Launch Pad Centered Auto-Fit Grid & Header Clearance ([u-app-launcher.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-app-launcher/u-app-launcher.vue))**:\n  * Configured `justify-content: center` with `repeat(auto-fit, 108px)` and `gap: 14px 10px` so low-count categories (like Goodies) center neatly instead of stretching across vacant tracks.\n  * Preserved 32px top padding for clear visibility of ABC · TIME sort controls.\n  * Increased sort bar resting opacity to 0.65.\n\n- **Launch Pad Sparks Responsive CSS Grid Alignment ([u-app-launcher.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-app-launcher/u-app-launcher.vue))**:\n  * Replaced flex-wrap `v-row`/`v-col` layout with centered CSS Grid (`repeat(auto-fit, 140px)` with `gap: 16px`).\n  * Ensured multi-row spark collections maintain consistent column alignments with left-aligned trailing rows, while dynamically centering single or few-item collections.\n\n- **Restore Webtop Modal Space Cat Overhaul ([u-desktop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.vue), [_utils.scss](file:///home/xopher/www/elysium/apps/youmeos/styles/_utils.scss))**:\n  * Restyled the Sparks Restore prompt dialog to match the YouMeOS Space Cat logout modal aesthetic with the 128px `fal fa-cat-space` icon and `u-brand-gradient-text` glow.\n  * Updated copy to *"Look at you, you\'re Sparkling! What do you want to do?"* with actions *"Start So Fresh & So Clean"* and *"Restore my Sparks"*.\n  * Added global `@mixin brand-gradient-btn` and `.u-brand-gradient-btn` utility for neon gradient interactive buttons.\n  * Optimized modal layout with `max-width="500"` and `text-no-wrap` to prevent awkward word wrapping.\n\n- **Side Rail Sparks Unpinning Freedom ([SideRailSparksView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/SideRailSparksView.vue), [u-user-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue))**:\n  * Removed hardcoded `isProtected` restriction from Spark Plugs in Side Rail management, enabling users to unpin Spark Plugs from the user rail.\n  * Synchronized feature flag `bottomRight` status with rail pin/unpin toggles.\n  * Updated `u-user-rail.vue` computed `railItems` to rely strictly on `launcherStore.pinnedRailSparks` state.\n\n- **Wizards Tower Webtop Sparks & Side Rail Sparks Navigation ([wizards-tower-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/wizards-tower-app.vue), [PinnedAppsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue), [SideRailSparksView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/SideRailSparksView.vue), [u-user-rail.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-user-rail/u-user-rail.vue))**:\n  * Created dedicated **Webtop Sparks** (`pinned`) and **Side Rail Sparks** (`siderail`) navigation items in Wizards Tower.\n  * Added **Available Sparks** section with real-time search, category filters, and single-click Pin to Rail / Pin to Webtop actions.\n  * Fixed broken icon on Side Rail Sparks to standard Font Awesome icon `fal fa-columns`.\n  * Updated `u-user-rail.vue` to respect custom user-defined sorting in `launcherStore.pinnedRailSparks`.\n\n- **Ejected Sparks Dedicated Animated Loader & Dynamic Title Handshake ([u-desktop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.vue), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts))**:\n  * Restored the iconic spinning atom sprite loader for standalone / ejected spark windows (`fullspark=true`).\n  * Replaced generic random YouMeOS lore quotes during ejected boot with a static named spark status message (`Initializing [Spark Name]...`).\n  * Seamlessly chained the loader completion into the frosted glassmorphism dissolve transition upon spark mount.\n\n- **Leaflet ES Module Import Compatibility ([g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue), [g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-cryosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue), [g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue), [g-magnetosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  * Corrected default imports `import L from \'leaflet\'` to namespace imports `import * as L from \'leaflet\'` across all Gaea planetary tabs to resolve Rollup/Vite ESM export resolution errors.\n\n## [2026-08-15]\n\n### Added\n- **Youniversal Identity OAuth Account Creation ([RegisterView.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/auth/RegisterView.vue))**:\n  - Integrated Discord and Google social identity authentication buttons directly into Step 1 of the "Claim your Youniversal identity" registration flow.\n  - Added real-time OAuth authentication watchers to navigate newly registered users seamlessly into the YouMeOS environment upon successful token exchange.\n\n### Changed\n- **Launch Pad Spark Fluid Glide-Up Entrance & Left Alignment ([app-launcher-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/app-launcher/app-launcher-spark.vue), [u-window.scss](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.scss))**:\n  - Removed conflicting `default-snapped` override and aligned initial `x` to `0` and `y` to bottom fold, eliminating layout snap fighting.\n  - Implemented 60fps GPU-composited `@keyframes launchpad-spawn-in` using `translate3d(0, calc(100% + 40px), 0)` to `translate3d(0, 0, 0)` with `will-change: transform, opacity` and `0.35s cubic-bezier(0.16, 1, 0.3, 1)` easing.\n  - Preserved standard `window-spawn-in` animation for all other spark windows.\n\n## [2026-08-14]\n\n### Added\n- **Bubblegum Full Task & Pack Estimation System ([bubblegum.controller.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [bubblegum-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/bubblegum-app.vue), [m-task-row.vue](file:///home/xopher/www/elysium/apps/youmeos/components/molecules/m-task-row/m-task-row.vue), [m-task-group.vue](file:///home/xopher/www/elysium/apps/youmeos/components/molecules/m-task-group/m-task-group.vue))**:\n  - Implemented recursive estimation calculation (`getTotalBubbleEst` / `getTaskTotalEst`) across tasks and nested subtasks to compute each task\'s complete point footprint.\n  - Enhanced `getPackStats` and `activePackStats` to calculate `totalEst`, `completedEst`, and `estPercentage` for each pack.\n  - Added Pomodoro duration conversion (`formatEstimatedDuration`) based on standard 1 bubble = 25 minutes (e.g. 165 bubbles = 68h 45m).\n  - Displayed real-time Bubblegum point totals and time estimations in the active pack headers (`t-pack-view`), task groups (`m-task-group`), individual task metadata chips (`m-task-row`), and Factory overview cards.\n  - Added background watermark number and subtask estimate chips reflecting the full estimation size and duration of each task.\n\n- **Bubblegum AI Generative Task List Pre-Estimation ([bubblegum.controller.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/bubblegum.controller.ts), [bubblegum-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bubblegum/bubblegum-app.vue))**:\n  - Enhanced the Gemini AI generative task list prompt to automatically analyze and pre-estimate MoSCoW priorities (`(M)` Must have / Chew Now, `(S)` Should have / Chew Next, `(C)` Could have / Maybe Later, `(W)` Won\'t have / Needs Flavor) for each generated task.\n  - Implemented automatic effort/size pre-estimation in Bubblegum pieces (story points: `<1>`, `<2>`, `<3>`, `<5>`, `<8>`, `<13>`, `<21>`) directly formatted into markdown syntax (`- [ ] (M) <3> Task title`).\n  - Added automatic code fence stripping and triggered immediate `compileMarkdown()` upon generation to seamlessly populate the live task list and physics sandbox canvas.\n\n### Fixed\n- **Nucleos Youniverse Navigation Tabs & Tesseract Quantum Tier Styling ([nucleos-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/nucleos-spark.vue), [hosting-tiers.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/hosting-tiers.ts), [tesseract-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/tesseract-app.vue))**:\n  - Dynamically removed "Mechanics" (Shuttle) and "Mouse Controls" from the Nucleos side navigation when 4D Youniverse background mode is not active, automatically redirecting if the mode changes.\n  - Resolved unreadable white text/background in the Tesseract Quantum (Black Box) tier by removing the hardcoded white background override and setting Quantum\'s brand accent to Cyan (`#62c9ff`) with full glassmorphism and glowing typography.\n\n- **YouMeOS Webtop Shortcuts User Preference Sync ([u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue), [FeatureFlagsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/FeatureFlagsView.vue), [PinnedAppsView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wizards-tower/views/PinnedAppsView.vue))**:\n  - Fixed an issue where static `FEATURE_FLAGS[id]?.pinned` configuration bypassed user preferences and forced default shortcuts onto the desktop even when unpinned in Nucleos ("Launch Sequence" / "Quick Launch") or App Launcher.\n  - Standardized desktop shortcut rendering to strictly respect `launcherStore.pinnedWebtopSparks` as the single source of truth across all modules.\n\n## [2026-08-12]\n\n### Fixed\n- **YouMeOS Cosmic Login & Camera Zoom Transition Easing ([controls.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [LoginView.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/auth/LoginView.vue), [RegisterView.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/auth/RegisterView.vue), [youmeos.controller.ts](file:///home/xopher/www/elysium/apps/youmeos/app/youmeos.controller.ts))**:\n  - Aligned camera pan coordinates (`panX: 0, panY: 0`) and 3D perspective orientation (`rx: -0.45, ry: 0.35`) during login/register transitions.\n  - Resolved offset bug where camera was panned 42,512 units off to the side over empty space during zoom-in, causing the Hipparcos starfield and Solar System satellites to be bypassed until the Sun suddenly popped into view at the end.\n  - Implemented logarithmic interpolation for $Z$ distance in `controls.ts` over an extended 8.0s duration, providing a smooth journey through the Hipparcos starfield, passing outer/inner planets and orbiting satellites, and zooming right up next to the Sun surface ($Z = 0.946$).\n\n## [2026-08-11]\n\n### Fixed\n- **Spark Plugs Store Search Evaluation Precedence ([spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue))**:\n  - Moved search query filtering (`hasSearchQuery`) to take precedence over default category filters (`isFeaturedFilter`, `isActiveFilter`) in `displayedApps`.\n  - Fixed issue where searching for sparks like "My Compass" while on the default "Featured" tab returned a static random 9-spark slice instead of executing the search filter.\n\n## [2026-08-10]\n\n### Changed\n- **Logos Spark COMPASS Suite Integration Replication ([logos-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/logos/logos-app.vue))**:\n  - Replicated the iframe embedding pattern from `my-compass-app.vue` into `logos-app.vue`, adding `compass_iframe=1` query parameter to `compassAdminUrl`.\n  - Replaced standard HTML `iframe` with `<x-iframe>` primitive atom component.\n  - Synchronized COMPASS category grouping, icon mapping, and uncategorized plugin drawer hierarchy under `My Compass` navigation with `Software Suite` subtext.\n  - Implemented custom brand-accented glass scrollbar & transparent element style overrides injected into the embedded COMPASS suite window.\n  - Added iframe back-navigation handling via `@click:back="handleBack"` on `u-window`.\n  - Updated `u-window-shell.vue` `handleNavItemClick` to emit `click:nav` for parent menu nodes with children, auto-navigating to the dashboard when opening the `My Compass` menu folder.\n\n- **Tesseract Spark Box Specs Icon & Element Color Matching ([hosting-tiers.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/hosting-tiers.ts), [t-spark-splash-tier.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/t-spark-splash-tier.vue))**:\n  - Updated Box Specs feature icons across all hosting tiers to match each tier\'s element icon (`fal fa-square`, `fal fa-box`, `fal fa-box-full`, `fal fa-box-heart`, `fal fa-box-check`, `fal fa-boxes`, `fal fa-gem`, `fal fa-sparkles`, `fal fa-atom-alt`, `fal fa-shield-virus`, `fal fa-crown`).\n  - Standardized element colors for Bronze (`#CD7F32`) and Silver (`#C0C0C0`) tiers.\n  - Renamed generic `My Compass Suite` feature title across all 11 tiers to element-specific suite titles (e.g. `Quantum Compass Suite`, `Bronze Compass Suite`, `Gold Compass Suite`, `Palladium Compass Suite`, etc.).\n  - Replaced metaphoric plugin names in Compass Suite feature lists across all 11 tiers with literal descriptive terms (e.g. `Marketing Funnels & Campaigns`, `SEO Optimization Engine`, `A/B Split Testing & Conversion`, `Audience & Broadcast Newsletter`, etc.).\n  - Reformatted storage spec lines across all 11 hosting tiers to `Total Storage - System Storage` format (e.g. `320GB Storage - 35GB System`, `10GB Storage - 6GB System`, `2.5TB+ SSD - 300GB System`, etc.).\n  - Added support for `feature.iconColor` overrides in `t-spark-splash-tier.vue` to dynamically inherit per-feature icon styling.\n  - Updated splash feature grid and billboard description containers to use `style="max-width:900px; margin: 0px auto; pointer-events: auto;"` across `t-spark-splash.vue`, `t-spark-splash-tier.vue`, and `m-spark-splash-billboard.vue`.\n\n### Fixed\n- **Frame-Perfect Camera Flight & Starting Position ([controls.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/4d-youniverse/interaction/controls.ts), [u-desktop.ts](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/desktop/u-desktop.ts), [youmeos.engine.ts](file:///home/xopher/www/elysium/apps/youmeos/engine/core/youmeos.engine.ts))**:\n  - Enforced initial starting camera position `(x: 120229, y: -57865, z: 551486.75)` with controls `(rotateX: -2.5518085782384268, rotateY: 0.37883458619339594, panX: 120229, panY: -57865)`.\n  - Bypassed restoring stale `youmeos:camera-state` from `localStorage` on the welcome landing route (`/welcome`, `/`), ensuring every initial session lands on the exact requested coordinates.\n  - Removed instant pan coordinate reset (`panX = 0`, `panY = 0`) from `setTourMode(true)` and implemented shortest-path angular interpolation to prevent frame jumping during camera transitions.\n\n## [2026-08-09]\n\n### Changed\n- **u-window & u-window-shell Skeleton Loading Standardization ([u-window.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.vue), [u-window-shell.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**:\n  - Added `navLoading` and `navSkeletonRows` props to `u-window` and `u-window-shell`.\n  - Automatically render `<menu-skeleton :rows="navSkeletonRows" />` in the window navigation drawer when `navLoading` is true.\n\n- **Sparks Dynamic Sidebar Skeleton Updates ([notepad-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/notepad/notepad-app.vue), [bugnet-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/bugnet/bugnet-app.vue), [wp-admin-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/wp-admin/wp-admin-app.vue))**:\n  - Replaced circular progress loading spinners in Alphabet Soup (`notepad-app.vue`) post types and post lists navigation views with `menu-skeleton`.\n  - Replaced circular progress loading spinners in Bug Net (`bugnet-app.vue`) recent bugs navigation view with `menu-skeleton`.\n  - Removed local `MenuSkeleton` import from `wp-admin-app.vue` and bound `:nav-loading="menuLoading"`.\n\n- **NucleOS Webtop Settings List Reordering ([WebtopView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/views/WebtopView.vue))**:\n  - Moved **Top Bar Across Top** setting toggle to the very top of the behavior list.\n  - Positioned **Factory Reset Device** setting button to the very bottom of the behavior list.\n\n## [2026-08-08]\n\n### Fixed\n- **UWindow Bar & System Bar Border Cleanup ([u-window-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-bar.vue), [u-window.scss](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window.scss), [u-system-bar.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-system-bar/u-system-bar.vue), [youmeos.scss](file:///home/xopher/www/elysium/apps/youmeos/app/youmeos.scss))**:\n  - Removed top border on window drag handles while keeping the 1px bottom border separating the header from content.\n  - Stripped outer window borders, border-radius, and shadows when windows are docked/snapped (`&[class*="--snapped-"]`).\n  - Removed bottom border on `.v-footer.glass-panel.u-system-bar`.\n\n- **Beat Salad Cassette Tape Mode Persistence & View Switcher Fix ([jukebox-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/jukebox/jukebox-app.vue))**:\n  - Persisted user view mode choice in `localStorage` under `youmeos:jukebox:viewMode` (defaulting to retro Cassette Tape Deck mode).\n  - Updated window header action button icon (`fad fa-cassette-tape` / `fad fa-record-vinyl`) to accurately show destination mode when toggling between Cassette Tape and Classic Vinyl modes.\n\n- **Nucleos Spark ClockView Fix ([ClockView.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/nucleos/views/ClockView.vue))**: Renamed returned `__` i18n function in `setup()` to `t` to resolve Vue reserved prefix warning (`__`).\n\n- **Webtop Shortcut Bottom-Right Alignment & Drag Initialization Fixes ([u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue))**:\n  - Adjusted default bottom-right position offsets to clear ambient vertical scroll tracks and bottom footer controls without getting cut off.\n  - Constrained Webtop shortcut item width to 140px in SCSS to align with grid cell width (`CELL_WIDTH`).\n  - Fixed drag-and-drop initialization bug where state invalidation was wiping shortcut coordinates on `dragStart`, ensuring bottom-right and pinned icons are freely draggable across the Webtop.\n\n- **w⁴ Protocol Tesseract Splash & 4D Box of Boxes Vision ([tesseract-splash.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/tesseract/tesseract-splash.vue))**:\n  - Updated mission tagline: *"A 4-dimensional box of boxes. The w⁴ Protocol connects sovereign BlackBOX nodes running YouMeOS across 43% of the web into a unified, borderless Light Web."*\n  - Emphasized opaque BlackBOX encapsulation and 4D network federation across the 3 feature cards:\n    - **Step 1 (`fal fa-box-usd`)**: `"1. Claim Your BlackBOX"` (Provision your sovereign node-an opaque, self-contained box).\n    - **Step 2 (`fal fa-box-open`)**: `"2. Connect the Mesh"` (Unpack w⁴ to bridge your node into a 4-dimensional box of boxes).\n    - **Step 3 (`fal fa-box-full`)**: `"3. Illuminate the Light Web"` (Unify 43% of the web into an interconnected platform for the next 100 years).\n\n- **Welcome Spark Splash "Get Your Own" CTA Card ([v-welcome-splash.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-splash.vue), [welcome-u-spark.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/welcome-u-spark.vue))**:\n  - Added a third call-to-action (CTA) card to the Welcome Spark splash view titled "Get Your Own".\n  - Configured 3-column layout (`sm="4"`) for Author\'s Note, Back the Vision, and Get Your Own CTAs.\n  - Linked the "Get Your Own" CTA click event to launch the Tesseract spark (`tesseract`).\n\n- **Welcome Spark Vision Expansion & O.S. Optimistic Solution Cards ([v-welcome-vision.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/welcome-u/views/v-welcome-vision.vue))**:\n  - Elevated "The Vision" intro statement in the Welcome spark to emphasize human agency, sovereign focus, and human-computer symbiosis.\n  - Introduced YouMeOS as an **Optimistic Solution** engineered to transcend digital fragmentation and build a personal digital universe.\n  - Expanded the vision grid to 12 structured O.S. concept cards playing on the initials O.S., featuring **Open Singularity** (sovereign human-AI convergence) and **Omnipresent Synthesis** (unified cognitive knowledge web).\n  - Added O.S. tonal chips and FontAwesome icons with theme accent colors for all 12 vision cards.\n\n- **Alphabet Soup i18n Support, Comments Sidebar & Editor Scroll Fixes ([notepad-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/notepad/notepad-app.vue))**:\n  - Integrated `useLexicon` composable for dynamic spark terms and `__` translation helper fallback to WordPress `wp.i18n.__`.\n  - Wrapped UI text strings (window title, comments status toggle, sidebar drawer header, and disabled comments overlay) with translation bindings.\n  - Updated topbar comments toggle button with icon (`fal fa-comments`) and explicit text label (`Comments: Enabled` / `Comments: Disabled`).\n  - Added close icon button (`fal fa-times`) to the Comments drawer header so users can close the sidebar.\n  - Added glassmorphism overlay with a 1-click "Enable Comments" toggle button inside the sidebar when comments are disabled.\n  - Added `min-h-0` flexbox constraints on `.editor-container` so the TipTap editor scrolls vertically when content fills the container.\n\n- **Passport Card Portrait Upload Fallback ([o-passport-card.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/components/o-passport-card.vue), [o-passport-wallet.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/components/o-passport-wallet.vue))**:\n  - Removed unnecessary `console.error` log when triggering portrait file uploads on passport cards.\n  - Added `@portrait-upload` event forwarding on `o-passport-wallet` to ensure fallback event emission functions cleanly when controller is not injected.\n\n- **Alphabetized Omega Source Navigation Items ([omega-source-app.controller.ts](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/omega-source/omega-source-app.controller.ts))**:\n  - Reordered `NAV_ITEMS` in `omega-source-app.controller.ts` so all navigation items are sorted alphabetically while keeping "Omega Source" pinned at the top.\n\n- **Beat Salad Cassette Tape Redesign & View Mode Toggle ([jukebox-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/jukebox/jukebox-app.vue))**:\n  - Redesigned Beat Salad spark UI into a landscape cassette tape aspect ratio deck inspired by classic vintage cassette tapes.\n  - Added micro-textured dark cassette shell, vintage Side A/B top label with handwritten track titles, and metallic gold/bronze foil banner.\n  - Added central smoked acrylic window with dual 6-point white spoke reels that animate and spin during audio playback.\n  - Positioned chunky tactile deck controls (Play, Pause, Prev, Next, Stop, Eject / Station List) and horizontal volume slider underneath the cassette body.\n  - Integrated a view mode toggle in the app bar to switch dynamically between Cassette Tape mode (640x460) and Classic Vinyl mode (360x680).\n\n- **Welcome Manifesto Splash Modal Hidden ([youmeos-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/youmeos-app.vue))**:\n  - Temporarily disabled auto-trigger of the `showManifesto` splash modal on mount while preserving modal component structure for future relocation.\n\n- **Desktop Shortcut Collision Resolution & Auto-Displacement ([u-webtop.vue](file:///home/xopher/www/elysium/apps/youmeos/components/blueprints/webtop/u-webtop.vue))**:\n  - Implemented reactive `resolvedPositions` grid coordinate calculator to eliminate icon overlap on the desktop webtop canvas.\n  - Added dynamic auto-displacement so shortcuts automatically slide out of the way when dragged or when coordinates collide.\n  - Enabled grid-snapping on drag release to persist organized, non-overlapping shortcut positions in local storage.\n\n- **Biosphere Tab Layout Standardization & Full Audit ([g-biosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-biosphere-tab.vue))**:\n  - Refactored Biosphere tab to consume `GPlanetaryTabLayout`, standardizing Threat and Taxa filter chips in the floating glass overlay.\n  - Achieved 100% full-suite layout alignment across all 7 Gaea OS instrument tabs.\n\n- **Chart Tooltip & Axis Unit Suffix Formatting ([g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Added explicit unit suffixes to **Anthroposphere Population Growth** chart (`7.265 Billion People` in tooltip, `{value} B` on Y-axis labels).\n  - Added unit suffixes across all **Atmospheric Gas** chart tooltips (`ppm`, `ppb`, `°C`).\n\n- **Atmosphere Chart Re-rendering & Option Bleed Fix ([g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Bound `:key="activeGas"` to `<v-chart>` to ensure full instance destruction/recreation on sub-tab switches, preventing ECharts Y-axis option merging bleed.\n  - Set explicit `min: -1.5` and `max: 2.0` bounds on Temperature Anomaly Y-axis.\n\n- **Atmosphere Charts & Anthroposphere Map Layer Fixes ([g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue), [g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue))**:\n  - **Temperature Anomaly Chart**: Upgraded to a diverging red (+) / blue (-) bar chart and fixed API payload parsing to prevent y-axis scale collapse.\n  - **Nitrous Oxide Telemetry**: Added robust NOAA N2O historical baseline fallback to prevent API parsing errors.\n  - **Anthroposphere Map Layer Modes**: Fixed `setMapLayerMode` so switching between `Population Tiers`, `Mortality & Conflict`, and `Combined Matrix` dynamically updates map marker colors, sizing, and dimming effects.\n\n- **Atmosphere Navigation Cleanup & Gas Selector Enhancement ([gaea-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/gaea-app.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Removed redundant `<v-bottom-navigation>` bar from `gaea-app.vue`.\n  - Moved icons (`fal fa-thermometer-half`, `fal fa-smog`, `fal fa-cloud-meatball`, `fal fa-flask-poison`) and full names (`Temperature (°C)`, `CO₂ Levels (ppm)`, `Methane (CH₄)`, `Nitrous Oxide (N₂O)`) to the top-right gas selector toolbar inside `g-atmosphere-tab.vue`.\n\n- **Leaflet Popup Dark Glassmorphism Styling Fix ([g-planetary-tab-layout.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-planetary-tab-layout.vue))**:\n  - Added unscoped global CSS styles targeting `.leaflet-popup-content-wrapper` and `.leaflet-popup-tip` inside `GPlanetaryTabLayout`.\n  - Replaced Leaflet default white background boxes with high-contrast dark glassmorphism styling (`rgba(15, 23, 42, 0.92)`, `backdrop-filter: blur(12px)`, `border-white-15`) across all planetary map tabs.\n\n- **Full Suite GPlanetaryTabLayout & Map Camera Standardization ([g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue), [g-magnetosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Aligned Anthroposphere, Lithosphere, and Magnetosphere Leaflet map camera centers to `[15, 0]` at zoom `1.8`, providing a uniform global view across all tabs.\n  - Refactored all 6 planetary tabs to consume the standardized `GPlanetaryTabLayout` component.\n\n- **Cryosphere & Hydrosphere Map Center & Layout Standardization ([g-cryosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue))**:\n  - Aligned Cryosphere Leaflet map camera center to `[15, 0]` at zoom `1.8`, matching Hydrosphere map zoom position.\n  - Refactored both tabs to consume the standardized `GPlanetaryTabLayout` component.\n\n- **Standardized GPlanetaryTabLayout Construct & Atmosphere Engine ([g-planetary-tab-layout.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-planetary-tab-layout.vue), [g-atmosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-atmosphere-tab.vue))**:\n  - Built `GPlanetaryTabLayout` component to enforce atomic design standards, standardized view switcher buttons (`Split Instrument`, `Map View`, `Telemetry Chart`), and floating glass overlay map styling across Gaea OS tabs.\n  - Upgraded **Atmosphere Tab** using the layout construct, adding a Leaflet **Global Atmospheric Baseline & Greenhouse Gas Observatory Map** (Mauna Loa Observatory Hawaii, Cape Grim Tasmania, Mace Head Ireland, South Pole Baseline, Mount Waliguan China, Alert Station Arctic).\n  - Integrated multi-gas telemetry selector (Global Temperature Anomaly, Atmospheric CO₂ ppm, Methane ppb, Nitrous Oxide ppb).\n\n- **Planetary Leaflet Maps Floating Glass Overlay Redesign ([g-cryosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue), [g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue), [g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue), [g-magnetosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Converted external control/legend cards into floating glassmorphic overlay cards (`position-absolute` at top of `.map-wrapper`), eliminating block gaps above the maps.\n  - Repositioned Leaflet map zoom controls to `topright` so zoom buttons do not collide with floating top overlay cards.\n  - Expanded Leaflet map elements to stretch 100% full height from top to bottom across all planetary tabs.\n\n- **Magnetosphere Split Instrument Layout Optimization ([g-magnetosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue))**:\n  - Implemented **Split Instrument View** allowing the Auroral Map and Planetary Kp Index chart to display together.\n  - Shrank Planetary Kp bar chart to a compact 170px height in Split mode, allowing the Leaflet Auroral Map to flex-grow and occupy 70%+ of vertical space.\n\n- **Planetary Instruments & Telemetry Suite Expansion ([g-instruments-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-instruments-tab.vue))**:\n  - Expanded Instruments suite to feature live telemetry gauges across all 6 primary planetary domains:\n    - **Atmosphere**: Live CO₂ levels (`ppm`) from Mauna Loa Observatory.\n    - **Lithosphere**: Live M4.8+ seismic activity count from USGS network.\n    - **Magnetosphere**: Live Planetary $Kp$ Index from NOAA Space Weather Prediction Center.\n    - **Cryosphere**: Live Arctic Sea Ice extent ($M\\,km^2$) from NASA NSIDC.\n    - **Hydrosphere**: Live Ocean Temperature Anomaly ($^\\circ C$) from global climate telemetry.\n    - **Anthroposphere**: Live Global Population ($B$) from World Bank Open API.\n  - Linked each instrument gauge card to navigate directly to its corresponding spark tab upon click.\n\n- **Magnetosphere & Space Weather Engine Buildout ([g-magnetosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-magnetosphere-tab.vue), [gaea-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/gaea-app.vue))**:\n  - Built interactive **Magnetosphere Instrument** featuring Leaflet High-Latitude Auroral Station Map (Poker Flat Alaska, Tromsø Norway, Yellowknife Canada, Abisko Sweden, Syowa Antarctica, Reykjavik Iceland).\n  - Integrated live NOAA SWPC Space Weather REST API (`noaa-planetary-k-index.json`), rendering a real-time Planetary $Kp$ Index bar chart with geomagnetic storm alert thresholds ($Kp \\ge 5$).\n  - Added dark glassmorphic styling for Leaflet map zoom controls and mounted `GMagnetosphereTab` component in `gaea-app.vue`.\n\n- **Cryosphere Layout & Zoom Control Fix ([g-cryosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue))**:\n  - Fixed map container height stretching (`flex-grow-1 h-100 min-h-0`) so Leaflet polar map occupies full available vertical space without layout shifts.\n  - Applied dark theme styling to Leaflet zoom controls (`.leaflet-control-zoom a`) so zoom buttons blend into the UI theme.\n\n- **Lithosphere Toolbar Default Time Range Update ([g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Set default seismic telemetry time range to `7 Days` for faster initial rendering and recent earthquake focus.\n\n- **Lithosphere USGS Time Window Query Parameter Scaling ([g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Dynamically scaled `minmagnitude` threshold (M4.5 for 7d, M4.8 for 30d, M5.0 for 90d, M5.2 for 365d) and increased result payload `limit` (up to 1,000 events).\n  - Resolved 90-day vs 1-year data truncation bug caused by fixed 300 event API limit capping recent events.\n\n- **Lithosphere Toolbar Date Range Selector & Responsive Layout ([g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Added interactive **Time Range Selector** (`7 Days`, `30 Days`, `90 Days`, `1 Year`) to the Lithosphere control toolbar.\n  - Dynamically queries USGS live GeoJSON endpoint with selected `starttime` parameter, refreshing both Leaflet Map markers and ECharts scatter plot.\n  - Made Leaflet Seismic Map stretch vertically to fill 100% of available viewport space in Map mode.\n\n- **Lithosphere Bi-Directional Map & Timeline Interactivity ([g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Implemented **Split Instrument View** allowing the Leaflet Seismic Map and Magnitude Timeline Scatter Plot to display together.\n  - Linked `@datazoom` slider events from the timeline scatter plot directly to the Leaflet map, dynamically filtering map markers in real time as the user scrubs time windows.\n  - Linked scatter chart point `@click` events to Leaflet `flyTo()` camera animation, centering the map on the selected quake and triggering its interactive popup.\n\n- **Lithosphere Leaflet Seismic Map & USGS Quake Telemetry Buildout ([g-lithosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-lithosphere-tab.vue))**:\n  - Built dual-view interface featuring **Leaflet Seismic Map** and **USGS Magnitude Scatter Chart**.\n  - Plotted live M4.8+ global earthquakes in real time directly on the Leaflet map with magnitude-proportional circle markers.\n  - Highlighted major quake events (M $\\ge$ 6.5) with pulsing red alert rings and annotated major tectonic boundary fault zones (Ring of Fire, San Andreas Fault, Mid-Atlantic Ridge, Alpine-Himalayan Belt, East African Rift).\n\n- **Cryosphere & Hydrosphere Leaflet Map & Climate Data Buildouts ([g-cryosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-cryosphere-tab.vue), [g-hydrosphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-hydrosphere-tab.vue))**:\n  - **Cryosphere Tab Buildout**: Built dual-view interface featuring Leaflet Polar Station Map (Summit Station Greenland, Svalbard, Utqiaġvik Alaska, Alert Station, McMurdo Antarctica, Vostok, Dome C) and live ECharts Arctic Sea Ice extent trajectory.\n  - **Hydrosphere Tab Buildout**: Built dual-view interface featuring Leaflet Ocean & Water Basin Map (Pacific Basin, Atlantic AMOC Circulation, Indian Ocean Dipole, Southern Ocean, Amazon, Congo, Ganges-Brahmaputra) and ECharts ocean warming anomaly trend chart.\n  - Integrated live API endpoints from `global-warming.org` (Arctic sea ice & Ocean temperature anomaly) and World Bank Open Data.\n\n- **Anthroposphere Interactive Leaflet Population & Mortality Map Engine ([g-anthroposphere-tab.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/gaea/components/g-anthroposphere-tab.vue))**:\n  - Integrated Leaflet dark-theme world map engine into Gaea OS Anthroposphere tab matching COMPASS onboarding map design tokens.\n  - Implemented 3 interactive map modes: **Population Tiers**, **Mortality & Conflict**, and **Combined Matrix**.\n  - Structured population scale into 3 distinct visual tiers: **Mega 500M+** (44px), **Large 100M-500M** (28px), and **Standard <100M** (16px).\n  - Restricted continuous keyframe pulsing animation strictly to active crisis/conflict alert markers (`pulse-red`), keeping standard population pins static and clean.\n  - Moved data source attribution ("World Bank Live Open Demographic API & UN HDX") from popup overlay cards into the primary map legend header bar.\n\n## [2026-08-02]\n\n### Added\n- **YouMeOS Universal OS Vision & Architecture Documentation (`docs/youmeos/Universal-OS-Vision.md`)**:\n  - Created comprehensive vision document outlining the micro-level (Sovereign Individual) and macro-level (Global Noosphere / Institutional Modernization) features, benefits, and architectural transformation roadmap.\n\n### Changed\n- **Yellow Links Spark Window Sidebar Navigation (`apps/youmeos/app/sparks/yellow-links/yellow-links-app.vue`)**:\n  - Removed `nav-items` sidebar navigation array (`Directory Index`, `Submit a Link`) and `default-nav-pinned` from `u-window`.\n  - Hidden the left navigation rail so the main frame expands to full window width.\n\n### Fixed\n- **Spark Plugs "Read Docs" Navigation to Specific Spark Page ([spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue), [enchiridion-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/enchiridion/enchiridion-app.vue), [u-window-shell.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-shell.vue))**:\n  - Updated the "Read Docs" button action in [spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue) to persist target spark ID to `sessionStorage` before launching Enchiridion.\n  - Enhanced document query resolution in [enchiridion-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/enchiridion/enchiridion-app.vue) with `findMatchingDoc` to map raw spark IDs (e.g., `xophz-magic-formula`), title strings, and cleaned names to their target markdown files.\n  - Added auto-syncing of `navStack` in [u-window-shell.vue](file:///home/xopher/www/elysium/apps/youmeos/components/constructs/u-window/u-window-shell.vue) by watching `[() => props.activeNav, flattenedLeaves]` with `{ immediate: true }`, ensuring the side drawer automatically drills into the target spark category and highlights the active document even when documents or navigation items are lazily loaded.\n\n- **Spark Plugs Store Top Bar Search Width ([spark-plugs-app.vue](file:///home/xopher/www/elysium/apps/youmeos/app/sparks/spark-plugs/spark-plugs-app.vue))**:\n  - Fixed search input shrinking bug in top bar toolbar by setting explicit minimum width (`style="min-width: 220px; width: 280px"`) and adding `flex-shrink-0` to adjacent toolbar actions so search queries are easy to type and read.\n\n- **Tesseract Spark Pricing Table Spacing (`apps/youmeos/app/sparks/tesseract/tesseract-app.vue`, `t-spark-splash-tier.vue`, `x-spark-splash-action.vue`)**:\n  - Expanded default Tesseract `u-window` width from `1000px` to `1150px`.\n  - Passed `:full-width="true"` from `t-spark-splash-tier.vue` to `t-spark-splash.vue` to unclamp the constrained 600px action slot width.\n  - Removed `max-width` bottlenecks on the features container to grant 100% full width layout (`w-100 px-4 sm:px-8`).\n  - Applied `text-no-wrap` on feature titles and list items so tier bullets (e.g., "YouMeOS - PWA Mini-verse", "XP API - Gamification System") fit cleanly on single lines across all columns.\n\n## [2026-08-01]\n\n### Fixed\n- **YouMeOS Welcome Spark Logo & Subtitle Responsive Scaling (`apps/youmeos`)**:\n  - Replaced viewport-relative sizing (`vw`) with CSS Container Query inline width units (`cqw`) across `_branding.scss` and `o-youmeos-logo.vue`.\n  - Added `.brand-lockup-container` wrapper to establish container query context (`container-type: inline-size`).\n  - Added fluid container-query scaling for `welcome-subtitle` text inside `v-welcome-splash.vue` so the logo (`YouMeOS`) and header text ("Welcome to the Omega Source") dynamically shrink and always fit cleanly inside `u-window` without horizontal overflow.\n\n## [2026-07-30]\n\n### Fixed\n- **Yellow Links Spark Integration in YoumeOS (`apps/youmeos`, `src/stores/launcher.store.ts`, `src/config/feature-flags.ts`)**:\n  - Registered `yellow-links` feature flag in `src/config/feature-flags.ts`.\n  - Added `yellow-links` spark to `fullRegistry` in `apps/youmeos/app/index.ts` enabling async component loading of `yellow-links-app.vue`.\n  - Registered `Yellow Links` in `useLauncherStore` (`src/stores/launcher.store.ts`) under the Productivity category (`#FFCC00`, `fal fa-book-open`), making it immediately discoverable and launchable from the YoumeOS Launch Pad, Webtop, and Spark Plugs.\n\n- **YouMeOS Dev Server Port & Connectivity Resolution (`wp-content/plugins/xophz-compass-event-horizon`)**:\n  - Replaced hardcoded `localhost:9000` URLs with dynamic `get_dev_server_url()` method resolving to port `8081` (or `VITE_DEV_SERVER_PORT`).\n  - Added active `check_dev_server()` ping check to automatically fallback to production `public/dist/` bundle when Vite dev server is not running, preventing `ERR_CONNECTION_REFUSED` errors.\n\n## [2026-07-26]\n\n### Added\n- **Noosphere Vortex Telemetry & Live Multi-Source Link/Project Hub (`apps/youmeos/routes/noosphere/`)**:\n  - **Live Helios & Nexus Data Aggregation (`useVortexMetrics.ts`)**: Replaced all static/mock data with a multi-source aggregator pulling real user flagship projects from Helios Drive (`youmeos:helios:projects`), profile/social matrix links from Helios Comms (`youmeos:helios:communication`), and services from Helios Wallet.\n  - **Custom Link & Project Submission Modal (`NoosphereVortex.vue`)**: Built an in-app submission modal (`x-dialog`) allowing users to submit custom portfolio links, repositories, and profile URLs directly into the Vortex telemetry hub with real-time state persistence.\n  - **Dynamic ECharts Energy Density Matrix (`noosphere-overview-chart.vue`)**: Connected the circle packing node matrix directly to live user project items and profile links, sizing nodes dynamically by click volume and resonance.\n  - **Zero-Bloat WP Native Metrics & Profile Sync (`NoosphereProfile.vue`)**: Integrated live Vortex telemetry cards into Noosphere Profile and synced click counts / ratings via WP REST API (`/wp-json/xophz-compass/v1/vortex-metrics`) and `localStorage`.\n\n- **Container-Aware Mobile Size Detection for `u-window` (`apps/youmeos/components/constructs/u-window/`)**:\n  - Upgraded `u-window.vue` and `u-window-shell.vue` with `ResizeObserver` container width detection (`containerWidth < mobileBreakpoint`), allowing windows to automatically detect when their inner content/container is mobile size (default: < 600px width) regardless of global browser viewport width.\n  - Dynamically binds `.u-window--mobile` and `.u-window-wrapper--mobile` CSS selectors to enable responsive CSS overrides.\n  - Injected `uWindowMobile` context into `u-window-bar.vue` and `o-rail-header.vue` so window titlebars, action buttons, and navigation rails automatically switch to mobile drawer/toolbar mode when resized below the mobile threshold.\n\n- **Helios Celestial Spheres Self-Awareness & Self-Promotion Engine Buildout (`apps/youmeos/routes/helios/`)**:\n  - **Sol / Core ("I Am" - `HeliosStellarCommand.vue`)**: Added Public Digital Identity Badge preview card with a 1-click **Export Identity Badge** JSON payload copy feature.\n  - **Luna / Reflection ("Light & Shadow" - `HeliosVault.vue`)**: Built out full interactive journaling workspace under the *Light* tab supporting entry creation, category tagging (*Dream*, *Shadow Work*, *Insight*, *Breakthrough*), public profile showcase toggle, search filtering, and category selection.\n  - **Mercury / Comms ("Voice & Vibration" - `HeliosCommunication.vue`)**: Added a 1-click Public Social & Outreach Matrix (GitHub, LinkedIn, X, YouTube, Portfolio, Substack, Calendly, Public Email) and Public Availability Status & Guidelines badge ("How to reach me").\n  - **Venus / Taste ("Heart & Tempo" - `HeliosHeart.vue`)**: Added Curated Aesthetic Taste & Influences Showcase for featuring influential books, artistic mentors, and design philosophies with persistence.\n  - **Mars / Willpower ("Drive & Dance" - `HeliosDrive.vue`)**: Upgraded Daily Kinetic Endeavors with interactive streak tracking, dynamic Drive Score recalculation, and a Flagship Projects Showcase for featuring live portfolio builds (demo links, repo URLs, tech stack tags).\n  - **Jupiter / Worth ("Worth & Fortune" - `HeliosWallet.vue`)**: Built out Core Skills Matrix & Mastery Tree with proficiency ratings alongside a Services & Rate Card Catalog for self-promotion.\n  - **Saturn / Rhythm ("Time & Rhythm" - `HeliosIdentity.vue`)**: Added Living Resume & Milestone Timeline allowing users to showcase career eras, key role achievements, and pivotal history over time.\n\n- **Sunburst User Stat Wheel Overhaul (`apps/youmeos/components/organisms/o-helios-sunburst.vue` & `apps/youmeos/mechanics/godhead-categories.ts`)**:\n  - Restored and modernized the **User Life Stat Wheel** using accessible, modern domain titles paired with classic icons (`👑 Sovereignty`, `🏛️ Mastery`, `♊ Synergy`, `🛡️ Drive`, `🦁 Radiance`, `🕯️ Focus`, `⚖️ Balance`, `🦂 Transmutation`, `🏹 Alchemy`, `⛰️ Ambition`, `⚡ Innovation`, `🌊 Intuition`).\n  - Added high-contrast dark text borders (`textBorderColor: "#000000"`, `textBorderWidth: 2.5`) and radial centered alignment (`rotate: "radial"`), delivering sharp, high-contrast, crystal-clear label legibility against dark background slices.\n  - Hid text on the 72 micro outer skill slices (`show: false` on Level 5) to prevent squishing and overlap, maintaining a crisp visual wheel while allowing instant hover & click inspection in the Stat Inspector HUD.\n  - Added descriptive explanation subtext under `I - The Sunburst Chart` in [HeliosStellarCommand.vue](file:///home/xopher/www/elysium/apps/youmeos/routes/helios/HeliosStellarCommand.vue): *"Your complete life stat matrix - tracking experience, skills, and archetypal progression across physical, mental, creative, and spiritual domains."*\n\n## [2026-04-26]\n\n### Added\n- **Webtop Shortcuts**: Extended `UWebtop` to support rendering desktop shortcuts via the new `pinnedToWebtop` property in `LauncherApp`. The shortcuts utilize the existing `UShortcut` component and are placed on a dedicated surface layer that maintains pass-through clickability to the underlying 3D environment.\n\n## [2026-04-15]\n\n### Fixed\n- **YouMeOS System Bar Version**: Corrected the version displayed in the Event Horizon system bar bottom-left. Was showing the monorepo `package.json` version (`26.4.15.1118`); now shows the actual PHP plugin version from `XOPHZ_COMPASS_EVENT_HORIZON_VERSION`.\n\n## [2026-04-14]\n\n### Changed\n- **YouMeOS Legacy Relocation**: Moved `youmeos_legacy` engine (75MB) to its own repository (`hallofthegods/youmeos-legacy`) and re-integrated it as a git submodule. This prevents the legacy engine from being included in the primary plugin bundle, reducing the bundle size significantly while still allowing for optional inclusion during development.\n\n## [2026-04-07]\n\n### Added\n- **YouMeOS Admin Bar Button**: Added a branded YouMeOS button to the WordPress admin bar, positioned before the WP logo. Features the galaxy icon with gradient-text label and responsive hiding on mobile.\n\n## [2026-04-01]\n\n### Fixed\n- **YouMeOS Window Borders & Spacing**: Removed the dashed/dotted border and outline from windows when maximized.\n  - Added `border: none !important` and `outline: none !important` to `.u-window-wrapper--maximized`.\n  - Specifically disabled the library\'s (`vue3-draggable-resizable`) default active outline using `::before` and `::after` pseudo-elements.\n  - Ensured internal `.u-window` also sheds its border in maximized state for a seamless full-screen experience.\n  - **Bottom Bar Layout Fix**: Converted the system bar (`u-system-bar`) from a `v-app-bar` to a fixed `v-sheet`. This removes it from Vuetify\'s layout grid, ensuring it no longer reserves space at the bottom and allowing maximized windows to utilize the full viewport height.\n  - Increased system bar `z-index` to `9999` for consistent accessibility over windows.\n\n## [2026-03-31]\n\n### Added\n- **YouMeOS Portal Page Configuration**: Added a WordPress Settings page (Settings → YouMeOS) to configure where YouMeOS loads on the front-end.\n  - **Routes Only** (default): YouMeOS only loads on `/youmeos/` and `/os/` as before.\n  - **Homepage**: Replaces the site\'s front page with the full YouMeOS portal.\n  - **Specific Page**: Load YouMeOS on any WordPress page via a dropdown selector.\n  - Settings stored via WP Options API (`youmeos_load_mode`, `youmeos_load_page_id`).\n  - Rewrite rules auto-flush when settings change.\n  - Refactored `class-xophz-compass-event-horizon-public.php` into clean named boolean methods (`is_configured_page`, `resolve_app_base`, `render_youmeos_shell`).\n\n## [2026-03-30]\n\n### Fixed\n- **YouMeOS Star Rendering Performance**: Converted all WebGPU particle generators from InstancedMesh billboard quads back to THREE.Points, eliminating ~720k unnecessary vertices per frame.\n  - `milky-way.ts`: 40k quads → 40k points (160k → 40k vertices)\n  - `background-stars.ts`: 119k quads → 119k points (478k → 119k vertices, biggest win)\n  - `starfield.ts`: 5k quads → 5k points (20k → 5k vertices)\n  - `interstellar-dust.ts`: 10k quads → 10k points (40k → 10k vertices)\n  - `interstellar-gas.ts`: 5k quads → 2k points (20k → 2k vertices, matched WebGL gas structure)\n  - Added early `.visible = false` cutoff at opacity ≤ 0.01 across all generators to prevent transparent geometry from consuming GPU cycles.\n  - Restored proper spectral color lookup in Hipparcos stars that was lost during the InstancedMesh migration.\n\n- **YouMeOS Framerate Drops**: Resolved a severe engine performance issue where `setupSkybox` was inadvertently called twice during `engine.init()`. This spawned double the post-processing geometries, causing massive overdraw and slashing the framerate.\n\n- **YouMeOS Guided Tour**: Restored the functionality of the "Start Tour" button and the touring mechanics to map accurately to the legacy jQuery engine version.\n  - **Camera Tween Safety**: Fixed `controls.flyTo` auto-unlocking `tourMode` upon completion. The camera is now safely locked during the entire duration of the `restTime` interval pauses.\n  - **Pan Persistence Bug**: Hardcoded `{ panX: 0, panY: 0 }` into the very first "AWAKENING" sequence to ensure the tour doesn\'t start off-center if the user previously panned around the galaxy.\n  - **UI Escape Hatch**: Restored the clickable "Skip Tour" button to the modern theater DOM. This binds directly to `createTheater()` and allows users to safely bypass the tour, killing all `window.TWEEN` tasks and restoring standard interactive controls.\n\n## [2026-01-18]\n\n### Added\n- **YouMeOS Visionary Manifesto (README.md)**: Completely rewrote the Event Horizon plugin README as a comprehensive philosophical and technical document:\n  - Defined the core philosophy of YouMeOS: Ancient-Futuristic, Individual Sovereignty, Collective Unity, and Global Balance.\n  - Documented the full Celestial Hierarchy (Youniverse, Star, Helios, Nexos, Noosphere, Oort Cloud, Satellites).\n  - Articulated the vision of the "Operational Internet", a paradigm shift from passive browsing to spatial inhabitation.\n  - Projected YouMeOS\'s potential 50 years (2076) and 100 years (2126) into the future, positioning its creators as "Pioneers of the Operational Internet."\n  - Integrated the dedication to Xopher\'s children and aligned all messaging with the project\'s philosophical core.\n\n## [2026-01-15]\n\n### Added\n- **YouMeOS Taxonomy**: Established official celestial terminology for the system.\n  - **The Noosphere**: The high-level Galaxy perspective representing the "sphere of human thought."\n  - **The Nexos**: The social/hipparcos level representing relationships and connections.\n  - **Helios**: The personal/sun level representing the core dashboard.\n  - **Satellites**: Functional applications (Wapps) mapped to planetary bodies (e.g., Saturn = Blog, Earth = Pictures).\n  - **Oort Cloud**: The user\'s content and consumption cloud.\n\n## [2026-01-12]\n\n### Changed\n- **YouMeOS-Engine.md**: Major overhaul of the engine integration documentation.\n  - Documented the modern modular architecture (`youmeos.controller.ts` + `useLegacyLoader.ts`).\n  - Updated synchronization details for the Global Event Bridge and Visionary Boot Sequence.\n  - Implemented a dual roadmap view featuring both a high-level **Summary Table** and detailed **Evolution Tracking**.\n  - Added specific guidance on the "Cosmic Tour" choreography and "Orbitron" typography.\n\n## [2026-01-11]\n\n### Added\n- **YouMeOS Layout Initialization**: Initialized the topmost layer with `v-app` for full-screen layout support.\n\n- **YouMeOS Routing**: Migrated the legacy "Welcome Overlay" to a route-based architecture using `vue-router`.\n  - Added dedicated views for `Welcome`, `Login`, `Register`, and `Reset`.\n  - Implemented a top navigation drawer for central authentication access.\n  - Applied smooth fade transitions between routes.\n\n- **YouMeOS Engine Port**: Successfully ported the legacy 100,000 stars engine logic.\n  - Implemented `UniverseEngine` using legacy Three.js r62 with modern TypeScript integration.\n  - Configured high-density starfield rendering (115k+ stars) with custom shaders.\n  - Integrated legacy loader UI with real-time status messages.\n\n- **YouMeOS Relocation**: Moved legacy code from `public/youmeos_legacy` to `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy` for better plugin organization.\n\n### Fixed\n- **YouMeOS Entry Point Fix**: Updated the PHP plugin\'s template redirect to point to the correct Vite dev server (port 9000) and the renamed `mount-youmeos.ts` entry point.\n\n- **YouMeOS Audio Playback**: Resolved `NotAllowedError` by gracefully handling autoplay failures and retaining event listeners until successful interaction.\n\n- **YouMeOS UI**: Refactored the "Welcome/Login" overlay into a native Vue component (`YouMeOSOverlay.vue`), replacing the legacy `login.html` injection. This lays the groundwork for router-based navigation while preserving the original "UMeOS" branding and "Click to Enter" behavior.\n',sn=`# YouMeOS Documentation Wiki

Welcome to the central knowledge repository and documentation wiki for YouMeOS.

## Table of Contents

- [Welcome Guide](guides/hello-world.md)
- [Sparks Operating Manuals](sparks/enchiridion.md)
- [Architecture Blueprints](architecture/window-management.md)
- [Reference Specifications](reference/youmeos-compass-whitepaper.md)
- [Changelog](CHANGELOG.md)

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS Documentation Wiki Home"
description: "Home portal, knowledge index, and navigation roadmap for the YouMeOS documentation wiki."
category: "Guides"
icon: "fal fa-home"
version: "1.0.0"
last_updated: "2026-09-04"
tags:
  - wiki
  - home
  - documentation
  - index
ai_summary: "Landing portal and navigation index for the YouMeOS documentation wiki."
\`\`\`
`,ln=`# YouMeOS: The Asynchronous Cosmos

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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS: The Asynchronous Cosmos"
description: "Mathematical ruleset and ActivityPub polling mechanics for generating the observer-centric 3D cosmos."
category: "Architecture"
icon: "fal fa-galaxy"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - cosmos
  - activitypub
  - astrophysics
  - noosphere
  - spatial-computing
ai_summary: "Explains how interaction history via ActivityPub calculates mass, gravity, brightness, and cosmological drift in the 3D Starmap."
\`\`\`
`,cn='# YouMeOS Core Audio Engine & Cross-Tab Leadership Architecture\n\n> High-performance Web Audio engine, cross-tab leadership election, hardware output routing, and radio station syndication for YouMeOS.\n\n---\n\n## 1. Executive Summary & Architecture\n\nThe **YouMeOS Core Audio Engine** provides persistent, ambient, and syndicated soundscapes across the 4D Webtop. It is designed to solve the common challenges of multi-tab web applications:\n1. **Zero Multi-Tab Audio Clashing**: Coordinates audio playback using a distributed leader election protocol (`useTabLeader.ts`). Only the designated "Leader Tab" emits sound. If the leader tab closes or navigates away, a secondary tab automatically assumes leadership and resumes playback without interruption.\n2. **Web Audio Context & FFT Visualizer**: Bridges raw `<audio>` elements through an active `AudioContext` with a 256-bin FFT `AnalyserNode` and `GainNode`, feeding real-time frequency waveforms to the Jukebox spark visualizer.\n3. **Hardware Device Output Routing**: Supports the MediaDevices API (`setSinkId`) to route audio to discrete physical output hardware (e.g. headphones, external monitors, spatial speakers).\n4. **Decentralized Radio Syndication**: Ingests community radio stations dynamically from the WordPress REST API (`/wp/v2/radio_station`) alongside default SomaFM and ambient space tracks.\n\n---\n\n## 2. Cross-Tab Leadership Protocol (`useTabLeader.ts`)\n\n### Distributed State Architecture\n- **BroadcastChannel**: Uses the `"umeos-tab-leader"` broadcast channel for zero-latency inter-tab messaging.\n- **Storage Synchronization**: Synchronizes leadership state in `localStorage` under `STORAGE_KEY = "umeos_tab_leader"`.\n- **Heartbeat & Failover**:\n  - `HEARTBEAT_INTERVAL = 2000ms`: The active leader broadcasts a heartbeat message every 2 seconds.\n  - `STALE_THRESHOLD = 5000ms`: If no heartbeat is received within 5 seconds, secondary tabs schedule a randomized challenge (with jitter) to claim leadership.\n\n```\n┌─────────────────────────────────────────────────────────────┐\n│                       TAB A (Leader)                        │\n│   - Writes localStorage { tabId, timestamp }                │\n│   - Broadcasts HEARTBEAT every 2000ms                       │\n│   - Executes audio.play() & connects Web Audio Context      │\n└──────────────────────────────┬──────────────────────────────┘\n                               │\n            BroadcastChannel ("umeos-tab-leader")\n                               │\n┌──────────────────────────────▼──────────────────────────────┐\n│                      TAB B (Follower)                       │\n│   - Listens on BroadcastChannel                             │\n│   - Mutes local audio elements                              │\n│   - If Heartbeat > 5000ms -> Claims Leadership & Resumes    │\n└─────────────────────────────────────────────────────────────┘\n```\n\n---\n\n## 3. Reactive Audio Composable Contract (`useAudio.ts`)\n\n### Composable API Matrix\n\n| Property | Type | Description |\n|---|---|---|\n| `isUnlocked` | `Ref<boolean>` | True once user gesture unlocks the browser AudioContext |\n| `isMuted` | `Ref<boolean>` | Global mute state, persisted to `umeos_audio_muted` |\n| `isPlaying` | `Ref<boolean>` | True when active track is currently playing |\n| `isPaused` | `Ref<boolean>` | True when track is explicitly paused |\n| `isAutoplayEnabled` | `Ref<boolean>` | Autoplay preference, persisted to `umeos_audio_autoplay` |\n| `volume` | `Ref<number>` | Master volume (0 to 100), persisted to `umeos_audio_volume` |\n| `activeTrackId` | `Ref<string>` | Active station/track identifier in track registry |\n| `currentTrack` | `ComputedRef<TrackMeta>` | Metadata object for the currently loaded station/track |\n| `outputDevices` | `Ref<MediaDeviceInfo[]>` | List of detected audio output hardware devices |\n| `selectedDeviceId` | `Ref<string>` | Active audio output device ID (`setSinkId`) |\n| `playTrack(fromStart?)`| `(fromStart?: boolean) => Promise<void>` | Plays active track (enforcing leader election and unlocking) |\n| `pauseTrack()` | `() => void` | Pauses playback and updates persistent state |\n| `stopTrack()` | `() => void` | Stops playback and resets stream/track position |\n| `setVolume(vol)` | `(newVolume: number) => void` | Updates volume across HTML elements and Web Audio GainNode |\n| `setOutputDevice(id)` | `(deviceId: string) => Promise<void>` | Sets sink ID on audio elements |\n| `toggleAutoplay()` | `() => void` | Toggles automatic playback on boot |\n| `toggleMute()` | `() => void` | Toggles mute state |\n\n---\n\n## 4. Track Registry & Radio Syndication\n\n### Built-in Stations & REST Discovery\n1. **Originals**: `bgmusicA` (YouMeOS Theme), `bgmusicB` (Travelers Welcome).\n2. **SomaFM Ambient Streams**: Groove Salad, Groove Salad Classic, Drone Zone, Space Station.\n3. **Electronic & Synth**: Nightwave Plaza, Secret Agent, Synphaera, DEF CON Radio.\n4. **WordPress REST Syndication**: Calls `GET /wp/v2/radio_station?per_page=100` on boot to dynamically register community stations.\n\n---\n\n## 5. Background Audio Component (`background-audio.vue`)\n\nThe global background audio primitive (`apps/youmeos/components/primitives/background-audio.vue`) mounts two persistent HTML audio elements:\n- `<audio id="bgmusicA">`: Dedicated to local loop audio assets.\n- `<audio id="unifiedStream">`: Unified element for all live internet audio streams.\n\n---\n\n## Document Metadata\n\n```yaml\ntitle: "YouMeOS Core Audio Engine & Cross-Tab Leadership Architecture"\ndescription: "Web Audio API architecture, cross-tab leadership election protocol, hardware output routing, and radio station syndication."\ncategory: "Architecture"\nicon: "fal fa-volume-up"\nversion: "1.0.0"\nlast_updated: "2026-09-02"\ntags:\n  - audio-engine\n  - cross-tab\n  - web-audio\n  - broadcast-channel\n  - streaming\nai_summary: "Complete specification for the YouMeOS Audio Engine, useAudio composable, useTabLeader cross-tab election protocol, and Web Audio FFT analyzer."\n```\n',dn=`# Helios Modules Documentation

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

---

## Document Metadata

\`\`\`yaml
title: "Helios Modules Documentation"
description: "Architectural blueprint for the 7 planetary modules of the Helios personal core in YouMeOS."
category: "Architecture"
icon: "fal fa-sun"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - helios
  - modules
  - archetypes
  - consciousness
  - youmeos
ai_summary: "Defines the 7 Helios internal consciousness modules (I Am, Heart, Vault, Communication, Drive, Wallet, Identity) and UI components."
\`\`\`
`,un='# Legacy Engine Mechanics & Architecture\n\n> [!NOTE]\n> This document records R&D findings regarding the legacy Three.js engine (r62) located in `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/main.js`. Use this reference when modifying core universe behavior.\n\n## Core Scene Graph Hierarchy\n\nThe engine uses a specific hierarchy of `THREE.Object3D` containers to manage different types of potential movement.\n\n1.  **`scene`** (Root)\n    *   **`rotating`** (`THREE.Object3D`)\n        *   **Purpose**: Controls the **Camera\'s Orbital Rotation** (View Rotation).\n        *   **Behavior**:\n            *   Rotated by user input (mouse drag) via `rotateX` and `rotateY` global variables.\n            *   "Pinning" works by damping `rotateVX` and `rotateVY` to zero when dragging stops.\n        *   **Children**:\n            *   **`galacticCentering`** (`THREE.Object3D`)\n                *   **Purpose**: An intermediate container, likely for centering offsets.\n                *   **Children**:\n                    *   **`translating`** (`THREE.Object3D`)\n                        *   **Purpose**: Controls **Linear Movement** (Panning/Zooming target).\n                        *   **Behavior**: Interpolates position to `targetPosition`.\n                        *   **Contents**: All actual celestial objects live here.\n\n## Global Objects of Interest\n\nThese global variables are defined in `main.js` and can be manipulated in the `animate()` loop.\n\n| Variable | Type | Description |\n| :--- | :--- | :--- |\n| `pGalacticSystem` | `THREE.ParticleSystem` | The main galaxy swirl (generated by `galaxy.js`). Rotation here spins the galaxy *internally*. |\n| `pSystem` | `THREE.ParticleSystem` | The Hipparcos star data (100,000 stars). |\n| `starModel` | `THREE.Object3D` | The generated procedural star models (when enabled). |\n| `solarSystem` | `THREE.Object3D` | The solar system container. |\n| `camera` | `THREE.PerspectiveCamera` | The main camera. Note: In this engine, the *camera* usually stays at `z` distance, while the *universe* (`rotating`) rotates around it. |\n\n## Rotation Mechanics\n\n### 1. View Rotation ("Orbiting")\nThe user doesn\'t actually rotate the camera around the objects; they rotate the **Universe Container** (`rotating`) in front of the camera.\n\n```javascript\n// Found in animate()\nrotating.rotation.x = rotateX;\nrotating.rotation.y = rotateY;\n```\n\n### 2. Internal Rotation ("Spinning")\nTo make an object spin continuously *regardless* of view rotation (like a galaxy swirling on its axis), you must rotate the object itself within the `translating` container.\n\n```javascript\n// Added to animate() for Galaxy Swirl\nif (pGalacticSystem) {\n    pGalacticSystem.rotation.y += 0.0008; // Continuous internal rotation\n}\n```\n\n## Grid Mechanics\n\nThe engine historically uses multiple grid layers to provide spatial reference.\n\n| Grid Layer | File | Geometry | Material | Texture |\n| :--- | :--- | :--- | :--- | :--- |\n| **Galactic Grid** | `galaxy.ts` | `IcosahedronGeometry` (scaled 1.15, 0.15, 1.15) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n| **Solar Plane** | `plane.js` | `CylinderGeometry` (scaled 1.0, 0.001, 1.0) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n| **Star Lattice** | `sun.js` | `IcosahedronGeometry` (radius * 1.25) | `MeshBasicMaterial` (Wireframe) | `glowspan.png` |\n\n**Texture Manipulation**:\nThe "flowing" effect is achieved by decrementing the texture offset in the `animate` loop or an object-specific `update` function:\n\n```javascript\n// Example from legacy animate loop\nmesh.material.map.offset.y -= 0.001;\n```\n\n## "Pinning" vs. Auto-Rotate\n\n-   **Pinning**: The user clicks and drags. This stops the *View Rotation* (the `initialAutoRotate` flag is often used to re-enable view rotation after inactivity, but the legacy code relies on friction).\n-   **Simultaneous Rotation**: By separating View Rotation (`rotating.rotation`) from Internal Rotation (`pGalacticSystem.rotation`), we can have the galaxy swirl eternally even while the user has "pinned" the view angle.\n\n## File Locations\n\n-   **Engine Entry**: `wp-content/plugins/xophz-compass-event-horizon/public/youmeos_legacy/js/main.js`\n-   **Manifest**: `.../youmeos_legacy/manifest.json` (Controls script loading order)\n-   **Galaxy Logic**: `.../youmeos_legacy/js/galaxy.js`\n\n---\n\n## Document Metadata\n\n```yaml\ntitle: "Legacy Engine Mechanics & Architecture"\ndescription: "Scene graph hierarchy, rotation mechanics, and coordinate transformations in the legacy Three.js engine."\ncategory: "Architecture"\nicon: "fal fa-cube"\nversion: "1.0.0"\nlast_updated: "2026-09-02"\ntags:\n  - threejs\n  - webgl\n  - scene-graph\n  - legacy-engine\n  - graphics\nai_summary: "Documents the Three.js r62 scene graph hierarchy, orbital view rotation versus internal particle spin, and grid wireframe shaders."\n```\n',pn=`# Nimbus Interaction Modes

## Mode Overview

| Mode | Icon | Behavior | Key Feature |
|------|------|----------|-------------|
| **View** | \`fal fa-eye\` | Current default - click to open/preview | Read-only browsing |
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
| 5 | Oscar Dumpster - Trash Viewer | ✅ Done |

## Key Files

- \`media-drive-app.vue\` - Parent state, toolbar, mode switcher
- \`o-media-viewport.vue\` - Viewport rendering per mode
- \`google.service.ts\` - Google Drive API methods (\`moveFile\`, \`trashFiles\`, \`getTrashedFiles\`)

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

- Split mode navigation: Shared sidebar rails - whichever panel is focused receives sidebar navigation
- All modes work for both Google Drive and local WordPress media
- Selection clears on mode switch or folder navigation

---

## Document Metadata

\`\`\`yaml
title: "Nimbus Interaction Modes"
description: "Interaction mode matrix and Google Drive API integration patterns for the Media Drive application."
category: "Architecture"
icon: "fal fa-sliders-h"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - media-drive
  - nimbus
  - google-drive
  - interaction-modes
  - ui-state
ai_summary: "Defines the 4 Media Drive interaction modes (View, Select, Split, Destructive) and corresponding Google Drive API operations."
\`\`\`
`,mn=`# YouMeOS: The Sovereign Node Architecture

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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS: The Sovereign Node Architecture"
description: "Scaling decentralization through headless PWA frontends and standalone Tauri/Electron desktop nodes."
category: "Architecture"
icon: "fal fa-hdd"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - sovereign-node
  - pwa
  - tauri
  - electron
  - decentralization
ai_summary: "Outlines the sovereign node strategy utilizing WordPress backends, client-side PWA service workers, and standalone desktop apps."
\`\`\`
`,hn=`# Starmap & Federation Mechanics Blueprint

This document defines the core logic behind YouMeOS's visual metaphor-the spatial awareness of people, websites, and data as "Stars"-and how the underlying federation protocols connect these instances into a cohesive "Youniverse."

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

---

## Document Metadata

\`\`\`yaml
title: "Starmap & Federation Mechanics Blueprint"
description: "Spatial social graph, contact sync orbits, and ActivityPub instance federation mechanics in YouMeOS."
category: "Architecture"
icon: "fal fa-project-diagram"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - starmap
  - federation
  - activitypub
  - contacts
  - social-graph
ai_summary: "Defines the 3D Starmap social graph, observer-centric gravity calculations, contact orbit establishment, and cross-node wormhole handshakes."
\`\`\`
`,gn=`# YouMeOS: The 4D Tesseract Visualization Plan

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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS: The 4D Tesseract Visualization Plan"
description: "Spatial 4D extension treating time as the vertical Y-axis for navigating temporal strands and data pulses."
category: "Architecture"
icon: "fal fa-cubes-stacked"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - tesseract
  - 4d
  - temporal-strands
  - visualization
  - chronos
ai_summary: "Architectural blueprint for the 4D Tesseract, modeling data history as vertical temporal strands navigated via the Chronos scrubber."
\`\`\`
`,yn=`# YouMeOS: Universal Internet Operating System Vision & Architecture

> Building the Micro-to-Macro Sovereign Internet Infrastructure for Humankind

---

## 1. Executive Summary

YouMeOS is a universal, personalized internet operating system designed to operate seamlessly across two distinct scales:

1. **Micro-Level (The Sovereign Individual):** A stateful, personalized digital workspace that gives users full ownership of their identity, data, assets, and computational environment.
2. **Macro-Level (The Federated Noosphere):** A decentralized network of WordPress installations, enterprise nodes, municipal services, and global institutions connected via the w⁴ Protocol and ActivityPub.

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
|   (Federated Global Infrastructure via w⁴ Protocol & ActivityPub)      |
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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS: Universal Internet Operating System Vision & Architecture"
description: "Micro-to-macro sovereign internet infrastructure scaling from personal workspaces to federated institutional networks."
category: "Architecture"
icon: "fal fa-globe"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - universal-os
  - vision
  - sovereign-individual
  - noosphere
  - civic-tech
ai_summary: "Comprehensive vision outlining the micro-level sovereign workspace and macro-level institutional federation connected via the w4 Protocol."
\`\`\`
`,wn=`# The w⁴ Protocol: Fractal Architecture & Civilizational Infrastructure

> *"From the Sovereign Individual to the Global Noosphere. Building the Operational Internet."*

This document defines the philosophical and architectural trajectory of YouMeOS and the COMPASS ecosystem. It outlines how a collection of WordPress plugins and a Vue-based spatial interface scale into a 4-dimensional engine capable of running global infrastructure.

---

## 1. The Civilizational Scale (The 4D Tesseract)

The traditional internet is built on 2D isolated spaces (websites) and walled 3D silos (SaaS platforms). YouMeOS is a 4-dimensional **Tesseract**-a network of networks where data, identity, and commerce move fluidly across dimensional boundaries without friction.

The architecture scales infinitely based on the "Box" deployed:
1. **Sovereign (The Individual):** The personal digital identity and vault (Omega Source).
2. **Business (The Local Hub):** The economic engine driving commerce and automated drip marketing (The Bazaar & Bomb Bag).
3. **Conglomerate (The Enterprise):** Cross-domain orchestration of multiple brands with a Single Customer View (Questbook).
4. **Metropolis (Municipal Infrastructure):** City-wide or county-wide networks running interconnected public services on a single shared database.
5. **Planetary (The w⁴ Protocol):** A borderless global operating system unifying disparate multi-networks.

---

## 2. The w⁴ Protocol (World Wide Web Work)

The **w⁴ Protocol** is the connective tissue of this global ecosystem. It defines the standards for how Sovereign boxes communicate, share state, and exchange value (Dirt micro-transactions). 

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
*   A user can "unpack" a specific tool-like the **Questbook CRM**-and install it directly on their iPhone as a solo mobile app.
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
4. **The Global Tesseract:** Connect the disparate Networks via the w⁴ Protocol, allowing peer-to-peer data validation and asset transfer.

---

## Document Metadata

\`\`\`yaml
title: "The w⁴ Protocol: Fractal Architecture & Civilizational Infrastructure"
description: "Civilizational scale, fractal PWA boxes within boxes, and WordPress data layer integration in the w⁴ Protocol."
category: "Architecture"
icon: "fal fa-network-wired"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - w4-protocol
  - fractal-architecture
  - pwa
  - tesseract
  - wordpress-core
ai_summary: "Defines the w4 Protocol scaling across 5 civilizational tiers, fractal PWA Spark deployment, and WordPress as the dark-matter data layer."
\`\`\`
`,fn=`# Window Management & Workspace Orchestration Roadmap

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

---

## Document Metadata

\`\`\`yaml
title: "Window Management & Workspace Orchestration Roadmap"
description: "Evolutionary roadmap, Pinia geometry state, Aero-snap, and active sparks overlay for the YouMeOS window manager."
category: "Architecture"
icon: "fal fa-window-restore"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - window-management
  - aero-snap
  - shortcuts
  - pinia
  - workspace
ai_summary: "Roadmap and technical strategy for YouMeOS window management, covering z-index stacking, Aero-snap, geometry persistence, and quick switching."
\`\`\`
`,vn=`# YouMeOS Engine Integration

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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS Engine Integration"
description: "Hybrid Three.js and Vue 3 integration architecture, global event bridge, and cosmic tour choreography."
category: "Architecture"
icon: "fal fa-meteor"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - youmeos-engine
  - threejs
  - vue3
  - tour
  - loader
ai_summary: "Integration specification bridging the legacy Three.js starfield engine with Vue 3 reactive controllers, loader sequences, and tour logic."
\`\`\`
`,bn=`# Hello World!

Welcome to the YouMeOS Enchiridion, the central knowledge repository and documentation suite for the entire COMPASS ecosystem.

Whether you're exploring the Youniverse as a user, contributing as a developer, or architecting the **w⁴ Worldwide Webwork** underneath it all, this is your starting point.

## Navigating the Enchiridion

To the left, you'll find the primary navigation drawer outlining the hierarchical structure of the system's documentation:
- **00. Welcome**: You are here! Essential onboarding and introductions.
- **01. YouMeOS**: Documentation, user guides, and blueprints regarding the browser-based environment (OS officially standing for Omega Source, though users may define their own universal acronyms like Operating System).
- **02. COMPASS**: Details on the underlying engine, API structures, and data schemas running quietly under the hood to power the BlackBOX nodes and YouMeOS.
- **03. Platform Docs**: Global references, change logs, philosophies, and overarching notes. Start with the [YouMeOS Architecture Whitepaper](../reference/youmeos-compass-whitepaper.md) to understand the Trillion-Dollar spatial grid we are building.

Enjoy your journey into the stars.

---

## Document Metadata

\`\`\`yaml
title: "Welcome to Project Compass & YouMeOS"
description: "Onboarding orientation, system architecture overview, and documentation discovery roadmap."
category: "Guides"
icon: "fal fa-hand-wave"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - onboarding
  - overview
  - guides
  - getting-started
  - compass
ai_summary: "Introductory guide and navigation roadmap orienting new developers and operators to Project Compass, YouMeOS, and the documentation taxonomy."
\`\`\`
`,Sn=`# Spark Development Guide

> End-to-end engineering playbook for authoring, testing, and registering new Sparks in the YouMeOS spatial operating system.

---

## 1. Overview & Spark Architecture

In **YouMeOS**, applications are called **Sparks**. A Spark is an autonomous, windowed web application adhering to the **Quantum Engineering Standards**:

\`\`\`
apps/youmeos/app/sparks/[spark-id]/
├── [spark-id]-app.vue        # Root Spark View & Window Shell
├── [spark-id]-toolbar.vue    # Controls & Filter Bar
├── [spark-id]-modal.vue      # Configuration Dialogs
├── mechanics/
│   └── use[Name]Store.ts     # Pinia State Machine
├── types.d.ts                # TypeScript Interfaces & Contracts
└── index.ts                  # Spark Module Entry Point
\`\`\`

---

## 2. Step-by-Step Spark Authoring

### Step 1: Define TypeScript Contracts (\`types.d.ts\`)
\`\`\`typescript
export interface CustomSparkItem {
  readonly id: string;
  readonly title: string;
  readonly status: 'draft' | 'published';
  readonly createdAt: number;
}

export interface CustomSparkState {
  readonly items: Record<string, CustomSparkItem>;
  readonly activeId: string | null;
  readonly isLoading: boolean;
  readonly error: string | null;
}
\`\`\`

### Step 2: Implement Reactive Pinia Store (\`useCustomSparkStore.ts\`)
\`\`\`typescript
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { CustomSparkItem } from '../types';

export const useCustomSparkStore = defineStore('custom-spark', () => {
  const items = ref<Record<string, CustomSparkItem>>({});
  const activeId = ref<string | null>(null);
  const isLoading = ref(false);

  const activeItem = computed(() => (activeId.value ? items.value[activeId.value] : null));

  async function fetchItems() {
    isLoading.value = true;
    try {
      // Fetch from REST API or local storage
    } finally {
      isLoading.value = false;
    }
  }

  return { items, activeId, isLoading, activeItem, fetchItems };
});
\`\`\`

### Step 3: Construct the View Component (\`custom-spark-app.vue\`)
Always use **X-Atom Primitives** (\`<x-btn>\`, \`<x-card>\`, \`<x-text-field>\`) and glassmorphic styling:

\`\`\`vue
<template>
  <v-sheet class="custom-spark-window d-flex flex-column h-100" color="transparent">
    <x-card class="pa-4 flex-grow-1 glass">
      <v-sheet class="d-flex justify-space-between align-center mb-4" color="transparent">
        <h2 class="text-h6 font-weight-bold">Custom Spark</h2>
        <x-btn variant="glass" color="primary" @click="handleAction">Action</x-btn>
      </v-sheet>
    </x-card>
  </v-sheet>
</template>

<script setup lang="ts">
import { useCustomSparkStore } from './mechanics/useCustomSparkStore';
const store = useCustomSparkStore();
const handleAction = () => { /* Action logic */ };
<\/script>
\`\`\`

---

## 3. Spark Registration & Metadata

Register the Spark in \`apps/youmeos/mechanics/useLauncherStore.ts\`:
\`\`\`typescript
{
  id: 'custom-spark',
  title: 'Custom Spark',
  icon: 'fal fa-sparkles',
  brandColor: '#62c9ff',
  category: 'Productivity',
  component: () => import('../app/sparks/custom-spark/custom-spark-app.vue')
}
\`\`\`

---

## 4. Documentation & Enchiridion Deep Linking

Every Spark must have a dedicated manual in \`docs/sparks/[spark-id].md\` implementing all 6 mandatory sections. To trigger documentation from within the Spark:

\`\`\`typescript
window.dispatchEvent(
  new CustomEvent('youmeos:enchiridion:open', {
    detail: 'custom-spark'
  })
);
\`\`\`

---

## Document Metadata

\`\`\`yaml
title: "Spark Development Guide"
description: "End-to-end engineering playbook for authoring, testing, and registering new Sparks in YouMeOS."
category: "Guides"
icon: "fal fa-code"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - guides
  - spark
  - youmeos
  - vue3
  - pinia
ai_summary: "Comprehensive developer guide for authoring YouMeOS Sparks covering directory structure, TypeScript contracts, Pinia state stores, X-Atom UI integration, launcher registration, and Enchiridion deep linking."
\`\`\`
`,kn=`# Three.js Legacy Migration Guide

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

---

## Document Metadata

\`\`\`yaml
title: "Three.js Legacy Engine Migration Guide"
description: "Step-by-step migration playbook for modernizing legacy Three.js r56/r62 starfield engines to Three.js r183."
category: "Guides"
icon: "fal fa-cube"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - threejs
  - migration
  - webgl
  - graphics
  - shaders
ai_summary: "Technical migration guide upgrading legacy Three.js r56/r62 geometry, particle systems, and materials to modern Three.js r183 standards."
\`\`\`
`,Tn=`# WebGPU Migration Plan

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

---

## Document Metadata

\`\`\`yaml
title: "WebGPU Architecture & Migration Strategy"
description: "Dual WebGL2 and WebGPU graphics engine architecture, renderer factories, and performance benchmarks."
category: "Guides"
icon: "fal fa-microchip"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - webgpu
  - webgl
  - renderer
  - threejs
  - gpu
ai_summary: "Strategic architecture specification for YouMeOS WebGPU migration featuring dynamic capability detection and WebGL2 fallback fallbacks."
\`\`\`
`,Pn=`# WebGPU Shader Migration Plan

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

---

## Document Metadata

\`\`\`yaml
title: "WebGPU TSL Shader Migration Roadmap"
description: "Comprehensive roadmap for converting legacy GLSL custom shaders into Three.js Shading Language (TSL) node materials."
category: "Guides"
icon: "fal fa-code"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - webgpu
  - tsl
  - shaders
  - glsl
  - materials
ai_summary: "Detailed 4-phase conversion roadmap transforming GLSL fragment and vertex shaders into modern Three.js Shading Language (TSL) node materials."
\`\`\`
`,xn=`# Getting Started with YouMeOS

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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS Getting Started Guide"
description: "Operator desktop manual covering window management, system bar, launcher, and essential Sparks."
category: "Guides"
icon: "fal fa-desktop"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - youmeos
  - webtop
  - desktop
  - sparks
  - operator-guide
ai_summary: "Comprehensive operator desktop manual for YouMeOS covering window management, taskbar controls, launcher navigation, and core Sparks."
\`\`\`
`,An=`# The Swiss Army Knife for Life

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
Everything you need-from managing your decentralized identity (Helios) to jotting down spontaneous ideas (Scratch Paper) and interacting with global economic protocols (Nexos)-happens in one cohesive, desktop-like environment. You don't have to juggle fragmented apps; your tools are unified.

### 2. Absolute Portability
Your workspace, your assets, your documents, and your identity aren't locked to a specific device. Because YouMeOS is a browser-based operating environment backed by robust, decentralized principles, your digital life travels with you. 

### 3. Economic Independence
Through integrated systems like The Crucible and the w⁴ Protocol, you aren't just a consumer; you are an active participant in a decentralized economy. You can transmute your time, effort, and engagement into tangible, system-recognized value without relying on traditional, predatory financial gateways.

### 4. Uncompromised Privacy
True sovereignty requires true privacy. By centralizing your tools within an environment built on self-ownership, you sever the reliance on third-party data harvesters. Your actions, notes, and metrics belong to you.

## The Bottom Line

When you boot into YouMeOS, you aren't just logging into a website. You are stepping into your own digital territory. You are equipping yourself with a versatile, ever-expanding Swiss Army Knife designed to help you navigate, build, and thrive as a sovereign individual in an interconnected universe.

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS: The Sovereign Web Swiss Army Knife"
description: "Digital sovereignty manifesto and practical multi-tool utility workflows across everyday Sparks."
category: "Guides"
icon: "fal fa-tools"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - swiss-army-knife
  - sovereignty
  - utilities
  - productivity
  - youmeos
ai_summary: "Practical guide outlining everyday productivity, offline persistence, and multi-tool utility workflows across the YouMeOS Spark ecosystem."
\`\`\`
`,Mn=`# YouMeOS: The Decentralized Operating System of the Internet

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
The true paradigm shift is not just in the UI-it's in the infrastructure. 

When you use YouMeOS, **you are not logging into our portal.** 
**You are logging into YOURS.**

- **Absolute Data Sovereignty:** The PWAs you load on your devices connect directly to \`www.your-own-domain.com\`. 
- **Decentralized Syncing:** Your data does not go to a central YouMeOS server. It syncs directly to your own domain and stays with you.
- **The Single-Stack Black Box:** Users are no longer just paying for an app-they are paying for the *hosting* that holds their domain, their personal database, and their local install of YouMeOS. This infrastructure acts as their private launchpad to manage their entire ecosystem.
- **Cost Consolidation:** The compounding monthly costs of dozens of disparate SaaS apps are entirely swallowed into this single, highly efficient, all-in-one black-boxed solution.
- **The Internet in Your Pocket:** The entire system operates from your own digital real estate, becoming your personalized, decentralized Operating System for the Internet-fitting right into your back pocket.

## Value Proposition for Stakeholders

### For the User
- **True Ownership:** You own your data, your content, and your domain.
- **Cost Elimination:** Replaces the need for dozens of expensive SaaS subscriptions.
- **Seamless Experience:** Offline-first, lightning-fast PWAs that feel like native applications, all running under a unified OS interface.

### For the Investor
- **Viral Infrastructure Play:** YouMeOS isn't just another app; it's an infrastructure layer. As users adopt it, they claim their own domains, driving massive, decentralized network effects.
- **New Economic Models:** Monetization shifts from predatory subscriptions to value-added ecosystems (e.g., premium Sparks, the w⁴ Protocol Economy, Digital Mineral/DIRT economy, and managed hosting partnerships). 
- **Moat via Sovereignty:** In an era of privacy concerns and AI data scraping, giving the user absolute control over their data is a powerful, unassailable competitive moat.

### For Developers (The "Sparks" Ecosystem)
- **Unified Distribution:** Developers can build Sparks (apps) that run perfectly within the YouMeOS ecosystem.
- **Direct Connection:** No need to build complex backend user management; the user's domain *is* the backend. 

## Summary
YouMeOS replaces the fragmented, rented Web 2.0 ecosystem with a sovereign, decentralized, and elegant Web 3.0 reality. It transforms the internet from a series of disjointed portals you visit, into a unified Operating System that you own.

---

## Document Metadata

\`\`\`yaml
title: "Sovereign PWA & Edge Node Execution Model"
description: "Client-side offline Progressive Web App execution model running local compute over decentralized networks."
category: "Reference"
icon: "fal fa-mobile-android"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - pwa
  - edge-node
  - service-workers
  - offline
  - client-side
ai_summary: "Technical specification detailing PWA service worker caching, local database transactions, and background mesh synchronization."
\`\`\`
`,Cn=`# Dirt: The Distributed Digital Mineral Economy

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
Within the OS, users earn internal, off-chain points. This allows for fast, free, and highly granular gamification without incurring blockchain gas fees. But these are not just hoarded-they are the **social currency of the network**.

**The Granular Value of GP: Emotional Ledgers & Reactions**
At its absolute base level, one primary way to earn Game Points (GP) is through human interaction-specifically, the "click" of an emotional reaction. It is important to note that *GP is not cryptocurrency*; it is the internal, off-chain gamified social currency. 
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

---

## Document Metadata

\`\`\`yaml
title: "DIRT Digital Mineral Economy & Tokenomics"
description: "Digital mineral economy, proof-of-engagement minting, and raw resource tokenomics across the spatial universe."
category: "Reference"
icon: "fal fa-gem"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - dirt
  - tokenomics
  - economy
  - minerals
  - gamification
ai_summary: "Economic model and token mechanics for DIRT digital resources, scarcity curves, and crafting recipes in the Youniverse."
\`\`\`
`,Ln=`# PROJECT COMPASS // KNOWLEDGE BASE NEXUS

\`\`\`
   ██████╗ ██████╗ ███╗   ███╗██████╗  █████╗ ███████╗███████╗
  ██╔════╝██╔═══██╗████╗ ████║██╔══██╗██╔══██╗██╔════╝██╔════╝
  ██║     ██║   ██║██╔████╔██║██████╔╝███████║███████╗███████╗
  ██║     ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══██║╚════██║╚════██║
  ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║     ██║  ██║███████║███████║
   ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝
  =============================================================
  SYSTEM INTERFACE LAYER (LAYER 3) // HALL OF THE GODS ECOSYSTEM
  PROTOCOL: w⁴ (Worldwide Webwork) | NODE: Sovereign BlackBOX
  CANVAS: Glassmorphic Starship HUD | ACCENT: Neon Cyan (#62c9ff)
\`\`\`

Welcome to the central command hub for **Project COMPASS** and the **Hall of the Gods** spatial computing ecosystem. COMPASS serves as the Starship HUD interface that transforms raw WordPress infrastructure into a sovereign, high-frequency, gamified node.

---

## 1. Quick Navigation Matrix

| Sector | Focus Area | Primary Entry Points |
| :--- | :--- | :--- |
| **01. Core Architecture** | System foundations & protocol | [[Ecosystem-Architecture]], [[The-W4-Protocol-and-Fractal-OS]], [[Project-Philosophy]] |
| **02. Design System** | Atoms, tokens, HUD aesthetics | [[Design-Tokens]], [[Design-System-Atoms]], [[Component-Refactoring-Guide]] |
| **03. Plugin Armory** | Active tools & utilities | [[Bomb-Bag-System]], [[Bazaar-POS-System]], [[Moving-Castle-System]], [[Questbook-CRM-System]] |
| **04. YouMeOS Grid** | Sovereign OS & micro-nodes | [[Universal-OS-Vision]], [[YouMeOS-Engine]], [[spark-plugs]] |
| **05. Economics & Strategy** | Monetization & macro scale | [[BOX_TIER_ARCHITECTURE]], [[business_dirt_digital_mineral_economy]], [[business_patent_strategy]] |
| **06. Operations & Ops** | Versioning, logs, deployment | [[versioning]], [[CHANGELOG]], [[github-plugin-updater]] |

---

## 2. Core Architecture & Philosophy

The Trillion-Dollar Stack (TDS) positions COMPASS as Layer 3: The Operational Interface.

\`\`\`
+-------------------------------------------------------------+
| Layer 5: Hall of the Gods (Genesis & Cultural Nexus)       |
+-------------------------------------------------------------+
| Layer 4: YouMeOS (Living Spatial Network & Omega Source)    |
+-------------------------------------------------------------+
| Layer 3: COMPASS Suite (Starship HUD & Sovereign Controls)  | <-- YOU ARE HERE
+-------------------------------------------------------------+
| Layer 2: BlackBOX Nodes (Self-Contained Sovereign Instances) |
+-------------------------------------------------------------+
| Layer 1: w⁴ Protocol (Worldwide Webwork Spatial Bedrock)    |
+-------------------------------------------------------------+
\`\`\`

### Essential Architecture Documents
* [[Ecosystem-Architecture]]: Complete breakdown of the 5-layer Trillion-Dollar Stack.
* [[Project-Philosophy]]: Core manifesto, lyrical anthem, and the 5 UX design pillars.
* [[The-W4-Protocol-and-Fractal-OS]]: The fourth-dimensional web grid and decentralized hosting network.
* [[Core-Taxonomy]]: Structural terminology across nodes, sparks, and portals.
* [[System-Overview]]: High-level service layout and data flow.
* [[Portals-and-Ecosystem]]: Routing matrix between COMPASS and external nodes.

---

## 3. Design System & Starship HUD Aesthetics

All UI components in COMPASS adhere to strict glassmorphism, zero-entropy code standards, and the atomic component hierarchy.

### The 5 Visual Pillars
1. **Glassmorphism:** Multi-layered translucent panels with \`backdrop-filter: blur(12px)\`.
2. **Dark Mode Canvas:** Deep cosmic backgrounds reducing eye strain and cognitive noise.
3. **Neon Cyan Accents:** High-voltage \`#62c9ff\` highlighting interactive elements.
4. **Organic Micro-Animations:** Responsive hover states and stateful feedback loops.
5. **Zero-Entropy Atom Hierarchy:** Raw DOM tags restricted exclusively to atom wrappers (\`<x-btn>\`, \`<x-card>\`).

### Design Reference Library
* [[Design-Tokens]]: Color tokens, typography scales, glass blur levels, and elevation shadows.
* [[Design-System-Atoms]]: Comprehensive catalog of \`<x-*>\` components and usage examples.
* [[Component-Architecture]]: Structural rules for atoms, molecules, organisms, and views.
* [[Component-Refactoring-Guide]]: Migration guidelines for converting legacy code into atoms.
* [[Sub-App-Layout]]: Standardized blueprint for spark windows and docked sub-apps.

---

## 4. Compass Plugin Suite (The Armory)

The COMPASS Suite equips sovereign node operators with dedicated modular plugins.

| Plugin | Codename | Purpose & Operational Role | Documentation |
| :--- | :--- | :--- | :--- |
| **Moving Castle** | \`magic-door\` | Sovereign multi-site routing & dynamic portal management | [[Moving-Castle-System]] |
| **Bomb Bag** | \`bomb-bag\` | System cleanup, cache purging, and high-impact actions | [[Bomb-Bag-System]] |
| **Bazaar POS** | \`bazaar\` | Omnichannel point of sale, order routing & multi-inventory | [[Bazaar-POS-System]] |
| **Hookshot** | \`hookshot\` | External API webhooks, data tethering & remote sync | [[Hookshot-System]] |
| **Questbook CRM** | \`questbook\` | Gamified customer relationship and journey tracking | [[Questbook-CRM-System]] |
| **Bug Net** | \`bug-net\` | Telemetry capture, exception monitoring & error quarantine | [[Bug-Net-System]] |
| **Silver Arrow** | \`silver-arrow\` | Ultra-fast notification routing & precision alerts | [[Silver-Arrow-System]] |
| **Magic Cloak** | \`magic-cloak\` | Path obfuscation, bot diversion & privacy shielding | [[Magic-Cloak-System]] |
| **Mirror Shield** | \`mirror-shield\` | DDOS mitigation, rate-limiting & edge protection | [[Mirror-Shield-System]] |
| **Magic Mirror** | \`magic-mirror\` | Environment cloning, staging replication & previewing | [[Magic-Mirror-System]] |
| **Pegasus Boots** | \`pegasus-boots\` | Turbo caching, static asset acceleration & preloading | [[Pegasus-Boots-System]] |
| **Polos Consensus** | \`polos\` | Multi-node voting, distributed decision engine & consensus | [[Polos-Consensus-System]] |
| **Treasure Trove** | \`treasure-trove\` | Secure digital vault, asset manager & spatial sitemaps | [[Treasure-Trove-and-Map-System]] |
| **Magic Formula** | \`magic-formula\` | Reactive computation engine, workflows & custom macros | [[magic-formula-system]] |
| **Lemon-Aid** | \`lemon-aid\` | Automated self-healing diagnostics & live remediation | [[Lemon-Aid-System]] |
| **Performance Widget** | \`perf-widget\` | Real-time heads-up display telemetry and resource load | [[Performance-Widget-System]] |

---

## 5. YouMeOS Grid & Engine Architecture

YouMeOS orchestrates sovereign BlackBOX nodes into a unified digital cosmos.

### Core Engine Documentation
* [[Universal-OS-Vision]]: The transition from extractive social silos to sovereign spatial computing.
* [[YouMeOS-Engine]]: Event bus architecture, plugin lifecycle, and message queue.
* [[YouMeOS-Federated-Identity]]: Decentralized user authentication and permissions.
* [[Sovereign-Identity]]: Cryptographic keys and self-sovereign user ownership.
* [[Asynchronous-Cosmos]]: Non-blocking cross-node communication protocol.
* [[PWA-Desktop-Node]]: Offline-first desktop and progressive web execution.
* [[Nomenclature-Mapping]]: Translation matrix between legacy terminology and YouMeOS primitives.
* [[youmeos_compass_whitepaper]]: Comprehensive system specification and architectural thesis.

### Key Spark Plugs
* [[spark-plugs]]: Complete directory of modular micro-apps.
* [[blackbox]] | [[omega-source]] | [[enchiridion]]
* [[tesseract]] | [[wizards-tower]] | [[sys-monitor]]
* [[terminal]] | [[noosphere]] | [[nexus]]
* [[midnight-nerd]] | [[cookie-jar]] | [[bubblegum]]
* [[gaea]] | [[helios]] | [[tourguide]]

---

## 6. Business, Economics & Strategy

High-level monetization models, digital mineral tokenomics, and enterprise deployment tiers.

* [[BOX_TIER_ARCHITECTURE]]: Node deployment specs across Free, PRO, Enterprise, and WhiteGLOVE.
* [[business_dirt_digital_mineral_economy]]: Fundamental value mechanics, resource staking, and mineral rewards.
* [[business_w4_protocol_economy]]: Macro economic model powering decentralized webwork.
* [[business_patent_strategy]]: Intellectual property framework protecting core algorithms.
* [[patent_diagrams_and_prior_art]]: Architectural flowcharts and system diagrams.
* [[business_sephiroth_godhead_progression]]: Gamification tiers and user progression matrix.
* [[business_storybrand_framework]]: Narrative positioning and user empathy journey.
* [[Tesseract-Pricing-and-White-Glove-Service]]: Concierge engineering packages and pricing schedules.

---

## 7. Developer Standards & Operational Directives

Strict operational rules enforced across the codebase:

\`\`\`
[MANDATORY SYSTEM DIRECTIVES]
1. ZERO EM DASHES: Never use em dashes anywhere in code, markdown, comments, or copy.
2. ATOM SUPREMACY: Use <x-btn>, <x-card>, <x-text-field> instead of raw HTML elements.
3. LEXICAL SETUP ORDER: Composables -> Refs -> Computeds -> Methods -> Watchers -> Hooks.
4. NO TEXT-* ON FA ICONS: Never attach text-* classes to FontAwesome icons (breaks SVG rendering).
5. TOKEN CONSERVATION: Be concise, targeted, and focused on surgical precision.
\`\`\`

### Operational Guides
* [[CHANGELOG]]: Historical record of features, fixes, and architectural revisions.
* [[versioning]]: Release tagging and upgrade cadence rules.
* [[github-plugin-updater]]: Automated distribution pipeline from repository to live nodes.
* [[authenticity_and_licensing]]: Software licensing, intellectual property, and node registration.
* [[Cloudflare-Email-Routing]]: Edge-level email handling and communication dispatch.

---

\`\`\`
             "People are looking at decades. We are looking at centuries."
\`\`\`

---

## Document Metadata

\`\`\`yaml
title: "Nexus Knowledge Base & Operator Reference"
description: "Operational troubleshooting knowledge base, FAQ, and administrative configuration guides for Project Compass."
category: "Reference"
icon: "fal fa-books"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - knowledge-base
  - faq
  - troubleshooting
  - operator-reference
  - nexus
ai_summary: "Centralized operator knowledge base providing direct answers, configuration parameters, and diagnostic routines."
\`\`\`
`,On=`# The Godhead Progression: Thoth, Qabalah, & The 10-Layer Lineage

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

---

## Document Metadata

\`\`\`yaml
title: "Sephiroth MMO Progression & Leveling Matrix"
description: "Ancient-futuristic Tree of Life leveling matrix, XP formulas, and Sephira tier unlock requirements."
category: "Reference"
icon: "fal fa-crown"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - sephiroth
  - mmo
  - progression
  - leveling
  - gamification
ai_summary: "Mathematical progression curves, XP point scaling formulas, and unlocking ladders across the 10 Sephira tiers."
\`\`\`
`,Rn=`# YouMeOS & COMPASS: The StoryBrand Framework

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
*   **The Reality:** Every action they take-whether it's closing a support ticket, writing a document, or communicating with their team-is quantified by the **Universal MMO Engine**. They earn XP, level up, and acquire resources (Dirt). 
*   They navigate seamlessly between worlds, mastering their workflow in an environment that feels like a game but functions with the power of high-end enterprise software. The digital workspace is finally unified, engaging, and beautifully theirs.

---

## Document Metadata

\`\`\`yaml
title: "Elysium StoryBrand Narrative Framework"
description: "StoryBrand marketing narrative, customer hero journey, and communication messaging guide for Project Compass."
category: "Reference"
icon: "fal fa-comment-alt-lines"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - storybrand
  - marketing
  - messaging
  - narrative
  - branding
ai_summary: "StoryBrand 7-part narrative framework mapping the user from a frustrated webmaster to an empowered sovereign system officer."
\`\`\`
`,_n=`# YouMeOS: The 10-Year Vision & StoryBrand Manifesto

> *"From the Sovereign Individual to the Global Noosphere. Building the Operational Internet."*

This document serves as the ultimate distillation of the YouMeOS philosophy, architecture, and 10-year civilizational vision. It is structured using the StoryBrand framework to clearly articulate the movement's core purpose-not just as software, but as the next social platform that unifies the world.

---

## 1. The Core Narrative (The "10-Year-Old" Explanation)

**The Villain:** Right now, the internet is a loud, messy playground owned by giant, greedy landlords. They make you rent your space, remember a million passwords, and they actually *make money* when people are arguing, separated, or feeling bad about themselves. If you are struggling, you are left alone. Money is a game of hoarding.

**The Hero:** You, and everyone else on this planet. You were built to unite the world, connect with others, and create beautiful things, not to be divided and mined for data. 

**The Guide:** YouMeOS. We are building the tools to help you stop renting the internet and start *owning* your own universe. 

**The Plan:** 
1. **Your Spaceship:** You get your own private web domain that belongs only to you.
2. **Helios (Your Sun):** Your identity core, a safe place to figure out who you are.
3. **The Empathy Engine:** A system that notices if you are sad and sends help, instead of ignoring you. 
4. **Money as a Game of Helping (w⁴ Protocol):** An economy where you earn by helping others, and where a giant family treasury makes sure nobody falls through the cracks.
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
At the center of every user's spaceship is **Helios**-the identity and inner-reflection engine. 
* It maps to planetary archetypes (Venus for Loving Awareness, Mars for Drive, the Moon for Shadow Work).
* It provides a private, zero-entropy sanctuary where users process their dreams, traumas, and goals *before* they broadcast to the world.

### Step 3: The Gravitational Social Network (The Noosphere)
When the user looks outward, they do not see a chronological feed of noise. They see a 3D WebGL Cosmos.
* **Asynchronous ActivityPub:** The network is decentralized. When friends interact, ActivityPub events are fired between their independent spaceships.
* **Algorithmic Astrophysics:** Gravity is real. The more you interact with someone, the heavier their "Mass" becomes, pulling their Star closer to your center. The network naturally and beautifully organizes itself around the people you actually care about.

### Step 4: Wormholes and The Nexus (The Tesseract)
How do sovereign spaceships interact? Through the **Nexus**.
* **Cross-Instance Federation:** By clicking a Star, the user triggers a Wormhole. Cryptographic handshakes allow the user to transport into a friend's universe, maintaining their own identity while exploring someone else's customized world.
* **The 4D Tesseract:** This allows the system to scale fractally-from a single individual's box, to a business hub, to a municipal metropolis, up to a planetary network.

### Step 5: The Empathy Engine & W4 Economy
The ultimate philosophical shift is the **w⁴ Protocol** - an economy designed to close the global wealth gap.
* **The Mantle Credit Protocol:** The system acts as a parent. If a user needs $10k, the system treasury provides it. Repayment is achieved simply by *participating* in the network (creating art, helping others).
* **Empathy as an Economic Imperative:** The only leak in the system is user dropout. The system uses an *Emotional Ledger* to detect when a user is struggling. Instead of sending a debt collector, it sends a therapist or a friend. It is always cheaper to heal a user than to lose them.

---

## 4. The Call to Action: The Trojan Horse

How do we spark this movement globally? We don't ask people to join a new platform; we hijack the existing one.

By packaging this civilizational architecture into **WordPress Plugins (COMPASS)**, we instantly make this technology compatible with 40% of the internet. We upgrade 800 million legacy, isolated websites into interconnected, 4-dimensional spatial nodes.

---

## 5. The Omega Point (The Ultimate Success)

If this movement succeeds, we reach the **Omega Point**. 

In ten years, YouMeOS is not seen as an app. It is the invisible API of reality. We achieve a post-scarcity civilization where humans participate in reality-teaching, building, creating-and the network quietly handles the math of who needs what and who produced what. 

Money ceases to be a tool of extraction and becomes a gamified system of universal support. The internet transforms from a fragmented, lonely marketplace into a unified, living Noosphere-a single human family sharing the stars.

---

## Document Metadata

\`\`\`yaml
title: "The Sovereign Web Manifesto"
description: "Philosophical and cultural manifesto championing decentralized digital ownership, open internet protocols, and human sovereignty."
category: "Reference"
icon: "fal fa-scroll"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - manifesto
  - sovereignty
  - open-web
  - philosophy
  - elysium
ai_summary: "Foundational cultural manifesto for Elysium declaring digital independence from corporate algorithmic walled gardens."
\`\`\`
`,Dn=`# Tesseract Sovereign Node Pricing & White Glove Service

## Overview
The **Tesseract** (The w⁴ Protocol Spark) provides sovereign cloud hosting and personal operating system infrastructure across 11 discrete tiers, grouped into three tracks: **Micro**, **Macro**, and **Omni**.

To ensure sustainable operations and provide comprehensive customer support, Tesseract supports two distinct provisioning pathways:
1. **DIY / Self-Provision Flow (WPMU DEV Hub):** Direct link to automated container deployment for users who manage their own domain DNS, migrations, and upkeep.
2. **White Glove Service Flow (BlackBOX WhiteGLOVE + My Compass Consulting):** Fully managed, done-for-you server deployment bundled with dedicated monthly concierge consulting retainer hours powered by the WordPress Stripe REST API (\`/wp-json/xophz/v1/stripe/checkout\`).

---

## Tier & Retainer Pricing Matrix

| Track | Tier Name | DIY Price (Hub) | White Glove Price (Stripe) | Monthly Concierge Retainer | Primary Deliverables & Support Scope |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Micro** | **Quantum** | $14.99/mo | $149/mo | 1 Hour / mo | 1-on-1 Guided Onboarding, Custom DNS & Domain Mapping, YouMeOS Node Deployment, 1h Monthly Support |
| **Micro** | **Bronze** | $34.99/mo | $199/mo | 1 Hour / mo | Pioneer Node Setup, Automated Daily Backup Verification, Forms & Spam Shield, 1h Monthly Support |
| **Micro** | **Silver** | $74.99/mo | $299/mo | 1.5 Hours / mo | Multisite Node Architecture, Questbook CRM Integration, AI Image Optimization, 1.5h Monthly Support |
| **Micro** | **Silver Enhanced** | $99.99/mo | $399/mo | 2 Hours / mo | E-Commerce Storefront Setup, High-Speed Cache Tuning, Abandoned Cart Automation, 2h Monthly Support |
| **Macro** | **Gold** | $129.99/mo | $599/mo | 3 Hours / mo | High-Traffic Node Architecture, Marketing Funnels, A/B Split Testing Config, 3h Monthly Retainer |
| **Macro** | **Gold Enhanced** | $242.40/mo | $799/mo | 4 Hours / mo | AI Content Pipeline, Business Intelligence Dashboards, Database Clustering, 4h Monthly Retainer |
| **Macro** | **Platinum** | $299/mo | $999/mo | 5 Hours / mo | Turn-Key Agency Hub Setup, Single Sign-On & RBAC Hardening, Multisite Routing, 5h Monthly Retainer |
| **Macro** | **Platinum Enhanced**| $420.42/mo | $1,499/mo | 7.5 Hours / mo | White-Label Enterprise Engine, Client Portal Integration, Developer Tools Setup, 7.5h Monthly Retainer |
| **Omni** | **Uranium** | $650/mo | $1,999/mo | 10 Hours / mo | Dedicated Clustered Cloud, Enterprise WAF Hardening, Staging/Sandbox Environment, 10h Concierge Retainer |
| **Omni** | **Titanium** | $1250/mo | $2,499/mo | 12 Hours / mo | High-Availability Sovereign Cluster, Auto-Scaling & Self-Healing Setup, 12h Concierge Retainer |
| **Omni** | **Palladium** | $2499/mo | $4,999/mo | 20 Hours / mo | Enterprise Sovereign Core Matrix, Global Synchronization, Omni API Integration, 20h Principal Systems Retainer |

---

## User Interface & Button Interactions

Each tier presentation in [\`tesseract-app.vue\`](../../app/sparks/tesseract/tesseract-app.vue) renders dual interactive buttons with dynamic sliding-text hover states:

### 1. White Glove Action (Primary)
* **Default State:** \`WHITEGLOVE DONE FOR YOU\` with icon \`fal fa-hand-holding-box\`.
* **Hover State:** \`\${tier.whiteGlovePrice}\` with icon \`fal fa-sparkles\`.
* **Subtext Tag:** Shows included monthly concierge hours (\`Includes \${tier.whiteGloveHours}h monthly concierge support\`).
* **Interaction:** Initiates a Stripe Checkout session via \`/wp-json/xophz/v1/stripe/checkout\`.

### 2. DIY Action (Secondary / Coming Soon Blueprint Teaser)
* **Default State:** \`DIY \${tier.name.toUpperCase()}BOX\` with icon \`fal fa-box-usd\`.
* **Hover State:** \`\${tier.price} (COMING SOON)\` with icon \`fal fa-box-open\`.
* **Interaction:** Controlled by reactive toggle \`diyLive\` in \`tesseract-app.vue\`. When \`diyLive === false\` (default), clicking opens the **"What's in the Box?" Architecture Blueprint** modal showcasing the full plugin suite and container specs, with a bridge to White Glove instant access. When \`diyLive === true\`, it opens the automated Hub provisioning link directly.

### 3. Modals & Details Views
* **White Glove Concierge Modal:** Detailed comparison between White Glove and DIY, breakdown of included monthly retainer hours, direct engineering contact commitment, and direct Stripe checkout button.
* **DIY Architecture Blueprint Modal:** Full breakdown of hardware specs, Value Generated, and Compass Suite plugins pre-installed in the box, highlighting 100% customer-funded infrastructure.
* **White Glove Initialized Celebration Modal:** In-app glassmorphic Starship confirmation dialog displayed immediately upon checkout completion via \`postMessage\` handshake, confirming that our systems engineering team will directly contact the buyer within 1 business day via phone and email to coordinate setup.

---

## Stripe REST Connector & Popup Checkout Flow

### 1. Checkout Window Architecture
* **External Popup Execution:** White Glove checkout generates centered popup coordinates and opens Stripe Checkout in an isolated popup window (\`window.open\`), preventing full-page navigation and preserving YouMeOS WebGL memory, open spark windows, and desktop session state.
* **Endpoint:** \`POST /wp-json/xophz/v1/stripe/checkout\`
* **Headers:** \`Content-Type: application/json\`, \`X-WP-Nonce: wpApiSettings.nonce\`
* **Payload:**
\`\`\`json
{
  "price": 149,
  "license": "Tesseract QuantumBOX - White Glove Concierge (1h Support)",
  "product_name": "YouMeOS Tesseract - QuantumBOX (White Glove Concierge)",
  "success_url": "https://youmeos.local/callback/stripe?status=success&tier=quantum&session_id={CHECKOUT_SESSION_ID}",
  "cancel_url": "https://youmeos.local/callback/stripe?status=cancel&tier=quantum"
}
\`\`\`

### 2. Customer Contact & Onboarding Intake
* **Native Phone Number Collection:** Configured \`phone_number_collection.enabled = true\` on Stripe Checkout sessions to automatically collect customer telephone numbers for concierge onboarding calls.
* **Target Domain Custom Field:** Configured \`custom_fields\` with key \`website_url\` ("Current Website or Target Domain") required on checkout so users specify their migration or deployment domain.
* **Direct Outreach Messaging:** Custom submit messaging displayed directly on the Stripe checkout review page confirming direct engineering team contact.

### 3. Standalone Wormhole Return Interceptor
* Upon transaction completion or cancellation, Stripe redirects the popup window to \`/callback/stripe\`.
* The Event Horizon plugin intercepts the route via \`render_stripe_callback_page()\` and renders the Three.js 3D space-time wormhole particle tunnel.
* **Handshake Event:** The Wormhole interceptor transmits a \`window.opener.postMessage({ type: 'STRIPE_CHECKOUT_SUCCESS', tier_id: 'quantum', session_id: '...' }, '*')\` payload back to YouMeOS immediately.
* **Customer Notice:** Clearly states that deployment order has been received and our engineering team will be in contact directly via phone and email.
* **Persistent Display & Manual Return:** Keeps the Wormhole canvas playing persistently without auto-closing the window, allowing the user to return to YouMeOS via the "Return to YouMeOS" button when ready.
* **Standalone Fallback:** If accessed outside a popup context, the Wormhole page falls back to navigating to the YouMeOS shell with the active spark matrix.

### 4. Local Mock Checkout Simulator
* When no live Stripe API key is configured, the REST endpoint returns \`mock_checkout=1\`.
* The Wormhole route presents an interactive test simulator collecting test phone numbers and website URLs with identical \`postMessage\` events for rapid development.

---

## Document Metadata

\`\`\`yaml
title: "Tesseract 4D Hosting & Tier Pricing"
description: "Server node clustering, automated resource allocation, and monthly container pricing matrices."
category: "Reference"
icon: "fal fa-cube"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - tesseract
  - hosting
  - server-nodes
  - cloud
  - pricing
ai_summary: "Technical hosting and provisioning architecture detailing node container sizes, bandwidth tiers, and pricing schedules."
\`\`\`
`,In=`# The w⁴ Protocol: A 4D Fractal Economic Operating System

## Overview
The w⁴ Protocol is the unified economic, governance, and logistical operating system of YouMeOS. It is not a feature - it is the protocol itself. Built on the four sovereign pillars (Own Your Infrastructure, Private Compass, Sovereign Data, Distributed Networking), W4 transforms money from a tool of extraction into a gamified, self-stabilizing, fractal system designed to close the global wealth gap permanently.

## 1. The Axiom X Foundation
*"Numbers are the absolute, universal language of existence. Awaken your awareness, locate where the grand symphony is out of tune, and actively bring it back into resonance."*

The W4 economy is built on the Triforce of the Gods axioms:
- **Axiom I (The Sovereign Architecture):** Two opposing forces clash until a third stabilizes them. The economy uses a triangular DAO structure where no single branch can overrule the other two.
- **Axiom III (The Fractal Network):** The identical structures that bind galaxies also bind atoms. The economy is fractal - the same patterns of effort → compression → value repeat at every scale.
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
Unlike Bitcoin's static 21M cap, Apex Minerals have NO hard-coded supply limit. Instead, they are gated by exponentially increasing effort requirements (RP burn, AP velocity, sustained contribution time). The supply naturally forms a pyramid - not because the system locks people out, but because the grind gets steeper. Anyone CAN reach Diamond. Not everyone WILL. Just like a PhD - there is no cap on doctorates, but effort naturally filters the population.

### The Alchemist Protocol (Anti-Bot Firewall)
Every on-chain transmutation requires four non-negotiable vectors:
1. **Material Cost:** The exact aggregate gamified material.
2. **Reputation Floor:** Minimum lifetime RP to access the forge.
3. **Reputation Burn:** Permanently burns RP. You spend trust to extract value.
4. **Velocity Gate:** Recent AP activity within a rolling time window. Proves you are currently active.

## 4. Universal Resonance Voting & The Trinity fX Structure

To prevent the formation of an oligarchy-even one based on labor-governance is not restricted to Apex Mineral holders. **Voting power is universal and distributed throughout the entire system.** Every citizen has a voice, regardless of wealth or mineral status.

### The Sunburst Resonance Multiplier
Because every citizen runs their own YouMeOS node, the system tracks an internal, cryptographically secure alignment metric: **The Sunburst Chart**. 
- Votes are not bought with Gold, nor are they strictly dictated by raw labor output.
- Instead, a citizen's voting weight is calculated using the **Resonance Multiplier**-a metric derived from how balanced their Sunburst chart is. 

**The AI Engine & Anti-Gaming:** 
You cannot "game" this by speed-running positive tasks. When an action is logged, the core AI parses the true context of the action and mathematically distributes the energy across the 12,288-node Qabalistic stat chart (The Godhead Progression). The system measures authentic systemic spread, not repetitive clicking.

**The Twilight Realm (Integrating the Shadow):** 
"Balance" in YouMeOS does not mean toxic positivity. The Sunburst chart requires walking in the realm of twilight-balancing both light and shadow. 
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
- Arbitration curates tie-breakers-but the final execution always requires a **Universal Resonance Vote** by the entire network.

## 5. The Mantle Credit Protocol (Closing the Wealth Gap)

### The Core Philosophy
There IS enough wealth in the world. It is just poorly distributed. The w⁴ Protocol's job is to fix that by acting as a universal logistical engine - the "Parent" of the global family.

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

The ONLY leak in the entire system is user dropout. If someone takes $10k and stops participating, the system absorbs a loss. The w⁴ Protocol's response to dropout is the OPPOSITE of traditional debt collection - the system invests MORE in the person, not less.

### The Emotional Ledger (Detection Layer)
The system maintains a lightweight Rolling JSON Tally of each user's emotional reactions (e.g., \`{"❤️": 402, "🔥": 12, "😭": 55}\`). This is not surveillance - it is empathy infrastructure.

**Detection Triggers:**
- User activity drops below threshold → system flags
- Emotional Ledger shows spike in distressed reactions → system escalates
- Outstanding Mantle Credit + low activity = **"At Risk" status**

### The Response Protocol (Not Punishment - Support)
1. **Automated Outreach:** The system reaches out through the OS. Not a collections notice - a genuine wellness check.
2. **Debt Counseling Spark:** Routes the user to a financial wellness module. Helps them understand their debt isn't a chain - it's a number that participation naturally erases.
3. **Therapy / Mental Health Routing:** If the Emotional Ledger signals distress, the system connects them to community counselors or professional services (also covered by The Mantle).
4. **Reduced Participation Pathways:** Lighter ways to stay engaged - a 5-minute journal entry, a single reaction, just logging in. Any pulse of activity keeps the relationship alive.

### Why This Works Economically
- Cost of $10k debt write-off from dropout: **-$10k**
- Cost of $500 in counseling to retain the user: **-$500**
- Value of that user staying active for 5+ years: **+$50k+**
- It is ALWAYS cheaper to keep the person than to lose them.
- Empathy becomes an economic imperative.

## 7. The 4D Fractal Money System

The W4 economy operates across four dimensions, each containing the fractal pattern of the one below it:

- **1D: GP/XP (Time)** - Linear human effort over time. The base dimension.
- **2D: Dirt (Space)** - On-chain coordinates. Your labor mapped to a permanent ledger.
- **3D: Apex Minerals (Volume)** - Crystallized, compressed accumulation of effort. Depth of contribution.
- **4D: Gold / The Fiat Bridge (Temporal Bridge)** - The dimension that connects the digital mineral economy to the real-world fiat timeline. Gold exists across both worlds simultaneously.

Each dimension contains the same pattern: effort → compression → value. Zoom into any level and the fractal repeats.

## 8. The W4 Infrastructure Pillars

| W4 Pillar | Economic Function |
|---|---|
| **Own Your Infrastructure** | Cloud hosting nodes (e.g., Enterprise AWS Elastic Cloud) → hosting sales → Liquidity Pool → The Mantle has real USD to lend |
| **Private Compass Included** | YouMeOS itself → the interface where citizens log XP, earn GP, and interact with the economy |
| **Sovereign Data Storage** | Emotional Ledger, XP history, proof-of-contribution - stored on YOUR node, not a corporate server |
| **Distributed Networking** | The mesh of nodes IS the DAO. No central bank. The network is the treasury. |

### Network Synchronization (The W4 Propagation Engine)
For 20 years, WordPress has powered 40% of the internet, but every site has been an isolated island. The w⁴ Protocol acts as the connective tissue (the "Antenna"), turning these isolated islands into a unified, decentralized supercomputer.

All sub-protocols (Mantle Credit, Retention, Ledger Sync) are wrapped up and executed by the overarching w⁴ Protocol via:
1. **The Gossip Protocol (Epidemic Routing):** When a node state updates (e.g., forging a Diamond), the node uses background Action Schedulers to ping 5-10 neighbor nodes via WP REST API. Those nodes verify the cryptographic signature and gossip to their neighbors, causing the data to exponentially cascade across the network exactly like DNS propagation.
2. **Directed Federation:** Targeted actions (like sending a GP tip) are queued by WP-Cron and securely POSTed directly to the recipient node's inbox, ensuring immediate settlement without waiting for global gossip.
3. **Index Nodes (Heavy Lifters):** Standard users (Light Nodes) only store their own data and that of direct contacts. Users running upgraded infrastructure (Diamond holders / Ledger Nodes) act as regional hubs, storing massive chunks of the global network state in exchange for higher systemic rewards.

## 9. Macro-Economic Safeguards

### The Earth Cent (Algorithmic Stability)
Dirt is pegged to a "Global Average Unit" - an aggregate index of all world currencies. It is untethered from USD or any single nation's monetary policy.
- **High Demand:** System mints more Dirt, increases drop rates. Supply up, price returns to Earth Cent.
- **Low Demand:** System incentivizes Synthesis (burning Dirt into higher minerals). Supply down, price returns to Earth Cent.

### Algorithmic Geo-Balancing (Anti-Inflation)
A farmer running a node in rural India provides the same cryptographic value as an engineer in Silicon Valley. The system detects local economic disparity and dynamically adjusts payout weights to equalize global purchasing power.

### DePIN (Decentralized Physical Infrastructure Network)
The WordPress/PHP core and Vue frontend literally live on the hosting nodes purchased by users. Currently, these "Blackboxes" are distributed enterprise cloud instances (like AWS Elastic Cloud), establishing the foundational grid before transitioning to physical hardware nodes. Every person buying a hosting plan physically expands the system. The infrastructure IS the economy.

## 10. The Omega Point
The ultimate destination of the w⁴ Protocol: a post-scarcity civilization where the economy is an invisible API. Humans participate in reality - creating, teaching, building, exploring - and the system handles the math of who needs what and who produced what. Money becomes a game. Life becomes the quest. The interface we all share ensures no one falls through the cracks.

*"The paradise we seek is already built; we merely need to tune our frequencies to receive it."* - Axiom IX

---

## Document Metadata

\`\`\`yaml
title: "W4 Protocol Economic Engine & Exchange"
description: "Peer-to-peer economic exchange, transaction settlement layers, and inter-node value routing in the W4 Protocol."
category: "Reference"
icon: "fal fa-coins"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - w4-protocol
  - economy
  - settlement
  - p2p-exchange
  - cryptoeconomics
ai_summary: "Details the economic settlement primitives, gas fee routing, and sovereign token exchanges across the W4 webwork."
\`\`\`
`,Wn=`# White Paper: My Compass Software Suite, YouMeOS, the w⁴ Protocol, and Yellow Links

---

## 1. Executive Summary & Foundational Vision

The modern internet has largely consolidated into siloed, walled-garden software-as-a-service (SaaS) platforms and flat, static, two-dimensional websites. This centralization compromises user data sovereignty, subjects creators and businesses to unpredictable rent-seeking, and fragments personal digital workflows.

The **Hall of the Gods** architectural ecosystem solves this paradigm by establishing a decentralized, sovereign spatial internet. This white paper details the unified technical architecture connecting four core pillars:

1. **The w⁴ Protocol (Worldwide Webwork):** The fourth-dimensional foundational protocol that turns static web presences into stateful, interconnected sovereign nodes.
2. **The Sovereign Nodes & YouMeOS Microverse:** Isolated runtime containers (BlackBOXes) deployed locally via native engines (FrankenPHP/Docker) or across distributed cloud clusters.
3. **My Compass Software Suite:** The internal modular PHP and Vue 3 application layer that replaces legacy CMS bloat with enterprise "Superpowers," REST API endpoints, and a Starship-grade Heads-Up Display (HUD).
4. **YouMeOS (Universal Internet Operating System):** The spatial webtop runtime featuring multi-window managers, decoupled Progressive Web App (PWA) Sparks, and cryptographic Federated Identity (Omega Source / Sovereign Passport).
5. **Yellow Links:** The living directory and verified citation network acting as the registry backbone, WebSpark installation index, and link-authority engine for the entire ecosystem.

\`\`\`mermaid
graph TB
    subgraph Layer5["Layer 5: Living Directory & Citation Network"]
        direction TB
        YL["Yellow Links Registry (Living Network, WebSparks Index, Domain Authority)"]
    end

    subgraph Layer4["Layer 4: Universal Spatial Interface"]
        direction TB
        YOS["YouMeOS Spatial Webtop (u-webtop, u-window, Omega Source Passport)"]
        SPARKS["Decoupled PWA Sparks (Questbook, Bomb Bag, Magic Formula)"]
    end

    subgraph Layer3["Layer 3: Modular Superpower Engine"]
        direction TB
        COMPASS["My Compass Software Suite (Vue 3 + Vuetify + Atomic X-Atoms)"]
        REST["COMPASS REST APIs (/wp-json/xophz-compass/v1)"]
    end

    subgraph Layer2["Layer 2: Sovereign Compute Nodes"]
        direction TB
        MICRO["YouMeOS Microverse (FrankenPHP / Docker / Caddy)"]
        CLOUD["BlackBOX Dedicated Cloud Containers (Quantum to Palladium)"]
    end

    subgraph Layer1["Layer 1: Foundational Network Protocol"]
        direction TB
        W4["The w⁴ Protocol (Worldwide Webwork 4D Hyper-Cube Fabric)"]
    end

    Layer5 <--> Layer4
    Layer4 <--> Layer3
    Layer3 <--> Layer2
    Layer2 <--> Layer1
\`\`\`

---

## 2. The Trillion-Dollar Stack (TDS): 5-Tier Architecture

The ecosystem organizes all software, infrastructure, and interaction models into five distinct architectural layers:

| Layer | Component | Core Function | Primary Tech Stack |
| :--- | :--- | :--- | :--- |
| **Layer 5** | **Yellow Links** | Living network registry, citation authority, WebSpark distribution, Gemini safety auditing | Vue 3, Pinia, CPTs, REST API, Gemini AI |
| **Layer 4** | **YouMeOS** | Spatial desktop webtop, multi-window orchestration, Omega Source federated identity | Vue 3, TypeScript, Three.js, Pinata IPFS, ENS RPC |
| **Layer 3** | **My Compass Suite** | Business logic, CRM, drip journeys, automated workflows, and starship UI controls | PHP 8.2+, REST APIs, Vuetify 3, X-Atoms |
| **Layer 2** | **Sovereign Nodes** | Compute execution, local sandboxes, and enterprise database clustering | Electron, FrankenPHP, SQLite/MySQL, Docker |
| **Layer 1** | **w⁴ Protocol** | P2P state synchronization, cross-node handshakes, micro-transaction value transfers | ActivityPub, Sync Key Handshake, W4 Standards |

---

## 3. Layer 1: The w⁴ Protocol (Worldwide Webwork)

### 3.1 Adding the Fourth Dimension: The Work
The World Wide Web (WWW) was engineered for one-way information consumption (Web 1.0) and centralized platform interactions (Web 2.0). The **w⁴ Protocol** extends the web into the fourth dimension: **The Work**.

* **Hyper-Cubed Network (The Tesseract):** Replaces isolated page loads with persistent stateful connections across a network of sovereign boxes.
* **Open-Web Foundation:** Operates natively across the existing WordPress footprint (powering over 43% of the internet) to transform standard hosting environments into API-first distributed nodes without requiring proprietary SaaS server lock-in.
* **Zero-Trust Sovereign Handshake:** Implements peer-to-peer authentication, cross-instance ActivityPub synchronization, and distributed event settlement.

\`\`\`mermaid
sequenceDiagram
    autonumber
    participant NodeA as Sovereign Node A (Origin)
    participant User as User Agent / Passport
    participant NodeB as Sovereign Node B (Destination)
    participant IPFS as IPFS Gateway (CID Vault)

    User->>NodeA: Request Cross-Domain Sync
    NodeA->>IPFS: Pin Latest Profile & MMO State (CID)
    NodeA->>User: Issue Ephemeral Cryptographic Sync Key
    User->>NodeB: Present Sync Key & Origin Signature
    NodeB->>NodeA: Server-to-Server Backchannel Verification POST
    NodeA-->>NodeB: Validate Key & Authorize Public Payload (No Local Privileges)
    NodeB->>IPFS: Fetch Hydrated MMO Profile & UI Config
    NodeB-->>User: Spawn Shadow Guest Session with Personal Aesthetic
\`\`\`

---

## 4. Layer 2: Sovereign Compute Nodes & The Microverse Engine

Every deployment in the ecosystem runs inside an isolated, sovereign node called a **BlackBOX**.

### 4.1 Local Deployment: YouMeOS Microverse
The **YouMeOS Microverse** Desktop application provides a local development and execution sandbox:
* **Dual-Engine Architecture:**
  * \`EmbeddedEngine\`: Orchestrates native FrankenPHP binary execution bound to port 80 with SQLite database drop-ins, requiring zero container overhead.
  * \`DockerEngine\`: Manages multi-container service clusters for complex, production-identical environments.
* **Unified Engine Manager:** Enforces single-responsibility lifecycle handling, bounded ring-buffer logging (600 entries), and typed IPC bridging via Electron preload contracts.
* **Mechanical Tape Deck Interface:** Glassmorphism UI presenting hardware-style tactile controls (Rewind, Play, Fast-Forward, Stop, Eject) for container orchestration and telemetry inspection.

### 4.2 Cloud Deployment: BlackBOX Cloud Containers
In cloud environments, nodes scale from lightweight single-core instances to multi-region clusters:
* **Hardware Isolation:** Dedicated vCPU, NVMe storage, and dedicated bandwidth allocations without multi-tenant noisy-neighbor interference.
* **Self-Healing Infrastructure:** Automated database integrity checks, memory profiling via BlackBOX Diagnostics, and live failover routing.

---

## 5. Layer 3: My Compass Software Suite (The Superpower Engine)

The **My Compass Software Suite** transforms the underlying CMS into a high-performance, modular operating environment.

\`\`\`mermaid
graph LR
    subgraph DataCore["COMPASS Dark-Matter PHP Plugins"]
        direction TB
        BB["xophz-compass-bomb-bag (Drip Journeys)"]
        QB["xophz-compass-quests (Questbook CRM)"]
        BZ["xophz-compass-bazaar (E-Commerce POS)"]
        MF["xophz-compass-magic-formula (Automation Engine)"]
        CW["xophz-compass-moving-castle (Cluster Sync)"]
        BN["xophz-compass-bugnet (Visual QA Net)"]
    end

    subgraph Transport["REST Transport Layer"]
        direction TB
        API["/wp-json/xophz-compass/v1/*"]
        SEARCH["Unified Contextual Search API"]
    end

    subgraph Presentation["Vue 3 SPA HUD"]
        direction TB
        XATOMS["Atomic Design Tier (x-btn, x-card, x-window)"]
        ROUTER["Lazy-Loaded Vue Hash Router"]
        PINIA["Centralized Pinia State Stores"]
    end

    DataCore --> Transport
    Transport --> Presentation
\`\`\`

### 5.1 Modular Functional Pillars
* **Command & Operations:**
  * \`Command Deck\`: Central operations hub for real-time inventory, orders, and system events.
  * \`HoloShell & System Monitor\`: Live server telemetry, memory utilization, and command execution.
* **Customer Intelligence & Marketing Automation:**
  * \`Questbook CRM\`: High-density deal pipelines, contact relationship graphs, and quest progression tracking.
  * \`Bomb Bag\`: Multi-stage automated email drip journeys, newsletter broadcasts, and emergency system flash banners.
* **Security & Defense:**
  * \`Castle Walls & Mirror Shield\`: Zero-trust Web Application Firewall (WAF), honeypots, and malicious traffic rate-limiting.
  * \`Cookie Jar\`: Cryptographic session vault and consent management engine.
* **Workflow Automation & Visual Creation:**
  * \`Magic Formula\`: Visual trigger-action workflow builder with multi-step branches, webhooks, and conditional logic.
  * \`Wizard's Tower & Magic Wand\`: Real-time visual page and theme customization canvas.

---

## 6. Layer 4: YouMeOS (Universal Spatial Webtop & Federated Identity)

### 6.1 Spatial Desktop Runtime
**YouMeOS** delivers a spatial computing interface within standard web browsers:
* **Window Management System (\`useWindowStore\` / \`u-window\`):**
  * Manages real-time 2D/3D window geometry (\`x\`, \`y\`, \`width\`, \`height\`, \`zIndex\`).
  * Supports dynamic window modes: \`webtop\`, \`viewport\`, \`display\`, and \`maximus\`.
  * Multi-zone Aero-Snap layout calculation (split-screen, quarters, full grid).
  * System theme styling: \`nyx\`, \`sol\`, \`luna\`, \`tesla\`, \`infinity\`, and \`rhae\`.
* **Decoupled PWA Sparks:** Every application inside YouMeOS is a self-contained Spark. Sparks can be executed within the desktop window manager or detached into standalone Progressive Web Apps installed directly to desktop or mobile operating systems.

### 6.2 Federated Identity: Omega Source & Sovereign Passport
YouMeOS decouples **Authentication (AuthN)** from **Authorization (AuthZ)**:

* **Authentication (Who You Are):**
  * Backed by decentralized storage: Profile layout, custom themes, badges, and MMO progression (XP, Level, Badges) are serialized and pinned to IPFS via Pinata gateways.
  * Web3 identity resolution: Supports ENS reverse resolution and Ethereum wallet verification.
* **Authorization (What You Can Do Here):**
  * Governed strictly by the local host site. When a user travels to an external YouMeOS node, local administrative rights (\`isAdmin\`, database capabilities) are completely isolated.
  * The target node constructs a local Shadow User linked to the remote IPFS CID, preserving the user's custom aesthetic and global achievements without compromising host security.

---

## 7. Layer 5: Yellow Links (Living Network Registry & Directory Citations)

**Yellow Links** functions as the registry backbone, discovery engine, and backlink authority network across the Worldwide Webwork.

\`\`\`mermaid
graph TD
    YLCore["Yellow Links Core Registry (/yellow-links)"]

    subgraph Features["Core Capabilities"]
        Directory["Community Directory & Citations"]
        Authority["PageRank & Gemini Safety Badges"]
        WebSparks["WebSpark Discovery & Installation Hub"]
        AdNetwork["Gemini AI Sponsored Ad Generator"]
    end

    subgraph Integration["YouMeOS Ecosystem Links"]
        LaunchPad["Launch Pad (Instant WebSpark Installs)"]
        SparkStore["Spark Plugs Store Integration"]
        SearchPalette["Global Command Palette Unified Search"]
    end

    YLCore --> Features
    Features --> Integration
\`\`\`

### 7.1 Key Systems & Capabilities
* **Living Network Registry:**
  * Dynamic directory categorization (*Ecosystem & Portals*, *Tech & Dev*, *Professional Services*, *Visual Arts*, *Education & Archives*, *Community*).
  * Verified citation scoring, user reviews, click analytics, and community voting.
* **WebSpark Bridge Engine:**
  * Yellow Links directory entries can be installed with one click as active WebSparks on the YouMeOS Launch Pad.
  * Real-time duplicate verification ensures seamless registry expansion without conflicting app IDs.
  * Dual-action publishing allows users to deploy a WebSpark locally while simultaneously broadcasting the listing to the global community directory.
* **Domain Authority & AI Safety Verification:**
  * Integrated Gemini safety auditing evaluates submitted URLs for malicious content, phishing risks, and reliability.
  * Real-time PageRank metrics establish verifiable domain authority for directory listings.
* **Sponsored Ad Generator:**
  * Automated AI marketing engine generating contextual sponsored bulletins and banner campaigns with live preview cards.

---

## 8. Comprehensive System Synergy: End-to-End Execution Flow

The power of this architecture lies in the seamless integration between its five foundational layers:

\`\`\`mermaid
sequenceDiagram
    autonumber
    actor User as Sovereign Creator
    participant Microverse as Microverse Desktop / Cloud Node
    participant COMPASS as My Compass Suite (REST API)
    participant YouMeOS as YouMeOS Spatial Webtop
    participant YellowLinks as Yellow Links Registry
    participant W4Net as w⁴ Global Network

    User->>Microverse: Boot Sovereign Node (FrankenPHP/Docker)
    Microverse->>COMPASS: Initialize Core PHP Plugins & Database Schemas
    COMPASS->>YouMeOS: Mount Spatial Webtop & Hydrate Window Store
    User->>YouMeOS: Launch Yellow Links Spark
    YellowLinks->>COMPASS: Query Link Registry (GET /yellow-links/v1/links)
    YellowLinks-->>User: Render Verified Directory & WebSparks
    User->>YellowLinks: Click 'Install WebSpark'
    YellowLinks->>YouMeOS: Register New Spark in Launcher Store & Pin to Webtop
    User->>YouMeOS: Execute Workflow in Magic Formula
    YouMeOS->>COMPASS: Dispatch Trigger via REST (POST /magic-formula/v1/trigger)
    COMPASS->>W4Net: Broadcast Cross-Domain ActivityPub Event across w⁴ Fabric
\`\`\`

### 8.1 Workflow Summary
1. **Node Provisioning:** A user boots their BlackBOX locally via the Microverse Desktop or provisions a cloud container on the w⁴ Hub.
2. **Data & Superpower Hydration:** The COMPASS PHP layer exposes hardened REST endpoints, enforcing structured database schemas, security rules, and business logic.
3. **Spatial Navigation:** The user accesses the YouMeOS spatial webtop, unlocking multi-window multitasking and customized Starship aesthetics.
4. **Network Discovery & Spark Expansion:** Inside Yellow Links, the user explores verified community tools and directory listings, installing new WebSparks directly into their Launch Pad.
5. **Cross-Domain Federation:** Interactions, achievements, and workflows propagate across the decentralized network via the w⁴ Protocol, maintaining cryptographic security, user privacy, and complete digital sovereignty.

---

## 9. Monetization, Sovereign Tiers, & The Hall of the Gods Business Model

The ecosystem is supported by an interconnected business model aligning incentives across creators, developers, and enterprises:

\`\`\`mermaid
graph TB
    Tier1["1. Hall of the Gods, Inc.<br/>Parent Holding Company, Infrastructure Fund & Creative Studio"]
    Tier2["2. Worldwide Webwork (w⁴ Protocol)<br/>Foundational Spatial Ideology & Protocol Standards"]
    Tier3["3. Build a BLOX (Self-Serve SaaS)<br/>Rapid BlackBOX Deployment for DIY Creators"]
    Tier4["4. BlackBOX WhiteGLOVE (Managed Concierge)<br/>Dedicated Hardware Hosting + Retainer Support Hours"]
    Tier5["5. My Compass Consulting (Enterprise Synthesis)<br/>Bespoke Architecture & High-Ticket Systems Integration"]

    Tier1 --> Tier2
    Tier2 --> Tier3
    Tier3 --> Tier4
    Tier4 --> Tier5
\`\`\`

### 9.1 Multi-Funnel Monetization Matrix

| Sovereignty Tier | Color Hex | Hardware Scope | Software Superpowers | White Glove Concierge |
| :--- | :--- | :--- | :--- | :--- |
| **Quantum (Black)** | \`#00f2fe\` | 1 vCPU, 512MB RAM, 10GB SSD | YouMeOS Webtop, Bubblegum, Alphabet Soup, Beat Salad, Enchiridion, Cookie Jar, True North XP, Bugnet | 1 Hour / month |
| **Bronze** | \`#cd7f32\` | 1 vCPU, 1GB RAM, 25GB SSD | Quantum Suite + Questbook CRM, Bomb Bag News Drip, Automated Daily Backups | 2 Hours / month |
| **Silver** | \`#c0c0c0\` | 2 vCPU, 2GB RAM, 65GB SSD | Bronze Suite + Magic Formula, HoloShell CLI, System Monitor, Trajectory Funnels, Castle Walls WAF | 3 Hours / month |
| **Silver Enhanced** | \`#e5e4e2\` | 2 vCPU, 4GB RAM, 128GB SSD | Silver Suite + Bazaar POS & Storefront, Wizard's Tower Page Studio, High-Speed Caching, AI Image Optimization | 4 Hours / month |
| **Gold** | \`#ffd700\` | 4 vCPU, 8GB RAM, 160GB SSD | Silver Enhanced + Logos Multiverse, Helios Media Studio, Silver Arrow A/B Testing, Pegasus Boots SEO | 5 Hours / month |
| **Gold Enhanced** | \`#ffd700\` | 4 vCPU, 16GB RAM, 384GB SSD | Gold Suite + AI Content Generation Pipeline, Beehive Analytics, Moving Castle Database Engine | 4 Hours / month |
| **Platinum** | \`#a0b2c6\` | 6 vCPU, 16GB RAM, 320GB SSD | Gold Enhanced + Nexos Multi-Agent AI Network, Magic Hookshot, Omega Source Federated SSO | 5 Hours / month |
| **Platinum Enhanced** | \`#a0b2c6\` | 6 vCPU, 24GB RAM, 448GB SSD | Platinum Suite + Noosphere Resonance, White-Label Branding, POLOS Quadratic Governance | 7.5 Hours / month |
| **Uranium** | \`#3dee98\` | 8 vCPU, 32GB RAM, 640GB SSD | Platinum Enhanced + Enterprise Threat Defense, Zero-Downtime Sandbox, Yellow Links Citation Network | 10 Hours / month |
| **Titanium** | \`#00e5ff\` | 16 vCPU, 64GB RAM, 1.28TB SSD | Uranium Suite + BlackBOX Kernel Diagnostics, Auto-Scaling Engine, Self-Healing Infrastructure | 12 Hours / month |
| **Palladium** | \`#e6e6fa\` | 24 vCPU, 96GB RAM, 2.5TB SSD | Titanium Suite + Omni-Sovereign Core Network API, Multi-Region Global Sync, Dedicated Enterprise Retainer | 20 Hours / month |

---

## 10. Architectural Conclusions & The Century-Scale Horizon

The combination of **My Compass Software Suite**, **YouMeOS**, the **w⁴ Protocol**, and **Yellow Links** establishes a resilient, century-scale digital infrastructure:

* **Sovereignty First:** Users and enterprises retain total ownership of their code, compute, data vaults, and identities.
* **Fractal Scalability:** Applications and nodes seamlessly pack and unpack between micro-level mobile PWAs and macro-level municipal and enterprise server clusters.
* **Ecosystem Resilience:** By harnessing the open web and decentralized protocols (IPFS, ENS, ActivityPub, WordPress Core), the platform operates free from single points of corporate failure.

This architecture bridges the gap between industrial computing power and human-centric spatial interaction, delivering a sovereign, interconnected digital universe for the next generation of the web.

---

## Document Metadata

\`\`\`yaml
title: "W4 Yellow Links Decentralized Directory Whitepaper"
description: "Technical whitepaper for the decentralized Yellow Links directory, geospatial discovery, and anti-spam proof of stake."
category: "Reference"
icon: "fal fa-map-pin"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - yellow-links
  - whitepaper
  - directory
  - geospatial
  - w4-protocol
ai_summary: "Technical whitepaper specifying the decentralized Yellow Links web directory, spatial indexing, and curation mechanics."
\`\`\`
`,En=`# YouMeOS Web3 Vision & Roadmap

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

---

## Document Metadata

\`\`\`yaml
title: "Web3 Identity, Wallet & IPFS Roadmap"
description: "Strategic architectural roadmap for self-sovereign DID identities, multi-chain wallets, and IPFS data vaults."
category: "Reference"
icon: "fal fa-wallet"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - web3
  - wallets
  - ipfs
  - did
  - identity
ai_summary: "Strategic vision detailing EVM wallet authentication, ENS resolution, and decentralized profile synchronization via IPFS Pinata."
\`\`\`
`,Bn=`# YouMeOS & My Compass Software Suite: Official Architectural Whitepaper

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

## 4. Macro-Level Architecture: The w⁴ Protocol & WordPress Core

At the macro-level, YouMeOS scales through the **w⁴ Protocol (World Wide Web Work)**, connecting sovereign nodes into a federated tesseract.

\`\`\`mermaid
graph TB
    direction TB
    W4["The w⁴ Protocol (Global Federated Tesseract)"]
    
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
    Tier2["2. Worldwide Webwork - w⁴ Protocol<br/>(Foundational Narrative & 4D Architecture)"]
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

---

## Document Metadata

\`\`\`yaml
title: "YouMeOS & Compass System Technical Whitepaper"
description: "Comprehensive master technical whitepaper establishing the mathematical, philosophical, and architectural foundations."
category: "Reference"
icon: "fal fa-file-alt"
version: "1.0.0"
last_updated: "2026-09-02"
tags:
  - whitepaper
  - technical-whitepaper
  - youmeos
  - compass
  - architecture
ai_summary: "Authoritative technical whitepaper covering the complete YouMeOS ecosystem, spatial rendering engine, and the W4 Protocol."
\`\`\`
`,Gn=["innerHTML"],zn=I({__name:"x-markdown",props:{content:{}},setup(T){const p=T,v=h(()=>p.content?Qe.parse(p.content):"");return(d,P)=>(f(),W("div",{class:"x-markdown-container",innerHTML:v.value},null,8,Gn))}}),Fn=D(zn,[["__scopeId","data-v-c9651a1d"]]),Yn={class:"h-100 w-100",style:{position:"relative"}},Hn={class:"reading-pane mx-auto w-100 brand-styled-content"},Un="../../../docs/",Nn=I({__name:"enchiridion-app",setup(T){const p=Object.assign({"../../../docs/CHANGELOG.md":rn,"../../../docs/Home.md":sn,"../../../docs/architecture/asynchronous-cosmos.md":ln,"../../../docs/architecture/audio-engine.md":cn,"../../../docs/architecture/helios-modules.md":dn,"../../../docs/architecture/legacy-engine-mechanics.md":un,"../../../docs/architecture/nimbus-interaction-modes.md":pn,"../../../docs/architecture/pwa-desktop-node.md":mn,"../../../docs/architecture/starmap-federation.md":hn,"../../../docs/architecture/tesseract-4d-visualization.md":gn,"../../../docs/architecture/universal-os-vision.md":yn,"../../../docs/architecture/w4-protocol-fractal-os.md":wn,"../../../docs/architecture/window-management.md":fn,"../../../docs/architecture/youmeos-engine.md":vn,"../../../docs/guides/hello-world.md":bn,"../../../docs/guides/spark-development-guide.md":Sn,"../../../docs/guides/threejs-legacy-migration.md":kn,"../../../docs/guides/webgpu-migration.md":Tn,"../../../docs/guides/webgpu-shader-migration.md":Pn,"../../../docs/guides/youmeos-getting-started.md":xn,"../../../docs/guides/youmeos-swiss-army-knife.md":An,"../../../docs/reference/decentralized-pwa-model.md":Mn,"../../../docs/reference/dirt-digital-mineral-economy.md":Cn,"../../../docs/reference/nexus-knowledge-base.md":Ln,"../../../docs/reference/sephiroth-godhead-progression.md":On,"../../../docs/reference/storybrand-framework.md":Rn,"../../../docs/reference/storybrand-manifesto.md":_n,"../../../docs/reference/tesseract-pricing.md":Dn,"../../../docs/reference/w4-protocol-economy.md":In,"../../../docs/reference/w4-yellowlinks-whitepaper.md":Wn,"../../../docs/reference/web3-vision-roadmap.md":En,"../../../docs/reference/youmeos-compass-whitepaper.md":Bn,"../../../docs/sparks/alphabet-soup.md":$e,"../../../docs/sparks/app-launcher.md":Xe,"../../../docs/sparks/author-note.md":qe,"../../../docs/sparks/bazaar.md":je,"../../../docs/sparks/blackbox.md":Ve,"../../../docs/sparks/blackjack.md":Ne,"../../../docs/sparks/bomb-bag.md":Ue,"../../../docs/sparks/bubblegum.md":He,"../../../docs/sparks/bugnet.md":Ye,"../../../docs/sparks/cafeteria.md":Fe,"../../../docs/sparks/calculator.md":ze,"../../../docs/sparks/chronos.md":Ge,"../../../docs/sparks/cookie-jar.md":Be,"../../../docs/sparks/debug-console.md":Ee,"../../../docs/sparks/diego-lawfirm.md":We,"../../../docs/sparks/dodo-air.md":Ie,"../../../docs/sparks/enchiridion.md":De,"../../../docs/sparks/fresh-mints.md":_e,"../../../docs/sparks/gaea.md":Re,"../../../docs/sparks/generic-spark.md":Oe,"../../../docs/sparks/helios.md":Le,"../../../docs/sparks/holosweeper.md":Ce,"../../../docs/sparks/jukebox.md":Me,"../../../docs/sparks/lemon-aid.md":Ae,"../../../docs/sparks/local-produce.md":xe,"../../../docs/sparks/logos.md":Pe,"../../../docs/sparks/lunch-room.md":Te,"../../../docs/sparks/magic-cloak.md":ke,"../../../docs/sparks/magic-formula.md":Se,"../../../docs/sparks/media-drive.md":be,"../../../docs/sparks/midnight-nerd.md":ve,"../../../docs/sparks/minesweeper.md":fe,"../../../docs/sparks/moving-castle.md":we,"../../../docs/sparks/music-stream.md":ye,"../../../docs/sparks/my-compass.md":ge,"../../../docs/sparks/my-planner.md":he,"../../../docs/sparks/neon-notes.md":me,"../../../docs/sparks/nexus.md":pe,"../../../docs/sparks/noosphere.md":ue,"../../../docs/sparks/notepad.md":de,"../../../docs/sparks/nucleos.md":ce,"../../../docs/sparks/omega-source.md":le,"../../../docs/sparks/oscar.md":se,"../../../docs/sparks/paint.md":re,"../../../docs/sparks/polos.md":ie,"../../../docs/sparks/questbook.md":ae,"../../../docs/sparks/skiptrace.md":oe,"../../../docs/sparks/snake.md":te,"../../../docs/sparks/social-preview.md":ne,"../../../docs/sparks/solitaire.md":ee,"../../../docs/sparks/spark-plugs.md":J,"../../../docs/sparks/suggestion-box.md":Z,"../../../docs/sparks/swag-shop.md":Q,"../../../docs/sparks/sys-monitor.md":K,"../../../docs/sparks/take-my-money.md":$,"../../../docs/sparks/telescope.md":X,"../../../docs/sparks/terminal.md":q,"../../../docs/sparks/tesseract.md":j,"../../../docs/sparks/tourguide.md":V,"../../../docs/sparks/trenchess.md":N,"../../../docs/sparks/trophy-case.md":U,"../../../docs/sparks/webspark.md":H,"../../../docs/sparks/welcome-u.md":Y,"../../../docs/sparks/wizards-tower.md":F,"../../../docs/sparks/wp-admin.md":z,"../../../docs/sparks/yellow-links.md":G}),v=n=>{const e=n.toLowerCase();return e.includes("start here")?"fal fa-stars":e.includes("blueprints")?"fal fa-drafting-compass":e.includes("guides")?"fal fa-map-signs":e.includes("core engine")||e.includes("architecture")?"fal fa-microchip":e.includes("design system")?"fal fa-swatchbook":e.includes("roadmaps")?"fal fa-road":e.includes("ecosystem")?"fal fa-planet-ringed":e.includes("plugins")||e.includes("sparks")?"fal fa-plug":e.includes("reference")?"fal fa-books":e.includes("general")?"fal fa-book-spells":"fal fa-folder"},d=h(()=>Object.keys(p).map(n=>{const e=n.replace(Un,""),t=e.split("/"),o=t.pop()||"",a=o.replace(".md","");let s=a.split("-").map(m=>m.charAt(0).toUpperCase()+m.slice(1)).join(" "),i="05. Platform Docs",l="General";o.toLowerCase()==="hello-world.md"||o.toLowerCase()==="home.md"?(i="00. Welcome",l="Start Here"):t.length===0?(i="04. Reference",l="Reference"):t[0].toLowerCase()==="sparks"?(i="01. Sparks",l="Sparks"):t[0].toLowerCase()==="architecture"?(i="02. Architecture",l="Architecture"):t[0].toLowerCase()==="guides"?(i="03. User Guides",l="Guides"):t[0].toLowerCase()==="reference"?(i="04. Reference",l="Reference"):(i="05. Platform Docs",l=t[0]);const L=l.replace(/[-_]/g," ").split(" ").map(m=>m.charAt(0).toUpperCase()+m.slice(1).toLowerCase()).join(" ");let g="fal fa-file-alt",y="#62c9ff";if(L.toLowerCase()==="sparks"){const w=Ke().apps.find(B=>B.id===a);w&&(g=w.icon||g,y=w.color||y,s=w.title||s)}else o.toLowerCase()==="changelog.md"&&(s="YouMeOS Changelog",g="fal fa-history",y="#62c9ff");return{path:n,relativePath:e,title:s,category:L,root:i,icon:g,color:y}}).sort((n,e)=>n.root!==e.root?n.root.localeCompare(e.root):n.category!==e.category?n.category.localeCompare(e.category):n.title.localeCompare(e.title))),P=h(()=>{const n={};return d.value.forEach(e=>{const t=`${e.root}/${e.category}`;n[t]||(n[t]=[]),n[t].push(e)}),Object.keys(n).sort().map(e=>{const t=n[e],o=t[0].category;return{id:e,title:o,icon:v(o),children:t.map(a=>({id:a.path,title:a.title,icon:a.icon}))}})}),r=_("splash"),x=h(()=>d.value.find(n=>n.path===r.value)),A=h(()=>r.value==="splash"||!p[r.value]?null:p[r.value]),b=_(null);Ze(r,()=>{b.value&&(b.value.scrollTop=0)},{flush:"post"});const E=n=>{if(!n)return null;const e=n.toLowerCase(),t=e.replace(/^u-/,"").replace(/^xophz-/,"").replace(/\.md$/,"");let o=d.value.find(a=>(a.relativePath.split("/").pop()?.replace(".md","").toLowerCase()||"")===e);return o||(o=d.value.find(a=>(a.relativePath.split("/").pop()?.replace(".md","").toLowerCase()||"").replace(/^u-/,"").replace(/^xophz-/,"")===t),o)||(o=d.value.find(a=>a.path.toLowerCase().includes(e)||a.path.toLowerCase().includes(t)),o)?o:(o=d.value.find(a=>a.title.toLowerCase().includes(t)),o||null)},M=n=>{const e=E(n);e&&(r.value=e.path)},C=n=>{const e=n.detail;e&&M(e)};return Je(()=>{const n=typeof sessionStorage<"u"?sessionStorage.getItem("youmeos:enchiridion:open"):null;n&&(M(n),typeof sessionStorage<"u"&&sessionStorage.removeItem("youmeos:enchiridion:open")),typeof window<"u"&&window.addEventListener("youmeos:enchiridion:open",C)}),en(()=>{typeof window<"u"&&window.removeEventListener("youmeos:enchiridion:open",C)}),(n,e)=>{const t=S("x-spark-splash-action"),o=S("t-spark-splash"),a=S("u-window");return f(),O(a,{id:"enchiridion",title:"Enchiridion",icon:"fal fa-book-spells","brand-color":"#62c9ff",width:1e3,height:700,"default-nav-pinned":"","nav-items":P.value,"active-nav":r.value,"onUpdate:activeNav":e[0]||(e[0]=s=>r.value=s)},{"app-bar-title":u(()=>[tn(on(x.value?.title||"Enchiridion"),1)]),default:u(()=>[R("div",Yn,[A.value?(f(),W("div",{key:1,ref_key:"contentScrollEl",ref:b,class:"enchiridion-content fill-height custom-scrollbar",style:nn({"--brand-color":x.value?.color||"#62c9ff"})},[R("div",Hn,[c(Fn,{content:A.value},null,8,["content"])])],4)):(f(),O(o,{key:0,icon:"fal fa-book-spells",title:"Enchiridion",subtitle:"The Ultimate Handbook to the","subtitle-highlight":"Youniverse"},{background:u(()=>[c(an)]),actions:u(()=>[c(k,{cols:"12",sm:"4"},{default:u(()=>[c(t,{title:"Explore",description:"All the knowledge of the Youniverse",icon:"fal fa-compass","icon-color":"#62c9ff"})]),_:1}),c(k,{cols:"12",sm:"4"},{default:u(()=>[c(t,{title:"Learn",description:"Master the tools of the Youniverse",icon:"fal fa-book-open","icon-color":"#D9BE6F"})]),_:1}),c(k,{cols:"12",sm:"4"},{default:u(()=>[c(t,{title:"Dream",description:"Shape the future of your Youniverse",icon:"fal fa-sparkles","icon-color":"#22c55e"})]),_:1})]),_:1}))])]),_:1},8,["nav-items","active-nav"])}}}),nt=D(Nn,[["__scopeId","data-v-4cb6e9aa"]]);export{nt as default};
