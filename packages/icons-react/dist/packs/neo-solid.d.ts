import React from 'react';
import type { NeoIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const neoSolidViewBoxes: Record<NeoIconName, string>;
export declare const ZNeoSolidSprite: React.FC<ZIconSpriteProps>;
export type ZNeoSolidProps = PackIconProps<NeoIconName>;
export declare const ZNeoSolid: React.FC<ZNeoSolidProps>;
export default ZNeoSolid;
