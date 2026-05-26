import React from 'react';

export interface LanCanFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanFoodRegular: React.FC<LanCanFoodRegularProps>;
export default LanCanFoodRegular;
