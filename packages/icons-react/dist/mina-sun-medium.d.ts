import React from 'react';

export interface MinaSunMediumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunMedium: React.FC<MinaSunMediumProps>;
export default MinaSunMedium;
