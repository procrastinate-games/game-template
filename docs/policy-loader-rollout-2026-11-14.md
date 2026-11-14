# Central policy loader rollout · 2026-11-14

This is a historical change/verification record, not the current game catalog. Discover current games from the live catalog and organization APIs for future rollouts.

Central policy introduced at game-template commit `7622de3214b5f7d85cb03a8f12ea1020a4e8aad7`. Each game now resolves the central main revision at session start, reads PLATFORM.md and the relevant standards at that SHA, then reuses them during that session. The local root AGENTS.md retains game-specific instructions; Claude/Gemini pointers lead there. Offline access is reported honestly with a verified cached revision when available.

| Repository | Markdown rollout commit |
| --- | --- |
| [adventurers-shop](https://github.com/procrastinate-games/adventurers-shop) | [8d82aec](https://github.com/procrastinate-games/adventurers-shop/commit/8d82aecdd9f698b0f4e407d63cd03e5198e9fdfe) |
| [bee-rush](https://github.com/procrastinate-games/bee-rush) | [7c09d7b](https://github.com/procrastinate-games/bee-rush/commit/7c09d7bcf21f17377bc2439f229d5ad5d5dee6a9) |
| [blades-and-banners-two-fronts](https://github.com/procrastinate-games/blades-and-banners-two-fronts) | [e6fe407](https://github.com/procrastinate-games/blades-and-banners-two-fronts/commit/e6fe407f9059d4b98f0c4f076fa53839e96f0d36) |
| [circuit-runner](https://github.com/procrastinate-games/circuit-runner) | [d498e00](https://github.com/procrastinate-games/circuit-runner/commit/d498e00c968982f10ca9cda01f1700aadef166bb) |
| [duck-bridge-builders](https://github.com/procrastinate-games/duck-bridge-builders) | [8a5570b](https://github.com/procrastinate-games/duck-bridge-builders/commit/8a5570beb853d8c35c5557a96b11d86a938593fc) |
| [happy-farm-rush](https://github.com/procrastinate-games/happy-farm-rush) | [759c63a](https://github.com/procrastinate-games/happy-farm-rush/commit/759c63adfe50e7d10ace0c4734aeb9a4694b70ab) |
| [runes-and-ruines](https://github.com/procrastinate-games/runes-and-ruines) | [5f3ad95](https://github.com/procrastinate-games/runes-and-ruines/commit/5f3ad95c8003db7d871c3d6850a99070c8612323) |
| [skyline-outlaws](https://github.com/procrastinate-games/skyline-outlaws) | [43fab8a](https://github.com/procrastinate-games/skyline-outlaws/commit/43fab8a83f9f6ccf2bf699fdb495d85811e698a2) |
| [tiny-town-merge](https://github.com/procrastinate-games/tiny-town-merge) | [da299bb](https://github.com/procrastinate-games/tiny-town-merge/commit/da299bb7fceca8996f7f14022aec4c3fcc6e8029) |
| [voxel-frontier](https://github.com/procrastinate-games/voxel-frontier) | [6bc0abf](https://github.com/procrastinate-games/voxel-frontier/commit/6bc0abf1c589245266776f9a88bec208b238fef7) |

Verification: remote document contents matched the reviewed proposals; GitHub compare responses contained only AGENTS.md and, where its pointer changed, CLAUDE.md. GEMINI.md already pointed to AGENTS.md. No source, assets, package/lockfile, game manifest, save schema or workflow files changed. Commit author and committer use the required kifrip identity. `[skip ci]` was used only for these documentation-only commits; no publishing runs were created for their SHAs.

Project-specific architecture and instructions were preserved, including Voxel Frontier's owner-approved desktop-only scope and Duck Bridge Builders' existing desktop controls and `duck-bridge-builders-save-v1` key. The template's central-policy commit passed its draft-manifest workflow. Infrastructure repositories (publisher/portal) were not given game-specific loaders; their pending version/build integration is in TODO.md.

Completed here: Markdown-level adoption of central rules and release-version discipline. Not implemented by this rollout: retroactive runtime versions, game-menu version labels, shared automatic tags/Releases or feedback build capture. Existing games adopt their real version/runtime changes on their next actual release, as required by VERSIONING.md and tracked in TODO.md.
