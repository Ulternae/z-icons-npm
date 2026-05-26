import React from 'react';

export interface LanCalendarDaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarDaySolid: React.FC<LanCalendarDaySolidProps>;
export default LanCalendarDaySolid;
