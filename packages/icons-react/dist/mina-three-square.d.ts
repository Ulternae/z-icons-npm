import React from 'react';

export interface MinaThreeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaThreeSquare: React.FC<MinaThreeSquareProps>;
export default MinaThreeSquare;
