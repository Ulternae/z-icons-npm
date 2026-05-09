import React from 'react';

export interface MinaLetterTSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterTSquare: React.FC<MinaLetterTSquareProps>;
export default MinaLetterTSquare;
