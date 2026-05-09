import React from 'react';

export interface MinaPauseSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaPauseSquare: React.FC<MinaPauseSquareProps>;
export default MinaPauseSquare;
