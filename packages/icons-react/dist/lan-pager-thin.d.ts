import React from 'react';

export interface LanPagerThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPagerThin: React.FC<LanPagerThinProps>;
export default LanPagerThin;
