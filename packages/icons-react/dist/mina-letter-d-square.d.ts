import React from 'react';

export interface MinaLetterDSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterDSquare: React.FC<MinaLetterDSquareProps>;
export default MinaLetterDSquare;
