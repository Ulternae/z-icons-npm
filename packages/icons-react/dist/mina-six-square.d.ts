import React from 'react';

export interface MinaSixSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSixSquare: React.FC<MinaSixSquareProps>;
export default MinaSixSquare;
