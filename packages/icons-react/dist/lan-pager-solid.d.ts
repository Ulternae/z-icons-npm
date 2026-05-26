import React from 'react';

export interface LanPagerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPagerSolid: React.FC<LanPagerSolidProps>;
export default LanPagerSolid;
