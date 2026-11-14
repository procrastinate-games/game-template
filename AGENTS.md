# Games to Procrastinate To

<!-- platform:bootstrap:start — preserve this loader; common policy is remote, not copied here. -->
## Load current platform rules at session start

1. Resolve `procrastinate-games/game-template` branch `main` to a commit SHA using GitHub tools/API or `gh api repos/procrastinate-games/game-template/commits/main --jq .sha`.
2. Fetch and read `PLATFORM.md` at that exact SHA before planning or editing. Source: `https://github.com/procrastinate-games/game-template/blob/main/PLATFORM.md` (raw/API access is fine). Read the central `VERSIONING.md` for game releases, `GAME-CREATOR.md` for game workflow, and `LOCALIZATION.md` for new games or localization/text work, all at the same SHA.
3. Reuse those fetched documents for this session; do not repeatedly fetch them or copy their full text into this repo. Record the policy SHA in the session handoff when one is written. Refresh at the start of the next session.
4. Central documents define shared platform policy; local sections and `docs/platform-project-notes.md` define this game's architecture and explicit owner-approved exceptions. Keep existing saves, origins, stack and exceptions. Local copies of old platform guides are historical references, not the current common policy. Explicit user instructions take precedence.
5. If remote access fails, say so and use a previously verified cached revision if available, identifying its SHA. Without a verified copy, continue independent inspection but do not guess new platform requirements or claim current-policy compliance; resolve access before policy-dependent publishing.

Keep this loader and the project-specific sections when regenerating agent instructions. `CLAUDE.md` and `GEMINI.md` should point here. A Markdown loader instructs compliant agents; GitHub does not automatically sync template descendants or enforce that every tool fetches policy.
<!-- platform:bootstrap:end -->

## Template-specific notes

This repository is a codeless starter and the canonical home of shared policy. Edit `PLATFORM.md`, `LOCALIZATION.md`, `VERSIONING.md` and the integration guide here; do not add a game engine to the template. For an authorized policy edit in this repository, the local files being reviewed are the proposed next policy revision; validate and publish them here without requiring a circular remote update first. Preserve `.github/workflows/publish.yml` and the draft manifest. Track unfinished shared integrations in `TODO.md`.
