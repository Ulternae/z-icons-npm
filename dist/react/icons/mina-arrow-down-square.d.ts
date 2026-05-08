import React from 'react';

export interface MinaArrowDownSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaArrowDownSquare: React.FC<MinaArrowDownSquareProps>;
export default MinaArrowDownSquare;
