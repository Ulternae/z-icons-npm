import React from 'react';

export interface LanClockFiveThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveThirtyThin: React.FC<LanClockFiveThirtyThinProps>;
export default LanClockFiveThirtyThin;
