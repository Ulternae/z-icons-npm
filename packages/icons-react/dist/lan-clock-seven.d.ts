import React from 'react';

export interface LanClockSevenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSeven: React.FC<LanClockSevenProps>;
export default LanClockSeven;
