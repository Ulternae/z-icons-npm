import React from 'react';

export interface LanTruckClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckClockSolid: React.FC<LanTruckClockSolidProps>;
export default LanTruckClockSolid;
