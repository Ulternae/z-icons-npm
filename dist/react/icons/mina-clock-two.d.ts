import React from 'react';

export interface MinaClockTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockTwo: React.FC<MinaClockTwoProps>;
export default MinaClockTwo;
