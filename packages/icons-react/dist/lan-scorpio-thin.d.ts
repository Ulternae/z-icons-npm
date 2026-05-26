import React from 'react';

export interface LanScorpioThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScorpioThin: React.FC<LanScorpioThinProps>;
export default LanScorpioThin;
