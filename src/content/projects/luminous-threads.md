---
title: 'Luminous Threads'
description: 'A collaborative puzzle adventure where players weave constellations in real time to stabilize a crumbling sky.'
summary: 'Online co-op puzzler with shared-state constellations and bespoke networking tech that keeps distant players perfectly in sync.'
genre: 'Co-op Puzzle Adventure'
status: 'Vertical Slice'
role: 'Lead Programmer & Technical Designer'
engines:
  - Unreal Engine 5
platforms:
  - PC
  - Web
tech:
  - Unreal GAS
  - Blueprints
  - Niagara
  - WebRTC
featured: true
order: 2
cardMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  poster: '../../assets/blog-placeholder-2.jpg'
heroMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  poster: '../../assets/blog-placeholder-2.jpg'
cta:
  play: 'https://tehsource.itch.io/luminous-threads'
  itch: 'https://tehsource.itch.io/luminous-threads'
  code: 'https://github.com/TehSource/luminous-threads'
lessons:
  - Designing for latency from day one meant building predictive input smoothing as a core mechanic, not a post-launch patch.
  - Integrating artists into the Niagara workflow required UX passes on the tooling, including contextual presets and inline playheads.
  - WebRTC relays need aggressive observability; structured logs surfaced packet spikes we would have never caught locally.
---

## Why Cooperative Weaving?
Luminous Threads explores co-creation—every puzzle is a shared canvas. I architected a deterministic constellation solver that merges simultaneous inputs so two players feel like they are sketching on the same sheet.

## Development Highlights
- Implemented a rollback-safe networking layer on top of Unreal GAS so the constellation weaving feels immediate, even across 150ms of latency.
- Authored a Niagara-driven sky fabric shader that reacts to the angle of constellations, bathing the world in player-generated color palettes.
- Built a constellation grammar tool that lets designers paint puzzle nodes directly inside the editor; the system translates them into solvable graph data automatically.

## Player Experience
Players hop in and instantly see their partner’s cursor, trail renders, and real-time feedback from the weave detector. Playtests show a 92% completion rate on the first three puzzles, proving the onboarding flows.

## Lessons Learned
Our biggest surprise was how much players talked about the ambience. Dynamic spatial audio tied to constellation tension became a tool for guiding communication without forced VO prompts. The soundscape now acts as an invisible coach that celebrates success and spots mistakes before they snowball.
