import React from 'react';

export interface LanClockSixSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixSolid: React.FC<LanClockSixSolidProps>;
export default LanClockSixSolid;
