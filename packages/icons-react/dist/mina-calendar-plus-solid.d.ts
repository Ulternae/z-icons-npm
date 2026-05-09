import React from 'react';

export interface MinaCalendarPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarPlusSolid: React.FC<MinaCalendarPlusSolidProps>;
export default MinaCalendarPlusSolid;
