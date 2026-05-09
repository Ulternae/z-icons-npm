import React from 'react';

export interface MinaSunriseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunrise: React.FC<MinaSunriseProps>;
export default MinaSunrise;
