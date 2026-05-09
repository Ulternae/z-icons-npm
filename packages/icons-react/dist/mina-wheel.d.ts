import React from 'react';

export interface MinaWheelProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWheel: React.FC<MinaWheelProps>;
export default MinaWheel;
