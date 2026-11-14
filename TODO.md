# Platform planning

Keep tasks here, not a fixed list/count of games. Discover current games from the live catalog and organization repositories when executing a rollout.

## Shared rules and existing-game adoption

- [x] Make `PLATFORM.md` the canonical common policy, with linked localization/versioning/integration standards in this repository and a session-start remote-policy loader in AGENTS.md.
- [ ] Roll the loader and mandatory versioning reference into all current game repositories, preserving project architecture, owner-approved device exceptions, saves and local verification instructions. Verify Markdown-only diffs and remote files; record the rollout commit/verification in the completion note.
- [ ] At each existing game's next actual player-facing update, establish/continue its semantic version, add a short CHANGELOG entry, expose the version in its menus and tie the deployed release to its exact source SHA. This runtime/release adoption is separate from the Markdown-only rollout; never manufacture old versions or reset player saves.

## Shared publisher and portal integration

- [ ] Define and document the version/build metadata contract shared by game-template, game-publisher and pg-website, preserving existing manifest compatibility and avoiding independent version labels.
- [ ] In game-publisher, validate versions and exact source SHA; automatically create immutable tags/GitHub Releases only after successful deployment, reusing the changelog. Make retries idempotent and handle concurrent pushes without tagging the wrong build. Exclude documentation-only changes and avoid version-bump commit loops.
- [ ] In pg-website, display the deployed game version and attach running version/build to feedback. For iframe games, validate message origin/source and distinguish an old loaded tab from the latest catalog entry; handle games not yet migrated honestly.
- [ ] Validate the end-to-end path: direct-main update, failed deployment, retry, concurrent pushes, old-tab feedback, unchanged docs and existing saves.

Instruction changes do not themselves implement publisher automation, a game UI, manifest metadata or feedback capture. Keep these items open until the corresponding behavior is implemented and verified.
