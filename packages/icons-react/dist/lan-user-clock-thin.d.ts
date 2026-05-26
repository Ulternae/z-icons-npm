import React from 'react';

export interface LanUserClockThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserClockThin: React.FC<LanUserClockThinProps>;
export default LanUserClockThin;
