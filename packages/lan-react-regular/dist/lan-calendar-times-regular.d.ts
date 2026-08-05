import React from 'react';

export interface LanCalendarTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimesRegular(props: LanCalendarTimesRegularProps): React.ReactElement;
export default LanCalendarTimesRegular;
