# Aurelium
Sculpt motion into meaning.

A luxury-forward digital experience brand where glossy 3D form, cinematic transitions, and refined storytelling define the entire product presence.

A premium, scroll-driven landing page experience featuring a glossy 3D object that animates as you scroll, powered by WebGL for smooth, cinematic transitions between sections.

Overview:
Aurelium is a high-end interactive landing page built for modern digital products that demand a luxury, cinematic presence. It combines editorial typography, refined color, and a single continuous WebGL scene to create a seamless scroll narrative.
Key characteristics:
Single, continuous 3D scene that evolves across sections
Scroll-linked animation with smooth, physically coherent motion
Restrained, premium palette and typography
Responsive, accessible, and performance-optimized
Features:
Glossy 3D Hero Object
A premium, material-like 3D object (liquid-metal / polished chrome / resin monolith) that responds to scroll progress.
Scroll-Driven Storytelling
Five carefully structured sections:
Hero
Product value / positioning
Feature storytelling
Performance / trust / metrics
CTA footer
WebGL & Smooth Transitions
Built with Three.js (or similar) for GPU-accelerated rendering and continuous section transitions.
Premium Visual Language
Restrained neutral palette with one accent color
Strong typographic hierarchy
Editorial spacing and asymmetry
Light & dark mode support
Performance & Accessibility
Optimized render loop and asset loading
Respects prefers-reduced-motion
Semantic HTML, keyboard navigation, and focus states
Tech Stack:
HTML5 — Semantic structure
CSS3 — Modern layout, custom properties, themes
JavaScript — Interaction and scroll logic
Three.js — WebGL rendering and 3D scene
Build (optional) — Vite / Parcel / simple static hosting
Project Structure:
aurelium/
├─ index.html
├─ css/
│  └─ styles.css
├─ js/
│  ├─ main.js
│  └─ scene.js
├─ assets/
│  ├─ fonts/
│  └─ images/
└─ README.md
Getting Started:
1. Clone the repository
git clone https://github.com/KodeRaj3108/aurelium.git
cd aurelium
2. Install dependencies (if using a bundler)
npm install
3. Run locally
npm run dev
Or simply open index.html in your browser for a static setup.
Deployment:
GitHub Pages
Ensure your built files are in the repo root or /docs
Go to Settings → Pages on your GitHub repo
Select source branch (e.g., main) and folder (/ (root))
Save and visit: https://KodeRaj3108.github.io/aurelium/
Netlify / Vercel
Drag-and-drop the project folder or connect your repo for automatic deploys.
Customization:
Colors & Themes
Edit CSS custom properties in styles.css:
:root {
  --color-bg: #0b0b0b;
  --color-text: #f5f5f5;
  --color-accent: #c79e3b;
}
You can also define a dark mode variant:
[data-theme="dark"] {
  --color-bg: #121212;
  --color-text: #eeeeee;
}
3D Object
Modify js/scene.js to:
Change geometry (sphere, torus, custom shape)
Adjust material (metalness, roughness, clearcoat)
Tune scroll-linked animation curves
Content
Update index.html with your product copy, features, and CTA.
Branding
Name: Aurelium
Tagline: Sculpt motion into meaning.
Logo: Provided as SVG in assets/logo/
Author: @KodeRaj3108
License
MIT — feel free to use, modify, and distribute.
Credits
Design & Concept: KodeRaj3108
Three.js: threejs.org
Fonts: Specify font sources (e.g., Google Fonts, local files)
Built with precision, motion, and meaning.
