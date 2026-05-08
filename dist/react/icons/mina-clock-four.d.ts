import React from 'react';

export interface MinaClockFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockFour: React.FC<MinaClockFourProps>;
export default MinaClockFour;
