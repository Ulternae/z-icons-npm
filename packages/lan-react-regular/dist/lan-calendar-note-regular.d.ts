import React from 'react';

export interface LanCalendarNoteRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCalendarNoteRegular(props: LanCalendarNoteRegularProps): React.ReactElement;
export default LanCalendarNoteRegular;
