import React from 'react';

export interface LanSpaceStationMoonProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaceStationMoon: React.FC<LanSpaceStationMoonProps>;
export default LanSpaceStationMoon;
