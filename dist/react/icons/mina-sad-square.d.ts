import React from 'react';

export interface MinaSadSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSadSquare: React.FC<MinaSadSquareProps>;
export default MinaSadSquare;
