import React from 'react';

export interface LanCalendarCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleMinus: React.FC<LanCalendarCircleMinusProps>;
export default LanCalendarCircleMinus;
