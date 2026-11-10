# Games to Procrastinate To

<!-- platform:start. Keep this whole block, unchanged, when game-creator's agents-bootstrap writes or regenerates AGENTS.md. Put the game's own sections below platform:end. -->

## Start here

- Use [PlayableIntelligence/game-creator](https://github.com/PlayableIntelligence/game-creator) for game creation and iteration (`make-game` by default). Read [GAME-CREATOR.md](GAME-CREATOR.md) first: it lists where this platform replaces the skill's own steps (scaffolding, deployment, monetization, Git LFS, tests).
- This repository starts with publishing files only, no game code. Read `docs/platform-project-notes.md` when present for game-specific architecture and checks.

## Platform publishing contract

- The game is a static browser build: client code only, no required backend or external runtime services. Use npm; `npm ci` and `npm run build` must work, and the build writes the complete game to `dist/`, including `dist/game.json` copied from `public/game.json`. Game tests go in `npm test`.
- Repository name = game slug. Publishing URL: `https://pg-<slug>.register-c02.workers.dev/`.
- Support iframe embedding and relative asset URLs (`base: './'` for Vite); never navigate the parent window.
- Devices: new games support desktop and mobile (keyboard and touch, layouts from 360 px through landscape). Desktop-only needs an explicit owner-approved exception recorded in the gameplan; complexity alone is not an exception. Set `supportedDevices` in `public/game.json` to what actually works (`["desktop", "mobile"]` or `["desktop"]`) and describe the real controls.
- Saves: new localStorage keys use the prefix `pg:<slug>:`. Never rename, reset or migrate existing save keys or formats without explicit instructions.
- Assets: commit them as regular files, each at most 25 MiB (Cloudflare limit). No trackers, advertising or unlicensed third-party assets.
- When playable: fill every field in `public/game.json` with English catalog text, set `slug` to the repository name, add `public/cover.webp` (960×600) and set `status` to `published`. `draft` skips deployment; `hidden` deploys without a catalog card.
- Do not change `.github/workflows/`, `wrangler.jsonc`, `scripts/platform/` or the Worker name. Never add tokens or secrets to code.
- Push to `main` to publish. Check GitHub Actions for the URL and outcome; the portal refreshes automatically.
- Commit author and committer: `kifrip <25287470+kifrip@users.noreply.github.com>`.

<!-- platform:end -->
