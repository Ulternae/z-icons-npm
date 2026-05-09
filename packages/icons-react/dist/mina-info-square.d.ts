import React from 'react';

export interface MinaInfoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaInfoSquare: React.FC<MinaInfoSquareProps>;
export default MinaInfoSquare;
