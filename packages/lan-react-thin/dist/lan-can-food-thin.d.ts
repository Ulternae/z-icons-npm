import React from 'react';

export interface LanCanFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanFoodThin(props: LanCanFoodThinProps): React.ReactElement;
export default LanCanFoodThin;
