import React from 'react';

export interface LanCalendarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendar(props: LanCalendarProps): React.ReactElement;
export default LanCalendar;
