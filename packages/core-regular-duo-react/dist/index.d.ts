import React from 'react';
import type { CoreIconProps, ZCoreSpriteProps } from './runtime.js';
export type { CoreRegularDuoIconName } from './types/index.js';
export { coreSpriteRegularDuo } from './sprite.js';
export { coreRegularDuoViewBoxes } from './viewboxes.js';

export declare const ZCoreRegularDuoSprite: React.FC<ZCoreSpriteProps>;
export type ZCoreRegularDuoProps = CoreIconProps<CoreRegularDuoIconName>;
export declare const ZCoreRegularDuo: React.FC<ZCoreRegularDuoProps>;
export default ZCoreRegularDuo;
