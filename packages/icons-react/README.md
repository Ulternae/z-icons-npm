# @zcorvus/icons-react

React components generated from ZCorvus SVGs. See the [repository guide](https://github.com/Ulternae/z-icons-npm#readme) for static and dynamic examples.

The current API is available as `3.0.0-beta.1` under the npm `beta` tag. Install it explicitly; `latest` still refers to the legacy API. React 18 or 19 is a peer dependency.

~~~bash
pnpm add @zcorvus/icons-react@3.0.0-beta.1
~~~

```tsx
import { MinaCheck } from '@zcorvus/icons-react/mina';

<MinaCheck size={20} aria-label="Ready" />;
```

Pack entries provide autocomplete. Direct paths such as `@zcorvus/icons-react/mina/mina-check` import one icon. The package root exports only `createZIcon` for an explicit dynamic subset. Complete maps are opt-in via `@zcorvus/icons-react/packs-data/mina` or a variant path such as `/packs-data/mina/solid`.

Generated icons are decorative by default. Add `aria-label` for meaningful standalone icons; label icon-only buttons on the button itself. Static ESM imports allow compatible bundlers to remove unused exports, while complete maps include all icons in the chosen pack and variant.

Maintained by [@Ulternae](https://github.com/Ulternae). See the repository's [contribution guide](https://github.com/Ulternae/z-icons-npm/blob/main/CONTRIBUTING.md), [roadmap](https://github.com/Ulternae/z-icons-npm/blob/main/ROADMAP.md), and [security policy](https://github.com/Ulternae/z-icons-npm/blob/main/SECURITY.md).

Distributed under the MIT License. The Mina artwork's original Myna UI MIT notice is included in `THIRD_PARTY_LICENSES.md`.
