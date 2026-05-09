import React from 'react';

export interface MinaAngrySquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAngrySquare: React.FC<MinaAngrySquareProps>;
export default MinaAngrySquare;
