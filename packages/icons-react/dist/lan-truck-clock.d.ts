import React from 'react';

export interface LanTruckClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTruckClock: React.FC<LanTruckClockProps>;
export default LanTruckClock;
