import React from 'react';

export interface CoreAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreAlarmClock(props: CoreAlarmClockProps): React.ReactElement;
export default CoreAlarmClock;
