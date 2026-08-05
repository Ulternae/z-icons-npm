import { neoSprite } from '../sprites/neo.js';
import { neoRegularViewBoxes } from '../viewboxes/neo.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { neoRegularViewBoxes } from '../viewboxes/neo.js';
export const ZNeoSprite = createSpriteComponent('neo', neoSprite);
export const ZNeo = createPackIcon({ pack: 'neo', variant: 'regular', defaultVariant: 'regular', spriteId: 'neo', sprite: neoSprite, viewBoxes: neoRegularViewBoxes });
export default ZNeo;
