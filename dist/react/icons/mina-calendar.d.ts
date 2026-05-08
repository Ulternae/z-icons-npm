import React from 'react';

export interface MinaCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendar: React.FC<MinaCalendarProps>;
export default MinaCalendar;
