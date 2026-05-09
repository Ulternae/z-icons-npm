import React from 'react';

export interface MinaAlarmXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmXSolid: React.FC<MinaAlarmXSolidProps>;
export default MinaAlarmXSolid;
