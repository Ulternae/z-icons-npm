import React from 'react';

export interface LanPlusSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPlusSquareRegular: React.FC<LanPlusSquareRegularProps>;
export default LanPlusSquareRegular;
