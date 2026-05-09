import React from 'react';

export interface MinaSunsetSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunsetSolid: React.FC<MinaSunsetSolidProps>;
export default MinaSunsetSolid;
