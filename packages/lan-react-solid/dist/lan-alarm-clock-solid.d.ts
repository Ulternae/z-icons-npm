import React from 'react';

export interface LanAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmClockSolid(props: LanAlarmClockSolidProps): React.ReactElement;
export default LanAlarmClockSolid;
