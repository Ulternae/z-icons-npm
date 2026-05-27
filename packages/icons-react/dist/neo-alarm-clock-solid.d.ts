import React from 'react';

export interface NeoAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoAlarmClockSolid: React.FC<NeoAlarmClockSolidProps>;
export default NeoAlarmClockSolid;
