import React from 'react';

export interface LanCalendarCircleUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleUserThin(props: LanCalendarCircleUserThinProps): React.ReactElement;
export default LanCalendarCircleUserThin;
