import React from 'react';

export interface NeoSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoSquare: React.FC<NeoSquareProps>;
export default NeoSquare;
