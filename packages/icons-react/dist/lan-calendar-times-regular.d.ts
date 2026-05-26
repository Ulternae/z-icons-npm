import React from 'react';

export interface LanCalendarTimesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimesRegular: React.FC<LanCalendarTimesRegularProps>;
export default LanCalendarTimesRegular;
