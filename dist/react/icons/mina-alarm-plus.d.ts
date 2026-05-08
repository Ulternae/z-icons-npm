import React from 'react';

export interface MinaAlarmPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaAlarmPlus: React.FC<MinaAlarmPlusProps>;
export default MinaAlarmPlus;
