import { coreSprite } from '../sprites/core.js';
import { coreRegularViewBoxes } from '../viewboxes/core.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { coreRegularViewBoxes } from '../viewboxes/core.js';
export const ZCoreSprite = createSpriteComponent('core', coreSprite);
export const ZCore = createPackIcon({ pack: 'core', variant: 'regular', defaultVariant: 'regular', spriteId: 'core', sprite: coreSprite, viewBoxes: coreRegularViewBoxes });
export default ZCore;
