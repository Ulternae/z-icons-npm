import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const lanSolidIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZLanSolidProps = PackIconProps<LanIconName>;
export declare const ZLanSolid: React.FC<ZLanSolidProps>;
export default ZLanSolid;
