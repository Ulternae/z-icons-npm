import React from 'react';

export interface MinaLetterKSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterKSquare: React.FC<MinaLetterKSquareProps>;
export default MinaLetterKSquare;
