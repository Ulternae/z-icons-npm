import React from 'react';
import type { CoreSolidIconName } from '@zcorvus/icons/types';
import type { PackIconProps, ZIconSpriteProps } from './create-pack-icon.js';

export declare const coreSolidViewBoxes: Record<CoreSolidIconName, string>;
export declare const ZCoreSolidSprite: React.FC<ZIconSpriteProps>;
export type ZCoreSolidProps = PackIconProps<CoreSolidIconName>;
export declare const ZCoreSolid: React.FC<ZCoreSolidProps>;
export default ZCoreSolid;
