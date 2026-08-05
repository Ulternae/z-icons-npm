import React from 'react';

export interface LanCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCheckSolid(props: LanCalendarCheckSolidProps): React.ReactElement;
export default LanCalendarCheckSolid;
