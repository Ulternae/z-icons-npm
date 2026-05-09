import React from 'react';

export interface MinaArrowUpSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowUpSquare: React.FC<MinaArrowUpSquareProps>;
export default MinaArrowUpSquare;
