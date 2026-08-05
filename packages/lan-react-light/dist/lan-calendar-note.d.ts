import React from 'react';

export interface LanCalendarNoteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarNote(props: LanCalendarNoteProps): React.ReactElement;
export default LanCalendarNote;
