import React from 'react';

export interface MinaRupeeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaRupeeSquare: React.FC<MinaRupeeSquareProps>;
export default MinaRupeeSquare;
