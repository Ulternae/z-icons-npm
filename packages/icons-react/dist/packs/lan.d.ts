import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanLightViewBoxes: Record<LanIconName, string>;
export declare const ZLanSprite: React.FC<ZIconSpriteProps>;
export type ZLanProps = PackIconProps<LanIconName>;
export declare const ZLan: React.FC<ZLanProps>;
export default ZLan;
