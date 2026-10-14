# ZCorvus Icons roadmap

This roadmap describes proposed open-source maintenance work. It is not a release schedule or a promise that every item will ship. Priorities can change with contributor feedback and maintainer capacity.

## Available today

- Framework-independent icon definitions, SVG-string rendering, and explicit Web Component registration.
- React components with per-pack exports, direct icon imports, and TypeScript declarations.
- Typed dynamic React registries and opt-in pack maps.
- Shared SVG sources, naming checks, automated tests, generated-output verification, and npm tarball checks.
- npm releases of both packages under the `beta` tag.

## Priorities for the v3 beta

- Gather reproducible compatibility reports from React, Next.js, browser Web Components, and common bundlers.
- Expand accessibility regression coverage for meaningful and decorative icons.
- Measure static imports, manual registries, and complete pack maps in representative consumer builds.
- Improve migration examples from the legacy `0.1.x` packages.
- Review SVG input handling, dependency updates, source attribution, and the release pipeline.
- Publish release notes and preserve clear evidence for API changes before a stable v3 release.

## Planned maintainer automation

- Propose bounded pull request reviews that highlight public API, type, accessibility, and licensing changes.
- Generate candidate regression cases for human review and validate them with the existing checks.
- Detect documentation examples that drift from generated exports and naming rules.
- Summarize dependency and release changes for maintainer review.

These workflows are planned. CI currently uses the scripts documented in [CONTRIBUTING.md](CONTRIBUTING.md); automated AI review and security coverage are not implied by this roadmap.

## Cross-platform exploration

Evaluate a React Native adapter based on the shared icon definitions. Before committing to a release, investigate rendering dependencies, import ergonomics, accessibility semantics, and whether the same generated naming contract works well on mobile.

Additional framework adapters will be considered where the existing core and Web Component APIs do not meet a concrete use case.

## Longer-term exploration

Explore reusable, accessible UI primitives that can consume these icons. A broader component library would require its own API design, scope, and maintenance plan; it is not part of the current icon packages.

Propose changes through [GitHub issues](https://github.com/Ulternae/z-icons-npm/issues). Reports and small contributions that support the beta priorities are especially useful.
