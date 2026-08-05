import React from 'react';

export interface LanCanFoodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanFood(props: LanCanFoodProps): React.ReactElement;
export default LanCanFood;
