import React from 'react';

export interface LanRupeeSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanRupeeSignSolid: React.FC<LanRupeeSignSolidProps>;
export default LanRupeeSignSolid;
