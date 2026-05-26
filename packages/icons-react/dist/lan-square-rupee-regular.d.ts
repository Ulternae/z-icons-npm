import React from 'react';

export interface LanSquareRupeeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareRupeeRegular: React.FC<LanSquareRupeeRegularProps>;
export default LanSquareRupeeRegular;
