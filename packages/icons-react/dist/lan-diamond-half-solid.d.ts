import React from 'react';

export interface LanDiamondHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDiamondHalfSolid: React.FC<LanDiamondHalfSolidProps>;
export default LanDiamondHalfSolid;
