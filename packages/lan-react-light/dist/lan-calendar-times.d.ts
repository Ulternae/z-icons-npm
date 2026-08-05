import React from 'react';

export interface LanCalendarTimesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimes(props: LanCalendarTimesProps): React.ReactElement;
export default LanCalendarTimes;
