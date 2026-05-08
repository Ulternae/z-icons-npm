import React from 'react';

export interface MinaZeroSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaZeroSquare: React.FC<MinaZeroSquareProps>;
export default MinaZeroSquare;
