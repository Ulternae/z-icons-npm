import React from 'react';

export interface LanClockNineThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockNineThirtySolid: React.FC<LanClockNineThirtySolidProps>;
export default LanClockNineThirtySolid;
