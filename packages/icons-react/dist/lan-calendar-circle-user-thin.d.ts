import React from 'react';

export interface LanCalendarCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleUserThin: React.FC<LanCalendarCircleUserThinProps>;
export default LanCalendarCircleUserThin;
