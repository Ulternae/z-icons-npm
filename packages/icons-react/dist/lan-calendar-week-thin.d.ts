import React from 'react';

export interface LanCalendarWeekThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarWeekThin: React.FC<LanCalendarWeekThinProps>;
export default LanCalendarWeekThin;
