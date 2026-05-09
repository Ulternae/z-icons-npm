import React from 'react';

export interface MinaHashSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaHashSquare: React.FC<MinaHashSquareProps>;
export default MinaHashSquare;
