import React from 'react';

export interface MinaClockOctagonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockOctagon: React.FC<MinaClockOctagonProps>;
export default MinaClockOctagon;
