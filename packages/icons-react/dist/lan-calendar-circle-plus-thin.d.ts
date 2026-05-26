import React from 'react';

export interface LanCalendarCirclePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCirclePlusThin: React.FC<LanCalendarCirclePlusThinProps>;
export default LanCalendarCirclePlusThin;
