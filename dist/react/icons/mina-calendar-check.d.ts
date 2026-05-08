import React from 'react';

export interface MinaCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarCheck: React.FC<MinaCalendarCheckProps>;
export default MinaCalendarCheck;
