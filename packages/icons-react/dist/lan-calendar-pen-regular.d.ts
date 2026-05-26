import React from 'react';

export interface LanCalendarPenRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPenRegular: React.FC<LanCalendarPenRegularProps>;
export default LanCalendarPenRegular;
