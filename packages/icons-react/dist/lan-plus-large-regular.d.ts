import React from 'react';

export interface LanPlusLargeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusLargeRegular: React.FC<LanPlusLargeRegularProps>;
export default LanPlusLargeRegular;
