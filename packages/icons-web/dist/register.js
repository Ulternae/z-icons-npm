import { defineZIconElement } from './create.js';
import { coreIconSet } from './data/core-all.js';
import { neoIconSet } from './data/neo-all.js';
import { minaIconSet } from './data/mina-all.js';
import { bruIconSet } from './data/bru-all.js';
import { lanIconSet } from './data/lan-all.js';

export const zIconRegistry = {
  core: coreIconSet,
  neo: neoIconSet,
  mina: minaIconSet,
  bru: bruIconSet,
  lan: lanIconSet
};

export const zIconDefaultVariants = {
  core: 'regular',
  neo: 'regular',
  mina: 'light',
  bru: 'solid',
  lan: 'light'
};

export const ZIconElement = defineZIconElement('z-icon', zIconRegistry, { defaultVariant: 'light', defaultVariants: zIconDefaultVariants });
