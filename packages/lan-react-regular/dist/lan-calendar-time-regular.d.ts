import React from 'react';

export interface LanCalendarTimeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimeRegular(props: LanCalendarTimeRegularProps): React.ReactElement;
export default LanCalendarTimeRegular;
