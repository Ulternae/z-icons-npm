import React from 'react';

export interface LanClockSevenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSevenRegular: React.FC<LanClockSevenRegularProps>;
export default LanClockSevenRegular;
