import React from 'react';

export interface MinaLetterMSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterMSquare: React.FC<MinaLetterMSquareProps>;
export default MinaLetterMSquare;
