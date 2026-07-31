import React from 'react';
import type { CoreRegularIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const coreRegularViewBoxes: Record<CoreRegularIconName, string>;
export declare const ZCoreSprite: React.FC<ZIconSpriteProps>;
export type ZCoreProps = PackIconProps<CoreRegularIconName>;
export declare const ZCore: React.FC<ZCoreProps>;
export default ZCore;
