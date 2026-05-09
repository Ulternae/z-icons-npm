import React from 'react';

export interface MinaCalendarMinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarMinus: React.FC<MinaCalendarMinusProps>;
export default MinaCalendarMinus;
