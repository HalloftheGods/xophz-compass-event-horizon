=== Xophz You Me OS (Event Horizon) ===
Contributors: xopher
Donate link: http://www.mycompassconsulting.com/
Tags: 3D, Heat Map, Galaxy, Visualization, YouMeOS, Three.js, WebGL
Requires at least: 5.0
Tested up to: 6.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Bring transparency to your user-to-media connectivity by observing a real life 3D interactive heat map. From micro to macro and unto the avoided.

== Description ==

The **Xophz You Me OS (Event Horizon)** plugin is the core cosmic engine for the COMPASS ecosystem. It delivers a high-performance 3D visualization of the "Youniverse," rendering over 100,000 stars with interactive heat mapping and cinematic transitions.

Built on a modernized Three.js architecture, Event Horizon bridges legacy procedural generation with modern reactive interfaces, providing a seamless "micro-to-macro" navigation experience.

Key Features:
*   **High-Density Starfield**: Efficiently renders 100,000+ stars using custom GLSL shaders.
*   **3D Interactive Heat Map**: Visualizes user-to-media connectivity in a spatial context.
*   **Cinematic Tour Choreography**: Automated onboarding sequences with smooth quartic easing.
*   **Manifest-Driven Loading**: Dynamic asset and script management for optimal performance.
*   **Modular Architecture**: Integrated seamlessly with the COMPASS Vue 3 frontend via the Global Event Bridge.
*   **Visionary Boot Sequence**: A choreographed high-tech startup experience.

== Installation ==

1. Upload the `xophz-compass-event-horizon` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Ensure the main **Xophz COMPASS** plugin is also active, as this plugin depends on its core services.
4. Navigate to the COMPASS dashboard to access the YouMeOS portal.

== Frequently Asked Questions ==

= Does this require a GPU? =

Yes, Event Horizon uses WebGL for high-performance rendering. A modern browser and decent graphics acceleration are recommended for the best experience.

= How do I customize the loader messages? =

Loader messages are configured in the `apps/youmeos/config/loader-messages.ts` file within the COMPASS application directory.

== Screenshots ==

1. The YouMeOS starfield at full saturation.
2. The interactive 3D heat map showing active nodes.

== Changelog ==

= 1.0.0 =
* Ported legacy 100,000 stars engine logic to COMPASS integration.
* Implemented Manifest-driven asset loading.
* Established Global Event Bridge for Vue-to-Three.js communication.
* Refined Cosmic Tour choreography and visionary boot sequence.
* Relocated engine assets to a centralized plugin directory.

== Architecture ==

Event Horizon uses a hybrid integration model:
*   **Backend**: PHP handles WordPress integration, capability checks, and asset enqueuing.
*   **Engine**: Three.js (modernized) manages the WebGL context and 3D rendering.
*   **Frontend**: Vue 3 (COMPASS) provides the HUD, controls, and reactive state management.

The engine state is bridged to the COMPASS Pinia stores, allowing for real-time manipulation of the cosmic environment through the standard UI controls.