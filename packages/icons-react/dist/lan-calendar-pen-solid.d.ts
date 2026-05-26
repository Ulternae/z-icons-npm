import React from 'react';

export interface LanCalendarPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPenSolid: React.FC<LanCalendarPenSolidProps>;
export default LanCalendarPenSolid;
