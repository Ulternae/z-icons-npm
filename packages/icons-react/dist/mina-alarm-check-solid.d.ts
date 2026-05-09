import React from 'react';

export interface MinaAlarmCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmCheckSolid: React.FC<MinaAlarmCheckSolidProps>;
export default MinaAlarmCheckSolid;
