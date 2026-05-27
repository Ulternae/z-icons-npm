import React from 'react';
import { coreSolidIconMap } from './packs/core-solid.js';
import { coreRegularIconMap } from './packs/core.js';
import { coreRegular-duoIconMap } from './packs/core-regular-duo.js';
import { neoSolidIconMap } from './packs/neo-solid.js';
import { neoRegularIconMap } from './packs/neo.js';
import { neoRegular-duoIconMap } from './packs/neo-regular-duo.js';
import { minaLightIconMap } from './packs/mina.js';
import { minaSolidIconMap } from './packs/mina-solid.js';
import { bruSolidIconMap } from './packs/bru.js';
import { lanLightIconMap } from './packs/lan.js';
import { lanSolidIconMap } from './packs/lan-solid.js';
import { lanRegularIconMap } from './packs/lan-regular.js';
import { lanThinIconMap } from './packs/lan-thin.js';

const iconCollections = {
  core: {
    solid: coreSolidIconMap.solid,
    regular: coreRegularIconMap.regular,
    regular-duo: coreRegular-duoIconMap.regular-duo
  },
  neo: {
    solid: neoSolidIconMap.solid,
    regular: neoRegularIconMap.regular,
    regular-duo: neoRegular-duoIconMap.regular-duo
  },
  mina: {
    light: minaLightIconMap.light,
    solid: minaSolidIconMap.solid
  },
  bru: {
    solid: bruSolidIconMap.solid
  },
  lan: {
    light: lanLightIconMap.light,
    solid: lanSolidIconMap.solid,
    regular: lanRegularIconMap.regular,
    thin: lanThinIconMap.thin
  }
};

const defaultVariants = {
  core: 'regular',
  neo: 'regular',
  mina: 'light',
  bru: 'solid',
  lan: 'light'
};

export function ZIcon({ type, name, variant, size = 24, color, style, ...props }) {
  const resolvedVariant = variant ?? defaultVariants[type] ?? 'light';
  const Icon = iconCollections[type]?.[resolvedVariant]?.[name];

  if (!Icon) {
    return null;
  }

  return React.createElement(Icon, { size, color, style, ...props });
}
