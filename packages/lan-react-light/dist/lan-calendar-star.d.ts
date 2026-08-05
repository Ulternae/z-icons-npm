import React from 'react';

export interface LanCalendarStarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarStar(props: LanCalendarStarProps): React.ReactElement;
export default LanCalendarStar;
