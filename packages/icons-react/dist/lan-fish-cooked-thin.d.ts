import React from 'react';

export interface LanFishCookedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishCookedThin: React.FC<LanFishCookedThinProps>;
export default LanFishCookedThin;
