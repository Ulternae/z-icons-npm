import React from 'react';

export interface LanCanFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCanFood: React.FC<LanCanFoodProps>;
export default LanCanFood;
