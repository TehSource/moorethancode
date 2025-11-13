---
title: 'Echoes of Aether'
description: 'A narrative-driven action roguelite that blends procedural dungeon design with hand-authored storytelling beats.'
summary: 'A narrative-first roguelite where handcrafted story moments emerge from a custom encounter director layered over procedural worlds.'
genre: 'Action Roguelite'
status: 'In Production'
role: 'Creative Director & Gameplay Engineer'
engines:
  - Unity
platforms:
  - PC
  - Steam Deck
tech:
  - Unity DOTS
  - C#
  - Shader Graph
  - FMOD
featured: true
order: 1
cardMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  poster: '../../assets/blog-placeholder-1.jpg'
heroMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  poster: '../../assets/blog-placeholder-1.jpg'
cta:
  play: 'https://tehsource.itch.io/echoes-of-aether'
  code: 'https://github.com/TehSource/echoes-of-aether'
lessons:
  - Player-readable systemic design beats handcrafted set pieces when the AI director is transparent about its intent.
  - Building custom tooling for writers early reduced iteration cycles on branching dialogue by 40%.
  - Automated combat telemetry exposed input latency issues on Steam Deck that we solved with a bespoke buffered input stack.
---

## Design North Star
Echoes of Aether was born from a simple question: _can a roguelite feel authored without losing its systemic soul?_ The answer became a layered encounter director that blends procedural tiles with narrative arcs authored in ScriptableObjects. The player experiences bespoke beats that remix themselves across runs without ever repeating verbatim.

## Development Highlights
- Authored a state-driven encounter director that watches for player stress and injects bespoke events (rescues, betrayals, puzzle interludes) at the exact moment tension peaks.
- Crafted a modular ability system where every skill can fluidly combo into another thanks to a graph-based timing editor built in-Engine.
- Built dynamic shader pipelines for ethereal "Aether Storms" that react to combat intensity and soundtrack spectral data in real time.
- Implemented a designer-friendly markup language for branching dialogue that exports directly to localization spreadsheets.

## Systems & Tools
The project leans on Unity DOTS for performant enemy swarms and a deterministic combat loop. To keep designers in flow, I delivered a custom node editor that swaps between behaviour-tree and timeline views with a single hotkey. Each tool surfaces inline documentation and live profiling metrics so tuning never requires digging through raw data dumps.

## What Players Feel
Early playtests highlight how the AI director acts like a collaborative GM. Explorers appreciate optional lore injections, while combat-focused players notice the subtle difficulty ramp that responds to their hit-streak confidence.

## Lessons Learned
Shipping weekly narrative slices forced the build pipeline to be bulletproof. I invested in a GitHub Actions matrix that auto-bakes lighting, runs regression combat sims, and packages targeted builds for QA. The extra automation time was repaid the first time narrative could ship a Friday update without calling an engineer.
