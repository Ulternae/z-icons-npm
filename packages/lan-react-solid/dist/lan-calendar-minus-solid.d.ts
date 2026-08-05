import React from 'react';

export interface LanCalendarMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarMinusSolid(props: LanCalendarMinusSolidProps): React.ReactElement;
export default LanCalendarMinusSolid;
