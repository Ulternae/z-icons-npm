import React from 'react';

export interface LanClockFiveThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClockFiveThirtySolid: React.FC<LanClockFiveThirtySolidProps>;
export default LanClockFiveThirtySolid;
