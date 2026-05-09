import React from 'react';

export interface MinaChevronUpSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronUpSquare: React.FC<MinaChevronUpSquareProps>;
export default MinaChevronUpSquare;
