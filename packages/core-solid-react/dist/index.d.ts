import React from 'react';
import type { CoreIconProps, ZCoreSpriteProps } from './runtime.js';
export type { CoreSolidIconName } from './types/index.js';
export { coreSpriteSolid } from './sprite.js';
export { coreSolidViewBoxes } from './viewboxes.js';

export declare const ZCoreSolidSprite: React.FC<ZCoreSpriteProps>;
export type ZCoreSolidProps = CoreIconProps<CoreSolidIconName>;
export declare const ZCoreSolid: React.FC<ZCoreSolidProps>;
export default ZCoreSolid;
