import React from 'react';

export interface NeoStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoStarHalfSolid: React.FC<NeoStarHalfSolidProps>;
export default NeoStarHalfSolid;
