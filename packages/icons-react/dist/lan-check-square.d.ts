import React from 'react';

export interface LanCheckSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCheckSquare: React.FC<LanCheckSquareProps>;
export default LanCheckSquare;
