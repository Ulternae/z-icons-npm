import React from 'react';

export interface LanHSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHSquare: React.FC<LanHSquareProps>;
export default LanHSquare;
