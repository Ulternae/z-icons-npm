import React from 'react';

export interface MinaLetterUSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterUSquare: React.FC<MinaLetterUSquareProps>;
export default MinaLetterUSquare;
