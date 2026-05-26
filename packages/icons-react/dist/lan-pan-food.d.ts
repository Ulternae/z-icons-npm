import React from 'react';

export interface LanPanFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFood: React.FC<LanPanFoodProps>;
export default LanPanFood;
