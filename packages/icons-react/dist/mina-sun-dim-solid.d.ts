import React from 'react';

export interface MinaSunDimSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunDimSolid: React.FC<MinaSunDimSolidProps>;
export default MinaSunDimSolid;
