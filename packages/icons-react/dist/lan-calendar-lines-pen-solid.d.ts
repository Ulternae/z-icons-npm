import React from 'react';

export interface LanCalendarLinesPenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarLinesPenSolid: React.FC<LanCalendarLinesPenSolidProps>;
export default LanCalendarLinesPenSolid;
