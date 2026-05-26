import React from 'react';

export interface LanPenSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSquareRegular: React.FC<LanPenSquareRegularProps>;
export default LanPenSquareRegular;
