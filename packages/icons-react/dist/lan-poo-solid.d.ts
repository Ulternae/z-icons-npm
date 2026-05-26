import React from 'react';

export interface LanPooSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPooSolid: React.FC<LanPooSolidProps>;
export default LanPooSolid;
