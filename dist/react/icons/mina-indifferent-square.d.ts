import React from 'react';

export interface MinaIndifferentSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaIndifferentSquare: React.FC<MinaIndifferentSquareProps>;
export default MinaIndifferentSquare;
