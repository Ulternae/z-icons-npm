import React from 'react';

export interface LanClockTwoThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwoThin: React.FC<LanClockTwoThinProps>;
export default LanClockTwoThin;
