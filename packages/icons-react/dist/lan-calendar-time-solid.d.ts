import React from 'react';

export interface LanCalendarTimeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimeSolid: React.FC<LanCalendarTimeSolidProps>;
export default LanCalendarTimeSolid;
