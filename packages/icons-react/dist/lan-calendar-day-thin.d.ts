import React from 'react';

export interface LanCalendarDayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarDayThin: React.FC<LanCalendarDayThinProps>;
export default LanCalendarDayThin;
