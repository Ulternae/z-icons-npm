import React from 'react';

export interface LanFishCookedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFishCooked(props: LanFishCookedProps): React.ReactElement;
export default LanFishCooked;
