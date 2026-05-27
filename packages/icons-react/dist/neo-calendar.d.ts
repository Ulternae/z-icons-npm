import React from 'react';

export interface NeoCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoCalendar: React.FC<NeoCalendarProps>;
export default NeoCalendar;
