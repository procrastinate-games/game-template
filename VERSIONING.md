# Game version and release discipline

This is mandatory for new games and for the next player-facing update of an existing game. Direct pushes to `main` remain supported. A game version describes a ready public update, not every working commit.

## Version source and change notes

- Use SemVer `MAJOR.MINOR.PATCH`, independently per game. First finished public release: `1.0.0`; unreleased development may use `0.x.y`.
- Keep the authoritative version in `package.json`; synchronize the root package version in the lockfile, using `npm version <version> --no-git-tag-version` where appropriate. Do not create a placeholder package manifest in a docs-only repository.
- For an existing game, inspect its package version, changelog, published tags and release history first. Continue credible existing release numbering; never reset or renumber published versions. If it was published without meaningful versioning, establish `1.0.0` with the next actual game release and state that this begins tracked releases. Do not invent historical releases or change runtime files merely for this instruction rollout.
- Before pushing a ready player-facing update, the agent chooses the bump autonomously: PATCH for bug fixes/copy/UI corrections; MINOR for added playable features/content; MAJOR for a substantial incompatible redesign of core game rules or a new edition. Reset lower components according to SemVer. An ordinary balance fix is not automatically MAJOR.
- Update `CHANGELOG.md` with the version and **1–3 short player-facing bullets** using one established documentation language. Reuse this entry for release notes; do not generate duplicate essays, reanalyse the entire Git history or require a separate agent. The agent already knows the change it made.
- A collection of working commits can form one release. With publish-on-main, push a coherent ready update with its version/notes rather than repeatedly publishing half-finished changes. Documentation-only changes and retries of the same release do not increment the game version.

## Commit and deployment identity

- Every published version must identify the exact full source commit SHA. Keep version, source SHA and successful deployment outcome in release records/handoff; distinguish the latest repository commit from the actually deployed commit.
- After a successful verified game deployment, create immutable tag `v<version>` on **that deployed SHA**, then create/update its GitHub Release using the existing changelog entry. Do not tag a failed deployment, use a later moving HEAD, force-move a published tag or publish different game content under the same released version. Fixing a failed, never-published candidate can retain the candidate version.
- Automatic tag/Release creation is a planned shared-publisher integration (see TODO.md), not something this Markdown already implements. Until supported, the agent performs the same post-deployment steps with available GitHub tools and verifies the result; do not add a second deployment workflow or commit loop.
- The source SHA is the precise build identifier. A game can have many working build SHAs between two semantic releases; this is not a reason to bump MINOR on each commit.
- Keep save-schema versions independent from game versions. A text fix must not reset or migrate saves.

## UI, manifest and feedback integration

New/updated games should expose their release version in the main and pause/settings menus as part of versioning implementation, using the authoritative value rather than a separately maintained label. Bind build identity to the same artifact. Do not claim this exists in an old game after only adding Markdown instructions.

The shared manifest/build metadata contract and website feedback plumbing are tracked in TODO.md. Coordinate any manifest extension with publisher/portal validation; do not invent unsupported fields or change `schemaVersion` unilaterally. Feedback must identify the version actually running in the player's tab, including an old tab after a new release, rather than blindly attaching the newest catalog version.

## Minimum release check

Confirm version/notes match the actual update; run the relevant required game checks/build/manifest validation; verify deployment; verify the tag/Release targets its source SHA. Report the version, a concise summary and deployment link. A documentation-only commit does not require these game-release operations.
