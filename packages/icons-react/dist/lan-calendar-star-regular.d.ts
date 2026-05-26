import React from 'react';

export interface LanCalendarStarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarStarRegular: React.FC<LanCalendarStarRegularProps>;
export default LanCalendarStarRegular;
