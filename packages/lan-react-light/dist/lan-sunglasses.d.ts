import React from 'react';

export interface LanSunglassesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunglasses(props: LanSunglassesProps): React.ReactElement;
export default LanSunglasses;
