import { neoSpriteRegularDuo } from '../sprites/neo-regular-duo.js';
import { neoRegularDuoViewBoxes } from '../viewboxes/neo-regular-duo.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { neoRegularDuoViewBoxes } from '../viewboxes/neo-regular-duo.js';
export const ZNeoRegularDuoSprite = createSpriteComponent('neo-regular-duo', neoSpriteRegularDuo);
export const ZNeoRegularDuo = createPackIcon({ pack: 'neo', variant: 'regular-duo', defaultVariant: 'regular', spriteId: 'neo-regular-duo', sprite: neoSpriteRegularDuo, viewBoxes: neoRegularDuoViewBoxes });
export default ZNeoRegularDuo;
