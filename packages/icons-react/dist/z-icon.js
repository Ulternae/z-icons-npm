import React from 'react';
import { getSpriteSymbolId, injectZIconSprite } from './packs/create-pack-icon.js';
import { coreSolidViewBoxes } from './viewboxes/core-solid.js';
import { coreRegularViewBoxes } from './viewboxes/core.js';
import { coreRegularDuoViewBoxes } from './viewboxes/core-regular-duo.js';
import { neoSolidViewBoxes } from './viewboxes/neo-solid.js';
import { neoRegularViewBoxes } from './viewboxes/neo.js';
import { neoRegularDuoViewBoxes } from './viewboxes/neo-regular-duo.js';
import { minaLightViewBoxes } from './viewboxes/mina.js';
import { minaSolidViewBoxes } from './viewboxes/mina-solid.js';
import { bruSolidViewBoxes } from './viewboxes/bru.js';
import { lanLightViewBoxes } from './viewboxes/lan.js';
import { lanSolidViewBoxes } from './viewboxes/lan-solid.js';
import { lanRegularViewBoxes } from './viewboxes/lan-regular.js';
import { lanThinViewBoxes } from './viewboxes/lan-thin.js';

const viewBoxes = {
  core: {
    'solid': coreSolidViewBoxes,
    'regular': coreRegularViewBoxes,
    'regular-duo': coreRegularDuoViewBoxes
  },
  neo: {
    'solid': neoSolidViewBoxes,
    'regular': neoRegularViewBoxes,
    'regular-duo': neoRegularDuoViewBoxes
  },
  mina: {
    'light': minaLightViewBoxes,
    'solid': minaSolidViewBoxes
  },
  bru: {
    'solid': bruSolidViewBoxes
  },
  lan: {
    'light': lanLightViewBoxes,
    'solid': lanSolidViewBoxes,
    'regular': lanRegularViewBoxes,
    'thin': lanThinViewBoxes
  }
};

const spriteLoaders = {
  core: {
    'solid': () => import('@zcorvus/icons/sprites/core-solid.js').then((module) => ({ spriteId: 'core-solid', sprite: module.coreSpriteSolid })),
    'regular': () => import('@zcorvus/icons/sprites/core.js').then((module) => ({ spriteId: 'core', sprite: module.coreSprite })),
    'regular-duo': () => import('@zcorvus/icons/sprites/core-regular-duo.js').then((module) => ({ spriteId: 'core-regular-duo', sprite: module.coreSpriteRegularDuo }))
  },
  neo: {
    'solid': () => import('@zcorvus/icons/sprites/neo-solid.js').then((module) => ({ spriteId: 'neo-solid', sprite: module.neoSpriteSolid })),
    'regular': () => import('@zcorvus/icons/sprites/neo.js').then((module) => ({ spriteId: 'neo', sprite: module.neoSprite })),
    'regular-duo': () => import('@zcorvus/icons/sprites/neo-regular-duo.js').then((module) => ({ spriteId: 'neo-regular-duo', sprite: module.neoSpriteRegularDuo }))
  },
  mina: {
    'light': () => import('@zcorvus/icons/sprites/mina.js').then((module) => ({ spriteId: 'mina', sprite: module.minaSprite })),
    'solid': () => import('@zcorvus/icons/sprites/mina-solid.js').then((module) => ({ spriteId: 'mina-solid', sprite: module.minaSpriteSolid }))
  },
  bru: {
    'solid': () => import('@zcorvus/icons/sprites/bru.js').then((module) => ({ spriteId: 'bru', sprite: module.bruSprite }))
  },
  lan: {
    'light': () => import('@zcorvus/icons/sprites/lan.js').then((module) => ({ spriteId: 'lan', sprite: module.lanSprite })),
    'solid': () => import('@zcorvus/icons/sprites/lan-solid.js').then((module) => ({ spriteId: 'lan-solid', sprite: module.lanSpriteSolid })),
    'regular': () => import('@zcorvus/icons/sprites/lan-regular.js').then((module) => ({ spriteId: 'lan-regular', sprite: module.lanSpriteRegular })),
    'thin': () => import('@zcorvus/icons/sprites/lan-thin.js').then((module) => ({ spriteId: 'lan-thin', sprite: module.lanSpriteThin }))
  }
};

const defaultVariants = {
  core: 'regular',
  neo: 'regular',
  mina: 'light',
  bru: 'solid',
  lan: 'light'
};

function useSpriteLoader(loader) {
  React.useEffect(() => {
    if (!loader) {
      return undefined;
    }

    let active = true;

    loader().then(({ spriteId, sprite }) => {
      if (active) {
        injectZIconSprite(spriteId, sprite);
      }
    });

    return () => {
      active = false;
    };
  }, [loader]);
}

export function ZIcon({ type, name, variant, size = 24, color, style, ...props }) {
  const resolvedVariant = variant ?? defaultVariants[type] ?? 'light';
  const viewBox = viewBoxes[type]?.[resolvedVariant]?.[name];
  const loader = spriteLoaders[type]?.[resolvedVariant];

  useSpriteLoader(loader);

  if (!viewBox) {
    return null;
  }

  return React.createElement(
    'svg',
    {
      viewBox,
      width: size,
      height: size,
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    },
    React.createElement('use', { href: `#${getSpriteSymbolId(type, name, resolvedVariant, defaultVariants[type])}` })
  );
}
