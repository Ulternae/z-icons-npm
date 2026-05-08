import React from 'react';

export interface MinaPlusSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPlusSquare: React.FC<MinaPlusSquareProps>;
export default MinaPlusSquare;
