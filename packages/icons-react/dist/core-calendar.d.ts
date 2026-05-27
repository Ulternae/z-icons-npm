import React from 'react';

export interface CoreCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendar: React.FC<CoreCalendarProps>;
export default CoreCalendar;
