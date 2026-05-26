import React from 'react';
import { coreLightIconMap } from './packs/core.js';
import { neoLightIconMap } from './packs/neo.js';
import { minaLightIconMap } from './packs/mina.js';
import { minaSolidIconMap } from './packs/mina-solid.js';
import { bruSolidIconMap } from './packs/bru.js';
import { lanLightIconMap } from './packs/lan.js';
import { lanSolidIconMap } from './packs/lan-solid.js';
import { lanRegularIconMap } from './packs/lan-regular.js';
import { lanThinIconMap } from './packs/lan-thin.js';

const iconCollections = {
  core: {
    light: coreLightIconMap.light
  },
  neo: {
    light: neoLightIconMap.light
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
  core: 'light',
  neo: 'light',
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
