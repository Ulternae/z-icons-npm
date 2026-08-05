import React from 'react';

export interface LanCalendarStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarStarSolid(props: LanCalendarStarSolidProps): React.ReactElement;
export default LanCalendarStarSolid;
