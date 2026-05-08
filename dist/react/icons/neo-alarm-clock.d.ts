import React from 'react';

export interface NeoAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAlarmClock: React.FC<NeoAlarmClockProps>;
export default NeoAlarmClock;
