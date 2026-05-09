import React from 'react';

export interface MinaActivitySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaActivitySquare: React.FC<MinaActivitySquareProps>;
export default MinaActivitySquare;
