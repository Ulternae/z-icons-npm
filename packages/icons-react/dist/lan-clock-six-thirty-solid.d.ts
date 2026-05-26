import React from 'react';

export interface LanClockSixThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockSixThirtySolid: React.FC<LanClockSixThirtySolidProps>;
export default LanClockSixThirtySolid;
