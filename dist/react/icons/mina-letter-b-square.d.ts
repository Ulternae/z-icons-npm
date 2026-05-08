import React from 'react';

export interface MinaLetterBSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterBSquare: React.FC<MinaLetterBSquareProps>;
export default MinaLetterBSquare;
