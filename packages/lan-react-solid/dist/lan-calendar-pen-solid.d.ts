import React from 'react';

export interface LanCalendarPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarPenSolid(props: LanCalendarPenSolidProps): React.ReactElement;
export default LanCalendarPenSolid;
