import React from 'react';

export interface LanScorpioProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanScorpio: React.FC<LanScorpioProps>;
export default LanScorpio;
