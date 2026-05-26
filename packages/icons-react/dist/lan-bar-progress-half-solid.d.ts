import React from 'react';

export interface LanBarProgressHalfSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarProgressHalfSolid: React.FC<LanBarProgressHalfSolidProps>;
export default LanBarProgressHalfSolid;
