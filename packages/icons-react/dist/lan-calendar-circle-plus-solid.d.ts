import React from 'react';

export interface LanCalendarCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCirclePlusSolid: React.FC<LanCalendarCirclePlusSolidProps>;
export default LanCalendarCirclePlusSolid;
