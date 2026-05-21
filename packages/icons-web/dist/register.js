import { defineZIconElement } from './create.js';
import { coreIcons } from '@zcorvus/icons/svg';
import { neoIcons } from '@zcorvus/icons/svg';
import { minaIcons } from '@zcorvus/icons/svg';

export const zIconRegistry = {
  core: coreIcons,
  neo: neoIcons,
  mina: minaIcons
};

export const ZIconElement = defineZIconElement('z-icon', zIconRegistry, { defaultVariant: 'light' });
