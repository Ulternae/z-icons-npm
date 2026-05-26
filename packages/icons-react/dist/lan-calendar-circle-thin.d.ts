import React from 'react';

export interface LanCalendarCircleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleThin: React.FC<LanCalendarCircleThinProps>;
export default LanCalendarCircleThin;
