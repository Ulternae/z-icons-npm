import React from 'react';

export interface LanCalendarStarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarStarSolid: React.FC<LanCalendarStarSolidProps>;
export default LanCalendarStarSolid;
