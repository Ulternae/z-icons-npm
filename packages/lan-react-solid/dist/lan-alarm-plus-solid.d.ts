import React from 'react';

export interface LanAlarmPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlarmPlusSolid(props: LanAlarmPlusSolidProps): React.ReactElement;
export default LanAlarmPlusSolid;
