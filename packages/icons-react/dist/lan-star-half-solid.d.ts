import React from 'react';

export interface LanStarHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStarHalfSolid: React.FC<LanStarHalfSolidProps>;
export default LanStarHalfSolid;
