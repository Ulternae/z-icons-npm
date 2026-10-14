# Changelog

This changelog records the public package lines and the major API changes represented by the repository history. Documentation changes awaiting a release are listed under Unreleased.

## Unreleased

- Expand the project overview, installation examples, and maintainer documentation.
- Add contribution and vulnerability-reporting guidance, a roadmap, issue forms, and a pull request template.
- Record dated public project metrics and preparation notes for an open-source maintainer application.

## 3.0.0-beta.1

Published to npm for `@zcorvus/icons` and `@zcorvus/icons-react` under the `beta` tag.

- Generate two independent packages from the shared SVG catalog.
- Provide framework-independent definitions, `renderSvg`, and `defineZIcon` in the core package.
- Provide named React exports by pack, direct icon modules, and `createZIcon` for explicit dynamic registries.
- Generate TypeScript declarations, name lists, and optional complete pack/variant maps.
- Include MIT licensing and third-party Myna UI attribution in both npm packages.
- Verify generated output, public API behavior, types, and npm tarball contents through repository tooling.

### Migration notes

The v3 API is a breaking change from the `0.1.x` line:

- Import React icons from a pack entry such as `@zcorvus/icons-react/mina`, or a direct icon path.
- Replace legacy dynamic wrappers with a `createZIcon` registry containing the components required by the application.
- Use `@zcorvus/icons/web` for explicit Web Component registration.
- Use `packs-data/<pack>/<variant>` deliberately when a complete set of icons is needed.

The repository builds only the two current packages. Legacy standalone pack packages and `@zcorvus/icons-web` are no longer generated here; removing their source directories does not unpublish historical npm versions.

Source references: [v3 implementation](https://github.com/Ulternae/z-icons-npm/commit/26fb6dac8) and [beta release preparation](https://github.com/Ulternae/z-icons-npm/commit/68608e4c0).

## 0.2.0 prototype

The v2 package-layout experiments were development work and were not published as a `0.2.0` npm release. They explored standalone React pack packages and a separate Web package before the v3 design.

Source reference: [v2 restructuring](https://github.com/Ulternae/z-icons-npm/commit/3943a7506).

## 0.1.x

The legacy public series includes `@zcorvus/icons` through `0.1.9` and `@zcorvus/icons-react` through `0.1.11`. These remain on npm's `latest` tag as of the [dated project-status snapshot](docs/project-status.md).

The series exposed an earlier core, React wrappers, and separate Web entry points. Consult the package documentation corresponding to the installed version when maintaining a legacy consumer.
