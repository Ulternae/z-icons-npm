import React from 'react';

export interface LanClockNineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineSolid: React.FC<LanClockNineSolidProps>;
export default LanClockNineSolid;
