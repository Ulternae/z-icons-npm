# ZCorvus Icons

[![CI](https://github.com/Ulternae/z-icons-npm/actions/workflows/ci.yml/badge.svg)](https://github.com/Ulternae/z-icons-npm/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Open-source icon infrastructure for React and framework-independent web applications. Generate typed React components, SVG definitions, and Web Components from the same SVG sources, and choose explicitly which icons your application imports.

[Documentation and icon explorer](https://icons.zcorvus.com/) · [Contributing](CONTRIBUTING.md) · [Roadmap](ROADMAP.md) · [Changelog](CHANGELOG.md) · [Security](SECURITY.md)

## Why ZCorvus Icons?

Applications need both fixed icons and icons selected at runtime. ZCorvus supports both through explicit imports and registries:

- **Static icons:** named exports with editor autocomplete, or direct imports of individual modules.
- **Dynamic icons:** a typed registry containing the icons selected by the application; complete pack maps are available when needed.
- **Shared artwork:** React, server-rendered SVG strings, and browser custom elements use definitions generated from the same source catalog.
- **Accessibility:** generated icons are decorative by default and support accessible labels for meaningful icons.
- **Independent packages:** the core has no framework runtime dependency; React is a peer dependency of the React adapter. Neither package depends on the other at runtime.

Static ESM imports allow compatible bundlers to remove unused exports. A complete pack map includes all icons in its selected pack and variant. The final bundle size depends on the bundler and application configuration.

## Packages and release status

| Package | Use |
| --- | --- |
| [`@zcorvus/icons`](https://www.npmjs.com/package/@zcorvus/icons) | Framework-independent definitions, SVG strings, name lists, and an explicit Web Component registry |
| [`@zcorvus/icons-react`](https://www.npmjs.com/package/@zcorvus/icons-react) | React components with TypeScript autocomplete and an explicit dynamic registry |

The current API is **v3**, published as **`3.0.0-beta.1`** for both packages under the npm `beta` tag. The `latest` tag still points to the legacy `0.1.x` API. Install the beta explicitly to use the examples below:

~~~bash
# React
pnpm add @zcorvus/icons-react@3.0.0-beta.1

# Framework-independent SVG or Web Components
pnpm add @zcorvus/icons@3.0.0-beta.1
~~~

Install both when an application uses both APIs. The library requires no ZCorvus account, API key, or hosted service.

## Icon packs

The repository contains 19,833 SVG source files, including style variants, across five packs. This is a source-file count, not a count of unique icon names.

| Pack | Default variant | Other variants |
| --- | --- | --- |
| `core` | `regular` | `regular-duo`, `solid` |
| `neo` | `regular` | `regular-duo`, `solid` |
| `mina` | `light` | `solid` |
| `bru` | `solid` | — |
| `lan` | `light` | `thin`, `regular`, `solid` |

## React

```tsx
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react/mina';

export function Status() {
  return (
    <>
      <MinaCheck size={20} aria-label="Ready" />
      <MinaCheckSolid className="text-green-600" aria-hidden="true" />
    </>
  );
}
```

The pack entry provides component-name autocomplete. To import one module directly, use `@zcorvus/icons-react/mina/mina-check`. The default variant omits a suffix; other variants append `Solid`, `Regular`, `RegularDuo`, `Light`, or `Thin` as appropriate. The package root exports `createZIcon` only, so importing it never loads a catalog.

For dynamic names, choose the icons available in this screen:

```tsx
import { createZIcon } from '@zcorvus/icons-react';
import { MinaCheck, MinaX } from '@zcorvus/icons-react/mina';

const StatusIcon = createZIcon({ mina: { light: { check: MinaCheck, x: MinaX } } });

<StatusIcon pack="mina" name="check" size={20} />;
```

TypeScript autocompletes `pack`, `variant`, and `name` from this registry. `StatusIcon.has(pack, name, variant?)` is available for values from an API. An entire pack can be opted into with `@zcorvus/icons-react/packs-data/mina`; other variants have paths such as `@zcorvus/icons-react/packs-data/mina/solid`. Full pack maps load that pack's icons, so use them only when users can choose any name.

## Framework-independent usage

```ts
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';

const html = renderSvg(check, { size: 20, ariaLabel: 'Ready' });
```

`renderSvg` works without a browser and escapes supplied attribute values. It expects trusted, generated icon definitions; it is not a sanitizer for arbitrary SVG markup. A missing label makes the SVG decorative.

For a picker or search interface, use name lists without importing SVG bodies:

~~~ts
import { minaIconNames } from '@zcorvus/icons/names/mina';
~~~

For browser components, register an explicit set once:

```ts
import { defineZIcon } from '@zcorvus/icons/web';
import check from '@zcorvus/icons/data/mina/mina-check';

defineZIcon({ mina: { light: { check } } });
```

```html
<z-icon pack="mina" name="check" size="20" aria-label="Ready"></z-icon>
```

Whole-pack maps are available at `@zcorvus/icons/packs-data/mina`, with variant paths under `/packs-data/mina/solid` etc. There is no implicit global icon registry.

Resolve package imports through your bundler or an import map. Browser rendering requires Custom Elements support. Calls during server rendering do not register a browser element; run registration in the browser entry point.

For icon-only buttons, label the button itself and keep the icon decorative. Icons use `currentColor` so they can inherit application styling.

## Development

Use **Node.js 22 or newer** and **pnpm 11.0.9**, as specified in `package.json`.

~~~bash
pnpm install --frozen-lockfile
pnpm run build
pnpm run check:fast
~~~

The build generates both packages from `icons/`; edit the sources rather than generated `dist/` files.

| Command | Purpose |
| --- | --- |
| `pnpm run build` | Generate both packages and their TypeScript declarations |
| `pnpm run check:fast` | Check script syntax and generator, filesystem, and license tests |
| `pnpm run check:full` | Build, typecheck, run tests, and verify generated output |
| `pnpm run pack:check` | Inspect both npm tarballs |
| `pnpm run release:check` | Run full checks and tarball validation |

CI runs the fast checks, full checks, and tarball validation. Publication uses the manual [Release package workflow](.github/workflows/release.yml); see the [release guide](docs/releasing.md). Source maintenance commands are documented in the [scripts guide](docs/scripts/README.md).

## Community and maintenance

**Primary maintainer:** [@Ulternae](https://github.com/Ulternae), responsible for API direction, contribution review, and releases.

Bug reports, documentation improvements, accessible usage examples, and contributions to the generator are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Report vulnerabilities through the process in [SECURITY.md](SECURITY.md).

The project is at an early stage of adoption. Published versions, dated download figures, and maintenance evidence are recorded in [Project status](docs/project-status.md). Future work is described in the [roadmap](ROADMAP.md), including exploration of React Native support.

## License and attribution

ZCorvus Icons is distributed under the [MIT License](LICENSE).

The Mina pack contains artwork from [Myna UI Icons](https://github.com/praveenjuge/mynaui-icons) by Praveen Juge. Its original MIT notice is preserved in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md) and included in both published packages. Contributions containing third-party artwork must preserve its provenance and compatible license notices.
