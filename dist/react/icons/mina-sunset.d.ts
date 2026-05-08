import React from 'react';

export interface MinaSunsetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunset: React.FC<MinaSunsetProps>;
export default MinaSunset;
