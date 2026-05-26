import React from 'react';

export interface LanTruckClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckClockThin: React.FC<LanTruckClockThinProps>;
export default LanTruckClockThin;
