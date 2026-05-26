import React from 'react';

export interface LanCalendarUsersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarUsersSolid: React.FC<LanCalendarUsersSolidProps>;
export default LanCalendarUsersSolid;
