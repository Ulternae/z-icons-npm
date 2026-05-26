import React from 'react';

export interface LanAlarmMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAlarmMinus: React.FC<LanAlarmMinusProps>;
export default LanAlarmMinus;
