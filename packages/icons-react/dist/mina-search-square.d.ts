import React from 'react';

export interface MinaSearchSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSearchSquare: React.FC<MinaSearchSquareProps>;
export default MinaSearchSquare;
