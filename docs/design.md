# MooreThanCode.com Design Document

## 1. Vision & Core Concept
- **Vision:** Create a professional and personal portfolio that acts as a central hub for all game development projects, showcasing technical skill, creative vision, and a thoughtful development process.
- **Core Concept:** Embody the "MooreThanCode" philosophy by communicating the full journey behind each project—design choices, problem solving, and world building—not just the final code artifacts.

## 2. Target Audience
- **Primary:** Recruiters, hiring managers, and studio leads in the game development and tech industries.
- **Secondary:** Fellow developers, potential collaborators, and players interested in the projects.

## 3. Visual Design & Aesthetics
- **Theme:** Dark mode first with a modern "creative-tech" aesthetic inspired by contemporary game UI and developer tooling. The experience should feel clean, immersive, and polished.
- **Color Palette:**
  - Background: Deep charcoal `#121212`.
  - UI Elements: Muted gray `#1E1E1E` to build depth and layering.
  - Text: Soft off-white `#EAEAEA` for comfortable readability.
  - Accents: A single electric color for interactive elements—either Neon Green `#BEF264` or Electric Blue `#00FFFF`.
- **Typography:**
  - Headings: A tech-forward sans-serif such as Oxanium or Poppins.
  - Body: Highly readable sans-serif or clean monospaced faces such as Open Sans or Roboto Mono to hint at code aesthetics.
- **Imagery & Motion:** Favor dynamic media. Project cards highlight gameplay GIFs or muted MP4 loops instead of static imagery. Use subtle hover animations and fluid page transitions to elevate polish.

## 4. Sitemap & Page Architecture
- **Home (`/`):** Establish the hook within five seconds and lead visitors to top priorities.
  - Hero: Name, a headline (e.g., "Game Developer & World Builder"), and a concise mission statement describing the MooreThanCode philosophy.
  - Featured Projects: Curated grid of three to four standout projects, each using autoplay GIF/video thumbnails linking to dedicated pages.
  - Recent Devlog Posts: Teaser list of the two latest entries to demonstrate ongoing learning and build activity.
- **Projects Gallery (`/projects`):** Provide a comprehensive, filterable gallery of game development work.
  - Grid showing title, one-line summary, and core technologies via iconography.
  - Filters for engine (Unity, Unreal) and platform (Web, PC) to help visitors locate relevant work quickly.
- **Single Project (`/projects/[slug]`):** Deliver an in-depth case study that tells the project's story.
  - Header media: Key art or embedded trailer.
  - Quick Info Box: Genre, platform, project status, personal role, and tech stack.
  - Calls to Action: Buttons to play the game, visit Itch.io, or view source on GitHub.
  - Development Highlights: Showcase the MooreThanCode process—mechanics, custom tools, design challenges—with text, GIFs, and code snippets.
  - Lessons Learned: Brief post-mortem capturing challenges, successes, and next steps.
- **Devlog (`/devlog`):** Chronicle the development journey in a reverse-chronological blog format, mixing tutorials, updates, and reflections.
- **About (`/about`):** Humanize the portfolio owner with a professional photo, concise biography, and structured skills inventory (languages, engines, design tools, and related proficiencies).

## 5. Technical Stack
- **Framework:** Astro.
- **Content Management:** Markdown files within `src/content/` for local, version-controlled updates.
- **Deployment:** Vercel with automated CI/CD via GitHub.
- **Version Control:** Git with GitHub as the remote source of truth.
