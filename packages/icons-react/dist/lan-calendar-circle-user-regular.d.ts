import React from 'react';

export interface LanCalendarCircleUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleUserRegular: React.FC<LanCalendarCircleUserRegularProps>;
export default LanCalendarCircleUserRegular;
