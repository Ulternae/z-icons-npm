import React from 'react';

export interface MinaAlarmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarm(props: MinaAlarmProps): React.ReactElement;
export default MinaAlarm;
