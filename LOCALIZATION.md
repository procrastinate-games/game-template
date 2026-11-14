# Language and editorial standard

This is the shared standard for **new games created from this template**. Apply it during planning, UI scaffolding, content authoring and release QA. Explicit owner instructions take precedence; do not infer a different language policy from the language of a brief, a reference game or a sample dialogue.

## Required languages and first launch

- Ship complete **English (`en`) and Russian (`ru`)**. Additional languages are out of scope unless requested. Structure the locale catalogs so another language can be added later without duplicating gameplay code.
- On a fresh launch with no saved language preference, use **English**, including when the browser or operating system is Russian. Do not auto-select Russian from `navigator.language`.
- Restore an explicitly selected, supported language on later visits. An unavailable or invalid preference falls back safely to English.
- Persist the preference separately from campaign/run data, under a namespaced key such as `pg:<slug>:locale`. Restarting a run must retain the language choice. Do not rename, reset or migrate existing game save keys or formats when adding localization.
- In a finished game's `public/game.json`, report `"languages": "English, Russian"` only after both versions are implemented and verified. The catalog's title, descriptions, controls and other prose remain in English, as required by the publishing contract. Do not invent new manifest fields for the default locale.

## Visible globe selector

- Use a recognizable **globe icon** for the language button. Prefer a bundled SVG or an engine-drawn icon with reliable rendering; no external icon service is needed. Do not substitute country flags for languages.
- Put the button in a consistent, prominent menu position, normally the **top-right of the main menu** and the **top-right of the in-game pause/settings menu**. If the game has no pause menu, provide the equivalent accessible in-game menu. Keep it visible without scrolling or opening a nested submenu.
- Display the current language beside the globe where space permits. Opening it offers exactly **English** and **Русский**, written in their own languages, with the active choice indicated.
- Make the globe control discoverable in either language: use an accessible name such as `Language / Язык`, a visible focus state and keyboard/touch activation. The icon alone must not require a hover tooltip to be understood or operated. Touch targets must be at least 44×44 CSS pixels.
- Switching language updates the current screen and active content in place, including an open dialogue, quest panel or tutorial. Preserve gameplay state, progress, inventory, score and current interaction; do not restart the game or require a page reload.
- Update the document language (`<html lang="en">` / `"ru"`) and relevant accessible labels as well as visible text. Support iframe embedding without changing the parent page.

## Localized content and implementation

- Keep **all player-facing strings** in locale catalogs or the engine's localization resources, referenced by stable keys. This includes menus, HUD, controls, tutorials, dialogue, quests, item/ability names and descriptions, status effects, notifications, errors, map labels and win/lose screens. Text drawn on Canvas/WebGL or embedded in artwork also needs a localized rendering or text-free alternative.
- Separate stable internal IDs, mechanics and save data from display text. Never use translated names as save keys or gameplay identifiers. Preserve any names or dialogue that the owner explicitly requires verbatim.
- Store localized messages with their parameters when they need to remain visible across a language switch, such as a combat log. Do not leave previously generated UI messages in the old language.
- Use matching keys and interpolation parameters in both catalogs. Missing translations, raw keys and untranslated placeholders must be fixed before release; an English fallback is not a completed Russian version.
- Avoid constructing sentences by concatenating fragments. Handle Russian plural forms and grammatical agreement, and use locale-aware number formatting when relevant. Choose a small, consistent glossary for resources, actions, statuses and time units. If a player action and an enemy round differ, explain and name them consistently.
- Check Cyrillic glyph coverage and allow for longer labels. Do not hardcode English-only widths or put important translated text where it will be cropped.
- Use lightweight local resources or the existing stack's localization support. Neither version may require a runtime translation API, network service, login or paid dependency. Do not add a large framework solely for two small catalogs.

## Editorial quality is a release requirement

