import React from 'react';

export interface NeoMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoMugHotSolid: React.FC<NeoMugHotSolidProps>;
export default NeoMugHotSolid;
