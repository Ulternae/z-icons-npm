import React from 'react';

export interface MinaCheckSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCheckSquare: React.FC<MinaCheckSquareProps>;
export default MinaCheckSquare;
