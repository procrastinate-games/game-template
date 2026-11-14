# Shared platform policy

Canonical source: `procrastinate-games/game-template/PLATFORM.md`. All game repositories load this document at session start through their root `AGENTS.md`; keep shared policy here rather than maintaining per-game copies. Use the central documents from the same resolved commit for a session. Explicit user instructions take precedence; preserve documented owner-approved game exceptions and existing project architecture.

## Workflow and scope

- For game creation/iteration use PlayableIntelligence/game-creator (`make-game` by default), with the integration rules in [GAME-CREATOR.md](GAME-CREATOR.md). Use the installed skill, or fetch its documented entry point; do not invent unavailable skill rules.
- Existing games: read local state/design/technical notes relevant to the task. Do not scaffold over working games. Keep their approved stack and documented device exceptions. A central-policy update alone does not authorize unrelated gameplay, language, hosting-origin or save migrations.
- Required version/release discipline for new and existing games is in [VERSIONING.md](VERSIONING.md). Direct pushes to `main` remain supported; branches/PRs are not a prerequisite.

## Platform publishing contract

- The game is a static browser build: client code only, no required backend or external runtime services. Use npm; `npm ci` and `npm run build` must work, and the build writes the complete game to `dist/`, including `dist/game.json` copied from `public/game.json`. Game tests go in `npm test`.
- Before pushing, run `npm test`, `npm run build` and `npx --yes github:procrastinate-games/game-publisher#v1` (checks `game.json` locally).
- Repository name = game slug. Public game URL: `https://<slug>.procrastinate.games/`. Keep `useCustomDomain: true` in `public/game.json`; the shared publisher attaches the subdomain and verifies HTTPS before refreshing the portal. Worker name stays `pg-<slug>`; its workers.dev URL remains available.
- Support iframe embedding and relative asset URLs (`base: './'` for Vite); never navigate the parent window.
- Devices: new games support desktop and mobile (keyboard and touch, layouts from 360 px through landscape). Desktop-only needs an explicit owner-approved exception recorded in the gameplan; complexity alone is not an exception. Set `supportedDevices` in `public/game.json` to what actually works (`["desktop", "mobile"]` or `["desktop"]`) and describe the real controls.
- Languages and editorial quality: apply [LOCALIZATION.md](LOCALIZATION.md). New games ship English and Russian, default to English and expose a globe selector. All shipped languages have the same quality standard. Existing games retain their approved language behavior until localization is in scope; do not turn an unrelated fix into a localization rewrite.
- Never maintain a list or count of platform games in instructions. For the current collection, read `https://procrastinate.games/catalog-manifest.json` and the organization repositories; use each game’s live `game.json` for its verified details. The portal discovers publications automatically.
- Saves: new localStorage keys use the prefix `pg:<slug>:`. Never rename, reset or migrate existing save keys or formats without explicit instructions.
- Assets: commit them as regular files, each at most 25 MiB (Cloudflare limit). No trackers, advertising or unlicensed third-party assets.
- When playable: fill every field in `public/game.json` with English catalog text, set `slug` to the repository name, add `public/cover.webp` (960×600) and set `status` to `published`. `draft` skips deployment; `hidden` deploys without a catalog card.
- Publishing runs in the shared [game-publisher](https://github.com/procrastinate-games/game-publisher) workflow. Do not change `.github/workflows/publish.yml` or the Worker name, and do not add another deploy workflow. Never add tokens or secrets to code.
- Push to `main` to publish. Check GitHub Actions for the URL and outcome; the portal refreshes automatically.
- Commit author and committer: `kifrip <25287470+kifrip@users.noreply.github.com>`.

## Verification and documentation-only work

Use checks relevant to the change and preserve existing required game tests. A release must pass the game checks, build and publishing validation above. Reuse successful results for unchanged code; broaden checks for new changes, failures or unresolved concerns. A sandbox/idle game needs its own acceptance criteria rather than an invented win/lose condition.

For a verified Markdown-only policy/instruction change, validate the diff and document links; do not rebuild or redeploy unchanged games or bump their game versions. A commit message with `[skip ci]` can avoid a push-triggered publish run when every changed file is documentation. Do not use this bypass for runtime/config/manifest/asset changes. Never edit publishing workflows just to skip documentation runs.

## Maintaining this source of truth

- Change shared rules here or in the central linked standard; local game instructions hold only the loader, game-specific information and approved exceptions.
- [TODO.md](TODO.md) tracks cross-repository adoption and unfinished platform integrations. Discover the current repositories/catalog when doing a rollout; do not maintain a fixed platform game list/count in instruction files.
- The template is intentionally codeless. New-game scaffolders must preserve its loader; generating a repository from a GitHub template copies files once and does not create an automatic upstream sync.
