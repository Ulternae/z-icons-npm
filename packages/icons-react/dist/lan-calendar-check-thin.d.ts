import React from 'react';

export interface LanCalendarCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCheckThin: React.FC<LanCalendarCheckThinProps>;
export default LanCalendarCheckThin;
