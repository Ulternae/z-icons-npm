import React from 'react';

export interface LanAlarmMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmMinusSolid: React.FC<LanAlarmMinusSolidProps>;
export default LanAlarmMinusSolid;
