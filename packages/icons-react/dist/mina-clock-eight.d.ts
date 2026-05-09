import React from 'react';

export interface MinaClockEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockEight: React.FC<MinaClockEightProps>;
export default MinaClockEight;
