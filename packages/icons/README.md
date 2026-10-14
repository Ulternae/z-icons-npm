# @zcorvus/icons

Framework-independent ZCorvus icon definitions, SVG rendering, and a Web Component. See the [repository guide](https://github.com/Ulternae/z-icons-npm#readme) for examples.

The current API is available as `3.0.0-beta.1` under the npm `beta` tag. Install it explicitly; `latest` still refers to the legacy API.

~~~bash
pnpm add @zcorvus/icons@3.0.0-beta.1
~~~

```ts
import { renderSvg } from '@zcorvus/icons';
import check from '@zcorvus/icons/data/mina/mina-check';

renderSvg(check, { size: 20, ariaLabel: 'Ready' });
```

Only imported definitions enter your bundle. Use `@zcorvus/icons/web` and `defineZIcon` for explicit browser registration, or opt into a complete variant through `@zcorvus/icons/packs-data/mina/light`.

SVG bodies must come from trusted generated definitions; `renderSvg` is not an arbitrary SVG sanitizer. Name lists are available without SVG bodies through entries such as `@zcorvus/icons/names/mina`.

Maintained by [@Ulternae](https://github.com/Ulternae). See the repository's [contribution guide](https://github.com/Ulternae/z-icons-npm/blob/main/CONTRIBUTING.md), [roadmap](https://github.com/Ulternae/z-icons-npm/blob/main/ROADMAP.md), and [security policy](https://github.com/Ulternae/z-icons-npm/blob/main/SECURITY.md).

Distributed under the MIT License. The Mina artwork's original Myna UI MIT notice is included in `THIRD_PARTY_LICENSES.md`.
