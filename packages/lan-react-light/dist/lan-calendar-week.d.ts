import React from 'react';

export interface LanCalendarWeekProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarWeek(props: LanCalendarWeekProps): React.ReactElement;
export default LanCalendarWeek;
