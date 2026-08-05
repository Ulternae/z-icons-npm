import React from 'react';

export interface NeoAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAlarmClock(props: NeoAlarmClockProps): React.ReactElement;
export default NeoAlarmClock;
