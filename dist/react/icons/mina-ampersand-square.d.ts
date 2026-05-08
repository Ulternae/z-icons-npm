import React from 'react';

export interface MinaAmpersandSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAmpersandSquare: React.FC<MinaAmpersandSquareProps>;
export default MinaAmpersandSquare;
