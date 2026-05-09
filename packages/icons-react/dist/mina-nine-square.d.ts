import React from 'react';

export interface MinaNineSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaNineSquare: React.FC<MinaNineSquareProps>;
export default MinaNineSquare;
