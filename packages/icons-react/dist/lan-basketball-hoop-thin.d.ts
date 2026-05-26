import React from 'react';

export interface LanBasketballHoopThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBasketballHoopThin: React.FC<LanBasketballHoopThinProps>;
export default LanBasketballHoopThin;
