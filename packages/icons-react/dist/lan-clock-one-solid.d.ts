import React from 'react';

export interface LanClockOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneSolid: React.FC<LanClockOneSolidProps>;
export default LanClockOneSolid;
