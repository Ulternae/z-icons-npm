import React from 'react';

export interface LanSunglassesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSunglassesRegular(props: LanSunglassesRegularProps): React.ReactElement;
export default LanSunglassesRegular;
