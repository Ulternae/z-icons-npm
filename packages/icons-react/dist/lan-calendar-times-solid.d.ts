import React from 'react';

export interface LanCalendarTimesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarTimesSolid: React.FC<LanCalendarTimesSolidProps>;
export default LanCalendarTimesSolid;
