import React from 'react';

export interface MinaFunnySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFunnySquare: React.FC<MinaFunnySquareProps>;
export default MinaFunnySquare;
