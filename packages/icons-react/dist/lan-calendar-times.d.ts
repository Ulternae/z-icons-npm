import React from 'react';

export interface LanCalendarTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimes: React.FC<LanCalendarTimesProps>;
export default LanCalendarTimes;
