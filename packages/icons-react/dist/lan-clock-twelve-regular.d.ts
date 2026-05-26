import React from 'react';

export interface LanClockTwelveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwelveRegular: React.FC<LanClockTwelveRegularProps>;
export default LanClockTwelveRegular;
