import React from 'react';

export interface MinaPlaySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlaySquare: React.FC<MinaPlaySquareProps>;
export default MinaPlaySquare;
