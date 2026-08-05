import React from 'react';

export interface LanAlarmSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmSnoozeSolid(props: LanAlarmSnoozeSolidProps): React.ReactElement;
export default LanAlarmSnoozeSolid;
