import React from 'react';

export interface LanShieldTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldTimes: React.FC<LanShieldTimesProps>;
export default LanShieldTimes;
