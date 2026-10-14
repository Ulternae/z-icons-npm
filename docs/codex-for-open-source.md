# Codex for Open Source application preparation

Prepared on **2026-10-14** for the public [Ulternae/z-icons-npm](https://github.com/Ulternae/z-icons-npm) repository.

Use the [official Codex for Open Source page](https://developers.openai.com/community/codex-for-oss) to reach the current application form. OpenAI considers project usage, ecosystem importance, active maintenance, and the applicant's role. Projects outside the usual criteria can explain their ecosystem value. Decisions and benefits are determined by OpenAI; see the [program terms](https://learn.chatgpt.com/docs/codex-for-oss-terms).

The application should focus on the public icon packages and their maintenance. Planned work below is a proposal, not a claim that AI automation, React Native support, or a broader UI library already exists.

## Repository evidence

| Topic | Evidence |
| --- | --- |
| Project utility and public APIs | [README](../README.md) and package examples |
| Maintainer | [@Ulternae](https://github.com/Ulternae), documented as primary maintainer |
| Open-source license | [MIT](../LICENSE) and [third-party notices](../THIRD_PARTY_LICENSES.md) |
| npm releases and adoption | [Dated project-status snapshot](project-status.md) |
| Active source maintenance | Linked implementation and release-preparation commits in the status snapshot |
| Validation and release process | [CI](../.github/workflows/ci.yml) and [release guide](releasing.md) |
| Community contribution process | [CONTRIBUTING](../CONTRIBUTING.md), issue forms, and the pull request template |
| Security reporting | [SECURITY](../SECURITY.md) |
| Future maintenance work | [ROADMAP](../ROADMAP.md) |

## Short application drafts

These drafts are each under 500 characters. Confirm the current form's wording and limits before submission, and adapt the statements to the maintainer's actual intentions.

### Why does this repository qualify?

ZCorvus Icons is an MIT-licensed library generating framework-independent SVG definitions, Web Components, and typed React components from 19,833 SVG sources. Explicit imports and dynamic registries support accessible UI development without an implicit catalog. Both packages are published on npm; CI checks runtime behavior, TypeScript contracts, generated output, and tarball contents.

### How will you use API credits?

We would use API credits for maintainer-reviewed pull request analysis, candidate regression tests, dependency review, accessibility checks, documentation/export consistency, and release-note preparation for the public icon packages. Outputs would be validated by CI before merging. Planned compatibility work includes investigating a React Native adapter.

### Additional information

The project is early in adoption. npm recorded 273 downloads of @zcorvus/icons and 247 of @zcorvus/icons-react from 2026-09-13 through 2026-10-12. These count package downloads across releases, not unique users or beta adoption. Both current packages are available as 3.0.0-beta.1. The roadmap prioritizes compatibility, accessibility, and reliable releases.

Refresh adoption figures before copying the final paragraph if submitting after the snapshot period.

## Intended use of support

Proposed API work should remain bounded to open-source maintenance:

- Draft pull request review findings and documentation updates, with a maintainer deciding what to merge.
- Suggest regression cases for SVG rendering, generated types, dynamic selection, and accessibility behavior.
- Review dependency and release changes for further investigation, with reproducible evidence rather than unsupported findings.
- Prepare release notes and migration guidance from actual code changes.

If requesting Codex Security, relevant areas include the SVG trust boundary, generated output, dependencies, and publication tooling. Access is subject to program review; the repository does not claim an existing security certification or completed comprehensive audit.

## Before submitting

- [ ] Push the documentation changes so reviewers can see them in the public repository.
- [ ] Confirm the applicant is the primary or a core maintainer with responsibility for these packages.
- [ ] Fill in the applicant's name, ChatGPT account email, GitHub username, and OpenAI organization ID in the application itself. Keep account identifiers and credentials out of this public document.
- [ ] Select the benefits actually requested and verify the proposed workflows above match the maintainer's intentions.
- [ ] Refresh the public metrics and include only claims supported by the repository and npm.
- [ ] Read the current program terms and submit the application.

The following are project improvements, not asserted OpenAI application requirements:

- [ ] Publish a GitHub prerelease for the existing npm beta using the [prepared release notes](releases/3.0.0-beta.1.md).
- [ ] Add a GitHub repository description and topics through the repository's About settings.
- [ ] Enable GitHub private vulnerability reporting if desired; the security policy includes a fallback when it is unavailable.
- [ ] Review the public repository history for accidentally exposed credentials and resolve any findings.

Suggested GitHub description:

> MIT-licensed SVG icon infrastructure with framework-independent definitions, typed React components, and explicit Web Component registries.

Suggested topics: `icons`, `svg`, `react`, `typescript`, `web-components`, `accessibility`, `npm`.
