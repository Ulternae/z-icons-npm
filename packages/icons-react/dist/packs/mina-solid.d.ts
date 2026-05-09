import React from 'react';
import type { MinaIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const minaSolidIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZMinaSolidProps = PackIconProps<MinaIconName>;
export declare const ZMinaSolid: React.FC<ZMinaSolidProps>;
export default ZMinaSolid;
