import { createCoreIcon, createSpriteComponent } from './runtime.js';
import { coreSpriteRegularDuo } from './sprite.js';
import { coreRegularDuoViewBoxes } from './viewboxes.js';

export { coreSpriteRegularDuo } from './sprite.js';
export { coreRegularDuoViewBoxes } from './viewboxes.js';

export const ZCoreRegularDuoSprite = createSpriteComponent('core-regular-duo', coreSpriteRegularDuo);
export const ZCoreRegularDuo = createCoreIcon({
  variant: 'regular-duo',
  defaultVariant: 'regular',
  spriteId: 'core-regular-duo',
  sprite: coreSpriteRegularDuo,
  viewBoxes: coreRegularDuoViewBoxes,
});

export default ZCoreRegularDuo;
