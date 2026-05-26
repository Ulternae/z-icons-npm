import React from 'react';

export interface LanCalendarTimeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTime: React.FC<LanCalendarTimeProps>;
export default LanCalendarTime;
