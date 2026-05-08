import React from 'react';

export interface CoreAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreAlarmClock: React.FC<CoreAlarmClockProps>;
export default CoreAlarmClock;
