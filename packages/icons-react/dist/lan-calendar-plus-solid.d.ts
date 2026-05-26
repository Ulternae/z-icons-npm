import React from 'react';

export interface LanCalendarPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarPlusSolid: React.FC<LanCalendarPlusSolidProps>;
export default LanCalendarPlusSolid;
