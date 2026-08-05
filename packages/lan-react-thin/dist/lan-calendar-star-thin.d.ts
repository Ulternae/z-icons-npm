import React from 'react';

export interface LanCalendarStarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarStarThin(props: LanCalendarStarThinProps): React.ReactElement;
export default LanCalendarStarThin;
