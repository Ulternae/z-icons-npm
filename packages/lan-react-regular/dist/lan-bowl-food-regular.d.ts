import React from 'react';

export interface LanBowlFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlFoodRegular(props: LanBowlFoodRegularProps): React.ReactElement;
export default LanBowlFoodRegular;
