import React from 'react';

export interface LanCalendarMinusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarMinusRegular: React.FC<LanCalendarMinusRegularProps>;
export default LanCalendarMinusRegular;
