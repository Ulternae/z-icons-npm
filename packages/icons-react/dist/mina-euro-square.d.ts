import React from 'react';

export interface MinaEuroSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEuroSquare: React.FC<MinaEuroSquareProps>;
export default MinaEuroSquare;
