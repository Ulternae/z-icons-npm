import React from 'react';

export interface LanAlarmMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmMinusThin: React.FC<LanAlarmMinusThinProps>;
export default LanAlarmMinusThin;
