import React from 'react';

export interface MinaLetterZSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterZSquare: React.FC<MinaLetterZSquareProps>;
export default MinaLetterZSquare;
