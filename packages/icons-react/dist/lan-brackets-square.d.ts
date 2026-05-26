import React from 'react';

export interface LanBracketsSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBracketsSquare: React.FC<LanBracketsSquareProps>;
export default LanBracketsSquare;
