import React from 'react';

export interface LanBasketballHoopRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballHoopRegular: React.FC<LanBasketballHoopRegularProps>;
export default LanBasketballHoopRegular;
