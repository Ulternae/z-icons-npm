import React from 'react';

export interface LanPanFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFoodThin(props: LanPanFoodThinProps): React.ReactElement;
export default LanPanFoodThin;
