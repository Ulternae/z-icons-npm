import React from 'react';

export interface MinaCalendarDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarDownSolid: React.FC<MinaCalendarDownSolidProps>;
export default MinaCalendarDownSolid;
