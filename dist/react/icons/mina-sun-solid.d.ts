import React from 'react';

export interface MinaSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunSolid: React.FC<MinaSunSolidProps>;
export default MinaSunSolid;
