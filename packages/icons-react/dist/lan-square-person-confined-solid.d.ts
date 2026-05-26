import React from 'react';

export interface LanSquarePersonConfinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquarePersonConfinedSolid: React.FC<LanSquarePersonConfinedSolidProps>;
export default LanSquarePersonConfinedSolid;
