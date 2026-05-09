import React from 'react';

export interface MinaEightSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaEightSquare: React.FC<MinaEightSquareProps>;
export default MinaEightSquare;
