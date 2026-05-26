import React from 'react';

export interface LanCalendarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarThin: React.FC<LanCalendarThinProps>;
export default LanCalendarThin;
