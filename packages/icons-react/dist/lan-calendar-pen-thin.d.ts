import React from 'react';

export interface LanCalendarPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPenThin: React.FC<LanCalendarPenThinProps>;
export default LanCalendarPenThin;
