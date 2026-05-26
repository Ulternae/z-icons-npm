import React from 'react';

export interface LanPanFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFoodSolid: React.FC<LanPanFoodSolidProps>;
export default LanPanFoodSolid;
