import React from 'react';

export interface LanAlarmSnoozeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmSnoozeThin: React.FC<LanAlarmSnoozeThinProps>;
export default LanAlarmSnoozeThin;
