import React from 'react';

export interface LanCalendarRangeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarRangeSolid(props: LanCalendarRangeSolidProps): React.ReactElement;
export default LanCalendarRangeSolid;
