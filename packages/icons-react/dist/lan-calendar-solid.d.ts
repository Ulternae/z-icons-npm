import React from 'react';

export interface LanCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarSolid: React.FC<LanCalendarSolidProps>;
export default LanCalendarSolid;
