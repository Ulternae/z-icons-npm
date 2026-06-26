import React from 'react';
import type { CoreIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const coreSolidViewBoxes: Record<CoreIconName, string>;
export declare const ZCoreSolidSprite: React.FC<ZIconSpriteProps>;
export type ZCoreSolidProps = PackIconProps<CoreIconName>;
export declare const ZCoreSolid: React.FC<ZCoreSolidProps>;
export default ZCoreSolid;
