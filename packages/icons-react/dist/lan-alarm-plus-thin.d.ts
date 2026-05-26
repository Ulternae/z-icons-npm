import React from 'react';

export interface LanAlarmPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmPlusThin: React.FC<LanAlarmPlusThinProps>;
export default LanAlarmPlusThin;
