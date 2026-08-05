import React from 'react';

export interface MinaAlarmSnoozeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlarmSnoozeSolid(props: MinaAlarmSnoozeSolidProps): React.ReactElement;
export default MinaAlarmSnoozeSolid;
