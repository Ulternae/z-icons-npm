import React from 'react';

export interface LanPotFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPotFoodSolid(props: LanPotFoodSolidProps): React.ReactElement;
export default LanPotFoodSolid;
