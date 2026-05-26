import React from 'react';

export interface LanCalendarRangeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarRangeSolid: React.FC<LanCalendarRangeSolidProps>;
export default LanCalendarRangeSolid;
