import React from 'react';

export interface LanClockOneThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockOneThirtySolid: React.FC<LanClockOneThirtySolidProps>;
export default LanClockOneThirtySolid;
