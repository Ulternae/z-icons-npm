import React from 'react';

export interface MinaAlarmSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmSnoozeSolid: React.FC<MinaAlarmSnoozeSolidProps>;
export default MinaAlarmSnoozeSolid;
