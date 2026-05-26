import React from 'react';

export interface LanAlarmClockRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmClockRegular: React.FC<LanAlarmClockRegularProps>;
export default LanAlarmClockRegular;
