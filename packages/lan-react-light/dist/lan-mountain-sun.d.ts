import React from 'react';

export interface LanMountainSunProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMountainSun(props: LanMountainSunProps): React.ReactElement;
export default LanMountainSun;
