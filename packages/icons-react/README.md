# @zcorvus/icons-react

React components generated from ZCorvus SVGs. See the [repository guide](https://github.com/Ulternae/z-icons-npm#readme) for static and dynamic examples.

```tsx
import { MinaCheck } from '@zcorvus/icons-react/mina';

<MinaCheck size={20} aria-label="Ready" />;
```

Pack entries provide autocomplete. Direct paths such as `@zcorvus/icons-react/mina/mina-check` import one icon. The package root exports only `createZIcon` for an explicit dynamic subset. Complete maps are opt-in via `@zcorvus/icons-react/packs-data/mina` or a variant path such as `/packs-data/mina/solid`.
