import React from 'react';

export interface LanCalendarRangeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarRangeThin(props: LanCalendarRangeThinProps): React.ReactElement;
export default LanCalendarRangeThin;
