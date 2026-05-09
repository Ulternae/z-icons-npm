import React from 'react';

export interface MinaCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarCheckSolid: React.FC<MinaCalendarCheckSolidProps>;
export default MinaCalendarCheckSolid;
