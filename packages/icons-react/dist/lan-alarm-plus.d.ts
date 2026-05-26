import React from 'react';

export interface LanAlarmPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmPlus: React.FC<LanAlarmPlusProps>;
export default LanAlarmPlus;
