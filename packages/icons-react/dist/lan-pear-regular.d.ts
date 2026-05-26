import React from 'react';

export interface LanPearRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPearRegular: React.FC<LanPearRegularProps>;
export default LanPearRegular;
