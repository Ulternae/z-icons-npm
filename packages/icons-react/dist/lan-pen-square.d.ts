import React from 'react';

export interface LanPenSquareProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSquare: React.FC<LanPenSquareProps>;
export default LanPenSquare;
