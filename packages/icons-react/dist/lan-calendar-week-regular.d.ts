import React from 'react';

export interface LanCalendarWeekRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarWeekRegular: React.FC<LanCalendarWeekRegularProps>;
export default LanCalendarWeekRegular;
