import React from 'react';

export interface LanCalendarWeekSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarWeekSolid(props: LanCalendarWeekSolidProps): React.ReactElement;
export default LanCalendarWeekSolid;
