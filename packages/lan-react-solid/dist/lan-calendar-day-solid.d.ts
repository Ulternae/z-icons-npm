import React from 'react';

export interface LanCalendarDaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarDaySolid(props: LanCalendarDaySolidProps): React.ReactElement;
export default LanCalendarDaySolid;
