import React from 'react';

export interface LanCalendarCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCircleSolid: React.FC<LanCalendarCircleSolidProps>;
export default LanCalendarCircleSolid;
