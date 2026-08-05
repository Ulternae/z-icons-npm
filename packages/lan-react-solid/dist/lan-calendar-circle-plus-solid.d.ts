import React from 'react';

export interface LanCalendarCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarCirclePlusSolid(props: LanCalendarCirclePlusSolidProps): React.ReactElement;
export default LanCalendarCirclePlusSolid;
