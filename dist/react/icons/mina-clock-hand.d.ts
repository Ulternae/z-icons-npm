import React from 'react';

export interface MinaClockHandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockHand: React.FC<MinaClockHandProps>;
export default MinaClockHand;
