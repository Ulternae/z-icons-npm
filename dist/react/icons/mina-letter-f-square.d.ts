import React from 'react';

export interface MinaLetterFSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterFSquare: React.FC<MinaLetterFSquareProps>;
export default MinaLetterFSquare;
