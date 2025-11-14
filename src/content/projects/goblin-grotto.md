---
title: 'Goblin Grotto'
description: 'An arcade-length survival defense where a scrappy goblin rigs lethal trap networks to repel endless waves of so-called heroes.'
summary: 'Chain traps, scramble for gold between waves, and outsmart randomized hero parties in a compact grotto built for leaderboard chasers.'
genre: 'Wave Survival / Action Defense'
status: 'Prototype'
role: 'Solo Designer & Programmer'
engines:
  - Unity
platforms:
  - PC
  - Steam Deck
tech:
  - Unity
  - C#
  - Scriptable Render Pipeline
  - FMOD
featured: false
order: 3
cardMedia:
  type: video
  src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4'
  poster: '../../assets/blog-placeholder-4.jpg'
heroMedia:
  type: image
  src: '../../assets/blog-placeholder-3.jpg'
  alt: 'Goblin defending a grotto entrance with improvised traps'
cta:
  play: 'https://tehsource.itch.io/goblin-grotto'
  code: 'https://github.com/TehSource/goblin-grotto'
lessons:
  - Randomizing wave routes early exposed how brittle hand-authored trap layouts were, so I invested in spline-based spawn logic that stays flexible.
  - Separating trap build mode from combat input kept the controls readable even when the goblin is sprinting between contraptions mid-wave.
  - Lightweight backend metrics for wave duration and damage sources made leaderboard integrity easy to audit before integrating a live service.
---

## Elevator Pitch
Goblin Grotto is a fast-paced defense playground where one crafty goblin weaponizes claustrophobic tunnels to humiliate bands of overeager heroes. Each run is a frantic balance of scrapping intruders, salvaging their gear for gold, and wiring together trap clusters that turn the cave into a lethal Rube Goldberg gauntlet.

## Core Loop
1. **Defend.** Waves of knights, mages, and archers push through one or more cave mouths, each with unique resistances and attack patterns.
2. **Earn.** Every fallen adventurer drops gold and loot fragments that fuel upgrades.
3. **Upgrade.** Between waves, slip into build mode to place traps, reinforce barricades, and tune personal gear.
4. **Survive.** Endure escalating wave modifiers, boss parties, and environmental hazards to climb the global leaderboard.

## Systems & Mechanics
- **Trap Synergy Sandbox:** Spike beds, swinging axes, dart shooters, tar pits, and goblin-patented contraptions chain together through trigger rules, letting players stack status effects or force enemies into kill zones.
- **Adaptive Adventurer Parties:** Encounter decks shuffle melee bruisers, ranged supporters, and support casters with evolving buffs, ensuring no two waves stress the same defenses.
- **Contained Grotto Arena:** A single handcrafted cave supports multiple ingress routes, destructible cover, and secret crawlspaces the goblin can exploit for flanks.

## Progression & Replayability
- **Unlockable Traps:** Milestone waves, optional objectives, and achievements reveal advanced contraptions like lava sprayers or goblin-sized ballistae.
- **Goblin Customization:** Earn cosmetic skins, hats, and gadgets that grant light perks such as sprint boosts or faster trap resets.
- **New Grottos:** Survive deep enough to unlock variant cave layouts with fresh choke points, environmental hazards, and build budgets.
- **Difficulty Tiers:** Conquer wave 50 to toggle Hard Mode, introducing elite enemy types, harsher debuffs, and faster spawn cadence.
- **Online Leaderboards:** Cloud-backed records track highest wave, trap efficiency, and damage split to encourage repeat runs.

## Example Session
The goblin starts in a barebones cavern with only spike traps guarding the main tunnel. Wave one brings two armored knights; the spikes skewer the first, and a frantic club swing drops the second, scattering gold. Between waves the goblin buys a dart shooter and nests it above the entrance. Wave two adds an archer whose cover fire forces the goblin to dash between pillars while the shooter whittles them down. By wave five the grotto looks like a trap parade—swinging axes funnel intruders into tar pits, chain lightning arcs between metal armor, and the leaderboard timer keeps the player hungry for the next wave.

## Production Notes
I am building the prototype with quick iteration in mind: modular trap prefabs, event-driven wave scripting, and analytics hooks for balance. The contained environment keeps scope pointed while leaving headroom to experiment with new contraptions and arena variants without rewriting the core loop.