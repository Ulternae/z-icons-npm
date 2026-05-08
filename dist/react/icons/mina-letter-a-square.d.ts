import React from 'react';

export interface MinaLetterASquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterASquare: React.FC<MinaLetterASquareProps>;
export default MinaLetterASquare;
