import React from 'react';

export interface LanCalendarCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleUser: React.FC<LanCalendarCircleUserProps>;
export default LanCalendarCircleUser;
