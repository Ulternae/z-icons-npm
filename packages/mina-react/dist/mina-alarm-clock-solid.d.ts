import React from 'react';

export interface MinaAlarmClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmClockSolid(props: MinaAlarmClockSolidProps): React.ReactElement;
export default MinaAlarmClockSolid;
