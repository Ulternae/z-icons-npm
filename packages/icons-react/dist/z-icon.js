import React from 'react';
import { coreLightIconMap } from './packs/core.js';
import { neoLightIconMap } from './packs/neo.js';
import { minaLightIconMap } from './packs/mina.js';
import { minaSolidIconMap } from './packs/mina-solid.js';
import { bruLightIconMap } from './packs/bru.js';

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
    light: bruLightIconMap.light
  }
};

export function ZIcon({ type, name, variant = 'light', size = 24, color, style, ...props }) {
  const Icon = iconCollections[type]?.[variant]?.[name];

  if (!Icon) {
    return null;
  }

  return React.createElement(Icon, { size, color, style, ...props });
}
