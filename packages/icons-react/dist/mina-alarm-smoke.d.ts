import React from 'react';

export interface MinaAlarmSmokeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmSmoke: React.FC<MinaAlarmSmokeProps>;
export default MinaAlarmSmoke;
