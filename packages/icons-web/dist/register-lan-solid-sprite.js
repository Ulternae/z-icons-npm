import { defineZIconElement } from './create.js';
import { lanSpriteSolid } from '@zcorvus/icons/sprites/lan-solid.js';

export { lanSpriteSolid } from '@zcorvus/icons/sprites/lan-solid.js';
export const ZLanSolidSpriteElement = defineZIconElement('z-lan-solid-sprite', {}, { type: 'lan', variant: 'solid', defaultVariant: 'solid', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'lan-solid', sprite: lanSpriteSolid });
