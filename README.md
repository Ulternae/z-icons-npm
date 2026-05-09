# ZCorvus Icons

Framework-agnostic SVG icons with a dedicated React adapter.

Browse all available icons at [icons.zcorvus.com](https://icons.zcorvus.com/).

## Packages

```bash
pnpm add @zcorvus/icons
pnpm add @zcorvus/icons-react
```

Use `@zcorvus/icons` when you need raw SVG strings, icon names, types, or framework-agnostic helpers.

```ts
import { MinaCheck } from '@zcorvus/icons/svg';
import MinaCheckSvg from '@zcorvus/icons/svg/mina-check';
import { minaIconNames } from '@zcorvus/icons/names';
import { getIconSvg } from '@zcorvus/icons';
import type { MinaIconName, AllIconNames } from '@zcorvus/icons/types';
```

Use `@zcorvus/icons-react` for React components.

```tsx
import { MinaCheck, MinaCheckSolid } from '@zcorvus/icons-react';

export function StatusIcon() {
  return (
    <>
      <MinaCheck className="size-4" />
      <MinaCheckSolid size={16} />
    </>
  );
}
```

The component format is `{Pack}{IconName}` for the default `light` variant and `{Pack}{IconName}{Variant}` for other variants.

```tsx
import { MinaSearch, MinaSearchSolid, CoreSun, NeoSun } from '@zcorvus/icons-react';
```

## React Pack Wrappers

Use pack wrappers when the icon name is dynamic and you want to avoid loading unrelated packs.

```tsx
import { ZMina, ZMinaSolid, ZCore, ZNeo } from '@zcorvus/icons-react/packs';

export function SearchActions() {
  return (
    <>
      <ZMina name="search" />
      <ZMinaSolid name="search" />
      <ZCore name="sun" />
      <ZNeo name="sun" />
    </>
  );
}
```

Use `ZIcon` only when both the pack and icon name are dynamic. This entry prioritizes ergonomics and can include all supported packs.

```tsx
import { ZIcon } from '@zcorvus/icons-react';

export function DynamicIcon() {
  return <ZIcon type="mina" name="search" variant="solid" />;
}
```

## Migration

This version intentionally replaces the previous `@zcorvus/z-icons` API.

| Old import | New import |
| --- | --- |
| `@zcorvus/z-icons/react/icons` | `@zcorvus/icons-react` |
| `@zcorvus/z-icons/react/icons/mina-check` | `@zcorvus/icons-react/mina-check` |
| `@zcorvus/z-icons/react/mina` | `@zcorvus/icons-react/packs` |
| `@zcorvus/z-icons/icons` | `@zcorvus/icons/svg`, `@zcorvus/icons/names`, `@zcorvus/icons/types` |

Vue, Astro, and Web Component adapters are planned as separate future packages.
