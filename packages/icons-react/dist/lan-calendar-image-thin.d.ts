import React from 'react';

export interface LanCalendarImageThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarImageThin: React.FC<LanCalendarImageThinProps>;
export default LanCalendarImageThin;
