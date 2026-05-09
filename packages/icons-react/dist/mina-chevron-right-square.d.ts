import React from 'react';

export interface MinaChevronRightSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChevronRightSquare: React.FC<MinaChevronRightSquareProps>;
export default MinaChevronRightSquare;
