import React from 'react';

export interface LanCalendarCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleUserSolid(props: LanCalendarCircleUserSolidProps): React.ReactElement;
export default LanCalendarCircleUserSolid;
