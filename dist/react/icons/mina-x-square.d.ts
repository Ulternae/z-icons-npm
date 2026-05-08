import React from 'react';

export interface MinaXSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaXSquare: React.FC<MinaXSquareProps>;
export default MinaXSquare;
