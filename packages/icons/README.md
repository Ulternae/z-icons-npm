# @zcorvus/icons

Framework-agnostic SVG icon package for ZCorvus icons.

Browse all available icons at [icons.zcorvus.com](https://icons.zcorvus.com/).

## Installation

```bash
pnpm add @zcorvus/icons
```

Use this package when you need raw SVG strings, icon names, icon types, or framework-agnostic helpers. For React components, use `@zcorvus/icons-react`.

## SVG Strings

Import SVG strings from the `svg` entry:

```ts
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons/svg';

console.log(MinaCheck);
// '<svg ...>...</svg>'
```

Direct file imports are also available:

```ts
import MinaCheck from '@zcorvus/icons/svg/mina-check';
```

These exports are framework-agnostic. Render them with the mechanism your framework provides for trusted SVG/HTML strings.

```tsx
// React example
import { MinaCheck } from '@zcorvus/icons/svg';

export function RawIcon() {
  return <span dangerouslySetInnerHTML={{ __html: MinaCheck }} />;
}
```

## Icon Names

Use icon name arrays when building explorers, search indexes, pickers, or validation UIs.

```ts
import { coreIconNames, neoIconNames, minaIconNames } from '@zcorvus/icons/names';

console.log(minaIconNames.includes('search'));
```

## Types

Use type-only imports so TypeScript removes them from runtime bundles.

```ts
import type {
  CoreIconName,
  NeoIconName,
  MinaIconName,
  AllIconNames,
  IconPack,
  IconVariant,
} from '@zcorvus/icons/types';
```

## Runtime Helper

Use `getIconSvg` when pack, name, or variant are dynamic.

```ts
import { getIconSvg } from '@zcorvus/icons';

const svg = getIconSvg('mina', 'search', 'solid');
```

`getIconSvg` prioritizes dynamic lookup ergonomics and can include the icon dictionaries. Prefer direct SVG imports when bundle size is critical.

## Package Entries

```ts
import { getIconSvg } from '@zcorvus/icons';
import { MinaCheck } from '@zcorvus/icons/svg';
import MinaCheck from '@zcorvus/icons/svg/mina-check';
import { minaIconNames } from '@zcorvus/icons/names';
import type { MinaIconName } from '@zcorvus/icons/types';
```

## Migration

This package replaces the framework-agnostic API from `@zcorvus/z-icons`.

| Old import | New import |
| --- | --- |
| `@zcorvus/z-icons/icons` | `@zcorvus/icons/svg`, `@zcorvus/icons/names`, `@zcorvus/icons/types` |
| `@zcorvus/z-icons/core` | `@zcorvus/icons/svg`, `@zcorvus/icons/names`, `@zcorvus/icons/types` |
| `@zcorvus/z-icons/mina` | `@zcorvus/icons/svg`, `@zcorvus/icons/names`, `@zcorvus/icons/types` |
