import React from 'react';

export interface LanAlarmSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmSnoozeSolid: React.FC<LanAlarmSnoozeSolidProps>;
export default LanAlarmSnoozeSolid;
