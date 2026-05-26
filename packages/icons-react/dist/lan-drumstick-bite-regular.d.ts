import React from 'react';

export interface LanDrumstickBiteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDrumstickBiteRegular: React.FC<LanDrumstickBiteRegularProps>;
export default LanDrumstickBiteRegular;
