import React from 'react';

export interface MinaCalendarXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarX: React.FC<MinaCalendarXProps>;
export default MinaCalendarX;
