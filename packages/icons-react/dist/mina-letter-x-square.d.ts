import React from 'react';

export interface MinaLetterXSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterXSquare: React.FC<MinaLetterXSquareProps>;
export default MinaLetterXSquare;
