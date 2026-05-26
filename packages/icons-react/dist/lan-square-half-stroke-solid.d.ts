import React from 'react';

export interface LanSquareHalfStrokeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareHalfStrokeSolid: React.FC<LanSquareHalfStrokeSolidProps>;
export default LanSquareHalfStrokeSolid;
