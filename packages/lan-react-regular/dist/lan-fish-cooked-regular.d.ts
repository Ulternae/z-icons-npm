import React from 'react';

export interface LanFishCookedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishCookedRegular(props: LanFishCookedRegularProps): React.ReactElement;
export default LanFishCookedRegular;
