import React from 'react';

export interface LanUsdSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsdSquareRegular: React.FC<LanUsdSquareRegularProps>;
export default LanUsdSquareRegular;
