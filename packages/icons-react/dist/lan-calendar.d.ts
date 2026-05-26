import React from 'react';

export interface LanCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendar: React.FC<LanCalendarProps>;
export default LanCalendar;
