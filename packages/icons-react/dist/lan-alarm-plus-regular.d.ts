import React from 'react';

export interface LanAlarmPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmPlusRegular: React.FC<LanAlarmPlusRegularProps>;
export default LanAlarmPlusRegular;
