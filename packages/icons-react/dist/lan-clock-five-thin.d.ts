import React from 'react';

export interface LanClockFiveThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveThin: React.FC<LanClockFiveThinProps>;
export default LanClockFiveThin;
