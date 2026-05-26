import React from 'react';

export interface LanCalendarTimeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimeThin: React.FC<LanCalendarTimeThinProps>;
export default LanCalendarTimeThin;
