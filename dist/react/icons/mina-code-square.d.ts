import React from 'react';

export interface MinaCodeSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCodeSquare: React.FC<MinaCodeSquareProps>;
export default MinaCodeSquare;
