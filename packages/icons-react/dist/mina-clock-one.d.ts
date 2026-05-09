import React from 'react';

export interface MinaClockOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockOne: React.FC<MinaClockOneProps>;
export default MinaClockOne;
