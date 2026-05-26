import React from 'react';

export interface LanClockTenThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockTenThirtySolid: React.FC<LanClockTenThirtySolidProps>;
export default LanClockTenThirtySolid;
