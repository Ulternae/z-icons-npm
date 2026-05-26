import React from 'react';

export interface LanClockFourProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFour: React.FC<LanClockFourProps>;
export default LanClockFour;
