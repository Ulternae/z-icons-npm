import React from 'react';

export interface MinaLetterSSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterSSquare: React.FC<MinaLetterSSquareProps>;
export default MinaLetterSSquare;
