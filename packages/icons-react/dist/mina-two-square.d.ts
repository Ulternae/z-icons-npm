import React from 'react';

export interface MinaTwoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaTwoSquare: React.FC<MinaTwoSquareProps>;
export default MinaTwoSquare;
