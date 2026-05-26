import React from 'react';

export interface LanCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCheck: React.FC<LanCalendarCheckProps>;
export default LanCalendarCheck;
