import React from 'react';

export interface MinaLetterPSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterPSquare: React.FC<MinaLetterPSquareProps>;
export default MinaLetterPSquare;
