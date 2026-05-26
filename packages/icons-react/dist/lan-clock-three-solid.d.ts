import React from 'react';

export interface LanClockThreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockThreeSolid: React.FC<LanClockThreeSolidProps>;
export default LanClockThreeSolid;
