import React from 'react';

export interface LanCalendarCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCircleSolid(props: LanCalendarCircleSolidProps): React.ReactElement;
export default LanCalendarCircleSolid;
