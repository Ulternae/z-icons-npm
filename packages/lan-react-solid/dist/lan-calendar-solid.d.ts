import React from 'react';

export interface LanCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarSolid(props: LanCalendarSolidProps): React.ReactElement;
export default LanCalendarSolid;
