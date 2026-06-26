import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const lanSolidViewBoxes: Record<LanIconName, string>;
export declare const ZLanSolidSprite: React.FC<ZIconSpriteProps>;
export type ZLanSolidProps = PackIconProps<LanIconName>;
export declare const ZLanSolid: React.FC<ZLanSolidProps>;
export default ZLanSolid;
