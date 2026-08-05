import React from 'react';

export interface LanCalendarRangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarRange(props: LanCalendarRangeProps): React.ReactElement;
export default LanCalendarRange;
