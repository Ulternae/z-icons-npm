import React from 'react';

export interface LanPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPieRegular: React.FC<LanPieRegularProps>;
export default LanPieRegular;
