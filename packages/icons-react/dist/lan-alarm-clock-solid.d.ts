import React from 'react';

export interface LanAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmClockSolid: React.FC<LanAlarmClockSolidProps>;
export default LanAlarmClockSolid;
