import React from 'react';

export interface LanPentagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPentagonRegular: React.FC<LanPentagonRegularProps>;
export default LanPentagonRegular;
