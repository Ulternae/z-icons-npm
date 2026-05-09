import React from 'react';

export interface MinaClockSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSeven: React.FC<MinaClockSevenProps>;
export default MinaClockSeven;
