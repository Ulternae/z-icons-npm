import React from 'react';

export interface CoreCalendarCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreCalendarCheckSolid: React.FC<CoreCalendarCheckSolidProps>;
export default CoreCalendarCheckSolid;
