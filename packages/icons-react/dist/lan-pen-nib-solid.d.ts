import React from 'react';

export interface LanPenNibSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNibSolid: React.FC<LanPenNibSolidProps>;
export default LanPenNibSolid;
