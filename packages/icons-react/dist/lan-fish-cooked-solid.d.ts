import React from 'react';

export interface LanFishCookedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFishCookedSolid: React.FC<LanFishCookedSolidProps>;
export default LanFishCookedSolid;
