# Game Creator on this platform

[PlayableIntelligence/game-creator](https://github.com/PlayableIntelligence/game-creator) owns game design, planning docs, architecture, assets, audio and QA. This repository owns publishing (see the platform block in AGENTS.md). This page lists only the places where the two meet.

## Load the workflow

1. Prefer an installed skill: `npx skills add playableintelligence/game-creator` (optionally `-a claude-code`, `-a codex`, …). A link in AGENTS.md does not install anything, and nothing installs it in GitHub Actions.
2. Without native skills, read the upstream [make-game entrypoint](https://github.com/PlayableIntelligence/game-creator/blob/main/skills/make-game/SKILL.md) and only the linked phase documents you need, resolving relative links against the upstream repository. If neither route works, say so instead of guessing the skill's rules.
3. Default to `make-game`, including its idea phase and project docs. Use `viral-game` only when the user asks for a quick one-session game, with the overrides listed below.

## Where the platform replaces skill steps

| Skill step | On this platform |
| --- | --- |
| Scaffold with `/use-template` or an official scaffolder | Scaffolders refuse or offer to wipe a non-empty directory, so: 1. Generate the starter in a temporary directory outside this repository. 2. Copy all its files here except `.git` and `.github`; merge `.gitignore`, and replace README with the game's own. 3. Make the build match the contract in AGENTS.md: npm, output in `dist/`, relative asset URLs (`base: './'` for Vite), and `public/game.json` copied into `dist/`. 4. Delete the temporary directory. |
| agents-bootstrap writes `AGENTS.md` / `CLAUDE.md` | Keep the `platform:start … platform:end` block at the top of AGENTS.md unchanged and add the skill's sections below it. Keep CLAUDE.md as the single line `@AGENTS.md` and GEMINI.md as a pointer. |
| Skill or reference assumes a single language, browser-language detection, or postpones localization | Apply [LOCALIZATION.md](LOCALIZATION.md) from planning onward: ship English and Russian, default a fresh launch to English, expose a globe selector in the main and pause/settings menus, and preserve the choice without resetting progress. A reference supplied in one language is not a reason to omit the other. |
| game-qa / release checks | Apply [LOCALIZATION.md](LOCALIZATION.md): all shipped languages have the same quality/voice standard. Check while authoring, verify new content before release, then review changes and affected context. Include selector, persistence, catalog and layout checks without redundant rewrites or gameplay runs. |
| asset-pipeline suggests Git LFS | Do not enable LFS by default; commit assets as regular files (≤25 MiB each). Use LFS only with the owner's approval: CI fetches LFS files, but every publish uses LFS bandwidth. |
| game-qa or viral-game Step 3.5 sets the `test` script | Expected: `npm test` belongs to the game; platform checks run separately in the shared workflow. Browser tests must run headless in CI (the Ubuntu runner has Chrome). Tests that need the built game go in the workflow's `post-build-command` input; ask the owner before changing the workflow file. |
| Deploy to here.now, GitHub Pages, Vercel, Netlify or another host; add `npm run deploy` | Replace with a push to `main`; the existing Actions workflow publishes. No second publisher, no new Worker, no per-game tokens. |
| Monetization: Play.fun, sub.games, wallets, leaderboards, gateable features | Off for this platform unless the owner explicitly changes that scope. |
| Paid generators or API keys (Meshy, World Labs, etc.) | Only with the owner's explicit authorization. Free build-time tools are fine; keep licenses and attributions. |

### viral-game specifically

- Step 0: do not ask about monetization; use `none`. Step 1.25 (gateables) is therefore skipped.
- Step 1: scaffold into this repository using the recipe above, not into a separate project directory.
- Step 4 (here.now) and Step 5 (monetize): skip. Publish by pushing to `main` after filling `public/game.json` and setting `status`.

## Existing games

Resume from the game's `docs/STATE.md`, `docs/gameplan.md`, `docs/tech.md`, ADRs and milestones; never rerun fresh-project scaffolding over a game or swap its approved stack. Preserve existing save keys, device exceptions and game-specific checks. Game-specific notes live in that game's `docs/platform-project-notes.md`.

The bilingual default applies to new games created from this template. When localization is requested for an existing game, use the same standard while preserving its saves and approved content. Do not treat a template documentation update alone as authorization to rewrite or migrate existing games.

If a real requirement cannot satisfy both the skill and the platform, explain the conflict instead of silently dropping either side. Explicit user instructions take precedence.

## Platform discovery and domain

Use https://procrastinate.games/catalog-manifest.json for the current published collection; never infer the collection from an old README or a fixed list of examples. New games use `https://<slug>.procrastinate.games/` via `useCustomDomain: true` in public/game.json. Keep this setting when scaffolding. Publishing is still owned by the shared workflow, including automatic custom-domain attachment; no extra hosting service or per-game DNS setup.
