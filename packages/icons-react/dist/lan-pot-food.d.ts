import React from 'react';

export interface LanPotFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotFood: React.FC<LanPotFoodProps>;
export default LanPotFood;
