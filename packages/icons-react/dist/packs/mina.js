import { minaSprite } from '@zcorvus/icons/sprites/mina.js';
import { minaLightViewBoxes } from '../viewboxes/mina.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { minaLightViewBoxes } from '../viewboxes/mina.js';
export const ZMinaSprite = createSpriteComponent('mina', minaSprite);
export const ZMina = createPackIcon({ pack: 'mina', variant: 'light', defaultVariant: 'light', spriteId: 'mina', sprite: minaSprite, viewBoxes: minaLightViewBoxes });
export default ZMina;
