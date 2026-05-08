import React from 'react';

export interface MinaMinusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMinusSquare: React.FC<MinaMinusSquareProps>;
export default MinaMinusSquare;
