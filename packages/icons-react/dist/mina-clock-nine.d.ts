import React from 'react';

export interface MinaClockNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockNine: React.FC<MinaClockNineProps>;
export default MinaClockNine;
