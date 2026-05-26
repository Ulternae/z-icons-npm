import React from 'react';

export interface LanPenToSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenToSquareRegular: React.FC<LanPenToSquareRegularProps>;
export default LanPenToSquareRegular;
