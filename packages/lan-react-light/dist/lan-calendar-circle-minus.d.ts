import React from 'react';

export interface LanCalendarCircleMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleMinus(props: LanCalendarCircleMinusProps): React.ReactElement;
export default LanCalendarCircleMinus;
