import React from 'react';

export interface MinaClockFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockFive: React.FC<MinaClockFiveProps>;
export default MinaClockFive;
