# ZCorvus Icons v3

Two packages are generated from the same SVG sources:

| Package | Use |
| --- | --- |
| `@zcorvus/icons` | Framework-independent definitions, server-side SVG strings, and an explicit Web Component registry |
| `@zcorvus/icons-react` | React components with pack-scoped autocomplete and a dynamic subset registry |

The v3 beta starts fresh: this repository builds and releases only the two v3 packages. Removing the old pack packages and `@zcorvus/icons-web` from this workspace does not unpublish any previously released npm versions. No v3 package has a runtime dependency on the other.

## React

```tsx
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react/mina';

export function Status() {
  return <><MinaCheck size={20} aria-label="Ready" /><MinaCheckSolid className="text-green-600" /></>;
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

`renderSvg` works in Node, edge runtimes, or a browser. It takes generated, trusted definitions and escapes supplied attributes. A missing label makes the SVG decorative.

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

## Development

`pnpm run build` generates the two package `dist` trees from `icons/`. `pnpm run check` builds, typechecks, tests, and checks package exports. `pnpm run pack:check` inspects both tarballs. Publishing is a separate manual GitHub Action, defaulting to the `beta` npm tag.
