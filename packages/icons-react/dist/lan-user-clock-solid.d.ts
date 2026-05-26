import React from 'react';

export interface LanUserClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUserClockSolid: React.FC<LanUserClockSolidProps>;
export default LanUserClockSolid;
