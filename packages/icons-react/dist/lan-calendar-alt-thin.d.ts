import React from 'react';

export interface LanCalendarAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarAltThin: React.FC<LanCalendarAltThinProps>;
export default LanCalendarAltThin;
