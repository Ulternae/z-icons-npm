import React from 'react';

export interface LanCircleUserClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleUserClock: React.FC<LanCircleUserClockProps>;
export default LanCircleUserClock;
