import React from 'react';

export interface LanClockDeskSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockDeskSolid: React.FC<LanClockDeskSolidProps>;
export default LanClockDeskSolid;
