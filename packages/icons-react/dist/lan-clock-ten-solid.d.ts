import React from 'react';

export interface LanClockTenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTenSolid: React.FC<LanClockTenSolidProps>;
export default LanClockTenSolid;
