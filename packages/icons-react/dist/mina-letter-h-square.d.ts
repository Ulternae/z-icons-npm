import React from 'react';

export interface MinaLetterHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterHSquare: React.FC<MinaLetterHSquareProps>;
export default MinaLetterHSquare;
