import React from 'react';

export interface MinaSmileSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSmileSquare: React.FC<MinaSmileSquareProps>;
export default MinaSmileSquare;
