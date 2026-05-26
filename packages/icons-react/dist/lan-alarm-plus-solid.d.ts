import React from 'react';

export interface LanAlarmPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmPlusSolid: React.FC<LanAlarmPlusSolidProps>;
export default LanAlarmPlusSolid;
