import React from 'react';

export interface LanClockFourSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFourSolid: React.FC<LanClockFourSolidProps>;
export default LanClockFourSolid;
