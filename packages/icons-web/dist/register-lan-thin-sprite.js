import { defineZIconElement } from './create.js';
import { lanSpriteThin } from '@zcorvus/icons/sprites/lan-thin.js';

export { lanSpriteThin } from '@zcorvus/icons/sprites/lan-thin.js';
export const ZLanThinSpriteElement = defineZIconElement('z-lan-thin-sprite', {}, { type: 'lan', variant: 'thin', defaultVariant: 'thin', symbolDefaultVariant: 'light', mode: 'sprite-only', spriteId: 'lan-thin', sprite: lanSpriteThin });
