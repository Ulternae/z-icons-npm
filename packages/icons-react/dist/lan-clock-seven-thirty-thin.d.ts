import React from 'react';

export interface LanClockSevenThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSevenThirtyThin: React.FC<LanClockSevenThirtyThinProps>;
export default LanClockSevenThirtyThin;
