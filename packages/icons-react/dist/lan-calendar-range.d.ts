import React from 'react';

export interface LanCalendarRangeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarRange: React.FC<LanCalendarRangeProps>;
export default LanCalendarRange;
