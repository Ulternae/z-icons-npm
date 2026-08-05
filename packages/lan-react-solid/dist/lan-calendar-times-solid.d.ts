import React from 'react';

export interface LanCalendarTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarTimesSolid(props: LanCalendarTimesSolidProps): React.ReactElement;
export default LanCalendarTimesSolid;
