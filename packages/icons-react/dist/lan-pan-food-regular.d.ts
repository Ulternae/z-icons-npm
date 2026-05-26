import React from 'react';

export interface LanPanFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPanFoodRegular: React.FC<LanPanFoodRegularProps>;
export default LanPanFoodRegular;
