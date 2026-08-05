import React from 'react';

export interface LanAlarmClockProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmClock(props: LanAlarmClockProps): React.ReactElement;
export default LanAlarmClock;
