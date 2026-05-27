import React from 'react';

export interface CoreCalendarPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarPlus: React.FC<CoreCalendarPlusProps>;
export default CoreCalendarPlus;
