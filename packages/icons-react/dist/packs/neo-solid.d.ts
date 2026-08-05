import React from 'react';
import type { NeoSolidIconName } from '../types/index.js';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const neoSolidViewBoxes: Record<NeoSolidIconName, string>;
export declare const ZNeoSolidSprite: React.FC<ZIconSpriteProps>;
export type ZNeoSolidProps = PackIconProps<NeoSolidIconName>;
export declare const ZNeoSolid: React.FC<ZNeoSolidProps>;
export default ZNeoSolid;
