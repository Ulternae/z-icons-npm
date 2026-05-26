import React from 'react';

export interface LanClockNineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNine: React.FC<LanClockNineProps>;
export default LanClockNine;
