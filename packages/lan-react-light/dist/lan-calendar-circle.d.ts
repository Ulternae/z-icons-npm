import React from 'react';

export interface LanCalendarCircleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircle(props: LanCalendarCircleProps): React.ReactElement;
export default LanCalendarCircle;
