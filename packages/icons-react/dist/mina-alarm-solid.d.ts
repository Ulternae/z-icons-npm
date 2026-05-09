import React from 'react';

export interface MinaAlarmSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmSolid: React.FC<MinaAlarmSolidProps>;
export default MinaAlarmSolid;
