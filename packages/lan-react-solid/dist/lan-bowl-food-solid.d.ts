import React from 'react';

export interface LanBowlFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBowlFoodSolid(props: LanBowlFoodSolidProps): React.ReactElement;
export default LanBowlFoodSolid;
