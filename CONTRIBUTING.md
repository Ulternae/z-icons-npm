# Contributing to ZCorvus Icons

Thanks for helping maintain the icon library. We welcome reproducible bug reports, documentation corrections, accessibility improvements, generator fixes, and icon contributions with clear licensing.

## Discuss a change

Use [GitHub issues](https://github.com/Ulternae/z-icons-npm/issues) to report bugs or propose features. For API changes, new packs, or new framework adapters, describe the use case before investing in a large implementation.

For a bug, include the package version, runtime, framework or bundler, import path, expected behavior, and a minimal reproduction. For vulnerabilities, follow [SECURITY.md](SECURITY.md) rather than a public bug report.

## Local setup

Use Node.js 22 or newer and pnpm 11.0.9, matching the workspace manifest and CI.

~~~bash
git clone https://github.com/Ulternae/z-icons-npm.git
cd z-icons-npm
pnpm install --frozen-lockfile
pnpm run build
~~~

The workspace installs its own packages through workspace links. Generate their outputs before running typechecks or tests that import the public packages. Local development does not require publishing credentials.

## Where to make changes

| Path | Responsibility |
| --- | --- |
| `icons/<pack>/<variant>/` | SVG source artwork |
| `scripts/build-v3.js` | Package modules and declaration generation |
| `scripts/build/` | Source collection, naming, SVG handling, and output writing |
| `packages/icons/src/` | Framework-independent rendering and browser registration |
| `packages/icons-react/src/` | Dynamic React registry |
| `tests/` | Runtime, generator, filesystem, license, and TypeScript cases |
| `docs/` | Maintenance, release, and project documentation |

Edit source files rather than `packages/*/dist/`. Generated outputs are ignored by Git and are rebuilt by CI. If you change generated APIs or types, update their generator and the relevant documentation together.

## Icon artwork and licenses

Use an existing pack and variant when appropriate. File names determine public icon names, component names, and import paths; keep them consistent with neighboring sources. See the [icon maintenance guide](docs/scripts/icon-maintenance.md) for duplicate and variant tooling.

Only submit artwork that you own or have permission to distribute under a compatible open-source license. Include the original source and copyright notice for third-party artwork, and update `THIRD_PARTY_LICENSES.md` when needed. Do not remove the Myna UI attribution.

Review the effects of source maintenance commands before applying them: optimization and duplicate-removal commands can rewrite or remove SVG files.

## Validate a change

For generator or source changes, start with:

~~~bash
pnpm run check:fast
~~~

For runtime, generated export, or TypeScript changes:

~~~bash
pnpm run check:full
pnpm run pack:check
~~~

The full check builds both packages, typechecks public API examples, runs tests, and verifies generated output. Tarball checks validate what will be distributed through npm. CI runs these checks for pull requests.

For documentation-only changes, review examples against the current public API and check relative links; a full icon build is usually unnecessary.

## Pull requests

Explain the problem, the resulting behavior, and the validation you performed. Keep changes focused and include a regression case when changing behavior that could recur. Note any change to import paths, icon names, defaults, accessibility behavior, or bundle inclusion.

The maintainer reviews API direction, licensing, and release impact. Releases follow [docs/releasing.md](docs/releasing.md); contributors do not need npm or GitHub publishing credentials.

Treat other contributors respectfully, keep reviews focused on the code, and avoid harassment or personal attacks. By contributing, you agree that your contribution can be distributed under the project's MIT license, while retaining any required third-party notices.
