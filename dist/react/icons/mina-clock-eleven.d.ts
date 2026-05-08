import React from 'react';

export interface MinaClockElevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockEleven: React.FC<MinaClockElevenProps>;
export default MinaClockEleven;
