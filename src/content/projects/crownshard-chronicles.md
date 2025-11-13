---
title: 'Crownshard Chronicles'
description: 'A Unity-powered fantasy roguelite where the last prince channels legendary avatars to reclaim a shattered kingdom and rebuild it citizen by citizen.'
summary: 'Rescue your scattered people through procedurally generated missions, wield rotating avatars, and reinvest every run into a living kingdom that evolves alongside you.'
genre: 'Fantasy Action Roguelite / City Builder'
status: 'In Production'
role: 'Creative Director & Gameplay Engineer'
engines:
  - Unity
platforms:
  - PC
  - Steam Deck
tech:
  - Unity
  - C#
  - Scriptable Render Pipeline
  - Timeline
featured: true
order: 1
cardMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  poster: '../../assets/blog-placeholder-2.jpg'
heroMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm'
  poster: '../../assets/blog-placeholder-2.jpg'
cta:
  play: 'https://tehsource.itch.io/crownshard-chronicles'
  code: 'https://github.com/TehSource/crownshard-chronicles'
lessons:
  - Death-locking avatars pushed us to build a roster pipeline that keeps players experimenting rather than min-maxing one build.
  - Separating mission telemetry from kingdom metrics early made it possible to balance roguelite runs and settlement growth without guesswork.
  - Investing in Unity editor tooling for shard generation let level design and narrative share ownership of procedural content.
---

## Elevator Pitch
The kingdom of Crownshard lies in ruins. As the last surviving prince, you channel avatars - legendary champions pulled from your bloodline - to free enslaved citizens across hostile territories. Each run through procedurally generated lands rescues people, secures resources, and reveals relics that reshape the capital you rebuild between missions. Death is not the end, but it locks your fallen avatar, forcing new playstyles every time you return to the field.

## Core Loop
1. **Prepare in the keep.** Choose an avatar, slot gear and consumables, and invest resources into structures that boost the upcoming expedition.
2. **Run the mission.** Navigate procedural biomes ranging from crystalline forests to ruined citadels, battle faction leaders, rescue citizens, and pocket relics.
3. **Return and rebuild.** Freed citizens reopen forges, archives, and training halls, unlocking tech trees, avatar research, and passive resource flow.
4. **Adapt.** Fallen avatars enter cooldown. Swap to another champion or pay to reactivate them, and repeat the cycle with a city that remembers your choices.

## Key Features in Production
- **Dynamic Avatar Roster:** A growing stable of melee, ranged, and support archetypes, each with bespoke upgrade trees and lore-driven ultimates. Avatar death triggers cooldown timers, nudging players to experiment.
- **Procedural Exploration:** Unity procedural tools stitch together handcrafted set pieces with tile-based wilderness, ensuring every mission supplies new layouts, secrets, and rare mythic encounters.
- **Kingdom Rebuilding:** Rescued citizens repopulate districts, unlocking functionality like crafting, avatar research, or political counsels that influence future mission modifiers.
- **Rare & Mythic Events:** Hidden portals and boss hunts deliver blueprints for new avatars or city structures, but come with escalating risk modifiers.
- **Resource Dilemmas:** Players constantly choose between outfitting the next avatar or investing in long-term infrastructure; both paths are viable, but never simultaneously.

## Systems & Tooling
- Authored a shard generator inside Unity that exports both mission-level layout data and settlement "pressure" metrics to the city simulation layer.
- Built avatar progression as scriptable data assets, making it trivial to layer new ability kits while keeping cooldown and lockout logic centralized.
- Implemented a settlement command board UI using Unity's UI Toolkit, giving narrative and design teams drag-and-drop control over civic events and branching outcomes.

## Player Experience Goals
Playtests point to the satisfaction of returning with rescued citizens and watching the city respond - new districts rise, guilds petition for resources, and next-run modifiers reflect the player's priorities. The avatar lockout system keeps combat fresh while the kingdom layer makes every failure meaningful rather than punitive.

## Lessons Learned
The hybrid structure demands robust data tracking. We now log expedition metrics, citizen morale shifts, and avatar cooldown usage in one timeline, letting balancing passes respect both the roguelite and city-builder halves. Continuous integration bundles mission and city saves, so QA can replay full campaign arcs without manual setup.
