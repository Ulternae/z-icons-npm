import React from 'react';

export interface MinaClockSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockSix: React.FC<MinaClockSixProps>;
export default MinaClockSix;
