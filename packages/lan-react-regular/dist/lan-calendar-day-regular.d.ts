import React from 'react';

export interface LanCalendarDayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarDayRegular(props: LanCalendarDayRegularProps): React.ReactElement;
export default LanCalendarDayRegular;
