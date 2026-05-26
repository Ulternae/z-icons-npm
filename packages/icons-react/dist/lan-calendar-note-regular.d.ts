import React from 'react';

export interface LanCalendarNoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarNoteRegular: React.FC<LanCalendarNoteRegularProps>;
export default LanCalendarNoteRegular;
