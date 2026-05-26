import React from 'react';

export interface LanSlidersVSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersVSquareRegular: React.FC<LanSlidersVSquareRegularProps>;
export default LanSlidersVSquareRegular;
