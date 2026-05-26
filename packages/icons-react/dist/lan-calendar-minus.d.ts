import React from 'react';

export interface LanCalendarMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarMinus: React.FC<LanCalendarMinusProps>;
export default LanCalendarMinus;
