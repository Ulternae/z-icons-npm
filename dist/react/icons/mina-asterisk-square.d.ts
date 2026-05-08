import React from 'react';

export interface MinaAsteriskSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAsteriskSquare: React.FC<MinaAsteriskSquareProps>;
export default MinaAsteriskSquare;
