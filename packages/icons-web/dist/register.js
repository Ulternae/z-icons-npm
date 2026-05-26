import { defineZIconElement } from './create.js';
import { coreIcons } from '@zcorvus/icons/svg';
import { neoIcons } from '@zcorvus/icons/svg';
import { minaIcons } from '@zcorvus/icons/svg';
import { bruIcons } from '@zcorvus/icons/svg';
import { lanIcons } from '@zcorvus/icons/svg';

export const zIconRegistry = {
  core: coreIcons,
  neo: neoIcons,
  mina: minaIcons,
  bru: bruIcons,
  lan: lanIcons
};

export const zIconDefaultVariants = {
  core: 'light',
  neo: 'light',
  mina: 'light',
  bru: 'solid',
  lan: 'light'
};

export const ZIconElement = defineZIconElement('z-icon', zIconRegistry, { defaultVariant: 'light', defaultVariants: zIconDefaultVariants });
