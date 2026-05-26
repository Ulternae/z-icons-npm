import React from 'react';

export interface LanPlusLargeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusLarge: React.FC<LanPlusLargeProps>;
export default LanPlusLarge;
