import React from 'react';

export interface LanCalendarRangeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarRangeThin: React.FC<LanCalendarRangeThinProps>;
export default LanCalendarRangeThin;
