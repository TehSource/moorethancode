---
title: 'Resonant Machina'
description: 'An audio-reactive arcade prototype exploring rhythm-based combat inside a modular synth-inspired arena.'
summary: 'Prototype that fuses modular synthesis concepts with melee combat—players route audio nodes to unlock combo patterns on the fly.'
genre: 'Action Rhythm Prototype'
status: 'Prototype'
role: 'Solo Developer'
engines:
  - Godot 4
platforms:
  - PC
tech:
  - GDScript
  - Vulkan
  - Ableton Link
featured: false
order: 3
cardMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  poster: '../../assets/blog-placeholder-4.jpg'
cta:
  play: 'https://tehsource.itch.io/resonant-machina'
  code: 'https://github.com/TehSource/resonant-machina'
lessons:
  - Visualizing beat prediction inside the editor made timing bugs obvious long before QA ever touched the build.
  - Godot 4’s audio buses become manageable once wrapped in custom inspectors that expose the right parameters to designers.
  - Rhythm combat shines when inputs are forgiving; quantized windows keep newcomers on beat without killing mastery.
---

## Experiment Goals
Resonant Machina started as a weekend jam about translating modular synth patching into weapon choreography. Every combat ability is literally an audio node.

## Development Highlights
- Built a dynamic timeline sequencer that previews beat grids while you route audio through combat modifiers.
- Created a visual scripting layer that lets designers sketch combo finishers by dragging signal wires between nodes.
- Tuned a difficulty scaler that listens for rhythmic consistency and subtly widens or closes timing windows in response.

## Lessons Learned
This prototype reminded me that rapid experimentation thrives with crystal-clear instrumentation. I wired up debug overlays that show beat deviation in milliseconds—players loved the feedback loop, and so did I.
