import React from 'react';

export interface LanMountainSunSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainSunSolid(props: LanMountainSunSolidProps): React.ReactElement;
export default LanMountainSunSolid;
