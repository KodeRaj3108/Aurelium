# Aurelium — Mobile Landing

A premium, scroll-driven mobile landing page for the Aurelium luxury digital studio brand. Features a glossy animated 3D orb, cinematic typography, dark/light mode, and scroll-reactive UI.

## Run & Operate

- `pnpm --filter @workspace/mobile run dev` — start the Expo dev server
- `pnpm --filter @workspace/mobile run typecheck` — type check the mobile app
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Mobile: Expo SDK 54, React Native 0.81, Expo Router
- Animations: react-native-reanimated v4
- 3D orb: react-native-svg with RadialGradient + LinearGradient
- Fonts: Inter (body) + Cormorant Garamond (display)
- Gradients: expo-linear-gradient
- API: Express 5 (api-server artifact)

## Where things live

- `artifacts/mobile/` — Expo mobile app
- `artifacts/mobile/app/(tabs)/index.tsx` — main landing page (no tabs, single screen)
- `artifacts/mobile/components/AnimatedOrb.tsx` — the SVG glossy sphere
- `artifacts/mobile/components/StickyHeader.tsx` — scroll-reactive floating header
- `artifacts/mobile/components/sections/` — HeroSection, ValueSection, FeatureSection, MetricsSection, CTASection
- `artifacts/mobile/context/ThemeContext.tsx` — dark/light mode toggle (AsyncStorage persistent)
- `artifacts/mobile/constants/colors.ts` — Aurelium color tokens (dark + light)
- `lib/api-spec/openapi.yaml` — API contract source of truth

## Architecture decisions

- Single-screen landing page (no tab bar) — `(tabs)/_layout.tsx` is reduced to a bare `<Slot />`
- Theme defaulting to dark; user toggle persisted in AsyncStorage
- Animated orb uses SVG RadialGradient with Reanimated `withRepeat` for ambient breathing
- Scroll position tracked via `useAnimatedScrollHandler` → shared `scrollY` → `StickyHeader` for background fade
- Font loading: both Inter and CormorantGaramond registered via single `useFonts` call from `expo-font`

## Product

Aurelium landing page — 5 sections: Hero (brand + orb), Value (positioning), two Feature storytelling sections, Metrics (key stats), and CTA footer. Dark/light theme toggle in header.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Cormorant Garamond exports as `CormorantGaramond_*` (not `Cormorant_*`) — use full prefix
- Always load all fonts together via `useFonts` from `expo-font`, not from individual font packages
- `pointerEvents` should be a `style` property, not a component prop (React Native 0.71+)
- NEVER call `useAnimatedStyle` inside `.map()` — extract animated items into separate components

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
