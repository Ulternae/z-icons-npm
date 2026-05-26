import React from 'react';

export interface LanBowlFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlFoodThin: React.FC<LanBowlFoodThinProps>;
export default LanBowlFoodThin;
