import React from 'react';

export interface LanSpaceStationMoonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSpaceStationMoonRegular: React.FC<LanSpaceStationMoonRegularProps>;
export default LanSpaceStationMoonRegular;
