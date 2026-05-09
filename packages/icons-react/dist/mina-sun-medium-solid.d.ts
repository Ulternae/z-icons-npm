import React from 'react';

export interface MinaSunMediumSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunMediumSolid: React.FC<MinaSunMediumSolidProps>;
export default MinaSunMediumSolid;
