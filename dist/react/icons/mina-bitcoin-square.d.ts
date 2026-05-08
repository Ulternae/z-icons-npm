import React from 'react';

export interface MinaBitcoinSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBitcoinSquare: React.FC<MinaBitcoinSquareProps>;
export default MinaBitcoinSquare;
