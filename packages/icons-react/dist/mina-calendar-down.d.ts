import React from 'react';

export interface MinaCalendarDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCalendarDown: React.FC<MinaCalendarDownProps>;
export default MinaCalendarDown;
