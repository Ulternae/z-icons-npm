import React from 'react';

export interface LanCalendarStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarStar: React.FC<LanCalendarStarProps>;
export default LanCalendarStar;
