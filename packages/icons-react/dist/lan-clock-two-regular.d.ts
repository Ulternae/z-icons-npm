import React from 'react';

export interface LanClockTwoRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwoRegular: React.FC<LanClockTwoRegularProps>;
export default LanClockTwoRegular;
