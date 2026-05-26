import React from 'react';

export interface LanCalendarLinesPenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarLinesPen: React.FC<LanCalendarLinesPenProps>;
export default LanCalendarLinesPen;
