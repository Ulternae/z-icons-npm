import React from 'react';

export interface MinaLetterOSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterOSquare: React.FC<MinaLetterOSquareProps>;
export default MinaLetterOSquare;
