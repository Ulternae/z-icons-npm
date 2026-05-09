import React from 'react';

export interface MinaLetterCSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterCSquare: React.FC<MinaLetterCSquareProps>;
export default MinaLetterCSquare;
