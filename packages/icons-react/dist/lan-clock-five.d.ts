import React from 'react';

export interface LanClockFiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFive: React.FC<LanClockFiveProps>;
export default LanClockFive;
