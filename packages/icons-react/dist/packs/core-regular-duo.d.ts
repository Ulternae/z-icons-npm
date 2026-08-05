import React from 'react';
import type { CoreRegularDuoIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const coreRegularDuoViewBoxes: Record<CoreRegularDuoIconName, string>;
export declare const ZCoreRegularDuoSprite: React.FC<ZIconSpriteProps>;
export type ZCoreRegularDuoProps = PackIconProps<CoreRegularDuoIconName>;
export declare const ZCoreRegularDuo: React.FC<ZCoreRegularDuoProps>;
export default ZCoreRegularDuo;
