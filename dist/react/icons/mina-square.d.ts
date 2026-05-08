import React from 'react';

export interface MinaSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquare: React.FC<MinaSquareProps>;
export default MinaSquare;
