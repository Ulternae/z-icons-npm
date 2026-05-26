import React from 'react';

export interface LanCalendarCircleMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleMinusThin: React.FC<LanCalendarCircleMinusThinProps>;
export default LanCalendarCircleMinusThin;
