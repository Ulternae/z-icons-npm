import React from 'react';

export interface MinaSunSnowSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunSnowSolid: React.FC<MinaSunSnowSolidProps>;
export default MinaSunSnowSolid;
