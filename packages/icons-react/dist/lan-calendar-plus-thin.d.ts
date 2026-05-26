import React from 'react';

export interface LanCalendarPlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPlusThin: React.FC<LanCalendarPlusThinProps>;
export default LanCalendarPlusThin;
