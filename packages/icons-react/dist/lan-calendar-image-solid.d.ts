import React from 'react';

export interface LanCalendarImageSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarImageSolid: React.FC<LanCalendarImageSolidProps>;
export default LanCalendarImageSolid;
