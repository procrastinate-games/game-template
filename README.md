# Make a new game

1. Choose **Use this template → Create a new repository**, select **procrastinate-games**, make it public, and name it with a kebab-case game slug.
2. Open it in your preferred AI and ask “Use PlayableIntelligence/game-creator to make a game about X”. It should follow `AGENTS.md` and [the game-creator integration guide](docs/game-creator.md), finish the game and its English `public/game.json`, and set `status` to `published`.
3. Push to `main`. GitHub Actions tests, builds and publishes it, then refreshes the portal automatically.

Your game URL is `https://pg-<repository-name>.register-c02.workers.dev/`. See **Actions → Publish game** for progress. No per-game Cloudflare setup or tokens are needed.

The initial template is a draft: it runs checks but publishes nothing. `hidden` publishes a game without a portal card. Include a 960×600 `public/cover.webp`; the portal captures the running game if it is missing. Template games can use canvas, Phaser, Three.js or DOM rendering; only the static `dist/` build contract matters.

Local development: `npm ci`, `npm run dev`. Before pushing: `npm test`, `npm run build`.

## Game Creator

This template uses [PlayableIntelligence/game-creator](https://github.com/PlayableIntelligence/game-creator) as the development workflow. `make-game` supports planned, multi-session projects; `viral-game` is available for a small one-session game. Game complexity is a design choice, not a template limit. The final game must still build as a static browser game for this platform.

If your AI supports the upstream installer, install the skill in the game project using `npx skills add playableintelligence/game-creator` (optionally `-a codex`, `-a claude-code` or another supported agent). This is a setup command, not something the template or Actions executes automatically. An AI without native skill support can read the upstream Markdown workflow and its linked phase documents; see the integration guide.

The upstream skill supplies game planning, architecture, assets, audio and QA. This platform supplies publishing: keep the existing Actions workflow, Wrangler configuration, metadata and catalog contract. The guide explains how to merge scaffold instructions and adapt the upstream deployment/monetization steps.
