import React from 'react';

export interface LanCalendarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarsSolid(props: LanCalendarsSolidProps): React.ReactElement;
export default LanCalendarsSolid;
