import React from 'react';

export interface LanBowlFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlFoodSolid: React.FC<LanBowlFoodSolidProps>;
export default LanBowlFoodSolid;
