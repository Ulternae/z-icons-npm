import React from 'react';

export interface LanAlarmExclamationProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmExclamation: React.FC<LanAlarmExclamationProps>;
export default LanAlarmExclamation;
