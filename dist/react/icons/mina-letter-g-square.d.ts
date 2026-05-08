import React from 'react';

export interface MinaLetterGSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterGSquare: React.FC<MinaLetterGSquareProps>;
export default MinaLetterGSquare;
