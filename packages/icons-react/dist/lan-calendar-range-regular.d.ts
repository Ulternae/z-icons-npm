import React from 'react';

export interface LanCalendarRangeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarRangeRegular: React.FC<LanCalendarRangeRegularProps>;
export default LanCalendarRangeRegular;
