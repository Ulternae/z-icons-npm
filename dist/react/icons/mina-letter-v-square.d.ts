import React from 'react';

export interface MinaLetterVSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterVSquare: React.FC<MinaLetterVSquareProps>;
export default MinaLetterVSquare;
