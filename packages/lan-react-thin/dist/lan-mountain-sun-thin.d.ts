import React from 'react';

export interface LanMountainSunThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainSunThin(props: LanMountainSunThinProps): React.ReactElement;
export default LanMountainSunThin;
