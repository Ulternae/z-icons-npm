import React from 'react';

export interface MinaOneSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaOneSquare: React.FC<MinaOneSquareProps>;
export default MinaOneSquare;
