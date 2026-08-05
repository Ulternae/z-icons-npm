import React from 'react';

export interface LanPotFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotFoodThin(props: LanPotFoodThinProps): React.ReactElement;
export default LanPotFoodThin;
