import React from 'react';

export interface MinaCalendarUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarUpSolid: React.FC<MinaCalendarUpSolidProps>;
export default MinaCalendarUpSolid;
