import React from 'react';

export interface LanAlarmClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmClockThin: React.FC<LanAlarmClockThinProps>;
export default LanAlarmClockThin;
