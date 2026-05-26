import React from 'react';

export interface LanScorpioRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScorpioRegular: React.FC<LanScorpioRegularProps>;
export default LanScorpioRegular;
