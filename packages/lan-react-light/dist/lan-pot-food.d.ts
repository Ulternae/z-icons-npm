import React from 'react';

export interface LanPotFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotFood(props: LanPotFoodProps): React.ReactElement;
export default LanPotFood;
