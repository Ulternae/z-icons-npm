# @zcorvus/icons-react

React components for ZCorvus icons.

Browse all available icons at [icons.zcorvus.com](https://icons.zcorvus.com/).

## Installation

```bash
pnpm add @zcorvus/icons-react
```

`@zcorvus/icons-react` installs `@zcorvus/icons` as a normal dependency. Install `@zcorvus/icons` directly only when your app also imports raw SVG strings or runtime icon name arrays from the core package.

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
import { ZCore, ZCoreSprite, ZMina, ZMinaSolid, ZNeo } from '@zcorvus/icons-react/packs';

export function Icons() {
  return (
    <>
      <ZCoreSprite />
      <ZCore name="sun" />
      <ZNeo name="sun" />
      <ZMina name="search" />
      <ZMinaSolid name="search" />
    </>
  );
}
```

Pack wrappers render lightweight SVG sprite references. In client-only React apps you can omit the sprite component and the wrapper will inject the sprite in the browser. In React Server Components, render the matching `Z...Sprite` component once inside `<body>` so the server HTML includes the referenced symbols.

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ZCoreSprite />
        {children}
      </body>
    </html>
  );
}
```

Individual icon components are still the most optimized option when the icon name is static.

## Dynamic Icon

`ZIcon` is deprecated because it requires metadata for every supported pack. Prefer `ZMina`, `ZLan`, `ZCore`, `ZNeo`, or `ZBru`; keep `ZIcon` only while migrating code where the pack itself is dynamic.

```tsx
import { ZIcon } from '@zcorvus/icons-react';

export function DynamicIcon() {
  return <ZIcon type="mina" name="search" variant="solid" />;
}
```

`ZIcon` remains available for backward compatibility but can include all supported packs.

`ZIcon` also renders sprite references. In React Server Components, include the specific pack sprite components for the packs and variants used on the page, inside `<body>`.

## Custom Dynamic Icons

Use `createZIcon` when the icon name or pack is dynamic, but you only want to include a controlled subset of icons.

```tsx
import { createZIcon } from '@zcorvus/icons-react/create';
import {
  CoreAnchor,
  CoreLanguage,
  MinaAnchor,
  MinaAnchorSolid,
  MinaLanguage,
} from '@zcorvus/icons-react';

const AppIcon = createZIcon({
  core: {
    light: {
      anchor: CoreAnchor,
      language: CoreLanguage,
    },
  },
  mina: {
    light: {
      anchor: MinaAnchor,
      language: MinaLanguage,
    },
    solid: {
      anchor: MinaAnchorSolid,
    },
  },
});

export function Example() {
  return <AppIcon type="mina" name="anchor" variant="solid" className="size-4" />;
}
```

For convenience, generated pack data is available:

```tsx
import { createZIcon } from '@zcorvus/icons-react/create';
import {
  coreIcons,
  minaIcons,
  minaIconsSolid,
} from '@zcorvus/icons-react/packs-data';

const AppIcon = createZIcon({
  core: {
    light: coreIcons,
  },
  mina: {
    light: minaIcons,
    solid: minaIconsSolid,
  },
});
```

The exports without a suffix represent the default `light` variant. Non-default variants add a suffix, matching component names like `MinaSearch` and `MinaSearchSolid`.

`createZIcon` supports controlled fallback behavior:

```tsx
const AppIcon = createZIcon(registry, {
  defaultVariant: 'light',
  fallbackVariant: 'light',
  fallbackPack: 'core',
  fallbackIcon: CoreAnchor,
  missing: 'warn',
});
```

`missing` can be `null`, `warn`, or `error`. By default it is `null`.

## Core Types

Icon name types are available from the React package:

```ts
import type { MinaIconName, AllIconNames } from '@zcorvus/icons-react/types';
```

They are also re-exported from the root package for type-only imports:

```ts
import type { MinaIconName } from '@zcorvus/icons-react';
```

## Migration

This package replaces the previous React API from `@zcorvus/z-icons`.

| Old import | New import |
| --- | --- |
| `@zcorvus/z-icons/react/icons` | `@zcorvus/icons-react` |
| `@zcorvus/z-icons/react/icons/mina-check` | `@zcorvus/icons-react/mina-check` |
| `@zcorvus/z-icons/react/mina` | `@zcorvus/icons-react/packs` |
