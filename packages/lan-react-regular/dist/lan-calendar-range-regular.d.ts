import React from 'react';

export interface LanCalendarRangeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarRangeRegular(props: LanCalendarRangeRegularProps): React.ReactElement;
export default LanCalendarRangeRegular;
