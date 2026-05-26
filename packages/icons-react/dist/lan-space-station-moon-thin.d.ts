import React from 'react';

export interface LanSpaceStationMoonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaceStationMoonThin: React.FC<LanSpaceStationMoonThinProps>;
export default LanSpaceStationMoonThin;
