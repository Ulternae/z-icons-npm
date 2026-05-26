import React from 'react';

export interface LanCalendarMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarMinusSolid: React.FC<LanCalendarMinusSolidProps>;
export default LanCalendarMinusSolid;
