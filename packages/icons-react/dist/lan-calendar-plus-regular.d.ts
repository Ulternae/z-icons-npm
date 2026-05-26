import React from 'react';

export interface LanCalendarPlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPlusRegular: React.FC<LanCalendarPlusRegularProps>;
export default LanCalendarPlusRegular;
