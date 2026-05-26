import React from 'react';

export interface LanClockEightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockEight: React.FC<LanClockEightProps>;
export default LanClockEight;
