import React from 'react';

export interface LanCalendarTimeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimeSolid(props: LanCalendarTimeSolidProps): React.ReactElement;
export default LanCalendarTimeSolid;
