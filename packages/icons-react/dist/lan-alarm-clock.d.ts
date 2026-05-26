import React from 'react';

export interface LanAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmClock: React.FC<LanAlarmClockProps>;
export default LanAlarmClock;
