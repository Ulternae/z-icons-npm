import React from 'react';

export interface LanSpaceStationMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSpaceStationMoon(props: LanSpaceStationMoonProps): React.ReactElement;
export default LanSpaceStationMoon;
