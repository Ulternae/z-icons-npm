import React from 'react';

export interface LanCalendarArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarArrowUp: React.FC<LanCalendarArrowUpProps>;
export default LanCalendarArrowUp;
