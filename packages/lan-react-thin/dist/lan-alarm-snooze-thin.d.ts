import React from 'react';

export interface LanAlarmSnoozeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmSnoozeThin(props: LanAlarmSnoozeThinProps): React.ReactElement;
export default LanAlarmSnoozeThin;
