import React from 'react';

export interface LanCalendarsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarsThin: React.FC<LanCalendarsThinProps>;
export default LanCalendarsThin;
