import React from 'react';

export interface LanCalendarCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleUser(props: LanCalendarCircleUserProps): React.ReactElement;
export default LanCalendarCircleUser;
