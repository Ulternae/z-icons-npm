import React from 'react';

export interface LanPotFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotFoodRegular(props: LanPotFoodRegularProps): React.ReactElement;
export default LanPotFoodRegular;
