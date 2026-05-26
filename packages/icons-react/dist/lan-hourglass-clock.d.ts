import React from 'react';

export interface LanHourglassClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassClock: React.FC<LanHourglassClockProps>;
export default LanHourglassClock;
