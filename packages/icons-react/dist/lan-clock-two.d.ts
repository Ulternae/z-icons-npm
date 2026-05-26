import React from 'react';

export interface LanClockTwoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwo: React.FC<LanClockTwoProps>;
export default LanClockTwo;
