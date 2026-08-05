import React from 'react';

export interface LanCalendarPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPlusSolid(props: LanCalendarPlusSolidProps): React.ReactElement;
export default LanCalendarPlusSolid;
