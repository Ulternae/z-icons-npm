import React from 'react';

export interface LanCalendarDayThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarDayThin(props: LanCalendarDayThinProps): React.ReactElement;
export default LanCalendarDayThin;
