import React from 'react';

export interface LanClockEightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockEightThin: React.FC<LanClockEightThinProps>;
export default LanClockEightThin;
