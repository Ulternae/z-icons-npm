import React from 'react';

export interface MinaDotsSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDotsSquare: React.FC<MinaDotsSquareProps>;
export default MinaDotsSquare;
