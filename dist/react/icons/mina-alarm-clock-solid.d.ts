import React from 'react';

export interface MinaAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmClockSolid: React.FC<MinaAlarmClockSolidProps>;
export default MinaAlarmClockSolid;
