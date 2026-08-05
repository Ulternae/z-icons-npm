import React from 'react';

export interface LanPanFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFood(props: LanPanFoodProps): React.ReactElement;
export default LanPanFood;
