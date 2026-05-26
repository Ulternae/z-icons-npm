import React from 'react';
import type { LanIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const lanLightIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZLanProps = PackIconProps<LanIconName>;
export declare const ZLan: React.FC<ZLanProps>;
export default ZLan;
