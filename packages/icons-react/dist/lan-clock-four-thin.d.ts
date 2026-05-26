import React from 'react';

export interface LanClockFourThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFourThin: React.FC<LanClockFourThinProps>;
export default LanClockFourThin;
