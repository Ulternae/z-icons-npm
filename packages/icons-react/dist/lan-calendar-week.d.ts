import React from 'react';

export interface LanCalendarWeekProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarWeek: React.FC<LanCalendarWeekProps>;
export default LanCalendarWeek;
