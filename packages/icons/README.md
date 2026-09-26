# @zcorvus/icons

Framework-independent ZCorvus icon definitions, SVG rendering, and a Web Component. See the [repository guide](https://github.com/Ulternae/z-icons-npm#readme) for examples.

```ts
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';

renderSvg(check, { size: 20, ariaLabel: 'Ready' });
```

Only imported definitions enter your bundle. Use `@zcorvus/icons/web` and `defineZIcon` for explicit browser registration, or opt into a complete variant through `@zcorvus/icons/packs-data/mina/light`.
