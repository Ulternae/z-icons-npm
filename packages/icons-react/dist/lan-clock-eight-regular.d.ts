import React from 'react';

export interface LanClockEightRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockEightRegular: React.FC<LanClockEightRegularProps>;
export default LanClockEightRegular;
