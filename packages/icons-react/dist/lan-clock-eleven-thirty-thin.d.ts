import React from 'react';

export interface LanClockElevenThirtyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockElevenThirtyThin: React.FC<LanClockElevenThirtyThinProps>;
export default LanClockElevenThirtyThin;
