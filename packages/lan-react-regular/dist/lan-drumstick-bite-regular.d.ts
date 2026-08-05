import React from 'react';

export interface LanDrumstickBiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumstickBiteRegular(props: LanDrumstickBiteRegularProps): React.ReactElement;
export default LanDrumstickBiteRegular;
