import React from 'react';

export interface LanSquareHalfHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfHorizontalSolid: React.FC<LanSquareHalfHorizontalSolidProps>;
export default LanSquareHalfHorizontalSolid;
