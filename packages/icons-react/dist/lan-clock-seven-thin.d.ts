import React from 'react';

export interface LanClockSevenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSevenThin: React.FC<LanClockSevenThinProps>;
export default LanClockSevenThin;
