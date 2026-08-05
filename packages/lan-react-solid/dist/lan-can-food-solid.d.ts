import React from 'react';

export interface LanCanFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanFoodSolid(props: LanCanFoodSolidProps): React.ReactElement;
export default LanCanFoodSolid;
