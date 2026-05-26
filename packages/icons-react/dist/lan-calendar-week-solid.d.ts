import React from 'react';

export interface LanCalendarWeekSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarWeekSolid: React.FC<LanCalendarWeekSolidProps>;
export default LanCalendarWeekSolid;
