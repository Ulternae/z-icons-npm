import React from 'react';

export interface MinaCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarPlus: React.FC<MinaCalendarPlusProps>;
export default MinaCalendarPlus;
