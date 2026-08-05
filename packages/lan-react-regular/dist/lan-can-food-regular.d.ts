import React from 'react';

export interface LanCanFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCanFoodRegular(props: LanCanFoodRegularProps): React.ReactElement;
export default LanCanFoodRegular;
