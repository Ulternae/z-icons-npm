import React from 'react';

export interface MinaWinkSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaWinkSquare: React.FC<MinaWinkSquareProps>;
export default MinaWinkSquare;
