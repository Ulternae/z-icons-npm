import React from 'react';

export interface LanCanFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanFoodSolid: React.FC<LanCanFoodSolidProps>;
export default LanCanFoodSolid;
