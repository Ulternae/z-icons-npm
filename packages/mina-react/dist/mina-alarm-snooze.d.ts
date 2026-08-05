import React from 'react';

export interface MinaAlarmSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmSnooze(props: MinaAlarmSnoozeProps): React.ReactElement;
export default MinaAlarmSnooze;
