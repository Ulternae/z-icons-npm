import React from 'react';

export interface LanCalendarCirclePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCirclePlusRegular: React.FC<LanCalendarCirclePlusRegularProps>;
export default LanCalendarCirclePlusRegular;
