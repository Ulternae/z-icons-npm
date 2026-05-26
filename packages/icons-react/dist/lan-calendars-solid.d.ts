import React from 'react';

export interface LanCalendarsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarsSolid: React.FC<LanCalendarsSolidProps>;
export default LanCalendarsSolid;
