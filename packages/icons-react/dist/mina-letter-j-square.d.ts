import React from 'react';

export interface MinaLetterJSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterJSquare: React.FC<MinaLetterJSquareProps>;
export default MinaLetterJSquare;
