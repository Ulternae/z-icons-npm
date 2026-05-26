import React from 'react';

export interface LanClockSixThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixThin: React.FC<LanClockSixThinProps>;
export default LanClockSixThin;
