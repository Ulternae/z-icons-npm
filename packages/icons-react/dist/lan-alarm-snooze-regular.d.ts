import React from 'react';

export interface LanAlarmSnoozeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmSnoozeRegular: React.FC<LanAlarmSnoozeRegularProps>;
export default LanAlarmSnoozeRegular;
