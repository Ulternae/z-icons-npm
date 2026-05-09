import React from 'react';
import type { NeoIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const neoLightIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZNeoProps = PackIconProps<NeoIconName>;
export declare const ZNeo: React.FC<ZNeoProps>;
export default ZNeo;
