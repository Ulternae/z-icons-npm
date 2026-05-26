import React from 'react';

export interface LanBowlFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlFood: React.FC<LanBowlFoodProps>;
export default LanBowlFood;
