# Z Icons

Framework-agnostic SVG icon package with optional React wrappers and a browser-only Web Component registration entry.

## React

Use the general component when the pack is dynamic:

```tsx
import { ZIcon } from '@zcorvus/z-icons/react';

export function SearchIcon() {
  return <ZIcon type="mina" name="search" />;
}
```

Use pack-specific components when you know the pack and variant. These keep the same `name` ergonomics while avoiding imports for unrelated packs:

```tsx
import { ZMina } from '@zcorvus/z-icons/react/mina';
import { ZMinaSolid } from '@zcorvus/z-icons/react/mina-solid';

export function SearchActions() {
  return (
    <>
      <ZMina name="search" />
      <ZMinaSolid name="search" />
    </>
  );
}
```

Available optimized React entries:

- `@zcorvus/z-icons/react/core` -> `ZCore`
- `@zcorvus/z-icons/react/neo` -> `ZNeo`
- `@zcorvus/z-icons/react/mina` -> `ZMina`
- `@zcorvus/z-icons/react/mina-solid` -> `ZMinaSolid`

## Web Component

Import the registration entry only in browser code:

```ts
import '@zcorvus/z-icons/register';
```

Then use the element:

```html
<z-icon type="mina" name="search" variant="solid" size="24"></z-icon>
```

The root package import is SSR-safe and does not register the Web Component by itself.
