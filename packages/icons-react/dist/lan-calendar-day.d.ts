import React from 'react';

export interface LanCalendarDayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarDay: React.FC<LanCalendarDayProps>;
export default LanCalendarDay;
