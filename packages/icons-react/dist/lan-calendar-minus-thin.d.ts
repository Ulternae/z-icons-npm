import React from 'react';

export interface LanCalendarMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarMinusThin: React.FC<LanCalendarMinusThinProps>;
export default LanCalendarMinusThin;
