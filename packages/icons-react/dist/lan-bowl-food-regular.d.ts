import React from 'react';

export interface LanBowlFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBowlFoodRegular: React.FC<LanBowlFoodRegularProps>;
export default LanBowlFoodRegular;
