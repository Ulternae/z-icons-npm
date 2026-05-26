import React from 'react';

export interface LanSpaceStationMoonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaceStationMoonSolid: React.FC<LanSpaceStationMoonSolidProps>;
export default LanSpaceStationMoonSolid;
