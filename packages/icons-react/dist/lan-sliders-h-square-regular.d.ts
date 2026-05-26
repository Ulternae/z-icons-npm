import React from 'react';

export interface LanSlidersHSquareRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlidersHSquareRegular: React.FC<LanSlidersHSquareRegularProps>;
export default LanSlidersHSquareRegular;
