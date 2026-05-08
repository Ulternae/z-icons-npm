import React from 'react';

export interface MinaSunriseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunriseSolid: React.FC<MinaSunriseSolidProps>;
export default MinaSunriseSolid;