Apply the **same quality standard to every shipped language**, including English, Russian and any languages explicitly added later: natural phrasing, grammatical correctness, clear meaning, consistent terminology and the intended style/humor. English being the default does not give it a lower or higher editorial standard. It must retain the game's personality rather than becoming dry, generic copy. A technically accurate translation can still be awkward or unsuitable for the voice. Do not treat successful tests, a clean build or text already present in a design document as proof of editorial quality.

- Treat design-document labels as working names unless explicitly marked immutable. Improve awkward names while preserving their meaning, the mechanics and the intended setting. For example, a working label such as `Жар-печать` may read better as `Огненная печать`; this is an editorial choice, not a rule to rename every unusual fantasy term.
- Keep approved dialogue as a voice reference. Preserve deliberate jokes, wordplay, dialect, character voices, poetic language and an explicitly requested unusual style. Adapt humor thoughtfully between languages rather than forcing a literal translation. Do not flatten all characters into neutral interface prose.
- Use clear, direct language for instructions, quests and system messages. Tell the player what happened, what to do, or what became available. Avoid developer shorthand, accidental calques, bureaucratic wording and unnecessary ceremonial fantasy phrasing in ordinary UI.
- Brevity must preserve natural syntax and meaning. For example, `Одна руна найдена. Верните её Антариону в библиотеке` is better expressed as `Вы нашли забытую руну. Отнесите её Антариону в библиотеку` when that is the actual objective.
- Recheck numbers, costs, durations, ranges and quest conditions against the implemented rules. Improving prose must not change the rules or promise an action that is not available.

Before the first release, complete **one bounded editorial check of all player-facing text in each shipped language**: read coherent groups of strings, review dialogue and quests in sequence, unify terminology, and inspect the result on game screens. Make corrections autonomously within the approved voice and scope. Record intentional stylistic exceptions so later editing does not erase them. Do not claim human/native-speaker review unless it actually occurred.

## Efficient review

- Edit each language **while authoring it**; write idiomatic text immediately instead of generating rough literal translations for a later full rewrite.
- Reuse a short glossary and approved voice examples. Keep good, unchanged strings rather than paraphrasing them to demonstrate review.
- Review first-release catalogs in coherent batches with relevant mechanics/context, without repeatedly rereading the entire codebase or retranslating approved content.
- After edits, review **changed strings and affected context**: connected dialogue/quest steps, shared terms, grammatical variants and parameters. Broaden only when changes affect more content; do not routinely re-review or rewrite whole catalogs.
- Automate key/parameter checks. Separate agents and repeated unchanged gameplay routes are not required for copy edits; run checks relevant to changed behavior/layout.
- Keep QA notes to reviewed languages/scope, issues/fixes and intentional exceptions. Do not print catalogs or per-string explanations unless requested. Reduce duplicate work while retaining full coverage for each new language.

## Required verification

Include these checks in the game's ordinary QA, using the existing test tools where possible:

- A fresh browser context, including one configured for Russian, starts the game in English.
- The visible globe buttons work with keyboard and touch in the main and in-game menus; both language names and the active choice are readable.
- Switching English → Russian → English updates the current UI and active content without changing gameplay state or losing progress.
- The selected language survives reload and a new run. Missing/invalid preferences safely select English. Storage failures do not prevent language switching during the current session.
- Catalog key/parameter completeness is checked automatically for every shipped language. Dynamic messages and representative plural/grammar cases are checked where relevant (for example Russian counts of 1, 2 and 5).
- Every shipped language is inspected at supported desktop and mobile sizes, including the longest labels, required glyphs, open menus and dialogue/quest screens. Use representative screens rather than replaying identical gameplay separately for every locale.
- Editorial coverage is recorded for every shipped language: complete text coverage for a new release/language, then changed text and affected context for later edits. Summarize the actual review, test/build outcomes and remaining limitations concisely in release QA notes.

This template is intentionally codeless. These are requirements for the game the agent builds; the template's own publishing check validates only its draft manifest and does not automatically prove a future game's localization or language quality.
