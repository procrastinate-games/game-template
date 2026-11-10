# Make a new game

1. Choose **Use this template → Create a new repository**, select **procrastinate-games**, make it public, and name it with a kebab-case game slug.
2. Install the skill in the new repository: `npx skills add playableintelligence/game-creator` (optionally `-a claude-code`, `-a codex` or another agent).
3. Ask your AI: “Make a game about X”. It follows `AGENTS.md` and [GAME-CREATOR.md](GAME-CREATOR.md): plans the game with you, builds it, fills the English `public/game.json` and sets `status` to `published`.
4. Push to `main`. The shared [game-publisher](https://github.com/procrastinate-games/game-publisher) workflow tests, builds and publishes it, then refreshes the portal automatically.

Your game URL is `https://pg-<repository-name>.register-c02.workers.dev/`. See **Actions → Publish game** for progress. No per-game Cloudflare setup or tokens are needed.

The template contains no game code: the skill scaffolds the engine it picks with you (canvas, Phaser, Three.js, DOM…). Until then `status` is `draft` and CI only checks `public/game.json`. `hidden` publishes a game without a portal card. Include a 960×600 `public/cover.webp`; otherwise the portal captures the running game.
