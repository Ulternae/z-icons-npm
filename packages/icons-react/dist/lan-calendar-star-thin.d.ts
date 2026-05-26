import React from 'react';

export interface LanCalendarStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarStarThin: React.FC<LanCalendarStarThinProps>;
export default LanCalendarStarThin;
