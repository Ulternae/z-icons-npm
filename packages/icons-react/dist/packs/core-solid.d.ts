import React from 'react';
import type { CoreIconName } from '@zcorvus/icons/types';
import type { PackIconProps } from './create-pack-icon.js';

export declare const coreSolidIconMap: Record<string, Record<string, React.FC<React.SVGProps<SVGSVGElement>>>>;
export type ZCoreSolidProps = PackIconProps<CoreIconName>;
export declare const ZCoreSolid: React.FC<ZCoreSolidProps>;
export default ZCoreSolid;
