import React from 'react';

export interface LanCalendarWeekThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarWeekThin(props: LanCalendarWeekThinProps): React.ReactElement;
export default LanCalendarWeekThin;
