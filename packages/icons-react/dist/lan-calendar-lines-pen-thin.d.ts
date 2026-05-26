import React from 'react';

export interface LanCalendarLinesPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarLinesPenThin: React.FC<LanCalendarLinesPenThinProps>;
export default LanCalendarLinesPenThin;
