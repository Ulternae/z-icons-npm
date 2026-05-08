import React from 'react';

export interface MinaLetterISquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLetterISquare: React.FC<MinaLetterISquareProps>;
export default MinaLetterISquare;
