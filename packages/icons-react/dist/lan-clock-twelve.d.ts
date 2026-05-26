import React from 'react';

export interface LanClockTwelveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwelve: React.FC<LanClockTwelveProps>;
export default LanClockTwelve;
