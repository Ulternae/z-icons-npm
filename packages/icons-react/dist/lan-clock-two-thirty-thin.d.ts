import React from 'react';

export interface LanClockTwoThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwoThirtyThin: React.FC<LanClockTwoThirtyThinProps>;
export default LanClockTwoThirtyThin;
