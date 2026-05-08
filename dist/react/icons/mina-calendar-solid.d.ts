import React from 'react';

export interface MinaCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarSolid: React.FC<MinaCalendarSolidProps>;
export default MinaCalendarSolid;
