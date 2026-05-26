import React from 'react';

export interface LanClockFiveSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveSolid: React.FC<LanClockFiveSolidProps>;
export default LanClockFiveSolid;
