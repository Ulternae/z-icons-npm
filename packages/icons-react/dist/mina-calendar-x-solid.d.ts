import React from 'react';

export interface MinaCalendarXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarXSolid: React.FC<MinaCalendarXSolidProps>;
export default MinaCalendarXSolid;
