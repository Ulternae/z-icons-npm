import React from 'react';

export interface MinaAlarmSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmSmoke(props: MinaAlarmSmokeProps): React.ReactElement;
export default MinaAlarmSmoke;
