import React from 'react';

export interface MinaLetterYSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterYSquare: React.FC<MinaLetterYSquareProps>;
export default MinaLetterYSquare;
