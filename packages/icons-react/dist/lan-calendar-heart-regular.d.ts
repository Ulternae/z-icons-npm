import React from 'react';

export interface LanCalendarHeartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarHeartRegular: React.FC<LanCalendarHeartRegularProps>;
export default LanCalendarHeartRegular;
