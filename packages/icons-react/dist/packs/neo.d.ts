import React from 'react';
import type { NeoIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const neoRegularViewBoxes: Record<NeoIconName, string>;
export declare const ZNeoSprite: React.FC<ZIconSpriteProps>;
export type ZNeoProps = PackIconProps<NeoIconName>;
export declare const ZNeo: React.FC<ZNeoProps>;
export default ZNeo;
