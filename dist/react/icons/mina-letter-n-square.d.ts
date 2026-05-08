import React from 'react';

export interface MinaLetterNSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterNSquare: React.FC<MinaLetterNSquareProps>;
export default MinaLetterNSquare;
