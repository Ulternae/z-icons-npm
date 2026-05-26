import React from 'react';

export interface LanPotFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPotFoodSolid: React.FC<LanPotFoodSolidProps>;
export default LanPotFoodSolid;
