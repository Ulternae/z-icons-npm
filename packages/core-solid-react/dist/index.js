import { createCoreIcon, createSpriteComponent } from './runtime.js';
import { coreSpriteSolid } from './sprite.js';
import { coreSolidViewBoxes } from './viewboxes.js';

export { coreSpriteSolid } from './sprite.js';
export { coreSolidViewBoxes } from './viewboxes.js';

export const ZCoreSolidSprite = createSpriteComponent('core-solid', coreSpriteSolid);
export const ZCoreSolid = createCoreIcon({
  variant: 'solid',
  defaultVariant: 'regular',
  spriteId: 'core-solid',
  sprite: coreSpriteSolid,
  viewBoxes: coreSolidViewBoxes,
});

export default ZCoreSolid;
