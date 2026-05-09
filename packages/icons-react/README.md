# @zcorvus/icons-react

React components for ZCorvus icons.

Browse all available icons at [icons.zcorvus.com](https://icons.zcorvus.com/).

## Installation

```bash
pnpm add @zcorvus/icons-react
```

`@zcorvus/icons-react` installs `@zcorvus/icons` as a normal dependency. Install `@zcorvus/icons` directly only when your app also imports raw SVG strings, icon names, or icon types from the core package.

## Individual Icons

Use individual icon components for the smallest bundle and best editor autocomplete.

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

The component name format is `{Pack}{IconName}` for the default `light` variant and `{Pack}{IconName}{Variant}` for other variants.

```tsx
import { CoreSun, NeoSun, MinaSearch, MinaSearchSolid } from '@zcorvus/icons-react';
```

Direct file imports are also available:

```tsx
import MinaCheck from '@zcorvus/icons-react/mina-check';
```

## Pack Wrappers

Use pack wrappers when the icon name is dynamic but the pack is known.

```tsx
import { ZCore, ZMina, ZMinaSolid, ZNeo } from '@zcorvus/icons-react/packs';

export function Icons() {
  return (
    <>
      <ZCore name="sun" />
      <ZNeo name="sun" />
      <ZMina name="search" />
      <ZMinaSolid name="search" />
    </>
  );
}
```

Pack wrappers load the selected pack/variant dictionary, so individual icon components are still the most optimized option.

## Dynamic Icon

Use `ZIcon` when both the pack and icon name are dynamic.

```tsx
import { ZIcon } from '@zcorvus/icons-react';

export function DynamicIcon() {
  return <ZIcon type="mina" name="search" variant="solid" />;
}
```

`ZIcon` prioritizes ergonomics and can include all supported packs. Prefer individual components or pack wrappers when bundle size is critical.

## Core Types

Icon name types live in the framework-agnostic core package:

```ts
import type { MinaIconName, AllIconNames } from '@zcorvus/icons/types';
```

## Migration

This package replaces the previous React API from `@zcorvus/z-icons`.

| Old import | New import |
| --- | --- |
| `@zcorvus/z-icons/react/icons` | `@zcorvus/icons-react` |
| `@zcorvus/z-icons/react/icons/mina-check` | `@zcorvus/icons-react/mina-check` |
| `@zcorvus/z-icons/react/mina` | `@zcorvus/icons-react/packs` |
