import React from 'react';

export interface LanCalendarNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCalendarNote: React.FC<LanCalendarNoteProps>;
export default LanCalendarNote;
