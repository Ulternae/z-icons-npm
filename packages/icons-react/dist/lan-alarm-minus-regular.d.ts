import React from 'react';

export interface LanAlarmMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmMinusRegular: React.FC<LanAlarmMinusRegularProps>;
export default LanAlarmMinusRegular;
