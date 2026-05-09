import React from 'react';

export interface MinaMusicSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMusicSquare: React.FC<MinaMusicSquareProps>;
export default MinaMusicSquare;
