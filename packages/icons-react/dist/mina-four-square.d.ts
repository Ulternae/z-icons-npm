import React from 'react';

export interface MinaFourSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaFourSquare: React.FC<MinaFourSquareProps>;
export default MinaFourSquare;
