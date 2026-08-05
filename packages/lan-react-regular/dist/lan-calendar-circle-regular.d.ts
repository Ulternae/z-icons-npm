import React from 'react';

export interface LanCalendarCircleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleRegular(props: LanCalendarCircleRegularProps): React.ReactElement;
export default LanCalendarCircleRegular;
