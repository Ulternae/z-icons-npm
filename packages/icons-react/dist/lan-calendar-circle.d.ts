import React from 'react';

export interface LanCalendarCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircle: React.FC<LanCalendarCircleProps>;
export default LanCalendarCircle;
