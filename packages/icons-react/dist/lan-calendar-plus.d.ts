import React from 'react';

export interface LanCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPlus: React.FC<LanCalendarPlusProps>;
export default LanCalendarPlus;
