import React from 'react';

export interface LanCalendarDayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarDay(props: LanCalendarDayProps): React.ReactElement;
export default LanCalendarDay;
