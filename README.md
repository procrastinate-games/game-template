# Make a new game

1. Choose **Use this template → Create a new repository**, select **procrastinate-games**, make it public, and name it with a kebab-case game slug.
2. Open it in your preferred AI and ask “make a game about X”. It should follow `AGENTS.md`, finish the game and its English `public/game.json`, and set `status` to `published`.
3. Push to `main`. GitHub Actions tests, builds and publishes it, then refreshes the portal automatically.

Your game URL is `https://pg-<repository-name>.register-c02.workers.dev/`. See **Actions → Publish game** for progress. No per-game Cloudflare setup or tokens are needed.

The initial template is a draft: it runs checks but publishes nothing. `hidden` publishes a game without a portal card. Include a 960×600 `public/cover.webp`; the portal captures the running game if it is missing. Template games can use canvas, Phaser, Three.js or DOM rendering; only the static `dist/` build contract matters.

Local development: `npm ci`, `npm run dev`. Before pushing: `npm test`, `npm run build`.
