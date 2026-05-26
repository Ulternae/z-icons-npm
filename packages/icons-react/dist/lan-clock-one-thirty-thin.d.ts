import React from 'react';

export interface LanClockOneThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneThirtyThin: React.FC<LanClockOneThirtyThinProps>;
export default LanClockOneThirtyThin;
