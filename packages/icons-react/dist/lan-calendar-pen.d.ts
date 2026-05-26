import React from 'react';

export interface LanCalendarPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPen: React.FC<LanCalendarPenProps>;
export default LanCalendarPen;
