import React from 'react';

export interface MinaSevenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSevenSquare: React.FC<MinaSevenSquareProps>;
export default MinaSevenSquare;
