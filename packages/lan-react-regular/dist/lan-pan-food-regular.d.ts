import React from 'react';

export interface LanPanFoodRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPanFoodRegular(props: LanPanFoodRegularProps): React.ReactElement;
export default LanPanFoodRegular;
