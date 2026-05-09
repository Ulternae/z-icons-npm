import React from 'react';

export interface MinaAlarmSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmSnooze: React.FC<MinaAlarmSnoozeProps>;
export default MinaAlarmSnooze;
