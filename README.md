# Make a new game

1. Choose **Use this template → Create a new repository**, select **procrastinate-games**, make it public, and name it with a kebab-case game slug.
2. Install the skill in the new repository: `npx skills add playableintelligence/game-creator` (optionally `-a claude-code`, `-a codex` or another agent).
3. Ask your AI: “Make a game about X”. It follows `AGENTS.md`, [GAME-CREATOR.md](GAME-CREATOR.md), and [LOCALIZATION.md](LOCALIZATION.md): plans the game with you, builds it in English and Russian with a globe language selector, fills the English catalog text in `public/game.json` and sets `status` to `published`.
4. Push to `main`. The shared [game-publisher](https://github.com/procrastinate-games/game-publisher) workflow tests, builds and publishes it, then refreshes the portal automatically.

Your game URL is `https://<repository-name>.procrastinate.games/`. See **Actions → Publish game** for progress. No per-game Cloudflare setup or tokens are needed.

The template contains no game code: the skill scaffolds the engine it picks with you (canvas, Phaser, Three.js, DOM…). Until then `status` is `draft` and CI only checks `public/game.json`. `hidden` publishes a game without a portal card. Include a 960×600 `public/cover.webp`; otherwise the portal captures the running game.

Every new game starts in **English** on a fresh launch and offers **English / Русский** through a visible **globe language button** in its main menu and in-game pause/settings menu. Remember the player's choice across reloads and new runs without resetting game progress. Both languages cover the entire player-facing experience and meet the **same quality standard** for natural language, clarity and the game's intended style/humor. Edit while writing; check all text before the first release, then focus later reviews on changes and affected context. See [the full language and editorial standard](LOCALIZATION.md). Only these two languages are required for now.

The template's draft catalog is a placeholder. Set `languages` to `English, Russian` for a published game only after both versions have been implemented and verified; catalog prose itself stays in English.

Keep `useCustomDomain: true` in `public/game.json`. The shared publisher creates the Workers Custom Domain and verifies HTTPS before refreshing the portal. Worker names stay `pg-<slug>` and workers.dev remains available. Do not manually add per-game DNS records or a second deploy workflow. Existing games without this flag keep their current origins; changing an existing origin requires an explicit migration decision.

Do not copy a platform game list into game instructions. Read the live catalog at https://procrastinate.games/catalog-manifest.json and verify game details with its live game.json.

## One source of platform rules

Edit shared policy in [PLATFORM.md](PLATFORM.md), with [localization](LOCALIZATION.md) and [versioning](VERSIONING.md) standards in this same repository. Each game's AGENTS.md loads the current central policy at session start, pinned to one resolved commit for that session, then applies its local architecture and approved exceptions. Template descendants do not sync themselves; this loader is the bridge. Agents report unavailable policy access rather than claiming an automatic sync occurred.

Public game updates require a semantic version and a 1–3 bullet CHANGELOG entry, tied to the deployed commit; pushing directly to main remains supported. See [VERSIONING.md](VERSIONING.md). Documentation-only work does not create a game release. [TODO.md](TODO.md) tracks existing-game adoption and the remaining publisher/portal/feedback integration.
