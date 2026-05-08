import React from 'react';

export interface MinaClockCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaClockCircle: React.FC<MinaClockCircleProps>;
export default MinaClockCircle;
