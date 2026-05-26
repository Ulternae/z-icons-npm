import React from 'react';

export interface LanHourglassClockSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassClockSolid: React.FC<LanHourglassClockSolidProps>;
export default LanHourglassClockSolid;
