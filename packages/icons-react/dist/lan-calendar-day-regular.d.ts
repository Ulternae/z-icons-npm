import React from 'react';

export interface LanCalendarDayRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarDayRegular: React.FC<LanCalendarDayRegularProps>;
export default LanCalendarDayRegular;
