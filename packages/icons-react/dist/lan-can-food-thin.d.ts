import React from 'react';

export interface LanCanFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanFoodThin: React.FC<LanCanFoodThinProps>;
export default LanCanFoodThin;
