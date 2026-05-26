import React from 'react';

export interface LanClockNineThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineThirtyThin: React.FC<LanClockNineThirtyThinProps>;
export default LanClockNineThirtyThin;
