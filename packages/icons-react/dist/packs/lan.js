import { lanSprite } from '../sprites/lan.js';
import { lanLightViewBoxes } from '../viewboxes/lan.js';
import { createPackIcon, createSpriteComponent } from './create-pack-icon.js';

export { lanLightViewBoxes } from '../viewboxes/lan.js';
export const ZLanSprite = createSpriteComponent('lan', lanSprite);
export const ZLan = createPackIcon({ pack: 'lan', variant: 'light', defaultVariant: 'light', spriteId: 'lan', sprite: lanSprite, viewBoxes: lanLightViewBoxes });
export default ZLan;
