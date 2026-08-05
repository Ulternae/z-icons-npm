import React from 'react';

export interface LanAlarmSnoozeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmSnooze(props: LanAlarmSnoozeProps): React.ReactElement;
export default LanAlarmSnooze;
