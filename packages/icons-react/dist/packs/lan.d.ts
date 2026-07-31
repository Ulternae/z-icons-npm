import React from 'react';
import type { LanLightIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanLightViewBoxes: Record<LanLightIconName, string>;
export declare const ZLanSprite: React.FC<ZIconSpriteProps>;
export type ZLanProps = PackIconProps<LanLightIconName>;
export declare const ZLan: React.FC<ZLanProps>;
export default ZLan;
