import { defineZIconElement } from './create.js';
import { lanSprite } from './sprites/lan.js';

export { lanSprite } from './sprites/lan.js';
export const ZLanSpriteElement = defineZIconElement('z-lan-sprite', {}, { type: 'lan', variant: 'light', defaultVariant: 'light', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'lan', sprite: lanSprite });
