import React from 'react';

export interface LanDrawSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrawSquare: React.FC<LanDrawSquareProps>;
export default LanDrawSquare;
