import React from 'react';

export interface LanCalendarAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarAlt: React.FC<LanCalendarAltProps>;
export default LanCalendarAlt;
