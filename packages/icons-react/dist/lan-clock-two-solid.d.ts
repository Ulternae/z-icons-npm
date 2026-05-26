import React from 'react';

export interface LanClockTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTwoSolid: React.FC<LanClockTwoSolidProps>;
export default LanClockTwoSolid;
