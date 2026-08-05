import React from 'react';

export interface NeoAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoAlarmClockSolid(props: NeoAlarmClockSolidProps): React.ReactElement;
export default NeoAlarmClockSolid;
