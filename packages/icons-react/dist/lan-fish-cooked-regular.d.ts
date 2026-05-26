import React from 'react';

export interface LanFishCookedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishCookedRegular: React.FC<LanFishCookedRegularProps>;
export default LanFishCookedRegular;
