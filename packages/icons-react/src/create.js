import * as React from 'react';
import { defaultVariants } from './defaults.js';

/** Build a dynamic component from an explicit, tree-shakeable subset of icons. */
export function createZIcon(registry) {
  function resolve(pack, name, variant = defaultVariants[pack]) {
    if (!Object.hasOwn(registry, pack)) return undefined;
    const variants = registry[pack];
    if (!Object.hasOwn(variants, variant)) return undefined;
    const names = variants[variant];
    return Object.hasOwn(names, name) ? names[name] : undefined;
  }
  function ZIcon({ pack, variant, name, ...props }) {
    const selected = resolve(pack, name, variant || defaultVariants[pack]);
    return selected ? React.createElement(selected, props) : null;
  }
  ZIcon.displayName = 'ZIcon';
  ZIcon.has = (pack, name, variant) => Boolean(resolve(pack, name, variant));
  return ZIcon;
}
