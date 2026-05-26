import React from 'react';

export interface LanCalendarCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleRegular: React.FC<LanCalendarCircleRegularProps>;
export default LanCalendarCircleRegular;
