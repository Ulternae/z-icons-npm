import React from 'react';

export interface MinaAlarmProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarm: React.FC<MinaAlarmProps>;
export default MinaAlarm;
