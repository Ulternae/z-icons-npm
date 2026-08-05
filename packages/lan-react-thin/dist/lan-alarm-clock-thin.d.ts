import React from 'react';

export interface LanAlarmClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmClockThin(props: LanAlarmClockThinProps): React.ReactElement;
export default LanAlarmClockThin;
