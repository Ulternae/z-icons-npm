import React from 'react';

export interface LanBowlFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlFood(props: LanBowlFoodProps): React.ReactElement;
export default LanBowlFood;
