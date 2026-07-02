import { createCoreIcon, createSpriteComponent } from './runtime.js';
import { coreSprite } from './sprite.js';
import { coreRegularViewBoxes } from './viewboxes.js';

export { coreSprite } from './sprite.js';
export { coreRegularViewBoxes } from './viewboxes.js';

export const ZCoreSprite = createSpriteComponent('core', coreSprite);
export const ZCore = createCoreIcon({
  variant: 'regular',
  defaultVariant: 'regular',
  spriteId: 'core',
  sprite: coreSprite,
  viewBoxes: coreRegularViewBoxes,
});

export default ZCore;
