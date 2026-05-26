import React from 'react';

export interface LanPotFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotFoodRegular: React.FC<LanPotFoodRegularProps>;
export default LanPotFoodRegular;
