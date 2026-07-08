---
name: Cormorant Garamond font naming
description: The @expo-google-fonts/cormorant-garamond package exports fonts with the full CormorantGaramond_ prefix, not a shortened Cormorant_ prefix.
---

**Rule:** Import and register fonts as `CormorantGaramond_700Bold`, `CormorantGaramond_600SemiBold`, etc. — never `Cormorant_700Bold`.

**Why:** The package `@expo-google-fonts/cormorant-garamond` names its exports `CormorantGaramond_*` (the full family name). Using `Cormorant_*` causes TS import errors and fonts silently fail to load, falling back to system font.

**How to apply:** When loading via `useFonts` from `expo-font`, use:
```ts
import { CormorantGaramond_700Bold, CormorantGaramond_600SemiBold } from '@expo-google-fonts/cormorant-garamond';
useFonts({ CormorantGaramond_700Bold, CormorantGaramond_600SemiBold });
// fontFamily: 'CormorantGaramond_700Bold'
```
