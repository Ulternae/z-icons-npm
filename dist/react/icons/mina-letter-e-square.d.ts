import React from 'react';

export interface MinaLetterESquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterESquare: React.FC<MinaLetterESquareProps>;
export default MinaLetterESquare;
