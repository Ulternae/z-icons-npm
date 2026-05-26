import React from 'react';

export interface LanScorpioSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScorpioSolid: React.FC<LanScorpioSolidProps>;
export default LanScorpioSolid;
