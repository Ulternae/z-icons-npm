import React from 'react';

export interface LanCalendarCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleUserSolid: React.FC<LanCalendarCircleUserSolidProps>;
export default LanCalendarCircleUserSolid;
