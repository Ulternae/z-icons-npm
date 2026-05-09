import React from 'react';

export interface MinaSunDimProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSunDim: React.FC<MinaSunDimProps>;
export default MinaSunDim;
