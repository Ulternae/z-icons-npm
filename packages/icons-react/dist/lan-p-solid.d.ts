import React from 'react';

export interface LanPSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPSolid: React.FC<LanPSolidProps>;
export default LanPSolid;
