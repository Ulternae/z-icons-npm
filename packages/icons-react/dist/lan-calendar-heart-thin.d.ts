import React from 'react';

export interface LanCalendarHeartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarHeartThin: React.FC<LanCalendarHeartThinProps>;
export default LanCalendarHeartThin;
