import React from 'react';

export interface LanPagerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPagerRegular: React.FC<LanPagerRegularProps>;
export default LanPagerRegular;
