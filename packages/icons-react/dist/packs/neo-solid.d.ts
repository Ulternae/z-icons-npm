import React from 'react';
import type { NeoIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const neoSolidIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZNeoSolidProps = PackIconProps<NeoIconName>;
export declare const ZNeoSolid: React.FC<ZNeoSolidProps>;
export default ZNeoSolid;
