import React from 'react';

export interface LanClockFourThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFourThirtySolid: React.FC<LanClockFourThirtySolidProps>;
export default LanClockFourThirtySolid;
