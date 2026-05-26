import React from 'react';

export interface LanCalendarArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarArrowDown: React.FC<LanCalendarArrowDownProps>;
export default LanCalendarArrowDown;
