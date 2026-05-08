import React from 'react';

export interface MinaLetterLSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterLSquare: React.FC<MinaLetterLSquareProps>;
export default MinaLetterLSquare;
