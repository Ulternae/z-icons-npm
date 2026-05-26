import React from 'react';

export interface LanClockEightSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockEightSolid: React.FC<LanClockEightSolidProps>;
export default LanClockEightSolid;
