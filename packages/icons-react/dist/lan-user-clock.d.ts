import React from 'react';

export interface LanUserClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserClock: React.FC<LanUserClockProps>;
export default LanUserClock;
