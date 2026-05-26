import React from 'react';

export interface LanUserTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserTimes: React.FC<LanUserTimesProps>;
export default LanUserTimes;
