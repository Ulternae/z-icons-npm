import React from 'react';

export interface MinaAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmClock: React.FC<MinaAlarmClockProps>;
export default MinaAlarmClock;
