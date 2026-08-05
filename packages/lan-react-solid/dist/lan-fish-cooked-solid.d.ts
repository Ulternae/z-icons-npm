import React from 'react';

export interface LanFishCookedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishCookedSolid(props: LanFishCookedSolidProps): React.ReactElement;
export default LanFishCookedSolid;
