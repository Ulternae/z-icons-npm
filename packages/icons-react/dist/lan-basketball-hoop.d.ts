import React from 'react';

export interface LanBasketballHoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballHoop: React.FC<LanBasketballHoopProps>;
export default LanBasketballHoop;
