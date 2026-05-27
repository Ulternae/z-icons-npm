import React from 'react';

export interface CoreCalendarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarSolid: React.FC<CoreCalendarSolidProps>;
export default CoreCalendarSolid;
