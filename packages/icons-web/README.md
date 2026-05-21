# @zcorvus/icons-web

Web Components for ZCorvus icons.

Browse all available icons at [icons.zcorvus.com](https://icons.zcorvus.com/).

## Installation

```bash
pnpm add @zcorvus/icons-web
```

## Global Element

Register the global dynamic element:

```ts
import '@zcorvus/icons-web/register';
```

```html
<z-icon type="mina" name="search"></z-icon>
<z-icon type="mina" name="search" variant="solid"></z-icon>
```

`z-icon` prioritizes ergonomics and can include all supported packs.

## Pack Elements

Register only the pack or variant you need:

```ts
import '@zcorvus/icons-web/register-mina';
import '@zcorvus/icons-web/register-mina-solid';
```

```html
<z-mina name="search"></z-mina>
<z-mina-solid name="search"></z-mina-solid>
```

Pack entries avoid loading unrelated packs, but still load the selected pack/variant.

## Custom Element

Use `createZIconElement` when you only want a small icon registry.

```ts
import { createZIconElement } from '@zcorvus/icons-web/create';
import { MinaSearch, CoreSun } from '@zcorvus/icons/svg';

const AppIcon = createZIconElement({
  mina: {
    light: {
      search: MinaSearch,
    },
  },
  core: {
    light: {
      sun: CoreSun,
    },
  },
});

customElements.define('app-icon', AppIcon);
```

```html
<app-icon type="mina" name="search"></app-icon>
```

## CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@zcorvus/icons-web/register-mina"></script>

<z-mina name="search"></z-mina>
```
