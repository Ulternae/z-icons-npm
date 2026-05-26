import React from 'react';

export interface LanCalendarTimesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimesThin: React.FC<LanCalendarTimesThinProps>;
export default LanCalendarTimesThin;
