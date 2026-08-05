import React from 'react';

export interface LanPanFoodSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFoodSolid(props: LanPanFoodSolidProps): React.ReactElement;
export default LanPanFoodSolid;
