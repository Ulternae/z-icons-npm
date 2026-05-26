import React from 'react';

export interface LanPoundSignSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPoundSignSolid: React.FC<LanPoundSignSolidProps>;
export default LanPoundSignSolid;
