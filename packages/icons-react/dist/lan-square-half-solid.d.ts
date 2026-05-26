import React from 'react';

export interface LanSquareHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfSolid: React.FC<LanSquareHalfSolidProps>;
export default LanSquareHalfSolid;
