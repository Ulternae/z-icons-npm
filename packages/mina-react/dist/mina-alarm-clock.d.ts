import React from 'react';

export interface MinaAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmClock(props: MinaAlarmClockProps): React.ReactElement;
export default MinaAlarmClock;
