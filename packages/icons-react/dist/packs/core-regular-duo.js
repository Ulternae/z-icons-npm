import { coreSpriteRegularDuo } from '../sprites/core-regular-duo.js';
import { coreRegularDuoViewBoxes } from '../viewboxes/core-regular-duo.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { coreRegularDuoViewBoxes } from '../viewboxes/core-regular-duo.js';
export const ZCoreRegularDuoSprite = createSpriteComponent('core-regular-duo', coreSpriteRegularDuo);
export const ZCoreRegularDuo = createPackIcon({ pack: 'core', variant: 'regular-duo', defaultVariant: 'regular', spriteId: 'core-regular-duo', sprite: coreSpriteRegularDuo, viewBoxes: coreRegularDuoViewBoxes });
export default ZCoreRegularDuo;
