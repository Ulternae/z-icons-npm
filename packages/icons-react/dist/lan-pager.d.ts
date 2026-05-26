import React from 'react';

export interface LanPagerProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPager: React.FC<LanPagerProps>;
export default LanPager;
