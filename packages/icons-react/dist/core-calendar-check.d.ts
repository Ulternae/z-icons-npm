import React from 'react';

export interface CoreCalendarCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarCheck: React.FC<CoreCalendarCheckProps>;
export default CoreCalendarCheck;
