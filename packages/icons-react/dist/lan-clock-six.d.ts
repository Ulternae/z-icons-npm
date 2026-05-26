import React from 'react';

export interface LanClockSixProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSix: React.FC<LanClockSixProps>;
export default LanClockSix;
