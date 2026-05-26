import React from 'react';

export interface LanCalendarNoteThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarNoteThin: React.FC<LanCalendarNoteThinProps>;
export default LanCalendarNoteThin;
