import React from 'react';

export interface LanFishCookedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishCookedThin(props: LanFishCookedThinProps): React.ReactElement;
export default LanFishCookedThin;
