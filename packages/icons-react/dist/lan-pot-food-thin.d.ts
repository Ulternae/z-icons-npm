import React from 'react';

export interface LanPotFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotFoodThin: React.FC<LanPotFoodThinProps>;
export default LanPotFoodThin;
