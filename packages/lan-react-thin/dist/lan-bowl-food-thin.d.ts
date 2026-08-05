import React from 'react';

export interface LanBowlFoodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlFoodThin(props: LanBowlFoodThinProps): React.ReactElement;
export default LanBowlFoodThin;
