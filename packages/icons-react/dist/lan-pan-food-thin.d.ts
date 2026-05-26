import React from 'react';

export interface LanPanFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFoodThin: React.FC<LanPanFoodThinProps>;
export default LanPanFoodThin;
