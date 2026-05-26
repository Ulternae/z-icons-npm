import React from 'react';

export interface LanMountainSunRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMountainSunRegular: React.FC<LanMountainSunRegularProps>;
export default LanMountainSunRegular;
