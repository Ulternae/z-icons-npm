import React from 'react';

export interface LanCalendarTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimeRegular: React.FC<LanCalendarTimeRegularProps>;
export default LanCalendarTimeRegular;
