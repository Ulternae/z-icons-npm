import { defineZIconElement } from './create.js';
import { lanSpriteRegular } from './sprites/lan-regular.js';

export { lanSpriteRegular } from './sprites/lan-regular.js';
export const ZLanRegularSpriteElement = defineZIconElement('z-lan-regular-sprite', {}, { type: 'lan', variant: 'regular', defaultVariant: 'regular', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'lan-regular', sprite: lanSpriteRegular });
