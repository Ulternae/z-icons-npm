import React from 'react';

export interface LanCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarCheckSolid: React.FC<LanCalendarCheckSolidProps>;
export default LanCalendarCheckSolid;
