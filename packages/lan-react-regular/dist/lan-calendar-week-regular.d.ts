import React from 'react';

export interface LanCalendarWeekRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarWeekRegular(props: LanCalendarWeekRegularProps): React.ReactElement;
export default LanCalendarWeekRegular;
