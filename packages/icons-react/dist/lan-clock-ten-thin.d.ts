import React from 'react';

export interface LanClockTenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTenThin: React.FC<LanClockTenThinProps>;
export default LanClockTenThin;
