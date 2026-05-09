import React from 'react';

export interface MinaAlarmPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmPlusSolid: React.FC<MinaAlarmPlusSolidProps>;
export default MinaAlarmPlusSolid;
