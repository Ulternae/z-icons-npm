import React from 'react';

export interface MinaLetterRSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterRSquare: React.FC<MinaLetterRSquareProps>;
export default MinaLetterRSquare;
