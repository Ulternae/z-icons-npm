import React from 'react';
import type { CoreIconProps, ZCoreSpriteProps } from './runtime.js';
export type { CoreIconName } from './types/index.js';
export { coreSprite } from './sprite.js';
export { coreRegularViewBoxes } from './viewboxes.js';

export declare const ZCoreSprite: React.FC<ZCoreSpriteProps>;
export type ZCoreProps = CoreIconProps<CoreIconName>;
export declare const ZCore: React.FC<ZCoreProps>;
export default ZCore;
