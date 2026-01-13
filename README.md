# 🌌 Xophz You Me OS (Event Horizon)

> **Bring transparency to your user-to-media connectivity by observing a real life 3D interactive heat map. From micro to macro and unto the avoided.**

## 🎭 Overview

The **Event Horizon** plugin is the core cosmic engine for the **Xophz-COMPASS** ecosystem. It delivers a high-performance 3D visualization of the "Youniverse," rendering over 100,000 stars with interactive node mapping and cinematic transitions.

Built with a modernized Three.js architecture, Event Horizon bridges legacy procedural logic with modern reactive Vue 3 patterns, providing a seamless navigation experience from galactic star clusters down to individual media nodes.

---

## ✨ Key Features

- **🚀 Visionary Boot Sequence**: A perfectly choreographed high-tech startup experience.
- **🛰️ High-Density Starfield**: Efficiently renders 100,000+ stars using custom GLSL shaders.
- **📉 3D Interactive Heat Map**: Visualizes user-to-media connectivity in a physical, spatial context.
- **🎬 Cosmic Tour Choreography**: Automated onboarding sequences with smooth quartic easing and adaptive camera paths.
- **📦 Manifest-Driven Loading**: Dynamic asset and script management via `manifest.json` for optimal performance.
- **🌉 Global Event Bridge**: A robust communication layer between the legacy WebGL context and the modern Vue 3 HUD.

---

## 🏗️ Architecture

The integration follows a sophisticated hybrid model, bridging legacy procedural logic with modern reactive Vue 3 patterns.

| Layer | Responsibility |
| :--- | :--- |
| **Backend (PHP)** | WordPress integration, REST API endpoints, and dynamic asset enqueuing. |
| **Engine (Three.js)** | 3D rendering, star generation, particle physics, and camera choreography. |
| **Frontend (Vue 3)** | HUD overlay, reactive controls, state management (Pinia), and route-based portal gateways. |

### 🛠️ Directory Structure

- `/public/youmeos_legacy`: Core engine logic, shaders, and textures.
- `/includes`: WordPress-side logic and activator/deactivator.
- `/apps/youmeos`: (In COMPASS root) High-level UI and interaction controllers.

---

## 📈 Evolution & Roadmap

| Feature | Status | Description |
| :--- | :---: | :--- |
| **Manifest Loading** | ✅ | Scripts/styles loaded dynamically via `manifest.json`. |
| **Vue Bridge** | ✅ | Robust communication between Three.js and Vue 3. |
| **Tour Refinement** | ✅ | Finalized choreography, easing, and message centering. |
| **Asset Pipeline** | ⏳ | Implementing Basis/KTX2 for faster load times. |
| **Physics Bridge** | ⏳ | Exposing engine inertia/gravity to Pinia store. |

---

## 🚀 Getting Started

1. **Activate**: Ensure both **Xophz COMPASS** and **Event Horizon** are active in the WordPress plugins menu.
2. **Access**: Navigate to the COMPASS dashboard and enter the **YouMeOS Portal**.
3. **Navigate**: Use standard mouse/touch controls to orbit, zoom, and pan through the cosmic heat map.

---

## 📄 License

Distributed under the GPLv2 or later License. See `LICENSE.txt` for more information.

---

> [!TIP]
> To modify the engine's boot sequence messages, visit `apps/youmeos/config/loader-messages.ts`. To adjust the tour choreography, see `public/youmeos_legacy/js/tour.js`.
